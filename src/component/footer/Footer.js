import React, { useRef,useState } from "react";
import "./footer.css";
import emailjs from "@emailjs/browser";
export default function Footer() {
  const form = useRef();
  const [alert,setAlert] = useState("");
  

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current[1].value)
    if(form.current[0].value === "" || form.current[1].value===""){
        setAlert("Please Fill All Fields")
        setTimeout(()=>{
            setAlert("")
        },1500)
    }else{
           emailjs
      .sendForm(
        "service_k6zyrim",
        'template_5mxkpdp',
        form.current,
        "UJ5pYPFEUG-ii1NP-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert("Send data successfully")
            setTimeout(()=>{
            setAlert("") 
        },1500)
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
 
  };

  return (
    <div className="footer" id="contect-section">
      <h1>GET IN TOUCH</h1>
      {alert==="Send data successfully"?<p className="alert" style={{color: 'green'}} >{alert}</p>:<p className="alert" style={{color: 'red'}} >{alert}</p>}
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="userName"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="email"
            placeholder="Email Address"
          />
          <textarea
            className="textarea"
            name="user_message"
            placeholder="Message"
          ></textarea>
          <div>
            <button className="btn" type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
