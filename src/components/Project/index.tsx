import React from "react"

import { Card , LinkButton} from "./styles"

import Title from "../Title"
import Paragraph from "../Paragraph"


const Project = () => (
  <Card>
    <Title>
      Projeto Lista de Tarefas
    </Title>
    <Paragraph type="secundario">
      Lista de tarefas feita com VueJS
    </Paragraph>
    <LinkButton>
      Visualizar
    </LinkButton>
  </Card>
)

export default Project;
