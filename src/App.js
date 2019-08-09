import React from "react";
import TorontoWeather from "../src/components/TorontoWeather";
import MontrealWeather from "../src/components/MontrealWeather";
import PhotoGallery from "../src/components/PhotoGallery";
import PhotoList from "./components/PhotoList";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../src/assets/css/App.css'

function getWeatherToronto() {
  return <TorontoWeather />;
}

function getWeatherMontreal() {
  return <MontrealWeather />
}

function getGallery() {
  return <PhotoGallery />
}

function getPhotoList() {
  return <PhotoList />;
}

function getContactForm() {
  return <Contact />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/weather/toronto">Toronto Weather</Link>
            </li>
            <li>
              <Link to="/weather/montreal">Montreal Weather</Link>
            </li>
            <li>
              <Link to="/gallery">Photo Gallery</Link>
            </li>
            <li>
              <Link to="/api/photo">Photo List</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Route path="/weather/toronto" component={getWeatherToronto} />
        <Route path="/weather/montreal" component={getWeatherMontreal} />
        <Route path="/gallery" component={getGallery} />
        <Route path="/api/photo" component={getPhotoList} />
        <Route path="/contact" component={getContactForm} />
      </div>
    </Router>
  );
}

export default AppRouter;
