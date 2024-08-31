import Title from "../../components/Title"
import React from 'react';
import Project from "../../components/Project";
import { List } from "./styles";

export default function Projects(){
  return(
  <section>
    <Title fontSize={16}>Projetos</Title>
    <List>
      <li>
        <Project></Project>
      </li>
      <li>
        <Project></Project>
      </li>
      <li>
        <Project></Project>
      </li>
      <li>
        <Project></Project>
      </li>
      <li>
        <Project></Project>
      </li>
      <li>
        <Project></Project>
      </li>
    </List>
  </section>
  )
}
