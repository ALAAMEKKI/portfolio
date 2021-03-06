import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '50vh',
          background: '#111827',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          alt="profile"
          width="300px"
          className="mt-10 h-full transtion duration-2000 ease-in-out mx-auto   "
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                
                <a href= {social.link} target="_blank" rel="noopener noreferrer">
                <LazyLoadImage
                  effect="blur"
                  className="m-2 cursor-pointer"
                  width="50px"
                  key={index}
                  src={social.img}
                  alt={social.alt}
                />
                </a>
                
              );
            })}
            
                
          </div>
          <br></br>
          <p className=' text-white family-dosis'> Email : </p><p className=' text-xl text-white font-bold'>alaamekki01@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
