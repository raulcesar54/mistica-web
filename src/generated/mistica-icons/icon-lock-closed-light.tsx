/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconLockClosedLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.5 2c3.01 0 5.457 2.564 5.457 5.712v2.144h.34c.94 0 1.703.804 1.703 1.788v8.572C20 21.2 19.236 22 18.297 22H6.703C5.763 22 5 21.2 5 20.216v-8.572c0-.984.764-1.784 1.703-1.784h.34V7.716C7.043 4.564 9.491 2 12.5 2zm5.797 8.572H6.703c-.565 0-1.023.48-1.023 1.072v8.572c0 .592.458 1.072 1.023 1.072h11.594c.565 0 1.023-.48 1.023-1.072v-8.572c0-.592-.458-1.072-1.023-1.072zm-3.99 4.032c.13-.14.354-.14.488 0a.367.367 0 010 .504l-3.31 3.468-1.948-2.04a.367.367 0 010-.504.328.328 0 01.48 0l1.463 1.532zm1.603-1.892c.378 0 .684.32.684.716 0 .395-.306.716-.684.716-.377 0-.683-.32-.683-.716 0-.395.306-.716.683-.716zM12.5 2.716c-2.631 0-4.773 2.244-4.773 5V9.86h9.546V7.716c0-2.756-2.142-5-4.773-5z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12.1 2.156c2.587 0 4.694 1.944 4.694 4.33l-.001 2.85c.585.115 1.066.346 1.438.691.582.538.882 1.34.896 2.381v6.258c-.014 1.042-.314 1.843-.896 2.381-.558.513-1.362.776-2.392.776h-7.7c-1.032 0-1.835-.263-2.39-.779-.58-.54-.874-1.342-.874-2.384l.003-5.8a97.092 97.092 0 01-.002-.28l-.001-.169c0-1.042.294-1.843.874-2.384.375-.348.863-.58 1.46-.696V6.487c0-2.39 2.106-4.33 4.694-4.33h.196zm3.739 7.695h-7.7c-.875 0-1.541.207-1.984.619-.45.415-.68 1.07-.68 1.938v.044c0 .05.002.142.002.286v.121l-.003 5.801c0 .869.23 1.521.684 1.944.44.41 1.11.62 1.983.62h7.698c1.787 0 2.666-.838 2.689-2.564v-6.246c-.023-1.726-.902-2.563-2.69-2.563zm-3.832 4.84c1.053 0 1.658.605 1.658 1.659.003 1.053-.602 1.658-1.658 1.658-1.054 0-1.659-.605-1.659-1.658 0-1.054.605-1.659 1.659-1.659zm0 .6c-.723 0-1.06.336-1.06 1.059 0 .722.337 1.058 1.06 1.058.722 0 1.058-.336 1.058-1.058 0-.723-.336-1.06-1.058-1.06zm.092-12.572h-.196c-2.277 0-4.129 1.69-4.129 3.768V9.26a6.21 6.21 0 01.367-.011h7.698c.134 0 .264.004.39.013l-.001-2.775c0-2.076-1.852-3.768-4.129-3.768z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconLockClosedLight;
