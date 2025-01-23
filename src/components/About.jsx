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
                        I&apos;m Hubbal, an enthusiastic final-year Computer Science student at UIN Sunan Gunung Djati Bandung, passionate about web development, cloud computing, and UI/UX design. I have experience in developing applications using NodeJS and ReactJS, and am proficient in programming languages such as TypeScript and Golang. Committed to memorizing the Quran, i actively seek collaboration opportunities on meaningful projects that leverage his skills. Additionally, I have completed the Bangkit Academy 2024 Learning Path in Cloud Computing, further enhancing his expertise in this critical area of technology.
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