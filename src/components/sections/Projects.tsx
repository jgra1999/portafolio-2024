import { ProjectTabs } from '../ProjectTabs'
import { useTranslations } from 'next-intl'

export function Projects() {
	const t = useTranslations('Projects')
	return (
		<section
			id='projects'
			className='grid grid-cols-1 justify-items-center text-center my-20 gap-8'
		>
			<div className='px-4 sm:px-0 max-w-[600px]'>
				<h2>{t('title')}</h2>
				<p>{t('description')}</p>
			</div>
			<ProjectTabs tabs={[t('tab1'), t('tab2'), t('tab3')]} />
		</section>
	)
}
