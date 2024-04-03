"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditEmploy from './EditEmploy';
import Pagination from './Pagination';
import Link from 'next/link';

const BaseUrl = "http://localhost:3000/api";



const Layout = () => {

    // const ImageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&psig=AOvVaw2auMKJwoxHD1Zw5Q_A22fn&ust=1712079762005000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDarqPIoYUDFQAAAAAdAAAAABAE"

    const [Employ, setEmploy] = useState();

    const getEmploy = async () => {
        try {
            const response = await fetch(`${BaseUrl}/employ`)
            const result = await response.json();

            if (!response.ok) {
                console.log(result.error);
            }

            if (response.ok) {
                setEmploy(result);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEmploy();
    }, [])

    console.log("Employ List : ", Employ);

    return (
        <div className='  md:my-12 lg:my-8 my-0'>
            <div className="overflow-x-auto border-black border-2 p-4">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg text-blue-500'>
                        <tr>
                            <th><label>
                                <input type="checkbox" className="checkbox" />
                            </label></th>
                            <th>Name & Email</th>
                            <th>Designation</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(Employ) ? Employ.map((Employ, Index) => (
                                <tr key={Index}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <Link href={`/Components/${Employ.id}`} className="rounded-full w-12 h-12 border border-gray-900">
                                                    <div className='font-bold text-2xl text-center my-2'>{Employ.FullName.charAt(0).toUpperCase()}</div>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="font-bold">{Employ.FullName}</div>
                                                <div className="text-sm opacity-50">{Employ.Email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{Employ.Designation}</td>
                                    <th className='flex justify-center pt-6'>

                                        <EditEmploy PopupButton={
                                            <>
                                                <FontAwesomeIcon icon={faEdit} /> Edit
                                            </>
                                        } />

                                        <button className="btn btn-ghost btn-xs"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                    </th>
                                </tr>
                            )) : <tr>
                                <td colSpan={4} className='text-center text-red-600 text-xl p-4 font-bold'>Server Failer Please Wait
                                    <br />  <div className="loading loading-dots loading-lg"></div></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center my-8'><Pagination /></div>
        </div>
    );
};

export default Layout;