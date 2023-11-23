import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const data = JSON.parse(localStorage.getItem("Userdata"));
  const [refresh, Setrefresh] = useState(false);
  const navigate = useNavigate();
  const handedelet = () => {
    localStorage.removeItem("Userdata");
    Setrefresh((prev) => !prev);
  };
  useEffect(() => {}, [refresh]);
  const Gohome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="about-page">
        <div className="innerbox">
          {data ? (
            <>
              <h2>User-Details</h2>
              <h3>Name-{data.name}</h3>
              <h3>Email-{data.Email}</h3>
              <h3>Phone-{data.Phone}</h3>
              <h3>Address-{data.Address}</h3>
              <div className="btn">
                <button onClick={handedelet}>Delete</button>
              </div>
            </>
          ) : (
            <>
              <h3>No data Found fill the Form</h3>
              <div className="btn">
                <button onClick={Gohome}>Go-Home</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
