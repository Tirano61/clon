import { makeStyles } from "@material-ui/core";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";


export const Home = () => {
  const classes = useStyles();
  return (
    <div className={ classes.root}>
      <Header />
      <Banner />
   
    </div>
    
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#5F5F5E'
  },
}));