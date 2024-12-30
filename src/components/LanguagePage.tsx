interface LanguagePageContent {
    projectName: string;
    projectLink: string,
    description: string;
    unfinished: boolean;
    content: () => JSX.Element;   // Page content, a function that returns JSX
    videoUrl?: string;            // Optional video URL
}


export abstract class LanguagePage {
    abstract name: string;
    abstract pages: LanguagePageContent[];
}
  
export type { LanguagePageContent }