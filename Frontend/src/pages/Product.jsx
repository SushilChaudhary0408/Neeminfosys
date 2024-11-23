

// import React from 'react';
// import { IoIosArrowRoundForward } from 'react-icons/io';
// import NeemIMS from '../../public/images/NeemIMS.webp';
// import BandhuCRM from '../../public/images/BandhuCRM.webp';

// function Product() {
//     return (
//         <div className='w-full my-12 flex flex-col items-center'>
//             <div className='w-[80%]'>
//                 <div className='flex flex-col gap-4 items-center'>
//                     <div className='mt-12 w-full flex justify-center'>
//                         <div className='w-[60%] flex flex-col items-center gap-6'>
//                             <p className='text-5xl font-semibold'>
//                                 <span className='text-green-500'> Neem </span>
//                                 <span> Infosys Products. </span>
//                             </p>
//                             <p className='text-center text-lg font-medium'>
//                                 Explore our affordable products, where we turn ideas into extraordinary IT solutions, setting new standards to grow your business.
//                             </p>
//                         </div>
//                     </div>

//                     <div className='w-full mt-11 p-12 rounded-xl bg-[#f8edca] flex group'>
//                         <div className='w-[70%]'>
//                             <div className='flex flex-col gap-4'>
//                                 <p className='text-2xl font-semibold group-hover:text-[#ff9900]'>- Neem IMS</p>
//                                 <p>Neem IMS: Your all-in-one solution for digital institute management. It can manage all aspects of your institute's operations, from enquiries and registration to payments, attendance, and student performance.</p>
//                                 <p>Easy to use and affordable, making it the perfect solution for educational institutions of all sizes.</p>
//                                 <p className='font-semibold'>Technology</p>
//                                 <p>Laravel, Javascript, Bootstrap</p>
//                                 <div></div>
//                             </div>
//                             <div>
//                                 <button className='px-2 py-1 rounded-md border-2 flex items-center justify-center border-black bg-transparent group-hover:bg-[#ff9900] group-hover:border-[#ff9900] group-hover:text-white'>
//                                     <p>View Live</p>
//                                     <IoIosArrowRoundForward className='text-4xl' />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='w-[30%]'>
//                             <img src={NeemIMS} alt="" />
//                         </div>
//                     </div>
//                     <div className='w-full mt-11 p-12 rounded-xl bg-[#cadcf6] flex group'>
//                         <div className='w-[70%]'>
//                             <div className='flex flex-col gap-4'>
//                                 <p className='text-2xl font-semibold group-hover:text-[#006aff]'>- Bandhu CRM</p>
//                                 <p>Bandhu CRM is an all-in-one solution for B2B businesses. It includes everything you need to run your business more efficiently, including customer management, project management, invoicing, and more</p>
//                                 <p>Easy to use and affordable, making it a great choice for B2B businesses of all sizes.</p>
//                                 <p className='font-semibold'>Technology</p>
//                                 <p>Laravel, Javascript, Bootstrap</p>
//                                 <div></div>
//                             </div>
//                             <div>
//                                 <button className='px-2 py-1 rounded-md border-2 flex items-center justify-center border-black bg-transparent group-hover:bg-[#006aff] group-hover:border-[#006aff] group-hover:text-white'>
//                                     <p>View Live</p>
//                                     <IoIosArrowRoundForward className='text-4xl' />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='w-[30%]'>
//                             <img src={BandhuCRM} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Product;

















import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import NeemIMS from '../../public/images/NeemIMS.webp';
import BandhuCRM from '../../public/images/BandhuCRM.webp';

const products = [
    {
        name: 'Neem IMS',
        description: 'Neem IMS: Your all-in-one solution for digital institute management. It can manage all aspects of your institute\'s operations, from enquiries and registration to payments, attendance, and student performance. Easy to use and affordable, making it the perfect solution for educational institutions of all sizes.',
        technology: 'Laravel, Javascript, Bootstrap',
        bgColor: '#f8edca',
        hoverColor: '#ff9900',
        img: NeemIMS,
    },
    {
        name: 'Bandhu CRM',
        description: 'Bandhu CRM is an all-in-one solution for B2B businesses. It includes everything you need to run your business more efficiently, including customer management, project management, invoicing, and more. Easy to use and affordable, making it a great choice for B2B businesses of all sizes.',
        technology: 'Laravel, Javascript, Bootstrap',
        bgColor: '#cadcf6',
        hoverColor: '#006aff',
        img: BandhuCRM,
    },
];

function Product() {
    return (
        <div className='w-full my-12 flex flex-col items-center'>
            <div className='w-[80%]'>
                <div className='flex flex-col gap-4 items-center'>
                    <div className='mt-12 w-full flex justify-center'>
                        <div className='w-[60%] flex flex-col items-center gap-6'>
                            <p className='text-5xl font-semibold'>
                                <span className='text-green-500'> Neem </span>
                                <span> Infosys Products. </span>
                            </p>
                            <p className='text-center text-lg font-medium'>
                                Explore our affordable products, where we turn ideas into extraordinary IT solutions, setting new standards to grow your business.
                            </p>
                        </div>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className={`w-full mt-11 p-12 rounded-xl flex group`} style={{ backgroundColor: product.bgColor }}>
                            <div className='w-[70%] flex flex-col gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <p className={`text-2xl font-semibold group-hover:text-[${product.hoverColor}]`}>- {product.name}</p>
                                    <p>{product.description}</p>
                                    <p className='font-semibold'>Technology</p>
                                    <p>{product.technology}</p>
                                </div>
                                <div>
                                    <button className={`px-2 py-1 rounded-md border-2 flex items-center justify-center border-black bg-transparent group-hover:bg-[${product.hoverColor}] group-hover:border-[${product.hoverColor}] group-hover:text-white`}>
                                        <p>View Live</p>
                                        <IoIosArrowRoundForward className='text-4xl' />
                                    </button>
                                </div>
                            </div>
                            <div className='w-[30%]'>
                                <img src={product.img} alt={product.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;