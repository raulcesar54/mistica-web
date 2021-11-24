/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconBandAidRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.016 19.018c2.06-2.058 2.126-4.053.208-6.103-.048-.056-.082-.084-.113-.115l-.086-.084-.787-.787-6.309 6.308.311.31c.112.127.205.217.3.306l.174.168c1.033 1.034 2.073 1.566 3.095 1.583 1.028.011 2.137-.513 3.207-1.586zm-7.952-1.644l6.305-6.31-4.61-4.611-6.306 6.31 4.61 4.611zM5.4 11.707l.188.188 6.308-6.31-.734-.735c-1.025-.991-2.037-1.49-3.048-1.49-1.047 0-2.092.532-3.154 1.594-2.123 2.123-2.123 4.185 0 6.308l.168.174c.09.098.177.19.272.271zm14.74.393c2.341 2.498 2.26 5.269-.255 7.784-1.295 1.294-2.647 1.95-4.02 1.95h-.076c-1.35-.023-2.675-.678-3.938-1.942l-.154-.148c-.123-.12-.247-.238-.353-.359l-.683-.683c-.012-.009-.026-.014-.034-.023L5.15 13.2c-.009-.008-.012-.02-.017-.028l-.566-.565c-.095-.079-.21-.2-.325-.32l-.148-.154c-1.266-1.266-1.92-2.59-1.944-3.94-.026-1.404.627-2.782 1.944-4.099 2.552-2.555 5.367-2.591 7.93-.112l1.157 1.157c.005.005.014.008.02.011l5.475 5.48a.061.061 0 00.009.013l1.269 1.269c.064.062.126.123.184.188zm-8.64-.63a.62.62 0 01.88 0 .62.62 0 010 .879.62.62 0 01-.88 0 .626.626 0 010-.88zm-.551 2.845a.62.62 0 01.88 0 .62.62 0 010 .88.62.62 0 01-.88 0 .626.626 0 010-.88zm4.347-3.465a.62.62 0 010 .88.62.62 0 01-.88 0 .62.62 0 010-.88.62.62 0 01.88 0zm-6.58 1.21a.62.62 0 01.88 0 .62.62 0 010 .88.62.62 0 01-.88 0 .62.62 0 010-.88zm3.468-3.467a.62.62 0 01.88 0 .62.62 0 010 .88.62.62 0 01-.88 0 .62.62 0 010-.88z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBandAidRegular;
