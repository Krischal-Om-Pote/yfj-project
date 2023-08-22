import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button } from "antd";
const userDataString = localStorage.getItem("user");

// Parse the JSON string back into an object
const userDataObject = JSON.parse(userDataString);

// Access the 'name' property
// const user_name = userDataObject.name;



// console.log("username", user_name);
const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const oid = searchParams.get("oid");
  const amt = searchParams.get("amt");
  const refId = searchParams.get("refId");
  const data = { oid, amt, refId};
  const invoiceData = [
    { oid: 'ee2c3ca1-696b-4cc5-a6be-2c40d929d453-16476', efId: '0005V7D', amt: 200, userName: 'Krischal Om Pote' },

    // Add more invoice data as needed
  ];
  // Function to handle the data submission to Laravel
  const submitDataToLaravel = async () => {
    try {
      // Replace "http://your-laravel-api-url/api/submitdata" with the actual URL of your Laravel API endpoint
      const response = await axios.post(
        "http://127.0.0.1:8000/api/submitdata",
        data
      );
      console.log("response", response);
      const { user } = response.data;

      // Store the user information in local storage
      localStorage.setItem("user", JSON.stringify(user));

      // Get the access token from local storage
      const accessToken = localStorage.getItem("access_token");
      console.log("token", accessToken);
      // Set the authorization header for all subsequent requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      console.log("Data submitted successfully to Laravel!");
    } catch (error) {
      console.error("Error submitting data to Laravel:", error);
    }
  };

  // Call the data submission function when the component mounts
  React.useEffect(() => {
    submitDataToLaravel();
  }, []); // Empty dependency array to run the effect only once

  const handleRefund= async()=>{
    console.log("HEHE")
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/bookings/:id/cancel",data);
      console.log("response: " + response);
    }catch(e){
      console.log("Error cancelling bookings");
    }
  }
  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Navbar/>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-white p-2 bg-green-600">Successfully transfer</h1>
      </div><br></br>
      Your Invoice
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>OID</TableCell>
              <TableCell align="right">RefId</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.map((invoice) => (
                <TableRow key={invoice.oid}>
                  <TableCell component="th" scope="row">
                    {invoice.oid}
                  </TableCell>
                  <TableCell align="right">{invoice.efId}</TableCell>
                  <TableCell align="right">{invoice.amt}</TableCell>
                  <TableCell align="right">{invoice.userName}</TableCell>
                  <TableCell align="right"><Button className="bg-red-500" onClick={handleRefund}>Refund</Button></TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-[350px]">
      </div>
    </>
  );
};

export default Success;
