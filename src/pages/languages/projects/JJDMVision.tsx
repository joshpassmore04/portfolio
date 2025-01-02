import SkillsLearnt from "../../../components/SkillsLearnt";

const JJDMVision = () => {

    const skills: string[] = [
        "Backend web development w/ Flask",
        "Getting information from a database (SQLite)",
        "How to structure REST APIs",
        "Handling file uploads",
        "Web Sockets",
        "Authentication and server-side session managment",
        "Some frontend React concepts (e.g. state)",
        "Basic unit testing w/ pytest"
    ];

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills} />
            <div className="mt-5">
                <p>This project was for a university assignment, completed in a team of 3 others.</p>
                <p>I was in charge of the backend mainly, and helped connect it to the frontend. Another team member was responsible for the design.</p>
                <p>In the process, I learnt alot about the internals of web apps, specifically how to design and document REST controllers.</p>
                <p>For image classification, we used Resnet152, and for the chatbot we ended up using the Flan-T5-Large model from Huggingface.</p>
            </div>

        </div>
    )
}

export default JJDMVision;