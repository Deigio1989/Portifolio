import styled from "styled-components";
import { P } from "../../components/Paragraph/styles";

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
  @media(max-width: 768px){
    margin-top: 16px;
  margin-bottom: 16px;

  }
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color:${(props) => props.theme.bgColor};
  font-size: 10;
  font-weight: bold;
  background-color: ${(props) => props.theme.color1};
  cursor: pointer;

`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  @media(max-width: 768px){
    text-align: center;
    margin-bottom: 16px;



  }
`

