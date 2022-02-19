import { useState } from 'react';

import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './style';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>A melhor pizza de todos os tempos</HeroH1>
          <HeroP>Pronta em 60 segundos</HeroP>
          <HeroBtn>Encomendar</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}