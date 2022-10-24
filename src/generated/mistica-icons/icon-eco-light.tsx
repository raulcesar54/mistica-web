/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconEcoLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.787 2.054c.142-.072.284-.072.39 0 .25.14 5.827 3.752 5.823 10.297 0 2.324-.707 4.216-2.082 5.649a.336.336 0 01-.493 0 .346.346 0 010-.5c1.232-1.289 1.868-3.04 1.868-5.149 0-5.509-4.341-8.9-5.293-9.58-.952.68-5.293 4.075-5.293 9.58 0 5.108 3.673 6.645 4.942 7.04v-12.4c0-.213.138-.357.351-.357.21 0 .351.14.351.356v14.654c0 .212-.138.356-.351.356-.21 0-.351-.14-.351-.356V20.14C10.447 19.784 6 18.136 6 12.347c0-6.455 5.432-10.058 5.776-10.286l.01-.007z"
                    fill={fillColor}
                />
                <path
                    d="M14.121 19.856c.39 0 .707-.32.707-.716a.712.712 0 00-.707-.716c-.39 0-.707.32-.707.716 0 .395.317.716.707.716z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M3.437 3.002c-.79.003-1.434.65-1.437 1.44v3.265c0 .02.002.04.006.059.053 1.318.447 2.341 1.177 3.043.756.727 1.856 1.097 3.267 1.097 1.38 0 2.459-.351 3.21-1.045.278.547.521 1.151.728 1.812.718 2.295.858 4.773.95 6.412l.002.043c.036.621.064 1.113.117 1.437a.272.272 0 00.228.225c.014.003.028.003.043.003a.272.272 0 00.265-.228c.332-2.039.973-4.861 2.165-7.133.047.05.095.1.144.148.753.727 1.85 1.095 3.259 1.095 1.411 0 2.506-.368 3.256-1.095.725-.696 1.118-1.709 1.173-3.016a.256.256 0 00.01-.075V7.225c0-.784-.642-1.423-1.425-1.426H17.56c-1.409 0-2.506.368-3.259 1.095-.781.756-1.177 1.879-1.177 3.344 0 1.108.227 2.023.677 2.729-.253.459-.491.957-.714 1.49-.59 1.414-.985 2.86-1.243 4.011-.131-2.182-.42-5.452-1.794-8.036.562-.736.844-1.734.844-2.973 0-1.472-.399-2.598-1.183-3.356-.755-.73-1.851-1.1-3.26-1.1a371.8 371.8 0 00-3.015 0zm-.873 4.454V4.442a.88.88 0 01.873-.875h3.01c2.578 0 3.884 1.309 3.884 3.889 0 1.003-.198 1.815-.592 2.431-.801-1.294-1.916-2.365-3.477-2.962a.272.272 0 00-.194.508c1.368.522 2.474 1.497 3.309 2.91-.649.664-1.627.999-2.93.999-2.577 0-3.883-1.309-3.883-3.886zm11.097 2.782c0-2.591 1.311-3.903 3.9-3.903h3.016a.898.898 0 01.89.89v2.958a.266.266 0 00-.006.055c0 2.59-1.311 3.9-3.9 3.9-1.438 0-2.482-.404-3.125-1.207.972-1.662 2.274-2.946 4.015-3.263a.27.27 0 00-.098-.53c-1.197.216-2.283.864-3.23 1.924a9.646 9.646 0 00-1.01 1.37c-.301-.583-.452-1.315-.452-2.194z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconEcoLight;
