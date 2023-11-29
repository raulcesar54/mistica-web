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

const IconReportFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.241 12.861c-.18.18-.504.324-.504.324l-2.878 1.08a1.27 1.27 0 0 1-.504.107c-.36 0-.756-.144-1.008-.431-.395-.396-.54-1.008-.323-1.512l1.08-2.878s.143-.324.323-.504l4.246-4.282V2.283H8.297v6.296H2v13.134h13.673v-9.284l-.432.432Zm-10.003.036h3.418c.288 0 .54.252.54.54 0 .288-.252.54-.54.54H5.238a.553.553 0 0 1-.54-.54c0-.288.252-.54.54-.54Zm7.196 4.678H5.238a.553.553 0 0 1-.54-.54c0-.288.252-.54.54-.54h7.196c.288 0 .54.252.54.54 0 .288-.252.54-.54.54ZM7.217 7.5H2.252l4.965-4.966V7.5Zm14.249-4.678c-.72-.72-1.871-.72-2.555 0L12.075 9.66c-.072.036-.108.18-.108.18l-1.08 2.878c-.072.216-.036.432.108.576a.541.541 0 0 0 .396.144c.072 0 .144 0 .18-.036l2.878-1.08c.144-.072.18-.108.18-.108l6.837-6.836c.324-.324.54-.792.54-1.295-.037-.468-.216-.936-.54-1.26Zm-.792.756a.71.71 0 0 1 .216.504.86.86 0 0 1-.18.503l-1.043-1.043c.288-.252.755-.252 1.007.036Zm-6.44 7.484-1.044-1.043 5.721-5.722 1.044 1.044-5.721 5.721Zm-1.944.936.36-.972.612.612-.972.36Z"
            />
        </svg>
    );
};

export default IconReportFilled;
