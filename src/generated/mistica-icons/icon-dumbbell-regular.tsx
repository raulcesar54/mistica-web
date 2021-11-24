/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconDumbbellRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.787 5.339c.706 0 1.28.597 1.28 1.336V9.49h7.614V6.675c0-.737.574-1.336 1.28-1.336h1.098c.706 0 1.28.597 1.28 1.336v.112h1.095c.706 0 1.28.6 1.28 1.336v7.55c0 .736-.574 1.335-1.28 1.335H19.34v.112c0 .737-.574 1.337-1.28 1.337h-1.1c-.709 0-1.28-.597-1.28-1.337v-2.812H8.067v2.812c0 .737-.574 1.337-1.28 1.337H5.69c-.706 0-1.28-.597-1.28-1.337v-.114l-.011.002H3.3c-.709 0-1.28-.596-1.28-1.336V8.123c0-.736.574-1.336 1.28-1.336h1.098c.003 0 .005.003.011.003v-.115c0-.737.574-1.336 1.28-1.336zm11.275 1.336h-1.098v4.132l.002.02v2.145l-.002.02v4.134h1.098V15.7l-.003-.025V8.126c0-.011.003-.017.003-.025V6.675zm-11.27 0H5.696V17.12h1.098v-4c-.006-.047-.014-.098-.014-.148v-2.146c0-.05.008-.098.014-.148V6.675zm13.645 1.448h-1.095v7.55h1.095v-7.55zm-16.03 0h-1.1v7.55h1.098v-7.55zm11.28 2.703H8.072v2.146h7.613v-2.146z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDumbbellRegular;
