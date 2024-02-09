import Image from 'next/image'
import Navbar from '../components/Navbar'
import Intro from '@/components/ui/Intro'

export default function Home() {
	return (
		<>
			<Navbar />
			<Intro />
			<h1>Hola</h1>
		</>
	)
}
