import React from 'react';

// Example data for the team
const teamData = {
  supervisor: {
    name: 'Prof. Shailendra Kr. Varshney',
    title: 'Lab Supervisor',
    photo: 'team/Sir.jpeg', // Path to supervisor photo
    bio: 'Our beloved supervisor, Prof. Shailendra Kr. Varshney, is a Professor at Dept. of E&ECE, IIT Kharagpur.',
    scholar: 'https://scholar.google.com/citations?user=8Z6Z9Y4AAAAJ&hl=en',
    email: 'mailto:sha.gamil.com',
  },
  labmates: [
    {
      name: 'Shubhanshi Sharma',
      title: 'PhD Student',
      photo: 'team/Shubhanshi-Sharma.png', // Path to labmate photo
      bio: 'Shubhanshi focuses on the study of Metamaterials',
      scholar: 'https://scholar.google.com/citations?user=8Z6Z9Y4AAAAJ&hl=en',
      email: 'mailto:sha.gamil.com',
    },
    {
      name: 'Sauradeep Kar',
      title: 'PhD Student',
      photo: 'team/kar.jpeg', // Path to labmate photo
      bio: 'Sauradeep focuses on the study of non-linear optics',
      scholar: 'https://scholar.google.com/citations?user=8Z6Z9Y4AAAAJ&hl=en',
      email: 'mailto:sha.gamil.com',
    },
    {
      name: 'Monica Pradhan',
      title: 'PhD Student',
      photo: 'team/mnc.jpeg', // Path to labmate photo
      bio: 'Monica focuses on the study of Metamaterials',
      scholar: 'https://scholar.google.com/citations?user=8Z6Z9Y4AAAAJ&hl=en',
      email: 'mailto:sha.gamil.com',
      github: 'github.com/monica',
      website: 'https://monica.com',
    },
    // Add more labmates as needed
  ],
  pastMembers: [
    {
      name: 'Sridhar Singhal',
      title: 'BTP/MTP Student',
      photo: 'team/goat.jpeg', // Path to labmate photo
      bio: 'Now pursuing PhD at University of Washington, Seattle.',
      scholar: 'https://scholar.google.com/citations?user=8Z6Z9Y4AAAAJ&hl=en',
      email: 'mailto:sha.gamil.com',
    },
  ],
};

const Teams = () => {
  return (
    // add a moving bg gradient from sky to white
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* text color dark gray */}
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-700">The Group</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 mx-5">
          <div className="flex flex-col md:flex-row items-center justify-center mb-16">
            <img
              src={teamData.supervisor.photo}
              alt={teamData.supervisor.name}
              className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-500">{teamData.supervisor.name}</h2>
              <p className="text-gray-700 text-xl">{teamData.supervisor.title}</p>
              <p className="text-gray-600 mt-3">{teamData.supervisor.bio}</p>
              <div className="mt-4">
                <a
                  href={teamData.supervisor.scholar}
                  className="text-blue-600 hover:underline"
                >
                  <img src="team/scholar.png" alt="Google Scholar" className="w-6 h-6 inline-block" />
                </a>
                <a
                  href={teamData.supervisor.email}
                  className="text-blue-600 hover:underline ml-4"
                >
                  <img src="team/email.png" alt="Email" className="h-5 inline-block" />
                </a>
              </div>
            </div>
          </div>

          {/* Labmates Grid */}
          <h2 className="text-3xl font-semibold text-gray-500 text-center mb-8">Current Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.labmates.map((labmate, index) => (
              <div
                key={index}
                className="p-6"
              >
                <img
                  src={labmate.photo}
                  alt={labmate.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-500 text-center">{labmate.name}</h2>
                <p className="text-gray-700 text-center">{labmate.title}</p>
                <p className="text-gray-600 text-center mt-3">{labmate.bio}</p>

                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href={labmate.scholar}
                    className="text-blue-600 hover:underline"
                  >
                    <img src="team/scholar.png" alt="Google Scholar" className="w-6 h-6 inline-block" />
                  </a>
                  <a
                    href={labmate.email}
                    className="text-blue-600 hover:underline ml-4"
                  >
                    <img src="team/email.png" alt="Email" className="h-5 inline-block" />
                  </a>
                  {labmate.github && (
                    <a
                      href={`https://${labmate.github}`}
                      className="text-blue-600 hover:underline ml-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" class="bi bi-github mt-1" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  )}
                  {labmate.website && (
                    <a
                      href={labmate.website}
                      className="text-blue-600 hover:underline ml-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="black" class="bi bi-globe" viewBox="0 0 20 13">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Past Members */}
          <h2 className="text-3xl font-semibold text-gray-500 text-center mt-16 mb-8">Past Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.pastMembers.map((labmate, index) => (
              <div
                key={index}
                className="p-6"
              >
                <img
                  src={labmate.photo}
                  alt={labmate.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-500 text-center">{labmate.name}</h2>
                <p className="text-gray-700 text-center">{labmate.title}</p>
                <p className="text-gray-600 text-center mt-3">{labmate.bio}</p>

                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href={labmate.scholar}
                    className="text-blue-600 hover:underline"
                  >
                    <img src="team/scholar.png" alt="Google Scholar" className="w-6 h-6 inline-block" />
                  </a>
                  <a
                    href={labmate.email}
                    className="text-blue-600 hover:underline ml-4"
                  >
                    <img src="team/email.png" alt="Email" className="h-5 inline-block" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
