import Charities from "../components/Charities"
import { useParams } from "react-router-dom";

function Votes() {
  const votes = useParams()
  return (
    <Charities votes={votes}/>
  )
}

export default Votes