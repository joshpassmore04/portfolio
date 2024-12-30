import { LanguagePage, LanguagePageContent } from "../../components/LanguagePage";
import JJDMVision from "./projects/JJDMVision";

class Python extends LanguagePage {
    name: string = "Python";
    pages: LanguagePageContent[] = [
      {
        projectName: "JJDMVision",
        projectLink: "https://github.com/jjdmvisionapp",
        description: "A chatbot and image classification web app",
        content: JJDMVision,
        videoUrl: "videos/jjdmvision1.mp4",
        unfinished: false,
      },
    ];
  
    constructor() {
      super();
    }
}

export default Python;