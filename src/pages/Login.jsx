import { makeStyles } from "@material-ui/core";



export const Login = () => {
  const classes = useStyles();
  return (
    <h1>Login</h1>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));