'use client'
import { Tab } from '@headlessui/react'
import { ProjectCard } from './projects/ProjectCard'
import { works, projects, clones } from '@/lib/projects'

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
								name={project.name}
								description={project.description}
								image={project.image}
								stack={project.stack}
								url={project.url}
							/>
						))}
					</Tab.Panel>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{projects.map((project) => (
							<ProjectCard
								key={project.id}
								name={project.name}
								description={project.description}
								image={project.image}
								stack={project.stack}
								url={project.url}
							/>
						))}
					</Tab.Panel>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{clones.map((project) => (
							<ProjectCard
								key={project.id}
								name={project.name}
								description={project.description}
								image={project.image}
								stack={project.stack}
								url={project.url}
							/>
						))}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
