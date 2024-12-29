import { LanguagePageContent, LanguagePage } from "../../components/LanguagePage";
import ZulfBungee from "./projects/ZulfBungee";

const Test = () => {
  return (
    <p>Hi</p>
  )
}

class JavaPage extends LanguagePage {
  name: string = "Java";
  pages: LanguagePageContent[] = [
    {
      projectName: "ZulfBungee",
      description: "A Minecraft scripting language addon which adds networking support",
      content: ZulfBungee,
      videoUrl: "videos/zulfbungee1.mp4",
    },
    {
      projectName: "Test",
      description: "Test",
      content: Test,
    }
  ];

  constructor() {
    super();
  }
}

export default JavaPage;
