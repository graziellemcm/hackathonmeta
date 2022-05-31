import styled from 'styled-components'
import background from '../../Components/img/background.png';

export const LogoImage = styled.img`
width: 250px;
height: 104px;
`

export const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 17px 17px 0 0;
background-color: #fff;
width: 30%;
padding-bottom: 5%;


form{
  display: flex;
  flex-direction: column;
}

input{
  
}

`

export const Background = styled.div `
background-image: url(${background});
width: 100%;
height: 100vh;
background-size: cover;

 `
export const Layout = styled.div`
display: flex;
justify-content: end;
margin-right: 10%;


`


