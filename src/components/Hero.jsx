import { ButtonOutline, ButtonPrimary } from "./Button"

const Hero = () => {
    return (
        <section
            id="home"
            className="py-28 lg:pt-36 bg-hero bg-cover bg-center bg-no-repeat h-screen"
        >
            <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/avatar.png"
                                width={40}
                                height={40}
                                alt="Hubbal Habbaza"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-300 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Web Developer - UI Designer - Cloud Engineer
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Empowering Digital Solutions through Web Development & UI/UX Design
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download CV"
                            icon='download'
                        />

                        <ButtonOutline
                            href={'#about'}
                            label="Scroll Down"
                            icon='arrow_downward'
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full maxw-[480px] ml-auto bg-gradient-to-t from-[#3b3b3f] via-25% via-[#3b3b3f/40 to-65% rounded-[60px] flex items-center justify-center overflow-hidden">
                        <img
                            src="/hero-banner.png"
                            width={380}
                            height={400}
                            alt=""
                            className=""
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero