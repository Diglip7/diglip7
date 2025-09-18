import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";

// Public site components
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";

import DigitalMarkit from "./Component/DigitalMarkit";
import Sco from "./Component/Sco";
import PpcAdvertising from "./Component/PpcAdvertising";
import Socialmedia from "./Component/Socialmedia";
import ContentMarketing from "./Component/ContentMarketing";
import Emailmarket from "./Component/Emailmarket";
import Online_rep_mana from "./Component/Online_rep_mana";
import Local_seo_ser from "./Component/Local_seo_ser";
import E_commerce from "./Component/E_commerce";

import Video_market from "./Component/Video_market";
import Influencer from "./Component/Influencer";
import Ai_powered from "./Component/Ai_powered";
import Voice from "./Component/Voice";
import Programmatic_adv from "./Component/Programmatic_adv";
import Mobile_marketing from "./Component/Mobile_marketing";
import Performance_markiting from "./Component/Performance_markiting";

import About from "./Component/About";
import Contect from "./Component/Contect";
import BlogView from "./Component/BlogView";

import Design from "./Component/Design";
import Uiux from "./Component/Uiux";
import GraphicDesign from "./Component/GraphicDesign";

import Development from "./Component/Development";
import Web_dev from "./Component/Web_dev";
import Mobile_app_dev from "./Component/Mobile_app_dev";
import E_commerce_dev from "./Component/E_commerce_dev";
import Custom_soft_dev from "./Component/Custom_soft_dev";
import Cms_dev from "./Component/Cms_dev";
import Api_dev_integ from "./Component/Api_dev_integ";
import Cloud_applicat_dev from "./Component/Cloud_applicat_dev";

import Contact1 from "./pages/admin/Contact";
import Blog from "./Component/BlogEditor";


// Admin pages + layout
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";


// ---------------- LAYOUTS ----------------

// Public layout with header + footer
const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* ----------------- ADMIN ROUTES ----------------- */}
         <Route path="/admin/login" element={<AdminLogin />} />

  <Route
    path="/admin/*"
    element={
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    }
  >
    <Route path="getcontact" element={<Contact1 />} />
    <Route path="blog" element={<Blog />} />
    {/* add more admin child routes here */}
  </Route>


        {/* ----------------- PUBLIC ROUTES ----------------- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/digital-market" element={<DigitalMarkit />} />
          <Route path="/digital-market/seoservices" element={<Sco />} />
          <Route path="/digital-market/PPC-Advertising" element={<PpcAdvertising />} />
          <Route path="/digital-market/social-media-marketing" element={<Socialmedia />} />
          <Route path="/digital-market/content-marketing" element={<ContentMarketing />} />
          <Route path="/digital-market/email-marketing" element={<Emailmarket />} />
          <Route
            path="/digital-market/online-repulation-management(ORM)"
            element={<Online_rep_mana />}
          />
          <Route path="/digital-market/local-SEO-services" element={<Local_seo_ser />} />
          <Route path="/digital-market/e-commerce-marketing" element={<E_commerce />} />

          <Route path="/digital-market/video-marketing" element={<Video_market />} />
          <Route path="/digital-market/influencer-marketing" element={<Influencer />} />
          <Route
            path="/digital-market/Ai-powered-Digital-Marketing"
            element={<Ai_powered />}
          />
          <Route path="/digital-market/voice-search-optimization" element={<Voice />} />
          <Route
            path="/digital-market/programmatic-advertising"
            element={<Programmatic_adv />}
          />
          <Route path="/digital-market/Mobile-marketing" element={<Mobile_marketing />} />
          <Route
            path="/digital-market/performance-marketing"
            element={<Performance_markiting />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="/blogview" element={<BlogView />} />


          <Route path="/design" element={<Design />} />
          <Route path="/design/UI-UX" element={<Uiux />} />
          <Route path="/design/graphic-design" element={<GraphicDesign />} />

          <Route path="/development" element={<Development />} />
          <Route path="/development/web-development" element={<Web_dev />} />
          <Route path="/development/mobile-app-development" element={<Mobile_app_dev />} />
          <Route path="/development/e-commerce-development" element={<E_commerce_dev />} />
          <Route
            path="/development/custom-software_development"
            element={<Custom_soft_dev />}
          />
          <Route path="/development/cms-development" element={<Cms_dev />} />
          <Route
            path="/development/api-development&Integration"
            element={<Api_dev_integ />}
          />
          <Route
            path="/development/cloud-application-development"
            element={<Cloud_applicat_dev />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
