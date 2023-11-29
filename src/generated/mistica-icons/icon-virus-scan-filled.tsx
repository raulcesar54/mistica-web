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

const IconVirusScanFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.662 20.805a.602.602 0 0 1 .005.851l-.005.006a.614.614 0 0 1-.866 0l-5.826-5.776A7.835 7.835 0 0 1 9.98 17.67c-4.325 0-7.826-3.473-7.826-7.759 0-4.283 3.501-7.756 7.823-7.756 4.322 0 7.824 3.473 7.824 7.756a7.68 7.68 0 0 1-1.961 5.126c.003 0 5.82 5.768 5.82 5.768ZM14.034 10.7v-.748a.528.528 0 0 0-.53-.526h-.638a4.146 4.146 0 0 0-.285-1.233l.831-.25a.524.524 0 0 0 .376-.528l-.062-1.127c-.017-.288-.272-.481-.557-.495a.527.527 0 0 0-.502.551l.04.718-.437.131c.01-.081.02-.16.02-.25 0-1.652-1.62-1.652-2.312-1.652-.692 0-2.31 0-2.31 1.653 0 .09.01.169.02.25l.002.008-.465-.14.039-.718a.527.527 0 0 0-.501-.551c-.275-.006-.541.204-.558.495l-.061 1.127a.529.529 0 0 0 .375.532l.851.255c-.16.375-.243.795-.285 1.227h-.639a.526.526 0 0 0-.53.523v.748c0 .291.239.524.53.524.291 0 .53-.232.53-.524v-.221h.072c.006.532.048 1.05.171 1.512l-.703.21a.528.528 0 0 0-.375.533l.061 1.123a.53.53 0 0 0 .53.499h.03a.528.528 0 0 0 .502-.552l-.04-.714.455-.138c.428.552 1.134.902 2.296.902 1.157 0 1.863-.347 2.292-.896l.437.132-.04.714a.527.527 0 0 0 .502.552h.03c.28 0 .513-.216.53-.499l.062-1.126a.529.529 0 0 0-.376-.532l-.683-.205c.126-.465.168-.983.17-1.518h.074v.221c0 .292.238.524.532.524a.52.52 0 0 0 .53-.52Zm-5.3-3.764v.016h2.5l.002-.016c0-.13 0-.247-.067-.342-.11-.16-.404-.258-1.185-.258-1.25 0-1.25.252-1.25.6Zm1.743 4.98a.528.528 0 0 1-1.059 0V9.116c0-.292.238-.524.53-.524.29 0 .529.232.529.524v2.8Zm1.367-1.605c0-1.224-.18-1.88-.594-2.19-.269-.2-.686-.298-1.269-.298-.59 0-1.008.099-1.277.303-.412.31-.586.966-.586 2.185 0 1.955.4 2.49 1.863 2.49 1.462 0 1.863-.535 1.863-2.49Z"
            />
        </svg>
    );
};

export default IconVirusScanFilled;
