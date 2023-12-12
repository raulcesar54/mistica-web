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

const IconTshirtRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m15.574 2.247 5.984 3.625c.249.15.355.467.246.74l-1.711 4.31a.593.593 0 0 1-.81.316l-1.266-.613.034 10.614a.598.598 0 0 1-.597.605H6.813a.587.587 0 0 1-.423-.177.613.613 0 0 1-.174-.428l.03-10.62-1.296.62a.582.582 0 0 1-.46.022.597.597 0 0 1-.339-.316L2.216 6.634a.61.61 0 0 1 .246-.774l6.233-3.624a.592.592 0 0 1 .594.003c.185.109.297.308.297.523 0 1.762.81 2.583 2.546 2.583 1.737 0 2.546-.82 2.546-2.583 0-.002 0-.005.002-.007v-.007a.66.66 0 0 1 .046-.206l.01-.029a.21.21 0 0 0 .006-.017.165.165 0 0 1 .014-.042.271.271 0 0 1 .05-.057.546.546 0 0 0 .065-.072.605.605 0 0 1 .151-.1c.016-.009.031-.017.048-.023a.653.653 0 0 1 .143-.03c.011 0 .021-.003.03-.006a.109.109 0 0 1 .032-.006c.01 0 .018.003.026.006l.01.003c.037.002.07.008.104.02a.728.728 0 0 1 .153.056zm2.101 6.877 1.55.753 1.282-3.232L15.77 3.77c-.341 1.779-1.618 2.784-3.638 2.784-2.062 0-3.33-.983-3.656-2.795L3.521 6.636l1.46 3.252 1.605-.767a.584.584 0 0 1 .574.036.609.609 0 0 1 .277.513l-.033 10.97h9.45l-.033-10.97a.596.596 0 0 1 .854-.546"
            />
        </svg>
    );
};

export default IconTshirtRegular;
