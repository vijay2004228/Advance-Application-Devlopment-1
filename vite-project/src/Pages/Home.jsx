import React from 'react';
import Navbar from '../Components/Navbar';
import AdminSidebar from '../Components/AdminSidebar';

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <AdminSidebar />
      </div>
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h2>Welcome to Our Event Management System!</h2>
        <p>This is the home page of our application. You can navigate to different sections using the links in the sidebar.</p>
      </div>
    </div>
  );
}

export default Home;