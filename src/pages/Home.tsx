import { FaJava, FaPython, FaReact } from "react-icons/fa";
import LanguageButton from "../components/LanguageButton";
import { SiCplusplus, SiKotlin } from "react-icons/si";

const Home = () => {
    return (
        <div className="h-full flex flex-col justify-between overflow-y-hidden">
            {/* Top Content */}
            <div className="space-y-5">
                <h1 className="font-headings w-full lg:text-5xl text-4xl font-extrabold animate-headerFade">
                    Josh's Portfolio
                </h1>
                <div className="animate-secondFade break-words space-y-2">
                    <h2 className="text-xl font-semibold">Software engineer who loves old tech and games!</h2>
                    <div>
                        <p>
                            I specialise in mainly backend development. Below are the main
                            languages I am familiar/comfortable with - click the buttons to take a look and see
                            what projects I have done in each one!
                        </p>
                        <p className="pt-5 font-bold">This portfolio is still under development, so some pages might not be finished just yet!</p>
                    </div>
                </div>
                <div className="mt-5 flex flex-col space-y-5 animate-secondFade">
                    <div className="flex flex-row space-x-5">
                        <LanguageButton Icon={FaPython} size={32} route="/python" />
                        <LanguageButton Icon={FaJava} size={32} route="/java" />
                        <LanguageButton Icon={SiKotlin} size={32} route="/home" />
                    </div>
                    <p>..and here is what I am learning:</p>
                    <div className="flex flex-row space-x-5">
                        <LanguageButton Icon={SiCplusplus} size={32} route="/home" />
                        <LanguageButton Icon={FaReact} size={32} route="/home" />
                    </div>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-row flex-shrink justify-start items-center lg:pb-5 space-x-5 animate-lastFade">
                <a href="https://react.dev/">
                    <img src="neocities_buttons/88x31react.gif" alt="React Button" />
                </a>
                <img src="neocities_buttons/javanow.gif" alt="Java Now Button" />
                <img src="neocities_buttons/netscapenow30.gif" alt="Netscape Button" />
            </div>
        </div>
    );
};

export default Home;
