import React from 'react';
import jaytechImage from '../img/jaytech.jpg';
import manaar from '../img/Manaar.jpg';
import maktab from '../img/Maktab.jpg';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-20">
        <h1 className="text-4xl text-center font-bold mb-14">Hey I'm Jaytech</h1>
        <img src={jaytechImage} alt="Jaytech" className="w-45 h-65 rounded-md items-center mb-20" />
      </div>
      <div className="mb-8">
        <div className="mb-4">
          <h2 className="justify-center flex text-xl font-semibold">
            <span className="bg-gray-200 p-1 rounded-md">About</span>
          </h2>
        </div>
        <div>
       </div>
        <div>
          <div className="mx-9">
           <p className="py-2 px-4 text-xl text-gray-800 text-center font-bold">As a freelance junior web developer hailing from Lagos, Nigeria, I merge my background in education, video editing, and translation to craft captivating narratives and immersive digital experiences</p>
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
        <p className="py-2 px-4 text-gray-800 text-center">Who I,ve worked with</p>
      </div>
    </div>
      <ImageGallery /> {/* Added ImageGallery component */}
    </div>
  );
};

const JobEntry = ({ year, company, role, job }) => {
  return (
    <div className="flex flex-col items-center mx-4 my-8 md:mx-8 md:my-8">
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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-15 mb-30">
      <JobEntry
        year="2022"
        company="Manaar"
        role="Arabic Instructor"
        job="Ustadh"
      />
      <JobEntry year="2021" company="Manaar" role="Video Editor" job="Freelance" />
      <JobEntry
        year="2020-2024"
        company="Maktab"
        role="Video Editor and Producer"
        job="Freelance"
      />
      <JobEntry year="2023-2024" company="Manaar" role="Quran" job="Ustadh" />
      <JobEntry
        year="2019-2020"
        company="Masjid"
        role="Imam"
        job="Full-time"
      />
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
