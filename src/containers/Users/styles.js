import styled from "styled-components";

import Background from "../../assets/tec.png";

export const Container = styled.div `
   background-image: url("${Background}");
   background-size: cover;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 50px;
   border-radius: 10px;
   height: 130vh;
`;

export const Image = styled.img `
   margin-top: 30px;
   border-radius: 30px;
   width: 100px;
`;

export const ContainerItens = styled.div`
   background: linear-gradient(
      157,44deg,
      rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255,0.15) 100%
   );
   background-color: #ffeeaa;
   border-radius: 61px 61px 0px 0px;
   padding: 50px 36px;
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

export const H1 = styled.h1`
   font-style: normal;
   font-weight: bold;
   font-size: 65px;
   line-height: 30px;
   text-align: center;
   color: #ffaaff;
   margin-bottom: 80px;
`;

export const Button = styled.button`
   width: 342px;
   height: 74px;
   margin-top: 130px;

   background: transparent;
   border-radius: 15px;
   border: 1px solid #FFFFFF;

   font-style: normal;
   font-weight: bold;
   font-size: 35px;
   line-height: 30px;

   color: #FFFFFF;
   
   cursor: pointer;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   Img{
      width: 40px;
      transform: rotateY(180deg);
   }

   &:hover{
      opacity: 0.8;
   }
   &:active{
      opacity: 0.5;
   }
`;