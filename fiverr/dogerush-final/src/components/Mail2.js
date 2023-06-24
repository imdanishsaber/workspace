import React, { useState, } from 'react';
import emailjs from 'emailjs-com';
import { allCountries } from 'country-telephone-data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SendMessage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        investmentBudget: '',
        bestTimeToContact: ''
    });
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const sendEmail = (e) => {
        e.preventDefault();
        setloading(true)
        const phoneNumber = form.countryCode + form.phone;

        emailjs.send('service_2uya8og', 'template_kvz8dn9', { ...form, phone: phoneNumber }, 'OUWwwcmLVg3wY_lDW')
            .then((result) => {
                console.log(result.text);
                navigate('/');
                toast.success("Submitted Successfully!")
                setloading(false)
            }, (error) => {
                console.log(error.text);
                setloading(false)
            });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    const investmentBudgetOptions = [
        { value: '$0 - $5k', label: ' $0 - $5k' },
        { value: '$5k - $10k', label: '$5k - $10k' },
        { value: '$10k - $25k', label: '$10k - $25k' },
        { value: '$25k - $50k', label: '$25k - $50k' },
        { value: '$50k +', label: '  $50k +' },
    ];

    const bestTimeToContactOptions = [
        { value: 'Morning', label: 'Morning' },
        { value: 'Afternoon', label: 'Afternoon' },
        { value: 'Evening', label: 'Evening' },
    ];

    return (
        <form onSubmit={sendEmail}>
            <div className='first'>
                <div className='item'>
                    <input id='firstName' required={true} type='text' placeholder='Enter First Name' onChange={handleChange} />
                </div>
                <div className='item'>
                    <input id='lastName' required={true} type='text' placeholder='Enter Last Name' onChange={handleChange} />
                </div>
            </div>
            <div className='second'>
                <select id='countryCode' onChange={handleChange}>
                    <option value="" disabled selected hidden>Select Country Code</option>
                    {allCountries.map((country, index) =>
                        <option key={index} value={country.dialCode}>{`${country.name} (+${country.dialCode})`}</option>
                    )}
                </select>
                <div className='item'>
                    <input id='phone' required={true} type='number' placeholder='Enter Phone Number' onChange={handleChange} />
                </div>
                <input id='email' required={true} type='email' placeholder='Enter Email' onChange={handleChange} />
            </div>
            <div className='third'>
                <select id='investmentBudget' required={true} onChange={handleChange}>
                    <option value="" disabled selected hidden>Investment Budget</option>
                    {investmentBudgetOptions.map((item, i) => {
                        return (
                            <option key={i} value={item.value}>{item.label}</option>
                        )
                    })}
                </select>
                <select id='bestTimeToContact' required={true} onChange={handleChange}>
                    <option value="" disabled selected hidden>Best Time To Contact</option>
                    {bestTimeToContactOptions.map((item, i) => {
                        return (
                            <option key={i} value={item.value}>{item.label}</option>
                        )
                    })}
                </select>
                <button>{loading ? "Submitting..." : "Submit"}</button>
            </div>
        </form>
    );
}

export default SendMessage;
