/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWarningLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 2c1.892 0 3.752.536 5.356 1.536.18.108.216.32.108.5s-.32.216-.5.108A9.43 9.43 0 0012 2.716c-5.108 0-9.284 4.176-9.284 9.284 0 5.108 4.18 9.284 9.284 9.284 5.104 0 9.284-4.176 9.284-9.248 0-1.784-.5-3.5-1.428-4.964-.108-.18-.072-.392.108-.5.18-.108.392-.072.5.108A9.925 9.925 0 0122 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 14.284a.536.536 0 110 1.072.536.536 0 010-1.072zm0-9.64c.216 0 .356.14.356.356v7.5c0 .212-.14.356-.356.356-.212 0-.356-.14-.356-.356V7c0-.212.14-.356.356-.356zM18.784 4.5a.716.716 0 110 1.432.716.716 0 010-1.432z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.485 22.077c2.25-.041 9.598-.89 9.598-10.049 0-3.966-1.356-6.827-4.032-8.505-2.185-1.371-4.652-1.571-5.613-1.596-.247-.007-.532-.01-.807-.01h-.204c-.955.01-3.406.172-5.56 1.528-2.623 1.65-3.95 4.517-3.95 8.52 0 4.01 1.343 6.884 3.991 8.556 2.173 1.368 4.643 1.55 5.604 1.562l.328.003c.226-.003.451-.003.645-.01zM12.46 1.009C14.614 1.06 23 1.911 23 12.03c0 10.138-8.396 10.927-10.496 10.965-.2.003-.432.006-.664.006-.115 0-.231 0-.344-.003C9.286 22.966 1 22.167 1 11.966 1 1.776 9.21 1.019 11.418 1h.213c.281 0 .576.003.83.01zm-.463 14.67a.458.458 0 01-.457-.458V5.724a.458.458 0 01.914 0v9.497a.458.458 0 01-.457.457zM12 16.845a.717.717 0 110 1.433.717.717 0 010-1.433z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWarningLight;
