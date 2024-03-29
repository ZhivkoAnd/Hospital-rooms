import { useState, lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Global.scss";
import "../styles/Navigation.scss";
import "../styles/ActionBar.scss";
import "../styles/ErrorUI.scss";
import "../styles/Footer.scss";
import "../styles/Room.scss";

import Layout from "./components/ui/Layout";

// Lazy loading - the components will load only when the user visits them

// const Shop = lazy(() => import("./components/Shop"));
// const Vacations = lazy(() => import("./components/Vacations"));
// const Login = lazy(() => import("./components/ui/LoginPanel"));
// const Register = lazy(() => import("./components/ui/RegisterPanel"));
// const UpdateProduct = lazy(() => import("./components/UpdateProduct"));

const RoomGrid = lazy(() => import("./components/RoomGrid"));

function App() {
  const [colorMode, setColorMode] = useState("dark");

  const lightMode = () => {
    setColorMode("light");
  };

  const darkMode = () => {
    setColorMode("dark");
  };

  return (
    <div className={`App ${colorMode}`}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout lightMode={lightMode} darkMode={darkMode}>
            <Routes>
              <Route path="/" element={<RoomGrid />} />
              {/* <Route path="/shop" element={<Shop />} />
              <Route path="/update-product/:id" element={<UpdateProduct />} />
              <Route path="/vacations" element={<Vacations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> */}
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
