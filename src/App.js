import React, {useState,useEffect} from 'react'; // react Hook
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

// { "key" : "value"  } --  JSON
// { key : value }  JS Object

const alanKey = '8d74d2710da179aca51b9aeac2baaa6a2e956eca572e1d8b807a3e2338fdd0dc/stage';



function App(){  //functional component

    const [newsArticles,setNewsArticles] = useState([]);

    useEffect( () => {
        
        alanBtn({
            key : alanKey,
            onCommand : ({command , articles}) => {
                if(command === "newHeadlines"){
                    setNewsArticles(articles);
                    console.log(articles);
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
           <h1>Alan AI News Application</h1>
           <NewsCards articles={newsArticles} />
        </div>
    );
}

//Arrow Function
// const App = () => {

// }

export default App;

// const ex = "shruti";

// const str = `my ex is ${ex} `;