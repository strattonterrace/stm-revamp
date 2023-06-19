import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen h-screen overflow-hidden relative w-full">
      <div className="absolute top-0 h-3 bg-yellow-500 w-full" />
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center mt-64 md:mt-80">
          <h1 className="text-gray-900 font-black text-2xl md:text-3xl lg:text-4xl">
            Stratton&nbsp;<span className="text-yellow-500">Terrace</span>
            &nbsp;Marketing
          </h1>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="flex items-center justify-center w-max">
            <h3 className="text-gray-900 font-semibold text-md md:text-lg animate-pulse overflow-hidden whitespace-nowrap  border-r-4 border-r-white pr-4 tracking-wider">
              UNDER CONSTRUCTION
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to="https://www.strattonterrace.com/"
            target="_blank"
            className="text-gray-900 text-sm tracking-normal flex items-center justify-center hover:text-gray-800 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold"
          >
            Visit old webiste
          </Link>
        </div>
      </div>
      <div className="absolute bottom-2 w-full flex items-center justify-center">
        <p className="text-xs md:text-sm px-5 text-gray-600 text-center">
          Copyright &copy; 2021 Stratton Terrace Marketing, LLC - All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default App;
