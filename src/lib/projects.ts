import {
	AstroIcon2,
	CssIcon,
	HTMLIcon,
	JavaScriptIcon,
	N8NIcon,
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
		name: 'Koala Fitness Store',
		description1_en:
			'Develop a website for a supplement and sporting goods store, the page serves as a catalog of the products and has a shopping cart.',
		description1_es:
			'Fui contratado para desarrollar un sitio web para una tienda de suplementos y artículos deportivos, la página sirve como catálogo de los productos y cuenta con carrito de compras.',

		image: '/works/work-2.webp',
		stack: [AstroIcon2, ReactIcon, TailwindIcon, SupabaseIcon, TypeScriptIcon],
		web_url: 'https://koalavzla.com/',
		github_url: 'https://github.com/jgra1999/koala-store'
	},

	{
		id: 3,
		name: 'Isaac Sequera Portafolio',
		description1_en:
			'Portfolio made for a graphic designer, the portfolio has animations made with pure CSS, currently you can not correctly appreciate the animations in IOS browsers, but in androids and computers they look correctly',
		description1_es:
			'Portafolio realizado para un diseñador gráfico, el portafolio tiene animaciones hechas con CSS puro, actualmente no se pueden apreciar correctamente las animaciones en navegadores IOS, pero en androides y computadoras se ven correctamente.',
		image: '/works/work-4.webp',
		stack: [VueIcon, CssIcon, TypeScriptIcon],
		web_url: 'https://isaac-portafolio-demo.netlify.app/',
		github_url: 'https://github.com/jgra1999/isaac-sequera-portafolio'
	},
	{
		id: 4,
		name: 'Nexo create',
		description1_en:
			'Developed with WordPress, this website was created for a company operating in the field of business formation in the United States and credit repair.',
		description1_es:
			'Desarrollado con Wordpress, este sitio web fue creado para una empresa que opera en el campo de apertura de empresas en Estados Unidos y reparación de crédito.',
		description2_en:
			'I developed AI automations for customer service on the website and WhatsApp using N8N, which also included the ability to schedule appointments and Zoom meetings.',
		description2_es:
			'Desarrolle automatizaciones inteligencia artificial para la atención al cliente en el sitio web y whatsapp utilizando N8N, además de la posibilidad de agendar citas y programar reuniones por Zoom.',
		image: '/works/work-5.webp',
		stack: [WordpressIcon, CssIcon, N8NIcon],
		web_url: 'https://nexocreate.com/',
		github_url: ''
	},
	{
		id: 5,
		name: 'Alca Truck Service',
		description1_en:
			'Develop a website for a company that works in the area of truck repair and maintenance in the United States.',
		description1_es:
			'Fui contratado para el desarrollo de un sitio web para una empresa que trabaja en el área de reparación y mantenimiento de camiones en Estados Unidos.',
		image: '/works/work-3.webp',
		stack: [WordpressIcon, CssIcon],
		web_url: 'https://alcatrucks.com/',
		github_url: ''
	},
	{
		id: 6,
		name: 'New The Culture Clan',
		description1_en:
			'Redesign development for the website of Venezuelan clothing brand, The Culture Clan.',
		description1_es:
			'Pagina web desarrollada para la marca de ropa venezolana, The Culture Clan. Esta pagina web fue desarrollada con Astro y React. Utilizando una base de datos de Supabase para el manejo de los productos.',
		image: '/works/new-tcc.webp',
		stack: [AstroIcon2, TailwindIcon, ReactIcon, SupabaseIcon, TypeScriptIcon],
		web_url: 'https://thecultureclan.netlify.app/',
		github_url: 'https://github.com/jgra1999/the-culture-clan'
	},
	{
		id: 7,
		name: 'The Master Pro Clean',
		description1_en:
			'I developed a website for a cleaning company in the state of Florida, built with WordPress..',
		description1_es:
			'Sitio web desarrollado para una empresa de limpieza en el estado de la Florida, el sitio web fue desarrollado con Wordpress.',
		description2_en:
			'I implemented AI-powered automations for website customer service and appointment scheduling via WhatsApp.',
		description2_es:
			'Realice automatizaciones con inteligencia artificial para la atención al cliente en el sitio web y agenda de citas por Whatsapp.',
		image: '/works/the-master-pro.webp',
		stack: [WordpressIcon, CssIcon, N8NIcon],
		web_url: 'https://themasterprosteam.com/',
		github_url: ''
	},
	{
		id: 8,
		name: 'Iventium',
		description1_en:
			'I worked on developing a website for a digital marketing agency specializing in Artificial Intelligence. The website was built with WordPress.',
		description2_en:
			'n addition to website development, I created AI-powered automations for customer service on the website and WhatsApp using N8N. This included the ability to schedule appointments and Zoom meetings.',
		description1_es: `Trabaje en el desarrollo de un sitio web para una agencia de marketing digital especializada en el uso de Inteligencia Artificial, el sitio web fue desarrollado con Wordpress.`,
		description2_es: `Además de trabajar con el desarrollo del sitio web, trabaje con la creación de automatizaciones con inteligencia artificial para la atención al cliente en el sitio web y whatsapp utilizando N8N.`,
		image: '/works/iventium.webp',
		stack: [WordpressIcon, CssIcon, N8NIcon],
		web_url: 'https://iventium.com/',
		github_url: ''
	}
]

