import { FaJava } from "react-icons/fa";

const Home = () => {
    return (
        <div className="flex flex-col lg:pt-60 pt-20 pr-20 p-5 lg:pl-40 pb-5 lg:pb-20 h-full min-h-screen">
            <div className="flex-grow space-y-5">
                <h1 className="font-headings text-5xl font-extrabold animate-headerFade">
                    Josh Passmore's Portfolio
                </h1>
                <div className="animate-textFade font-normal break-words">
                    <h2 className="text-xl font-semibold">Software engineer who loves old tech and games!</h2>
                    <div>
                        <p>hi</p>
                    </div>
                </div>
            </div>
            <div className="flex-row flex animate-lastFade space-x-4">
                <a href="https://react.dev/">
                    <img src="neocities_buttons/88x31react.gif" alt="React Button" />
                </a>
                <img src="neocities_buttons/javanow.gif" alt="Java Now Button" />
                <img src="neocities_buttons/netscapenow30.gif" alt="Netscape Button" />
            </div>
        </div>
    );
}

export default Home;
