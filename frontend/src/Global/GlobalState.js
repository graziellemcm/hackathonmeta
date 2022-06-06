import { GlobalContext } from "./GlobalContext";
import useRequestData from "../Hooks/useRequestData";
import { base_Url } from "../Constants/base_Url";


const GlobalState = (props) => {
  const [leaguersData, loading, getLeaguersData] = useRequestData([], `${base_Url}/leaguer/getAll`);
 
  
const data = {
  leaguersData, 
  getLeaguersData,
  loading,

}
  
  
  return (
    <GlobalContext.Provider
      value={
        data
      }>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;