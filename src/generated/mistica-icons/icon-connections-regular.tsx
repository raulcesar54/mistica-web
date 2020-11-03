/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconConnectionsRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.9 18.246a2.545 2.545 0 01-2.544-2.543 2.547 2.547 0 012.543-2.543 2.548 2.548 0 012.546 2.543 2.55 2.55 0 01-2.546 2.543M8.493 9.283a2.451 2.451 0 014.902 0 2.451 2.451 0 01-4.902 0m-3.692 7.106a1.505 1.505 0 01-1.504-1.507 1.506 1.506 0 013.011 0c0 .835-.675 1.507-1.507 1.507m6.154 4.009a1.038 1.038 0 11.003-2.076 1.038 1.038 0 01-.003 2.076M4.804 5.322a1.036 1.036 0 11.003-2.073c.571 0 1.036.465 1.036 1.037a1.04 1.04 0 01-1.04 1.036m14.326.507a1.191 1.191 0 11-.002 2.383 1.191 1.191 0 01.002-2.383m-1.23 6.062a3.78 3.78 0 00-2.423.893l-1.52-1.336c.459-.63.708-1.386.708-2.165 0-.095-.023-.185-.028-.277l2.4-.71A2.454 2.454 0 0019.13 9.48a2.46 2.46 0 002.46-2.46 2.46 2.46 0 00-4.922 0c0 .02.005.04.005.062l-2.341.692a3.718 3.718 0 00-3.39-2.204c-.991 0-1.941.395-2.636 1.098L6.816 5.39c.182-.33.297-.703.297-1.106a2.308 2.308 0 00-4.616.003A2.309 2.309 0 004.8 6.59c.406 0 .782-.115 1.112-.3L7.58 7.72a3.66 3.66 0 00-.359 1.566c0 .792.255 1.526.681 2.131l-1.359 1.328a2.735 2.735 0 00-1.745-.63 2.778 2.778 0 00-2.776 2.77 2.78 2.78 0 002.776 2.776 2.777 2.777 0 002.776-2.776 2.77 2.77 0 00-.246-1.131l1.47-1.437a3.694 3.694 0 004.247.03l1.596 1.404a3.754 3.754 0 00-.557 1.955c0 .496.1.963.275 1.398l-1.662.764a2.292 2.292 0 00-1.742-.81 2.308 2.308 0 00-2.308 2.306 2.31 2.31 0 002.308 2.305 2.305 2.305 0 002.306-2.305c0-.118-.017-.23-.034-.342l1.804-.829a3.787 3.787 0 002.865 1.325 3.817 3.817 0 003.815-3.812A3.815 3.815 0 0017.9 11.89"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConnectionsRegular;