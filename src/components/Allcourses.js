import React, { useEffect, useState } from "react";
import { Course } from "./Course";
import base_url from "../Api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

export const Allcourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses";

    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/courses`);
        setCourses(response.data);
        toast.success("Courses Have Been Loaded", {
          position: "top-center",
          toastId: "success1",
        });
      } catch (error) {
        console.error(error);
        toast.error("Something Went Wrong", {
          position: "top-center",
          toastId: "error1",
        });
      }
    };

    fetchData();
  }, []);

  const updateCourseId = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1 className="font-monospace">All Courses</h1>
      <p className="font-monospace">List Of All Courses As Follows</p>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourseId} />
          ))
        : "No Courses Available"}
    </div>
  );
};
