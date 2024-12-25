import { FaJava, FaPython, FaReact } from "react-icons/fa";
import LanguageButton from "../components/LanguageButton";
import { SiCplusplus, SiKotlin } from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col lg:pt-50 pt-20 pr-20 p-5 lg:pl-40 pb-12 lg:pb-10 h-full max-h-screen font-normal">
      <div className="space-y-5">
        <h1 className="font-headings text-5xl font-extrabold animate-headerFade">
          Josh Passmore's Portfolio
        </h1>
        <div className="animate-secondFade break-words space-y-2">
          <h2 className="text-xl font-semibold">Software engineer who loves old tech and games!</h2>
          <div>
            <p>I specialise in mainly backend development. Below are the main languages I am familiar/comfortable with - take a look and see what projects I have done in each one!</p>
          </div>
        </div>
      </div>

      {/* Space between text and language buttons */}
      <div className="mt-5 flex flex-col space-y-5 animate-lastFade flex-grow">
        <div className="flex flex-row space-x-5">
          <LanguageButton Icon={FaPython} size={32} route="/home" />
          <LanguageButton Icon={FaJava} size={32} route="/home" />
          <LanguageButton Icon={SiKotlin} size={32} route="/home" />
        </div>
        <p>..and here is what I am learning:</p>
        <div className="flex flex-row space-x-5">
          <LanguageButton Icon={SiCplusplus} size={32} route="/home" />
          <LanguageButton Icon={FaReact} size={32} route="/home" />
        </div>
      </div>

      {/* Bottom buttons with proper bottom padding */}
      <div className="flex flex-row animate-lastFade space-x-5 mt-12 pt-10 pb-12">
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
