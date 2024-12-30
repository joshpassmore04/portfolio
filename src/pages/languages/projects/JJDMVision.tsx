import SkillsLearnt from "../../../components/SkillsLearnt";

const JJDMVision = () => {

    const skills: string[] = [
        "Backend web development w/ Flask",
        "Getting information from a database (SQLite)",
        "How to structure REST APIs",
        "Authentication and server-side session managment",
        "Some frontend React concepts (e.g. state)"
    ];

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills} />
            <div className="mt-5">
                <p>This project was for a university assignment, completed in a team of 3 others.</p>
                <p>This was my first ever Java project, and I ended up really enjoying it and over the course of 3 years, ended up making something I am quite proud of.</p>
                <p>I took a break from maintaining it in late 2023, but decided recently to start working on it again.</p>
                <p>In total, it has about 2,000 downloads at the time of writing this.</p>
            </div>

        </div>
    )
}

export default JJDMVision;