import React, {Component} from 'react';
import api from "../../services/api";
import "react-table/react-table.css";
import { Link } from "react-router-dom";
import styles from "./stylesheet.module.css";



export default class Main extends Component {
    state = {
        people:[],
        peopleInfo: {},
        page:1,
    };
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page=1) => {
        console.log(page);
        const response = await api.get(`/people?page=${page}`);

        const {docs, ...peopleInfo} = response.data;
        console.log(docs);
        //let b = docs;
        //b.filter((a) => a.firstName.toLowerCase()); 
        //people.sort((a,b) => (a.firstName > b.firstName) ? 1:-1);
        console.log(docs);
        this.setState({people: docs,peopleInfo, page});
        
    };
    
    nextPage = () => {
        const { page, peopleInfo } = this.state;
        if (page === peopleInfo.pages) return;

        const pageNumber = page +1;
        this.loadProducts(pageNumber);
    };
    prevPage = () => {
        const { page, peopleInfo } = this.state;
        if (page === 1) return;

        const pageNumber = page -1;
        this.loadProducts(pageNumber);
    };
    // findbyname = (par = "") =>{
    //     const {people} = this.state;
        
    // }
    

    render() {  
        const { people } = (this.state);
        console.log(people)
        people.sort((a,b) => ((a.firstName + a.secondName).toLowerCase() > (b.firstName + b.secondName).toLowerCase()) ? 1:-1); 
       
        console.log(this.state.page);
        return (
            <div style={{padding:"00px 200px", "background-color":"white"}}>
            <Link to={`/people/cadastro`} className={styles.inputBtn}>Novo Cadastro</Link>
                {(people.sort()).map(product =>(
                    <div style={{padding:"20px 50px", "background-color":"whitesmoke", margin:"15px 350px", }}>
                        <div key={product._id} className={styles.div1}> 
                            <div>
                                <h3 >{product.firstName + " " + product.secondName}</h3>
                            </div>
                            <h3>{product.email}</h3>
                            <div className={styles.div1} >
                                <Link to={`/people/${product._id}`}><button>Detalhes</button></Link>
                                <Link to={`/peoplechange/${product._id}`}><button>Edit</button></Link> 
                            </div>
                        </div>
                    </div>
                ))}
                <div style={{padding:"10px"}}>
                    <button onClick={this.prevPage}>anterior</button>
                    <button onClick={this.nextPage}>proxima</button>
                </div>
            </div>
            
      )
  
     // <button onClick={this.del}>Delete</button>
    }
}