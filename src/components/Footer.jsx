import React from 'react';
import { facebook, linkedin, logo, pininterest, twitter } from '../assets';
import { contact, navLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className='max-w-[1440px] sm:max-h-[417px] bg-stone-900 w-full h-full mt-20 text-white relative'>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between sm:items-start items-center gap-5 sm:p-10'>
        <div className='bg-gray-400'><img src={logo} alt="Logo" className='w-[100%] h-[100%]'/></div>
        <div>
        <h1 className='text-xl'> Information</h1>
          <ul className='mt-8 flex flex-col gap-4 items-start'>
            {navLinks.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
            <h1 className='text-xl'>Contacts</h1>
          <ul className='mt-8 flex flex-col gap-4 items-start'>
            <li>
              <div className="flex items-center gap-3">
                <img src={contact.addressIcon} alt="Address Icon" />
                <span>{contact.address}</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <img src={contact.emailIcon} alt="Email Icon" />
                <span>{contact.email}</span>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <img src={contact.phoneIcon} alt="Phone Icon" />
                <span>{contact.phone}</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
            <h1 className='text-xl'>Social Media</h1>
          <ul className='mt-8 flex gap-4'>
            {socialMedia.map((media,index)=><li key={index} className='hover:scale-125'><img src={media} alt=""/></li>)}
          </ul>
        </div>
      </div>
      <div className=' border-stone-600 border-t-2 text-center text-stone-600 py-2'>
        <h1>©2024 All Rights Reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
