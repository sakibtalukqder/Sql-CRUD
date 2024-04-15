// "use client";
import React from 'react';

const Pagination = ({ userCount, currentPage, pageSize, onPageChenge }) => {

    const totalPage = Math.ceil(userCount / pageSize);
    const page = Array.from({ length: totalPage }, (_, i) => i + 1);

    return (
        <div>
            <div className="join">
                {
                    page.map((Index) => {
                        return <>
                            <li className={`join-item btn btn-square ${Index == currentPage ? "defaultChecked" : ""} `} onClick={()=>onPageChenge(Index)}  >{Index}</li>
                        </>
                    })
                }
            </div>
        </div>
    );
};

export default Pagination;