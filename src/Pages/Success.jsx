import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
const userDataString = localStorage.getItem('user');

// Parse the JSON string back into an object
const userDataObject = JSON.parse(userDataString);

// Access the 'name' property
const user_name = userDataObject.name;

// Now 'user_name' holds the name "Krischal Om Pote"

console.log("username",user_name);
const Success = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const oid = searchParams.get('oid');
    const amt = searchParams.get('amt');
    const refId = searchParams.get('refId');
    const data = { oid, amt, refId ,user_name};

    // Function to handle the data submission to Laravel
    const submitDataToLaravel = async () => {
        try {
            // Replace "http://your-laravel-api-url/api/submitdata" with the actual URL of your Laravel API endpoint
            const response = await axios.post('http://127.0.0.1:8000/api/submitdata', data);
            console.log("response",response);
            const { user } = response.data;

            // Store the user information in local storage
            localStorage.setItem('user', JSON.stringify(user));

            // Get the access token from local storage
            const accessToken = localStorage.getItem('access_token');
            console.log("token",accessToken);
            // Set the authorization header for all subsequent requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            console.log('Data submitted successfully to Laravel!');
        } catch (error) {
            console.error('Error submitting data to Laravel:', error);
        }
    };

    // Call the data submission function when the component mounts
    React.useEffect(() => {
        submitDataToLaravel();
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            {JSON.stringify(data)}
            <h1>Success transfer</h1>
        </>
    );
};

export default Success;
