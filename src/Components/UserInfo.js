import React, { Component } from 'react';
import './UserInfo.css';

export default class UserInfo extends Component {
    //------------------------------//
    state = {
        user: {
            name: '',
            lastName: '',
            age: 1,
        }
    }
    //------------------------------//
    increase =()=> {
        this.setState({user: {
                ...this.state.user,
                age: this.state.user.age +1
            }
        })
    }
    //------------------------------//
    decrease =()=> {
       this.setState({user:{
                ...this.state.user,
                age: this.state.user.age -1
            }
        })
   }
   //------------------------------//
   updateName =(e)=> {
        let newName = e.target.value;
        this.setState({
            user: {
                ...this.state.user,
                name: newName
            }
       })
   }
   //------------------------------//
   updateLastName =(e)=> {
       let newLastName = e.target.value;
       this.setState({
           user: {
               ...this.state.user,
               lastName: newLastName
           }
       })
   }
   //------------------------------//
    render() {
        return (
            <div className="user">
                <p>Hello <span>{this.state.user.name} {this.state.user.lastName}</span> from React</p>
                <p>Your Name is: <input type="text" onChange={this.updateName}></input></p>
                <p>Last Name is: <input type="text" onChange={this.updateLastName}></input></p>
                <hr/>
                <p>Your old is: <span>{this.state.user.age}</span></p>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
}
