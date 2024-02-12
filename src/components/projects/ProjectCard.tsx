import React from 'react'
import { AstroIcon, ReactIcon } from '../Icons'

export function ProjectCard() {
	return (
		<div className='relative overflow-hidden group'>
			<img
				src='/work-1.png'
				alt=''
				loading='lazy'
				className='rounded-xl aspect-[1920/977]'
			/>

			<div
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
				<h4 className='font-bold'>thecultureclan.com</h4>
				<p className='text-xs text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo aliquam
					ratione ut repellat, necessitatibus sed sequi blanditiis quos! Blanditiis
					saepe voluptas earum corrupti quia possimus, quam magnam. Iusto, autem.
				</p>
				<div className='flex items-center justify-center gap-x-4'>
					<AstroIcon styles='w-6 h-6' />
					<ReactIcon styles='w-6 h-6' />
				</div>
			</div>
		</div>
	)
}
