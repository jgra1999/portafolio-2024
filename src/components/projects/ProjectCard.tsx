/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { GithubIcon2, PageIcon } from '../Icons'
import { ProjectCards } from '@/types/project-cards'

export function ProjectCard({
	name,
	description_es,
	description_en,
	image,
	stack,
	web_url,
	github_url
}: ProjectCards) {
	const [language, setLanguage] = useState('')
	useEffect(() => {
		const pathname = window.location.pathname // Obtiene la ruta completa (ej: /en/pagina)
		setLanguage(pathname.split('/')[1]) // Divide la ruta y obtiene el segundo segmento
	}, [])
	return (
		<div>
			<div className='relative overflow-hidden group'>
				<img
					src={image}
					alt={`${name} Home Page Image`}
					loading='lazy'
					className='rounded-t-xl aspect-[1920/977]'
				/>
			</div>

			<div className='bg-[#0c0c0c]/70 py-5 px-4 text-start rounded-b-xl'>
				<h4 className='font-bold text-2xl'>{name}</h4>
				<p className='text-white text-sm mt-2'>
					{language === 'en' ? description_en : description_es}
				</p>
				<div className='flex items-center gap-x-4 mt-6'>
					{stack.map((IconComponent: any, index: number) => (
						<IconComponent key={index} styles='w-6 h-6' />
					))}
				</div>

				<div className='mt-6 flex items-center gap-x-5'>
					{web_url && (
						<a
							href={web_url}
							target='_blank'
							className='py-2 px-4 border-2 border-white hover:border-purple-500 rounded-lg hover:text-purple-500 flex justify-center items-center gap-x-2'
						>
							<PageIcon />
							<span>Web</span>
						</a>
					)}
					{github_url && (
						<a
							href={github_url}
							target='_blank'
							className='py-2 px-4 border-2 border-white hover:border-purple-500 rounded-lg hover:text-purple-500 flex justify-center items-center gap-x-2'
						>
							<GithubIcon2 />
							Code
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
