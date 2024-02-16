import { ProjectTabs } from '../ProjectTabs'

interface Props {
	title: string
	description: string
	tab1: string
	tab2: string
	tab3: string
}

export function Projects({ title, description, tab1, tab2, tab3 }: Props) {
	return (
		<section className='grid grid-cols-1 justify-items-center text-center my-20 gap-8'>
			<div className='px-4 sm:px-0 max-w-[600px]'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<ProjectTabs tabs={[tab1, tab2, tab3]} />
		</section>
	)
}
