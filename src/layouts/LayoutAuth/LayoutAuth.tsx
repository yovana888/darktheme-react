import Grid from '@mui/material/Grid';
import { useStyles } from './styled';

interface Props {
    children: JSX.Element | JSX.Element[];
    urlImg:string
}

export default  function LayoutAuth({ children, urlImg }: Props) {
  const classes = useStyles('loginLight.png');
  return (
    <> 
      <Grid container component="main" className={classes.root}>
         <Grid item display={{ xs:"none", sm: "none", md: "block" }} md={5}  className={classes.containerImage}/>
         <Grid container item sm={12} md={7} className={classes.containerForm}>
            {children}
         </Grid>
      </Grid>
    </>
  )
}
