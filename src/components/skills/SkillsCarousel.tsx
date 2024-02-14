import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { ReactIcon } from '../Icons'
import { skills } from '@/lib/skills'

export function SkillsCarousel() {
	return (
		<Carousel opts={{ loop: true }} className='w-11/12'>
			<CarouselContent>
				{skills.map((skill, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
						<div className='flex flex-col items-center gap-y-2'>
							<skill.icon styles='w-36 h-36' />
							<span className='text-sm font-semibold'>{skill.name}</span>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
