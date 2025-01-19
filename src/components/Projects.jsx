import ProjectCard from "./ProjectCard";

const projects = [
    {
        imgSrc: '/projects/project-1.png',
        title: 'Sampahin : Waste Classification Web App',
        tags: ['TensorFlowJS', 'ExpressJS', 'ReactJS', 'PostgreSQL', 'Google Cloud Platform'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-2.png',
        title: 'SkinSense API : Early Detection of Melanoma Cancer API',
        tags: ['TensorFlowJS', 'ExpressJS', 'PostgreSQL', 'Google Cloud Platform'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-3.png',
        title: 'DoIt : Cloud Based Task Scheduler',
        tags: ['TypeScript', 'NextJS', 'ExpressJS', 'MongoDB', 'Google Cloud Platform'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-4.png',
        title: 'KKN 410 Cibitung UIN Sunan Gunung Djati Bandung Web Profile',
        tags: ['ReactJS', 'TailwindCSS'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-5.png',
        title: 'Mahad Tahfidz UIN Sunan Gunung Djati Bandung Web Profile',
        tags: ['ReactJS', 'TailwindCSS'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-6.png',
        title: 'PT Gemilang Radim Utama Web Profile',
        tags: ['ReactJS', 'TailwindCSS'],
        projectLink: ''
    },
    {
        imgSrc: '/projects/project-7.png',
        title: 'Image and Audio Processing Web App',
        tags: ['Flask', 'TailwindCSS'],
        projectLink: ''
    }
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My Portofolio Projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-projects">
                    {
                        projects.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                classes={'reveal-up'}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects