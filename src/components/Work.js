import React from 'react';
import Typical from "react-typical";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <h1 className=" text-gray-900 text-5xl font-dosis  font-bold">Projects 
      
      <Typical
              steps={content.header.typicalwork}
              loop={Infinity}
              className="inline-block p-2 text-red-800 text-5xl  font-dosis mb-10 "
              wrapper="p"
            />
</h1>
      {content.work.map((elem,i)=>(

     
      <div index = {i} className="mb-24 flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={elem.imgPlaceholder}
          src={elem.img}
          alt="phone prototype"
          className="m-24 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            transform: animated
              ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
              : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail element = {elem} />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail element = {elem} />
        </div>
      </div>

))}
    </div>
  );
}


const ProjectDetail = (props) => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div >
     

      
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis inline-block text-xl font-bold`}
      >
        {props.element.projectName}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4 inline-block  text-xl font-dosis`}
      >
        {props.element.desc}
      </p>
      <button
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        } transform transition duration-2000  px-20 py-3 m-4 bg-gray-900 inline-block flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Github</p>
      </button>
     
      
    </div>
  );
};
