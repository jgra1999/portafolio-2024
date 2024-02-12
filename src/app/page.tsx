import Image from 'next/image'
import Navbar from '../components/Navbar'
import Intro from '@/components/ui/Intro'
import { Projects } from '@/components/ui/Projects'

export default function Home() {
	return (
		<>
			<Navbar />
			<Intro />
			<Projects />
		</>
	)
}
