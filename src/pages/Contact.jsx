import React from 'react';
import Heading from '../common/Heading';
import { contact } from '../constants';
import Button from '../common/Button';

const Contact = () => {
  return (
    <div className='flex max-w-[1170px] max-h-[501px]'>
      <section className='w-1/2 flex flex-col gap-5'>
        <div>
        <Heading>
          Contact
        </Heading>
        <h1 className='text-gray-800 text-6xl leading-[64px] font-bold'>
          Information
        </h1>
        </div>
        <div className='leading-5'> 
          <h1 className='text-stone-950 font-bold'>Company Name</h1>
          <p className='l text-stone-500'>
            {contact.address}
          </p>
        </div>

      <h1 className='text-stone-950 font-bold leading-5'>
        {contact.phone}
      </h1>
        <p>{contact.email}</p>
        <div>
        <Button color='black' name='CONTACT US'/>
        </div>
        
      </section>
      <section className='w-1/2'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564999589149!2d80.22835409039162!3d13.042593646466964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711088293916!5m2!1sen!2sin" 
       className='w-full h-full'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
}

export default Contact;
