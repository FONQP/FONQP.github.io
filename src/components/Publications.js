import React from 'react';

const publicationsData = [
  {
    title: 'Orientation-based solar noise impact on underwater and free-space optical wireless communication systems: experimental investigations',
    authors: 'S. K. Mahapatra, M. Howlader, S. K. Roy, S. K. Varshney',
    journal: 'JOSA A',
    year: 2024,
    link: 'https://opg.optica.org/view_article.cfm?pdfKey=35b36612-1ffb-48c9-b83b639166ef751b_551117',
  },
  {
    title: 'Generation of self-stabilized chirped dissipative Kerr solitons in the normal-dispersion regime of a Si<sub>3</sub>N<sub>4</sub> microring resonator with built-in spectral filtering',
    authors: 'Sauradeep Kar,  S. K. Varshney',
    journal: 'Physical Review A',
    year: 2024,
    link: 'https://link.aps.org/pdf/10.1103/PhysRevA.109.033502',
  },
  {
    title: 'Low-threshold cascaded Raman scattering and intermodal four-wave mixing in cascaded multimode fiber system',
    authors: 'Md. Rehan, R. Chowdhury, P. Biswas, M. S. Kang, S. K. Varshney',
    journal: 'Journal of Lightwave Technology',
    year: 2024,
    link: 'https://ieeexplore.ieee.org/iel7/50/4357488/10444913.pdf',
  },
  // Add more publications as needed
];

const Publications = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-700">Our Publications</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16 mx-5">
          {/* list publications like [1] title, authors, journal, year in a single line*/}
          <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {publicationsData.map((publication, index) => (
              <li key={index} className="flex items-center space-x-2">
                {/* Index number */}
                <span className="text-gray-500 font-semibold" >[{index + 1}]</span>

                {/* Hyperlink the title only */}
                <a href={publication.link} className="font-semibold text-sky-800 hover:underline truncate" style={{ maxWidth: '50%' }} title={publication.title} target="_blank" rel="noreferrer">
                  {publication.title}
                </a>

                {/* Authors, Journal, and Year */}
                <span className="text-gray-700 italic truncate" style={{ maxWidth: '20%' }}>
                  {publication.authors}
                </span>
                <span className="text-gray-700 truncate" style={{ maxWidth: '20%' }}>
                  - {publication.journal} ({publication.year})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publications;
