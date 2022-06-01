import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Alert, Button, Rating, TextField, Typography } from "@mui/material"
import { Center, Layout, DivButton, Title, DivStar } from "./styled";


export default function Form() {
    // const navigate = useNavigate();
    // const isTokenSet = localStorage.getItem("token");

    const { form, onChangeForm } = useForm({
        leaguer_email: "",
        email_evaluator: "",
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
    const onSignUp = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <Header />
            <Layout>
                <Center>

                    <form onSubmit={onSignUp}>
                        <Title>
                            <Typography variant="h5"><b>Formulário de Feedback</b></Typography>
                        </Title>

                        <TextField
                            name={"leaguer_email"}
                            value={form.leaguer_email}
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
                            name={"email_evaluator"}
                            value={form.email_evaluator}
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
                            <Button
                                fullWidth
                                color="primary"
                                variant="contained"
                                type={"submit"}

                            > Enviar
                            </Button>

                        </DivButton>
                    </form>

                </Center>
            </Layout>
        </div>
    );
}