import React, { useEffect } from "react";
import Head from "next/head";
import favicon from "../assets/img/home/fav_icon.svg";
import image from "../assets/img/home/Inside img/ZervXBanner.webp";

const Layout = ({ children, title, desc, hasClass, classOpt, link }) => {
  // useEffect(async () => {
  //   (
  //     await function (w, d, s, l, i) {
  //       w[l] = w[l] || [];
  //       w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  //       var f = d.getElementsByTagName(s)[0],
  //         j = d.createElement(s),
  //         dl = l != "dataLayer" ? "&l=" + l : "";
  //       j.async = true;
  //       j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  //       f.parentNode.insertBefore(j, f);
  //     }
  //   )(window, document, "script", "dataLayer", "GTM-M6L42P6X");
  // });

  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        {/* !-- Google Tag Manager --> */}
        {/* <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-M6L42P6X")}
        </script> */}
        {/* <!-- End Google Tag Manager -->
Additionally, paste this code immediately after the opening <body> tag:
<!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6L42P6X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <title>
          {title
            ? ` ${title}`
            : "ZervX - Powerful Mobility Tool for Sucessful Business"}
        </title>
        {/* <link rel="preload" as="font"></link> */}
        {/* <meta
          // http-equiv="Cache-Control"
          httpEquiv="Cache-Control"
          content=" must-revalidate max-age=31536000"
          // content="no-cache, no-store"
          // Cache-Control=""
        /> */}
        {/* <meta
          httpEquiv="Set-Cookie"
          content="widget_session=abc123; SameSite=None; Secure"
        /> */}
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta> */}
        {/* <meta httpEquiv="Pragma" content="no-cache" /> */}
        {/* <meta httpEquiv="Expires" content="0" /> */}
        {desc && <meta name="description" content={desc} />}
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href={favicon.src} />
        {link && <link rel="canonical" href={link} />}

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${desc}`} />
        <meta property="og:url" content={`${link}`} />
        <meta property="og:image" content={image.src} />
        {/* share  URL the image has display */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title}`} />
        <meta name="twitter:description" content={`${desc}`} />
        <meta name="twitter:url" content={`${link}`} />
        <meta name="twitter:image" content={image.src} />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PE278SG06D"
        ></script> */}
      </Head>

      {children}
    </div>
  );
};

export default Layout;
