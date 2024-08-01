
import pp1 from './assets/react pic x2.jpg'

function Card4(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text"> 4 STAR competitive coder on Codechef. </p>
        </div>
    );
}
export default Card4