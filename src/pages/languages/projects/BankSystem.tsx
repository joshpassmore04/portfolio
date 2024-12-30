import SkillsLearnt from "../../../components/SkillsLearnt";

const BankSystem = () => {

    const skills: string[] = [
        "String formatting"
    ]

    return (
        <div>
            <SkillsLearnt skills={skills} />
            <div className="mt-5">
                <p>This was quite a simple task, as we had 48 hours to complete it, but it was a good brush up on some basic Java skills, like string formatting.</p>
                <p>This was also my first proper exposure to JUnit!</p>
            </div>
        </div>
    )

}

export default BankSystem;