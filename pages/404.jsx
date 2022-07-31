import Header from './panel/_header'
import Footer from './panel/_mainfooter'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from "react";

export default function error() {

    return (

        <div>
            <Header />
            <div className='h-[88vh] w-full flex justify-center items-center'>
            <h1 className='font-light text-sm'>Aradığınız Yol Çözümlenemedi.</h1>
            </div>
        </div>
    );
}