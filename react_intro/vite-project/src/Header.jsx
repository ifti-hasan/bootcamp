import React from 'react'
import smallicon from './images/react-icon-small.png'

export default function Header(){
    return (
        <div className='nav'>
            <img className='icon' src={smallicon}/>
            <h4 className='title'>React Bootcamp</h4>
            <p>Project 1</p>
        </div>
    )
}