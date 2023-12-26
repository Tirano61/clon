import { makeStyles } from "@material-ui/core";




export const SignUp = () => {
  const classes = useStyles();
  return (
    <h1>SignUp</h1>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));