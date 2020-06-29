import React from 'react'


export default function Form(){
    return(
    <div className="Form">
        <form>
        <div className="form-group">
            <label for="exampleFormControlInput1">Product Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name of the product"></input></div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>Women's Fashion</option>
            <option>Men's Fashion</option>
            <option>Electronics</option>
            <option>Home and Decor</option>
            <option>Arts and Crafts</option>
            </select>
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput2">Price</label>
            <input type="number(in INR)" class="form-control" id="exampleFormControlInput2" placeholder="Price"></input></div>
        
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Features</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" class="btn btn-primary">SAVE</button>
        <button type="button" class="btn btn-secondary">CANCEL</button>
        
        </form>
    </div>   
    )
}