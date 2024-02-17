import React from 'react'
import { SkillsCarousel } from '../skills/SkillsCarousel'
import { useTranslations } from 'next-intl'

export function Skills() {
	const t = useTranslations('Skills')

	return (
		<section id='skills' className='container mb-10 text-center w-full relative'>
			<div className='bg-[hsl(0,0%,6%)] flex flex-col gap-y-8 items-center w-4/5 mx-auto rounded-xl px-5 pt-5 pb-10'>
				<div>
					<h2>{t('title')}</h2>
					<p className='max-w-[600px]'>{t('description')}</p>
				</div>
				<SkillsCarousel />
			</div>
		</section>
	)
}
