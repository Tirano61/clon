

import { makeStyles } from '@material-ui/core';


export const Plans = () => {
  const classes = useStyles();
  return (
    <div>Plans</div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));