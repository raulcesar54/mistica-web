/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconProcessLoadingRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 22a.74.74 0 01-.74-.74v-2.964a.74.74 0 011.48 0v2.964A.74.74 0 0112 22zm0-15.556a.74.74 0 01-.74-.74V2.74a.74.74 0 011.48 0v2.964a.74.74 0 01-.74.74zm3.556 14.852a.733.733 0 01-.668-.444l-1.148-2.74a.751.751 0 01.408-.964.751.751 0 01.964.408l1.148 2.74a.751.751 0 01-.408.964c-.112 0-.224.036-.296.036zm3-2a.739.739 0 01-.52-.224l-2.112-2.112a.715.715 0 010-1.036.715.715 0 011.036 0l2.112 2.112a.715.715 0 010 1.036.714.714 0 01-.516.224zm2-3c-.112 0-.184 0-.296-.076l-2.74-1.144a.751.751 0 01-.408-.964.751.751 0 01.964-.408l2.74 1.148a.751.751 0 01.408.964.714.714 0 01-.668.48zM6.184 10.332c-.112 0-.184 0-.296-.076l-2.74-1.148a.751.751 0 01-.408-.964.751.751 0 01.964-.408l2.74 1.148a.751.751 0 01.408.964.712.712 0 01-.668.484zM21.26 12.74h-2.964a.74.74 0 010-1.48h2.964a.74.74 0 010 1.48zm-15.556 0H2.74a.74.74 0 010-1.48h2.964a.74.74 0 010 1.48zm12.112-2.408a.733.733 0 01-.668-.444.751.751 0 01.408-.964l2.74-1.148a.751.751 0 01.964.408.751.751 0 01-.408.964l-2.74 1.148c-.112 0-.188.036-.296.036zM3.444 16.296a.733.733 0 01-.668-.444.751.751 0 01.408-.964l2.74-1.148a.751.751 0 01.964.408.751.751 0 01-.408.964L3.74 16.26c-.112 0-.184.036-.296.036zm13-8a.739.739 0 01-.52-.224.715.715 0 010-1.036l2.112-2.112a.715.715 0 011.036 0 .715.715 0 010 1.036L16.96 8.072a.707.707 0 01-.516.224zm-11 11a.739.739 0 01-.52-.224.715.715 0 010-1.036L7 15.96a.715.715 0 011.036 0 .715.715 0 010 1.036L5.96 19.072a.707.707 0 01-.516.224zm8.964-12.372c-.112 0-.184 0-.296-.076a.751.751 0 01-.408-.964l1.148-2.74a.751.751 0 01.964-.408.751.751 0 01.408.964l-1.148 2.74a.712.712 0 01-.668.484zM8.444 21.296c-.112 0-.184 0-.296-.076a.751.751 0 01-.408-.964l1.148-2.74a.751.751 0 01.964-.408.751.751 0 01.408.964l-1.148 2.74c-.076.3-.372.484-.668.484z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M12 20.639c5.731 0 8.639-2.905 8.639-8.633 0-5.731-2.905-8.639-8.639-8.639-5.728 0-8.633 2.908-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zM12 2.16c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84C2.16 5.563 5.563 2.16 12 2.16zm.045 2.042c.333 0 .605.272.605.605v3.025a.604.604 0 11-1.21 0V4.807a.608.608 0 01.605-.605zm-3.61 7.76a.606.606 0 01-.606.604H4.804a.604.604 0 110-1.21H7.83a.606.606 0 01.606.605zm.162 2.534a.605.605 0 01.854.854l-2.137 2.138a.604.604 0 01-.851.003l-.003-.003a.605.605 0 010-.855l2.137-2.137zm3.364 1.076c.333 0 .602.271.602.605v3.022a.602.602 0 01-1.204 0v-3.022c0-.334.269-.605.602-.605zm3.39-1.014l2.137 2.137a.604.604 0 01-.852.854l-2.14-2.14a.603.603 0 01-.033-.854.603.603 0 01.854-.034l.033.037zm3.848-3.115a.602.602 0 010 1.204h-3.025a.602.602 0 010-1.204h3.025zm-4.215-1.756a.606.606 0 01-.429-1.031l2.137-2.14a.605.605 0 01.855.854l-2.138 2.14a.604.604 0 01-.425.177z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconProcessLoadingRegular;
