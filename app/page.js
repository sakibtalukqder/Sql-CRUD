"use client"
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout';
import { Header } from './Components/Header';

const page = () => {

  const Alert = () => {
    toast.success("Successfull");
  }

  return (
    <>
      <Header />
      <Layout />
    </>
  );
};

export default page;