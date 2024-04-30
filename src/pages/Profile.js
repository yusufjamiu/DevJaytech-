import React from 'react';
import jaytechImage from '../img/jaytech.jpg';
import manaar from '../img/Manaar.jpg';
import maktab from '../img/Maktab.jpg';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-40">
        <h1 className="text-4xl text-center font-sans mt-20 mb-100">Hey I'm Jaytech</h1>
        <img src={jaytechImage} alt="Jaytech" className="w-45 h-65 rounded-md items-center mt-20" />
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="justify-center flex text-xl font-semibold">
            <span className="bg-gray-200 p-1 rounded-md">About</span>
          </h2>
        </div>
        <div>
          <div className="mx-9">
            <p className="py-2 px-4 lg:text-5xl text-3xl sm:text-4xl text-gray-800 text-center font-sans mx-auto max-w-3xl">A junior web developer building modern WebApps with React and Tailwind. I'm passionate about creating user-friendly interfaces and efficient code.</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="justify-center flex text-xl font-semibold">
          <span className="bg-gray-200 p-1 rounded-md mt-20">Experience</span>
        </h2>
        <p className="py-2 px-4 text-xl text-gray-800 text-center font-bold">Where I've worked</p>
      </div>
      <div className="flex justify-center">
        <App />
      </div>
      <div className="mb-5">
        <div className="mb-4">
          <h2 className="justify-center flex text-xl font-semibold">
            <span className="bg-gray-200 p-1 rounded-md mt-20">Clients</span>
          </h2>
          <p className="py-2 px-4 text-gray-800 text-center">Who I've worked with</p>
        </div>
      </div>
      <ImageGallery /> {/* Added ImageGallery component */}
    </div>
  );
};

const JobEntry = ({ year, company, role, job }) => {
  return (
    <div className="flex flex-col items-center mx-4 my-8 text-xl md:mx-8 md:my-8">
      <div className="text-gray-800 mb-3">{year}</div>
      <div className="text-gray-800 font-bold mb-3">{company}</div>
      <div className="text-gray-800 mb-3">{role}</div>
      <div className={`px-2 py-1 rounded-full ${job === 'Freelance' || job === 'Ustadh' || job === 'Full-time' ? 'bg-gray-300 text-gray-800' : 'bg-white'}`}>
        {job}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-15 lg:gap-20 text-2xl mb-30">
      <JobEntry
        year="2024 - present"
        company="Maktab"
        role="Freelance Dev"
        job="Freelance"
      />
      <JobEntry
       year="2022- 2024" 
       company="Manaar" 
       role="DC Manager" 
       job="Freelance" 
      />
      <JobEntry
        year="2020-2024"
        company="Blackdot"
        role="Developer"
        job="Freelance"
      />
      {/* Add more JobEntry components here if needed */}
    </div>
  );
};

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img src={manaar} alt="Manaar" className="w-full rounded-md" />
      </div>
      <div>
        <img src={maktab} alt="Maktab" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default Profile;
