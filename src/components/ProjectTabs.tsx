'use client'
import { Tab } from '@headlessui/react'
import { ProjectCard } from './projects/ProjectCard'
import { works, projects, clones } from '@/lib/projects'

interface Props {
	tabs: string[]
}

export function ProjectTabs({ tabs }: Props) {
	return (
		<div className='flex flex-col items-center max-w-[90%]'>
			<Tab.Group>
				<Tab.List className='flex justify-between gap-x-5 rounded-xl bg-zinc-800 text-white max-w-[500px]'>
					{tabs.map((tab, index) => (
						<Tab
							key={index}
							className='ui-selected:bg-gradient-to-r from-violet-950 to-purple-900 py-2 px-4 rounded-xl outline-none'
						>
							{tab}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className='mt-10 min-h-[228px]'>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
						{works
							.map((project) => (
								<ProjectCard
									key={project.id}
									name={project.name}
									description_es={project.description_es}
									description_en={project.description_en}
									image={project.image}
									stack={project.stack}
									web_url={project.web_url}
									github_url={project.github_url}
								/>
							))
							.reverse()}
					</Tab.Panel>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
						{projects.map((project) => (
							<ProjectCard
								key={project.id}
								name={project.name}
								description_es={project.description_es}
								description_en={project.description_en}
								image={project.image}
								stack={project.stack}
								web_url={project.web_url}
								github_url={project.github_url}
							/>
						))}
					</Tab.Panel>
					<Tab.Panel className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
						{clones.map((project) => (
							<div key={project.id}>
								<ProjectCard
									name={project.name}
									description_es={project.description_es}
									description_en={project.description_en}
									image={project.image}
									stack={project.stack}
									web_url={project.web_url}
									github_url={project.github_url}
								/>
							</div>
						))}
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
