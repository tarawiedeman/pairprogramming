import {useNavigate} from 'react-router-dom';

function PersonCard(props) {
    let navigate = useNavigate();
    const clickHandler = () => {
        navigate('/person/' + props.id);
    }
    return <article className="person-card" onClick={clickHandler}>
        <img src={props.headshot} className="person-card__headshot" alt="headshot"/>
        <h3>{props.name}</h3>
        <p>{props.applyingFor}</p>
    </article>
}
export default PersonCard