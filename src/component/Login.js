import { Component } from 'react';
import axios from 'axios';
import '../style/Login.css';

class Login extends Component {
  state = { 
    id : "",
    password : "" 
  }

  login = () => {
    axios.post('https://api.dsm-dms.com/account/auth', {
    id: this.state.id,
    password: this.state.password
    })
    .then((response) => {
      console.log(response);
      if (response.data !== "") {
        localStorage.setItem("accessToken", response.data.accessToken)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleChangeId = (e) => {
    this.setState({ id: e.target.value });
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <input 
        className="textbox"
        placeholder="id" 
        value={this.state.id}
        onChange={this.handleChangeId}
        type="text"/>
        <input 
        className="textbox"
        placeholder="password" 
        value={this.state.password}
        onChange={this.handleChangePassword}
        type="password"/>
        <button className="loginbtn" onClick={this.login}>로그인</button>
      </div>
    );
  }
}

export default Login;
