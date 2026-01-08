const CookiePolicy = () => {
  return (
    <div className="content">
      <section id="hero" className="background_light">
        <h1>Politique de cookies</h1>
      </section>

      <section id="introduction" className="container">
        <h2>Introduction</h2>
        <p>
          Cette politique de cookies explique ce que sont les cookies, comment
          nous les utilisons sur ce site web (ci-après désigné "le Site"), et
          vos options pour gérer vos préférences en matière de cookies.
        </p>
        <p>
          En visitant ce Site, vous consentez à l'utilisation de cookies dans
          les conditions décrites ci-dessous, sauf si vous configurez vos
          préférences pour les refuser.
        </p>
      </section>

      <section id="types" className="background_light">
        <div className="container">
          <h2>Les types de cookies que nous uilisons</h2>
          <ol>
            <li>
              <span className="bold">Cookies nécessaires :</span>
              <br />
              <span>
                Ces cookies sont indispensables au bon fonctionnement du Site et
                ne peuvent pas être désactivés dans nos systèmes. Ils ne
                collectent aucune donnée personnelle.
              </span>
            </li>
            <li>
              <span className="bold">Cookies analytiques :</span>
              <br />
              <ul>
                <li>
                  <span className="bold">Outil utilisé :</span> Google Analytics
                </li>
                <li>
                  <span className="bold">Finalité :</span> Ces cookies
                  collectent des informations anonymisées (nombre de visiteurs,
                  pages consultées, durée de navigation) afin d'améliorer les
                  performances et l'expérience utilisateur du Site.
                </li>
              </ul>
            </li>
            <li>
              <span className="bold">Cookies tiers :</span>
              <ul>
                <li>
                  <span className="bold">Service utilisé :</span>
                  Youtube (vidéos intégrées via des iframes)
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section id="conservation" className="container">
        <h2>Durée de conservation des cookies</h2>
        <ul>
          <li>
            Les cookies utilisés par{" "}
            <span className="bold">Google Analytics</span> sont conservés pour
            une durée maximale de <span className="bold">14 mois.</span>
          </li>
          <li>
            Les cookies déposés par YouTube sont gérés conformément à leur
            politique, disponible ici :
            <a href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </a>
          </li>
        </ul>
      </section>

      <section id="gestion" className="background_light">
        <div className="container">
          <h2>Gestion des cookies</h2>
          <p>
            Lors de votre première visite sur le Site, une bannière vous informe
            de l’utilisation des cookies. Vous pouvez :
          </p>
          <ul>
            <li className="bold">Accepter tous les cookies</li>
            <li>
              <span className="bold">Personnaliser vos choix :</span>{" "}
              Sélectionner les catégories de cookies que vous souhaitez activer
              ou désactiver.
            </li>
            <li className="bold">Refuser tous les cookies non essentiels</li>
          </ul>
          <br />
          <p>
            Vous pouvez également gérer ou désactiver les cookies directement
            dans les paramètres de votre navigateur :
          </p>
          <ul>
            <li>
              <span className="bold">Firefox :</span>{" "}
              <a href="about:config">about:config</a>
            </li>
            <li>
              <span className="bold">Chrome :</span>{" "}
              <a href="chrome://settings/cookies">chrome://settings/cookies</a>
            </li>
            <li>
              <span className="bold">Safari :</span>{" "}
              <a href="https://support.apple.com/kb/PH21411">
                https://support.apple.com/kb/PH21411
              </a>
            </li>
            <li>
              <span className="bold">Edge :</span>{" "}
              <a href="https://support.microsoft.com/fr-fr/microsoft-edge">
                https://support.microsoft.com/fr-fr/microsoft-edge
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="droits" className="container">
        <h2>Vos droits</h2>
        <p>Vous disposez des droits suivants en matière de cookies :</p>
        <ul>
          <li>
            <span className="bold">Accès et information :</span> Connaître les
            cookies déposés sur votre appareil.
          </li>
          <li>
            <span className="bold">Opposition :</span> Refuser ou désactiver les
            cookies non essentiels.
          </li>
        </ul>
        <br />
        <p>
          Pour toute demande ou question, vous pouvez nous contacter à l'adresse
          suivante : pierre.gaillard.dev@gmail.com.
        </p>
      </section>

      <section id="modifications" className="background_light">
        <div className="container">
          <h2>Modifications de la politique de cookies</h2>
          <p>
            Cette politique de cookies peut être mise à jour à tout moment. Nous
            vous encourageons à consulter cette page régulièrement pour rester
            informé(e) de tout changement.
          </p>
          <p>
            <span className="bold">Dernière mise à jour :</span> 04 janvier 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
