/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTrainFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M13.241 19.091L16.093 22H6.898l2.86-2.909h3.483zM19 9.638V22h-1.399a.117.117 0 01-.013-.023l-2.834-2.89A1.804 1.804 0 0016.5 17.27v-.465a1.066 1.066 0 01-.713.284 1.08 1.08 0 01-1.07-1.09c0-.6.48-1.089 1.07-1.089.274 0 .526.107.713.284V13.46h-10v1.736c.192-.172.439-.284.713-.284.59 0 1.07.489 1.07 1.09 0 .6-.48 1.089-1.07 1.089-.274 0-.526-.107-.713-.284v.465c0 .987.782 1.792 1.746 1.815l-2.843 2.89A.102.102 0 005.39 22H4V9.638C4 5.426 7.364 2 11.5 2S19 5.426 19 9.638zm-2.5 2.727V8.912c0-1-.8-1.82-1.787-1.82H8.287c-.983 0-1.787.814-1.787 1.82v3.453h10z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.055 10.67a6.334 6.334 0 00-.591-.802c-2.205-2.544-4.167-3.431-5.301-3.742v4.543h5.892zm-1.28 4.98c.224-.171.577-.472.919-.865H3.374v1.001c10.508 0 13.932.02 14.922.029h.008a.755.755 0 00.47-.165zm-15.4-5.057h2.003V7.371H3.375v3.222zm3.393 0h2.155V7.371H6.768v3.222zm3.416 0h2.157V7.371h-2.157v3.222zm-7.837 6.381a.757.757 0 01-.177-.49V5.267c0-.384.269-.697.602-.697H13.11c.115-.004 3.39-.095 7.204 4.312 1.135 1.311 1.65 2.667 1.53 4.026-.171 1.936-1.583 3.276-2.407 3.904a1.871 1.871 0 01-1.132.392h-.017c-1.009-.01-4.54-.028-15.515-.028a.568.568 0 01-.425-.203zm18.91 1.052c.334 0 .603.31.603.697 0 .387-.27.697-.603.697H2.772c-.333 0-.602-.31-.602-.697 0-.387.269-.697.602-.697h18.485z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTrainFilled;
