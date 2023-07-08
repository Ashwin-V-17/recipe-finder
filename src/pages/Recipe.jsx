import { useEffect,useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
 
import React from 'react'

function Recipe() {
    let params= useParams();
    const [details,setDetails]= useState({});
    const [activeTab,setActiveTab]=useState("instructions");
    const fetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData=await data.json();
        setDetails(detailData);
    }
    useEffect(()=>{
        fetchDetails();
    },[params.name]);

  return (
    <DetailedWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button  className={activeTab === "instructions" ?"active":""} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab === "ingredients" ?"active":""} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
            {activeTab=== 'instructions' &&(
            <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.insrtuctionse}}></h3>
            </div>
        ) }
         {activeTab === "ingredients"&& (
            <ul>
                {details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        )
        }
        </Info>
    
    </DetailedWrapper>
  )
}
const DetailedWrapper=styled.div`
margin-top:100px;
display: flex;
.active{
     background:linear-gradient(35deg,#1c1a1a,#3c3939);
    color:white;
}
img{
    height: 300px;
    width:400px;
}
h3{
    color:black;
    font-size: 18px;
}
h2{
    margin-bottom: 30px;
}
li{
    font-size: 20px;
}
ul{
    margin-top:20px;
}
`;
const Button=styled.button`
padding: 15px 20px;
color:#313131;
background: white;
border: 2px solid black;
font-weight:600;
margin-right:20px;
`;
const Info=styled.div`
margin-left:50px;
`;
export default Recipe