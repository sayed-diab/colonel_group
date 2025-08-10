import './App.css';
import 'antd/dist/reset.css';
import * as motion from 'motion/react-client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
  Tech_1: React.lazy(() => import('./pages/sub_pages/Aisol')),
  Tech_2: React.lazy(() => import('./pages/sub_pages/Bigdata')),
  Tech_3: React.lazy(() => import('./pages/sub_pages/Fintech')),
  Tech_4: React.lazy(() => import('./pages/sub_pages/Inno')),
  Tech_5: React.lazy(() => import('./pages/sub_pages/Internet')),
  Tech_6: React.lazy(() => import('./pages/sub_pages/Products')),
  Tech_7: React.lazy(() => import('./pages/sub_pages/Projacc')),
  Tech_8: React.lazy(() => import('./pages/sub_pages/Software')),
  Tech_9: React.lazy(() => import('./pages/sub_pages/Solarch')),
  Tech_10: React.lazy(() => import('./pages/sub_pages/Sysinter')),
  News_1: React.lazy(() => import('./pages/news/Colhik')),
  News_2: React.lazy(() => import('./pages/news/Colroot')),
  News_3: React.lazy(() => import('./pages/news/Coltar')),
  News_4: React.lazy(() => import('./pages/news/Colexp')),
  News_5: React.lazy(() => import('./pages/news/Colpart')),
  News_6: React.lazy(() => import('./pages/news/Colsigns')),
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
          //News
          <Route
            path="/news/colhik"
            element={<components.News_1 />}
          />
          <Route
            path="/news/colroot"
            element={<components.News_2 />}
          />
          <Route
            path="/news/coltar"
            element={<components.News_3 />}
          />
          <Route
            path="/news/colexp"
            element={<components.News_4 />}
          />
          <Route
            path="/news/colpart"
            element={<components.News_5 />}
          />
          <Route
            path="/news/colsigns"
            element={<components.News_6 />}
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
          //Tech
          <Route
            path="/companies/coltech/aisol"
            element={<components.Tech_1 />}
          />
          <Route
            path="/companies/coltech/bigdata"
            element={<components.Tech_2 />}
          />
          <Route
            path="/companies/coltech/fintech"
            element={<components.Tech_3 />}
          />
          <Route
            path="/companies/coltech/inno"
            element={<components.Tech_4 />}
          />
          <Route
            path="/companies/coltech/internet"
            element={<components.Tech_5 />}
          />
          <Route
            path="/companies/coltech/products"
            element={<components.Tech_6 />}
          />
          <Route
            path="/companies/coltech/projacc"
            element={<components.Tech_7 />}
          />
          <Route
            path="/companies/coltech/software"
            element={<components.Tech_8 />}
          />
          <Route
            path="/companies/coltech/solarch"
            element={<components.Tech_9 />}
          />
          <Route
            path="/companies/coltech/sysinter"
            element={<components.Tech_10 />}
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
