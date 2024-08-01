
import pp1 from './assets/react pic x.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text">Solved 1000+ questions on several coding platforms.</p>
        </div>
    );
}
export default Card 