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

const IconDocumentOtherLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.55 20.635V8.761h-2.546c-.974 0-1.81-.322-2.423-.918-.613-.606-.94-1.423-.94-2.384V2.985H5.824c-.18 0-.4.208-.4.381v5.76l.042 8.15-.042 3.368c0 .182.204.372.4.372H18.15c.204 0 .4-.182.4-.38zm-5.09-17.47v2.291c0 .728.239 1.35.698 1.787.451.445 1.098.686 1.85.686h2.321l-4.868-4.764zm5.878 4.742c.016.059.033.106.033.165v12.56c0 .653-.566 1.208-1.218 1.208H5.828c-.647 0-1.219-.563-1.219-1.208l.042-3.358L4.61 9.13V3.364c0-.63.583-1.208 1.219-1.208h7.504a.68.68 0 01.473.2l5.362 5.229c.087.09.137.207.17.322zm-4.135 7.555c0 .44-.31.753-.728.753a.718.718 0 01-.745-.737v-.016a.73.73 0 01.728-.746.738.738 0 01.745.746zm-2.742 0c0 .44-.32.753-.737.753a.722.722 0 01-.745-.737v-.016a.742.742 0 111.482 0zm-2.748 0c0 .44-.32.753-.737.753a.722.722 0 01-.745-.737v-.016c0-.415.328-.746.737-.746a.738.738 0 01.745.746z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDocumentOtherLight;