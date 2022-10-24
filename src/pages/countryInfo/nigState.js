import { useParams } from "react-router-dom";
import { getState } from "../../data";

export default function NigState() {
    let params = useParams();
    let ngState = getState(parseInt(params.stateId, 10));
    // console.log(ngState)
    return (
        <div className="statebox">
            <h3>State: {ngState.state}</h3>
            <h4>Capital: {ngState.capital}</h4>
      <p>
        Slogan: {ngState.slogan}
      </p>
      <p>Present Governor: {ngState.governor}</p>
        </div>
    );
}