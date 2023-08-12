import "./form.css";
import { useState } from "react";

export default function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // give "Invalid first name" error message if first name is not valid
    // give "Invalid last name" error message if first name is not valid
    // give "Invalid password" error message if password is not valid
    // give "Invalid email address" error message if email address is not valid

    function ValidateEmail(EmailId) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
        if (emailRegex.exec(EmailId)) {
          alert("Email is valid");
          return true;
        } 
          alert("You have entered an invalid email address!");
          return false;
      }
      function ValidateName(firstName) {
        if (/^[A-Z][a-z]*$/.test(firstName)) {
          alert( firstName +" is valid");
          return true;
        }
        alert("It should start with capital only ");
        return false;
      }
      
      function ValidatePassword(password) {
        if (
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]+$/.test(password)
        ) {
          alert("Password is valid");
          return true;
        }
        alert(
          "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number."
        );
        return false;
      }
      

    const validateForm = () => {
        ValidateEmail(EmailId);
        ValidateName(FirstName);
        ValidateName(LastName);
        ValidatePassword(Password);
    };


    return (
        <main>
            <div className="form">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="inputContainer">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="input"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="button" onClick={validateForm}>
                    Submit
                </button>
            </div>
        </main>
    );
}
