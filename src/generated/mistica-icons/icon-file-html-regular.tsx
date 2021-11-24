/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFileHtmlRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.51 2.025c.23 0 .445.087.61.244l5.3 5.132a.86.86 0 01.219.386c.03.073.047.154.047.238V20.33c0 .751-.644 1.384-1.406 1.384H8.098c-.75 0-1.409-.647-1.409-1.384l.034-2.77H4.42A2.427 2.427 0 012 15.134V11.04a2.427 2.427 0 012.42-2.426h2.266V3.41c0-.726.67-1.384 1.41-1.384h7.414zm-.877 1.219H8.098c-.073 0-.188.109-.193.168v5.201h7.014c1.333 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426H7.94l-.033 2.779c0 .05.1.16.193.16h12.18c.098 0 .193-.096.193-.169V8.896h-2.31c-1.015 0-1.891-.33-2.536-.952-.65-.63-.994-1.487-.994-2.482V3.244zm.28 6.585H4.42a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21h10.493a1.21 1.21 0 001.207-1.21V11.04c0-.666-.54-1.21-1.207-1.21zM4.552 11.58v1.261h1.09v-1.26h.705v3.095h-.706v-1.302h-1.09v1.302h-.705V11.58h.706zm5.776 0l.977 1.73 1.009-1.73h.543v3.096h-.647v-1.781l-.641 1.075h-.544l-.66-1.095v1.801H9.77V11.58h.558zm3.904 0v2.583h1.37v.513h-2.075V11.58h.705zm-4.829 0l-.053.51h-.935v2.583h-.706V12.09h-.961v-.51h2.655zm6.446-7.884V5.46c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.798l-4.111-3.982z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileHtmlRegular;
