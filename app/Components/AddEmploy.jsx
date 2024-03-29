"use client";
import React from 'react';

const AddEmploy = ({ PopupButton }) => {
    return (
        <div>
            <button onClick={() => document.getElementById('AddEmploy').showModal()}>{PopupButton}</button>

            <dialog id="AddEmploy" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Employ</h3>
                    <div className="py-4">

                        <form class="max-w-md mx-auto">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="FullName" id="FullName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="FullName" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="email" name="Email" id="Email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="Designation" id="Designation" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Designation" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Designation</label>
                            </div>
                            <div className='flex justify-end pt-7'>
                                <form method="dialog">
                                    <button className="btn btn-sm rounded-sm mx-2">Close</button>
                                </form>
                                <button type="submit" class="btn btn-primary btn-sm rounded-sm text-white">Add To List</button>
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