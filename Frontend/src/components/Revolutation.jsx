

// import React from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[50%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div
//                             key={index}
//                             className='p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)]'
//                         >
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[50%] relative flex justify-center items-center'>
//                     <div>
//                         <img src={neem_icon} alt="" className='w-[90px] h-[90px]' />
//                     </div>
//                     <div>
//                         <img src={Circle_1} alt="" className='w-[180px] h-[180px]' />
//                     </div>
//                     <div>
//                         <img src={Circle_2} alt="" className='w-[283px] h-[283px]' />
//                     </div>
//                     <div>
//                         <img src={Circle_3} alt="" className='w-[390px] h-[390px]' />
//                     </div>
//                     <div>
//                         <img src={Circle_4} alt="" className='w-[503px] h-[503px]' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;












// import React from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[40%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div 
//                             key={index}
//                             className='p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] hover:bg-green-500 hover:text-white'
//                         > {/* if user hover on 1st div then it bg become green and no change in circle_1 but other circle images become little white */}
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[60%] relative flex justify-center items-center'>
//                     <div className='relative w-[503px] h-[503px]'>
//                         <img src={Circle_4} alt="Circle 4" className='absolute inset-0 m-auto w-[503px] h-[503px]' />
//                         <img src={Circle_3} alt="Circle 3" className='absolute inset-0 m-auto w-[390px] h-[390px]' />
//                         <img src={Circle_2} alt="Circle 2" className='absolute inset-0 m-auto w-[283px] h-[283px]' />
//                         <img src={Circle_1} alt="Circle 1" className='absolute inset-0 m-auto w-[180px] h-[180px]' />
//                         <img src={neem_icon} alt="Neem Icon" className='absolute inset-0 m-auto w-[90px] h-[90px]' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;














// import React, { useState } from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[40%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div
//                             key={index}
//                             onMouseEnter={() => setHoveredIndex(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                             className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] ${hoveredIndex === index ? 'bg-green-500 text-white' : ''}`}
//                         >
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[60%] relative flex justify-center items-center'>
//                     <div className='relative w-[503px] h-[503px]'>
//                         <img
//                             src={Circle_4}
//                             alt="Circle 4"
//                             className={`absolute inset-0 m-auto w-[503px] h-[503px] ${hoveredIndex !== 3 && hoveredIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_3}
//                             alt="Circle 3"
//                             className={`absolute inset-0 m-auto w-[390px] h-[390px] ${hoveredIndex !== 2 && hoveredIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_2}
//                             alt="Circle 2"
//                             className={`absolute inset-0 m-auto w-[283px] h-[283px] ${hoveredIndex !== 1 && hoveredIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_1}
//                             alt="Circle 1"
//                             className={`absolute inset-0 m-auto w-[180px] h-[180px] ${hoveredIndex !== 0 && hoveredIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={neem_icon}
//                             alt="Neem Icon"
//                             className='absolute inset-0 m-auto w-[90px] h-[90px]'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;




















// import React, { useState } from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [hoveredCircle, setHoveredCircle] = useState(null);

//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[40%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div
//                             key={index}
//                             onMouseEnter={() => setHoveredIndex(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                             className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] ${hoveredIndex === index || hoveredCircle === index ? 'bg-green-500 text-white' : ''}`}
//                         >
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[60%] relative flex justify-center items-center'>
//                     <div className='relative w-[503px] h-[503px]'>
//                         <img
//                             src={Circle_4}
//                             alt="Circle 4"
//                             onMouseEnter={() => setHoveredCircle(3)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[503px] h-[503px] ${hoveredCircle !== 3 && hoveredCircle !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_3}
//                             alt="Circle 3"
//                             onMouseEnter={() => setHoveredCircle(2)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[390px] h-[390px] ${hoveredCircle !== 2 && hoveredCircle !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_2}
//                             alt="Circle 2"
//                             onMouseEnter={() => setHoveredCircle(1)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[283px] h-[283px] ${hoveredCircle !== 1 && hoveredCircle !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_1}
//                             alt="Circle 1"
//                             onMouseEnter={() => setHoveredCircle(0)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[180px] h-[180px] ${hoveredCircle !== 0 && hoveredCircle !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={neem_icon}
//                             alt="Neem Icon"
//                             className='absolute inset-0 m-auto w-[90px] h-[90px]'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;


































