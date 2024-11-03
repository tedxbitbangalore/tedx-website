import React from "react";
import { Link } from "react-router-dom";
//custom components
// import PeopleTray from "../trays/PeopleTray";
import Counter from "../counters/Counter";
import SpeakerCard from "../cards/SpeakerCard"
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
//videos and images
import logobg from "../../resources/images/logos/insightx/logo-insightx-nobg.webp";
import sponsorImages from "../../resources/images/sponsors/getSponsorImages";
import speakerImages from "../../resources/images/speakers/getSpeakerImages";

const HomePage = () => {
  return (
    <div>
      <section className="flex flex-col lg:justify-center">
        <div className="lg:h-screen lg:w-full items-center flex radial-bg-red-black">
          <div className="lg:order-1 lg:pb-20 text-center items-center mx-auto">
            <div className="mx-auto mb-16">
              {new Date().toLocaleDateString("en-US") === "11/23/2024" ? (
                <p className="lg:text-3xl text-1xls text-slate-100 text-center uppercase font-bold"></p>
              ) : (
                <Counter date="11/23/2024" />
              )}
            </div>
            <img
              src={logobg}
              alt="Insightx logo"
              className="w-[80vw] mb-16"
              width={640}
              height={100}
            />
            <Link
              to={"/register"}
              className="text-white bg-ted hover:bg-red-700 focus:ring-black-300 font-medium px-5 py-2.5 dark:bg-black-600 dark:hover:bg-black-700 focus:outline-none dark:focus:ring-black-800"
            >
              Buy Tickets Now!
            </Link>
          </div>
        </div>
        {/* <div className="justify-center flex">
          <a
            href={
              "https://docs.google.com/forms/d/1woMBHckOJqNbIuXqa2UiJD4Q_6M5EKs0cGco6IJm-fM/edit"
            }
            rel="noreferrer"
            target="_blank"
            className="lg:m-5 lg:text-2xl "
          >
            <u>BUY TICKETS NOW!</u>
          </a> 
        </div> */}
      </section>
      {/* End Main Section */}

      {/* Start About Section */}
      <section className="mx-gutter lg:mx-gutterbig mb-12">
        <div className="lg:gap-x-[5vw] lg:mb-12 lg:items-center">
          <p className="mt-10 lg:mt-0 text-center mx-auto px-5">
            “COSMOS” unfolds the universe one creates for oneself. When there is
            no predefined purpose or meaning, the significance we attribute to
            our lives moulds itself, much like water taking the shape of its
            container. Purpose, existence, and meaning become what individuals
            craft for themselves. We are what we choose to be. Our cosmos is the
            reality that we create and live towards, the meaning we provide, and
            what we ultimately wish to experience during our time here.
            <br />
            We are the architects, it is our theory that shapes our cosmos.
          </p>
        </div>
      </section>
      {/* End About Section */}

      {/* Start Speaker Section */}
      <section>
        <h2 className="text-center text-ted">
          <span className="text-4xls lg:text-4xl text-main">The</span>
          <br /> Speakers
        </h2>
        <div className="py-10 lg:w-10/12 mx-auto lg:grid lg:grid-cols-4 gap-4">
          {speakerImages.map((e, i) => (
            <SpeakerCard key={i} name={e.name} title={e.title} path={e.path} />
          ))}
        </div>
      </section>
      {/* End Speaker Section */}

      {/* Start Date and Venue Section */}
      <section className="flex flex-col lg:flex-row w-full justify-evenly">
        <div className="flex flex-col content-center item-center m-3">
          <FontAwesomeIcon icon={faCalendar} size="2xl" className="text-ted" />
          <p className="text-center"> November 23, 2024</p>
          <p className="text-center"> 8:00 AM onwards</p>
        </div>
        <div className="flex flex-col content-center item-center m-3">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="2xl"
            className="text-ted"
          />
          <p className="text-center"> Bangalore Institute of Technology,</p>
          <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
        </div>
      </section>
      {/* End Date and Venue Section */}

      {/* Start Slider Section */}
      <section class="w-full my-10">
        <h2 className="text-center text-ted">
          <span className="text-4xls lg:text-4xl text-main">Our</span>
          <br /> Sponsors
        </h2>
        <div className="py-10 mx-16 px-0">
          <div className="lg:grid lg:grid-cols-3 gap-4">
            {sponsorImages.map((img, index) => {
              return (
                <div className="lg:my-0 my-3">
                  <img
                    width={360}
                    height={108}
                    key={index}
                    src={img.path}
                    alt={img.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* End Slider Section */}
      {/* <div className="h-52 flex justify-center item-center flex flex-col">
        <p className="text-center lg:text-5xl text-3xls">
          Find us <span className="text-ted">At</span>
        </p>
        <p className="text-center"> Bangalore Institute of Technology,</p>
        <p className="text-center">KR Road, VV Puram, Bangalore - 560094</p>
      </div> */}
    </div>
  );
};

export default HomePage;
