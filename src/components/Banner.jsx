import { Button, Typography, makeStyles } from "@material-ui/core";



export const Banner = () => {
  const classes = useStyles();

  const truncate = (string, n) => {
    return string?.length > n
      ? `${string?.substr(0, n - 1)} ...`
      : string
  }
  
  return (
    <div className={classes.root}>
      <div className={ classes.content }>
        <Typography variant="h2" component="h1">
          Movi Title
        </Typography>
        <div className={ classes.buttons }>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography className={ classes.description } variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat eaque harum! Aperiam
          recusandae corporis animi vero aut adipisci nostrum ad? Architecto aliquam sequi laborum
          accusantium voluptates, sapiente amet vero incidunt tempore animi libero commodi modi in
          itaque at quis dolore exercitationem sed ipsa voluptatem nisi perferendis. Amet, sed
          consectetur.
        </Typography>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: 'url(../../src/assets/captura.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    height: '440px',
    width: '100%',
    backgroundPosition: 'left',
   
  },
  content: {
    
  },
  buttons: {
    '& button': {
      cursor: 'pointer',
      color: '#fff',
      borderRadius: '5px',
      fontWeight: 700,
      marginRight: '1rem',
      padding: theme.spacing(1,4,1,4),
      backgroundColor: 'rgba( 51,51,51, 0.6 )'
    },
    '& button:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6'
    }
  },
  description: {
    
  }

}));