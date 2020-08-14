import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


function NewsCard({article}){
    return(
        <div>
      <Card>
        <CardImg top width="50%" src={article.urlToImage} alt="Card image cap" />
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardSubtitle>{article.author}</CardSubtitle>
          <CardText>{article.description}</CardText>
        </CardBody>
      </Card>
    </div>
    );
}

export default NewsCard;
