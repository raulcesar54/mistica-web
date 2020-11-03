import {getMovistarSkin, getO2Skin, getO2ClassicSkin, getVivoSkin} from '../src';

export const Movistar = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getMovistarSkin(),
} as const;

export const O2 = {
    i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'GB'},
    skin: getO2Skin(),
} as const;

export const O2_Classic = {
    i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'GB'},
    skin: getO2ClassicSkin(),
} as const;

export const Vivo = {
    i18n: {locale: 'pt-BR', phoneNumberFormattingRegionCode: 'BR'},
    skin: getVivoSkin(),
} as const;

export const AVAILABLE_THEMES = [Movistar, O2, O2_Classic, Vivo];