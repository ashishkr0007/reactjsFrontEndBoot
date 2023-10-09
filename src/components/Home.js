import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="jumbotron mt-2">
      <h1 className="display-3">Spring-Boot With React.js</h1>
      <p className="lead">
        This is Simple Full Stack Web-App Developed By Ashish-Kumar Using Spring
        Boot As Backend And React As Front-End
      </p>
      <hr className="my-2" />
      <p>
        Here User Can Directlt Interect With Sql DataBase And Can Get, Add,
        Update and Delete Courses,Title etc..
      </p>
      <p className="lead">
        <Link to="/add-course">
          <Button className="fst-italic" color="primary" outline>
            Start Using
          </Button>
        </Link>
      </p>
    </div>
  );
};
//1:10min
//rafc
