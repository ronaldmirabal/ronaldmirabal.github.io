interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "English",
        level: "B1",
        description: "I speak fluently and write fluently",
        show: true
    }

];

export default languages;