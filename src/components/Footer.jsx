import React from 'react';
import { facebook, linkedin, logo, pininterest, twitter } from '../assets';
import { contact, navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className='max-w-[1440px] max-h-[417px] bg-stone-900 w-full h-full mt-20 text-white'>
      <div className='flex justify-between items-start p-10'>
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
          <ul className='mt-8 flex  gap-4'>
            <li><img src={facebook} alt="" /></li>
            <li><img src={linkedin} alt="" /></li>
            <li><img src={pininterest} alt="" /></li>
            <li><img src={twitter} alt="" /></li>
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
