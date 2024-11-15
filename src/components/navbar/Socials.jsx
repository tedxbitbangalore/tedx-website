import React from "react";

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo_tedx from "../../resources/images/logos/tedx/logo-TEDxBITBangalore_white_vertical.webp";

const Socials = () => {
  return (
    <div className="min-h-[35vh] px-[5vw] flex lg:flex-row justify-between flex-col">
      <div className="lg:py-[8vh] pt-[6vh]">
        <img
          className=""
          width={300}
          height={107}
          src={logo_tedx}
          alt="tedxbitbangalore logo"
        />
        <p className="text-center pt-6 lg:text-left text-m self-center font-normal [font-stretch:normal]">
          This independent TEDx event is operated under license from TED.
        </p>
      </div>
      <div className="self-center flex pb-[8vh] pt-[3vh] lg:py-[3vw]">
        <a
          target="blank"
          href="mailto:tedxbitbangalore07@gmail.com"
          aria-label="our email"
        >
          <FontAwesomeIcon
            className="mx-1 h-[3rem]"
            icon={faEnvelope}
            // style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a
          target="blank"
          href="https://www.instagram.com/tedxbitbangalore/"
          aria-label="our instagram page link"
        >
          <FontAwesomeIcon
            className="mx-1 h-[3rem]"
            icon={faInstagram}
            // style={{ color: "black" }}
            size="2xl"
          />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/company/tedxbitbangalore"
          aria-label="our linkedin page link"
        >
          <FontAwesomeIcon
            className="mx-1 h-[3rem]"
            icon={faLinkedin}
            // style={{ color: "black" }}
            size="2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
