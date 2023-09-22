/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconNeuralNetworkHumanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.211 2.155c5.04 0 7.815 2.726 7.815 7.672 0 1.003-.117 1.866-.316 2.62h-5.182a1.715 1.715 0 00-.535-.695l1.25-3.376c.75-.19 1.307-.854 1.307-1.65 0-.944-.781-1.711-1.745-1.711-.7 0-1.305.409-1.58.997h-1.518v-3.84l.168-.007c.111-.005.223-.01.336-.01zm.704 12.644a1.748 1.748 0 001.616-1.07h4.708c-.638 1.348-1.568 2.205-2.481 2.726l-.012 4.532a.865.865 0 01-.87.854H9.48a.865.865 0 01-.87-.854v-1.532c-1.172-.118-2.034-.482-2.57-1.09-.462-.52-.585-1.137-.551-1.543l-.025-1.675-1.832-.474a.867.867 0 01-.617-.594.849.849 0 01.205-.823 10.199 10.199 0 001.582-2.126c.37-.675.58-1.362.62-2.042.226-3.866 2.333-6.227 5.977-6.793V6.4L9.727 8.107a1.783 1.783 0 00-.661-.131c-.961 0-1.745.767-1.745 1.711 0 .944.781 1.712 1.745 1.712.96 0 1.742-.768 1.742-1.712 0-.235-.05-.468-.146-.683l1.67-1.706h1.837c.138.38.404.695.751.896l-1.185 3.202c-.877.09-1.563.81-1.563 1.695 0 .944.782 1.711 1.742 1.708zm1.893-7.641a.432.432 0 01-.437-.429c0-.235.196-.428.437-.428.238 0 .434.193.434.428a.433.433 0 01-.434.429zM9.312 9.343a.445.445 0 00-.246-.087.434.434 0 00-.437.428.434.434 0 00.437.429c.24 0 .437-.193.437-.429a.421.421 0 00-.087-.24.23.23 0 00-.075-.077.214.214 0 01-.029-.024zm4.6 3.316a.433.433 0 00-.435.429.433.433 0 00.435.428c.24 0 .437-.193.437-.428a.434.434 0 00-.437-.429z"
            />
        </svg>
    );
};

export default IconNeuralNetworkHumanFilled;
