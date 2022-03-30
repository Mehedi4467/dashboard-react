
import { useEffect, useState } from 'react';
import Pricing from '../../Components/Dashboard/Pricing/Pricing';
import Analysis from '../Analysis/Analysis';
import Menu from '../Header/Menu/Menu';

const Dashboard = ({ toggle }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const totalPrice = products.reduce((sum, currentPrice) => sum + currentPrice.balance * currentPrice.quantity, 0).toFixed(2);
    const totalOrder = products.reduce((sum, currentOrder) => sum + currentOrder.quantity, 0);
    const avaragePrice = +totalPrice / +totalOrder;
    const revenue = +totalPrice - 10000;



    return (
        <div className={`duration-500 gap-4 ${toggle ? 'flex' : 'flex-none'}`}>
            <div className={`absolute w-60 ease-in duration-300 bg-inherit ${toggle ? 'relative left-0' : 'left-[-250px]'}`}>
                <Menu></Menu>
            </div>
            <div className='flex justify-around  grow gap-4 mt-10'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4  h-1/4 text-white justify-evenly'>
                    < Pricing dasboard={totalPrice} header='Total Price'></Pricing>
                    < Pricing dasboard={totalOrder} header='Orders'></Pricing>
                    < Pricing dasboard={revenue} header='REVENUE'></Pricing>
                    < Pricing dasboard={avaragePrice.toFixed(2)} header='AVERAGE PRICE'></Pricing>
                </div>


            </div>


        </div >
    );
};

export default Dashboard;