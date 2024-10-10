import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        img: 'projects/BorelModule.png',
        title: 'Device to achieve Post-Procesing Free TRNG and method thereof',
        desc: 'Indian Patent filed',
        year: 2024,
        link: '/projects/trng',
    },
    // Add more projects as needed
];

const projects = () => {
    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold text-center mb-10 text-gray-700">🏗️Projects</h1>

                <div className="p-8 md:p-12 lg:p-16 mx-5">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.map((projects, index) => (
                            <Link to={projects.link}>
                                <li key={index} className="shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                    <img src={projects.img} alt={projects.title} className="object-cover rounded-lg" />

                                    {/* Hyperlink the title only */}
                                    <h1
                                        className="font-semibold text-sky-800 block"
                                        style={{ maxWidth: '100%' }}
                                        title={projects.title}
                                    >
                                        {projects.title}
                                    </h1>

                                    {/* Authors, desc, and Year */}
                                    {/* <div className="mt-2 flex flex-wrap space-x-2 text-gray-700"> */}
                                        <h1 className="block">{projects.desc}</h1>
                                    {/* </div> */}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <h1 className="text-xl font-bold text-center mt-6 text-gray-400">🛠️ Work in progress...</h1>
                </div>
            </div>
        </div>
    );
};

export default projects;
