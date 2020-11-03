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

const IconBoxFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.235 20.008c0 .238-.176.448-.378.448H3.824c-.202 0-.376-.21-.376-.448V8.56c0-.238.174-.448.376-.448h5.044v2.462c0 .34.325.614.726.614h4.18c.4 0 .725-.275.725-.614l-.003-2.462h5.361c.202 0 .378.21.378.448v11.448zM4.843 3.546a.502.502 0 00.02-.143c0-.095.092-.173.204-.173h4.26l-.386 3.655H3.9l.944-3.339zm13.98-.143c0 .05.006.098.023.146l.966 3.333h-5.397l-.463-3.655h4.664c.115.003.207.078.207.176zm2.832 4.883a.533.533 0 00-.01-.23l-1.373-4.737c-.054-.734-.773-1.316-1.653-1.316H5.07c-.882 0-1.605.585-1.653 1.32L2.084 8.061c-.003.014 0 .025-.003.039a1.513 1.513 0 00-.078.465v11.448c0 .924.818 1.678 1.826 1.678h16.034c1.008 0 1.826-.754 1.826-1.678V8.566a1.744 1.744 0 00-.034-.28z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBoxFilled;