/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMedicalHistoryFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.817 3.074h-1.089v2.857H7.272V3.074h-1.09C4.983 3.074 4 4.04 4 5.218v6.071h1.857l1.638-2.784a.562.562 0 01.475-.283c.186 0 .363.105.474.283l2.509 4.252 1.89-3.25a.562.562 0 01.474-.284c.182 0 .363.105.475.283l.982 1.395h1.42c.288 0 .544.251.544.534 0 .284-.256.572-.545.572h-1.745a.574.574 0 01-.475-.284l-.665-.864-1.89 3.25a.562.562 0 01-.474.284.568.568 0 01-.475-.283L7.96 9.858l-1.307 2.25a.574.574 0 01-.475.25H4V22h16V5.218c0-1.18-.982-2.144-2.183-2.144zm-2 14.643H8.183a.556.556 0 01-.545-.535c0-.284.256-.535.545-.535h7.632c.289 0 .545.251.545.535a.553.553 0 01-.545.535zm-.47-12.855h.288V2h-7.27v2.857h6.981v.005z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.772 4.18c-.079-.25-.317-1.004-1.866-1.004-1.672 0-1.924.838-1.958 1.57l-.005.386c.01.266.022.652 1.963.652s1.955-.386 1.96-.613V4.81a2.401 2.401 0 00-.094-.63zm3.916-.749c.854 0 1.602.611 1.602 1.306V20.38c0 .709-.734 1.305-1.602 1.305H6.128c-.869 0-1.603-.6-1.603-1.305V4.734c0-.695.748-1.305 1.6-1.305H9.08C9.55 2.515 10.522 2 11.906 2c1.686 0 2.468.709 2.83 1.431h2.952zm-.731 10.112h-1.563l-.757-2.14a.555.555 0 00-1.053.028l-.625 2.115h-.53a.55.55 0 00-.503.325l-.35.776-.958-4.773a.552.552 0 00-.516-.44.537.537 0 00-.557.387l-1.143 3.672h-1.55a.553.553 0 00-.554.549c0 .303.247.549.555.549h1.955a.557.557 0 00.53-.387l.619-1.988.874 4.336a.555.555 0 001.047.117l.91-2.022h.586c.244 0 .46-.16.53-.395l.257-.868.317.896a.554.554 0 00.52.367h1.956a.55.55 0 00.552-.549.555.555 0 00-.55-.555zM11.21 5.134a.553.553 0 01-.554-.549c0-.302.246-.549.554-.549h1.393a.55.55 0 01.551.55.55.55 0 01-.551.548H11.21z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconMedicalHistoryFilled;
