"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditEmploy from './EditEmploy';
import Pagination from './Pagination';

const Employ = [
    {
        FullName: "Sakib Talukqder",
        Email: "sakibtalukqder07@gmail.com",
        Designation: "CTO",
        ImageUrl: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/428687601_1483747542483678_8072867145600877066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHE1U3k2QWpi6s_c1k7plNyU-8rmwegHTBT7yubB6AdMGZYoW_M10mLoQkBYWLmQqsow2P4Ah4q0xChX59qyRnf&_nc_ohc=6RraTFo65xIAX9xXS7n&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBGHAu8UFecVVEmKE9_Oxj9u4jZ5YIM4ViDsAX6BSOnZA&oe=660A41BF",
    },
    {
        FullName: "Sakib Talukqder",
        Email: "sakibtalukqder07@gmail.com",
        Designation: "CTO",
        ImageUrl: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/428687601_1483747542483678_8072867145600877066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHE1U3k2QWpi6s_c1k7plNyU-8rmwegHTBT7yubB6AdMGZYoW_M10mLoQkBYWLmQqsow2P4Ah4q0xChX59qyRnf&_nc_ohc=6RraTFo65xIAX9xXS7n&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBGHAu8UFecVVEmKE9_Oxj9u4jZ5YIM4ViDsAX6BSOnZA&oe=660A41BF",
    },
    {
        FullName: "Sakib Talukqder",
        Email: "sakibtalukqder07@gmail.com",
        Designation: "CTO",
        ImageUrl: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/428687601_1483747542483678_8072867145600877066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHE1U3k2QWpi6s_c1k7plNyU-8rmwegHTBT7yubB6AdMGZYoW_M10mLoQkBYWLmQqsow2P4Ah4q0xChX59qyRnf&_nc_ohc=6RraTFo65xIAX9xXS7n&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBGHAu8UFecVVEmKE9_Oxj9u4jZ5YIM4ViDsAX6BSOnZA&oe=660A41BF",
    },
    {
        FullName: "Sakib Talukqder",
        Email: "sakibtalukqder07@gmail.com",
        Designation: "CTO",
        ImageUrl: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/428687601_1483747542483678_8072867145600877066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHE1U3k2QWpi6s_c1k7plNyU-8rmwegHTBT7yubB6AdMGZYoW_M10mLoQkBYWLmQqsow2P4Ah4q0xChX59qyRnf&_nc_ohc=6RraTFo65xIAX9xXS7n&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBGHAu8UFecVVEmKE9_Oxj9u4jZ5YIM4ViDsAX6BSOnZA&oe=660A41BF",
    },
    {
        FullName: "Sakib Talukqder",
        Email: "sakibtalukqder07@gmail.com",
        Designation: "CTO",
        ImageUrl: "https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/428687601_1483747542483678_8072867145600877066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHE1U3k2QWpi6s_c1k7plNyU-8rmwegHTBT7yubB6AdMGZYoW_M10mLoQkBYWLmQqsow2P4Ah4q0xChX59qyRnf&_nc_ohc=6RraTFo65xIAX9xXS7n&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBGHAu8UFecVVEmKE9_Oxj9u4jZ5YIM4ViDsAX6BSOnZA&oe=660A41BF",
    },
]

const Layout = () => {
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
                            Employ.map((Employ, Index) => (
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle rounded-full w-12 h-12">
                                                    <img src={Employ.ImageUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
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
                                            <button className="btn btn-ghost btn-xs">
                                                <FontAwesomeIcon icon={faEdit} /> Edit
                                            </button>
                                        } />

                                        <button className="btn btn-ghost btn-xs"><FontAwesomeIcon icon={faTrash} /> Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center my-8'><Pagination /></div>
        </div>
    );
};

export default Layout;