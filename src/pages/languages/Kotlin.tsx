import { LanguagePage, LanguagePageContent } from "../../components/LanguagePage";
import PageMediaType from "../../components/PageMediaType";
import Zeardle from "./projects/Zeardle";

class KotlinPage extends LanguagePage {
    name: string = "Kotlin";
    pages: LanguagePageContent[] = [
        {
            projectName: "Zeardle",
            description: "A game where you have to guess the title of an artist's song from a small snippet",
            projectLink: "https://github.com/zeardle/backend",
            unfinished: true,
            content: Zeardle,
            url: "images/zeardle1.png",
            mediaType: PageMediaType.IMAGE
        }
    ];
}

export default KotlinPage;