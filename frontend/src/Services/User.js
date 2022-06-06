import axios from "axios";
import { base_Url } from "../Constants/base_Url";
import { goToLeaguerProfile, goToHomePage } from "../Router/coordinator";

export const signUp = (body, navigate) => {
  axios
    .post(base_Url + "/responsible/signup", body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Cadastro realizado!");
      goToHomePage(navigate);
    })
    .catch((err) => {
      alert(` ${err.response.data}`);
    });
};

export const loginUser = (body, toHomePage) => {
  axios
    .post(base_Url + "/responsible/login", body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      toHomePage();
    })
    .catch((err) => {
      alert(` ${err.response.data}`);
    });
};

export const signUpTeam = (body) => {
  axios
    .post(base_Url + "/team/create", body, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Cadastro de turma realizado!");
    })
    .catch((err) => alert(`${err.response.data}`));
};

export const newEvaluation = (body) => {
  axios
    .post(base_Url + "/feedback/create", body, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Nova avaliação criada!");
    })
    .catch((err) => {
      alert(` ${err.response.data.error}`);
    });
};

export const registration = (body, clearForm, navigate) => {
  axios
    .post(base_Url + "/leaguer/create", body, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Cadastro realizado!");
      clearForm();
      goToHomePage(navigate);
    })
    .catch((err) => {
      alert(`${err.response.data}`);
    });
};

export const editLeaguer = (body, clearForm, id, navigate) => {
  axios
    .put(base_Url + `/leaguer/edit/${id}`, body, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Leaguer atualizado com sucesso!");
      goToHomePage(navigate);
      clearForm();
    })
    .catch((err) => {
      alert(`${err.response.data}`);
    });
};

export const sendCompilation = (form) => {
  const body = { ...form, performance: Number(form.performance), quality_on_delivery: Number(form.quality_on_delivery), proactivity: Number(form.proactivity), commitment: Number(form.commitment), team_work: Number(form.team_work), skillset_growth: Number(form.skillset_growth), leadership: Number(form.leadership), punctuality: Number(form.punctuality), work_under_pressure: Number(form.work_under_pressure), participation: Number(form.participation), administrative_tasks: Number(form.administrative_tasks) };
  
  axios

      .post(base_Url + "/compiled/create", body,

          {

              headers: {
                  authorization: localStorage.getItem("token")
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