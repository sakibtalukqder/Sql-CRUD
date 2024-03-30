
"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AddEmploy from './AddEmploy';


export const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 h-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Sql-CRUD</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-sm" />
          </div>
          <button className="btn rounded-sm btn-outline btn-danger">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>

          <AddEmploy PopupButton={
            <button className="btn rounded-sm btn-outline btn-success">
              <FontAwesomeIcon icon={faUserPlus} /> Add Employee
            </button>
          } />

        </div>
      </div>
    </>
  );
}
