import React from 'react';
import Navbar from '../Components/Navbar'
const About = () => {
  return (
    
    <div className="container mx-auto ">
      <Navbar/>
      <h1 className=" mt-4 text-4xl font-bold text-center mb-8">About Us</h1>
      
      <section className=" mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Company</h2>
        <p className="text-lg">
          Welcome to our company! We are a team of dedicated professionals passionate about providing high-quality products and services to our customers. With years of experience in the industry, we strive to exceed expectations and deliver exceptional results.
        </p>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Krischal Om Pote</h3>
            <p className="text-lg mb-4">CEO</p>
            <p className="text-gray-700">Krischal is an experienced leader with a passion for innovation and strategic growth. He guides our company towards success and ensures that our team is motivated and focused on achieving our goals.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Sandeep Bhatta</h3>
            <p className="text-lg mb-4">Marketing Director</p>
            <p className="text-gray-700">Sandeep is a creative marketing professional who spearheads our branding and promotional efforts. She has a keen eye for market trends and helps us reach a wider audience.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Ram KC</h3>
            <p className="text-lg mb-4">Technical Lead</p>
            <p className="text-gray-700">Ram is a skilled software engineer who oversees our technical projects. He ensures the delivery of robust and scalable solutions that meet the needs of our clients.</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Mission & Goals</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="text-lg">Our mission is to provide exceptional products and services that enhance the lives of our customers. We aim to exceed their expectations by delivering innovative solutions and unparalleled customer support.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg mt-4 md:mt-0 md:ml-4">
            <h3 className="text-xl font-bold mb-2">Goals</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Deliver outstanding customer satisfaction</li>
              <li>Drive continuous innovation and improvement</li>
              <li>Build strong and long-lasting partnerships</li>
              <li>Empower our team members to thrive and grow</li>
              <li>Contribute positively to our community and environment</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
