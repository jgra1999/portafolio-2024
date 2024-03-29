import Navbar from '../../components/Navbar'
import Intro from '@/components/sections/Intro'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

//? Translates
import { useTranslations } from 'next-intl'

export default function Home() {
	const navT = useTranslations('Navbar')
	const t = useTranslations('Intro')

	return (
		<main>
			<Navbar link1={navT('home')} link2={navT('projects')} link3={navT('skills')} />
			<Intro
				greetings={t('greetings')}
				aboutMe1={t('aboutMe1')}
				aboutMe2={t('aboutMe2')}
			/>
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</main>
	)
}
