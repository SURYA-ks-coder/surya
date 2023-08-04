import Link from "next/link";
import dynamic from "next/dynamic";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

import {
  footerPrimaryPages,
  footerTemplate,
  footerIndusties1,
  footerIndusties2,
  footerIndusties3,
  footerIndusties4,
  footerResources,
} from "../../utils/data";
import Logo from "../../assets/img/home/logo_white.svg";
import { useDispatch } from "react-redux";
import { addTaskToList } from "src/redux/slice/counterSlice";
import Image from "next/image";

const Footer = ({ footerLight, style, footerGradient }) => {
  const dispatch = useDispatch();

  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top pt-100 pb-5 ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""}  text-white`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between px-5">
              <div className="col-md-12 col-lg-5 mb-md-4 mb-lg-0 ">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <h3> Industries</h3>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6   mt-4 mt-md-0 mt-lg-0 pb-5">
                    <div className="footer-single-col ">
                      <div className="pb-3">
                        <h6 className="font-bold  font-size">
                          <span className=" border-2 border-white border-bottom pb-2">
                            Ride Hailling
                          </span>
                        </h6>
                      </div>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerIndusties1.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none font-size_two">
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col ">
                      <div className="pb-3">
                        <h6 className="font-bold  font-size" id="text">
                          <span className=" border-2 border-white border-bottom pb-2">
                            Commerce
                          </span>
                        </h6>
                      </div>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerIndusties2.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a className="text-decoration-none font-size_two">
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6  mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <div className="pb-3 pe-5">
                        <h6 className="font-bold  font-size">
                          <span className=" border-2 border-white border-bottom pb-2">
                            Logistics
                          </span>
                        </h6>
                      </div>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerIndusties3.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none font-size_two">
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6  mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <div className="pb-3 pe-5">
                        <h6 className="font-bold  font-size">
                          <span className=" border-2 border-white border-bottom pb-2">
                            Services
                          </span>
                        </h6>
                      </div>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerIndusties4.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none font-size_two">
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row p">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 ">
                    <div className="footer-single-col ">
                      <h6 className=" font-size">Platform</h6>
                      <ul className="list-unstyled footer-nav-list mb-lg-5 pt-4">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a
                                className="text-decoration-none font-size_two mb-2"
                                onClick={() => {
                                  primaryPage.title === "Tools" &&
                                    dispatch(addTaskToList(primaryPage.title));
                                }}
                              >
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h6 className=" font-size">Resources</h6>
                      <ul className="list-unstyled footer-nav-list mb-lg-0 pt-4">
                        {footerResources.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a
                                className="text-decoration-none font-size_two mb-2"
                                onClick={() => {
                                  page.title === "Blogs" &&
                                    dispatch(addTaskToList("All"));
                                }}
                              >
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h6 className=" font-size">Company</h6>
                      <ul className="list-unstyled footer-nav-list mb-lg-0 pt-4">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none font-size_two mb-2">
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-dark"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-md-between  align-items-center px-5">
              <div className="col-md-7 col-lg-4">
                <div className="copyright-text d-flex justify-content-center align-items-center">
                  <Image
                    src={Logo}
                    alt="ZervX logo "
                    title="ZervX mobility software solutions"
                    className="img-fluid "
                    width={140}
                    height={65}
                    loading="lazy"
                  />

                  <span className="mb-lg-0 mb-md-0 ps-4 font-size_two_bottom ">
                    <span className="d-flex">
                      Copyright &copy; 2023 BerarkRays
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 py-md-0 py-4 ">
                <div className="copyright-text d-flex justify-content-center">
                  <Link
                    href={{
                      pathname: "/[privacyPolicy]",
                      query: { privacyPolicy: "gdpr-policy" },
                    }}
                    className=""
                  >
                    <span
                      className="mb-lg-0 mb-md-0 px-1 font-size_two_bottom d-flex align-items-center"
                      role="button"
                      onClick={() => {
                        dispatch(addTaskToList("support-tab-2"));
                      }}
                    >
                      GDPR Policy
                    </span>
                  </Link>
                  <Link
                    href={{
                      pathname: "/[privacyPolicy]", ///Terms&Conditions/
                      query: { privacyPolicy: "privacy-policy" },
                    }}
                  >
                    <span
                      className="mb-lg-0 mb-md-0 px-1 font-size_two_bottom d-flex align-items-center"
                      role="button"
                      onClick={() => {
                        dispatch(addTaskToList("support-tab-1"));
                      }}
                    >
                      Data Privacy
                    </span>
                  </Link>
                  <Link
                    href={{
                      pathname: "/[privacyPolicy]",
                      query: { privacyPolicy: "terms-and-conditions" },
                    }}
                  >
                    <span
                      className="mb-lg-0 mb-md-0 px-1 font-size_two_bottom d-flex align-items-center"
                      role="button"
                      onClick={() => {
                        dispatch(addTaskToList("support-tab-3"));
                      }}
                    >
                      Terms & Conditions
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 py-4">
                <div className="footer-single-col text-center text-lg-end text-md-end ">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/people/ZervX-All-in-One-App/100076540476450/"
                        target="_blank"
                        aria-label="Facebook logo"
                      >
                        <FaFacebook />
                      </a>
                    </li>

                    {/* <li className="list-inline-item">
                      <a
                      // href=""
                      // target="_blank"
                      // aria-label="YouTube play button icon"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                      //  href="" target="_blank"
                      // aria-label="Instagram icon"
                      >
                        <FaInstagram />
                      </a>
                    </li> */}
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/company/zervx-all-services-in-one-app/"
                        target="_blank"
                        aria-label="LinkedIn logo"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
