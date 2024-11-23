import React from 'react'
import { BiSolidMessageEdit } from "react-icons/bi";

import flag_nepal from '../../public/images/flag-nepal.png';
import Captcha from '../components/Captcha';
import Button from '../components/Button';
import Form from '../components/Form';

function Contact() {


    return (
        <div className='w-full flex justify-center'>
            <div className='w-[80%] p-6 flex'>
                <div className='w-[50%] flex flex-col gap-8'>
                    <p className='text-4xl font-semibold'>Get In Touch</p>
                    <div className='flex flex-col gap-4'>
                        <p className='text-7xl font-semibold text-green-500'>Our Experts</p>
                        <p className='font-medium'>Want to find out how Neem Infosys can help your organization? We’d love to hear from you. </p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Integrate Towards Innovation</p>
                        <p>Become an Neem Infosys Partner to Launch, Run and Grow Your Business Globally.</p>
                        <div>
                            <p className='font-semibold'>Become a Partner</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Contact Info:</p>
                        <div className='flex items-center gap-2'>
                            <BiSolidMessageEdit className='text-2xl text-green-500' />
                            <p>neeminfosys@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6'>
                                <img src={flag_nepal} alt="" />
                            </div>
                            <p>+977-9841822340</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-6'>
                                <img src={flag_nepal} alt="" />
                            </div>
                            <p>+977-9868715191</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] bg-white shadow-md rounded-lg p-6">
                    {/* <p className=" font-semibold text-3xl my-2">Let’s Get to know you</p>
                    <form className="flex flex-col gap-4 mb-4">
                        <input
                            type="name"
                            className="rounded-full border border-gray-300 outline-none p-4"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            className="rounded-full border border-gray-300 outline-none p-4"
                            placeholder="Email"
                        />
                        <div className='px-4 flex items-center border border-gray-300 rounded-full'>
                            <div className='flex items-center'>
                                <img src={flag_nepal} alt="" className='w-6' />
                                <p>+977</p>
                            </div>
                            <input
                                type=""
                                className="rounded-full border-none outline-none p-3"
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div >
                            <textarea name="" cols={58} rows={3} placeholder='Tell Us About Your Project' id="" className='p-4 border border-gray-300 rounded-lg'></textarea>
                        </div>
                        <div className='flex gap-24'>
                            <Captcha />
                            <Button text="submit" />
                        </div>

                    </form> */}

                    <Form />
                </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}

export default Contact
