import "./globals.css"

/* import components */
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"
import CookieBanner from "@/src/components/CookieBanner"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="dark_mode">
				<Header sticky />
				{children}
				<Footer />
				<CookieBanner />
			</body>
		</html>
	)
}
