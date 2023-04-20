import PeopleList from '../../components/PeopleList/PeopleList';
import Form from '../../components/Form/Form';
import {useState} from 'react';

function Home() {
    let [peopleArr, setPeopleArr] = useState([]);
    const changePeopleArr = (arr) => {
        setPeopleArr(arr);
    }
    return <div>
        <PeopleList peopleArr={peopleArr} setPeopleArr={changePeopleArr}/>
        <Form setPeopleArr={changePeopleArr}/>
    </div>
}
export default Home;