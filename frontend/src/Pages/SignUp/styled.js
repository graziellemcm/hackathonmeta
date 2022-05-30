import styled from 'styled-components'
import background from '../../Components/img/fotobackground.jpg';

export const LogoImage = styled.img`
width: 250px;
height: 104px;
`

export const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px ;
border-radius: 5px;
justify-content: center;
gap: 2px;

form{
  display: flex;
  flex-direction: column;
}

input{
  
}

`

export const Background = styled.div `
border: 1px solid #000;
background-image: url(${background});
width: 100%;
height: 1056px;
background-size: cover;
 `
export const Layout = styled.div`
display: grid;


`