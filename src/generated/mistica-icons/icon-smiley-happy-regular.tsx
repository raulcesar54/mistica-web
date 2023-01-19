/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSmileyHappyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12c0-6.705-3.627-9.845-9.846-9.845-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-9.846 8.612c-5.792 0-8.61-2.818-8.61-8.611 0-5.796 2.818-8.613 8.61-8.613 5.799 0 8.617 2.817 8.617 8.613 0 5.793-2.821 8.61-8.617 8.61zm5.16-6.844a.615.615 0 01.913.824c-.092.1-2.269 2.473-6.003 2.515h-.021c-.026.002-.07.003-.133.003-.736 0-3.893-.143-5.983-2.482a.613.613 0 11.916-.818c1.918 2.145 5.046 2.074 5.183 2.07h.005c3.143-.038 5.04-2.025 5.12-2.109l.003-.003zm-8.143-3.22c-.356 0-.652-.113-.86-.323-.204-.207-.305-.493-.305-.846 0-.723.448-1.17 1.165-1.17.72 0 1.165.447 1.165 1.17 0 .356-.103.639-.305.846-.207.207-.504.322-.86.322zm5.112-.323c.207.21.504.322.86.322s.653-.115.857-.322c.202-.207.306-.493.306-.846 0-.723-.446-1.17-1.166-1.17-.717 0-1.165.447-1.165 1.17 0 .353.104.639.308.846z"
            />
        </svg>
    );
};

export default IconSmileyHappyRegular;
