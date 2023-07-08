import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
function Search() {
    const [input,setInput]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/" + input);
    };
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />  
        </div>      
    </FormStyle>
  )
}
const FormStyle=styled.form`
     margin: 0% 20%;
     div{
        position:relative;
        width:100%;
     }
  input{
    border: none;
    background:linear-gradient(35deg,#1c1a1a,#3c3939);
    font-size: 15px;
    color:white;
    padding:20px 20px 20px 40px;
    border-radius: 15px;
    width: 100%;
  }
  svg{
    position:absolute;
    top:20%;
    left:0%;
    color:white;
    transform: translate(100%,50%);
  }
  @media(max-width:500px){
    margin: 0% 10%;
    input{
      border-radius: 7px;
      padding: 5px 5px 10px 20px;
    }
    svg{
      top:7%;
    }
  }
`;
export default Search