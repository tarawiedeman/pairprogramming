import {useEffect} from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
let baseURL = "http://localhost";
let port = "8080";



function PeopleList(props) {
    useEffect(() => {
        axios.get(`${baseURL}:${port}/people`)
        .then(response => {
            props.setPeopleArr(JSON.parse(response.data));
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    if (props.peopleArr.length === 0) {
        return <div>loading...</div>
    }

    return <div>
        {props.peopleArr.map(person =><PersonCard key={person.id} id={person.id} name={person.name} headshot={person.headshot} applyingFor={person.applyingFor}/>)}
    </div>
}
export default PeopleList;