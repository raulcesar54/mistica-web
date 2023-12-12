'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDrinkLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.948 5.13a.407.407 0 0 0-.162-.558l-3.676-2.02a.415.415 0 0 0-.61.262l-.647 2.667h-9.6c-.693 0-1.256.554-1.253 1.281l1.628 13.505c0 .681.563 1.233 1.257 1.233h8.238c.692 0 1.254-.552 1.252-1.184L18.014 6.71c0-.679-.566-1.233-1.257-1.233h-1.049l.475-1.95 3.196 1.758c.202.11.454.04.569-.157M5.25 6.296h9.403l-.675 2.774H5.115l-.287-2.36c0-.23.19-.414.423-.414m10.258 0h1.245c.235 0 .424.187.426.365l-.29 2.41h-2.059zm1.284 3.593-1.249 10.383a.42.42 0 0 1-.423.413H6.885c-.233 0-.424-.186-.426-.462L5.213 9.89h8.561l-2.22 9.12v.003a.408.408 0 0 0 .308.489h.002a.415.415 0 0 0 .5-.303l2.268-9.309zm-7.819 3.742c-.303.298-.592.398-.841.395-.39 0-.686-.243-.787-.343l-.079-.079c-.158-.162-.727-.849.05-1.611.297-.292.584-.39.832-.39.4 0 .702.252.8.344l.077.075c.167.168.73.844-.052 1.61m.588.576c.978-.96.737-2.074.063-2.755-.03-.03-.066-.065-.099-.092-.183-.173-.683-.573-1.38-.573-.357 0-.893.108-1.423.63-.967.949-.726 2.066-.062 2.752.02.022.04.042.062.063l.033.032c.183.176.678.581 1.374.581.358 0 .896-.11 1.432-.638m1.229 1.893-.068-.068a1.5 1.5 0 0 0-1.017-.41c-.267 0-.669.078-1.051.456-.71.698-.522 1.547-.041 2.039l.063.062c.278.268.65.424 1.019.424.27 0 .669-.078 1.057-.46.718-.705.521-1.554.038-2.043m-.626 1.462c-.169.165-.33.222-.47.222a.669.669 0 0 1-.437-.192l-.043-.043c-.085-.09-.402-.473.03-.895.164-.165.325-.219.461-.219.224 0 .391.14.446.192.013.01.03.027.043.04.093.092.405.468-.03.895"
            />
        </svg>
    );
};

export default IconDrinkLight;
