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

const IconClickToCallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.836 17.89c-.017-.85-.431-1.687-1.235-2.49a5.011 5.011 0 0 0-1-.788c-.695-.431-1.415-.588-2.135-.465-.72.123-1.425.524-2.098 1.196a5.724 5.724 0 0 0-.442.496c-.118.067-.49.028-1.252-.496-.88-.605-1.922-1.613-2.628-2.32l-.084-.083c-.706-.706-1.714-1.748-2.32-2.628-.52-.761-.56-1.134-.495-1.252a4.95 4.95 0 0 0 .496-.442c.672-.673 1.076-1.378 1.196-2.098.12-.72-.03-1.434-.462-2.13a4.86 4.86 0 0 0-.787-1c-.804-.803-1.642-1.22-2.49-1.234h-.05c-.864 0-1.732.411-2.586 1.226a6.26 6.26 0 0 0-.695.832l-.028.042c-.796 1.154-.776 2.942.059 5.031.87 2.185 2.568 4.577 4.907 6.916l.084.084c2.34 2.34 4.731 4.037 6.916 4.908 1.07.425 2.062.641 2.927.641.827 0 1.541-.193 2.104-.582a.154.154 0 0 0 .025-.02l.017-.011c.135-.095.54-.39.832-.695.826-.871 1.24-1.759 1.224-2.639Z"
            />
            <path
                fill={fillColor}
                d="M12.752 11.945a.757.757 0 0 1-.748-.93l.97-4.534a.709.709 0 0 1 .498-.558c.252-.07.518.02.712.233l.669.74 3.03-2.606a.886.886 0 0 1 .695-.244.924.924 0 0 1 .662.367l1.134 1.264c.18.201.263.467.23.733a.909.909 0 0 1-.367.625L17.22 9.691l.661.733c.196.216.252.49.154.737s-.33.406-.619.429l-4.6.355h-.064Z"
            />
        </svg>
    );
};

export default IconClickToCallFilled;
