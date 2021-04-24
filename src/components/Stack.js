import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

export default function Stack() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#eee',
      }}
    >
      <h1 className="text-5xl font-dosis font-bold mb-10">Stack I Use</h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>
      <p className="mt-24 mb-10 w-11/12 md:max-w-xl text-gray-700 text-4xl md:text-4xl font-dosis ">
        ➔ Skills:
        
      <span className=" mt-4 text-lg flex text-gray-700 dark:text-gray-100  p-4 font-bold   ">
        Javascript
      </span>
      <div className="w-11/12 h-4 bg-white md:max-w-xl rounded-full animate-bounce  ">
        <div className="w-11/12 h-full text-center text-xs text-white bg-gray-900 rounded-full"></div>
      </div>
      <span className="text-lg inline-block text-gray-700 dark:text-gray-100 p-4">
       Typescript
      </span>
      <div className="w-11/12 h-4 bg-white md:max-w-xl rounded-full mt-2 animate-bounceFirst">
        <div className="w-8/12 h-full text-center text-xs text-white bg-gray-900 rounded-full" ></div>
      </div>
      <span className="text-lg inline-block text-gray-700 dark:text-gray-100 p-4">
      Reactjs & Vuejs
      </span>
      <div className="w-11/12 h-4 bg-white md:max-w-xl rounded-full animate-bounce  ">
        <div className="w-10/12 h-full text-center text-xs text-white bg-gray-900 rounded-full"></div>
      </div>
      <span className="text-lg inline-block text-gray-700 dark:text-gray-100 p-4">
        Nodejs & Express
      </span>
      <div className="w-11/12 h-4 bg-white md:max-w-xl rounded-full mb-20 animate-bounceFirst">
        <div className="w-10/12 h-full text-center text-xs text-white bg-gray-900 rounded-full mb-20"></div>
      </div>
      </p>
      
    </div>
  );
}