// import React, { useState } from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [hoveredCircle, setHoveredCircle] = useState(null);

//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//         setHoveredCircle(null); // Reset circle hover when hovering over div
//     };

//     const handleMouseEnterCircle = (index) => {
//         setHoveredCircle(index);
//         setHoveredIndex(null); // Reset div hover when hovering over circle
//     };

//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[40%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div
//                             key={index}
//                             onMouseEnter={() => handleMouseEnter(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                             className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
//                                 ${hoveredIndex === index ? 'bg-green-500 text-white' : ''}
//                                 ${hoveredCircle !== null && hoveredCircle !== index ? 'opacity-50' : ''}
//                             `}
//                         >
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[60%] relative flex justify-center items-center'>
//                     <div className='relative w-[503px] h-[503px]'>
//                         <img
//                             src={Circle_4}
//                             alt="Circle 4"
//                             onMouseEnter={() => handleMouseEnterCircle(3)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[503px] h-[503px] 
//                                 ${hoveredIndex !== 3 && hoveredCircle !== 3 && (hoveredIndex !== null || hoveredCircle !== null) ? 'opacity-50' : ''}
//                             `}
//                         />
//                         <img
//                             src={Circle_3}
//                             alt="Circle 3"
//                             onMouseEnter={() => handleMouseEnterCircle(2)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[390px] h-[390px] 
//                                 ${hoveredIndex !== 2 && hoveredCircle !== 2 && (hoveredIndex !== null || hoveredCircle !== null) ? 'opacity-50' : ''}
//                             `}
//                         />
//                         <img
//                             src={Circle_2}
//                             alt="Circle 2"
//                             onMouseEnter={() => handleMouseEnterCircle(1)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[283px] h-[283px] 
//                                 ${hoveredIndex !== 1 && hoveredCircle !== 1 && (hoveredIndex !== null || hoveredCircle !== null) ? 'opacity-50' : ''}
//                             `}
//                         />
//                         <img
//                             src={Circle_1}
//                             alt="Circle 1"
//                             onMouseEnter={() => handleMouseEnterCircle(0)}
//                             onMouseLeave={() => setHoveredCircle(null)}
//                             className={`absolute inset-0 m-auto w-[180px] h-[180px] 
//                                 ${hoveredIndex !== 0 && hoveredCircle !== 0 && (hoveredIndex !== null || hoveredCircle !== null) ? 'opacity-50' : ''}
//                             `}
//                         />
//                         <img
//                             src={neem_icon}
//                             alt="Neem Icon"
//                             className='absolute inset-0 m-auto w-[90px] h-[90px]'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;



















// import React, { useState } from 'react';
// import neem_icon from '../../public/images/neem_icon.png';
// import Circle_1 from '../../public/images/Circle-1.webp';
// import Circle_2 from '../../public/images/Circle-2.webp';
// import Circle_3 from '../../public/images/Circle-3.webp';
// import Circle_4 from '../../public/images/Circle-4.webp';

// const content = [
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
//     {
//         title: 'Tailored Solutions',
//         description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
//     },
// ];

// function Revolutation() {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [hoveredCircleIndex, setHoveredCircleIndex] = useState(null);

//     const handleMouseEnterDiv = (index) => {
//         setHoveredIndex(index);
//         setHoveredCircleIndex(null);
//     };

//     const handleMouseEnterCircle = (index) => {
//         setHoveredCircleIndex(index);
//         setHoveredIndex(null);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIndex(null);
//         setHoveredCircleIndex(null);
//     };

