'use client'
import { Tab } from '@headlessui/react'

export default function ProjectTabs() {
	return (
		<div className=''>
			<Tab.Group>
				<Tab.List className='flex gap-x-5 rounded-xl bg-zinc-800 text-white'>
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
				<Tab.Panels>
					<Tab.Panel>Content 1</Tab.Panel>
					<Tab.Panel>Content 2</Tab.Panel>
					<Tab.Panel>Content 3</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
