import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import {
	DocumentMagnifyingGlassIcon,
	Square2StackIcon
} from '@heroicons/react/24/outline'
import React from 'react'
import { CopyToClipboard } from '../ui/copyToClipboard'
import { useTranslations } from 'next-intl'

export default function Contact() {
	const t = useTranslations('Contact')

	return (
		<section
			id='contact'
			className='bg-gradient-to-r from-violet-950 to-purple-900 pt-48 pb-20 -mt-40 text-center'
		>
			<h2>{t('title')}</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-8'>
				<div className='flex flex-col items-center gap-y-5'>
					<div className='flex gap-x-1 items-center'>
						<span>
							<EnvelopeIcon className='w-7 h-7' />
						</span>
						<h3 className='font-bold text-2xl'>Mail</h3>
					</div>
					<div className='flex gap-x-2 '>
						<div className='bg-white/20 border border-white rounded-xl py-2 px-4 w-72 sm:w-96 text-start'>
							jgra11.2010@gmail.com
						</div>
						<CopyToClipboard>
							<Square2StackIcon className='w-6 h-6' />
						</CopyToClipboard>
					</div>
				</div>
				<div className='flex flex-col items-center gap-y-5 text-left'>
					<div className='flex gap-x-1 items-center'>
						<span>
							<DocumentTextIcon className='w-7 h-7' />
						</span>
						<h3 className='font-bold text-2xl'>Curriculum Vitae</h3>
					</div>
					<div className='flex gap-x-2 '>
						<div className='bg-white/20 border border-white rounded-xl py-2 px-4 w-72 sm:w-96 text-start'>
							Jose-Rojas-CV.pdf
						</div>
						<a
							href='/Jose-Rojas-CV.pdf'
							target='_blank'
							className='bg-white text-black rounded-xl px-4 flex items-center'
						>
							<DocumentMagnifyingGlassIcon className='w-6 h-6' />
						</a>
					</div>
				</div>
				<div className='flex flex-col items-center gap-y-5 text-left'>
					<div className='flex gap-x-1 items-center'>
						<span>
							<DocumentTextIcon className='w-7 h-7' />
						</span>
						<h3 className='font-bold text-2xl'>Diploma React Advanced</h3>
					</div>
					<div className='flex gap-x-2 '>
						<div className='bg-white/20 border border-white rounded-xl py-2 px-4 w-72 sm:w-96 text-start'>
							Jose-Rojas-CV.pdf
						</div>
						<a
							href='/diploma-react-avanzado.pdf'
							target='_blank'
							className='bg-white text-black rounded-xl px-4 flex items-center'
						>
							<DocumentMagnifyingGlassIcon className='w-6 h-6' />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
