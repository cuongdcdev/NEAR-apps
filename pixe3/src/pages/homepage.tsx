import React from 'react';
import { login, logout, createPixelArt } from '../utils';
//routes
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  
import getConfig from '../config'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')


const HomePage = ()=>{
    return (
        <h1>hello this is front page !!!</h1>
    )
} 



// this component gets rendered by App after the form is submitted
function Notification() {
    const urlPrefix = `https://explorer.${networkId}.near.org/accounts`
    return (
      <aside>
        <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
          {window.accountId}
        </a>
        {' '/* React trims whitespace around tags; insert literal space character when needed */}
        called method: 'setGreeting' in contract:
        {' '}
        <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
          {window.contract.contractId}
        </a>
        <footer>
          <div>✔ Succeeded</div>
          <div>Just now</div>
        </footer>
      </aside>
    )
}


 export default HomePage;

  
  