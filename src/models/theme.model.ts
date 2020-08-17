export interface Theme {
    border: {
        width: string;
        radius: {
            s: string;
            m: string;
            l: string;
            xl: string;
        };
    };
    breakpoint: {
        s: string;
    };
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
    font: {
        size: {
            s: string;
            m: string;
            l: string;
            xl: string;
            xxl: string;
            xxxl: string;
            xxxxl: string;
        };
    };
    spacing: {
        s: string;
        m: string;
        l: string;
        xl: string;
    };
    transition: {
        m: string;
    };
}
