"use client";

import { useState } from "react";
import "./navbar.scss";
import Image from "next/image";
import { flatvue } from "@/assets";

function Navbar() {
  const [open, setOpen] = useState(false);

  //   if (currentUser) fetch();

  return (
    <nav className="container mx-auto">
      <div className="left">
        <a href="/" className="logo">
          {/* <Image width={400} height={400} src={flatvue.logo} alt="logo" /> */}
          <span>FlatVue</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {/* {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : ( */}
        <>
          <a href="/login">Sign in</a>
          <a href="/register" className="register">
            Sign up
          </a>
        </>
        {/* )} */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
