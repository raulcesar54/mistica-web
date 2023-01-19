/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBoatRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.846 12.843a.604.604 0 00-.602-.605l-3.63-.003c-.09-1.014-.437-1.846-1.07-2.457-1.142-1.103-2.746-1.075-2.868-1.073h-.006l-2.275-.002V4.409a.604.604 0 00-.602-.606H6.75a.604.604 0 00-.602.606v4.29c-.449 0-.78 0-.91.004-.49.005-.76.213-.9.383a.977.977 0 00-.213.703l-.02 2.426-1.344-.003a.6.6 0 00-.6.636l.27 5.888c.025.588.411 1.465 1.366 1.465h12.425c.018.002.052.003.1.003.445 0 2.097-.095 3.492-1.423 1.348-1.28 2.031-3.277 2.031-5.938zM10.188 5.68H7.35v-.664h2.838v.664zM5.33 9.916c.204-.002.634-.003 1.195-.004l1.261-.002H9.34c2.132 0 4.297-.001 4.353.006h.024c.173.005 1.26.031 1.993.736.372.362.608.857.697 1.48l-11.092.013.017-2.23zm13.672 7.974c-1.132 1.087-2.524 1.101-2.733 1.103a.47.47 0 00-.026 0H3.798c-.14 0-.165-.307-.165-.307l-.24-5.255 17.235.02c-.09 1.997-.636 3.49-1.625 4.44zM7.35 8.694V6.89h2.838v1.804H7.35zm-.717 7.098a.406.406 0 010 .813.406.406 0 010-.813zm-1.207.41c0 .669.54 1.215 1.207 1.215.664 0 1.207-.546 1.207-1.216 0-.67-.54-1.216-1.207-1.216-.666 0-1.207.547-1.207 1.216zm5.24-.41c.225 0 .404.182.404.406a.404.404 0 11-.81 0c0-.224.183-.406.407-.406zm-1.206.41c0 .669.54 1.215 1.207 1.215s1.21-.546 1.207-1.216c0-.67-.54-1.216-1.207-1.216-.664 0-1.207.547-1.207 1.216zm5.243-.41c.224 0 .404.182.404.406a.404.404 0 11-.807 0c0-.224.18-.406.403-.406zm-1.207.41c0 .669.54 1.215 1.207 1.215s1.208-.546 1.208-1.216c0-.67-.541-1.216-1.208-1.216-.666 0-1.207.547-1.207 1.216z"
            />
        </svg>
    );
};

export default IconBoatRegular;
