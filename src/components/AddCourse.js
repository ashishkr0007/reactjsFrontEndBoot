import React, { Fragment, useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Button, Row, Col } from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

export const AddCourse = () => {
  useEffect(() => {
    document.title = "Add-Courses";
  }, []);

  const [course, setCourse] = useState({});
  const handleForm = (e) => {
    //console.log(course);
    postData(course);
    e.preventDefault();
  };

  //Fetching Data From Backend
  const postData = async (data) => {
    try {
      const response = await axios.post(`${base_url}/courses`, data);
      console.log(response);
      console.log("success");

      toast.success("Course Added Successfully", {
        position: "top-center",
        toastId: "success1",
      });
      setCourse({ id: "", title: "", description: "" });
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", {
        position: "top-center",
        toastId: "error1",
      });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col lg="10" className="mx-auto">
            <Form onSubmit={handleForm} className="my-4">
              <h1 className="my-3 text-center font-monospace">
                Add New Course
              </h1>

              <FormGroup className="fst-italic">
                <Label for="id">Course Id</Label>
                <Input
                  id="userId"
                  name="userId"
                  placeholder="Enter your Id Here"
                  type="text"
                  className="form-control font-monospace"
                  onChange={(e) => {
                    setCourse({ ...course, id: e.target.value });
                  }}
                />
              </FormGroup>

              <FormGroup className="fst-italic">
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter Title Of Course"
                  type="text"
                  className="form-control font-monospace"
                  onChange={(e) => {
                    setCourse({ ...course, title: e.target.value });
                  }}
                />
              </FormGroup>

              <FormGroup className="fst-italic">
                <Label for="description">Course Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Enter Course Description here"
                  className="form-control font-monospace"
                  onChange={(e) => {
                    setCourse({ ...course, description: e.target.value });
                  }}
                />
              </FormGroup>

              <div className="text-center">
                <Button type="submit" color="success" className="ms-3">
                  Add Course
                </Button>
                <Button
                  type="reset"
                  className="ms-3"
                  color="warning"
                  onClick={() => {
                    setCourse({ id: "", title: "", description: "" });
                  }}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
