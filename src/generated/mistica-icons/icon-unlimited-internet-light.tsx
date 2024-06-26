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

const IconUnlimitedInternetLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.632 10.075C4.505 5.76 8.24 2.5 12.715 2.5c5.12 0 9.29 4.262 9.285 9.498 0 1.291-.251 2.55-.745 3.729a.356.356 0 0 1-.471.191.373.373 0 0 1-.187-.481 8.9 8.9 0 0 0 .676-3.08H17.53c-.064 3.585-1.092 6.602-2.601 8.109a8.45 8.45 0 0 0 3.273-1.731.35.35 0 0 1 .503.047.37.37 0 0 1-.046.514 9.15 9.15 0 0 1-5.943 2.204c-4.475 0-8.21-3.256-9.083-7.575a1.86 1.86 0 0 1-1.074-.543A1.95 1.95 0 0 1 2 12.003c0-.524.197-1.015.558-1.385a1.9 1.9 0 0 1 1.074-.542m4.366.004c.288-2.891 1.22-5.268 2.505-6.55-3.068.842-5.454 3.388-6.144 6.583.334.08.649.248.905.51l.846.866.85-.866c.293-.3.658-.477 1.038-.543m-.54 2.789a1.18 1.18 0 0 0 1.692 0c.228-.23.352-.538.352-.866s-.128-.636-.352-.865a1.18 1.18 0 0 0-1.692 0l-.845.865zM3.07 11.137c-.229.229-.352.538-.352.865 0 .328.123.637.347.866a1.18 1.18 0 0 0 1.692 0l.845-.866-.84-.865a1.18 1.18 0 0 0-.847-.36c-.306 0-.612.121-.845.36m1.289 2.76c.69 3.191 3.076 5.736 6.14 6.583-1.285-1.282-2.213-3.659-2.506-6.55a1.9 1.9 0 0 1-1.038-.543l-.845-.865-.846.865c-.26.262-.576.43-.905.51m4.361.01c.393 3.63 1.874 6.489 3.639 6.83v-8.365h-2.176a2 2 0 0 1-.526 1.015 1.9 1.9 0 0 1-.937.52m3.639-2.27V3.272c-1.765.342-3.246 3.2-3.639 6.83.343.076.672.249.937.52.274.28.457.632.526 1.015zm.713.73v8.37c2.011-.388 3.657-4.028 3.744-8.37zm0-.73h3.744c-.087-4.337-1.733-7.981-3.744-8.37zm1.86-8.108c1.51 1.507 2.538 4.525 2.602 8.108h3.748c-.16-3.892-2.802-7.135-6.35-8.108"
            />
        </svg>
    );
};

export default IconUnlimitedInternetLight;
