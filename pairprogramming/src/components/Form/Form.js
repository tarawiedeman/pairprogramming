// import "./Form.scss"; 
import axios from "axios"; 
import {useState, useEffect} from "react"; 

function Form () { 

    return (

        <div className="form">
            <h2> Join Resume Hub !</h2>

            <form className="formcontainer">
                
                <label> NAME: </label>
                <input
                className="header__form--inputtext"
                type="text"
                placeholder="Your name here"
                ></input>

                <label> JOB APPLYING FOR: </label>
                <input
                className="header__form--inputtext"
                type="text"
                placeholder="What job role are you applying for?"
                ></input>


                <div>Upload your headshot!</div>
                <button className="button">Upload</button>
            </form>


        </div>
    );
}

export default Form; 