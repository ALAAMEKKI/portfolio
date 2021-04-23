import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#FEFEFE',
        opacity:0.8,  
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-6">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-gray-900 flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-red-800 inline-block ml-2  rounded-full"></span>
          </h1>
        </ScrollLink>

        <div className="text-black bold text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
