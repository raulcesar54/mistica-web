/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBellAddMoreLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.69 18.145a.42.42 0 01.122.459.404.404 0 01-.383.272h-5.496c0 .51-.107 1.412-.723 2.103-.51.566-1.238.86-2.182.86-.936 0-1.672-.294-2.182-.86-.608-.689-.714-1.6-.714-2.1H4.636a.41.41 0 01-.255-.729c.493-.409.902-.96 1.213-1.624-1.563-.499-3.443-1.813-3.443-5.258 0-4.499 3.182-5.342 4.709-5.482 1.544-3.738 5.786-3.636 6.164-3.627h.004c.255-.017 2.922-.132 4.849 1.664 1.246 1.165 1.888 2.857 1.888 5.039v3.88c-.012.06-.2 3.663 1.924 5.403zm-1.239-.093c-1.69-2.092-1.518-5.185-1.51-5.333V8.865c0-1.947-.549-3.44-1.624-4.44-1.677-1.562-4.103-1.452-4.249-1.446h-.032l-.008.002a.028.028 0 01-.025-.002c-.165-.008-3.75-.2-5.233 2.782h.14c1.084.025 5.3.45 5.3 5.54 0 5.104-4.216 5.5-5.274 5.513-.098.009-.213.009-.337.009h-.17a7.817 7.817 0 01-1.017-.107 6.049 6.049 0 01-.79 1.336H20.45zm-5.857 2.381c.434-.493.515-1.174.515-1.557h-4.157c0 .378.073 1.067.516 1.557.344.387.868.583 1.557.583.7 0 1.227-.196 1.569-.583zm-7.151-4.428h.156c.115 0 .222 0 .32-.009 1.344-.025 4.47-.524 4.47-4.694 0-4.163-3.143-4.687-4.495-4.72-.124-.009-.264-.009-.401-.009h-.098c-1.33.017-4.423.493-4.423 4.695 0 4.21 3.126 4.711 4.47 4.737zm2.994-4.328c.23 0 .409-.18.409-.41a.41.41 0 00-.409-.41H8.09V8.533a.415.415 0 00-.41-.409.41.41 0 00-.408.409v2.325H4.924a.413.413 0 00-.409.409c0 .23.188.409.41.409h2.347v2.356a.41.41 0 00.818 0v-2.356h2.347z"
            />
        </svg>
    );
};

export default IconBellAddMoreLight;
