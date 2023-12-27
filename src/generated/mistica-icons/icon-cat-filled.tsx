'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCatFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.69 12.246c-.148.144-.365.217-.644.217-.278 0-.495-.073-.644-.217-.154-.15-.233-.374-.233-.665 0-.292.078-.516.233-.666.149-.144.366-.218.644-.218.279 0 .496.074.645.218.154.15.232.374.232.666 0 .291-.078.515-.232.665M9.953 12.463c.28 0 .496-.073.645-.217.154-.15.232-.374.232-.665 0-.292-.078-.516-.232-.666-.15-.144-.366-.218-.645-.218-.278 0-.495.074-.644.218-.155.15-.233.374-.233.666 0 .291.079.515.233.665.149.144.366.217.644.217"
            />
            <path
                fill={fillColor}
                d="M19.267 3.037c-.585-.24-2.607.716-3.633 1.992l-.036.046c-1.036-.372-2.238-.559-3.596-.559-1.361 0-2.564.187-3.6.559a6.928 6.928 0 0 0-.037-.046C7.339 3.753 5.317 2.796 4.732 3.037c-.176.07-.49.267-.614.756-.506 1.658-.304 4.032.202 5.48-.337 1.011-.506 2.175-.506 3.486v.054l-.115-.023a.589.589 0 0 0-.228 1.155l.4.08c.102 1.093.342 2.065.717 2.911l-.304.061a.588.588 0 0 0 .228 1.155l.676-.135c.236.346.503.663.8.951C7.378 20.316 9.4 21 12.002 21c2.601 0 4.624-.684 6.012-2.032.297-.288.564-.605.8-.95l.674.134a.589.589 0 0 0 .228-1.155l-.303-.06c.375-.846.614-1.818.716-2.912l.4-.08a.589.589 0 0 0-.228-1.155l-.115.023v-.052c0-1.311-.17-2.476-.507-3.487.507-1.448.709-3.823.203-5.48-.125-.49-.438-.686-.615-.757m-1.73 14.725a4.89 4.89 0 0 1-.334.358h-.001c-1.012.983-2.518 1.595-4.618 1.69v-2.916c.04-.018.068-.033.076-.037h.002l.002-.002h.002a2.75 2.75 0 0 0 .46-.291l.006-.005a1.75 1.75 0 0 0 .514-.611l.002-.005a1.05 1.05 0 0 0 .008-.9 1.1 1.1 0 0 0-.564-.534l-.013-.006a1.623 1.623 0 0 0-.601-.12 20.256 20.256 0 0 0-.936-.001h-.044a1.61 1.61 0 0 0-.581.122l-.043.02c-.17.08-.397.235-.531.52a1.05 1.05 0 0 0 .004.89l.014.029c.128.261.328.457.51.598a2.703 2.703 0 0 0 .544.333v2.915c-2.097-.095-3.602-.706-4.616-1.689a4.934 4.934 0 0 1-.334-.359l1.775-.355a.588.588 0 0 0-.229-1.155l-2.24.448c-.34-.68-.577-1.486-.698-2.433l2.699.54A.588.588 0 0 0 8 13.652l-3.014-.603a13.65 13.65 0 0 1-.003-.29c0-2.517.673-4.254 1.816-5.362 1.106-1.073 2.797-1.703 5.203-1.703 2.403 0 4.096.633 5.2 1.704 1.142 1.109 1.814 2.846 1.814 5.364 0 .097 0 .193-.003.287L16 13.652a.589.589 0 0 0 .229 1.155l2.699-.541c-.12.947-.358 1.755-.697 2.434l-2.242-.45a.588.588 0 0 0-.228 1.155z"
            />
        </svg>
    );
};

export default IconCatFilled;