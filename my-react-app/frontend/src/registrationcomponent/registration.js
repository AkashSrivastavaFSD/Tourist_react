// install in frontend - npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion


import React, { useState } from "react";
import axios from "axios";
//import React from "react";
import { useToast } from '@chakra-ui/react'

function Registration() {
  const [ename, setEname] = useState("");
  const [email, setEmail] = useState("");
  //const [loc, setLoc] = useState("");
  //const [adn, setAdn] = useState("");
  const [mno, setMno] = useState("");
  const [unm, setUnm] = useState("");
  const [pw, setPw] = useState("");
  const toast = useToast()
  //const [newEname, setnewEname] = useState(0);

  //const [userList, setUserlist] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    //alert("Working");
    axios
      .post("http://localhost:8000/user/create", {
        ename: ename,
        email: email,
       // loc: loc,
        //adn: adn,
        mno: mno,
        unm: unm,
        pw: pw,
      })
      .then((response) => {
        console.log(response);
        //alert("resigtration successfull");
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        setEname("");
        setEmail("");
        //setAdn("");
        //setLoc("");
        setMno("");
        setUnm("");
        setPw("");
      })

      .catch((error) => {
        console.error(error);
        alert("registration failed");
      });
  };

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Join With Us
            </h6>
            <h1 class="mb-5">Register Here</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos
              </p>
            </div>

            <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form action="registration" onSubmit={addUser}>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        onChange={(event) => {
                          setEname(event.target.value);
                        }}
                        value={ename}
                        class="form-control"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        value={email}
                        class="form-control"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
            {/*      <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(event) => {
                          setLoc(event.target.value);
                        }}
                        value={loc}
                        placeholder="Location"
                      />
                      <label for="Location">Location</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(event) => {
                          setAdn(event.target.value);
                        }}
                        value={adn}
                        placeholder="Ad. Number"
                      />
                      <label for="message">Adhar Number</label>
                    </div>
                  </div>   */}
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(event) => {
                          setMno(event.target.value);
                        }}
                        value={mno}
                        placeholder="Mob. Number"
                      />
                      <label for="message">Mob. Number</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        onChange={(event) => {
                          setUnm(event.target.value);
                        }}
                        value={unm}
                        placeholder="User Name"
                      />
                      <label for="message">User Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        onChange={(event) => {
                          setPw(event.target.value);
                        }}
                        value={pw}
                      />
                      <label for="message">Password</label>
                    </div>
                  </div>
                  <div class="col-12">
                  <button type="submit" className="btn btn-primary px-4 py-2">submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
