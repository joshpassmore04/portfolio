import { LanguagePage, LanguagePageContent } from "../../components/LanguagePage";
import PageMediaType from "../../components/PageMediaType";
import JJDMVision from "./projects/JJDMVision";

class Python extends LanguagePage {
    name: string = "Python";
    pages: LanguagePageContent[] = [
      {
        projectName: "JJDMVision",
        projectLink: "https://github.com/jjdmvisionapp/backend",
        description: "A chatbot and image classification web app",
        content: JJDMVision,
        url: "videos/jjdmvision1.mp4",
        mediaType: PageMediaType.VIDEO,
        unfinished: false,
      },
    ];
  
    constructor() {
      super();
    }
}

export default Python;