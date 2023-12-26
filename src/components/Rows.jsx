import { makeStyles } from "@material-ui/core";



export const Rows = () => {
  const classes = useStyles();
  return (
    <div>Row</div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));