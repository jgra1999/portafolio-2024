import ProjectTabs from '../ProjectTabs'

export function Projects() {
	return (
		<section className='grid grid-cols-1 justify-items-center text-center my-20 gap-8'>
			<div className='px-4 sm:px-0 sm:max-w-[600px]'>
				<h2>Projects</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi
					inventore doloribus sed ipsa delectus vel ut consequatur sequi adipisci,
					minima doloremque esse similique sunt blanditiis placeat. Ullam, ex minus?
				</p>
			</div>
			<ProjectTabs />
		</section>
	)
}
