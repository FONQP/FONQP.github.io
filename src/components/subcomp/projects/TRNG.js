import React from 'react';
import { Link } from 'react-router-dom';

const Publications = () => {
    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-3 text-gray-700">Device to achieve Post-Procesing Free TRNG and method thereof</h1>
                <h1 className="text-xl font-semibold text-center text-gray-500">Indian Patent filed (202431022600)</h1>
                {/* embed video from link enable fullscreen also, also make responsive*/}
                <div className="flex justify-center mt-10 mx-auto" style={{ width: '60%' }}>
                    <div style={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}>
                        <iframe src="https://drive.google.com/file/d/1_zNnv8L8PQixHBHwuMVZAh62Y-JYjZiv/preview" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%' }}
                            title="TRNG" allow="fullscreen"></iframe>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center mb-5 mt-5 text-gray-700">For more information contact <Link to="/contact" className="text-blue-600 hover:underline">here</Link></h1>

                {/* <hr style={{width: '80%', margin: 'auto'}} /> */}

                {/* <h1 className="text-4xl font-bold text-center mt-10 mb-3 text-gray-700">Gallery</h1> */}
            </div>
        </div>
    );
};

export default Publications;
