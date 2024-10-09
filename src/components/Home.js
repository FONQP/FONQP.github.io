import React from 'react';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="">
      {/* <Slider {...settings}>
        <div>
          <img src="/copaq.jpg" alt="slider1" className="h-65 w-full object-cover" />
        </div> */}
        <div>
          <img src="/iitmb.jpg" alt="slider2" className="h-65 w-full object-cover" />
        </div>
        {/* <div>
            <img src="/logo.png" alt="slider3" className="h-64 w-full object-cover" />
          </div> */}
      {/* </Slider> */}

      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-sky-900">Fiber Optics, Nano & Quantum Photonics (FONQP) Group</h2>
        <h3 className="text-xl font-bold text-center text-sky-900 mt-1">Advanced Photonics Lab, IIT Khargpur</h3>
        <p className="text-lg text-center mt-4">
          We are a research group working on fiber optics, nano photonics, and quantum photonics.
        </p>
      </div>

      <div className="container mt-10 p-10">
        <h2 className="text-3xl font-bold text-center text-sky-900">Our Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-sky-900">Nonlinear Photonics</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are working on multimode nonlinear fiber optics and nonlinear silicon photonics.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-sky-900">Quantum Photonics</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are working on quantum communication, single-photon, entangled photon pairs, and cavity quantum electrodynamics.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-bold text-sky-900">Optical Wireless Communication</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are working on indoor and underwater optical communication.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-10"></div> */}
    </div>
  );
};

export default Home;
