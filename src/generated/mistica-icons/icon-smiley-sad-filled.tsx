/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSmileySadFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12c0-6.705-3.627-9.845-9.846-9.845-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zM5.928 16.05c2.333-2.614 6.003-2.485 6.157-2.48 3.714.04 5.893 2.412 5.986 2.513a.613.613 0 01-.457 1.025.61.61 0 01-.456-.201l-.003-.003c-.08-.085-1.977-2.073-5.1-2.107h-.03c-.328.001-3.33.004-5.178 2.07a.613.613 0 01-.868.05.613.613 0 01-.05-.867zm3.084-5.502c-.356 0-.653-.112-.86-.322-.201-.207-.305-.493-.305-.846 0-.723.445-1.17 1.165-1.17.717 0 1.165.447 1.165 1.17 0 .353-.103.639-.305.846-.207.21-.504.322-.86.322zm6.832-.322c-.207.21-.504.322-.86.322-.358 0-.655-.112-.857-.322-.202-.207-.305-.493-.305-.846 0-.723.445-1.17 1.165-1.17.717 0 1.165.447 1.165 1.17 0 .353-.104.639-.308.846z"
            />
        </svg>
    );
};

export default IconSmileySadFilled;
