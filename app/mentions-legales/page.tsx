import React from "react";

import "./main.css"

const MentionsLegales: React.FC = () => {
	return (
		<React.Fragment>
			<section id="hero" className="background_light">
				<div className="container">
					<h1 className="center">Mentions L&eacute;gales</h1>
				</div>
			</section>

			<section id="proprietaire" className="container">
				<h2>Propri&eacute;taire du site internet</h2>
				<p>
					<span className="bold">Nom :</span> Pierre Gaillard
				</p>
				<p>
					<span className="bold">Adresse :</span> 34 rue de Kersalé, 56400
					Pluneret
				</p>
				<p>
					<span className="bold">E-mail :</span>
					<a href="mailto:pierre.gaillard.dev@gmail.com">
						pierre.gaillard.dev@gmail.com
					</a>
				</p>
			</section>
			<section id="responsable" className="background_light">
                <div className="container">
				<h2>Responsable de publication</h2>
				<p>
					<span className="bold">Nom :</span> Pierre Gaillard
				</p>
				<p>
					<span className="bold">Adresse :</span> 34 rue de Kersalé, 56400
					Pluneret
				</p>
				<p>
					<span className="bold">E-mail :</span>
					<a href="mailto:pierre.gaillard.dev@gmail.com">
						pierre.gaillard.dev@gmail.com
					</a>
				</p>
                </div>
			</section>
			<section id="hebergement" className="container">
				<h2>Hebergement</h2>
				<p>
					<span className="bold">Nom :</span> OVH
				</p>
				<p>
					<span className="bold">Adresse :</span> 2 Rue Kellermann, 59100
					Roubaix, France
				</p>
				<p>
					<span className="bold">Site web :</span>
					<a href="https://www.ovh.com/fr">www.ovh.com</a>
				</p>
			</section>
			<section
				id="propriete-intellectuelle"
				className="background_light"
			>
                <div className="container">
				<h2>Propri&eacute;t&eacute; intellectuelle</h2>
				<p>
					Tous les contenus présents sur ce site (textes, images,
					vidéos, projets, etc.) sont protégés par le droit d'auteur.
					Toute reproduction, représentation, modification ou
					diffusion, sans l'autorisation préalable de
					<span className="">Pierre Gaillard</span>, est strictement
					interdite.
				</p>
                </div>
			</section>
			<section id="donnees-personnelles" className="container">
				<h2>Données personnelles</h2>
				<p>
					Ce site utilise Google Analytics, un service d'analyse de
					site internet fourni par Google Inc. ("Google"). Google
					Analytics utilise des cookies, qui sont des fichiers texte
					placés sur votre ordinateur, pour aider le site à analyser
					l'utilisation du site par ses utilisateurs.
				</p>

				<p>
					Les données générées par les cookies concernant votre
					utilisation du site (y compris votre adresse IP) seront
					transmises et stockées par Google sur des serveurs situés
					aux États-Unis. Google utilisera ces informations dans le
					but d'évaluer votre utilisation du site, de compiler des
					rapports sur l'activité du site à destination de son éditeur
					et de fournir d'autres services relatifs à l'activité du
					site et à l'utilisation d'Internet.
				</p>

				<p>
					Vous pouvez désactiver l'utilisation des cookies en
					sélectionnant les paramètres appropriés de votre navigateur.
					Cependant, une telle désactivation pourrait empêcher
					l'utilisation de certaines fonctionnalités de ce site.
				</p>

				<p>
					En utilisant ce site internet, vous consentez expressément
					au traitement de vos données nominatives par Google dans les
					conditions et pour les finalités décrites ci-dessus.
				</p>

				<p>
					Pour en savoir plus sur la gestion des données par Google,
					vous pouvez consulter leur politique de confidentialité :
					https://policies.google.com/privacy.
				</p>
			</section>
			<section id="cookies" className="background_light">
                <div className="container">
				<h2>Cookies</h2>
				<p>
					Lors de votre première visite sur ce site, un bandeau de
					consentement aux cookies vous permet de configurer vos
					préférences en matière de cookies ou de les refuser. Vous
					pouvez modifier ces choix à tout moment en consultant les
					paramètres de votre navigateur.
				</p>
                </div>
			</section>
		</React.Fragment>
	)
}


export default MentionsLegales