//     return (
//         <div className='w-[100%] flex justify-center items-center bg-slate-100'>
//             <div className='w-[70%] py-4 flex gap-12'>
//                 <div className='w-[40%] flex flex-col gap-4'>
//                     {content.map((item, index) => (
//                         <div
//                             key={index}
//                             onMouseEnter={() => handleMouseEnterDiv(index)}
//                             onMouseLeave={handleMouseLeave}
//                             className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
//                             ${(hoveredIndex === index || hoveredCircleIndex === index) ? 'bg-green-500 text-white' : ''}
//                             ${hoveredCircleIndex !== null && hoveredCircleIndex !== index ? 'opacity-50' : ''}`}
//                         >
//                             <p className='text-xl font-semibold'>{item.title}</p>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className='w-[60%] relative flex justify-center items-center'>
//                     <div className='relative w-[503px] h-[503px]'>
//                         <img
//                             src={Circle_4}
//                             alt="Circle 4"
//                             onMouseEnter={() => handleMouseEnterCircle(3)}
//                             onMouseLeave={handleMouseLeave}
//                             className={`absolute inset-0 m-auto w-[503px] h-[503px] ${hoveredIndex !== 3 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 3 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_3}
//                             alt="Circle 3"
//                             onMouseEnter={() => handleMouseEnterCircle(2)}
//                             onMouseLeave={handleMouseLeave}
//                             className={`absolute inset-0 m-auto w-[390px] h-[390px] ${hoveredIndex !== 2 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 2 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_2}
//                             alt="Circle 2"
//                             onMouseEnter={() => handleMouseEnterCircle(1)}
//                             onMouseLeave={handleMouseLeave}
//                             className={`absolute inset-0 m-auto w-[283px] h-[283px] ${hoveredIndex !== 1 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 1 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={Circle_1}
//                             alt="Circle 1"
//                             onMouseEnter={() => handleMouseEnterCircle(0)}
//                             onMouseLeave={handleMouseLeave}
//                             className={`absolute inset-0 m-auto w-[180px] h-[180px] ${hoveredIndex !== 0 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 0 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
//                         />
//                         <img
//                             src={neem_icon}
//                             alt="Neem Icon"
//                             className='absolute inset-0 m-auto w-[90px] h-[90px]'
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Revolutation;















import React, { useState } from 'react';
import neem_icon from '../../public/images/neem_icon.png';
import Circle_1 from '../../public/images/Circle-1.webp';
import Circle_2 from '../../public/images/Circle-2.webp';
import Circle_3 from '../../public/images/Circle-3.webp';
import Circle_4 from '../../public/images/Circle-4.webp';

const content = [
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
    {
        title: 'Tailored Solutions',
        description: 'Our software development expertise customizes solutions for businesses based on their specific needs.',
    },
];

function Revolutation() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredCircleIndex, setHoveredCircleIndex] = useState(null);

    const handleMouseEnterDiv = (index) => {
        setHoveredIndex(index);
        setHoveredCircleIndex(null);
    };

    const handleMouseEnterCircle = (index) => {
        setHoveredCircleIndex(index);
        setHoveredIndex(null);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setHoveredCircleIndex(null);
    };

    return (
        <div className='w-[100%] flex justify-center items-center'>
            <div className='w-[70%] py-16 flex gap-12'>
                <div className='w-[40%] flex flex-col gap-4'>
                    {content.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnterDiv(index)}
                            onMouseLeave={handleMouseLeave}
                            className={`p-4 rounded-lg shadow-[0px_4px_10px_-4px_rgba(0,0,0,0.3),-4px_0px_10px_-4px_rgba(0,0,0,0.3),4px_0px_10px_-4px_rgba(0,0,0,0.3)] 
                            ${(hoveredIndex === index || hoveredCircleIndex === index) ? 'bg-green-500 text-white' : ''}
                            ${hoveredCircleIndex !== null && hoveredCircleIndex !== index ? 'opacity-50' : ''}`}
                        >
                            <p className='text-xl font-semibold'>{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='w-[60%] relative flex justify-center items-center'>
                    <div className='relative w-[503px] h-[503px]'>
                        <img
                            src={Circle_4}
                            alt="Circle 4"
                            onMouseEnter={() => handleMouseEnterCircle(3)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[503px] h-[503px] ${hoveredIndex !== 3 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 3 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_3}
                            alt="Circle 3"
                            onMouseEnter={() => handleMouseEnterCircle(2)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[390px] h-[390px] ${hoveredIndex !== 2 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 2 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_2}
                            alt="Circle 2"
                            onMouseEnter={() => handleMouseEnterCircle(1)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[283px] h-[283px] ${hoveredIndex !== 1 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 1 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={Circle_1}
                            alt="Circle 1"
                            onMouseEnter={() => handleMouseEnterCircle(0)}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 m-auto w-[180px] h-[180px] ${hoveredIndex !== 0 && hoveredIndex !== null ? 'opacity-50' : ''} ${hoveredCircleIndex !== 0 && hoveredCircleIndex !== null ? 'opacity-50' : ''}`}
                        />
                        <img
                            src={neem_icon}
                            alt="Neem Icon"
                            className='neem-icon absolute inset-0 m-auto w-[90px] h-[90px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Revolutation;
