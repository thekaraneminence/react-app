import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
        fontSize: '28px',
        fontWeight: 'bold',
    },
    menu: {
        display: 'inherit',
        '& a': {
            color: '#fff',
            textDecoration: 'none',
        }
    },
    button: {
        position: 'absolute',
        right: '20px',
    }
};

class Header extends React.Component {
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <header>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1" color="inherit" className={classes.grow}>
                            Logo
                        </Typography>
                        <MenuList className={classes.menu}>
                            <MenuItem><Link to='/'>Home</Link></MenuItem>
                            <MenuItem><Link to='/about'>About</Link></MenuItem>
                            <MenuItem><Link to='/contact'>Contact</Link></MenuItem>
                        </MenuList>
                        <Button color="inherit" className={classes.button}>Login</Button>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
       );
    }
 }
 Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(Header);