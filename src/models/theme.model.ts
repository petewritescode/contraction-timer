export interface Theme {
    color: {
        contraction: string;
        ready: string;
        rest: string;
        neutralMin: string;
        neutralMin25: string;
        neutralMin50: string;
        neutralMin75: string;
        neutralMax: string;
        neutralMax25: string;
        neutralMax50: string;
        neutralMax75: string;
        neutralMid1: string;
        neutralMid2: string;
    };
    transition: {
        duration: number;
    };
}
