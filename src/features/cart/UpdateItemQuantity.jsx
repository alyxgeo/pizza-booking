import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";


const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {

    const dispatch = useDispatch();

    return (

        <div className="flex gpa-1 items-center md:gap-3">

            <Button type='round'
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))} >-</Button>

            <span className="text-sm font-medium gap-2">{currentQuantity}</span>

            <Button type='round'
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>

        </div>
    )
}

export default UpdateItemQuantity