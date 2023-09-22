/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTongueFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.843 4.394a.573.573 0 01-.09.347l-.006.011a8.99 8.99 0 01-.722.925 3.88 3.88 0 01-.158.16l-.106.106c-.184.19-.375.375-.577.549-.117.098-.24.193-.364.285a8.248 8.248 0 01-1.047.692c-.04.021-.077.044-.114.068a2.1 2.1 0 01-.113.067c.008.014.008.022.008.039.065.801.098 1.68.098 2.706 0 5.174-.865 8.837-4.77 9.672-.241.05-.496.084-.76.115a.86.86 0 00-.048.009.558.558 0 01-.075.01c-.313.029-.64.045-.986.045-2.064 0-3.515-.551-4.52-1.557-1.678-1.675-2.118-4.6-2.118-8.294 0-1.025.03-1.924.098-2.74a3.663 3.663 0 01-.246-.147 6.073 6.073 0 00-.146-.09c-.044-.028-.089-.054-.133-.08a5.747 5.747 0 01-.293-.181 6.892 6.892 0 01-.51-.378L4.09 6.69a5.801 5.801 0 01-.347-.274c-.185-.162-.356-.339-.527-.515a3.937 3.937 0 00-.1-.099c-.056-.054-.112-.108-.163-.167a8.803 8.803 0 01-.703-.9.606.606 0 01.04-.703.617.617 0 01.142-.14.619.619 0 01.72.04.68.68 0 01.137.131c.112.168.238.323.365.478l.058.071a7.64 7.64 0 002.675 2.09c1.513.717 3.403 1.081 5.622 1.081 2.77 0 4.989-.577 6.658-1.692a7.38 7.38 0 002.053-2.02.359.359 0 01.067-.067.892.892 0 00.026-.022.618.618 0 01.765-.081.569.569 0 01.266.493zm-9.801 12.235a.61.61 0 00.613-.608l-.036-7.05a8.367 8.367 0 00-.252.012c-.117.006-.234.013-.356.013-.126 0-.245-.007-.363-.015a7.42 7.42 0 00-.265-.013l.04 7.059a.61.61 0 00.616.602h.003z"
            />
        </svg>
    );
};

export default IconTongueFilled;
