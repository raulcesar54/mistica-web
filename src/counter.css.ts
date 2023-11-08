import {style} from '@vanilla-extract/css';
import * as mq from './media-queries.css';
import {vars} from './skins/skin-contract.css';
import {sprinkles} from './sprinkles.css';

const transitionTiming = '0.2s ease-in-out';
const BUTTON_SIZE = 32;
const TOUCHABLE_AREA_WIDTH = 40;

export const hasTrashIcon = style({});
export const isButtonDisabled = style({});

export const counter = style([
    sprinkles({
        borderRadius: vars.borderRadii.button,
        background: vars.colors.backgroundContainer,
        display: 'inline-flex',
        overflow: 'hidden',
    }),
    {
        padding: 3,
    },
]);

export const disabled = style({
    opacity: '50%',
});

export const valueContainer = sprinkles({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
});

export const buttonContainer = sprinkles({
    position: 'relative',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
});

export const button = style([
    sprinkles({
        background: 'transparent',
        border: 'none',
        position: 'absolute',
        width: TOUCHABLE_AREA_WIDTH,
        height: TOUCHABLE_AREA_WIDTH,
    }),
    {
        top: -(TOUCHABLE_AREA_WIDTH - BUTTON_SIZE) / 2,
        left: -(TOUCHABLE_AREA_WIDTH - BUTTON_SIZE) / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
]);

export const defaultButtonIcon = style([
    sprinkles({
        position: 'absolute',
    }),
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
]);

export const trashButtonIcon = style([
    defaultButtonIcon,
    {
        pointerEvents: 'none',
        opacity: 0,
        transform: `translateY(100%)`,
        transition: `opacity ${transitionTiming}, transform ${transitionTiming}`,
        selectors: {
            [`${hasTrashIcon} &`]: {
                pointerEvents: 'auto',
                transform: 'translateY(0)',
                opacity: 1,
            },
        },
    },
]);

export const decreaseButtonIcon = style([
    defaultButtonIcon,
    {
        pointerEvents: 'auto',
        opacity: 1,
        transition: `opacity ${transitionTiming}, transform ${transitionTiming}`,
        selectors: {
            [`${hasTrashIcon} &`]: {
                pointerEvents: 'none',
                transform: `translateY(-100%)`,
                opacity: 0,
            },
        },
    },
]);

export const buttonBackground = style([
    sprinkles({
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        position: 'absolute',
        borderRadius: vars.borderRadii.button,
        background: vars.colors.brandLow,
    }),
    {
        transform: 'scale(0)',
        transition: `transform ${transitionTiming}, background ${transitionTiming}`,

        selectors: {
            [`${buttonContainer}:active:not(${isButtonDisabled}) &`]: {
                transform: 'scale(1.06)',
            },
            [`${hasTrashIcon} &`]: {
                background: vars.colors.errorLow,
            },
        },

        '@media': {
            ['(prefers-reduced-motion)']: {
                transition: 'none',
            },

            [mq.supportsHover]: {
                selectors: {
                    [`${buttonContainer}:hover:not(${isButtonDisabled}) &`]: {
                        transform: 'scale(1)',
                    },
                    [`${buttonContainer}:active:not(${isButtonDisabled}) &`]: {
                        transform: 'scale(1.06)',
                    },
                    [`${hasTrashIcon} &`]: {
                        background: vars.colors.errorLow,
                    },
                },
            },
            [mq.touchableOnly]: {
                transition: 'none',
            },
        },
    },
]);