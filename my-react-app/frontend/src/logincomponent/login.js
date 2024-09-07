import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate , Link} from "react-router-dom";

function Login({ setRole }) { //function Login() 
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const[unm, setUnm] =useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Clear any existing tokens or session data before attempting a new login
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");

      const response = await axios.post("http://localhost:8000/user/login", {
        email,
        pw,
      });

      // Update role state
      const userRole = response.data.role;
      setRole(userRole);

      // Store authentication token
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", response.data.username); // Save the user's email

      toast({
        title: "Login successful.",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Redirect based on user role
      if (userRole === "admin") {
        navigate("/admin/index");
      } else {
        navigate("/user/index");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast({
        title: "Login failed.",
        description: error.response?.data?.message || "Invalid email or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Welcome Back
            </h6>
            <h1 className="mb-5">Login Here</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Welcome to Our Community</h5>
              <p className="mb-4">
                Please login to continue enjoying our services. If you don't have an account, please register first.
              </p>
            </div>
            <div className="col-lg-8 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded p-5">
                <form onSubmit={handleLogin}>
                  <div className="row mb-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          value={pw}
                          onChange={(e) => setPw(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <button type="submit" className="btn btn-primary px-4 py-2">Login</button>
                     <Link to ="/registration">Don't have an account? Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
