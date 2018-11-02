import React, {Component} from 'react';
import axios from 'axios';

class ChoreRetrieval extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Richard",
            chores: []
        }
    }

    componentDidMount(){
        axios.get('http://neighboring.today/api/chore').then( res => {
            this.setState({
                chores: res.data
            })
        })
    }

render(){ //access to set states inside of the render method
    //console.log(this.state.chores);
    var stuff = this.state.chores;
    var listItems = stuff.map((chore)=><li key ={chore._id}>

    Schedules : {chore.schedules[0].date} | Start: {chore.schedules[0].time.start}
    | End: {chore.schedules[0].time.end}<br/>

    Applicants Fname : {chore.applicants.fname} | lname{chore.applicants.lname}
    | applicant Id: {chore.applicants.applicantsId} <br/>

    completed : {chore.completed} <br/>
    ID : {chore._id}  <br/>
    Description : {chore.description} <br/>
    Poster Name : {chore.posterFname}  <br/>
    Poser LName : {chore.posterLname}  <br/>
    Poster ID : {chore.posterId} <br/>
    titles : {chore.title}  <br/>
    state : {chore.state} <br/>
    zip : {chore.zip} <br/>
    address : {chore.address } <br/>
    refer : {chore.refer} <br/>
    city: {chore.city} <br/>
    phone : {chore.phone} <br/>
    </li>)

    return <ul>{listItems}</ul>
    }
}


// render(){ //access to set states inside of the render method
//     //console.log(this.state.chores);
//     var stuff = this.state.chores;
//     return (
//       <ul>
//         {stuff.map(function(chore,i){
//           return <ChoreRetrieval key={i} chores ={chore}/>
//         })}
//       </ul>
//     )
//
//   }
// }

//does not work
// render(){ //access to set states inside of the render method
//     //console.log(this.state.chores);
//     var stuff = this.state.chores;
//     var listItems = stuff.map((chore)=><li key ={chore._id}>{chore}</li>);
//
//     return <ul>{listItems}</ul>
//     }
// }

// render(){
//     //console.log(this.state.chores);
//     return <ul>{this.state.chores.map(chore =><li>{chore}</li>)}
//     </ul>;
//     }
// }


export default ChoreRetrieval
