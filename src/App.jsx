import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebdevDetails from "./pages/WebdevDetails";

const pageTransition = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exit: {
    opacity: 1,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/webdevdetails"
            element={
              <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <WebdevDetails />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
