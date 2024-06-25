import React from 'react'
import { GithubIcon2, PageIcon } from '../Icons'
import { ProjectCards } from '@/types/project-cards'

export function ProjectCard({
	name,
	description,
	image,
	stack,
	web_url,
	github_url
}: ProjectCards) {
	return (
		<div>
			<div className='relative overflow-hidden group'>
				<img
					src={image}
					alt={`${name} Home Page Image`}
					loading='lazy'
					className='rounded-xl aspect-[1920/977]'
				/>

				<a
					href={web_url}
					target='_blank'
					className='flex
				  flex-col
				  justify-center
				  px-5
				  bg-violet-950/80
				  absolute
				  top-0
				  h-full
				  gap-y-5
				  rounded-xl
				  opacity-0
				  group-hover:opacity-100
						transition-opacity
						duration-300'
				>
					<h4 className='font-bold'>{name}</h4>
					<p className='text-xs text-white'>{description}</p>
					<div className='flex items-center justify-center gap-x-4'>
						{stack.map((IconComponent: any, index: number) => (
							<IconComponent key={index} styles='w-5 h-5' />
						))}
					</div>
				</a>
			</div>

			<div className='mt-4 flex items-center gap-x-5'>
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
	)
}
