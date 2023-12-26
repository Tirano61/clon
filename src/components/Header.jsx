import { AppBar, Avatar, IconButton, Toolbar, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideHeader);
    return () => {
      window.removeEventListener('scroll', hideHeader);
    }
  }, []);
 
  return (
    <AppBar elevation={0} className={ `${classes.root} ${ show && classes.transparent} `  } >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={ () => navigate('/') }>
          <img src="../../src/assets/logo.png" alt="logo" className={ classes.logo } />
        </IconButton>
        <Avatar
          variant="square"
          className={classes.appbar_avatar}
          onClick={ () => navigate('/profile') }
        />
      </Toolbar>
    </AppBar>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#111'
  },
  logo: {
    height: '50px',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  appbar_avatar: {
    cursor: 'pointer',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));