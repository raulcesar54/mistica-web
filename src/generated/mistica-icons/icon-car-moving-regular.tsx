/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconCarMovingRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.375 14.028c.126-.202.272-.678-.252-1.538-.854-1.398-2.582-1.535-2.6-1.538a.605.605 0 01-.475-.29c-.06-.099-1.53-2.444-5.126-2.444a5.383 5.383 0 00-3.908 1.62c-.975.983-1.479 2.201-1.473 2.896a7.95 7.95 0 00.028 1.291h.795c.216-1.025 1-1.644 2.163-1.644 1.165 0 1.946.619 2.162 1.644h2.608c.216-1.02 1-1.638 2.162-1.638 1.163 0 1.944.616 2.163 1.638l1.753.003zm-3.918 1.633c.703 0 1.03-.328 1.03-1.034 0-.705-.327-1.036-1.03-1.036-.703 0-1.031.328-1.031 1.036 0 .706.328 1.034 1.03 1.034zm-6.933-.006c.703 0 1.03-.327 1.03-1.036 0-.706-.327-1.034-1.03-1.034-.703 0-1.031.328-1.031 1.034s.328 1.036 1.03 1.036zm11.619-3.79c1.045 1.718.353 2.877-.16 3.25a.597.597 0 01-.353.115h-2.014c-.218 1.016-1 1.633-2.16 1.633-1.16 0-1.94-.614-2.16-1.633h-2.615c-.222 1.014-1.003 1.624-2.157 1.624-1.157 0-1.939-.61-2.157-1.624H6.056a.597.597 0 01-.583-.457c-.008-.034-.201-.849-.131-2.064-.009-.905.552-2.429 1.82-3.712a6.556 6.556 0 014.76-1.977c3.605 0 5.437 2.039 5.98 2.773.672.109 2.3.53 3.24 2.073zM4.33 12.883a.6.6 0 010 1.2H3.025a.6.6 0 010-1.2h1.306zm.252-2a.6.6 0 010 1.2H2.599a.597.597 0 01-.599-.6c0-.334.269-.6.6-.6h1.983zm1.23-1.372a.6.6 0 01-.6.6h-1.54a.6.6 0 010-1.2h1.54c.33-.002.6.266.6.6z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarMovingRegular;