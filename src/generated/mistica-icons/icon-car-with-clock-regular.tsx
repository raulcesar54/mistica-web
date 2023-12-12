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

const IconCarWithClockRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.232 15.62a5.272 5.272 0 0 0-1.014-1.36c1.073-1.192 1.619-2.89 1.622-5.044 0-4.552-2.493-7.064-7.02-7.064-4.518 0-7.011 2.512-7.011 7.064 0 .098 0 .205.008.303-1.431.453-2.493 1.277-3.204 2.002-1.692 1.712-2.451 3.869-2.443 5.112-.083 1.592.144 2.654.154 2.7a.619.619 0 0 0 .597.488h1.714c.23 1.252 1.168 2.008 2.566 2.008s2.336-.756 2.566-2.008h3.415c.22 1.26 1.16 2.017 2.557 2.017 1.398 0 2.336-.756 2.566-2.017h2.378c.165 0 .31-.067.426-.174.076-.076 1.47-1.466.123-4.028M9.033 9.212c0-3.87 1.952-5.829 5.784-5.829 3.84 0 5.793 1.96 5.793 5.83 0 1.882-.465 3.324-1.39 4.296a5.531 5.531 0 0 0-1.747-.636c-.605-.913-2.835-3.711-7.322-3.711-.39 0-.768.025-1.118.081zm7.02.995c.12.123.277.182.434.182a.614.614 0 0 0 .434-.182.624.624 0 0 0 0-.874l-1.549-1.56V5.672a.614.614 0 1 0-1.227 0V8.03c0 .165.065.322.18.437zm4.092 5.988c.68 1.283.426 2.065.238 2.387h-2.078c-.213-1.269-1.16-2.025-2.566-2.025-1.403 0-2.345.756-2.558 2.025H9.776c-.221-1.269-1.168-2.034-2.574-2.034s-2.353.765-2.574 2.034H3.45a10.969 10.969 0 0 1-.056-1.927c-.008-1.037.72-2.888 2.084-4.272.9-.905 2.435-1.983 4.673-1.983 4.501 0 6.341 3.218 6.414 3.35a.61.61 0 0 0 .507.322c.017 0 2.028.14 3.073 2.123M17.14 19.2c0 .939-.457 1.4-1.398 1.4-.942 0-1.39-.461-1.39-1.4v-.008c0-.944.448-1.398 1.39-1.398.94 0 1.398.451 1.398 1.398zm-8.541-.017v.017c-.009.939-.465 1.392-1.398 1.392-.941 0-1.398-.462-1.398-1.409 0-.944.46-1.397 1.398-1.397.941 0 1.398.45 1.398 1.397"
            />
        </svg>
    );
};

export default IconCarWithClockRegular;
