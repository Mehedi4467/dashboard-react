import { CurrencyBangladeshiIcon } from '@heroicons/react/solid';
const Pricing = ({ dasboard, header }) => {


    return (
        <div className="p-4 w-60 bg-sky-400 rounded-lg">
            <h1 className="font-bold">{header.toUpperCase()}</h1>
            <div className='flex items-center mt-6'>
                <CurrencyBangladeshiIcon className='h-6 w-6'></CurrencyBangladeshiIcon>
                <p className="text-lg ml-4">{dasboard}</p>
            </div>


        </div>
    );
};

export default Pricing;