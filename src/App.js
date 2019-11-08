import React, {Component} from "react";
import axios from 'axios';



class App extends Component {
  state ={
    users: []
  }

  componenetDidMount() {
    
    axios.get('https://reqres.in/api/users?page=2').then(response => response.data)
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      });
  }

  render() {

    return (
      <div className='container'>
        <div className='col-xs-8'>
          <h1>React Axios Example</h1>
          {this.state.users.map((users) => (
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{users.first_name}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {users.email}
              </h6>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
  }


export default App;

