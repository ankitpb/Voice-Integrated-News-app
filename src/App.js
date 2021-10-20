import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import useStyles from './Style.js';

import NewsCards from './Componenets/NewsCards/NewsCards';

const alanKey = 'eae5235dc64ccac740024fa22c86c7a12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =  () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    
    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand: ({ command, articles }) =>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                 }else if(command === 'highlight'){
                     setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                 }
            }
        })
    }, [])
    
    return(
        <div>
            <div className={classes.logoContainer}>
               {/*<img src="C:\Users\Admin\Desktop\memories_project\client\public" className={classes.alanLogo} alt="alan logo" />*/}
            </div>
            <NewsCards articles={newsArticles} activeArtice={activeArticle}/>
        </div>
    );
}


export default App;