import { FaJava } from "react-icons/fa";

const Home = () => {
    return (
        <div className="flex flex-col flex-grow justify-start lg:pt-60 pt-20 pr-20 p-5 lg:pl-40 space-y-2">
            <h1 className="font-headings text-4xl font-extrabold animate-headerFade">
                Josh Passmore's Portfolio
            </h1>
            <div className="animate-textFade text-lg font-normal space-y-5 break-words">
                <p>Software engineer who loves old tech and games! Testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</p>
                <FaJava/>
            </div>
        </div>

    )
}

export default Home;