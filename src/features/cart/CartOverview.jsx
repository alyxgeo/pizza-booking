import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToatalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  /* const Cart = useSelector((state) => state.cart.cart);
   console.log(Cart);
 
     const totalCartQuantity = useSelector((state) => state.cart.cart
       .reduce((acc, curr) => acc + curr.quantity, 0));
     console.log(totalCartQuantity)*/


  //selector fn
  const totalCartQuantity = useSelector(getToatalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm
     md:text-base flex items-center justify-between">

      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart'>🛒 Cart &rarr;</Link>
    </div>
  );
}
export default CartOverview;
