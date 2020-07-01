import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import Card from './Card'
import Allnine from './Allnine';

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            name:'',
            category:'',
            price:'' ,
            features:''
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        const url='http://localhost:5000/product';
        axios.post('/product',this.state)
          .then(function (response) {
            console.log(response)  
          })
          .catch(function (error) {
            console.log(error);
          });      
}
    render(){
        const obj={name:this.state.name,
        category:this.state.category,
        price:this.state.price,
        features:this.state.features}
        return(

            <div className="Form">
                <form onSubmit={(e)=>this.handleSubmit(e)} action="/product" method="POST">
 
                <div className="form-group">
                    <label for="exampleFormControlInput1">Product Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name of the product" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input></div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Category</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={this.state.category} onChange={(e)=>this.setState({category:e.target.value})}>
                    <option>Women's Fashion</option>
                    <option>Men's Fashion</option>
                    <option>Electronics</option>
                    <option>Home and Decor</option>
                    <option>Arts and Crafts</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput2">Price</label>
                    <input type="number(in INR)" className="form-control" id="exampleFormControlInput2" placeholder="Price" value={this.state.price} onChange={(e)=>this.setState({price:e.target.value})}></input></div>
                
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Features</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={this.state.features} onChange={(e)=>this.setState({features:e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                <button type="button" className="btn btn-dark"><Link to="/">VIEW ALL</Link></button>

                
                </form>
                
            </div>   
            
            )
    }
   
}

