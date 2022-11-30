import './styles/styles.css'
import  LoginPage from './pages/loginPage/loginPage'
import { useContext } from 'react'
import { ThemeContext } from './context/colorModeContext'


export default function App() {
  const { toggleDark, dark } = useContext(ThemeContext);
  console.log(dark, 'theme de context')

  return (
     <>
      <LoginPage/>
      {/*<button onClick={()=>{toggleDark?.()}}>Cambiar</button> */}
     </>
  )
}

