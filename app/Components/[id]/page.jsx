"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const BaseUrl = "http://localhost:3000/api";


const page = () => {

    const route = useRouter();
    const { id } = useParams();
    const [Employ, setEmploy] = useState("")

    const getData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/employ/${id}`)
            const result = await response.json()
            if (!response.ok) {
                console.log(response.error);
            }
            if (response.ok) {
                setFullName(result.employ.FullName)
                setEmail(result.employ.email)
                setDesignation(result.employ.Designation)
                setEmploy(result)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])

    const [FullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [Designation, setDesignation] = useState('')

    const putData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BaseUrl}/employ/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({FullName, email, Designation})
            })
            if (!response.ok) {
                console.log(response.error);
            }
            if (response.ok) {
                console.log(response.json());
                route.push('/');
            }
        } catch (error) {

        }
    }

    console.log(FullName, email, Designation);

    return (
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

                    <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                        Employ Profile
                    </a>
                    
                    <Link href="/"
                        className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
                        Home
                    </Link>

                </div>
            </aside>
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <form onSubmit={putData} className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                        {
                            typeof (Employ) == "object" ?
                                <>
                                    <div className="grid max-w-2xl mx-auto mt-8">
                                        <div className="flex flex-col items-center space-y-1 sm:flex-row sm:space-y-0">

                                            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=htmlFormat&fit=crop&w=500&q=60"
                                                alt="Bordered avatar" />

                                            <div className="flex flex-col space-y-5 sm:ml-8">
                                                <button type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                                    Change picture
                                                </button>
                                                <button type="button"
                                                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                                    Delete picture
                                                </button>
                                            </div>
                                        </div>

                                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                                            <div
                                                className="flex flex-col items-center w-full space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                                                <div className="w-full">
                                                    <label htmlFor="first_name"
                                                        className="block text-sm font-medium text-indigo-900 dark:text-white">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        type="text" id="first_name"
                                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                                        placeholder="Your first name" defaultValue={Employ.employ.FullName} required />
                                                </div>

                                            </div>

                                            <div className="">
                                                <label htmlFor="email"
                                                    className="block text-sm font-medium text-indigo-900 dark:text-white">
                                                    Email</label>
                                                <input
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email" id="email"
                                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                                    defaultValue={Employ.employ.email} required />
                                            </div>

                                            <div className="">
                                                <label htmlFor="profession"
                                                    className="block text-sm font-medium text-indigo-900 dark:text-white">
                                                    Designation
                                                </label>
                                                <input
                                                    onChange={(e) => setDesignation(e.target.value)}
                                                    type="text" id="profession"
                                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                                    defaultValue={Employ.employ.Designation} required />
                                            </div>
                                        </div>
                                        <div className="flex justify-end my-4">
                                            <button type="submit"
                                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                                        </div>

                                    </div>
                                </>
                                : <></>
                        }
                    </form>
                </div>
            </main>
        </div>
    );
};

export default page;