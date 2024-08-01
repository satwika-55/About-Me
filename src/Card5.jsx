
import pp1 from './assets/react pic x3.jpg'

function Card5(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text">Pupil @ Codeforces with great problem solving ability. </p>
        </div>
    );
}
export default Card5