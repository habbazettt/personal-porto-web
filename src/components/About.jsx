const About = () => {
    const aboutItems = [
        {
            label: 'Projects Done',
            number: 10
        },
        {
            label: 'GitHub Repos',
            number: 70
        },
        {
            label: 'Certificates',
            number: 90
        }
    ]

    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
                        Hi, I&apos;m Hubbal, an Enthusiastic final year Computer Science student at UIN Sunan Gunung Djati Bandung with a passion for web development, Cloud Computing and UI/UX design. Experienced in developing applications using NodeJS ReactJS and i am proficient in programming languages such as JavaScript and TypeScript, alongside a solid understanding of UI/UX principles. I am committed to maintaining memorization of the Quran and am actively seeking opportunities to collaborate and contribute my skills to meaningful projects.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About