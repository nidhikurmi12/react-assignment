import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [Name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const data = { name: Name, Email: Email, Phone: Phone, Address: Address };
    if (data.name && data.Email && data.Phone && data.Address) {
      localStorage.setItem("Userdata", JSON.stringify(data));
      navigate("/about");
    } else {
      alert("Please fill all field");
    }
  };

  return (
    <>
      <div className="home">
        <div className="input-box">
          <form onSubmit={handelsubmit}>
            <label htmlFor="Name">
              Name:
              <input
                type="text"
                value={Name}
                onChange={(e) => setname(e.target.value)}
              />
            </label>
            <label htmlFor="Email">
              Email:
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="Phone">
              Phone:
              <input
                type="tel"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label htmlFor="Address">
              Address:
              <input
                type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
