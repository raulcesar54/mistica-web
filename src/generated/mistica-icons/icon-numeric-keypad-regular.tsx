'use client';
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

const IconNumericKeypadRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4 2h2.668v2.668H4V2ZM16.648 13.436l2.836.944c.724.244 1.16.964 1.044 1.716L19.548 22h-1.38l1.012-6.124a.184.184 0 0 0-.128-.204l-3.3-1.1a.68.68 0 0 1-.464-.644V10a.652.652 0 0 0-1.304 0v7.332c0 .288-.18.54-.448.64a.685.685 0 0 1-.752-.2l-1.96-2.32a.475.475 0 0 0-.624.024.533.533 0 0 0-.112.676L13.34 22h-1.556l-2.88-5.176a1.882 1.882 0 0 1 .408-2.384 1.85 1.85 0 0 1 2.436.008c.024.024.048.048.072.076l.8.948V10c0-.604.276-1.144.7-1.512V6h2.668v2.52c.404.368.66.892.66 1.48v3.436ZM11.336 2H8.668v2.668h2.668V2ZM4 6h2.668v2.668H4V6ZM11.336 6H8.668v2.668h2.668V6ZM4 10h2.668v2.668H4V10Z"
                />
                <path fill={fillColor} d="M11.336 10H8.668v2.668h2.668V10ZM13.324 2h2.668v2.668h-2.668V2Z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.787 2.295c-.73 0-1.207.384-1.207 1.213 0 .398.11.692.305.893.21.216.521.32.902.32s.692-.104.902-.32c.196-.198.306-.495.306-.893 0-.83-.477-1.213-1.208-1.213ZM8.34 2.295c-.732 0-1.208.384-1.208 1.213 0 .398.11.692.305.893.21.216.521.32.902.32s.692-.104.902-.32c.196-.198.305-.495.305-.893 0-.83-.473-1.213-1.207-1.213ZM10.68 3.508c0-.83.477-1.213 1.208-1.213s1.207.384 1.207 1.213c0 .398-.109.695-.305.893-.21.216-.52.32-.902.32-.38 0-.692-.104-.902-.32-.196-.201-.305-.495-.305-.893ZM4.787 5.572c-.73 0-1.207.387-1.207 1.213 0 .398.11.695.305.894.21.215.521.32.902.32s.692-.105.902-.32c.196-.2.306-.496.306-.894 0-.829-.477-1.213-1.208-1.213ZM7.132 6.785c0-.826.476-1.213 1.207-1.213.734 0 1.207.384 1.207 1.213 0 .398-.109.695-.305.894-.21.215-.52.32-.902.32-.38 0-.692-.105-.902-.32-.196-.2-.305-.496-.305-.894ZM17.79 21.707h-6.448c-.647 0-.933-.61-1.053-.869-.118-.249-.527-1.075-1.003-2.033l-.107-.216a327.597 327.597 0 0 1-2.168-4.417c-.33-.7-.198-1.429.34-1.857.557-.446 1.355-.434 1.938.028.302.24.554.571.835 1.044V7.295c.07-1.104.714-1.737 1.761-1.737 1.09 0 1.768.681 1.768 1.773v2.381c.185-.05.375-.075.566-.072.829 0 1.409.411 1.61 1.109a2.09 2.09 0 0 1 .645-.098c.834 0 1.414.417 1.613 1.12a2.07 2.07 0 0 1 .642-.095c1.041 0 1.686.647 1.686 1.692v5.737c0 .798-.227 1.43-.67 1.887-.442.457-1.143.715-1.955.715Zm0-1.12c.504 0 .925-.135 1.154-.373.23-.238.353-.61.353-1.107v-5.74c0-.422-.148-.57-.566-.57-.417 0-.566.148-.566.57 0 .309-.252.561-.56.561a.562.562 0 0 1-.56-.56v-1.025c0-.423-.148-.572-.566-.572-.417 0-.566.149-.566.572 0 .308-.252.56-.56.56a.562.562 0 0 1-.56-.56v-1.014c0-.423-.148-.572-.566-.572-.417 0-.566.149-.566.572 0 .308-.252.56-.56.56a.562.562 0 0 1-.56-.56V7.33c0-.476-.177-.652-.647-.652-.499 0-.614.235-.645.672v.684c0 1.695-.002 5.886 0 6.218.003.476-.254.86-.64.958-.203.05-.712.087-1.124-.675-.362-.67-.622-1.098-.888-1.308-.193-.152-.42-.132-.546-.031-.157.123-.098.339-.023.499.56 1.179 1.504 3.084 2.266 4.613.499 1.003.891 1.793 1.014 2.056.028.076.068.149.115.221h6.367ZM4.787 8.85c-.73 0-1.207.386-1.207 1.213 0 .397.11.694.305.893.21.216.521.322.902.322s.692-.103.902-.322c.196-.199.306-.496.306-.893 0-.83-.477-1.213-1.208-1.213Z"
                />
                <path
                    fill={fillColor}
                    d="M7.132 10.063c0-.827.476-1.213 1.207-1.213.734 0 1.207.383 1.207 1.213 0 .397-.109.694-.305.893-.21.219-.52.322-.902.322-.38 0-.692-.106-.902-.322-.196-.199-.305-.496-.305-.893Z"
                />
            </svg>
        );
    }
};

export default IconNumericKeypadRegular;
