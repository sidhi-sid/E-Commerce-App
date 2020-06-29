import React from 'react'
import Card from './Card'
import Card1 from './Card1'
import { Link } from 'react-router-dom';

export default function Allnine(){
    return(
        <div className="layout">
        <div className="Row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className="Row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className="Row">
            <Link to="/aded"><Card1/></Link>
    </div>
    </div>
    )
}

