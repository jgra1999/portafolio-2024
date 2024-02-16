import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<main>
			<section className='mx-auto container flex flex-col gap-y-2 items-center justify-center bg-heroImg h-screen'>
				<h2>Error 404: Not Found</h2>
				<p>Could not find requested resource</p>
				<Link href='/' className='flex gap-x-1 hover:text-purple-700'>
					<ArrowLeftCircleIcon className='w-6 h-6' />
					Return Home
				</Link>
			</section>
		</main>
	)
}
