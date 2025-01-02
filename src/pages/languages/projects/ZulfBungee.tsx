import SkillsLearnt from "../../../components/SkillsLearnt";

const ZulfBungee = () => {

    const skills: string[] = [
        "Common object-oriented patterns",
        "Thread safe code and the challenges involved with it",
        "Networking w/ sockets",
        "Providing support to clients/end users",
        "Basic Git skills"
    ];

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills} />
            <div className="mt-5">
                <p>It was initially made to be an internal tool for use on my server, as a plugin that had the functionality I wanted didn't work quite right for my setup.</p>
                <p>This was my first ever Java project, and I ended up really enjoying it and over the course of 3 years, ended up making something I am quite proud of.</p>
                <p>I took a break from maintaining it in late 2023, but decided recently to start working on it again.</p>
                <p>In total, it has about 2,000 downloads at the time of writing this.</p>
            </div>

        </div>
    )
}

export default ZulfBungee;