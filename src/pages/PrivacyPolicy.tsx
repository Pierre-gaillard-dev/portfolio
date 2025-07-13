import { Helmet } from "react-helmet"

const metadata = {
  title: "Pierre Gaillard, politique de confidentialité",
  description:
    "Politique de confidentialité du site portfolio de Pierre Gaillard, développeur web.",
}

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="content">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <section id="hero" className="background_light">
        <div className="container">
          <h1>Politique de confidentialité</h1>
        </div>
      </section>

      <section id="introduction" className="container">
        <h2>Introduction</h2>
        <p>
          La présente politique de confidentialité décrit comment vos données
          personnelles sont collectées, utilisées et protégées lorsque vous
          visitez ce site web (ci-après désigné par "le Site"). Nous nous
          engageons à respecter votre vie privée et à traiter vos données
          personnelles de manière transparente et sécurisée.
        </p>
      </section>

      <section id="collecte" className="background_light">
        <div className="container">
          <h2>Données personnelles collectées</h2>
          <p>
            Lors de votre visite sur le Site, nous collectons les types de
            données suivants :
          </p>
          <ol>
            <li>Données analytiques :</li>
            <ul>
              <li>
                Via Google Analytics, nous collectons des informations
                anonymisées, telles que :
              </li>
              <ul>
                <li>Informations sur votre navigation sur le Site</li>
                <li>
                  Informations sur votre appareil et votre connexion Internet
                </li>
                <li>Informations sur les pages de votre visite sur le Site</li>
              </ul>
              <li>
                Ces données sont utilisées uniquement à des fins statistiques
                pour améliorer l’expérience utilisateur.
              </li>
            </ul>

            <li>Cookies tiers :</li>
            <ul>
              <li>
                Les iframes YouTube présents sur le Site peuvent déposer des
                cookies dans le but de suivre vos préférences et de
                personnaliser leur contenu.
              </li>
              <li>
                Ces cookies sont gérés par YouTube, qui applique ses propres
                politiques de confidentialité.
              </li>
            </ul>
          </ol>
        </div>
      </section>

      <section id="finalites" className="container">
        <h2>Finalités de l'utilisation des données</h2>
        <p>
          Les données collectées sont utilisées pour les finalités suivantes :
        </p>
        <ul>
          <li>
            <span className="bold">Statistiques :</span> Suivre l’audience et
            améliorer les performances du Site grâce à Google Analytics.
          </li>
          <li>
            <span className="bold">Améliorer l’Expérience utilisateur :</span>{" "}
            Optimiser la navigation sur le Site et personnaliser le contenu
            intégré, comme les vidéos YouTube.
          </li>
        </ul>
      </section>

      <section id="conservation" className="background_light">
        <div className="container">
          <h2>Conservation des données</h2>
          <ul>
            <li>
              Les données analytiques collectées par Google Analytics sont
              conservées pour une durée maximale de 14 mois.
            </li>
            <li>
              Les cookies déposés par YouTube ont une durée définie par la
              politique de confidentialité de YouTube.
            </li>
          </ul>
        </div>
      </section>

      <section id="droits" className="container">
        <h2>Droits des utilisateurs</h2>
        <p>
          En tant qu'utilisateur, vous disposez des droits suivants concernant
          vos données personnelles :
        </p>
        <ul>
          <li>
            <span className="bold">Accès :</span> Vous pouvez demander l’accès
            aux données personnelles collectées vous concernant.
          </li>
          <li>
            <span className="bold">Rectification et suppression :</span> Vous
            avez le droit de demander la correction ou la suppression de vos
            données personnelles.
          </li>
          <li>
            <span className="bold">Opposition :</span> Vous pouvez vous opposer
            à la collecte de données non essentielles, notamment via les
            cookies.
          </li>
        </ul>
        <br />
        <p>
          Pour exercer vos droits ou pour toute question relative à vos données
          personnelles, veuillez nous contacter à l'adresse suivante :
          pierre.gaillard.dev@gmail.com.
        </p>
      </section>

      <section id="cookies" className="background_light">
        <div className="container">
          <h2>Gestion des Cookies</h2>
          <p>
            Vous pouvez configurer vos préférences en matière de cookies en
            utilisant l'option prévue dans la bannière de consentement affichée
            lors de votre première visite. Vous pouvez également gérer ou
            désactiver les cookies directement dans les paramètres de votre
            navigateur.
          </p>
        </div>
      </section>

      <section id="tiers" className="container">
        <h2>Services tiers</h2>
        <p>Nous utilisons les services suivants sur ce Site :</p>
        <ul>
          <li>
            <span className="bold">Google Analytics :</span> Pour des
            statistiques anonymisées. Ces données sont traitées conformément à
            la politique de confidentialité de Google, disponible ici :{" "}
            <a href="https://policies.google.com/privacy" target="_blank">
              https://policies.google.com/privacy
            </a>
            .
          </li>

          <li>
            <span className="bold">YouTube :</span> Les vidéos intégrées via des
            iframes peuvent déposer des cookies et collecter des données. Pour
            plus d’informations, consultez la politique de confidentialité de
            YouTube :{" "}
            <a href="https://policies.google.com/privacy" target="_blank">
              https://policies.google.com/privacy
            </a>
            .
          </li>
        </ul>
      </section>

      <section id="modifications" className="background_light">
        <div className="container">
          <h2>Modifications de cette politique</h2>
          <p>
            Cette politique de confidentialité peut être modifiée à tout moment
            pour refléter les évolutions légales ou techniques. Toute mise à
            jour sera publiée sur cette page avec la date de mise à jour.
          </p>
          <p>
            <span className="bold">Dernière mise à jour :</span> 04 janvier 2025
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
