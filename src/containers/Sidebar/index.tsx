import React from 'react';

import Avatar from '../../components/Avatar';
import Title from "../../components/Title"
import Paragraph from '../../components/Paragraph';
import { BotaoTema, Description, SidebarContainer } from './styles';

const Sidebar =() => (
  <aside>
    <SidebarContainer>
      <Avatar/>
      <Title fontSize={20}>Diego Sanchez</Title>
      <Paragraph type='secundario' fontSize={16} >
        Deigio1989
        </Paragraph>
      <Description type='principal' fontSize={12}>
        Desenvolvedor Full Stack
        </Description>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
