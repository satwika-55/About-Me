
import pp1 from './assets/react pic 2.jpg'

function Card1(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text"> A knight badge and (2000+) cp rating on Leetcode. </p>
        </div>
    );
}
export default Card1