import {useEffect} from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
let baseURL = "http://localhost"
let port = "8080"
let peopleArr = [];

function PeopleList() {
    useEffect(() => {
        axios.get(`${baseURL}:${port}/people`)
        .then(response => {
            peopleArr= response.data;
        })
    }, [])

    if (peopleArr === []) {
        return <div>loading...</div>
    }

    return <div>
        {peopleArr.map(person =>
            <PersonCard key={person.id} id={person.id} name={person.name} headshot={person.headshot} applyingFor={person.applyingFor}/>
            )}
    </div>
}
export default PeopleList;