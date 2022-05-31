import background from "../../Components/img/background.png"
import metalogin from "../../Components/img/metalogin.png"
import styled from 'styled-components'

export const PhotoLogin = styled.div`
background-image: url(${background});
width: 100%;
height: 100vh;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 700px) {
   flex-direction: column;
   justify-content: end;
}
`;
export const DivLogofeedback = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
`;
export const DivRectangleLogin = styled.div`
display: flex;
align-items: end;
justify-content: center;
width: 50%;
height: 100vh;

@media screen and (max-width: 700px) {
  width: 70%;
  height: 70vh;
}
`;

export const Logofeedback = styled.img`
width: 40%;
height: 20%;
display: flex;

@media screen and (max-width: 700px) {
   width: 90%;
   height: 70%;
   justify-content: center;
}
`;

export const RectangleLogin = styled.div`
display: flex;
width: 505.87px;
height: 730px;
flex-direction: column;
`;

export const Form = styled.form`
background: #FFFFFF;
border-radius: 16.9565px 16.9565px 0px 0px;
display: flex;
flex-direction: column;
align-items: center;
height: 730px;

`;

export const Logometa = styled.img`
width: 50%;
margin: 10% 10%; 
`;

export const CardButton = styled.div`
display: flex;
`;



