import React, {Component} from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";
import styles from "../main/stylesheet.module.css"

export default class People extends Component {
    constructor(props){
        super(props);

        this.state = {
                    firstName:"",
                    secondName:"",
                    email:"",
                    description:""
                    
        };
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeImage = this.handleChangeImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    };
    handleChangeSecondName(event) {
        this.setState({
            secondName: event.target.value
        });
    };
    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    };
    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    };
    handleChangeImage(event) {
        console.log("Envio de Foto");
        // this.setState({
        //     password: event.target.value
        // });
    };

    handleSubmit() {

         const {
            firstName,
            secondName,
            email,
            description,
        } = this.state;

        try {
            const response = api.post(`/people`, {firstName:firstName, secondName:secondName, email:email, description:description});
            console.log("Data", response);
        } catch(event) {
            console.log('Axios failed')
        }
    };

    render () {

        const {
            firstName,
            secondName,
            email,
            description
        } = this.state;

        return (
            <div style={{color:"#993333","background-color":"#ffff"}}>
                <h1>Cadastro de pessoas</h1>

                <form onSubmit={this.handleSubmit}>

                    <input type="hidden" id="id" name="id" />

                    <div className={styles.input}>
                        <label htmlFor="Nome" style={{padding: "0px 35px"}}>Nome:</label>
                        <input type="text" placeholder="Josefina" value={firstName} onChange={this.handleChangeFirstName}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="Nome" style={{padding: "0px 15px"}}>Sobrenome:</label>
                        <input type="text" placeholder="Guimarães"  value={secondName} onChange={this.handleChangeSecondName}/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email" style={{padding: "0px 35px"}}>email:</label>
                        <input type="text" placeholder="nome@email.com"  value={email} onChange={this.handleChangeEmail}/>
                    </div>
                    <div className={styles.input} >
                        <input type="file" />
                    </div>
                    <div className={styles.input} style={{padding: "0px 45px"}}>
                        <label htmlFor="descricao" style={{padding: "0px 20px"}}>Descrição:</label>
                        <textarea cols="20" rows="10" placeholder="Anotações" value={description} onChange={this.handleChangeDescription}></textarea>
                    </div>

                    <Link to={`/people`} className={styles.inputBtn}>Voltar</Link>   
                    <input type="submit" value="Submit" className={styles.inputBtn}/>                    
                </form>{console.log(this.state)}
            </div>
        )
    };
}