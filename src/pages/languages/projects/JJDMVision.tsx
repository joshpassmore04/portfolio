import SkillsLearnt from "../../../components/SkillsLearnt";

const JJDMVision = () => {

    const skills: string[] = [
        "Backend web development w/ Flask",
        "Getting information from a database (SQLite)",
        "How to structure REST APIs",
        "Authentication and server-side session managment",
        "Some frontend React concepts (e.g. state)",
        "Basic unit testing"
    ];

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills} />
            <div className="mt-5">
                <p>This project was for a university assignment, completed in a team of 3 others.</p>
                <p>I was in charge of the backend mainly, and helped connect it to the frontend. Another team member was responsible for the design.</p>
                <p>In the process, I learnt alot about the internals of web apps, specifically how to design and document REST controllers.</p>
            </div>

        </div>
    )
}

export default JJDMVision;