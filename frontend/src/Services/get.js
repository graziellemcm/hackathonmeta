import axios from "axios"
import { base_Url } from "../Constants/base_Url"

export const getLeaguerById = (id) => {
    axios
        .get(`${base_Url}/leaguer/get/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
        .then((resposta) => {
            console.log(resposta.data)

        })
        .catch((erro) =>
            console.log(erro.response)
        )
}