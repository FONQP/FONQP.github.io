import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-700 mb-10">📫Contact Us</h1>
        <div className="h-10"></div>
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mr-10">
          {/* Contact Form */}
          <div className="p-8">
            {/* add address and email */}
            <h2 className="text-3xl font-semibold text-gray-500 text-center mb-3">Address</h2>
            <p className="text-gray-700 text-center mb-1">Department of Electronics and Electrical Communication Engineering</p>
            <p className="text-gray-700 text-center mb-1">Indian Institute of Technology (IIT) Kharagpur</p>
            <p className="text-gray-700 text-center mb-14">Kharagpur, West Bengal, India - 721302</p>
            <p className="text-gray-500 text-center text-xl">Email: <a href="mailto:skvarshney@ece.iitkgp.ac.in" className="text-sky-700 hover:underline">skvarshney@ece.iitkgp.ac.in</a></p>

          </div>

          {/* Google Map Embedding */}
          <div className="flex justify-center items-center">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154.3865732360907!2d87.30935437557638!3d22.32075625577559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44051bb249f1%3A0xbc55aab24e688180!2sDepartment%20of%20Electronics!5e0!3m2!1sen!2sin!4v1727809827849!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
