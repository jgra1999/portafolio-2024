import React from 'react'
import { SkillsCarousel } from '../skills/SkillsCarousel'

export function Skills() {
	return (
		<section className='container mb-10 text-center w-full relative'>
			<div className='bg-[hsl(0,0%,6%)] flex flex-col gap-y-8 items-center w-4/5 mx-auto rounded-xl px-5 pt-5 pb-10'>
				<div>
					<h2>Skills</h2>
					<p className='max-w-[600px]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde ad
						natus in vitae alias excepturi autem quia eveniet, error esse consectetur
						amet exercitationem explicabo possimus aut nesciunt animi sequi.
					</p>
				</div>
				<SkillsCarousel />
			</div>
		</section>
	)
}
