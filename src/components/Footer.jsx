"use client"

import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  return (
    <div className='flex flex-col'>
        <div className='flex flex-col p-[80px] pt-[100px] gap-[20px] bg-[#FAFAFA]'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Stay Informed</h4>
                    <p className='text-[#525557] text-[20px]'>Get updates on fun stuff you probably want to know <br /> about in your inbox</p>
                    <div className='space-x-[10px]'>
                        <input type="email" className='px-[20px] py-[15px] text-[20px] rounded-md border border-[#E0EFDC] input-shadow' placeholder='Email address' />
                        <button className='px-[20px] py-[15px] text-[20px] rounded-md btn-primary hover:btn-primary1 text-white font-bold'>Subscribe</button>
                    </div>
                    <Image src='/logo.png' width={269.45} height={79.31} className='pt-[30px]' />
                    <p className='flex text-[20px] gap-[5px] pt-[15px]'>By <Image src='/sirmo_logo.png' width={16} height={13} /> Sirmo</p>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Product</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Pricing</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>FAQ</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Examples</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Blog</Link>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Company</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>About Us</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Jobs</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Support</Link>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Industries</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>E-Commerce</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Marketing</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>HospitaLinkty</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Retail</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Content Creation</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>All industries</Link>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Legal</h4>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Terms of Service</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Privacy poLinkcy</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Disclaimer</Link>
                    <Link href='/' className='text-[#525557] hover:text-[#8e8f90] text-[20px]'>Cookies</Link>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h4 className='text-[#212427] text-[28px] font-semibold'>Social</h4>
                    <Link href='/' className='flex items-center gap-[10px] text-[20px] text-[#525557] hover:text-[#8e8f90]'>
                        <FaXTwitter className='bg-[#8e8f90] hover:bg-[#818080] p-[3px] rounded-md text-[30px] font-bold' />
                        X
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[20px] text-[#525557] hover:text-[#8e8f90]'>
                        <RiFacebookFill className='bg-[#8e8f90] hover:bg-[#818080] p-[3px] rounded-md text-[30px] font-bold' />
                        Facebook
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[20px] text-[#525557] hover:text-[#8e8f90]'>
                        <FaLinkedinIn className='bg-[#8e8f90] hover:bg-[#818080] p-[3px] rounded-md text-[30px] font-bold' />
                        LinknkedIn
                    </Link>
                    <Link href='/' className='flex items-center gap-[10px] text-[20px] text-[#525557] hover:text-[#8e8f90]'>
                        <FaInstagram className='bg-[#8e8f90] hover:bg-[#818080] p-[3px] rounded-md text-[30px] font-bold'/>
                        Instagram
                    </Link>
                </div>
            </div>

            <div>
                <p className='flex justify-end pr-[20px] text-[20px] text-[#525557] gap-[5px]'>
                    &copy; 2017-2024 Giveawayhopper. All rights reserved &bull; 
                    <Image src='/leaf-footer.png' width={18.86} height={17.26} />
                    CO2 Neutral since launch &bull;
                    Made with <Image src='/heart-footer.png' width={16} height={13} />
                    in The Netherlands 
                </p>
            </div>
        </div>

        <div className='flex justify-between px-[100px] py-[30px] bg-[#F3F3F3]'>
            <div>
                <Image src='/gdpr.png' width={109} height={53} />
            </div>

            <div>
                <Image src='/payment-icons.png' width={446.36} height={53} />
            </div>
        </div>
    </div>
  )
}

export default Footer