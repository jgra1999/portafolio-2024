import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Jose Rojas Web Developer',
	description: 'A Frontend Developer Portfolio',

	icons: {
		icon: '/favicon.png'
	}
}

export default function LocaleLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	return (
		<html lang={locale}>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
