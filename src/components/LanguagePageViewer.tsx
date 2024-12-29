import { useState } from "react";
import { LanguagePage } from "./LanguagePage";
import Video from "./Video";
import LanguageButton from "./LanguageButton";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

interface LanguagePageViewerProps {
    language: new () => LanguagePage; // accepts a language class constructor
}

const LanguagePageViewer: React.FC<LanguagePageViewerProps> = ({ language }) => {

    const languagePages = new language();
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const currentPage = languagePages.pages[currentPageIndex];

    const nextPage = () => {
        if (currentPageIndex < languagePages.pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-full animate-leftSlideFade">
            {/* Left Section */}
            <div className="lg:w-2/3 w-full h-full flex flex-col justify-start space-y-5 overflow-y-auto sm:overflow-visible">
                <h1 className="font-headings text-5xl font-extrabold break-words">
                    {languagePages.name}
                </h1>
                <div className="overflow-y-auto h-full w-full">
                    <div>
                        <h2 className="font-headings text-xl">{currentPage.projectName}</h2>
                        <p className="font-semibold">{currentPage.description}</p>
                        <div className="mt-5 space-y-3 flex w-full">
                            {currentPage.content()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full h-full min-w-screen flex flex-col flex-grow justify-center items-center p-5">
                {/* Video Container */}
                <div className="w-full lg:h-2/3 h-auto max-h-[80vh] rounded-lg">
                    {currentPage.videoUrl && <Video src={currentPage.videoUrl} />}
                </div>
                {/* Arrows Container */}
                <div className="flex flex-row lg:justify-end justify-center w-full mt-5 space-x-3">
                    <LanguageButton Icon={IoMdArrowRoundBack} size={32} callback={prevPage} />
                    <LanguageButton Icon={IoMdArrowRoundForward} size={32} callback={nextPage} />
                </div>
            </div>

        </div>
    )
}

export default LanguagePageViewer;
