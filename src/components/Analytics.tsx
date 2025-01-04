import Script from "next/script"

const Analytics: React.FC = () => {
	return (
		<>
			{/* Charger gtag.js */}
			<Script
				strategy="afterInteractive"
                async
				src={`https://www.googletagmanager.com/gtag/js?id=G-X3HYVT2GZV`}
			></Script>
			<Script id="google-analytics-init" strategy="afterInteractive">
				{`
          // Initialiser Google Analytics
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-X3HYVT2GZV');
        `}
			</Script>
		</>
	)
}

export default Analytics
