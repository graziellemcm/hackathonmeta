import axios from "axios";
import { base_Url } from "../Constants/base_Url";
import {useState } from "react";

export const useGetEvaluation = (email) => {

    const [data, setData] = useState(undefined)
    const [loading, setLoading] = useState(false)

   const getData = (email) => {

    const headers = { headers: { authorization: localStorage.getItem("token"), leaguer_email: email} }
    
    setLoading(true)

    axios.get(`${base_Url}/evaluation/leaguer`, headers)

      .then((res) => {
        setLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        setLoading(false)
      })
   }

   return [data, loading, getData]

  };