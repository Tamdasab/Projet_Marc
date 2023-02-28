import React from 'react'
import '../styles/Navbar.css'
import SearchBar from './Searchbar'
import { Link } from 'react-router-dom'
import mylogo from '../assets/HELP.png'


function Navbar() {
  return (
    <div>
        <nav>
          <div className='navbar'>
          <div className='logo'>
            <a href='/'><img className='logo' src={mylogo} alt='logo'/></a>
          </div>
          <SearchBar />
          <div className='infobar'>
              <Link to="/" className='items'>Accueil</Link>
              <Link to="pharmacie" className='items'>Pharmacies</Link>
              <Link to="inscription" className='items'>Inscription</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

//<div className='searchbar'>
//<input className='input' id='txtinput' type='text' name='' placeholder="saisissez vos recherches" marginRigth="10px"/>
//<input className='input' id='btninput' type='submit' name='' value='recherche'/>
//</div>