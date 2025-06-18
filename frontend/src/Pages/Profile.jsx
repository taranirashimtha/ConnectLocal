import React, { useContext } from 'react';
import Cartitems from '../Components/CartItems/Cartitems';
import { ServiceContext } from '../Context/ServiceContext';

const Profile = () => {
    const { user } = useContext(ServiceContext);
    
    console.log('Profile component rendering with user:', user);

    return (
        <div>
            
            <Cartitems />
        </div>
    );
}

export default Profile;
