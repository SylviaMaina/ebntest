import React from "react";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="text-white mt-2 h-96 bg-blue-900 shadow-lg flex flex-col justify-between max-lg:flex-col max-lg:h-fit">
      <div className="flex mt-4 justify-between max-lg:flex-col max-lg:px-4 ">
        <div className="flex flex-row justify-evenly w-11/12 mx-auto px-24 pt-4  max-lg:flex-col max-lg:w-full max-lg:px-0">
          <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2">
            <h2 className="text-2xl border-b-white border-b-2 w-3/4">About</h2>
            <div className="flex flex-col justify-between h-full">
              <Link href="/About">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  About Us
                </h6>
              </Link>

              <Link href="/Schedule">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Tv Programming
                </h6>
              </Link>

              <Link href="/Contact">
                <h6>
                  <ArrowForwardIosIcon
                    style={{
                      color: "#DF8E03",
                      fontSize: "1rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Contact Us
                </h6>
              </Link>
            </div>
          </div>
          <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2 ">
            <h2 className="text-2xl   border-b-white border-b-2">
              Contact Info
            </h2>
            <div className="flex flex-col justify-between h-full">
              <h6>
                <PhoneForwardedIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                +254 740 653 453 | +254876469834
              </h6>
              <h6>
                <MailIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                info@ebntv.ac.ke
              </h6>
              <h6>
                <LocationOnIcon
                  style={{
                    color: "#DF8E03",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                Along Rabai rd, next to buruburu girls high school.
              </h6>
            </div>
          </div>
          <div className="text-xl justify-between max-lg:w-full max-lg:leading-8 max-lg:mt-2">
            <h4 className="text-2xl border-b-white border-b-2 ">Socials</h4>
            <div className="flex flex-col justify-between h-full">
              <Link
                href="https://www.facebook.com/TvEBN/"
              >
                <h6>
                  <FacebookRoundedIcon />
                  Facebook
                </h6>
              </Link>
              <Link href="https://twitter.com/TvEbn">
                <h6>
                  <TwitterIcon />X
                </h6>
              </Link>

              <Link href="https://www.youtube.com/@EcclesiaBroadcastingNetwork">
                <h6 className="cursor-pointer text-pink ">
                  <YouTubeIcon />
                  YouTube
                </h6>
              </Link>
              <Link href="https://instagram.com/tv_ebn">
                <h6>
                  <InstagramIcon />
                  Instagram
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h6 className="pl-24 mb-2">
        Copyright © 2022 Ebn Tv. All Rights Reserved
      </h6>
    </div>
  );
};

export default Footer;
