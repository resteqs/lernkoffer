export interface InfotextProps {
    number: number;
    name: string;
    sdg: string;
    text: Record<number, string>;
    header: Record<number, string>;
    logo: string;
    eg: string;
    audioFile?: string;
}
export interface ModalComponnet {
    header:string;
    text:string;
    
}