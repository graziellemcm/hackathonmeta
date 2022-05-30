import styled from 'styled-components'

export const Layout = styled.div`
display: grid ;
justify-content: space-around;
min-width: 200px { grid-template-columns: repeat(2, 1fr); };
max-width: 500px{ grid-template-columns: 25rem 25rem 40rem;}
margin-right: 24px;
;

grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`
export const Star = styled.img`
height: 16px;

`
export const TeamImg = styled.img`
height: 12px;

`
export const HeaderProfile = styled.div`
display: flex;
justify-content: space-between;
margin-right: 8px;
margin-left: 8px;
box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
`
export const LeaguerCardHeader = styled.div`
display:flex;
background-color:#f5f5f5 ;
/* grid-gap: 5rem; */
padding:5rem;
margin: 0px 8px 8px 8px;
color: black;

box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
 

`


export const PhotoProfile = styled.img`
height:104px;
width: 104px;  
top: 170px;
position: absolute;
`
export const NameProfile = styled.span`
 
top: 170px;
left:240px; 
position: absolute;
`
export const TeamProfile = styled.span`
 
top: 195px;
left:240px; 
position: absolute;
`
export const PhaseProfile = styled.span`
 
top: 220px;
left:240px; 
position: absolute;
`
export const MentorProfile = styled.span`
 
top: 245px;
left:240px; 
position: absolute;
`
export const WorkingSinceProfile = styled.span`
 
top: 270px;
left:240px; 
position: absolute;
`
export const Phase = styled.div`
color: #122870;
	background-color: #FEBB0B;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 7px;
	position: absolute;
	top: 160px;
	left:35px; 
`


export const CardContainerLeaguer = styled.div`
  background-color: #231E39;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding-top: 30px;
	position: relative;
	width: 350px;
	max-width: 100%;
	text-align: center;
	
`;

export const CardMediaLeaguer = styled.div`
background-color: #122870;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
    margin-top: 16px;
    margin-left: 8px;
    margin-right: 8px;
	padding-top: 10px;

	width: 800px;
	max-width: 100%;
	text-align: center;
	
`;
export const CardWorkingSince = styled.div`
background-color: #122870;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
    margin-top: 16px;
    margin-left: 8px;
    margin-right: 8px;
	padding-top: 10px;

	width: 800px;
	max-width: 100%;
	text-align: start;
	
`;

export const CardProfileLeaguer = styled.div`
background-color: #122870;
display: grid;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
    margin-top: 16px;
    margin-left: 16px;
	padding-top: 8px;
	padding-left: 8px;
	padding-right: 8px;
    align-self: center;
	align-items: center;
	width: 500px;
	max-width: 100%;
	text-align: center;
	place-items: center;
	
`
export const Center = styled.div`
display: grid;
justify-content: center;
align-self: center;
background-color: #122870;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
 margin-top: 24px;
 margin-left: 16px;
 margin-right: 16px;
padding: 8px;
	
`;
export const H5 = styled.h4`
padding: 8px;
margin: 0px;
font-weight: bold;
`;

export const ULLeaguer = styled.div`
list-style: none;
margin-left: 24px;
margin-bottom: 8px;
display: grid;
grid-template-columns:1fr 1fr ;



`;

export const CenterTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-self: center;
`;




