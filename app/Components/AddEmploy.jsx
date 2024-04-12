"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BaseUrl = "http://localhost:3000/api";

const AddEmploy = ({ PopupButton }) => {

    const [FullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [Designation, setDesignation] = useState('');


    const postData = async (e) => {
        e.preventDefault();
        const Data = { FullName, email, Designation, }

        console.log("Data:", JSON.stringify(Data));

        try {
            const response = await fetch(`${BaseUrl}/employ`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(Data)
            })

            if (!response.ok) {
                toast.error("Data Input Unuccessfull .... !")
                console.log(response.error);
            }

            if (response.ok) {
                toast.success("Data Input Successfull .... !")
                console.log(response.json());
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            <ToastContainer theme='dark' />
            <button className="btn rounded-sm btn-outline btn-success" onClick={() => document.getElementById('AddEmploy').showModal()}>{PopupButton}</button>

            <dialog id="AddEmploy" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Employ</h3>
                    <div className="py-4">

                        <form onSubmit={postData} className="max-w-md mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input onChange={(e) => setFullName(e.target.value)} type="text" name="FullName" id="FullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="FullName" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="Email" id="Email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="Email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input onChange={(e) => setDesignation(e.target.value)} type="text" name="Designation" id="Designation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="Designation" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Designation</label>
                            </div>
                            <div className='flex justify-end pt-7'>
                                {/* <form method="dialog">
                                        <button className="btn btn-sm rounded-sm mx-2">Close</button>
                                    </form> */}
                                <button type="submit" className="btn btn-primary btn-sm rounded-sm text-white">Add To List</button>
                            </div>
                        </form>

                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default AddEmploy;