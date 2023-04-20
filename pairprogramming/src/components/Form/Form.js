import "./Form.scss"; 
import axios from "axios"; 
import {useState} from "react"; 


function Form (props) { 
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
        e.preventDefault();
        const person = {
            name:name,
            applyingFor:applyfor,
            aboutMe:aboutme,
            headshot:headshot,
        }

        axios
        .post ("http://localhost:8080/people",person)
        .then ((response) => {
            console.log("post made");
            props.setPeopleArr(response.data);
        })
        .catch ( (e) => console.log (e.message))
    }

    return (

        <div className="form">
            <h2> Join Resume Hub !</h2>

            <form className="formcontainer" onSubmit={handleSubmit}>
                
                <label className="form__label"> Name: </label>
                <input
                className="form__inputtext"
                type="text"
                placeholder="Your name here"
                name="name"
                onChange={handleChangeName}
                value={name}
                ></input>

                <label className="form__label"> Job applying for: </label>
                <input
                className="form__inputtext"
                type="text"
                placeholder="What job role are you applying for?"
                name="applyfor"
                onChange={handleChangeApply}
                value={applyfor}               

                ></input>

                <label className="form__label"> About Me:</label>
                <textarea
                className="form__inputtext"
                placeholder="About me"
                name="aboutme"
                onChange={handleChangeAboutMe}
                value={aboutme}  
                ></textarea>


                <label className="form__label">Upload your headshot</label>
                <input
                id="headshot"
                name="headshot"
                className="form__upload"
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