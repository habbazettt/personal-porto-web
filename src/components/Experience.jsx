import { AiOutlinePython } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

const experiences = [
    {
        title: "Cloud Computing Cohort at Bangkit Academy 2024 batch 2 led by Google, Tokopedia, Gojek & Traveloka",
        location: "Remote",
        description:
            "Bangkit Academy is a place to upgrade skills in tech and enhance soft skills. There are three learning paths at Bangkit, but I chose Cloud Computing. This program offers online courses and classes about cloud computing, as well as online classes to enhance soft skills and English speaking skills.",
        date: "Sep 2024 - Jan 2025",
        icon: <IoCloudDownloadSharp />,
    },
    {
        title: "Web Developer at PT Gemilang Radim Utama",
        location: "Majalaya, Kab. Bandung",
        description:
            "As a Web Developer at PT Gemilang Radim Utama, I worked independently to design and implement the UI/UX for the company's responsive profile website.",
        date: "Oct 2024 - Nov 2024",
        icon: <FaCode />,
    },
    {
        title: "UI/UX Designer at UIN Sunan Gunung Djati Bandung",
        location: "Bandung, West Java",
        description:
            "The internship experience as a UI Designer at UIN Bandung provided a valuable opportunity to be involved in a journal management application design project for Rumah Jurnal UIN Bandung.",
        date: "Aug 2024 - Sep 2024",
        icon: <FiFigma />,
    },
    {
        title: "Samsung Innovation Campus batch 5 Student",
        location: "Remote",
        description:
            "Learn about Python Programming Language, with Object Oriented Programming (OOP) and Algorithm and Data Structure Concepts. Also learn about Internet of Things(IoT) Fundamentals.",
        date: "Apr 2024 - May 2024",
        icon: <AiOutlinePython />,
    },
];

const Experience = () => {
    let iconBackground = {
        background: '#27272A'
    }
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My Experiences
                </h2>

                <div>
                    <VerticalTimeline
                        animate={true}
                    >
                        {
                            experiences.map(({ title, location, description, date, icon }, key) => (
                                <VerticalTimelineElement
                                    key={key}
                                    date={date}
                                    className="reveal-up"
                                    icon={icon}
                                    iconStyle={iconBackground}
                                    contentStyle={{ background: '#27272A' }}
                                >
                                    <h3 className="text-zinc-50 text-lg font-semibold">{title}</h3>
                                    <h5 className="text-zinc-100/50 mt-2 font-light">{location}</h5>

                                    <p className="text-zinc-300">{description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
        </section >
    )
}

export default Experience