import { LanguagePageContent, LanguagePage } from "../../components/LanguagePage";
import PageMediaType from "../../components/PageMediaType";
import BankSystem from "./projects/BankSystem";
import ZulfBungee from "./projects/ZulfBungee";
import ZulfEngineJava from "./projects/ZulfEngineJava";

class JavaPage extends LanguagePage {
  name: string = "Java";
  pages: LanguagePageContent[] = [
    {
      projectName: "ZulfBungee",
      projectLink: "https://github.com/Zulfen/ZulfBungee",
      description: "A Minecraft scripting language addon which adds networking support",
      content: ZulfBungee,
      url: "videos/zulfbungee1.mp4",
      mediaType: PageMediaType.VIDEO,
      unfinished: false,
    },
    {
      projectName: "Simple Bank System",
      projectLink: "https://github.com/Zulfen/BankSystem",
      description: "A timed assignment for my programming unit",
      content: BankSystem,
      unfinished: false,
    },
    {
      projectName: "ZulfEngine (Java)",
      projectLink: "https://github.com/Zulfen/ZulfEngine-Java",
      description: "The start of a simple game engine for Java",
      content: ZulfEngineJava,
      url: "videos/zulfenginejava1.mp4",
      mediaType: PageMediaType.VIDEO,
      unfinished: true
    }
  ];

  constructor() {
    super();
  }
}

export default JavaPage;
