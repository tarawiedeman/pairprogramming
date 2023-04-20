import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
let baseURL = "http://localhost";
let port = "8080";

function Person() {
    const id = useParams().id;
    const [person, setPerson] = useState({});
    useEffect(()=> {
        axios.get(`${baseURL}:${port}/people/${id}`)
        .then(response => {
            setPerson(JSON.parse(response.data));
        })
    },[id])

    if(person === {}) {
        return <div>loading...</div>
    }

    return <div className="person-page">
            <h1>{person.name}</h1>
            <img src={person.headshot} alt="headshot"/>
            <p>{person.aboutMe}</p>
        </div>
}
export default Person;