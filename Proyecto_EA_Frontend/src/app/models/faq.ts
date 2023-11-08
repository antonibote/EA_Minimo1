//Interfaz de Product
export interface FAQ {
    _id: string,
    username: string,
    question: string;
    answer: string;
    likes: number;
    verified: boolean;
}