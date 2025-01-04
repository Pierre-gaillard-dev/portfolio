'use client'

import CookieConsent from "react-cookie-consent"

const CookieBanner: React.FC = () => {
	const handleAccept = () => {
		console.log("Cookies acceptés !")
		// Activer Google Analytics ici
		window.gtag?.("consent", "update", {
			analytics_storage: "granted",
		})
	}

	const handleDeclide = () => {
		console.log("Cookies refusés !")
		// Desactiver Google Analytics ici
		window.gtag?.("consent", "update", {
			analytics_storage: "denied",
		})
	}

	return (
		<CookieConsent
			location="bottom"
			buttonText="Accepter"
			declineButtonText="Refuser"
			enableDeclineButton
			cookieName="cookie-consent"
			onAccept={handleAccept}
			onDecline={handleDeclide}
			style={{ background: "var(--background)", fontSize: "13px" }}
			buttonStyle={{ color: "var(--text)", background: "var(--button-color)", borderRadius: "128px", fontSize: "13px" }}
			declineButtonStyle={{ color: "var(--black)", background: "#efd81d", borderRadius: "128px", fontSize: "13px" }}
		>
			Ce site utilise des cookies pour vous garantir la meilleure
			expérience sur notre site.{" "}
			<a href="/politique-de-cookies">En savoir plus</a>
		</CookieConsent>
	)
}

export default CookieBanner
