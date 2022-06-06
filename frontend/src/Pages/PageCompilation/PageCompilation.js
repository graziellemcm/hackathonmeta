import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Alert, Button, Rating, TextField, Typography } from "@mui/material"
import { Center, Layout, DivButton, Title, DivStar, CardEvaluation } from "./styled";
import { base_Url } from "../../Constants/base_Url";
import axios from "axios";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { sendCompilation } from "../../Services/User";


export default function PageCompilation() {

    useProtectedPage()
    const params = useParams();

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
        sendCompilation(form)
    };

    const [data] = useRequestData(undefined, `${base_Url}/evaluation/leaguer/${params.id}`)

    const evaluation = data && data.map(e => {
        return (
            
                <div>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.comment}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.quality_on_delivery}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.proactivity}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.commitment}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.team_work}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.skillset_growth}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.leadership}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.punctuality}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.work_under_pressure}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.participation}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>{e.administrative_tasks}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>{e.highlights_leaguer}</Typography>
                    <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>{e.comment}</Typography>
                </div>
           
        )
    })

    console.log(data)
    return (
        <div>
            <Header />
            <Layout>
                <Center>
                    <Title>
                        <Typography variant="h5"><b>Feedbacks recebidos</b></Typography>
                    </Title>
                    <CardEvaluation> 
                    <div>
                <Typography variant="h2" sx={{m: 2, p: 1, flexWrap:'nowrap'}} fontSize={16}>Desempenho:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>Qualidade de entrega: </Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Proatividade:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Compromisso:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>Trabalho em equipe:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Crescimento:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Liderança:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Pontualidade:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>Trabalhar sob pressão:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Participação:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1, whiteSpace: 'nowrap'}} fontSize={16}>Tarefas administrativas:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Destaques:</Typography>
                <Typography variant="h2" sx={{m: 2, p: 1}} fontSize={16}>Comentários:</Typography>
            </div>
                    {evaluation}
                    </CardEvaluation>
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