
import Heading from '../common/Heading';
import FormRow from '../common/FormRow';
import { image12 } from '../assets';
import Button from '../common/Button';

function Contact() {
   
  return (
    <section className='mt-[450px] sm:my-20 relative'>
      <Heading>Contact Us</Heading>
      <div className='flex flex-col sm:flex-row max-h-[400px] mt-5 gap-5 relative'> 
        <form className='flex flex-col gap-3 sm:w-[40%]'>
        <FormRow name='name'/>
        <FormRow name='Phone Number'/>
        <FormRow name='Email'/>
        <FormRow name='Interested in'/>
        <FormRow name='message'/>
        </form>
        <div className='sm:w-[60%]'>
            <img src={image12} alt="" className='w-[100%] h-[100%]' />
        </div>
      </div>
      <div className='mt-5'>
        <Button name="SEND EMAIL" img='leftArow' color='black'/>
      </div>
    </section>
  );
}

export default Contact;
