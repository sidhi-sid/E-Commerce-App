import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import Form from './Form'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Allnine extends React.Component{
    state={
        product:null
    };
    async componentDidMount(){
        axios.get('/product/getdata',{})
          .then(function (response) {
            const data=response.json();
            console.log(data)  
          })
          .catch(function (error) {
            console.log(error);
          });     
        
    }
    render(){
        return(
            <div className="layout">
                <div className="row">
                    {this.state.product ? <div>Loading...</div> : <div>{this.state.person}</div>}
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Link to="/aded"><Card1/></Link>
                </div>
                
               
        
        </div>
        )
    }
    
}

