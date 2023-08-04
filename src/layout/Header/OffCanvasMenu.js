import React from "react";
import Link from "next/link";
import {
  Commerce,
  Logistics,
  navHomeOne,
  Resources,
  RideHailling,
  Services,
} from "../../utils/data";
import Image from "next/image";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body bg-gradient ">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu text-dark">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Platforms
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-half">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Platforms
                  </span>
                </h6>
                {navHomeOne.map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <img
                          src={navH.icon.src}
                          alt=""
                          width={50}
                          className="pe-3 img-fluid"
                          loading="lazy"
                        />
                        <span className="dropdown-info mb-0">
                          <span className="drop-title fw-bold text-dark">
                            {navH.title}
                          </span>
                          <span>{navH.info}</span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Industries
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom_Inside width-full">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Ride Hailling
                  </span>
                </h6>
                {RideHailling.map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <img
                          src={navH.icon.src}
                          alt=""
                          width={55}
                          className="px-3 img-fluid"
                          loading="lazy"
                        />
                        <span className="dropdown-info mb-0">
                          <span className="drop-title text-dark">
                            {navH.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
              <div className="dropdown-grid-item radius-right-side bg-white">
                <h6 className="drop-heading text-dark">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Commerce
                  </span>
                </h6>
                {Commerce.map((navH, i) => (
                  <span key={i + 10}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <img
                          src={navH.icon.src}
                          alt=""
                          width={55}
                          className="px-3 img-fluid"
                          loading="lazy"
                        />
                        <span className="dropdown-info mb-0">
                          <span className="drop-title text-dark">
                            {navH.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
              <div className="dropdown-grid-item radius-right-side bg-white">
                <h6 className="drop-heading text-dark">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Logistics
                  </span>
                </h6>
                {Logistics.map((navH, i) => (
                  <span key={i + 10}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <img
                          src={navH.icon.src}
                          alt=""
                          width={55}
                          className="px-3 img-fluid"
                          loading="lazy"
                        />
                        <span className="dropdown-info mb-0">
                          <span className="drop-title text-dark">
                            {navH.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
              <div className="dropdown-grid-item radius-right-side bg-white">
                <h6 className="drop-heading text-dark">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Services
                  </span>
                </h6>
                {Services.map((navH, i) => (
                  <span key={i + 10}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <img
                          src={navH.icon.src}
                          alt=""
                          width={55}
                          className="px-3 img-fluid"
                          loading="lazy"
                        />
                        <span className="dropdown-info mb-0">
                          <span className="drop-title text-dark">
                            {navH.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
            <div className="content-between px-3 p-2 fw-bold ">
              <Link href="/industries/overview">
                <a
                  className="text-black text-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  See industies Overview page.
                </a>
              </Link>
              <Link href="/industries/contact-sales">
                <a
                  className="text-black text-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Contact Sales
                </a>
              </Link>
            </div>
          </div>
        </li>

        <li>
          <Link href="/plans">
            <a
              className="nav-link text-light"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Pricing
            </a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom ">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading text-dark">
                  <span className="bg-color-gray px-2 py-1 rounded-3 fw-bolder">
                    Resources
                  </span>
                </h6>
                {Resources.map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={() => {
                          navH.title === "Blogs" &&
                            dispatch(addTaskToList("All"));
                        }}
                      >
                        <span className="demo-list bg-charcoal rounded d-flex juestify-content-center align-items-center text-white fw-bold">
                          <img
                            src={navH.icon.src}
                            className="img-fluid"
                            loading="lazy"
                          />
                        </span>
                        <span className="dropdown-info mb-0">
                          <span className="drop-title text-dark">
                            {navH.title}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/about-us">
            <a
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              className="nav-link text-light"
            >
              About us
            </a>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <span>
          <Link href="/industries/contact-sales">
            <a
              className="btn btn-green text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Start free trail
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
