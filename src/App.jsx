import Card from "./component/Card"
import './App.css'
import data from "../public/data"

function App() {
return (
<div>
    <h2>Users</h2>
    <div className="cards">
        {
            data.map((odam,i)=>{
                return   <Card key={i} ism={odam.name} p={odam.position}></Card>
            })
        }
    </div>

</div>
)
}

export default App