
import Heading from '../common/Heading';
import FormRow from '../common/FormRow';
import { image12 } from '../assets';
import Button from '../common/Button';

function Contact() {
   
  return (
    <section>
      <Heading>Contact Us</Heading>
      <div className='flex max-h-[400px] gap mt-5'> 
        <form className='flex flex-col gap-3 w-1/3'>
        <FormRow name='name'/>
        <FormRow name='Phone Number'/>
        <FormRow name='Email'/>
        <FormRow name='Interested in'/>
        <FormRow name='message'/>
        </form>
        <div className='w-2/3'>
            <img src={image12} alt="" className='w-[100%] h-[100%]' />
        </div>
      </div>
      <div>
        <Button name="SEND EMAIL" img='leftArrow' color='black'/>
      </div>
    </section>
  );
}

export default Contact;
