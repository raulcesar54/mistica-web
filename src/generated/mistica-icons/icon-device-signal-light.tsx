/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDeviceSignalLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.514 5.913v-.7C15.514 3.44 14.113 2 12.387 2h-6.26C4.401 2 3 3.44 3 5.214v13.572C3 20.56 4.401 22 6.127 22h6.255c1.726 0 3.128-1.44 3.128-3.214V5.922c0-.004.004-.004.004-.009zm-9.387-3.2h6.255c1.344 0 2.434 1.12 2.434 2.5v.353H3.694v-.352c0-1.38 1.094-2.5 2.433-2.5zm6.255 18.57H6.127c-1.343 0-2.433-1.12-2.433-2.501v-.357h7.3c.191 0 .347-.16.347-.356a.352.352 0 00-.347-.357h-7.3V6.279h11.122v12.503c0 1.38-1.09 2.5-2.434 2.5zm1.393-3.214a.705.705 0 01-.694.713.705.705 0 01-.694-.713c0-.394.311-.714.694-.714.382 0 .694.32.694.714zm4.902-1.637a.35.35 0 01-.494.014.362.362 0 01-.013-.503 5.727 5.727 0 00-.098-7.881.357.357 0 010-.503.339.339 0 01.49 0 6.441 6.441 0 01.115 8.873zm-1.744-7.2a4.057 4.057 0 01.111 5.518.333.333 0 01-.258.114.34.34 0 01-.235-.096.362.362 0 01-.023-.503 3.335 3.335 0 00-.093-4.53.353.353 0 11.498-.503z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceSignalLight;