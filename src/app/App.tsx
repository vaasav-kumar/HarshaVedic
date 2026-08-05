import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServicePageView } from "./pages/ServicePage";
import { ScrollToHash } from "./components/ScrollToHash";
import { SERVICE_PAGES } from "./config/servicePages";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {SERVICE_PAGES.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            element={<ServicePageView slug={page.slug} />}
          />
        ))}
      </Routes>
    </>
  );
}
