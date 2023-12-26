import { makeStyles } from "@material-ui/core";
import { Header } from "../components/Header";



export const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <h1>Profile</h1>
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));