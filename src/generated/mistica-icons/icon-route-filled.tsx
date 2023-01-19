/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRouteFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.452c.006-2.028-1.247-3.291-3.269-3.297h-.02c-.991 0-1.82.3-2.392.871-.577.574-.882 1.406-.885 2.406-.003 1.49 1.311 3.482 2.165 4.597a.192.192 0 01-.04-.006c-.016-.003-.033-.007-.052-.005a5.643 5.643 0 00-.316.039.61.61 0 00.087 1.213c.027 0 .058 0 .086-.006.106-.016.182-.024.211-.027h.005a.6.6 0 00.56-.547l.037.041c.042.046.076.084.1.107a.604.604 0 00.863 0c.375-.375 2.854-3.33 2.86-5.386zm-3.227.493c-.51 0-.717-.21-.717-.723 0-.512.207-.72.717-.72.507 0 .717.208.717.72 0 .513-.207.723-.717.723zm-9.1 15.09a.624.624 0 00-.656-.564c-.227.017-.412.03-.544.038l-.154.01c1.26-1.624 3.25-4.58 3.255-6.75.006-1.424-.414-2.603-1.218-3.412-.804-.81-1.978-1.241-3.398-1.244h-.022c-2.886 0-4.614 1.728-4.622 4.627-.009 2.98 3.66 7.401 4.185 7.925a.611.611 0 00.863 0c.067-.07.193-.21.355-.4a.639.639 0 00.614.475h.036l.15-.01c.14-.008.344-.02.595-.04a.611.611 0 00.56-.655zm5.285-9.219a.61.61 0 01-.193-1.19c.269-.09.54-.171.8-.239a.61.61 0 01.314 1.182 10.01 10.01 0 00-.725.22.69.69 0 01-.196.027zm-.955 3.193c-.123.314.03.67.344.793.252.098.507.193.762.283a.607.607 0 00.779-.367.61.61 0 00-.364-.781l-.146-.053c-.197-.072-.394-.143-.585-.22a.61.61 0 00-.79.345zm3.977 2.432c.314.117.474.47.356.787-.115.305-.3.596-.546.865a.61.61 0 01-.445.197.61.61 0 01-.445-1.028c.14-.152.24-.309.299-.465a.605.605 0 01.781-.356zm-2.207 1.588a.61.61 0 01.815.283c.146.302.02.67-.283.818-.246.12-.51.232-.784.333a.61.61 0 01-.784-.358.615.615 0 01.356-.788c.24-.09.467-.184.68-.288zm-3.25-6.168a.61.61 0 00.858-.076c.112-.134.272-.269.47-.4a.612.612 0 00.174-.846.612.612 0 00-.843-.174c-.3.196-.546.41-.734.636a.612.612 0 00.076.86zm.65 2.235a.592.592 0 01-.386-.14 2.317 2.317 0 01-.658-.832.61.61 0 111.11-.504c.06.137.167.266.321.395.26.216.297.6.084.86a.612.612 0 01-.47.221zm3.08.74c-.158.3-.043.67.257.823a2.3 2.3 0 01.52.35c.119.11.27.166.418.166a.613.613 0 00.417-1.056 3.463 3.463 0 00-.792-.544.608.608 0 00-.82.26zm-4.903 4.372c.35-.039.644.182.692.516a.615.615 0 01-.512.694c-.278.042-.55.079-.807.11a.608.608 0 01-.678-.532.61.61 0 01.53-.681c.249-.031.51-.065.775-.107zm3.028.003a.61.61 0 00-.74-.445c-.249.061-.5.117-.75.17a.612.612 0 00.247 1.2c.268-.057.534-.118.8-.185a.608.608 0 00.443-.74zM6.796 14.29c-.742 0-1.047-.303-1.045-1.051 0-.745.303-1.05 1.045-1.05.745 0 1.048.302 1.048 1.05s-.303 1.05-1.048 1.05z"
            />
        </svg>
    );
};

export default IconRouteFilled;
