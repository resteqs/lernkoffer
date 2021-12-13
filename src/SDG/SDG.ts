export interface SDG {
    number: number;
    name: string;
    sdg: string;
    text: Record<number, string>;
    header: Record<number, string>;
    logo: string;
    eg: string;
    audioFile?: string;
}
