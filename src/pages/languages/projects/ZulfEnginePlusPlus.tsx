import SkillsLearnt from "../../../components/SkillsLearnt"

const ZulfEnginePlusPlus = () => {

    const skills: string[] = [
        "Memory Management",
        "CMake",
        "SDL2"
    ]

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills}/>
            <div className="mt-5">
                <p>Currently using this project to learn C++!</p>
                <p>It's in the very early stages right now and can only display a window, but adding an event system soon.</p>
            </div>
        </div>
    )

}

export default ZulfEnginePlusPlus;