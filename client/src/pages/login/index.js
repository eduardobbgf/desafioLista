import React, {Component} from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";

export default class People extends Component {
    constructor(props){
        super(props);

        this.state = {
                    firstName:"",
                    secondName:"",
                    email:"",
                    description:""
                    
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail(event) {
        this.setState({
            userName: event.target.value
        });
    };
    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    };

    async handleSubmit() {
         const {
            email,
            password
        } = this.state;
        var pageCurrent= 1;
        const x = await api.get(`/people`);
        // const {peopleInfo} = x.data;
        console.log("aquii",x.data);
        const userData = x.data;
        console.log("42", (userData.docs[9]))

        do { 
            const user = await api.get(`/people?page=${pageCurrent}`);
            const userCurrent = user.data.docs;
            console.log("aqui",userCurrent[9]);
            const docNew = userCurrent.filter((a) => a.email === email);
            console.log("aqui",docNew)
            if (docNew[0].password === password){
                console.log("Success")
                return (``)
            }
            pageCurrent = pageCurrent+1;
        } while(pageCurrent != userData.pages);
        
        
    };

    render () {

        const {
            userName,
            password
        } = this.state;

        return (
            <div style={{color:"#993333","background-color":"#ffff", padding:"75px"}}>
                <h1 style={{color:"#993333", "text-align":"center"}}>Login</h1>

                <form onSubmit={this.handleSubmit}>

                    <input type="hidden" id="id" name="id" />
                    <div style={{"margin":'15px', border:"15px"}}>
                        <input type="text" placeholder="Email" value={userName} onChange={this.handleChangeEmail}/>
                    </div>
                    <div style={{"margin":'15px', border:"15px"}}>
                        <input type="text" placeholder="Senha"  value={password} onChange={this.handleChangePassword}/>
                    </div>
                    <Link to={`/people`}><input type="submit" value="Submit" style={{color:"#ffff","background-color":"#993333", padding:"5px", margin:"5px",
    border: "none"}}/></Link>
                    <div>
                        <Link to={this.forgotPassword}><button style={{color:"#ffff","background-color":"#993333", padding:"5px", margin:"5px",
    border: "none"}}>Esqueci minha senha</button></Link>
                    </div>
                </form>{console.log(this.state)}
            </div>
        )
    };
}