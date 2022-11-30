import React from 'react'
import NavBar from '../../components/organisms/NavBar/NavBar'
import Menu  from '../../components/organisms/Menu/Menu'
import Wrapper from '../../components/organisms/Wrapper/Wrapper'

export default  function LayoutHome() {
  return (
    <> 
      <NavBar/>
      <Menu/>
      <Wrapper></Wrapper>
    </>
  )
}
