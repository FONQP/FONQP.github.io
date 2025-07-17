import React from 'react';

const About = () => {
  return (
    <div className="p-10 min-h-screen">
        <h1 className="text-center text-5xl font-bold text-gray-700">About FONQP Group</h1>
      <div className="p-1 md:p-12 lg:p-16 mx-5">
        {/* add some gap */}
        <div className="h-6"></div>
        <div className="flex flex-col md:flex-row mt-5">
          <div className="md:w-3/4">
            <p className="text-2 text-justify text-sky-900">
              Fiber Optics,Nano & Quantum Photonics (FONQP) Group, Advanced Photonics Lab is involved extensively in different domains of the photonics, both theoretically and experimetnally. Currently, the prime focus of our group is towards nonlinear photonics (multimode nonlinear fiber optics, nonlinear silicon photonics), quantum photonics (quantum communication, single-photon, entangled photon pairs, cavity quantum electrodynamics), optical wireless communication (indoor and underwater optical communication) and fiber-optic metadevices. The lab is equipped with the Optical Spectrum Analyzer (Yokogawa, 10 pm resolution), tunable laser source (1440 nm-1640 nm), 1064 nm, sub-nano second laser source, and other characterization facilities. The lab is also partnered with the other grouo in the institute and is also involved in the fabrication of nanostrcuture through two-photon polymerization NanoScribe and modifications using Lyra Tescan.
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
            </p>
          </div>
          <div className="md:w-1/4 mt-5 md:mt-0 md:ml-10">
            <img src="about/QuEd.jpg" alt="FONQP Group" className="w-full h-auto" />
          </div>
        </div>
        {/* now put image on left and text on right */}
        <div className="flex flex-col md:flex-row mt-5">
          <div className="md:w-1/4 mt-2">
            <img src="about/FONQP Lab.jpeg" alt="FONQP Group" className="w-full h-auto" />
          </div>
          <div className="md:w-3/4 md:ml-10">
            <p className="text-2 text-justify text-sky-900">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus.
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie izsidlhugseiofuvhpsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed molestie odio. Phasellus urna ex, ultrices at erat quis, maximus sollicitudin odio. Quisque ut nulla bibendum, laoreet quam vitae, dapibus metus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
