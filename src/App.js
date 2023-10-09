import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Course } from "./components/Course";
import { Allcourses } from "./components/Allcourses";
import { AddCourse } from "./components/AddCourse";
import { Menu } from "./components/Menu";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import { Updatecourse } from "./components/Updatecourse";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />

        <Menu />

        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/add-course" Component={AddCourse} exact />
          <Route path="/view-course" Component={Allcourses} exact />

          <Route path="/update-course" Component={Updatecourse} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
