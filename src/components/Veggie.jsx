import { useEffect,useState } from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
function Veggie() {
    const[veggie,setVeggie]=useState([]);
    useEffect(()=>{
        getVeggie();
    },[]);
    const getVeggie=async ()=>{
        const check=localStorage.getItem('veggie');
        if(check)
        {
            setVeggie(JSON.parse(check));
        }
        else{
            const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data=await api.json();
            localStorage.setItem("veggie",JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data);
        }
       
    }
  return (
         <div>              
        <Wrapper>
                    <h3>Our Vegetarian Picks</h3>
                    <Splide options={{
                        perPage:3,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap: '30px'
                        
                    }}
                    >
                    {veggie.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                              <Link to={'/recipe/' + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                            <Gradient></Gradient>
                            </Link>
                            </Card>
                            </SplideSlide>
                        )
                       
                    })}
                    </Splide>
                </Wrapper>         
</div>
  )
}  
  const Wrapper =styled.div`
  margin: 10px 0px;
`;
const Card=styled.div`
min-height: 275px; 
border-radius: 20px;
overflow: hidden;
position: relative;
  img {
    border-radius: 10px;
    position:absolute;
    left: 0;
    height: 100%;
    width:100%;
    object-fit: cover;
  }
  p 
  {
     position: absolute;
     z-index: 10;
     left: 50%;
     bottom: 0%;
     transform: translate(-50%,0%);
     color:white;
     text-align: center;
     font-weight: 600;
     font-size: 15px;
     height: 40%;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  @media(max-width:500px)
  {
     min-height: 150px;
     border-radius: 3px;
     img{
      border-radius: 0px;
     }
     p{
      font-size: 7px;
     }
   
  }
`;

const Gradient=styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;


export default Veggie