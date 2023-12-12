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

const IconAntennaRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.41 2.337c.95.961 1.431 2.35 1.431 4.135 0 1.781-.482 3.17-1.431 4.129a.6.6 0 0 1-.429.181.603.603 0 0 1-.445-.198.665.665 0 0 1 .017-.913c.7-.706 1.053-1.782 1.053-3.2 0-1.42-.353-2.498-1.053-3.207a.665.665 0 0 1-.014-.913.596.596 0 0 1 .87-.014M4.444 9.671a.67.67 0 0 1 .016.915.604.604 0 0 1-.445.197.594.594 0 0 1-.429-.182c-.95-.959-1.431-2.348-1.431-4.13 0-1.78.482-3.17 1.431-4.134a.597.597 0 0 1 .874.017.667.667 0 0 1-.014.913c-.7.709-1.053 1.787-1.053 3.205-.003 1.417.353 2.493 1.05 3.199m14.963 8.756a.633.633 0 0 0-.619-.647v.002h-1.38L13.871 7.85c.21-.364.32-.821.32-1.376 0-.759-.197-1.344-.592-1.742-.378-.38-.924-.574-1.621-.574-.698 0-1.241.193-1.62.574-.389.395-.588.98-.588 1.74 0 .554.11 1.014.32 1.375L6.556 17.78H5.228c-.342 0-.62.291-.62.647v2.77c0 .359.278.647.62.647h13.56c.342 0 .62-.291.62-.647zM11.22 5.657c.17-.174.51-.21.761-.213.252 0 .591.036.765.212.176.18.213.541.213.813 0 .272-.037.633-.213.807-.174.176-.513.212-.767.212-.208 0-.58-.028-.762-.21-.174-.176-.21-.537-.21-.81 0-.27.039-.632.213-.812m-3.345 12.12 3.246-9.123a2.8 2.8 0 0 0 .858.126c.322 0 .61-.048.865-.126l3.252 9.123h-1.154l-2.375-6.639a.033.033 0 0 0-.006-.01c-.002-.002-.004-.005-.005-.01-.013-.033-.031-.06-.05-.087a.966.966 0 0 1-.02-.03c-.009-.011-.016-.024-.024-.036-.012-.02-.025-.04-.04-.056a.328.328 0 0 0-.052-.04l-.036-.025-.037-.025c-.025-.019-.05-.036-.078-.048l-.01-.005a.033.033 0 0 0-.01-.006c-.017-.008-.035-.01-.053-.011-.013-.001-.026-.002-.039-.006a.433.433 0 0 0-.12-.02c-.045 0-.088.01-.133.021l-.007.002a.233.233 0 0 1-.03.004.153.153 0 0 0-.049.01l-.006.005c-.002.002-.005.005-.01.006-.035.016-.065.038-.095.06l-.015.01-.01.009a.4.4 0 0 1-.033.023.24.24 0 0 0-.049.038.545.545 0 0 0-.055.078l-.01.015a.452.452 0 0 0-.075.127l-.006.01-2.347 6.636zm3.448-2.68.664-1.88.675 1.88zm6.846 3.974v1.48H5.844v-1.48zM13.62 17.78h-3.244l.49-1.39h2.255zM6.388 9.21c.12.123.274.182.428.182a.621.621 0 0 0 .448-.196.67.67 0 0 0-.017-.913c-.386-.39-.582-1-.582-1.815s.196-1.426.582-1.818a.667.667 0 0 0 .014-.913.6.6 0 0 0-.873-.017c-.64.644-.961 1.569-.961 2.745 0 1.18.322 2.104.96 2.745m10.33-.927a.667.667 0 0 0-.017.913.63.63 0 0 0 .446.199.603.603 0 0 0 .428-.18c.639-.644.964-1.565.964-2.744 0-1.177-.322-2.101-.961-2.745a.597.597 0 0 0-.874.014.668.668 0 0 0 .014.915c.39.39.585 1.003.585 1.816 0 .812-.198 1.423-.585 1.812"
            />
        </svg>
    );
};

export default IconAntennaRegular;
