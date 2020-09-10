import { pxToRem } from './helpers/theme.helpers';
import { Theme } from '../models/theme.model';

const baseFontSize = 16;
const fontScaleFactor = 1.3;

export const appTheme: Theme = {
    border: {
        width: {
            s: pxToRem(1),
            m: pxToRem(2),
            l: pxToRem(4),
        },
        radius: {
            s: pxToRem(5),
            m: pxToRem(10),
            l: pxToRem(15),
            xl: pxToRem(20),
        },
    },
    breakpoint: {
        s: '360px',
        m: '768px',
    },
    color: {
        contraction: '#ab1257',
        ready: '#008571',
        rest: '#107cb1',
        neutralMin: '#ffffff',
        neutralMin25: 'rgba(255, 255, 255, 0.25)',
        neutralMin50: 'rgba(255, 255, 255, 0.5)',
        neutralMin75: 'rgba(255, 255, 255, 0.75)',
        neutralMax: '#000000',
        neutralMax25: 'rgba(0, 0, 0, 0.25)',
        neutralMax50: 'rgba(0, 0, 0, 0.5)',
        neutralMax75: 'rgba(0, 0, 0, 0.75)',
        neutralMid1: '#6e6e6e',
        neutralMid2: '#383838',
    },
    font: {
        size: {
            s: pxToRem(baseFontSize * (fontScaleFactor ** -1)),
            m: pxToRem(baseFontSize),
            l: pxToRem(baseFontSize * (fontScaleFactor ** 1)),
            xl: pxToRem(baseFontSize * (fontScaleFactor ** 2)),
            xxl: pxToRem(baseFontSize * (fontScaleFactor ** 3)),
            xxxl: pxToRem(baseFontSize * (fontScaleFactor ** 4)),
            xxxxl: pxToRem(baseFontSize * (fontScaleFactor ** 5)),
            xxxxxl: pxToRem(baseFontSize * (fontScaleFactor ** 6)),
        },
    },
    spacing: {
        s: pxToRem(5),
        m: pxToRem(10),
        l: pxToRem(20),
        xl: pxToRem(40),
    },
    transition: {
        duration: {
            m: '250ms',
        },
    },
};
