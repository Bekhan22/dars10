import './card.css'

function Card(props) {
return (
<div>




    <div className="card">
        <img src="./image 8.png" alt="" />
        <div>
            <h2>{props.ism}</h2>
            <p>{props.p}</p>
        </div>
    </div>



</div>
)
}

export default Card