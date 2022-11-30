import { ThemeContext } from '../../context/colorModeContext';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react'
import LayoutAuth from '../../layouts/LayoutAuth/LayoutAuth'
import { useStyles } from './styles';


export default function LoginPage() {
  const {dark, toggleDark} = useContext(ThemeContext);
  
  const classes = useStyles();
  return (
    <LayoutAuth urlImg='loginLight.png'>
        <form action="#" className={classes.containerForm}>
        <h2 onClick={()=>{toggleDark?.()}} className={classes.iconMode}>{dark ? "🌙" : "🌞"}</h2>
        <h3>Bienvenido a <span className={classes.titleLogo}>LiTasks</span></h3>
        <Button
              type="button"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.newButton}
            >Ingresa con tu cuenta de Google</Button>
            <br />
            <br />
            <Divider><span className={classes.textGray}>o</span></Divider>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
         />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.newButton}
            >Ingresar</Button>
             <br />
             <br />
             <Typography variant="body1">
                Aun no estás registrado <span className={classes.titleLogo}>Crea un cuenta</span>
            </Typography>
        </form>
    </LayoutAuth>
  )
}