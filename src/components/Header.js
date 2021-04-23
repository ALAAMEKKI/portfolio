import React from "react";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useStartAnimation from "../hook/useStartAnimation";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();
  return (
    <div
      style={{
        background: "#111827",
      }}
      className="min-h-screen flex items-center justify-center"
      id="header"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="  border-4 border-white-300 w-full md:w-2/6 ">
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            className={` w-screen     mx-auto`}
            effect="blur"
            placeholderSrc={content.header.imgPlaceholder}
          />
        </div>
        
        
        <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <h2
            className={`text-3xl md:text-4xl lg:text-6xl text-white font-bold transform ${
              animated ? "translate-y-0" : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-10xl md:text-4xl text-gray-400 transform ${
              animated ? "translate-y-0" : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>

          <ScrollLink to="mywork" smooth={true}>
            <button
              className={` mt-24 animate-bounce bg-black-500 px-10 py-3 text-lg mx-2 uppercase text-white rounded-lg mt-10   hotransform  ${
                animated ? "translate-y-0" : styleTranslate
              } ${transition(3500)}`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>

          <button className=" mt-24 animate-bounce bg-white px-8 py-3 text-lg uppercase  mx-2 text-indigo  rounded-lg mt-10 hover:bg-indigo-300 transform ">
            <a href="/CV de Mohamed Alaa Mekki English (28).pdf" download>
              Download my CV
            </a>
          </button>
          <div className=" my-24 md:w-auto ">
          <p className="  text-lg  font-dosis  text-white ">
            I'm a full-stack javascript developer. Currently, I'm skilled in
            JavaScript Technologies such as NodeJS, Express, NestJS, ReactJS,
            and VueJS with knowledge in Angular. In terms of Databases, I worked
            with both SQL and NoSQL Databases, mainly MySQL and MongoDB. I
            worked on projects where I was the Scrum Master, Product Owner, as
            well as part of the development team implementing various
            technologies. 
            <br></br>
            If I'm not coding, you will find me making music.{" "}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}