export const projects: ProjectCards[] = [
	{
		id: 1,
		name: 'Aora App',
		description1_en:
			'Project developed with React Native, It is an APP of a social network to share videos, with user registration and logic to upload videos to a database.',
		description1_es:
			'Proyecto de practica realizado con React Native, es una APP de una red social para compartir videos, con registro de usuario y lógica para subir videos a una base de datos.',
		image: '/projects/aora-app.webp',
		stack: [ReactIcon, TailwindIcon, TypeScriptIcon],
		web_url: '',
		github_url: 'https://github.com/jgra1999/aora-app'
	},
	{
		id: 2,
		name: 'Larri AI',
		description1_en:
			'Develop a website that consists of a chat with artificial intelligence that uses the OpenAI API, this chat is oriented to educational topics.',
		description1_es:
			'Desarrolle un sitio web que consiste en un chat con inteligencia artificial que utiliza la API de OpenAI, este chat esta orientado a temas educativos.',
		image: '/projects/larri.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon],
		web_url: 'https://larri-ai.netlify.app/',
		github_url: 'https://github.com/jgra1999/larri-ai'
	},
	{
		id: 3,
		name: 'Chat With Your PDF IA',
		description1_en:
			'Development of a web application that has the functionality of uploading a PDF file that is stored in cloudinary and with the OCR addons extract the text to ask questions about the document to an artificial intelligence.',
		description1_es:
			'Desarrollo de una aplicación web que tiene la funcionalidad de subir un archivo PDF que se almacena en cloudinary y con los addons de OCR extraer el texto para hacer preguntas sobre el documento a una inteligencia artificial.',
		image: '/projects/pdf-chat.webp',
		stack: [AstroIcon2, SvelteIcon, TailwindIcon, TypeScriptIcon],
		web_url: '',
		github_url: 'https://github.com/jgra1999/pdf-chat-ia'
	},
	{
		id: 4,
		name: 'Balling Sportwear',
		description1_en:
			'This is a project I do during my college internships in 2021 for a sportswear store called Balling Sportwear.',
		description1_es:
			'Este es un proyecto que realice durante mis pasantias universitarias en 2021 para una tienda de ropa deportiva llamada Balling Sportwear.',
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
		description1_en:
			'Clone of the main twitter page, has the login functionality so that people can post a tweetClone of the main twitter page, has the login functionality done with the supabase services so that people can post a tweet.',
		description1_es:
			'Clon de la página principal de twitter, tiene la funcionalidad de login hecha con los servicios de supabase para que las personas puedan publicar un tweet.',
		image: '/clones/x.webp',
		stack: [NextJSIcon, TailwindIcon, TypeScriptIcon, SupabaseIcon],
		web_url: 'https://github.com/jgra1999/x-clone',
		github_url: 'https://github.com/jgra1999/x-clone'
	},

	{
		id: 2,
		name: 'Spotify',
		description1_en:
			'Development of a clone of the Spotify website with its basic functionalities, such as the music player with its controllers such as changing song or volume.',
		description1_es:
			'Desarrollo de un clon de la página web de Spotify con sus funcionalidades básicas, como el reproductor de música con sus controles como cambiar de canción o volumen.',
		image: '/clones/spotify.webp',
		stack: [AstroIcon2, ReactIcon, TailwindIcon, TypeScriptIcon],
		web_url: 'https://github.com/jgra1999/spotify-clone',
		github_url: 'https://github.com/jgra1999/spotify-clone'
	},

	{
		id: 3,
		name: 'Typing Game',
		description1_en:
			'Project development to practice typing, without dependencies or frameworks, inspired by the monkeytype page, this project has a timer and a counter of words per minute.',
		description1_es:
			'Desarrollo de un proyecto para practicar la escritura, sin dependencias o frameworks, inspirado en la página de monkeytype, este proyecto tiene un temporizador y un contador de palabras por minuto.',
		image: '/clones/typing-game.webp',
		stack: [HTMLIcon, CssIcon, JavaScriptIcon],
		web_url: 'https://superlative-kulfi-603cda.netlify.app/',
		github_url: 'https://github.com/jgra1999/typing-game'
	},

	{
		id: 4,
		name: 'Tinder Swipe',
		description1_en:
			'Project made without dependencies or frameworks, this project is based on the effect of swipe of tinder when interacting with users images',
		description1_es:
			'Proyecto realizado sin dependencias o frameworks, este proyecto esta basado en el efecto de swipe de tinder al interactuar con las imágenes de los usuarios',
		image: '/clones/tinder-swiper.webp',
		stack: [HTMLIcon, CssIcon, JavaScriptIcon],
		web_url: 'https://peaceful-semifreddo-17e88f.netlify.app/',
		github_url: 'https://github.com/jgra1999/tinder-swipe'
	}
]
