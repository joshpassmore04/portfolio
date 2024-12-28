import { LanguagePageContent, LanguagePage } from "../../components/LanguagePage";

const firstPageContent = () => {
  return (
    <p>Heyyyyy</p>
  )
}

class JavaPage extends LanguagePage {
  name: string = "Java";
  pages: LanguagePageContent[] = [
    {
      content: firstPageContent,
      videoUrl: "videos/zulfbungee1.mp4",
    },
  ];

  constructor() {
    super();
  }
}

export default JavaPage;
