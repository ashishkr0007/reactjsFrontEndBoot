import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

export const Course = ({ course, update }) => {
  useEffect(() => {
    document.title = "View-Courses";
  }, []);

  const deletCourse = async (id) => {
    try {
      const response = await axios.delete(`${base_url}/courses/${id}`);
      console.log("deleted");
      console.log(response);
    } catch (error) {
      console.log("Deleted :Resource Not Avialble");
      toast.success("Course Deleted !!", {
        position: "top-center",
        toastId: "success1",
      });
      update(id);
    }
  };

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
          <CardText>{course.description}</CardText>

          <Container className="text-center">
            <Button
              color="danger"
              onClick={() => {
                deletCourse(course.id);
              }}
            >
              Delete
            </Button>
            <Link to="/update-course">
              <Button color="warning ms-3">Update</Button>
            </Link>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
