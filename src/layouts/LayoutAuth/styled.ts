import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((urlImg:string) => ({
    root:{
        height: '100vh',
    },
    containerImage:{
        backgroundImage: `url("loginLight.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor:'#f9f2fd'
    },
    containerForm:{
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 90px'
    }
}))