/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconIdCardLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.022 18.045V5.91a.444.444 0 00-.434-.454H3.41a.443.443 0 00-.434.454v12.135c0 .252.196.454.434.454h17.177a.446.446 0 00.434-.454zm-.434-13.451c.691 0 1.255.59 1.255 1.316v12.135c0 .725-.564 1.316-1.255 1.316H3.414c-.695 0-1.258-.59-1.258-1.316V5.91c0-.725.563-1.316 1.255-1.316h17.177zm-9.591 8.776a.42.42 0 01.409.431.42.42 0 01-.41.431H4.334a.422.422 0 01-.412-.431.42.42 0 01.409-.431h6.667zm-6.664-2.586a.42.42 0 01-.41-.431c0-.238.186-.432.41-.432h4.52a.42.42 0 01.41.432.42.42 0 01-.41.431h-4.52zm11.543-1.426c-.157.163-.19.465-.19.692 0 .224.033.527.19.687.154.154.434.187.644.187.21 0 .493-.033.647-.187.127-.13.194-.359.194-.687 0-.327-.065-.56-.194-.689-.156-.16-.437-.193-.647-.193-.21 0-.49.034-.644.19zm.642 2.426c-.524 0-.933-.145-1.213-.431-.294-.294-.443-.734-.443-1.305 0-.572.149-1.014.443-1.311.28-.286.692-.432 1.213-.432.523 0 .932.146 1.215.432.294.297.446.74.446 1.31 0 .572-.149 1.012-.446 1.306-.283.288-.692.431-1.215.431zm-2.118 2.61h4.24c-.01-.218-.064-.487-.246-.683-.23-.249-.596-.3-.865-.3h-2.023c-.269 0-.638.054-.862.3-.177.194-.233.465-.244.684zm3.129-1.848c.613 0 1.117.196 1.456.566.314.342.48.812.48 1.367v.577a.194.194 0 01-.188.199h-5.513a.194.194 0 01-.188-.2v-.576c0-.555.166-1.025.477-1.367.339-.373.843-.566 1.456-.566h2.02z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconIdCardLight;
