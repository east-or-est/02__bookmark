import React from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";


interface LayoutProps {
  children: any;
}


function Layout( { children } : LayoutProps ) {
  return(
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}


export default Layout;