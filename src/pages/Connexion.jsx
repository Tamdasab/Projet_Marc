import React from 'react'
import '../styles/Connexion.css'


function Connexion() {


    

  return (

    <div className='containerC'>

        <div className="connect">
            <div className="right">
                <h1>Connectez-vous</h1>
                <div action="" className="form">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                </div>
                <button>Se connecter</button>
                <button>S'inscrire</button>
            </div>
        </div>
    </div>
    
  
  )
}

export default Connexion