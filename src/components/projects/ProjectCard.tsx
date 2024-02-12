import React from 'react'

interface Props {
	name: string
	description: string
	image: string
	stack: any
	url: string
}

export function ProjectCard({ name, description, image, stack, url }: Props) {
	return (
		<div className='relative overflow-hidden group'>
			<img
				src={image}
				alt={`${name} Home Page Image`}
				loading='lazy'
				className='rounded-xl aspect-[1920/977]'
			/>

			<a
				href={url}
				className='flex
			  flex-col
			  justify-center
			  px-5
			  bg-violet-950/50
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
	)
}
