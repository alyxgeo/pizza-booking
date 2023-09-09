import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Deleteitem from "./Deleteitem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {

  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  //console.log(currentQuantity)


  return (
    <li className="py-3 sm:flex sm:item-center sm:justify-between">

      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <Deleteitem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
