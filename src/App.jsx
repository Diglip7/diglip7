import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Scroll restoration helper
import ScrollToTop from "./components/ScrollToTop";

// Layouts & Guards
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Main Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogView from "./pages/BlogView";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Digital Marketing Services
import DigitalMarketing from "./pages/services/digital-marketing/DigitalMarketing";
import SEO from "./pages/services/digital-marketing/SEO";
import PPC from "./pages/services/digital-marketing/PPC";
import SocialMedia from "./pages/services/digital-marketing/SocialMedia";
import ContentMarketing from "./pages/services/digital-marketing/ContentMarketing";
import EmailMarketing from "./pages/services/digital-marketing/EmailMarketing";
import ORM from "./pages/services/digital-marketing/ORM";
import LocalSEO from "./pages/services/digital-marketing/LocalSEO";
import EcommerceMarketing from "./pages/services/digital-marketing/EcommerceMarketing";
import VideoMarketing from "./pages/services/digital-marketing/VideoMarketing";
import InfluencerMarketing from "./pages/services/digital-marketing/InfluencerMarketing";
import AIPoweredMarketing from "./pages/services/digital-marketing/AIPoweredMarketing";
import VoiceSearch from "./pages/services/digital-marketing/VoiceSearch";
import ProgrammaticAdvertising from "./pages/services/digital-marketing/ProgrammaticAdvertising";
import MobileMarketing from "./pages/services/digital-marketing/MobileMarketing";
import PerformanceMarketing from "./pages/services/digital-marketing/PerformanceMarketing";

// Design Services
import Design from "./pages/services/design/Design";
import UIUX from "./pages/services/design/UIUX";
import GraphicDesign from "./pages/services/design/GraphicDesign";

// Development Services
import Development from "./pages/services/development/Development";
import WebDevelopment from "./pages/services/development/WebDevelopment";
import MobileAppDevelopment from "./pages/services/development/MobileAppDevelopment";
import EcommerceDevelopment from "./pages/services/development/EcommerceDevelopment";
import CustomSoftwareDevelopment from "./pages/services/development/CustomSoftwareDevelopment";
import CMSDevelopment from "./pages/services/development/CMSDevelopment";
import APIDevelopment from "./pages/services/development/APIDevelopment";
import CloudApplicationDevelopment from "./pages/services/development/CloudApplicationDevelopment";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContacts from "./pages/admin/Contact";
import BlogEditor from "./pages/admin/BlogEditor";
import BlogList from "./pages/admin/BlogList";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="getcontact" element={<AdminContacts />} />
          <Route path="blogs" element={<BlogList />} />
          <Route path="blog" element={<BlogEditor />} />
          {/* Wildcard admin fallback */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route element={<PublicLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/blogview" element={<BlogView />} />
          <Route path="/blogview/:slug" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms" element={<TermsConditions />} />

          {/* Digital Marketing Services */}
          <Route path="/digital-market" element={<DigitalMarketing />} />
          <Route path="/digital-market/seoservices" element={<SEO />} />
          <Route path="/digital-market/PPC-Advertising" element={<PPC />} />
          <Route path="/digital-market/social-media-marketing" element={<SocialMedia />} />
          <Route path="/digital-market/content-marketing" element={<ContentMarketing />} />
          <Route path="/digital-market/email-marketing" element={<EmailMarketing />} />
          <Route path="/digital-market/online-repulation-management(ORM)" element={<ORM />} />
          <Route path="/digital-market/local-SEO-services" element={<LocalSEO />} />
          <Route path="/digital-market/e-commerce-marketing" element={<EcommerceMarketing />} />
          <Route path="/digital-market/video-marketing" element={<VideoMarketing />} />
          <Route path="/digital-market/influencer-marketing" element={<InfluencerMarketing />} />
          <Route
            path="/digital-market/Ai-powered-Digital-Marketing"
            element={<AIPoweredMarketing />}
          />
          <Route path="/digital-market/voice-search-optimization" element={<VoiceSearch />} />
          <Route
            path="/digital-market/programmatic-advertising"
            element={<ProgrammaticAdvertising />}
          />
          <Route path="/digital-market/Mobile-marketing" element={<MobileMarketing />} />
          <Route
            path="/digital-market/performance-marketing"
            element={<PerformanceMarketing />}
          />

          {/* Design Services */}
          <Route path="/design" element={<Design />} />
          <Route path="/design/UI-UX" element={<UIUX />} />
          <Route path="/design/graphic-design" element={<GraphicDesign />} />

          {/* Development Services */}
          <Route path="/development" element={<Development />} />
          <Route path="/development/web-development" element={<WebDevelopment />} />
          <Route path="/development/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/development/e-commerce-development" element={<EcommerceDevelopment />} />
          <Route
            path="/development/custom-software_development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/development/cms-development" element={<CMSDevelopment />} />
          <Route
            path="/development/api-development&Integration"
            element={<APIDevelopment />}
          />
          <Route
            path="/development/cloud-application-development"
            element={<CloudApplicationDevelopment />}
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

