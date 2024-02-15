'use client'
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { EnglishFlagIcon, SpainFlagIcon } from '../Icons'

const locales = [
	{ name: 'english', icon: EnglishFlagIcon, href: '/en' },
	{ name: 'español', icon: SpainFlagIcon, href: '/es' }
]

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
	const [selected, setSelected] = useState(locales[0])

	useEffect(() => {
		if (currentLocale === 'en') {
			setSelected(locales[0])
		} else {
			setSelected(locales[1])
		}
	}, [currentLocale])

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className='relative mt-1 w-36'>
				<Listbox.Button className='relative w-full cursor-default rounded-lg bg-black/40 border border-white/50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
					<div className='flex items-center gap-x-1'>
						<span className='block truncate'>{selected.name}</span>
						<selected.icon aria-hidden='true' />
					</div>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<ChevronUpDownIcon
							className='h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black/40 text-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
						{locales.map((locale, localeIdx) => (
							<Listbox.Option
								key={localeIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active ? 'text-purple-600' : 'text-white'
									}`
								}
								value={locale}
							>
								{({ selected }) => (
									<>
										<a href={locale.href} className='flex items-center gap-x-1'>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{locale.name}
											</span>
											<locale.icon aria-hidden='true' />
										</a>
										{selected ? (
											<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600'>
												<CheckIcon className='h-5 w-5' aria-hidden='true' />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}
