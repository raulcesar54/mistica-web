/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMuseumLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.38 18.004h1.992c.23 0 .418.187.418.42v3.003c0 .232-.185.42-.418.42H2.627a.419.419 0 01-.417-.42v-3.003c0-.233.185-.42.417-.42h2.025v-8.44H2.574a.418.418 0 01-.4-.294.421.421 0 01.162-.47l9.426-6.57c.143-.1.333-.1.476 0l9.426 6.57a.424.424 0 01.16.47.414.414 0 01-.399.294h-2.044v8.44zm1.572 3.002v-2.162H3.045v2.162h17.907zM5.487 18.005h1.616v-8.44H5.487v8.44zm14.602-9.28L12 3.088 3.908 8.724h1.154a.01.01 0 00.005-.002.01.01 0 01.004-.001l.004.001.004.002h2.434a.01.01 0 00.005-.002l.004-.001a.01.01 0 01.004.001l.004.002h3.252l.004-.002a.01.01 0 01.005-.001.01.01 0 01.004.001.01.01 0 00.004.002h2.434l.004-.002a.01.01 0 01.005-.001.01.01 0 01.004.001l.004.002h3.252l.004-.002h.003V8.72l.006.001.004.002h2.434l.004-.002a.01.01 0 01.005-.001.01.01 0 01.004.001l.004.002h1.12zm-6.428 9.28h2.434v-8.44h-2.434v8.44zm-.835 0v-8.44H11.21v8.44h1.616zm-4.888 0h2.434v-8.44H7.938v8.44zm10.608 0v-8.44H16.93v8.44h1.616z"
            />
        </svg>
    );
};

export default IconMuseumLight;
