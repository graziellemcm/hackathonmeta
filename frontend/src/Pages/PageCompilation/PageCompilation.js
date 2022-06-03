import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Alert, Button, Rating, TextField, Typography } from "@mui/material"
import { Center, Layout, DivButton, Title, DivStar } from "./styled";
import { base_Url } from "../../Constants/base_Url";
import axios from "axios";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { useGetEvaluation } from "../../Hooks/useGetEvaluation";
import { GlobalContext } from "../../Global/GlobalContext";


export default function PageCompilation
    () {
    useProtectedPage()
    const params = useParams();
    const isTokenSet = localStorage.getItem("token");
    const leaguerData = useRequestData([], `${base_Url}/evaluation/leaguer/averaged/${params.id}`)
    const evaluationData = useGetEvaluation(leaguerData.email)[0]
    const data = useContext(GlobalContext)
    
    const { form, onChangeForm } = useForm({
        email_creator_compiled: "",
        email_leaguer: "",
        performance: "",
        quality_on_delivery: "",
        proactivity: "",
        commitment: "",
        team_work: "",
        skillset_growth: "",
        leadership: "",
        punctuality: "",
        work_under_pressure: "",
        participation: "",
        administrative_tasks: "",
        highlights_leaguer: "",
        comment: "",
    });
    const onForm = (e) => {
        e.preventDefault();

    };

    const sendCompilation = () => {
        const body = { ...form, performance: Number(form.performance), quality_on_delivery: Number(form.quality_on_delivery), proactivity: Number(form.proactivity), commitment: Number(form.commitment), team_work: Number(form.team_work), skillset_growth: Number(form.skillset_growth), leadership: Number(form.leadership), punctuality: Number(form.punctuality), work_under_pressure: Number(form.work_under_pressure), participation: Number(form.participation), administrative_tasks: Number(form.administrative_tasks) };
        
        axios

            .post(base_Url + "/compiled/create", body,

                {

                    headers: {
                        authorization: isTokenSet
                    }
                }
            )
            .then((resposta) => {

                alert("Compilação realizada!");
            })
            .catch((erro) =>
                alert(` ${erro.response.data.error}`)
            )
    }
    return (
        <div>
            <Header />
            <Layout>
                <Center>
                    <Title>
                        <Typography variant="h5"><b>Feedbacks recebidos</b></Typography>

                    </Title>
                    {console.log(evaluationData)}
                    {/* <div> 
                        <p>Desempenho:{leaguerData.compiled.comment}</p>
                        <p>Qualidade de entrega: {leaguerData.compiled.quality_on_delivery}</p>
                        <p>Proatividade:{leaguerData.compiled.proactivity}</p>
                        <p>Compromisso:{leaguerData.compiled.commitment}</p>
                        <p>Trabalho em equipe:{leaguerData.compiled.team_work}</p>
                        <p>Crescimento:{leaguerData.compiled.skillset_growth}</p>
                        <p>Liderança:{leaguerData.compiled.leadership}</p>
                        <p>Pontualidade:{leaguerData.compiled.punctuality}</p>
                        <p>Trabalhar sob pressão:{leaguerData.compiled.work_under_pressure}</p>
                        <p>Participação:{leaguerData.compiled.participation}</p>
                        <p>Tarefas administrativas:{leaguerData.compiled.administrative_tasks}</p>
                        <p>Destaques:{leaguerData.compiled.highlights_leaguer}</p>
                        <p>Comentários:{leaguerData.compiled.comment}</p>
                    </div> */}
                    <form onSubmit={onForm}>


                        <Title>
                            <Typography variant="h5"><b>Compilação do Feedback</b></Typography>
                        </Title>

                        <TextField
                            name={"email_creator_compiled"}
                            value={form.email_creator_compiled}
                            onChange={onChangeForm}
                            label={"Digite seu email"}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            required
                            autoFocus
                            type={"email"}
                        />

                        <TextField
                            name={"email_leaguer"}
                            value={form.email_leaguer}
                            onChange={onChangeForm}
                            label={"Digite o email do leaguer"}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            required
                            type={"email"}
                        />
                        <DivStar>

                            <Typography variant="h7"><b>Desempenho</b></Typography>

                            <Rating
                                name={"performance"}
                                value={form.performance}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />

                            <Typography variant="h7"><b>Qualidade de entrega</b></Typography>

                            <Rating
                                name={"quality_on_delivery"}
                                value={form.quality_on_delivery}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Proatividade</b></Typography>

                            <Rating
                                name={"proactivity"}
                                value={form.proactivity}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Compromisso</b></Typography>

                            <Rating
                                name={"commitment"}
                                value={form.commitment}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Trabalho em equipe</b></Typography>

                            <Rating
                                name={"team_work"}
                                value={form.team_work}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Crescimento</b></Typography>

                            <Rating
                                name={"skillset_growth"}
                                value={form.skillset_growth}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Liderança</b></Typography>

                            <Rating
                                name={"leadership"}
                                value={form.leadership}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />

                            <Typography variant="h7"><b>Pontualidade</b></Typography>

                            <Rating
                                name={"punctuality"}
                                value={form.punctuality}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Trabalhar sob pressão</b></Typography>

                            <Rating
                                name={"work_under_pressure"}
                                value={form.work_under_pressure}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Participação</b></Typography>

                            <Rating
                                name={"participation"}
                                value={form.participation}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />
                            <Typography variant="h7"><b>Tarefas administrativas</b></Typography>

                            <Rating
                                name={"administrative_tasks"}
                                value={form.administrative_tasks}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                defaultValue={1}
                                precision={0.5}
                                required
                            />

                            <TextField
                                name={"highlights_leaguer"}
                                value={form.highlights_leaguer}
                                onChange={onChangeForm}
                                variant={"outlined"}
                                label={"Destaques"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                type={"text"}
                                required
                            />
                            <TextField
                                name={"comment"}
                                value={form.comment}
                                onChange={onChangeForm}
                                label={"Deseja comentar algo?"}
                                variant={"outlined"}
                                sx={{ width: 350, marginBottom: 3 }}
                                margin="dense"
                                type={"text"}

                            />
                        </DivStar>
                        <DivButton>
                            <Button fullWidth color="primary" variant="contained" type={"submit"} onClick={sendCompilation}> Enviar</Button>
                        </DivButton>
                    </form>

                </Center>
            </Layout>
        </div>
    );
}