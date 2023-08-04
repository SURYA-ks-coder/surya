import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { VscArrowRight } from "react-icons/vsc";
import LightLogo from "../../assets/img/home/logo_white.svg";
import OffCanvasMenu from "./OffCanvasMenu";
import {
  RideHailling,
  Commerce,
  navHomeOne,
  Logistics,
  Services,
  Resources,
} from "../../utils/data";

import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { addTaskToList } from "src/redux/slice/counterSlice";

const Navbar = ({ navDark, insurance, classOption, OverViewNav }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const dispatch = useDispatch();

  return (
    <header
      className={`main-header  ${
        //sticky-top
        //
        navDark || OverViewNav ? "position-absolute" : "" //
      } w-100 ${classOption} ${insurance && "ins-header  z-100"} 
      
      `}
      // style={{ height: "72px" }}
    >
      <div className="">
        <nav
          className={`navbar navbar-expand-xl ${
            navDark ? "navbar-dark" : "navbar-light"
          } sticky-header ${
            OverViewNav ? "bg_gradient_header" : "bg-gradient"
          }   ${scroll > headerTop ? "affix" : ""}`}
          // style={{ height: "72px" }}
        >
          <div
            className="container d-flex align-items-center justify-content-lg-between position-relative px-5 navHeight"
            // style={{ height: "52px" }}
          >
            <Link href="/">
              <a className="navbar-brand d-flex align-items-center py-0  mb-0 text-decoration-none">
                {scroll > headerTop || !navDark ? (
                  <Image
                    width={140}
                    height={52}
                    src={LightLogo.src}
                    alt="ZervX all-in-one mobility platform "
                    className="img-fluid logo-color "
                    loading="lazy"
                  />
                ) : (
                  <Image
                    width={140}
                    height={52}
                    // layout="fill"
                    src={LightLogo.src}
                    alt="ZervX all-in-one mobility platform"
                    className="img-fluid logo-white"
                    loading="lazy"
                  />
                )}
              </a>
            </Link>
            <button
              className=" text-white navbar-toggler position-absolute right-0 border-0 mx-4"
              id="#offcanvasWithBackdrop"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
              aria-label="File menu"
              aria-labelledby="Filemenu"
            >
              <span
                // data-bs-toggle="offcanvas"
                // data-bs-target="#offcanvasWithBackdrop"
                // aria-controls="offcanvasWithBackdrop"
                className="text-white"
              >
                <HiMenu />
              </span>
            </button>
            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-end px-4 ">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Platform
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white ">
                    <div
                      className="dropdown-grid rounded-custom  shadowNav"
                      // style={{ width: "30rem" }}
                      id="widthPlatform"
                    >
                      <div className="dropdown-grid-item ">
                        <p className="drop-heading fw-bold">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder  ">
                            Platform
                          </span>
                        </p>
                        {navHomeOne.map((navH, i) => (
                          <span key={i + 1} className="pl-2 ">
                            <Link href={navH.href}>
                              <a
                                className="dropdown-link  displayIcon ms-2 flex align-items-start  "
                                onClick={() => {
                                  navH.title === "Tools" &&
                                    dispatch(addTaskToList(navH.title));
                                }}
                              >
                                <div
                                // style={{
                                //   paddingTop: "10px",
                                // }}
                                >
                                  <img
                                    src={navH.icon.src}
                                    alt={navH.altText}
                                    width={50}
                                    className="me-3 opacity "
                                    loading="lazy"
                                  />
                                </div>
                                <span className="dropdown-info mb-0 fw-bold py-2">
                                  <div className=" flex">
                                    <span
                                      className="drop-title fw-bold  fs-6 text-dark "
                                      // style={{ opacity: 1 }}
                                    >
                                      {navH.title}
                                    </span>
                                    <IoIosArrowForward className="mx-1 hide" />
                                  </div>

                                  <p className="opacity">{navH.info}</p>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* .................. */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Industries
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white ">
                    <div className="dropdown-grid rounded-custom_Inside  width-full shadowNav">
                      <div className="dropdown-grid-item">
                        <p className="drop-heading fw-bold">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                            Ride Hailling
                          </span>
                        </p>
                        {RideHailling.map((navH, i) => (
                          <span key={i + 1}>
                            <Link href={navH.href}>
                              <a className="dropdown-link">
                                <img
                                  src={navH.icon.src}
                                  alt={navH.imgalt}
                                  width={27}
                                  className="ps-2 img-fluid opacity mr-3 marginRight"
                                  // style={{
                                  //   marginRight: 12,
                                  // }}
                                  loading="lazy"
                                />
                                <span className="dropdown-info mb-0">
                                  <span
                                    className="drop-title  "
                                    // style={{
                                    //   fontWeight: 600,
                                    // }}
                                  >
                                    {navH.title}
                                  </span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-white">
                        <p className="drop-heading fw-bold">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                            Commerce
                          </span>
                        </p>
                        {Commerce.map((navH, i) => (
                          <span key={i + 10}>
                            <Link href={navH.href}>
                              <a className="dropdown-link">
                                <img
                                  src={navH.icon.src}
                                  alt={navH.imgalt}
                                  width={27}
                                  className="ps-2 img-fluid opacity marginRight"
                                  // style={{
                                  //   marginRight: 12,
                                  // }}
                                  loading="lazy"
                                />
                                <span className="dropdown-info mb-0">
                                  <span
                                    className="drop-title"
                                    // style={{
                                    //   fontWeight: 600,
                                    // }}
                                  >
                                    {navH.title}
                                  </span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-white">
                        <p className="drop-heading fw-bold">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                            Logistics
                          </span>
                        </p>
                        {Logistics.map((navH, i) => (
                          <span key={i + 10}>
                            <Link href={navH.href}>
                              <a className="dropdown-link">
                                <img
                                  src={navH.icon.src}
                                  alt={navH.imgalt}
                                  width={27}
                                  className="ps-2 img-fluid  opacity marginRight"
                                  // style={{
                                  //   marginRight: 12,
                                  // }}
                                  loading="lazy"
                                />
                                <span className="dropdown-info mb-0">
                                  <span
                                    className="drop-title"
                                    // style={{
                                    //   fontWeight: 600,
                                    // }}
                                  >
                                    {navH.title}
                                  </span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-white">
                        <p className="drop-heading fw-bold">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                            Services
                          </span>
                        </p>
                        {Services.map((navH, i) => (
                          <span key={i + 1}>
                            <Link href={navH.href}>
                              <a className="dropdown-link">
                                <img
                                  src={navH.icon.src}
                                  alt={navH.imgalt}
                                  width={27}
                                  className="ps-2 img-fluid opacity marginRight"
                                  // style={{
                                  //   marginRight: 12,
                                  // }}
                                  loading="lazy"
                                />
                                <span className="dropdown-info mb-0">
                                  <span
                                    className="drop-title"
                                    // style={{
                                    //   fontWeight: 600,
                                    // }}
                                  >
                                    {navH.title}
                                  </span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="content-between px-3 p-3 fw-bold ">
                      <Link href="/industries/overview">
                        <h6
                          className=" text-gray px-3 mb-0 fontSize "
                          // style={{
                          //   fontWeight: 700,
                          //   fontSize: 15,
                          //   cursor: "pointer",
                          // }}
                        >
                          See industies overview page
                          <VscArrowRight className="ms-2 fs-5 text-green w-20" />
                        </h6>
                      </Link>
                      <Link href="/industries/contact-sales">
                        <h6
                          className="text-black me-4 mb-0 fontSize"
                          // style={{
                          //   fontWeight: 700,
                          //   fontSize: 15,
                          //   cursor: "pointer",
                          // }}
                        >
                          Contact sales
                        </h6>
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="/plans">
                    <a className="nav-link">Pricing</a>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    // role="button"
                    data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    Resources
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white ">
                    <div
                      className="dropdown-grid rounded-custom "
                      // style={{ width: "15rem" }}
                      id="width"
                    >
                      <div className="dropdown-grid-item">
                        <p className="drop-heading fw-bold ">
                          <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                            Resources
                          </span>
                        </p>
                        {Resources.map((navH, i) => (
                          // <span key={i + 1}>
                          <Link href={navH.href} key={i + 1}>
                            <a
                              className="dropdown-link"
                              onClick={() => {
                                navH.title === "Blogs" &&
                                  dispatch(addTaskToList("All"));
                              }}
                            >
                              <span className="demo-list bg-charcoal rounded d-flex juestify-content-center align-items-center text-white fw-bold">
                                <img
                                  src={navH.icon.src}
                                  alt={navH.imgalt}
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </span>
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">{navH.title}</span>
                              </span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="/about-us">
                    <a className="nav-link">About us</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block py-2">
              <Link href="/industries/contact-sales">
                <a className="btn btn-outline-light text-light p-1 px-4  ">
                  Start free trial
                </a>
              </Link>
            </div>

            <div
              className="offcanvas offcanvas-end d-xl-none bg-gradient"
              tabIndex="-1"
              id="offcanvasWithBackdrop"
            >
              <div className="offcanvas-header d-flex align-items-center mt-4">
                <Link href="/">
                  <a className="d-flex align-items-start mb-md-0 text-decoration-none">
                    <Image
                      width={110}
                      height={60}
                      src={LightLogo.src}
                      alt="ZervX all-in-one mobility platform"
                      className="img-fluid logo-color text-start"
                      aria-label="Close"
                      loading="lazy"
                    />
                  </a>
                </Link>
                <button
                  type="button"
                  className="close-btn text-light "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <HiOutlineX />
                </button>
              </div>

              <OffCanvasMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
// export default Navbar();
