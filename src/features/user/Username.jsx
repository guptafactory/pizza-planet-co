import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const username = useSelector(getUsername);

  if (!username) return null;

  return (
    <div className="hidden text-sm md:block">
      <p className="font-semibold ">{username}</p>
    </div>
  );
}

export default Username;
