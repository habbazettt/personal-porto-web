import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/logos/azure-original.svg',
        label: 'Microsoft Azure',
        desc: 'Cloud Plaform'
    },
    {
        imgSrc: '/logos/bootstrap-plain.svg',
        label: 'Bootstrap',
        desc: 'CSS Framework'
    },
    {
        imgSrc: '/logos/docker-plain.svg',
        label: 'Docker',
        desc: 'Containerization'
    },
    {
        imgSrc: '/logos/express-original.svg',
        label: 'ExpressJS',
        desc: 'Web Framework'
    },
    {
        imgSrc: '/logos/figma-original.svg',
        label: 'Figma',
        desc: 'UI Design Tool'
    },
    {
        imgSrc: '/logos/git-original-wordmark.svg',
        label: 'Git',
        desc: 'Version Control'
    },
    {
        imgSrc: '/logos/github-original.svg',
        label: 'Github',
        desc: 'Code Hosting Platform'
    },
    {
        imgSrc: '/logos/go-original-wordmark.svg',
        label: 'Golang',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/logos/googlecloud-original.svg',
        label: 'Google Cloud Platform',
        desc: 'Cloud Computing'
    },
    {
        imgSrc: '/logos/graphql-plain.svg',
        label: 'GraphQL',
        desc: 'Query Language'
    },
    {
        imgSrc: '/logos/javascript-original.svg',
        label: 'JavaScript',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/logos/mongodb-original.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/logos/mysql-plain-wordmark.svg',
        label: 'MySQL',
        desc: 'Relational Database'
    },
    {
        imgSrc: '/logos/nestjs-plain.svg',
        label: 'NestJS',
        desc: 'Web Framework'
    },
    {
        imgSrc: '/logos/nextjs-original-wordmark.svg',
        label: 'NextJS',
        desc: 'React Framework'
    },
    {
        imgSrc: '/logos/nodejs-original.svg',
        label: 'NodeJS',
        desc: 'JavaScript Runtime'
    },
    {
        imgSrc: '/logos/postgresql-plain.svg',
        label: 'PostgreSQL',
        desc: 'Relational Database'
    },
    {
        imgSrc: '/logos/python-original.svg',
        label: 'Python',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/logos/react-original.svg',
        label: 'React',
        desc: 'JavaScript Library'
    },
    {
        imgSrc: '/logos/tailwindcss-plain.svg',
        label: 'TailwindCSS',
        desc: 'CSS Framework'
    },
    {
        imgSrc: '/logos/tensorflow-original.svg',
        label: 'TensorFlow',
        desc: 'Machine Learning'
    },
    {
        imgSrc: '/logos/typescript-original.svg',
        label: 'TypeScript',
        desc: 'Programming Language'
    },
    {
        imgSrc: '/logos/prisma.svg',
        label: 'Prisma ORM',
        desc: 'Database ORM'
    },
    {
        imgSrc: '/logos/css3-original.svg',
        label: 'CSS',
        desc: 'Cascading Style Sheets'
    },
    {
        imgSrc: '/logos/html5-original.svg',
        label: 'HTML',
        desc: 'Hypertext Markup Language'
    },
    {
        imgSrc: '/logos/materialui-original.svg',
        label: 'Material UI',
        desc: 'UI Library'
    },
    {
        imgSrc: '/logos/npm-original-wordmark.svg',
        label: 'NPM',
        desc: 'Package Manager'
    },
    {
        imgSrc: '/logos/yarn-original.svg',
        label: 'Yarn',
        desc: 'Package Manager'
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Skills and Technologies
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover my expertise and proficiency in various programming languages, frameworks, and tools that enable me to deliver high-quality software solutions.
                </p>

                <div className="grid gap-3 md:grid-cols-3 md:gap-5">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes={'reveal-up'}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill