import React from 'react';
import maktabImage from '../../img/Maktab.jpg';
import manaarImage from '../../img/Manaar.jpg';

const HomeContent = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <div className="mb-20">
        <h1 className="text-4xl text-center font-bold mb-14">As an aspiring React developer and skilled video editor, I'm primed to collaborate with clients worldwide, bringing creativity and innovation to every project</h1>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="/manaar" className="block">
          <img src={manaarImage} alt="manaar" className="w-full object-cover" />
          <p className="text-center mt-0">Manaar Schools</p>
        </a>
        <a href="/maktab" className="block">
          <img src={maktabImage} alt="maktab" className="w-full object-cover" />
          <p className="text-center mt-1">Maktab Da'wah</p>
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
