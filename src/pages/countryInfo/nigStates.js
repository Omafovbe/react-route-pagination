import { Link, Outlet } from "react-router-dom";
import { getStates } from "../../data";

const NigStates = () => {
  let nigStates = getStates();
  return (
    <div className="statesBox">
      <nav
        className="statesNav">
        {nigStates.map((nigState) => (
          <Link
            style={{ display: "block", margin: "0.5rem 0" }}
            to={`/states/${nigState.number}`}
            key={nigState.number}
          >
            {nigState.state}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

export default NigStates