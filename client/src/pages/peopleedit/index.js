import React, {Component}  from 'react';
import api from "../../services/api";
import People from "../cadastro/index"
import { Link } from "react-router-dom";
import styles from "../main/stylesheet.module.css";

export default class Edit extends Component {
    constructor(props){
        super(props);

        this.state = {
                    description:"",
                    person: {}
                    
        };
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/people/${id}`);

        this.setState({ person: response.data });
    };
    
    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }


    handleSubmit() {

        const {
            person,
            description
        } = this.state;
        console.log("aqui", this.state);
        try {
            const response = api.post(`/people/${person._id}`, {description:description});
            console.log("Data", response);
        } catch(event) {
            console.log('Axios failed')
        }
    };
    render() {
        const { person, description} = this.state;
        // const {
        //     description
        // } = this.state;
        console.log(person);
        console.log(this.state)
        console.log(description);
        return (
            <div style={{padding:"0px 600px", "text-align":"left"}}>
                <h1>{person.firstName + " " + person.secondName}</h1>
                <p style={{"padding":"0px", "margin":"0px"}}> {person.email}</p>
                <div style={{"text-align":"right"}}>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea cols="20" rows="10" placeholder={person.description} value={description} onChange={this.handleChangeDescription} ></textarea>                    
                        </div>
                        <div style={{"padding":"5px"}}>
                            <Link  to={`/people`}><button className={styles.inputBtn} >Voltar</button></Link>   
                            <input type="submit" value="Submit" className={styles.inputBtn}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}