import {FaPizzaSlice,FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger></FaHamburger>
            <h4>American </h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles></GiNoodles>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks></GiChopsticks>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}
const List=styled.div`
display:flex;
justify-content: center;
margin: 20px 0px;
@media(max-width:550px){
    margin: 15px 0px;
  }
`;
const SLink=styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  background:linear-gradient(35deg,#494949,#313131);
  border-radius: 50%;
  height:75px;
  width:75px;
  cursor:pointer;
  transform: scale(0.8);
  h4{
    color:white;
    font-size:13px;
  }
  svg{
    color:white;
  }
  &.active{
    background: #c96d1d;
    svg{
        color: white;
    }
    h4{
        color: white;
     }
  }
  @media(max-width:500px){
    margin-right:0px;
    height:65px;
    width:65px;
    h4{
      font-size:10px;
    }
  }
`;
export default Category