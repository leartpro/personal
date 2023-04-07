export interface Content {
    title: string;
    introduction: string;
    image: string;
    content: [string, string][]; //tuples of text & image
    navData: string;
}