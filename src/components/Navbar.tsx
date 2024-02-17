'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './Icons'
import { LanguageSelector } from './ui/LanguageSelector'

interface Props {
	link1: string
	link2: string
	link3: string
}

export default function Navbar({ link1, link2, link3 }: Props) {
	const navigation = [
		{ name: link1, href: '#home' },
		{ name: link2, href: '#projects' },
		{ name: link3, href: '#skills' }
	]

	/* function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	} */

	return (
		<Disclosure
			id='header-nav'
			as='nav'
			className='bg-transparent fixed w-full py-4 z-50'
		>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button
									className='relative
								  inline-flex
								  items-center
								  justify-center
								  rounded-md
								  p-2
								  text-white/80
								  active:text-white
								  focus:outline-none
								  focus:ring-2
								  focus:ring-inset
								  focus:ring-white'
								>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-8'>
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className='hover:underline decoration-white underline-offset-8 ui-active:underline ui-active:decoration-violet-500'
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className='flex items-center gap-x-5'>
								<div className='flex item-center gap-x-2'>
									<a
										href='https://www.linkedin.com/in/jose-rojas-01aa79228/'
										target='_blank'
										className='block border border-white rounded-full p-1.5 opacity-80 active:opacity-100 lg:hover:opacity-100'
									>
										<LinkedinIcon />
									</a>
									<a
										href='https://github.com/jgra1999'
										target='_blank'
										className='block border border-white rounded-full p-1.5 opacity-80 active:opacity-100 lg:hover:opacity-100'
									>
										<GithubIcon />
									</a>
									<a
										href='#'
										className='block border border-white rounded-full p-1.5 opacity-80 active:opacity-100 lg:hover:opacity-100'
									>
										<WhatsappIcon />
									</a>
								</div>
								<LanguageSelector currentLocale={link1 === 'Inicio' ? 'es' : 'en'} />
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className='block rounded-md px-3 py-2 text-base font-medium'
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
