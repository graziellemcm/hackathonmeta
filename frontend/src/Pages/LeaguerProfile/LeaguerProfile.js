import { base_Url } from "../../Constants/base_Url";
import React from "react";
import Header from "../../Components/Header/Header";
import { CardProfileLeaguer, CardWorkingSince, Center, CenterTitle, H5, HeaderProfile, Layout, LeaguerCardHeader, MentorProfile, ULLeaguer } from "./styled";
import { NameProfile, Phase, PhaseProfile, PhotoProfile, Star, TeamImg, TeamProfile } from "./styled";
import star from "../../Components/img/star.png"
import Vector from "../../Components/img/Vector.png"
import Labs from "../../Components/img/Labs.png"
import Mentor from "../../Components/img/Mentor.png"
import { Avatar, Button, CircularProgress, Rating, Typography } from "@mui/material";
import { goEditLeaguer, goToCompilation, goToNewEvaluation } from "../../Router/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useGetEvaluation } from "../../Hooks/useGetEvaluation";

export default function LeaguerProfile() {
    useProtectedPage()
    const navigate = useNavigate()
    const params = useParams();
    const [leaguerData, loadingLeaguer] = useRequestData({}, `${base_Url}/leaguer/get/${params.id}`)
    const data = useRequestData([], `${base_Url}/evaluation/leaguer/${params.id}`)[0]
    const [averaged, loadingAverage] = useRequestData({}, `${base_Url}/evaluation/leaguer/averaged/${params.id}`)

    const [compiled, loadingCompiled] = useRequestData([], `${base_Url}/compiled/get/${params.id}`)

    console.log(compiled)

    return (

        <div>
            <Header />
            <HeaderProfile>

                <Button
                    onClick={() => {
                        goEditLeaguer(navigate, params.id)
                    }}
                >EDITAR LEAGUER</Button>
                <Button
                    onClick={() => goToNewEvaluation(navigate)}

                >  Criar nova avaliação</Button>
                <Button

                    onClick={() => {
                        goToCompilation(navigate, params.id)
                    }}
                >Compilação
                </Button>

            </HeaderProfile>

            <LeaguerCardHeader>
                <Phase>{leaguerData.phase}</Phase>
                <Avatar sx={{ width: 100, height: 100 }} src={leaguerData.photo_leaguer} />
                <NameProfile>{leaguerData.name}</NameProfile>
                <TeamProfile> <TeamImg src={Vector}></TeamImg>{leaguerData.class_name}</TeamProfile>
                <PhaseProfile> <Star src={Labs} ></Star> {leaguerData.phase}</PhaseProfile>






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



                {/* {loadingAverage ? <CircularProgress sx={{ m: "40vh auto" }} /> : 
                    <CardWorkingSince>
                <Typography variant="h2" fontSize={20} sx={{ m: 1, }} >Média das avaliações quantitativas</Typography> 
                    <div>
                        <Typography variant="h2" fontSize={16}>Desempenho:</Typography>
                        <Rating name="performance" defaultValue={averaged.compiled.performance} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Qualidade de entrega:</Typography>
                        <Rating name="quality_on_delivery" defaultValue={averaged.compiled.quality_on_delivery} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Proatividade: </Typography>
                        <Rating name="proactivity" defaultValue={averaged.compiled.proactivity} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Compromisso:</Typography>
                        <Rating name="commitment" defaultValue={averaged.compiled.commitment} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Trabalho em equipe:</Typography>
                        <Rating name="team_work" defaultValue={averaged.compiled.team_work} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Crescimento: </Typography>
                        <Rating name="skillset_growth" defaultValue={averaged.compiled.skillset_growth} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Liderança: </Typography>
                        <Rating name="leadership" defaultValue={averaged.compiled.leadership} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Pontualidade:</Typography>
                        <Rating name="punctuality" defaultValue={averaged.compiled.punctuality} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Trabalhar sob pressão: </Typography>
                        <Rating name="work_under_pressure" defaultValue={averaged.compiled.work_under_pressure} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Participação: </Typography>
                        <Rating name="participation" defaultValue={averaged.compiled.participation} precision={0.25} readOnly />
                        <Typography variant="h2" fontSize={16}>Tarefas administrativas: </Typography>
                        <Rating name="administrative_tasks" defaultValue={averaged.compiled.administrative_tasks} precision={0.25} readOnly />
                        </div>
                         </CardWorkingSince>
                    }  */}

            </Layout>

            <Center>
                <H5>Comentários:</H5>
                Lorem ipsum dolor sit amet. Aut fugiat minima eum voluptate omnis sit quaerat possimus aut sint pariatur ut architecto autem aut vero velit. Qui quos consequatur est omnis consequatur quo culpa voluptatem. Sed corrupti error est accusamus numquam ad numquam dolorem qui quae magnam.

                Ut blanditiis enim aut nihil quaerat ut aspernatur voluptatum ut veritatis beatae? Aut quia doloremque reiciendis internos aut laudantium incidunt et odio sint. Est quae consequuntur est corrupti rerum ea reiciendis ducimus 33 quibusdam repellat.

                Ea dolorem voluptatem qui odio harum ut mollitia temporibus qui tenetur quibusdam. A blanditiis voluptatum At maxime rerum est velit quas qui exercitationem nesciunt et molestias deserunt.</Center>
        </div>
    )
}
