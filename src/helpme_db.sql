-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 27 fév. 2023 à 20:06
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `helpme_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `idClient` int(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) CHARACTER SET utf8 NOT NULL,
  `prenom` varchar(250) CHARACTER SET utf8 NOT NULL,
  `sexe` varchar(250) CHARACTER SET utf8 NOT NULL,
  `adresse` varchar(250) CHARACTER SET utf8 NOT NULL,
  `age` int(3) NOT NULL,
  `telephone` int(15) NOT NULL,
  `email` varchar(250) CHARACTER SET utf8 NOT NULL,
  `mp` varchar(250) CHARACTER SET utf8 NOT NULL,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

DROP TABLE IF EXISTS `livraison`;
CREATE TABLE IF NOT EXISTS `livraison` (
  `idLivraison` int(20) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `datedebut` datetime NOT NULL,
  `datefin` datetime NOT NULL,
  `expediteur_client` int(20) NOT NULL,
  `destinataire_client` int(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`idLivraison`),
  KEY `expediteur_client` (`expediteur_client`),
  KEY `destinataire_client` (`destinataire_client`),
  KEY `type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `medicament`
--

DROP TABLE IF EXISTS `medicament`;
CREATE TABLE IF NOT EXISTS `medicament` (
  `idMedicament` int(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) CHARACTER SET utf8 NOT NULL,
  `prix` float NOT NULL,
  `idPharmacie` int(20) NOT NULL,
  PRIMARY KEY (`idMedicament`),
  KEY `idPharmacie` (`idPharmacie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pharmacie`
--

DROP TABLE IF EXISTS `pharmacie`;
CREATE TABLE IF NOT EXISTS `pharmacie` (
  `idPharmacie` int(20) NOT NULL,
  `enseigne` varchar(250) CHARACTER SET utf8 NOT NULL,
  `telephone` int(15) NOT NULL,
  `adresse` varchar(250) CHARACTER SET utf8 NOT NULL,
  `codepostal` int(5) NOT NULL,
  PRIMARY KEY (`idPharmacie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `idReservation` int(20) NOT NULL AUTO_INCREMENT,
  `reference` int(20) NOT NULL,
  `datecreation` datetime NOT NULL,
  `idMedicament` int(20) NOT NULL,
  `idClient` int(20) NOT NULL,
  PRIMARY KEY (`idReservation`),
  KEY `idMedicament` (`idMedicament`,`idClient`),
  KEY `idClient` (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `livraison_ibfk_1` FOREIGN KEY (`destinataire_client`) REFERENCES `client` (`idClient`),
  ADD CONSTRAINT `livraison_ibfk_2` FOREIGN KEY (`expediteur_client`) REFERENCES `client` (`idClient`);

--
-- Contraintes pour la table `medicament`
--
ALTER TABLE `medicament`
  ADD CONSTRAINT `medicament_ibfk_1` FOREIGN KEY (`idPharmacie`) REFERENCES `pharmacie` (`idPharmacie`);

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`idMedicament`) REFERENCES `medicament` (`idMedicament`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
