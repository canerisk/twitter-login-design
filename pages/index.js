import Head from 'next/head'
import Img from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Header from './panel/_header'
import Link from 'next/link'
import Footer from './panel/_mainfooter'
import { Dialog, Menu, Listbox, Switch, Popover, Tab, Transition, Disclosure } from '@headlessui/react'
import React, { useEffect,useState } from "react";
export default function Home() {
  const TwitterBackground =  {
    backgroundImage: `url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (

    <div>
        <Header />
        <div className='flex justify-center fixed w-full mt-5'>
        <div className='bg-black shadow-xl lg:w-[30rem] md:w-[30rem] mx-5 px-5   text-start flex items-center h-20 w-full rounded-r-xl lg:fixed md:fixed rounded-t-xl py-2 lg:top-[595px] md:top-[595px]  left-7'>
          <div className='w-3  absolute mt-20 -ml-6 shadow-red-500  h-3 bg-red-500 rounded-full'></div>
          <div>
          <h1 className=' font-semibold'>
            Merhaba! Hiç düşünmediğin kadar yenilikler ekledik!
          </h1>
          <h4 className='text-xs text-gray-400'>Yenilikleri görmek için twitter`a kayıt ol.</h4>
          </div>
        </div>
        </div>
          <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col'>

            {/* BACKGROUND */}
           <div style={TwitterBackground} className='h-[25vh] lg:h-[100vh] md:h-[100vh] sm:h-[30vh] flex items-center justify-center w-[100%]'>
              <svg  height="209px" className='fill-current w-[126px] lg:w-[256px] md:w-[256px] sm:w-[126px] text-white' viewBox="0 0 256 209" version="1.1" ><path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259" ></path></svg>
           </div>

           <div className=' lg:w-[65rem] md:w-[65rem] sm:w-auto w-auto px-8'>
              <div className='lg:inline md:inline sm:hidden hidden'>
              <svg width="32px" height="142px" className='fill-current text-white' viewBox="0 0 256 209" version="1.1" ><path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259" ></path></svg>
              </div>
              <div>
                <h1 className=' lg:text-5xl md:text-5xl sm:text-4xl text-4xl max-w-sm lg:max-w-sm md:max-w-sm sm:max-w-2xl lg:text-start md:text-start sm:text-center lg:pt-0 md:pt-0 sm:pt-12 pt-12 tracking-wide leading-[40px] lg:leading-[60px] md:leading-[60px] sm:leading-[40px]  font-extrabold'>Şu anda olup bitenler</h1>
                <h4 className='md:mt-12 lg:mt-12 sm:mt-12 mt-8 text-2xl font-bold'>Twitter'a bugün katıl.</h4>
              </div>
              <div className='flex flex-col text-black w-full lg:w-64 md:w-64 sm:w-full gap-y-2 text-center mt-5'>
                <a href='' className='bg-white hover:bg-gray-100 py-2 flex justify-center gap-2 items-center rounded-full px-2 text-xs'>
                  <img className='w-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png'></img>
                  Google ile kaydolun
                  </a>
                <a href='' className='bg-white hover:bg-gray-100 py-2 flex items-center justify-center gap-2 font-bold rounded-full px-2 text-xs'>
                  <img className='w-4' src='https://n11scdn.akamaized.net/a1/1024/otomotiv-motosiklet/arma-sticker/apple-logo-elma-macintosh-logo-sticker-01561__0764503807941126.jpg'></img>
                  Apple ile kaydolun
                  </a>
                  <div className='my-2 text-white'>
                  <div className='w-full bg-gray-800 h-[0.10px] flex items-center justify-center'>
                  <div className='flex justify-center'><h4 className='text-xs bg-black px-2'>veya</h4></div>
                  </div>
                  <a href='' className='bg-[#1D9BF0] mt-4 hover:bg-blue-500 py-2 flex items-center justify-center gap-2 font-medium rounded-full px-2 text-xs'>
                  Telefon numarası ile kaydolun
                  </a>
                  <h4 className='text-[0.6rem] text-start mt-1 text-gray-400'>By signing up, you agree to the <a href='' className='text-blue-400 hover:underline'>Terms of Service</a> and <a href='' className='text-blue-400 hover:underline'>Privacy Policy</a>, including <a href='' className='text-blue-400 hover:underline'>Cookie Use</a>.</h4>
                  </div>
                  <div className='text-white  lg:mt-12 md:mt-12 sm:mt-12 mt-8  '>
                    <h1 className='text-sm text-start'>Zaten bir hesabın var mı?</h1>
                    <a href='' className='bg-black mt-2 hover:bg-blue-500 text-blue-500 hover:bg-opacity-5 border border-gray-500 py-2 flex items-center justify-center gap-2 font-bold rounded-full px-2 text-xs'>
                  Giriş Yap
                  </a>
                  </div>
              </div>
           </div>
           </div>
        
    </div>

  )

}

