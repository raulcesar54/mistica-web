'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconQuestionRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 15.214a.716.716 0 0 1-.714-.714c0-1.179.464-2.286 1.285-3.143l1.036-1.036c.393-.392.322-1.285 0-1.714a1.81 1.81 0 0 0-1.428-.714H12c-.571 0-1.107.321-1.393.786-.214.357-.643.464-.964.25-.357-.215-.464-.643-.25-.965A3.014 3.014 0 0 1 12 6.464h.179c1 0 1.928.465 2.535 1.25.715.929.822 2.643-.107 3.607l-1.036 1.036c-.535.607-.857 1.357-.857 2.143a.716.716 0 0 1-.714.714ZM12 17.607a.786.786 0 1 0 0-1.571.786.786 0 0 0 0 1.571Z"
                />
                <path
                    fill={fillColor}
                    d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12Zm1.429 0c0-4.714 3.857-8.571 8.571-8.571 4.714 0 8.571 3.857 8.571 8.571 0 4.714-3.857 8.571-8.571 8.571-4.714 0-8.571-3.857-8.571-8.571Z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 15.216a.718.718 0 0 1-.716-.716c0-1.18.464-2.284 1.284-3.144l1.036-1.036c.392-.392.32-1.284 0-1.716a1.809 1.809 0 0 0-1.428-.716H12c-.572 0-1.108.32-1.392.784-.216.356-.644.464-.964.252-.356-.216-.464-.644-.252-.964A3.016 3.016 0 0 1 12 6.46h.18c1 0 1.928.464 2.536 1.252.716.928.82 2.644-.108 3.608l-1.036 1.036c-.536.608-.856 1.356-.856 2.144a.72.72 0 0 1-.716.716ZM12.784 16.82a.784.784 0 1 1-1.568 0 .784.784 0 0 1 1.568 0Z"
                />
                <path
                    fill={fillColor}
                    d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10Zm0-18.572c-4.716 0-8.572 3.856-8.572 8.572 0 4.716 3.856 8.572 8.572 8.572 4.716 0 8.572-3.856 8.572-8.572 0-4.716-3.856-8.572-8.572-8.572Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.028C23 1.782 14.21 1.053 12.448 1.012c-.307-.01-.673-.016-.999-.01C9.702 1.019 1 1.613 1 11.969c0 10.355 8.762 11.006 10.518 11.028a41.152 41.152 0 0 0 .964-.003C14.242 22.962 23 22.283 23 12.028Zm-1.345 0c0 8.772-7.037 9.58-9.194 9.62a22.31 22.31 0 0 1-.923.006c-2.157-.031-9.191-.82-9.191-9.685 0-8.856 6.974-9.6 9.112-9.623.316-.003.664.003.958.01 2.166.053 9.238.904 9.238 9.672Zm-10.147 5.058c.592 0 .977.388.977.946 0 .622-.379.995-.942.995-.601 0-.977-.373-.977-.923v-.072c.003-.558.388-.946.942-.946ZM15.61 8.34c0-1.127-.366-1.92-1.146-2.495-.607-.46-1.446-.692-2.497-.689-1 0-2.035.207-2.458.407a.448.448 0 0 0-.247.488l.072.382.003.014.003.015a.45.45 0 0 0 .545.322 7.188 7.188 0 0 1 1.862-.244c1.155 0 1.578.222 1.82.413.419.335.597.742.597 1.365 0 .876-.297 1.396-1.869 3.255l-.181.22c-.955 1.148-1.38 1.865-1.38 3.077a3.55 3.55 0 0 0 .062.707.452.452 0 0 0 .441.363h.495c.247 0 .447-.2.447-.447 0-1.616.06-1.684 1.556-3.416 1.306-1.54 1.875-2.36 1.875-3.737Z"
                />
            </svg>
        );
    }
};

export default IconQuestionRegular;
