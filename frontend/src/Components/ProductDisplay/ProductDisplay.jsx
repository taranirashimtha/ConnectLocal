import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import phone_icon from '../Assets/phone_icon.png';
import chat_icon from '../Assets/chat_icon.png';  // Import chat icon
import profileImage from '../Assets/profileImage.png';  // Import profile image
import { ServiceContext } from '../../Context/ServiceContext';
import axios from 'axios';  // Import axios for making HTTP requests

const ProductDisplay = (props) => {
    const { product } = props;
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { addToCart } = useContext(ServiceContext);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedDate = new Date(date);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            alert("Selected date and time cannot be in the past");
            return;
        }
        const authToken = localStorage.getItem('auth-token');
        if (!authToken) {
            alert("You must be logged in to book a service");
            return;
        }

        const bookingData = {
            name,
            date,
            address,
            phoneNumber,
            productId: product.id
        };

        try {
            // Submit booking data
            const bookingResponse = await fetch('https://connect-local-backendnew.onrender.com/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(bookingData)
            });

            const bookingResult = await bookingResponse.json();

            if (bookingResult.success) {
                console.log("Form submitted with data:", bookingData);
                alert("Successfully booked");

                // Send SMS
                const smsData = {
                
                    to: `+91${product.phone?.toString().trim()}`, // ensure it's a string and trim any spaces

                    message: `Hi, you have a new booking from ${name}. Here are the details:\nName: ${name}\nDate: ${date}\nAddress: ${address}\nPhone: ${phoneNumber}`

                };

                try {
                    const smsResponse = await axios.post('https://connect-local-backendnew.onrender.com/api/send-sms', smsData);
                    console.log('SMS sent successfully:', smsResponse.data);
                } catch (smsError) {
                    console.error('Error sending SMS:', smsError);
                }

            } else {
                alert("Failed to book");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Server error while submitting the form");
        }
    };

    const handlePhoneIconClick = () => {
        const message = `Phone number: ${phoneNumber}\nCopy to clipboard?`;
        if (window.confirm(message)) {
            navigator.clipboard.writeText(phoneNumber)
                .then(() => {
                    alert('Phone number copied to clipboard');
                })
                .catch((err) => {
                    console.error('Could not copy text: ', err);
                });
        }
    };

    const handleChatIconClick = () => {
        const whatsappNumber = '+1234567890';  // Replace with the actual phone number
        const message = encodeURIComponent(`Hello, I would like to inquire about ${product.name}.`);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    if (!product) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
                
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {/* Insert star rating logic or images here */}
                </div>
                <div className="productdisplay-right-prices">
                    {product.price}
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="header">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <div className="header-info">
                        <h2>{product.user || 'User Name'}</h2>
                    </div>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required />
                        <label htmlFor="date">SELECT DATE AND TIME</label>
                        <input
                            type="datetime-local"
                            id="date"
                            value={date}
                            onChange={handleDateChange}
                            required />
                        <label htmlFor="address">Your address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={handleAddressChange}
                            required />
                        <label htmlFor="phone">Your phone number</label>
                        <input
                            className='phone'
                            type="tel"
                            id="phone"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            required />
                        <div className="contact-icons">
                            <img src={phone_icon} alt="Phone" className="phone-icon" onClick={handlePhoneIconClick} />
                            <img src={chat_icon} alt="Chat" className="chat-icon" onClick={handleChatIconClick} />
                        </div>
                        <button className="submit-button" type="submit" onClick={() => { addToCart(product.id) }}>BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
