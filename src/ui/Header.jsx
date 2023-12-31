import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"


const Header = () => {

    return (
        
        <header className="bg-yellow-500 uppercase p-4 border-b border-stone-500 sm:p-6 
        flex items-center justify-between ">

            <Link to='/' className="tracking-widest"> Pizza Booker</Link>

            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header