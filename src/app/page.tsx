import Image from 'next/image'
import Navbar from '../components/Navbar'
import Intro from '@/components/sections/Intro'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
	return (
		<>
			<Navbar />
			<Intro />
			<Projects />
			<Skills />
			<Contact />
		</>
	)
}
