import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BenefitLists from "./components/BenefitLists";
import CounterComponent from "./components/CounterComponent";
import Introduce from "./components/Introduce";
import LikelionHeader from "./components/LikelionHeader";
import TrackInfo from "./components/TrackInfo";
import Activity from "./components/Activity";
import FAQ from "./components/FAQ";
import Cal from "./components/cal";
import Footer from "./components/Footer";
import Recruit from "./components/recruit"; // Recruit 컴포넌트를 import
import RecruitPage from "./components/RecruitPage/RecruitPage";
import ViewForm from "./components/ViewForm";
import Sroute from "./components/sroute";
import ViewFormSuccess from './components/ViewFormSuccess';
import Return from './components/retrun';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <LikelionHeader />
              <Introduce />
              <CounterComponent />
              <TrackInfo />
              <Activity />
              <BenefitLists />
              <Cal />
              <FAQ />
              <Sroute />
              <Footer />
            </main>
          }
        />

        <Route path="/recruit/" element={<Recruit />} />
        <Route path="/recruit/intro" element={<RecruitPage />} />
        <Route path="/recruit/form/login" element={<ViewForm />} />
        <Route path="/recruit/form/view" element={<ViewFormSuccess />} />
        <Route path="/return" element={<Return />} /> 

      </Routes>
    </Router>
  );
}

export default App;
