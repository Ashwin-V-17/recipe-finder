import Pages from "./pages/Pages";
import Category from "./components/Category"
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
         <GiKnifeFork/>
         <Logo to={"/"}>deliciouss</Logo>
      </Nav>
      <Search></Search>
      <Category></Category>
      <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}
const Logo=styled(Link)`
 text-decoration: none;
 font-size: 20px;
 font-weight: 200;
 font-family: 'Lobster Two',cursive;
 color:black;
 
`;
const Nav=styled.div`
 padding: 40px 0px ;
 display: flex; 
 justify-content: flex-start;
 align-items: center;
 @media(max-width:450px){
     padding: 15px 0px;
  }
 svg{
  font-size: 20px;
 }
`;
export default App;
 