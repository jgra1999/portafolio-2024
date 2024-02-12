'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Intro() {
	const type = useRef(null)

	useEffect(() => {
		const typed = new Typed(type.current, {
			strings: ['Web Developer', 'Web Designer', 'Web Programmer'],
			typeSpeed: 200,
			backSpeed: 200,
			loop: true
		})

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy()
		}
	}, [])
	return (
		<section className='bg-heroImg flex items-center px-8 md:px-14 h-[700px] md:h-screen w-full'>
			<article className='grid grid-cols-1 md:grid-cols-2'>
				<div className='space-y-5'>
					<span className='font-semibold text-lg bg-gradient-to-r from-violet-950 to-purple-900 border border-white p-2 px-4'>
						Welcome to my Portafolio
					</span>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Hi! I'm Jose Rojas <span ref={type}></span>
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolore
						ut, et tempora eligendi soluta, rem saepe adipisci aliquid quis, nobis
						nam. Qui ex sunt vero suscipit dolore accusamus repudiandae.
					</p>
					<button className='flex items-center gap-x-2 text-lg pt-8 text-white/70 active:text-white hover:text-white'>
						Let's Connect
						<ArrowRightCircleIcon className='w-5 h-5' />
					</button>
				</div>
				<div className='relative hidden md:block'>
					<img
						src='/astronaut.webp'
						alt='Astronaut image'
						loading='lazy'
						className='w-96 animate-bounce animate-infinite animate-duration-[5000ms] absolute left-36 '
					/>
				</div>
			</article>
		</section>
	)
}
