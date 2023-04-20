import {useEffect, useState} from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
let baseURL = "http://localhost";
let port = "8080";
let peopleArr = [];



function PeopleList() {
    let [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`${baseURL}:${port}/people`)
        .then(response => {
            peopleArr = JSON.parse(response.data);
            setLoaded(true);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    if (!loaded) {
        return <div>loading...</div>
    }

    return <div>
        {console.log(peopleArr)}
        {peopleArr.map(person =><PersonCard key={person.id} id={person.id} name={person.name} headshot={person.headshot} applyingFor={person.applyingFor}/>)}
    </div>
}
export default PeopleList;