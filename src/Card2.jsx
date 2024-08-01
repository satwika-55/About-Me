
import pp1 from './assets/satwika green event pic.jpg'

function Card2(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text"> Highly skilled and creative MERN stack developer. </p>
        </div>
    );
}
export default Card2