"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseUrl = "http://localhost:3000/api";

const Layout = () => {


    const [Employ, setEmploy] = useState([]);

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

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${BaseUrl}/employ/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                console.log(response.error);
                toast.error("Deleted Data Unsuccessfull .... !")
            }
            if (response.ok) {
                toast.success("Deleted Data Successfull .... !")
                console.log(response.json());
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const Pagenate = (data, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize;
        return data.slice(startIndex, startIndex + pageSize);
    };

    const [currentPage, setCurrectPage] = useState(1);
    const pageSize = 5;
    const onPageChenge = (page) => {
        setCurrectPage(page)
    }

    const pagenatedUser = Pagenate(Employ, currentPage, pageSize)


    return (
        <div className='  md:my-12 lg:my-8 my-0'>
            <ToastContainer />
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
                            Array.isArray(Employ) ? pagenatedUser.map((Employ, Index) => (
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
                                                <div className="text-sm">{Employ.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{Employ.Designation}</td>
                                    <th className='flex justify-center pt-6'>
                                        <Link href={`/Components/${Employ.id}`} className="btn btn-ghost btn-xs" ><FontAwesomeIcon icon={faEdit} /> Profule</Link>
                                        <button onClick={() => deleteUser(Employ.id)} className="btn btn-ghost btn-xs"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                    </th>
                                </tr>
                            )) : <tr>
                                <td colSpan={4} className='text-center text-md p-4 font-bold'>Fetching Data, Please Wait
                                    <br />  <div className="loading loading-dots loading-lg"></div></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center my-8'>
                {
                    Array.isArray(Employ) ? <>
                        <Pagination userCount={Employ.length} currentPage={currentPage} pageSize={pageSize} onPageChenge={onPageChenge} />
                    </> : ""
                }
            </div>
        </div>
    );
};

export default Layout;