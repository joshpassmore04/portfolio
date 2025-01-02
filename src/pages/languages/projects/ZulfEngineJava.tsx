import SkillsLearnt from "../../../components/SkillsLearnt";

const ZulfEngineJava = () => {

    const skills: string[] = [
        "Rendering w/ OpenGL",
        "3D Model Loading",
        "GLFW w/ LWJGL"
    ];

    return (
        <div className="mt-5">
            <SkillsLearnt skills={skills}/>
            <div className="mt-5">
                <p>This is a project I worked on for a few weeks back in 2021 to try and learn how graphics APIs work, specifically OpenGL.</p>
                <p>I managed to get basic input handling (apart from the mouse, it is implemented as an event but doesn't rotate the camera), basic texture handling and model loading.</p>
                <p>Only one texture can be rendered one time still, but this can be easily changed.</p>
                <div className="mt-2">
                    <p>Overall, this project was really interesting, and it has led me to start making another engine in C++ recently, which has it's own page.</p>
                </div>
            </div>
        </div>
    )
}

export default ZulfEngineJava;