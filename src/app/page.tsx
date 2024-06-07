"use client";
import Image from "next/image";
import "../../public/assets/css/style.css";
import LoginImage from "../../public/assets/images/undraw_remotely_2j6y.svg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import axios from "axios";


export default function Home() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const md5 = require('md5'); 

   
    const handleSubmit = async () => {
      if(email == '' || password == '') {
        toast("Form tidak boleh kosong");
      } else {

              axios({
                method: 'post',
                url: 'http://localhost:8080/users',
                responseType: 'stream',
                data: {
                    email: email,
                    password: md5(password)
                  }
              })
                .then(function (response) {
                  if(response.data != '1') {
                     toast.error("User tidak ditemukan")
                  } else {
                    toast.success("Login Berhasil");
                  }
                    
                });
      }
     
    }

  return (
     <div className="" style={{zoom: "88%", marginTop: "102px"}}>
        <div className="container">
              <div className="row">
                    <div className="col-md-6 image-side">
                      <Image src={LoginImage}
                            alt="Image" 
                            className="img-fluid" 
                            width={0}
                            height={0}
                            style={{ width: '78%', height: 'auto' }} />
                    </div>

                      <div className="col-md-4">
                            <div className="mb-4">
                                        <h3 style={{fontSize : "30px"}}>Selamat Datang</h3>
                                        <p className="mb-4 poppins"  style={{fontFamily: "var(--font-poppins)", fontSize : "15px", color: "black",
                                          marginTop: "10px"}}>Signin to your account.</p>
                             </div>
                             
                                    <div className="form-group first">
                                      <label style={{marginTop: "35px"}} className="label-form">Username</label>
                                      <input type="text" className="form-control" id="username"  value={email} onChange={(e) => setEmail(e.target.value)}/>

                                    </div>
                                    <div className="form-group last mb-4">
                                      <label style={{marginTop: "15px"}} className="label-form">Password</label>
                                      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                      
                                    </div>
                                    
                                    <div className="d-flex mb-5 align-items-center">
                                      <span className="ml-auto label-form" style={{marginTop: "-10px", color: "blue"}}><a href="#" className="forgot-pass">Forgot Password</a></span> 
                                    </div>

                                    <button type="button" className="btn btn-block btn-primary" style={{width: "100%"}} onClick={handleSubmit}> Log In</button>

                                    {/* <span className="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span> */}
{/*                                     
                                    <div className="social-login">
                                      <a href="#" className="facebook">
                                        <span className="icon-facebook mr-3"></span> 
                                      </a>
                                      <a href="#" className="twitter">
                                        <span className="icon-twitter mr-3"></span> 
                                      </a>
                                      <a href="#" className="google">
                                        <span className="icon-google mr-3"></span> 
                                      </a>
                                    </div> */}
                                  <br></br> <br></br>
                                  <center>
                                  <span>
                                    <p className="label-form" style={{color: "black",fontSize: "12px"}}>
                                      By continuing, you agree to Miracle Terms of Service and Privacy Policy, and to receive periodic emails with updates.
                                    </p>
                                  </span>
                                  </center>
                      </div>

              </div>
          </div>
          <ToastContainer />
        </div>
        
  );
}
