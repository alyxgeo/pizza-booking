import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';


function AppLayout() {



    //used to see weather app is idle or loading
    const navigation = useNavigation();
    //console.log(navigation)
    const isLoading = navigation.state === 'loading';






    return (

        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />

            <div className="overflow-scroll">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>

            <CartOverview />
        </div>
    );
}

export default AppLayout;