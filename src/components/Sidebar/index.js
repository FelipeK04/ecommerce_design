import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './style';


export default function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="pizza">Pizzas</SidebarLink>
        <SidebarLink to="dessert">Sobremesas</SidebarLink>
        <SidebarLink to="/">Menu completo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Reservar já</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}