import PageMediaType from "./PageMediaType";

interface LanguagePageContent {
    projectName: string;
    projectLink: string,
    description: string;
    unfinished: boolean;
    content: () => JSX.Element;   // Page content, a function that returns JSX
    url?: string;            // Optional video URL
    mediaType?: PageMediaType;
}


export abstract class LanguagePage {
    abstract name: string;
    abstract pages: LanguagePageContent[];
}
  
export type { LanguagePageContent }