import React from 'react';
import {Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia} from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './Style.js'

const NewsCard = ({article: { descrption, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => { //for every article 
    const classes = useStyles()
    
    return (
        <Card className={classNames(classes.card,activeArticle === i ? classes.activeCard: null)}>
            <CardActionArea href={url} target= "_blank">
                <CardMedia className={classes.media}  image={urlToImage || 'https://images.app.goo.gl/heq1Tyoc2vS2vVdd9'} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" components="p">{descrption}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>   
            </CardActions>
        </Card>
    )
}

export default NewsCard;