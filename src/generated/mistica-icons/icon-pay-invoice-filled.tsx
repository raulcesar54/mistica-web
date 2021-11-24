/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPayInvoiceFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.86 2H7.144C5.964 2 5 2.96 5 4.144V22h15V4.144A2.143 2.143 0 0017.86 2zm-6.098 4.823h.365a2.682 2.682 0 012.625-2.144c.42 0 .832.1 1.22.302a.538.538 0 01.233.722.538.538 0 01-.722.233 1.6 1.6 0 00-.727-.183c-.7 0-1.285.448-1.509 1.07h1.674c.297 0 .535.238.535.535a.533.533 0 01-.535.535h-1.674c.224.621.81 1.07 1.51 1.07.25 0 .493-.06.726-.184a.534.534 0 01.722.234.534.534 0 01-.233.722 2.621 2.621 0 01-1.22.302 2.682 2.682 0 01-2.625-2.144h-.365a.533.533 0 01-.535-.535c0-.297.237-.535.535-.535zm4.667 11.072H8.575a.533.533 0 01-.535-.535c0-.297.238-.535.535-.535h7.859c.297 0 .535.238.535.535a.537.537 0 01-.54.535zm0-3.57H8.575a.533.533 0 01-.535-.535c0-.297.238-.535.535-.535h7.859c.297 0 .535.238.535.535a.537.537 0 01-.54.535z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.098 2.16c.014 0 .028.003.042.006h.014l.05.008a.284.284 0 01.048.011l.014.003a.139.139 0 01.037.011l.011.006c.014.008.03.014.045.022l.042.025.011.009.03.022.012.009.037.033 5.198 5.2.017.019.009.011.022.03.008.012.026.042.022.048.006.01.014.037c.002.006.005.009.005.014.003.014.009.028.011.045l.009.05v.014a.185.185 0 01.003.04v.785l.001 3.818v7.98l.001.076v.142c-.002.711-.445 1.157-1.154 1.157H8.505c-.367 0-.659-.107-.866-.317-.207-.21-.314-.504-.314-.868v-6.227c-1.63-.003-2.902-.434-3.781-1.283-.919-.885-1.384-2.196-1.384-3.896 0-1.7.465-3.014 1.384-3.897.88-.848 2.154-1.28 3.781-1.283v-.748c0-.72.451-1.17 1.177-1.17h.154l.104-.001h.574l.18-.001h1.314l.252-.001h1.922l.287-.001h1.438l.281-.001zm2.345 15.017h-8.037a.562.562 0 00-.56.56c0 .308.252.56.56.56h8.04a.56.56 0 00-.003-1.12zm.003-3.278h-6.737a.562.562 0 00-.56.56c0 .309.252.56.56.56h6.737c.308 0 .56-.251.56-.56a.562.562 0 00-.56-.56zM7.339 5.17c-2.75 0-4.09 1.338-4.09 4.092 0 2.753 1.337 4.092 4.09 4.092 2.751 0 4.09-1.336 4.09-4.092 0-1.446-.32-2.465-.975-3.12-.655-.656-1.675-.973-3.115-.973zm-.003.487a.42.42 0 01.42.42v.476c.35.048.676.16.939.322.199.124.23.283.23.367a.39.39 0 01-.39.39.515.515 0 01-.23-.065 2.176 2.176 0 00-.546-.216v1.485c1.197.202 1.454.913 1.449 1.485 0 .476-.174.876-.502 1.162-.243.21-.568.35-.952.41v.383a.42.42 0 11-.84 0v-.378a2.874 2.874 0 01-1.227-.48.408.408 0 01-.19-.352.4.4 0 01.402-.398c.096.003.185.03.261.084.23.16.487.275.756.345V9.524C5.852 9.297 5.62 8.631 5.62 8.087c0-.815.496-1.38 1.297-1.526v-.485a.42.42 0 01.42-.42zm11.11 4.966h-4.552a.562.562 0 00-.56.56c0 .309.252.56.56.56h4.552c.308 0 .56-.251.56-.56a.562.562 0 00-.56-.56zm-10.687-.96v1.44c.412-.104.656-.373.656-.754 0-.275-.09-.544-.656-.687zm-.84-2.3a.68.68 0 00-.498.689c0 .232.07.479.498.63zm9.742-3.286v1.37c.003.6.135 1.09.373 1.414.238.325.588.482 1.067.485h1.827l-3.268-3.27z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPayInvoiceFilled;
