
import pp1 from './assets/react pic x1.jpg'

function Card3(){
    return(
        <div className="card">
            <img className="card-image" src={pp1} alt="profilepicture"></img>    
            <h2 className="card-title"> Satwika</h2>    
            <p className="card-text"> Have a consistent streak of 300+ Days on Leetcode. </p>
        </div>
    );
}
export default Card3