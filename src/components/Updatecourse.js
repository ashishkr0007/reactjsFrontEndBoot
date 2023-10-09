import React, { Fragment, useEffect, useState } from "react";
import { Form, Label, FormGroup, Input, Button, Row, Col } from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

export const Updatecourse = () => {
  useEffect(() => {
    document.title = "Update-Courses";
  }, []);

  //Fetching Data From Backend

  return (
    <Fragment>
      <div className="container">
        <Row>
          <Col lg="10" className="mx-auto">
            <Form className="my-4">
              <h1 className="my-3 text-center font-monospace">Update Course</h1>

              <FormGroup className="fst-italic">
                <Label for="id">Course Id</Label>
                <Input
                  id="userId"
                  name="userId"
                  placeholder="Enter your Id Here"
                  type="text"
                  className="form-control font-monospace"
                />
              </FormGroup>

              <FormGroup className="fst-italic">
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Update Title Of Course"
                  type="text"
                  className="form-control font-monospace"
                />
              </FormGroup>

              <FormGroup className="fst-italic">
                <Label for="description">Course Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Update Course Description here"
                  className="form-control font-monospace"
                />
              </FormGroup>

              <div className="text-center">
                <Button type="submit" color="success" className="ms-3">
                  Update
                </Button>
                <Button type="reset" className="ms-3" color="warning">
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
