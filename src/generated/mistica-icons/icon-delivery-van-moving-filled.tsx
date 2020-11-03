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

const IconDeliveryVanMovingFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.028 10.493a430.2 430.2 0 01-3.266-4.356c-.336-.465-.958-.778-1.546-.778H5.29c-.409 0-.826.184-1.148.504-.322.32-.504.74-.504 1.148v.532H2.56a.562.562 0 00-.56.56c0 .309.252.56.56.56h1.08v1.611H2.56a.562.562 0 00-.56.56c0 .309.252.56.56.56h1.08v1.612H2.56a.562.562 0 00-.56.56c0 .308.252.56.56.56h1.08v1.078c0 .41.185.827.504 1.149.32.322.74.504 1.148.504h.14c.266 1.05 1.09 1.639 2.35 1.639 1.261 0 2.085-.588 2.348-1.639h4.585c.266 1.05 1.09 1.639 2.35 1.639s2.084-.588 2.35-1.639h.625c.41 0 .827-.185 1.149-.504.322-.32.504-.74.504-1.149v-3.277c-.003-.571-.418-1.112-.664-1.434zm-13.25 6.882c-.926 0-1.321-.395-1.321-1.322s.395-1.322 1.322-1.322 1.322.395 1.322 1.322-.395 1.322-1.322 1.322zm9.284 0c-.928 0-1.323-.395-1.323-1.322s.395-1.322 1.323-1.322c.927 0 1.322.395 1.322 1.322s-.395 1.322-1.322 1.322z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeliveryVanMovingFilled;