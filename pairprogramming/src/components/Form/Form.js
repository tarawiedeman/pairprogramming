// import "./Form.scss"; 
import axios from "axios"; 
import {useState, useEffect} from "react"; 


function Form () { 
    const[name,setName]=useState("");
    const[applyfor,setApplyFor]=useState("");
    const[aboutme,setAboutMe]=useState("");
    const[headshot,setHeadshot]=useState("");

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeApply = (e) => {
        setApplyFor(e.target.value)
    }

    const handleChangeAboutMe = (e) => {
        setAboutMe(e.target.value)
    }

    const handleChangeHeadshot = (e) => {
        setHeadshot(e.target.value)
    }

    const handleSubmit = (e) => {
        e.prevent.default();
        const person = {
            name:name,
            applyingFor:applyfor,
            aboutMe:aboutme,
            headshot:headshot,
        }

        axios
        .post ("http://localhost:8080/people",person)
        .then (console.log('post made'))
        .catch ( (e) => console.log (e.message))
    }

    return (

        <div className="form">
            <h2> Join Resume Hub !</h2>

            <form className="formcontainer" onSubmit={handleSubmit}>
                
                <label> NAME: </label>
                <input
                className="header__form--inputtext"
                type="text"
                placeholder="Your name here"
                name="name"
                onChange={handleChangeName}
                value={name}
                ></input>

                <label> JOB APPLYING FOR: </label>
                <input
                className="header__form--inputtext"
                type="text"
                placeholder="What job role are you applying for?"
                name="applyfor"
                onChange={handleChangeApply}
                value={applyfor}               

                ></input>

                <label> ABOUT ME</label>
                <textarea
                className="header__form--inputtext"
                placeholder="About me"
                name="aboutme"
                onChange={handleChangeAboutMe}
                value={aboutme}  
                ></textarea>


                <label for="headshot">Upload your headshot</label>
                <input
                id="headshot"
                name="headshot"
                className="header__form--upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChangeHeadshot}
                value={headshot}  
                ></input>

                <button 
                type="submit"
                className="button"
                >JOIN</button>
            </form>


        </div>
    );
}

export default Form; 