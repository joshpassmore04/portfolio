import { useState } from "react";
import { LanguagePage } from "./LanguagePage";
import Video from "./Video";
import LanguageButton from "./LanguageButton";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { BiLeftArrow } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
            <div className="lg:w-2/3 w-full h-full flex flex-col justify-start space-y-5 overflow-y-scroll sm:overflow-visible">
                <h1 className="font-headings text-5xl font-extrabold break-words">
                    {languagePages.name}
                </h1>
                <div className="overflow-y-auto h-full w-full flex">
                    <div>
                        <h2 className="font-headings flex flex-row text-xl items-center py-2">
                            <a href={currentPage.projectLink} className="hover:underline">
                                {currentPage.projectName}
                            </a>
                            {currentPage.unfinished && (
                                <div className="pl-3">
                                    <div className="rounded-lg px-2 py-1 flex items-center justify-center bg-gray-500 bg-opacity-75 text-xs text-black overflow-hidden text-ellipsis whitespace-nowrap">
                                        Unfinished
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-row items-center pl-5 space-x-2 text-xs font-normal">
                                <FaLongArrowAltLeft />
                                <p>click here to see the project's GitHub page!</p>
                            </div>
                        </h2>
                        <p className="font-semibold">{currentPage.description}</p>
                        <div className="mt-5 space-y-3 flex w-full">
                            {currentPage.content()}
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-3/4 h-full flex flex-col justify-center items-center lg:p-5 pt-3">
                {/* Video Container */}
                <div className="w-full lg:h-2/3 h-auto max-h-[80vh]">
                    {currentPage.videoUrl && <Video src={currentPage.videoUrl} />}
                </div>
                {/* Arrows Container */}
                <div className="flex flex-row lg:justify-end justify-center w-full mt-5 space-x-3">
                    {currentPageIndex === 0 && (
                        <LanguageButton Icon={HiHome} size={32} route="/home" />
                    )}
                    {currentPageIndex > 0 && (
                        <LanguageButton Icon={IoMdArrowRoundBack} size={32} callback={prevPage} />
                    )}
                    {currentPageIndex < languagePages.pages.length - 1 && (
                        <LanguageButton Icon={IoMdArrowRoundForward} size={32} callback={nextPage} />
                    )}
                </div>
            </div>


        </div>
    )
}

export default LanguagePageViewer;
