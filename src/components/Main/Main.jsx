import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

import useStyles from './style'
const Main = ({categories}) => {
    const classes = useStyles();

  
    return (
        <>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="./bg.png" 
             />
            <CardContent>
                <div className={classes.cardContent}>

                    <Typography variant="h4" color='textSecondary' >
                          get to 30% sale    
                    </Typography>
                </div>
                 
            </CardContent>
           
            <CardActions disableSpacing className={classes.cardActions} >
                <Link  to="/products" style={{'border': '2px solid #ccc', 'padding': '2px'}} className={classes.link}> shop now
                </Link>
            </CardActions>
            
        </Card>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="./bg-4.png" 
             />
            <CardContent>
                <div className={classes.cardContent}>

                    <Typography variant="h4" color='textSecondary' >
                          Order Now     
                    </Typography>
                </div>
                 
            </CardContent>
           
            <CardActions disableSpacing className={classes.cardActions} >
                <Link  to="/products" style={{'border': '2px solid #ccc', 'padding': '2px'}} className={classes.link}> shop now
                </Link>
            </CardActions>
            
        </Card>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="./bg-3.png" 
             />
            <CardContent>
                <div className={classes.cardContent}>

                    <Typography variant="h4" color='textSecondary' >
                          Order Now     
                    </Typography>
                </div>
                 
            </CardContent>
           
            <CardActions disableSpacing className={classes.cardActions} >
                <Link  to="/products" style={{'border': '2px solid #ccc', 'padding': '2px'}} className={classes.link}> shop now
                </Link>
            </CardActions>
            
        </Card>
        <Typography color='textSecondary' style={{textAlign: 'center'}}> created by <a  style={{textDecoration:'none'}}href="https://www.linkedin.com/in/sandy-mohammed-873b821bb/">Sandy Mohammed</a></Typography>
        </>
    )
    
}

export default Main
