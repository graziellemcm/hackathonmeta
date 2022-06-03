import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { base_Url } from "../../Constants/base_Url";


const GlobalState = (props) => {
  const [leaguersData, loading, getLeaguersData] = useRequestData([], `${base_Url}/leaguer/getAll`);
  
  const [evaluation, setEvaluation] = useState([])
  const [leaguers, setLeaguers] = useState([])
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [infoLeaguers, setInfoLeaguers] = useState([])
 
  
const data = {
  leaguersData, 
  getLeaguersData,
  loading,

}
  
  
  return (
    <GlobalContext.Provider
      value={{
        
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;