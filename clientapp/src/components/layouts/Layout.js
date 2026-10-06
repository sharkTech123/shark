import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import Navbar from "../header/Navbar";

import Footer from "../footer/Footer";
import Scroll from "../Scroll";

import usePageTracking from "../../usePageTracking";
import ChatLauncher from "../chatbot/ChatLauncher";
import OnboardingWizard from "../onboardingWizard/OnboardingWizard";

function Layout() {
  usePageTracking();

  const [loading, setLoading] = useState(true);
  const [webLoading, setWebLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWebLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="layout">
      {webLoading ? (
        <LoadingWeb />
      ) : (
        <>
          {/* <OnboardingWizard /> */}
          <Navbar />
          {loading ? (
            <LoadingWeb />
          ) : (
            <>
              <Scroll />

              <main style={{  backgroundColor: "#000" }}>
                <Outlet />
              </main>
              <Footer />
              <ChatLauncher />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Layout;
