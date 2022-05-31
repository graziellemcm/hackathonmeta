import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { Button, Rating, TextField, Typography } from "@mui/material"
import { Center, Layout, DivButton, Title } from "./styled";


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
                            name={"email"}
                            value={form.email_evaluator}
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
                            name={"email"}
                            value={form.leaguer_email}
                            onChange={onChangeForm}
                            label={"Digite o email do leaguer"}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            required
                            type={"email"}
                        />
                        <br></br>
                        <Typography variant="h7"><b>Desempenho</b></Typography>
                        <br></br>
                        <Rating
                            name={"performance"}
                            value={form.performance}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Qualidade de entrega</b></Typography>
                        <br></br>
                        <Rating
                            name={"quality_on_delivery"}
                            value={form.quality_on_delivery}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Proatividade</b></Typography>
                        <br></br>
                        <Rating
                            name={"proactivity"}
                            value={form.proactivity}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Compromisso</b></Typography>
                        <br></br>
                        <Rating
                            name={"commitment"}
                            value={form.commitment}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Trabalho em equipe</b></Typography>
                        <br></br>
                        <Rating
                            name={"team_work"}
                            value={form.team_work}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Crescimento</b></Typography>
                        <br></br>
                        <Rating
                            name={"skillset_growth"}
                            value={form.skillset_growth}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Liderança</b></Typography>
                        <br></br>
                        <Rating
                            name={"leadership"}
                            value={form.leadership}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />

                        <Typography variant="h7"><b>Pontualidade</b></Typography>
                        <br></br>
                        <Rating
                            name={"punctuality"}
                            value={form.punctuality}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Trabalhar sob pressão</b></Typography>
                        <br></br>
                        <Rating
                            name={"work_under_pressure"}
                            value={form.work_under_pressure}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Participação</b></Typography>
                        <br></br>
                        <Rating
                           name={"participation"}
                           value={form.participation}
                           onChange={onChangeForm}
                           variant={"outlined"}
                           sx={{ width: 350, marginBottom: 3 }}
                           margin="dense"
                            defaultValue={1}
                            precision={0.5}
                        />
                        <Typography variant="h7"><b>Tarefas administrativas</b></Typography>
                        <br></br>
                        <Rating
                            name={"administrative_tasks"}
                            value={form.administrative_tasks}
                            onChange={onChangeForm}
                            variant={"outlined"}
                            sx={{ width: 350, marginBottom: 3 }}
                            margin="dense"
                            defaultValue={1}
                            precision={0.5}
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
                        <DivButton>
                        <Button fullWidth color="primary" variant="contained" type={"submit"} > Enviar</Button>
                        </DivButton>
                    </form>

                </Center>
            </Layout>
        </div>
    );
}