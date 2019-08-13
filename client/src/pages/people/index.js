import React, {Component}  from 'react';
import api from "../../services/api";
import { cpus } from 'os';

import styles from "../../stylesheet.module.css";


export default class Detail extends Component {
    state = {
        person: {},
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/people/${id}`);

        this.setState({ person: response.data });
    };

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); 
    };

    goBack(){
        this.props.history.goBack();
    };
    render() {
        const { person } = this.state;

        return (
            <div className={styles.div1} style={{display: "inline-block", "padding":"0px 100px", margin:"5px"}} >
                <div >
                    <h2 style={{"text-align":"center"}}>{person.firstName + " " + person.secondName}</h2>
                    <p style={{display: "flex"}}> {person.email}</p>
                </div>
                <p>{person.description}</p>
                <button onClick={this.goBack}>Voltar</button>
                
                
            </div>
        )
    }
}
