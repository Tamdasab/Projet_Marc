import React from 'react'
import '../styles/Connexion.css'

function Inscription() {
  return (
    <div className='containerI'>
        <div className='inscription'>
            <div className='left'>
                <h1>Bon retour !</h1>
                <p>Connectez-vous avec votre compte</p> 
                <p>pour nous rejoindre !</p>
                <a href='Connexion' className="cnx">Se connecter</a>
            </div>
            <div className="right">
                <h1>Créer un compte</h1>
                <div action="" className="form">
                    <input type="text" placeholder="Nom" />
                    <input type="text" placeholder="Prenom" />
                    <input type="text" placeholder="Sexe" />
                    <input type="text" placeholder="Adresse" />
                    <input type="text" placeholder="Age" />
                    <input type="text" placeholder="Telephone" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <input type="password" placeholder="Confirmez mot de passe" />
                </div>
                <button>S'inscrire</button>
                <button>Se connecter</button>
            </div>
        </div>
    </div>
  )
}

export default Inscription