import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assets/commerce.png";
import usestyles from './styles'
import { Link, useLocation } from 'react-router-dom'
const Navbar = ({ totalItems }) => {
    const classes = usestyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6"  color="inherit" style={{'width': '7%' , 'padding': '5px','margin': '5px'}}>
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                        HOME              
                    </Typography>
                    <Typography component={Link} to="/products" variant="h6"  color="inherit" style={{'width': '7%' , 'padding': '5px','margin': '5px'}}>
                        Products              
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && (

                        <div className={classes.button}>


                            <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit" >
                                <Badge badgeContent={totalItems} color="secondary" >
                                    <ShoppingCart />
                                </Badge>

                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
