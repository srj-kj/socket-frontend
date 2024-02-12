/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import TimerApp from '../../components/Timer';
import { logout } from '../../Redux/User';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { connectSocket, socket } from '../../utils/socket';


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login')
  }
  useEffect(() => {
    if (!socket) {
      connectSocket()
    }})
  useEffect(() => {
    socket?.on('logout', () => { 
      dispatch(logout());
      navigate('/login');
    });

    return () => {
      socket?.on('logout');
    };
  });

  return (
    <div className="w-full">
      <div className="relative w-full h-screen ">
        <button
          className="absolute top-0 right-0 m-4 p-2 text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg z-10"
          onClick={handleSignout}
        >
          Signout
        </button>

        <img
          src="https://static.vecteezy.com/system/resources/previews/026/257/684/original/glassmorphism-gradient-design-with-round-shape-frame-glass-morphism-background-with-geometric-glossy-matte-circle-overlay-minimal-banner-creative-layout-modern-smooth-dynamic-illustration-vector.jpg"
          className="rounded mt-8 md:mt-0 w-full h-full object-fit"
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            WELCOME TO THE HOME
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
  