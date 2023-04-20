import {useEffect, useState} from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
let baseURL = "http://localhost";
let port = "8080";
let peopleArr = [];



function PeopleList() {
    let [peopleArr, setPeopleArr] = useState([]);
    useEffect(() => {
        axios.get(`${baseURL}:${port}/people`)
        .then(response => {
            setPeopleArr(JSON.parse(response.data));
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    if (peopleArr.length === 0) {
        return <div>loading...</div>
    }

    return <div>
        {console.log(peopleArr)}
        {peopleArr.map(person =><PersonCard key={person.id} id={person.id} name={person.name} headshot={person.headshot} applyingFor={person.applyingFor}/>)}
    </div>
}
export default PeopleList;