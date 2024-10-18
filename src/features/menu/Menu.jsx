import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { getUsername } from "../user/userSlice";
import LinkButton from "../../ui/LinkButton";

function Menu() {
  const menu = useLoaderData();

  const username = useSelector(getUsername);

  if (!username) {
    return (
      <div className="px-4 py-3">
        <LinkButton to="/">&larr; Back to Home</LinkButton>
        <p className="mt-7 font-semibold">Enter Username first :)</p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
