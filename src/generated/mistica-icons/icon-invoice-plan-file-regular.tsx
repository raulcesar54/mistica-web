/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconInvoicePlanFileRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.622 16.782h7.756c.388 0 .705.33.705.734 0 .404-.317.734-.705.734H7.622c-.388 0-.705-.33-.705-.734 0-.404.317-.734.705-.734zm-.705-2.937c0-.404.317-.734.705-.734h7.756c.388 0 .705.33.705.734 0 .404-.317.734-.705.734H7.622c-.388 0-.705-.33-.705-.734z"
                />
                <path
                    fill={fillColor}
                    d="M4 7.429L9.479 2h9.66v20H4V7.429zM9.046 7V4.429L6.451 7h2.595zM5.442 20.571h12.255V3.43h-7.209v5H5.442v12.14z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.072 13.072a.715.715 0 100 1.432h7.856a.715.715 0 100-1.432H8.072zm7.856 3.572H8.072a.718.718 0 00-.716.716c0 .392.32.716.716.716h7.856c.392 0 .716-.32.716-.716a.718.718 0 00-.716-.716z"
                />
                <path
                    fill={fillColor}
                    d="M4.5 7.428L9.928 2H19.5v20h-15V7.428zM9.5 7V4.428L6.928 7H9.5zm8.572 13.572V3.428h-7.144v5h-5v12.144h12.144z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.544 12.827h-7.1a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1a.561.561 0 010 1.12zm-7.1 3.006h7.1c.309 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-7.1a.562.562 0 00-.56.56c0 .308.252.56.56.56zm0 3.003h7.1c.309 0 .56-.252.56-.56a.562.562 0 00-.56-.56h-7.1a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
                />
                <path
                    fill={fillColor}
                    d="M5.853 21.847h12.296c.589 0 1.107-.518 1.107-1.107V7.897c0-.154-.062-.3-.174-.406L13.62 2.31a.566.566 0 00-.386-.154H5.853c-.569 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106zm12.277-1.12H5.88a.06.06 0 01-.013-.012V3.298a.085.085 0 01.022-.023h6.504v2.437c0 .956.32 1.776.916 2.376.597.6 1.42.916 2.376.916h2.45V20.72l-.005.005zM13.514 5.711V3.754l4.353 4.13h-2.182c-.65 0-1.2-.205-1.583-.589-.384-.384-.588-.93-.588-1.583z"
                />
            </svg>
        );
    }
};

export default IconInvoicePlanFileRegular;
