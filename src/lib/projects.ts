import {
	AstroIcon,
	CssIcon,
	HTMLIcon,
	JavaScriptIcon,
	NextJSIcon,
	ReactIcon,
	SupabaseIcon,
	SvelteIcon,
	TailwindIcon,
	TypeScriptIcon,
	VueIcon,
	WordpressIcon
} from '@/components/Icons'

import { ProjectCards } from '@/types/project-cards'

export const works: ProjectCards[] = [
	{
		id: 1,
		name: 'The Culture Clan',
		description:
			'I was hired to develop the website for a clothing brand that works in Valencia Venezuela and Medellin Colombia, I still make changes and add features.',
		image: '/works/work-1.webp',
		stack: [AstroIcon, ReactIcon, TailwindIcon, TypeScriptIcon],
		web_url: 'https://thecultureclan.com',
		github_url: 'https://github.com/jgra1999/the-culture-clan'
	},
	{
		id: 2,
		name: 'Koala Fitness Store',
		description:
			'Develop a website for a supplement and sporting goods store, the page serves as a catalog of the products and has a shopping cart.',
		image: '/works/work-2.webp',
		stack: [AstroIcon, ReactIcon, TailwindIcon, SupabaseIcon, TypeScriptIcon],
		web_url: 'https://koalavzla.com/',
		github_url: 'https://github.com/jgra1999/koala-store'
	},
	{
		id: 3,
		name: 'Alca Truck Service',
		description:
			'Develop a website for a company that works in the area of truck repair and maintenance in the United States.',
		image: '/works/work-3.webp',
		stack: [WordpressIcon, CssIcon],
		web_url: 'https://alcatrucks.com/',
		github_url: ''
	}
]

export const projects: ProjectCards[] = [
	{
		id: 1,
		name: 'Larri AI',
		description:
			'Develop a website that consists of a chat with artificial intelligence that uses the OpenAI API, this chat is oriented to educational topics.',
		image: '/projects/larri.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon],
		web_url: 'https://larri-ai.netlify.app/',
		github_url: 'https://github.com/jgra1999/larri-ai'
	},
	{
		id: 2,
		name: 'Chat With Your PDF IA',
		description:
			'Development of a web application that has the functionality of uploading a PDF file that is stored in cloudinary and with the OCR addons extract the text to ask questions about the document to an artificial intelligence.',
		image: '/projects/pdf-chat.webp',
		stack: [AstroIcon, SvelteIcon, TailwindIcon, TypeScriptIcon],
		web_url: '',
		github_url: 'https://github.com/jgra1999/pdf-chat-ia'
	},
	{
		id: 3,
		name: 'Balling Sportwear',
		description:
			'This is a project I do during my college internships in 2021 for a sportswear store called Balling Sportwear.',
		image: '/projects/balling.webp',
		stack: [VueIcon, TailwindIcon, JavaScriptIcon],
		web_url: 'https://balling-demo.netlify.app/',
		github_url: 'https://github.com/jgra1999/balling-store.git'
	}
]

export const clones: ProjectCards[] = [
	{
		id: 1,
		name: 'Twitter / X',
		description:
			'Clone of the main twitter page, has the login functionality so that people can post a tweetClone of the main twitter page, has the login functionality done with the supanase services so that people can post a tweet',
		image: '/clones/x.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon, SupabaseIcon],
		web_url: 'https://github.com/jgra1999/x-clone',
		github_url: 'https://github.com/jgra1999/x-clone'
	},

	{
		id: 2,
		name: 'Spotify',
		description:
			'Development of a clone of the Spotify website with its basic functionalities, such as the music player with its controllers such as changing song or volume.',
		image: '/clones/spotify.webp',
		stack: [AstroIcon, ReactIcon, TailwindIcon, TypeScriptIcon],
		web_url: 'https://github.com/jgra1999/spotify-clone',
		github_url: 'https://github.com/jgra1999/spotify-clone'
	},

	{
		id: 3,
		name: 'Typing Game',
		description:
			'Project development to practice typing, without dependencies or frameworks, inspired by the monkeytype.com. website',
		image: '/clones/typing-game.webp',
		stack: [HTMLIcon, CssIcon, JavaScriptIcon],
		web_url: 'https://superlative-kulfi-603cda.netlify.app/',
		github_url: 'https://github.com/jgra1999/typing-game'
	},

	{
		id: 4,
		name: 'Tinder Swipe',
		description:
			'Project made without dependencies or frameworks, this project is based on the effect of swipe of tinder when interacting with users images',
		image: '/clones/tinder-swiper.webp',
		stack: [HTMLIcon, CssIcon, JavaScriptIcon],
		web_url: 'https://peaceful-semifreddo-17e88f.netlify.app/',
		github_url: 'https://github.com/jgra1999/tinder-swipe'
	}
]
