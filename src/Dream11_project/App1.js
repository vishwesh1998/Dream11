import { Component } from "react"

export default class App1 extends Component
{
    constructor()
    {
//         Rahmanullah Gurbaz (wk)
// Mandeep Singh.
// Rinku Singh.
// Nitish Rana (c)
// Andre Russell.
// Shardul Thakur.
// Sunil Narine.
// Varun Chakravarthy.
        super()
        this.state = {
            D : [
                {name:"MS Dhoni", team:"CSK", status:false},
                {name:"Rituraj Gaikwad", team:"CSK", status:false},
                {name:"Subhranshu Senapati", team:"CSK", status:false},
                {name:"Moeen Ali", team:"CSK", status:false},
                {name:"Rajvardhan Hangargekar", team:"CSK", status:false},
                {name:"Devon Conway", team:"CSK", status:false},
                {name:"Shivam Dube", team:"CSK", status:false},
                {name:"Dwaine Pretorius", team:"CSK", status:false},
                {name:"Mitchell Santner", team:"CSK", status:false},
                {name:"Tushar Deshpande", team:"CSK", status:false},
                {name:"Ravindra Jadeja", team:"CSK", status:false},
                {name:"Rahmanullah Gurbaz", team:"KKR", status:false},
                {name:"Mandeep Singh", team:"KKR", status:false},
                {name:"Rinku Singh", team:"KKR", status:false},
                {name:"Nitish Rana", team:"KKR", status:false},
                {name:"Andre Russell", team:"KKR", status:false},
                {name:"Shardul Thakur", team:"KKR", status:false},
                {name:"Sunil Narine", team:"KKR", status:false},
                {name:"Varun Chakravarthy", team:"KKR", status:false},
                {name:"Varun Ahirwar", team:"KKR", status:false},
                {name:"Anukul Roy", team:"KKR", status:false},
                {name:"Rahmanullah khan", team:"KKR", status:false},
                // {name:"Shreyas Iyer", team:"KKR", status:false}
            ],
            currentStatus : false
        }
    }

    statusChange = (ob)=>{
            this.state.D.filter(obj=>obj.status==true).length<11?this.setState({D:this.state.D.map(b=>b.name==ob.name?{...b,status:true}:b)}):this.setState({D:this.state.D.map(b=>b.name==ob.name?{...b,status:false}:b)})
        }

    render()
    {
        return <div>
            <h1 className="alert-primary text-center">Dream 11</h1>
            <div className="d-flex">
            <div className="mx-5">
            <img src=".././assets/img/CSK.jpg" alt="error" style={{width:"300px", height:"200px"}}/>
            <br /> <br />
            <ol>
                {this.state.D.filter(ob=>ob.team=="CSK").map(ob=><li onClick={()=>this.statusChange(ob)} style={{background:ob.status==true?'grey':''}}><b>{ob.name}</b></li>)}
            </ol>
            </div>

            <div className="mx-5">
                <img src=".././assets/img/KKR.jpg" alt="error" style={{width:"300px", height:"200px"}}   />
                <br /><br />
                <ol>
                    {this.state.D.filter(ob=>ob.team=="KKR").map(ob=><li onClick={()=>this.statusChange(ob)} style={{background:ob.status==true?'blanchedalmond':''}}><b>{ob.name}</b></li>)}
                </ol>
            </div>

            <div className="mx-5">
                <img src=".././assets/img/Dream11.jpg" alt="error" style={{width:"300px", height:"200px"}}/>
                <br /><br />
                <ol>
                    {this.state.D.filter(ob=>ob.status==true).map(ob=><li><b>{ob.name}</b></li>)}
                </ol>
            </div>
            </div>
            <h2 className="bg-danger text-center">{this.state.D.filter(ob=>ob.status==true).length>=11?"Team is Full":""}</h2>
        </div>
    }
}