import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactForm from "./Components/Contact/Contact";
import ProjectShowcase from "./Components/Projects/Projects";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />
           <Route
            path="projects"
            element={
              <AnimatedPage>
                <ProjectShowcase />
              </AnimatedPage>
            }
          />
          <Route
            path="contact"
            element={
              <AnimatedPage>
                <ContactForm />
              </AnimatedPage>
            }
          />
        </Route>
        
        
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
