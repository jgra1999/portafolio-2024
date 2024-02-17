'use client'
import React, { useState } from 'react'

export function CopyToClipboard({ children }: { children: React.ReactNode }) {
	const [copied, setCopied] = useState(false)
	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText('jgra11.2010@gmail.com')
			console.log('Texto copiado al portapapeles')
		} catch (err) {
			console.error('Error al copiar al portapapeles:', err)
		} finally {
			setCopied(true)
			setTimeout(() => setCopied(false), 2000) // Cambia el estado de copied a false después de 2 segundos.
		}
	}

	return (
		<button
			onClick={handleCopyToClipboard}
			className='bg-white text-black rounded-xl px-4 relative'
		>
			<span
				className={`absolute top-0 left-0 transition-all duration-300 font-semibold ${
					copied ? 'opacity-100 text-green-400 -top-6' : 'opacity-0'
				}`}
			>
				Copied!
			</span>
			{children}
		</button>
	)
}
