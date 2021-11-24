/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconNotConexionRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.642 19.59c.666-.698.997-1.387.986-2.048-.012-.636-.345-1.283-.984-1.921a4.046 4.046 0 00-.818-.645c-.537-.333-1.072-.45-1.599-.364-.549.093-1.1.415-1.644.955a4.708 4.708 0 00-.37.415.647.647 0 01-.176.148c-.41.233-.984.073-1.813-.493-.868-.596-1.874-1.568-2.552-2.249l-.078-.078c-.68-.681-1.655-1.684-2.25-2.552-.565-.826-.725-1.4-.495-1.81a.561.561 0 01.148-.176c.171-.137.272-.227.418-.37.54-.54.862-1.092.955-1.644.09-.527-.03-1.062-.356-1.586a3.808 3.808 0 00-.65-.832c-.641-.638-1.288-.972-1.924-.983-.68-.017-1.35.32-2.048.986a5.32 5.32 0 00-.58.698c-.652.944-.61 2.42.096 4.19.787 1.972 2.33 4.143 4.46 6.278l.021.02.07.07c2.14 2.14 4.317 3.688 6.295 4.475 1.75.698 3.257.74 4.16.118a.266.266 0 01.055-.042c.146-.104.457-.336.673-.56zm.854-4.824c.868.869 1.32 1.793 1.336 2.754.02.989-.426 1.966-1.32 2.902a6.826 6.826 0 01-.856.722l-.023.014c-.008.009-.02.014-.028.023-.63.434-1.412.655-2.322.655-.902 0-1.9-.218-2.975-.644-2.129-.849-4.442-2.487-6.697-4.742l-.062-.065c-.005-.003-.011-.01-.017-.017-2.252-2.249-3.89-4.565-4.74-6.694-.86-2.157-.856-4.037.01-5.292.134-.184.43-.599.761-.913.936-.896 1.9-1.313 2.902-1.319.958.017 1.885.468 2.754 1.336.341.342.624.7.834 1.065.477.767.65 1.582.51 2.406-.134.8-.568 1.571-1.291 2.294a5.48 5.48 0 01-.26.246c.05.118.145.303.33.577.538.785 1.462 1.734 2.11 2.381l.078.079c.647.644 1.596 1.568 2.383 2.109.272.185.457.28.575.33.075-.086.15-.165.249-.26.72-.72 1.493-1.157 2.294-1.291.826-.14 1.641.036 2.423.518a5.32 5.32 0 011.042.826zM16.77 3.612c-2.507 0-3.624 1.118-3.624 3.628 0 2.507 1.117 3.624 3.624 3.624 2.51 0 3.628-1.117 3.628-3.624.003-2.51-1.118-3.63-3.628-3.628zm0 8.46c-3.053 0-4.831-1.541-4.831-4.832 0-3.294 1.778-4.835 4.831-4.835 3.054 0 4.838 1.543 4.838 4.835 0 3.29-1.784 4.832-4.838 4.832zM14.7 9.307a.602.602 0 010-.852l1.216-1.215L14.7 6.024a.602.602 0 11.852-.852l1.216 1.216 1.22-1.221a.602.602 0 11.852.851L17.62 7.24l1.22 1.22a.605.605 0 01-.854.855L16.77 8.091l-1.215 1.216a.605.605 0 01-.855 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNotConexionRegular;
