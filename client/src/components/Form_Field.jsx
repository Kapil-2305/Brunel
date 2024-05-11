import React, {useState} from 'react'
import logo from '../assets/Brunel_logo.png'
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdError } from "react-icons/md";
import emailjs from 'emailjs-com';

const user_id = import.meta.env.VITE_YOUR_USER_ID;
const service_id =import.meta.env.VITE_YOUR_SERVICE_ID;
const template_id = import.meta.env.VITE_YOUR_TEMPLATE_ID;

const sendEmail = (name, email) => {
    // Configure emailjs-com
    emailjs.init(user_id);

    const templateParams = {
        to_name: 'Brunel Team',
        from_name: name,
        to_email: 'paliwalkapil2004@email.com', // Replace with your email address
        message: `Name: ${name}\nEmail: ${email}`,
        reply_to: email
    };

    emailjs.send(service_id, template_id, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

const Form_Field = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        errors: {
            name: "",
            email: ""
        }
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Validate name
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } 
        else if(!emailRegex.test(formData.email)) {
            errors.email = 'Enter a valid email address';
        }

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Submit form logic
            console.log('Form submitted:', formData);
            sendEmail(formData.name, formData.email);
            navigate('/success');
        } 
        else {
            setFormData({ ...formData, errors });
        }
    };

    const isFormValid = formData.name.trim() && formData.email.trim();

    return (
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between p-8'>
                <div className='flex items-center justify-center cursor-pointer'>
                    <Link to={"/"}>
                        <img src={logo} />
                    </Link>
                </div>
                <Link to={"/"}>
                    <div className='border-2 rounded-full cursor-pointer flex justify-center items-center h-16 w-16'>
                            <IoMdClose size={36}/>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <p className='covered-by-your-grace text-[#2DA950] text-4xl'>Registration Form</p>
                    <p className='font-semibod text-5xl w-8/12 text-center'>Start your success Journey here!</p>
                </div>
                <div>
                    <form className='flex flex-col mt-12 gap-2' onSubmit={handleSubmit}>
                        <div>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                placeholder='Enter your name' 
                                value={formData.name} 
                                onChange={handleChange} 
                                className='border-2 rounded-full p-4 pl-6 w-96 mt-4 bg-[#EFEFEF]' 
                            />
                            {
                                formData.errors.name && 
                                <div className='flex items-center gap-1 text-[#FF0808] mt-1'>
                                    <MdError />
                                    <p>{formData.errors.name}</p>
                                </div>
                            }
                        </div>
                        <div>
                            <input 
                                type='text'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your email' 
                                className='border-2 rounded-full p-4 pl-6 w-96 mt-4 bg-[#EFEFEF]' 
                            />
                            {
                                formData.errors.email && 
                                <div className='flex items-center gap-1 text-[#FF0808] mt-1'>
                                    <MdError />
                                    <p>{formData.errors.email}</p>
                                </div>
                            }
                        </div>
                       
                        <button 
                            type="submit"
                            disabled={!isFormValid}
                            className={`text-white rounded-full p-4 w-96 mt-8 ${isFormValid ? "bg-[#1C1C1C] cursor-pointer" : "bg-[#C9C9C9] cursor-not-allowed"}`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form_Field