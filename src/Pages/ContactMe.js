import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
function ContactMe() {
    const form = useRef();
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // Your form submission logic here
    
    //     // After submitting, reset the form values
        
    //   };
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m7ho3ce', 'template_h1z83ew', form.current, 'ARWJCmMRpIEjLZ7qA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById('form').reset();
        setFormData({
            fname: '',
            lname:'',
            email: '',
            message:''
        });
        // handleSubmit()
    };
    const [formData, setFormData] = useState({
        fname: '',
        lname:'',
        email: '',
        message:''

       
      });
    
     
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <div>
        <section id='Contact' className='contact--section'>
            <div>
                <p className='sub--title'>Get In Touch</p>
                <h2 className='skills--section--heading'>Contact Me</h2>
                {/* <p className='text-lg'>The sun dipped below the horizon, casting a warm glow across the tranquil landscape. Birds chirped their evening melody as a gentle breeze rustled the leaves.</p> */}
            </div>
            <form id='form' ref={form} className='contact--form--container' onSubmit={sendEmail}>
                <div className='container'>
                    <label htmlFor='first-name' className='contact--label'>
                        <span className='text-md'>First Name</span>
                        <input 
                        type="text"
                        className='contact--input text-md'
                        name='fname'
                        id='first-name'
                        value={formData.fname}
                        onChange={handleChange}
                        // placeholder='Enter Your First Name'
                        required                        
                        />
                    </label>
                    <br></br>
                    <label htmlFor='last-name' className='contact--label'>
                        <span className='text-md'>Last Name</span>
                        <input 
                        type="text"
                        className='contact--input text-md'
                        name='lname'
                        id='last-name'
                        value={formData.lname}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <br></br>
                    <label htmlFor='email' className='contact--label'>
                        <span className='text-md'>Email</span>
                        <input 
                        type="email"
                        className='contact--input text-md'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </label>
                    <br></br>
                    {/* <label htmlFor='phone-number' className='contact--label'>
                        <span className='text-md'>Phone Number</span>
                        <input 
                        type="number"
                        className='contact--input text-md'
                        name='phone-number'
                        id='phone-number'
                        required
                        />
                    </label> */}
                    {/* <br></br> */}
                    {/* <label htmlFor='choose-topic' className='contact--label'>
                        <span className='text-md'>Choose a topic</span>
                       <select id='choose-topic' className='contact-input text-md' >
                        <option>Select One...</option>
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                       </select>
                    </label> */}
                    <label htmlFor='message' className='contact--label message1'>
                        <span className='text-md'>Message</span>
                        <textarea 
                       
                        className='contact--input text-md'
                        name='message'
                        id='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows="8"
                        placeholder='Type your message...'
                        />
                    </label>
                    {/* <label htmlFor='checkbox' className='checkbox--label'>
                        <input type="checkbox" required name='checkbox' id='checkbox'/>
                        <span className='text-sm'>I accept the terms</span>
                    </label> */}
                    {/* <br></br> */}
                    <div>
                        <button className='btn btn-primary contact--form--btn'  >Submit</button>
                    </div>
                </div>
            </form>
            
        </section>
    </div>
  )
}

export default ContactMe