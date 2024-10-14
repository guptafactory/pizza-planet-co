import { useSelector } from "react-redux";
import LinkButton from "./../../ui/LinkButton";
import { getTotalCartQty, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQty);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQty) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>

      <LinkButton to={"cart"}>Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
