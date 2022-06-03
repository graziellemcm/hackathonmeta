import styled from 'styled-components';

export const HomeStyled = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;

`;

export const CardHome = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
min-width: 200px { grid-template-columns: repeat(2, 1fr); };
max-width: 500px{ grid-template-columns: 25rem 25rem 40rem;}
margin-right: 24px;;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`;
export const FilterImg = styled.img`
height: 16px;
align-self: center;
margin-left: 8px;
`
export const CardFilter = styled.div`
display: flex;
flex-direction: column;
background-color: white;
justify-content: start;

`;


export const ListLeaguers = styled.h1`
display: flex;
background-color: white;
justify-content: center;
`;
export const HomeHeader = styled.p`
display: flex;
align-self: center;
justify-content: center;


`;
export const LeaguerCard = styled.div`
display:flex;
flex-direction: row;
background-color:#f5f5f5 ;
/* grid-gap: 5rem; */
padding:2.5rem;
margin: 8px 8px 8px 8px;
color: black;
border-radius: 10px;
align-items: center;
justify-content: space-around;
box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
cursor: pointer;
`
export const CardLeaguer = styled.div`


`
export const MentorImg = styled.img`
height: 16px;
margin-right: 4px;


`


