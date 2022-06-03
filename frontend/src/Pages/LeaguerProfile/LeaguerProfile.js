import { base_Url } from "../../Constants/base_Url";
import React from "react";
import Header from "../../Components/Header/Header";
import { CardProfileLeaguer, CardWorkingSince, Center, CenterTitle, H5, HeaderProfile, Layout, LeaguerCardHeader, MentorProfile, ULLeaguer } from "./styled";
import { NameProfile, Phase, PhaseProfile, PhotoProfile, Star, TeamImg, TeamProfile } from "./styled";
import './styled.css';
import star from "../../Components/img/star.png"
import Vector from "../../Components/img/Vector.png"
import Labs from "../../Components/img/Labs.png"
import Mentor from "../../Components/img/Mentor.png"
import { Button } from "@mui/material";
import { goEditLeaguer, goToNewEvaluation } from "../../Router/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useGetEvaluation } from "../../Hooks/useGetEvaluation";

export default function LeaguerProfile() {
    useProtectedPage()
    const navigate = useNavigate()
    const params = useParams();
    const [leaguerData, loading] = useRequestData([], `${base_Url}/leaguer/get/${params.id}`)
    const [evaluationData, loadingEvaluation]= useGetEvaluation(leaguerData.email)
    console.log(evaluationData)
    
    return (

        <div>
            <Header />
            <HeaderProfile>
                <Button >INICIO</Button>
                <div>
                    <Button >HISTORICO</Button>
                    <Button
                    onClick={()=>{
                        goEditLeaguer(navigate,params.id)
                    }}
                    >EDITAR LEAGUER</Button>
                    <Button
                        onClick={() => goToNewEvaluation(navigate)}

                    >  Criar nova avaliação</Button>
                </div>

            </HeaderProfile>

            <LeaguerCardHeader>
                <Phase>{leaguerData.phase}</Phase>
                <PhotoProfile src="https://cdn.discordapp.com/attachments/889885483402928130/980812774672334868/foto.png" />
                <NameProfile>{leaguerData.name}</NameProfile>
                <TeamProfile> <TeamImg src={Vector}></TeamImg>{leaguerData.class_name}</TeamProfile>
                <PhaseProfile> <Star src={Labs} ></Star> {leaguerData.phase}</PhaseProfile>
                <MentorProfile><Star src={Mentor}></Star> Gabrieli Silva</MentorProfile>
               

               


            </LeaguerCardHeader>

            <Layout>

                <CardProfileLeaguer >
                    <h5>Destaques Positivos</h5>
                    <h6> <Star src={star} ></Star>
                        <Star src={star} ></Star>
                        <Star src={star} ></Star>
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> front-end developer</p>
                    <div>
                    </div>
                    <div class="skills">
                        <h6>Skills</h6>
                        <ul>
                            <li>UI / UX</li>
                            <li>Front End Development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </div>
                </CardProfileLeaguer>



                <CardProfileLeaguer >
                    <h5>Pontos a Melhorar</h5>
                    <h6> <Star src={star} ></Star>
                        <Star src={star} ></Star>

                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> front-end developer</p>
                    <div>
                    </div>
                    <div class="skills">
                        <h6>Skills</h6>
                        <ul>
                            <li>UI / UX</li>
                            <li>Front End Development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </div>
                </CardProfileLeaguer>


                <CardWorkingSince>
                    <CenterTitle>  <h5>Media dos ultimos x tempo</h5></CenterTitle>
                    <ULLeaguer>
                        Performace na entrega
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Qualidade da entrega
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Comprometimento
                        <div>
                            <Star src={star}></Star>
                            <Star src={star}></Star>
                            <Star src={star}></Star>
                            <Star src={star}></Star>
                        </div>
                    </ULLeaguer>

                    <ULLeaguer>
                        Trabalho em equipe
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Desenvolvimento de habilidades
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Capacidade de liderança
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Pontualidade
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Trabalho sobre pressao
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Participação em cerimonia
                        <Star src={star}></Star>
                    </ULLeaguer>

                    <ULLeaguer>
                        Atividade administrativa
                        <Star src={star}></Star>
                    </ULLeaguer>


                </CardWorkingSince>
            </Layout>

            <Center>
                <H5>Comentários:</H5>
                Lorem ipsum dolor sit amet. Aut fugiat minima eum voluptate omnis sit quaerat possimus aut sint pariatur ut architecto autem aut vero velit. Qui quos consequatur est omnis consequatur quo culpa voluptatem. Sed corrupti error est accusamus numquam ad numquam dolorem qui quae magnam.

                Ut blanditiis enim aut nihil quaerat ut aspernatur voluptatum ut veritatis beatae? Aut quia doloremque reiciendis internos aut laudantium incidunt et odio sint. Est quae consequuntur est corrupti rerum ea reiciendis ducimus 33 quibusdam repellat.

                Ea dolorem voluptatem qui odio harum ut mollitia temporibus qui tenetur quibusdam. A blanditiis voluptatum At maxime rerum est velit quas qui exercitationem nesciunt et molestias deserunt.</Center>
        </div>
    )
}
