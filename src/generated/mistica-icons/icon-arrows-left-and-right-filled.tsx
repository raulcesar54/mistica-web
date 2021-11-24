/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowsLeftAndRightFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M6.747 9.883c.324-.3.752-.411 1.18-.224.396.182.68.593.68 1.037l.004 1.891h5.715v4.451H8.61v1.85c0 .444-.252.85-.68 1.037-.144.038-.284.075-.428.075a1.01 1.01 0 01-.752-.336L2 14.774zM16.073 4.1c.428-.187.856-.112 1.18.224L22 9.214l-4.747 4.879a.89.89 0 01-.716.336c-.144 0-.284 0-.428-.075a1.16 1.16 0 01-.716-1.074v-1.85H9.678V6.987h5.715v-1.85c0-.444.252-.85.68-1.037z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.737 8.633a.75.75 0 01-.255.563l-4.21 4.16c-.014.01-.026.025-.04.036a.782.782 0 01-.831.098.753.753 0 01-.437-.683l-.014-1.824-2.902.006a1.206 1.206 0 01-1.205-1.202v-2.32a1.2 1.2 0 011.202-1.2l2.905-.004.014-1.823c0-.294.17-.56.437-.684a.788.788 0 01.87.138l4.214 4.179c.162.14.252.344.252.56zm-9.832 5.375v2.32c0 .664-.538 1.201-1.202 1.201l-2.902.003-.014 1.824c0 .294-.17.557-.437.68a.788.788 0 01-.871-.137l-4.21-4.174a.756.756 0 010-1.126l4.21-4.154c.014-.01.025-.025.04-.036a.782.782 0 01.831-.098c.266.123.437.39.437.683l.014 1.821 2.9-.005a1.2 1.2 0 011.204 1.198z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowsLeftAndRightFilled;
