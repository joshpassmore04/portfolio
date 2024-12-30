import { LanguagePage, LanguagePageContent } from "../../components/LanguagePage";
import JJDMVision from "./projects/JJDMVision";

class Python extends LanguagePage {
    name: string = "Python";
    pages: LanguagePageContent[] = [
      {
        projectName: "JJDMVision",
        description: "A chatbot and image classification web app",
        content: JJDMVision,
        videoUrl: "videos/jjdmvision1.mp4",
      },
    ];
  
    constructor() {
      super();
    }
}

export default Python;