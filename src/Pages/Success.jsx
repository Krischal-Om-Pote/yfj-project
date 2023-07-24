import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Success = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const oid = searchParams.get('oid');
    const amt = searchParams.get('amt');
    const refId = searchParams.get('refId');
    const data = { oid, amt, refId };

    // Function to handle the data submission to Laravel
    const submitDataToLaravel = async () => {
        try {
            // Replace "http://your-laravel-api-url/api/submitdata" with the actual URL of your Laravel API endpoint
            await axios.post('http://127.0.0.1:8000/api/submitdata', data);
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
