import SkillsLearnt from "../../../components/SkillsLearnt"

const Zeardle = () => {

    const skills: string[] = [
        "Basics of Kotlin",
        "Spring Boot (/w Project Reactor)",
        "OAuth",
        "Audio processing"
    ]

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills}/>
            <div className="mt-5">
                <p>This project is still in the works, but I learnt alot about the popular framework Spring Boot and how flexible it use for use in creating complex web apps!</p>
                <p>What you see on the right isn't a working prototype, but a mockup for the UI.</p>
            </div>
        </div>
    )
}

export default Zeardle;