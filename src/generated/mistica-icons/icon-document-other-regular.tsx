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

const IconDocumentOtherRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.385 8.155a.62.62 0 0 0-.048-.244.846.846 0 0 0-.207-.38l-5.21-5.124a.862.862 0 0 0-.614-.252h-7.3c-.725 0-1.386.655-1.386 1.378v5.653l.042 7.977-.042 3.3c0 .737.653 1.378 1.387 1.378h11.991c.757 0 1.387-.633 1.387-1.378zm-1.194.868v11.44c0 .073-.086.163-.19.163H6.01c-.095 0-.19-.107-.19-.155l.042-3.3-.042-7.985V3.542c.006-.065.118-.171.19-.171h6.437v2.213c0 .997.334 1.857.98 2.49.628.624 1.491.95 2.494.95zm-6.336 7.208c.513 0 .91-.407.91-.942a.917.917 0 1 0-1.834 0v.017a.91.91 0 0 0 .924.925m1.787-12.407 4.048 3.98h-1.767c-.687 0-1.26-.21-1.667-.607-.406-.398-.614-.947-.614-1.613zm2.23 11.465c0 .535-.397.942-.907.942a.91.91 0 0 1-.925-.925v-.017a.917.917 0 1 1 1.832 0m-7.131.942c.518 0 .916-.407.916-.942a.918.918 0 0 0-.925-.932c-.51 0-.907.414-.907.932v.017c0 .518.397.925.916.925"
            />
        </svg>
    );
};

export default IconDocumentOtherRegular;
