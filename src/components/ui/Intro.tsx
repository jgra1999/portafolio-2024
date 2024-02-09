/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Intro() {
	return (
		<section className='bg-heroImg flex items-center px-14 h-screen w-full'>
			<article className='grid grid-cols-1 md:grid-cols-2'>
				<div className='space-y-4'>
					<span className='font-semibold text-lg bg-gradient-to-r from-violet-950 to-purple-900 border border-white p-2 px-4'>
						Welcome to my Portafolio
					</span>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Hi! I'm Jose Rojas <span>web developer</span>
					</h1>
					<p className='text-white/60'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolore
						ut, et tempora eligendi soluta, rem saepe adipisci aliquid quis, nobis
						nam. Qui ex sunt vero suscipit dolore accusamus repudiandae.
					</p>
				</div>
				<div className='relative'>
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
