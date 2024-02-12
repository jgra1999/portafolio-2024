'use client'
import { Tab } from '@headlessui/react'
import { ProjectCard } from './projects/ProjectCard'
import { works } from '@/lib/projects'

export default function ProjectTabs() {
	return (
		<div className='flex flex-col items-center max-w-[90%]'>
			<Tab.Group>
				<Tab.List className='flex justify-between gap-x-5 rounded-xl bg-zinc-800 text-white max-w-[400px]'>
					<Tab className='ui-selected:bg-gradient-to-r from-violet-950 to-purple-900 py-2 px-4 rounded-tl-xl rounded-bl-xl outline-none'>
						Works
					</Tab>
					<Tab className='ui-selected:bg-gradient-to-r from-violet-950 to-purple-900 py-2 px-4 outline-none'>
						Personal Projects
					</Tab>
					<Tab className='ui-selected:bg-gradient-to-r from-violet-950 to-purple-900 py-2 px-4 rounded-tr-xl rounded-br-xl outline-none'>
						Clones
					</Tab>
				</Tab.List>
				<Tab.Panels className='mt-10'>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{works.map((project) => (
							<ProjectCard
								key={project.id}
								domain={project.domain}
								description={project.description}
								image={project.image}
								stack={project.stack}
							/>
						))}
					</Tab.Panel>
					<Tab.Panel>Content 2</Tab.Panel>
					<Tab.Panel>Content 3</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
