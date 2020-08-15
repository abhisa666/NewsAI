import React, {useState,useEffect} from 'react'; // react Hook
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';

import useStyles from './styles';


// { "key" : "value"  } --  JSON
// { key : value }  JS Object

const alanKey = '8d74d2710da179aca51b9aeac2baaa6a2e956eca572e1d8b807a3e2338fdd0dc/stage';



function App(){  //functional component

    const classes = useStyles();

    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles,setNewsArticles] = useState([]);

    useEffect( () => {
        
        alanBtn({
            key : alanKey,
            onCommand : ({command , articles,number }) => {
                if(command === "newHeadlines"){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command === "highlight"){
                    setActiveArticle( (prevActiveArticle) => prevActiveArticle+1 );
                }else if(command === "open"){
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }
                
            } ,
        });

        // fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb4edf2ff011453a816fa146787007ce")
        //     .then( response => response.json())
        //     .then( data => console.log(data));

        // console.log("Abhishek");




    } , []  )

    return(
        <div >

           <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" alt="logo" className={classes.alanLogo} ></img>
           </div>

           <NewsCards articles={newsArticles} activeArticle={activeArticle} />

        </div>
    );
}

//Arrow Function
// const App = () => {

// }

export default App;

// const ex = "shruti";

// const str = `my ex is ${ex} `;