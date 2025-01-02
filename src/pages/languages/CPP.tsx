import { LanguagePage, LanguagePageContent } from "../../components/LanguagePage";
import PageMediaType from "../../components/PageMediaType";
import ZulfEnginePlusPlus from "./projects/ZulfEnginePlusPlus";

class CPP extends LanguagePage {
    name: string = "C++";
    pages: LanguagePageContent[] = [
        {
            projectName: "ZulfEngine (C++)",
            description: "A simple game engine",
            unfinished: true,
            content: ZulfEnginePlusPlus,
            projectLink: "https://github.com/Zulfen/ZulfEnginePlusPlus",
            mediaType: PageMediaType.IMAGE,
            url: "images/zcpp1.png"
        }
    ];    
}

export default CPP;
