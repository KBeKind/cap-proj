import React, { Suspense, lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
// import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ConfirmedBooking from "./features/Booking/ConfirmedBooking";
import { BookingProvider } from "./context/BookingContext";
import Login from "./pages/Login";
import Loader from "./components/Loader";
// import Order from "./pages/Order";
// import About from "./components/About";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./components/About"));
const Order = lazy(() => import("./pages/Order"));

const App = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }
            />
            <Route path="booking" element={<Booking />} />

            <Route
              path="order"
              element={
                <Suspense fallback={<Loader />}>
                  <Order />
                </Suspense>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="confirmed" element={<ConfirmedBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
