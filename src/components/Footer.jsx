const siteMap = [
    {
        label: 'Home',
        href: '#home',
    },
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Experiences',
        href: '#experiences',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Contact',
        href: '#contact',
    }
];

const socials = [
    {
        href: 'https://github.com/habbazettt',
        label: 'GitHub'
    },
    {
        href: 'https://www.linkedin.com/in/hubbal-kholiq-habbaza-000910237',
        label: 'LinkedIn'
    },
    {
        href: 'https://www.instagram.com/habbazettt_/',
        label: 'Instagram'
    },
];

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s connect and work together!
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div className="">
                            <p className='mb-2 reveal-up'>Sitemap</p>

                            <ul>
                                {siteMap.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="">
                            <p className='mb-2 reveal-up'>Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            target='_blank'
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end pt-10 mb-8">
                    <p className="text-zinc-500 text-sm">
                        &copy; 2025 by <span className="text-zinc-200">Habbaza</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer