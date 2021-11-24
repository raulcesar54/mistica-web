/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWarningRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 1.428c-4.716 0-8.572 3.856-8.572 8.572 0 4.716 3.856 8.572 8.572 8.572 4.716 0 8.572-3.856 8.572-8.572 0-4.716-3.856-8.572-8.572-8.572zm0 12.5a.892.892 0 110 1.784.892.892 0 010-1.784zm0-9.284c.392 0 .716.32.716.716v6.784a.718.718 0 01-.716.716.718.718 0 01-.716-.716V7.36c0-.396.324-.716.716-.716z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.479 21.613c2.752-.05 9.147-1.086 9.147-9.586 0-8.504-6.433-9.578-9.2-9.644a34.462 34.462 0 00-.808-.009h-.19c-2.724.025-9.057 1.008-9.057 9.587 0 8.598 6.392 9.618 9.14 9.656l.323.003c.229 0 .45-.003.645-.007zm-.019-20.6c2.157.05 10.54.9 10.54 11.017 0 10.137-8.399 10.923-10.496 10.964-.2.003-.432.006-.664.006-.115 0-.231-.003-.344-.003C9.289 22.962 1 22.164 1 11.964 1 1.776 9.21 1.019 11.418 1h.2c.288 0 .585.003.842.013zm-.463 14.892a.689.689 0 01-.689-.689V5.72a.689.689 0 011.378 0v9.496a.693.693 0 01-.69.689zm0 .935c.432 0 .782.35.786.783a.787.787 0 01-.783.785h-.003a.783.783 0 010-1.568z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWarningRegular;
