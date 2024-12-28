import { useState } from "react";
import { LanguagePage } from "./LanguagePage";
import Video from "./Video";

interface LanguagePageViewerProps {
    language: new () => LanguagePage; // Accepts a language class constructor, e.g., JavaPage or PythonPage
}

const LanguagePageViewer: React.FC<LanguagePageViewerProps> = ({ language }) => {

    const languagePages = new language(); // Instantiate the language page class (JavaPage, PythonPage)

    const [currentPageIndex, setCurrentPageIndex] = useState(0); // Page index state

    const currentPage = languagePages.pages[currentPageIndex]; // Get current page based on index

    // Go to the next page
    const nextPage = () => {
        if (currentPageIndex < languagePages.pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    };

    // Go to the previous page
    const prevPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-full animate-leftSlideFade">
            {/* left */}
            <div className="lg:w-2/3 w-full flex flex-col justify-start lg:pl-20 sm:pl-10 space-y-5">
                <h1 className="font-headings text-5xl font-extrabold">
                    {languagePages.name}
                </h1>
                {currentPage.content()}
            </div>

            {/* right */}
            <div className="lg:w-1/2 sm:w-full flex justify-center items-center h-full">
                <div className="lg:h-2/3">
                    {currentPage.videoUrl && (
                        <Video src={currentPage.videoUrl} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LanguagePageViewer;