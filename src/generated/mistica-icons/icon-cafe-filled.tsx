/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCafeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.607 5.75c0-.21-.081-.337-.235-.563-.166-.236-.37-.53-.373-.953-.003-.423.202-.706.356-.918l.008-.012c.149-.201.247-.336.244-.619a.54.54 0 01.546-.535h.006c.302 0 .549.236.552.524.005.625-.267.997-.449 1.244-.123.165-.162.227-.16.308 0 .1.065.196.186.37l.001.002c.18.257.424.61.422 1.152a.54.54 0 01-.552.529.538.538 0 01-.552-.53zm14.232 7.77c0-4.291-3.411-5.017-4.75-5.137h-.003V7.374a.626.626 0 00-.636-.613H2.786a.626.626 0 00-.636.613v10.558c0 1.288.342 2.243 1.048 2.916.7.666 1.683.991 3.011.991h6.818c1.328 0 2.311-.325 3.011-.991.566-.541.888-1.275.997-2.205 1.286-.095 4.804-.756 4.804-5.123zm-1.268 0c0 3.126-2.194 3.779-3.482 3.893V9.61c1.3.126 3.482.798 3.482 3.91zM10.152 5.47c.059.09.171.26.188.327a.55.55 0 00.566.489l.02-.001a.537.537 0 00.512-.566c-.02-.301-.199-.576-.346-.8l-.01-.015a3.153 3.153 0 01-.067-.101 8.76 8.76 0 01.084-.123l.004-.006c.16-.229.354-.51.338-.84-.014-.294-.286-.524-.575-.533-.302.014-.535.236-.52.53-.012.042-.08.14-.133.218l-.027.04-.002.002c-.148.213-.318.455-.306.74.005.227.13.42.265.624l.01.015z"
            />
        </svg>
    );
};

export default IconCafeFilled;
