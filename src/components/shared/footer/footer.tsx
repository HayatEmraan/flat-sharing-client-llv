/* eslint-disable jsx-a11y/anchor-is-valid */

import { flatvue } from "@/assets";
import Image from "next/image";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="text-slate-200">
      <footer>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link href="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <Image src={flatvue?.logoWhite} alt="logo" />
            </Link>
            <div className="mt-3">
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="gap-5 my-3 flex-center-center">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Order Tracking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Whislist</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms of use</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact support</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">2 year guarantee</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> About Us</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Services</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Portifolio</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Guide</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Mission</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-muted">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 mt-3 text-center border-t text-muted border-dark">
        <p>
          Created By <span className="text-primary">Flatvue</span> | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
