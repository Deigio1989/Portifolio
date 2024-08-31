import Paragraph from "../../components/Paragraph"
import Title from "../../components/Title"
import React from "react"
import { GithubSection } from "./styles"

const About = () =>(
  <section>
  <Title fontSize={16}> Sobre mim</Title>
  <Paragraph type="secundario">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, error facilis non voluptatibus amet provident voluptatem architecto cum laborum cupiditate totam optio facere hic voluptas ea, veniam nam sequi eos!
  </Paragraph>
  <GithubSection>
  <img src="https://github-readme-stats.vercel.app/api?username=Deigio1989&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Deigio1989&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSection>
</section>
)

export default About
