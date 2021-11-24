/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconWaterDropLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.65 17.38h-1.403c-.211 0-.35.141-.35.355s.139.355.35.355h1.402c.212 0 .351-.14.351-.355 0-.214-.14-.355-.35-.355zm-2.212 1.53a.336.336 0 00-.49 0 .347.347 0 000 .496l.985.996a.369.369 0 00.247.105.392.392 0 00.247-.105.347.347 0 000-.496l-.989-.997zm-1.65.96c-.21 0-.35.14-.35.355v1.42c0 .214.14.355.35.355.212 0 .351-.141.351-.355v-1.42c0-.214-.139-.355-.35-.355zM12.156 5.114a.707.707 0 00.701-.71.707.707 0 00-.7-.71.707.707 0 00-.702.71c0 .39.315.71.701.71zM10.97 19.765c-3.291 0-5.97-2.713-5.97-6.044 0-.929.202-1.816.602-2.645l5.056-8.898a.354.354 0 01.481-.132c.167.1.225.314.13.487l-5.051 8.875a5.305 5.305 0 00-.517 2.313c0 2.94 2.364 5.334 5.268 5.334 2.903 0 5.267-2.394 5.267-5.334 0-.82-.18-1.603-.53-2.335L12.73 6.179a.36.36 0 01.126-.487.35.35 0 01.481.127l2.989 5.23c.409.851.611 1.739.611 2.667 0 3.336-2.679 6.05-5.968 6.05z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.992 21.022h-.034c-1.947 0-3.473-.538-4.53-1.594-1.064-1.064-1.604-2.608-1.613-4.585-.011-3.796 4.586-9.93 6.132-11.676 1.552 1.748 6.174 7.886 6.185 11.64.008 3.994-2.171 6.204-6.14 6.215m.243-18.745a.41.41 0 00-.288-.12.42.42 0 00-.289.12C10.3 3.644 4.986 10.52 5 14.845c.006 2.171.647 3.958 1.852 5.166 1.198 1.198 2.963 1.834 5.106 1.834h.034c4.364-.014 6.963-2.644 6.95-7.042-.01-4.277-5.345-11.154-6.707-12.526"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconWaterDropLight;
