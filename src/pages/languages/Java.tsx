import { LanguagePageContent, LanguagePage } from "../../components/LanguagePage";
import BankSystem from "./projects/BankSystem";
import ZulfBungee from "./projects/ZulfBungee";

class JavaPage extends LanguagePage {
  name: string = "Java";
  pages: LanguagePageContent[] = [
    {
      projectName: "ZulfBungee",
      projectLink: "https://github.com/Zulfen/ZulfBungee",
      description: "A Minecraft scripting language addon which adds networking support",
      content: ZulfBungee,
      videoUrl: "videos/zulfbungee1.mp4",
      unfinished: false,
    },
    {
      projectName: "Simple Bank System",
      projectLink: "https://github.com/Zulfen/BankSystem",
      description: "A timed assignment for my programming unit",
      content: BankSystem,
      unfinished: false,
    },
  ];

  constructor() {
    super();
  }
}

export default JavaPage;
