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

const IconBuyHomeProductsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.899 17.2h-6.258c-.837 0-1.58-.284-2.148-.816-.591-.557-.975-1.361-1.137-2.39-.13-.82-1.451-8.492-1.636-9.526-.12-.672-.821-1.176-1.633-1.176h-1.35a.562.562 0 0 1-.56-.56c0-.309.251-.56.56-.56h1.352c1.367 0 2.519.882 2.737 2.1.049.273.222 1.267.438 2.521h3.051l3.472-3.65a.557.557 0 0 1 .406-.173c.154 0 .3.064.406.173l.939.989v-.056c0-.308.252-.56.56-.56h1.639c.308 0 .56.252.56.56v2.75a.555.555 0 0 1 .182-.03h2.79a.562.562 0 0 1 .543.697l-.435 1.741v.001l-.321 1.284-.346 1.385v.001c-.246.99-.456 1.833-.54 2.146-.265 1.025-.652 1.778-1.181 2.308-.558.557-1.26.84-2.09.84Zm2.229-9.284.653.69a.561.561 0 0 1-.406.946h-1.078v3.264c0 .68-.426 1.106-1.107 1.106h-6.008c-.684 0-1.107-.423-1.107-1.107V9.553H8.997a.562.562 0 0 1-.406-.947l.658-.692H7.458c.428 2.482.926 5.384 1.01 5.908.123.776.389 1.361.798 1.748.358.339.823.513 1.378.513H16.9c.683 0 1.653-.239 2.188-2.311.08-.31.288-1.143.533-2.125v-.002l.349-1.397.116-.466c.173-.695.336-1.349.467-1.865h-1.424Zm-7.932 4.886h5.98v-3.81c0-.308.252-.56.56-.56h.337l-.743-.782a.561.561 0 0 1-.154-.386V4.636h-.518v.902a.562.562 0 0 1-.966.387l-1.499-1.58-3.89 4.09h.333c.308 0 .56.252.56.56v3.807ZM10.641 21.835c-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422.499 0 .902.143 1.194.423.305.294.459.706.459 1.23 0 .523-.154.935-.46 1.23-.288.28-.691.422-1.193.422Zm-.532-1.653c0 .41.123.533.532.533.41 0 .533-.124.533-.533 0-.409-.124-.532-.533-.532-.409 0-.532.123-.532.532ZM16.103 21.835c-.501 0-.902-.143-1.193-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.291-.28.695-.422 1.193-.422.499 0 .902.143 1.194.423.302.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.289.28-.692.422-1.194.422Zm-.532-1.653c0 .41.123.533.532.533.41 0 .533-.124.533-.533 0-.409-.124-.532-.533-.532-.409 0-.532.123-.532.532Z"
            />
        </svg>
    );
};

export default IconBuyHomeProductsRegular;
