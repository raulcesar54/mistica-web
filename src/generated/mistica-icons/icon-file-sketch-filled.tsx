/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileSketchFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M17.59 7.653l-4.054-3.984v1.765c0 .658.213 1.213.614 1.608.406.398.98.61 1.664.61h1.776zm1.652.106a.61.61 0 01.045.238v12.305c0 .751-.636 1.384-1.386 1.384H5.906c-.737 0-1.386-.647-1.386-1.384V3.384C4.52 2.658 5.18 2 5.906 2h7.3c.23 0 .442.087.605.25l5.213 5.125c.115.11.176.244.218.384zm-4.549 4.96l.34-.985.498.986h-.838zm-.33.973h1.014l-1.941 2.714.927-2.714zm-4.871 0l.94 2.756-1.99-2.756h1.05zm.507-1.474l-.42-1.23h1.38l-.96 1.23zm3.854.003l-.978-1.232h1.4l-.422 1.232zm-3.025.499l1.09-1.39 1.1 1.39h-2.19zm2.52.972l-1.425 4.165-1.423-4.165h2.849zm-4.531-1.978l.344 1.006h-.865l.52-1.006zm7.927 1.283c-.003-.005 0-.008-.003-.014l-1.364-2.692-.003-.01c-.003-.007-.008-.01-.011-.012a.451.451 0 00-.143-.157l-.056-.034c-.02-.008-.037-.025-.056-.033-.042-.014-.087-.014-.129-.02-.011 0-.02-.008-.03-.008h-6.04c-.011 0-.02.008-.03.008-.043.003-.085.003-.127.017-.02.008-.036.022-.053.034a.502.502 0 00-.193.18c-.006.007-.014.01-.02.018l-1.409 2.704c-.003.005 0 .01-.003.016a.484.484 0 00-.05.21l.003.02c0 .017.008.034.01.05.01.068.032.127.065.183.006.01.006.025.011.036l4.429 6.132h.003a.453.453 0 00.148.128c.014.009.028.014.042.02a.448.448 0 00.194.048h.002c.068 0 .132-.02.19-.048l.043-.022a.504.504 0 00.148-.13c.003 0 .003 0 .003-.002l4.39-6.132c.008-.01.005-.025.013-.036a.46.46 0 00.062-.174c.003-.02.011-.036.011-.056 0-.008.006-.014.006-.022a.583.583 0 00-.053-.202z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileSketchFilled;
