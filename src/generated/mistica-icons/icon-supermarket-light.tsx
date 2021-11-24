/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconSupermarketLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.981 13.155c.177-.174.264-.476.264-.894 0-.417-.09-.72-.267-.896-.17-.171-.453-.258-.843-.258-.387 0-.672.084-.84.258-.174.176-.264.479-.264.896 0 .418.09.717.26.894.169.17.455.258.844.258.39 0 .675-.087.846-.258zm-.846-2.9c.608 0 1.082.168 1.41.499.341.342.515.852.515 1.507 0 .659-.174 1.166-.518 1.507-.328.328-.802.494-1.41.494-.608 0-1.081-.169-1.409-.494-.339-.344-.513-.848-.513-1.507 0-.655.171-1.165.513-1.507.33-.33.807-.499 1.412-.499zm1.138-5.819H11.04c.084.485.148.9.157.936.01.062.08.35.204.35h1.4c.09 0 .15-.132.18-.244.081-.285.2-.706.292-1.042zm-3.8-1.434a.417.417 0 01-.403-.432c.003-.235.151-.412.415-.42h.37c.417 0 .773.291.888.728.036.143.09.404.145.704h2.925c.13 0 .25.061.328.168a.435.435 0 01.067.375s-.285 1.045-.44 1.589c-.148.535-.512.857-.963.857h-1.401c-.594 0-.942-.555-1.014-1.07a87.571 87.571 0 00-.238-1.404c-.003-.008-.003-.017-.006-.028-.076-.42-.149-.801-.193-.97-.026-.1-.107-.1-.101-.1-.2.006-.378.003-.378.003zm1.984 3.947c.011 0 .02.003.03.003.077.003.38.034.38.41 0 .377-.3.408-.376.408h-.04c-.078-.003-.375-.03-.375-.412 0-.378.294-.406.373-.409h.008zm1.258 0c.011 0 .02.003.03.003.076.003.38.034.38.41 0 .377-.3.408-.376.408h-.034c-.081-.003-.375-.03-.375-.412 0-.378.294-.406.372-.409h.003zm5.867 13.989h2.437v-8.251h-2.437v8.25zm-.816 0V9.22c-.014-.005-.142-.109-.294-.109H6.742c-.151 0-.283.101-.303.143l.006 11.725 2.233-.009v-5.099c0-.235.182-.425.409-.425h6.063c.227 0 .409.19.409.425v5.077l2.207-.011zm-3.028.014v-4.65h-5.24v4.667l5.24-.017zm-11.77-.014h2.438v-8.251H2.968v8.25zm18.463-9.103c.227 0 .409.19.409.426v9.103c0 .235-.185.476-.412.476H2.56c-.227 0-.409-.24-.409-.476V12.26c0-.238.182-.426.409-.426h3.07V9.221c0-.512.522-.96 1.116-.96h10.727c.594 0 1.115.448 1.115.96v2.612h2.844v.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSupermarketLight;
