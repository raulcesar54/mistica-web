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

const IconTowTruckLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.062 10.844c-.342-.443-2.961-3.885-3.407-4.501-.428-.594-1.196-.975-1.95-.975h-4.394a.407.407 0 0 0-.41.406v5.294L6.267 4.39a.41.41 0 0 0-.336-.176l-1.47-.011h-.003a.41.41 0 0 0-.163.042.4.4 0 0 0-.286.38L4 8.872c.006.056-.006.322-.14.468l-.002.002c-.03.03-.115.115-.351.118h-.006c-.26 0-.344-.092-.372-.123-.132-.146-.137-.423-.129-.504a.405.405 0 0 0-.356-.451h-.003a.404.404 0 0 0-.453.35v.006c-.009.07-.07.697.33 1.14.165.182.468.395.986.395h.011c.493-.003.788-.21.95-.381.392-.423.361-1.014.356-1.048l.005-2.58 2.412 4.832H2.56a.407.407 0 0 0-.409.406v4.47c0 .53.236 1.068.647 1.477.353.35.807.555 1.322.616.395 1.098 1.367 1.726 2.765 1.726 1.39 0 2.359-.617 2.76-1.698h4.187c.4 1.084 1.37 1.698 2.759 1.698 1.39 0 2.359-.617 2.76-1.698h.35c.534 0 1.078-.232 1.487-.641.411-.41.65-.947.65-1.476v-3.398c0-.725-.48-1.348-.769-1.724l-.007-.01ZM5.118 5.02l.593.006 4.096 5.902-1.74-.003-2.95-5.905Zm15.902 7.56c-.003-.002-.003 3.393-.003 3.393 0 .313-.149.644-.41.899-.26.258-.59.406-.907.406h-.179l.01-.092a3.01 3.01 0 0 0 .024-.334c0-1.84-1.107-2.935-2.964-2.935-1.854 0-2.964 1.098-2.964 2.935 0 .118.012.225.024.332l.01.094H9.818l.01-.092c.012-.11.024-.218.024-.334 0-1.84-1.107-2.935-2.964-2.935-1.854 0-2.96 1.098-2.96 2.935 0 .093.009.18.018.268l.01.088a1.351 1.351 0 0 1-.575-.333c-.258-.258-.409-.586-.409-.9v-4.067h8.339a.407.407 0 0 0 .409-.406V6.18h3.983c.485 0 1.011.263 1.286.639.45.619 3.078 4.078 3.423 4.524.227.29.608.781.608 1.238Zm-6.572 4.272c0-1.389.742-2.123 2.143-2.123 1.4 0 2.143.734 2.143 2.123 0 1.39-.742 2.124-2.143 2.124-1.4 0-2.143-.734-2.143-2.124Zm-7.56 2.124c-1.4 0-2.14-.734-2.14-2.124 0-1.389.74-2.123 2.14-2.123 1.403 0 2.143.734 2.143 2.123 0 1.39-.74 2.124-2.143 2.124Z"
            />
        </svg>
    );
};

export default IconTowTruckLight;
