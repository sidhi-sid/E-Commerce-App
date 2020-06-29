import React from 'react'


export default function Report(){
    return(
        <div id="Report" className="card" width="18rem" >
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Category</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Features</li>
          
          <li className="list-group-item">Price</li>
        </ul>
      </div>
        
    )
}