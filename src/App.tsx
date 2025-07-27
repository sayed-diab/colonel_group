import './App.css';
import 'antd/dist/reset.css';
import * as motion from 'motion/react-client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ✅ التسمية الصحيحة components
const components = {
  Header: React.lazy(() => import('./components/Header')),
  Footer: React.lazy(() => import('./components/Footer')),
  Home: React.lazy(() => import('./pages/Home')),
  About: React.lazy(() => import('./pages/AboutUs')),
  NotFound: React.lazy(() => import('./pages/404')),
  Careers: React.lazy(() => import('./pages/Careers')),
  News: React.lazy(() => import('./pages/News')),
  Sectors: React.lazy(() => import('./pages/Sectors')),
  Faq: React.lazy(() => import('./pages/Faq')),
  Colcons: React.lazy(() => import('./pages/Colcons')),
  Colgen: React.lazy(() => import('./pages/Colgen')),
  Coltech: React.lazy(() => import('./pages/Coltech')),
};
const box = {
  width: 100,
  height: 100,
  backgroundColor: '#eecd53',
  borderRadius: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-[#171717]">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={box}
          />
        </div>
      }
    >
      <Router>
        <components.Header />

        <Routes>
          <Route
            path="/colonel_group/"
            element={<components.Home />}
          />
          <Route
            path="/about"
            element={<components.About />}
          />
          <Route
            path="/careers"
            element={<components.Careers />}
          />
          <Route
            path="/news"
            element={<components.News />}
          />
          <Route
            path="/sectors"
            element={<components.Sectors />}
          />
          <Route
            path="/faq"
            element={<components.Faq />}
          />
          <Route
            path="/companies/colcons"
            element={<components.Colcons />}
          />
          <Route
            path="/companies/colgen"
            element={<components.Colgen />}
          />
          <Route
            path="/companies/coltech"
            element={<components.Coltech />}
          />
          <Route
            path="*"
            element={<components.NotFound />}
          />
        </Routes>

        <components.Footer />
      </Router>
    </Suspense>
  );
}

export default App;
