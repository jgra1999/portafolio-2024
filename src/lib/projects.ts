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
	TypeScriptIcon
} from '@/components/Icons'

/* TODO: AGREGAR URL */
export const works = [
	{
		id: 1,
		name: 'The Culture Clan',
		description:
			'I was hired to develop the website for a clothing brand that works in Valencia Venezuela and Medellin Colombia, I still make changes and add features.',
		image: '/works/work-1.webp',
		stack: [AstroIcon, ReactIcon, TailwindIcon, TypeScriptIcon],
		url: 'https://thecultureclan.com'
	},
	{
		id: 2,
		name: 'Koala Fitness Store',
		description:
			'Develop a website for a supplement and sporting goods store, the page serves as a catalog of the products and has a shopping cart.',
		image: '/works/work-2.webp',
		stack: [AstroIcon, ReactIcon, TailwindIcon, SupabaseIcon, TypeScriptIcon],
		url: 'https://koalavzla.com/'
	}
]

export const projects = [
	{
		id: 1,
		name: 'Larri AI',
		description:
			'Develop a website that consists of a chat with artificial intelligence that uses the OpenAI API, this chat is oriented to educational topics.',
		image: '/projects/larri.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon],
		url: 'https://larri-ai.netlify.app/'
	},
	{
		id: 2,
		name: 'Chat With Your PDF IA',
		description:
			'Development of a web application that has the functionality of uploading a PDF file that is stored in cloudinary and with the OCR addons extract the text to ask questions about the document to an artificial intelligence.',
		image: '/projects/pdf-chat.webp',
		stack: [AstroIcon, SvelteIcon, TailwindIcon, TypeScriptIcon],
		url: 'https://larri-ai.netlify.app/'
	}
]

export const clones = [
	{
		id: 1,
		name: 'Twitter / X',
		description:
			'Clone of the main twitter page, has the login functionality so that people can post a tweetClone of the main twitter page, has the login functionality done with the supanase services so that people can post a tweet',
		image: '/clones/x.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon, SupabaseIcon],
		url: 'https://github.com/jgra1999/x-clone'
	},

	{
		id: 2,
		name: 'Spotify',
		description:
			'Development of a clone of the Spotify website with its basic functionalities, such as the music player with its controllers such as changing song or volume.',
		image: '/clones/spotify.png',
		stack: [AstroIcon, ReactIcon, TailwindIcon, TypeScriptIcon],
		url: '#'
	},

	{
		id: 3,
		name: 'Typing Game',
		description:
			'Project development to practice typing, without dependencies or frameworks, inspired by the monkeytype.com. website',
		image: '/clones/typing-game.webp',
		stack: [HTMLIcon, CssIcon, JavaScriptIcon],
		url: 'https://superlative-kulfi-603cda.netlify.app/'
	}
]
