/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFilePptFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.11 7.803l.004.003v-.003h-.003zM5.912 11.458H4.618v3.77h.86v-1.3h.605c.496 0 .837-.114 1.059-.363.187-.21.28-.513.28-.916 0-.404-.098-.695-.303-.883-.243-.226-.616-.308-1.207-.308zm.49 1.681c-.109.104-.227.143-.501.143v.003h-.426v-1.202h.403c.267 0 .426.04.53.132.098.092.143.24.143.445 0 .221-.05.38-.149.479zm1.63-1.681h1.295c.59 0 .963.082 1.207.308.204.188.302.48.302.883s-.092.706-.28.916c-.221.249-.563.364-1.059.364h-.605v1.3h-.86v-3.77zm1.785 1.681c-.11.104-.227.143-.502.143v.003H8.89v-1.202h.403c.266 0 .426.04.53.132.097.092.142.24.142.445 0 .221-.05.38-.148.479zm2.465-1.059h-1.168v-.622h3.235l-.067.622h-1.14v3.149h-.86V12.08z"
            />
            <path
                fill={fillColor}
                d="M21.792 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.248c-.748 0-1.409-.647-1.409-1.383l.034-2.774H4.57a2.427 2.427 0 01-2.42-2.425v-4.093a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.67-1.384 1.41-1.384h7.414a.86.86 0 01.613.25l5.297 5.126c.115.109.18.243.222.386zm-1.681-.11L15.999 3.82v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.692.61h1.798zM4.573 16.47h9.846a1.21 1.21 0 001.207-1.21v-4.093c0-.667-.54-1.21-1.207-1.21H4.573a1.21 1.21 0 00-1.207 1.21v4.092c0 .667.54 1.21 1.207 1.21z"
            />
        </svg>
    );
};

export default IconFilePptFilled;
