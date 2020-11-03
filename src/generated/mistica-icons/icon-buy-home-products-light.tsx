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

const IconBuyHomeProductsLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.63 19.089c.87 0 1.372.501 1.372 1.373 0 .87-.498 1.372-1.372 1.372-.872 0-1.373-.501-1.373-1.372 0-.872.501-1.373 1.373-1.373zm5.462 0c.871 0 1.372.501 1.372 1.373 0 .87-.498 1.372-1.372 1.372-.871 0-1.373-.501-1.373-1.372 0-.872.502-1.373 1.373-1.373zm-5.462.56c-.563 0-.813.25-.813.813s.25.812.813.812.812-.25.812-.812c0-.563-.25-.813-.812-.813zm5.462 0c-.563 0-.813.25-.813.813s.25.812.813.812.812-.25.812-.812c0-.563-.25-.813-.812-.813zM4.075 2.156c.588 0 1.16.185 1.608.524.456.342.759.82.854 1.347.057.32.265 1.552.514 3.045h3.338l3.571-3.753a.303.303 0 01.443 0l1.378 1.453v-.697c0-.168.137-.305.305-.305h1.639c.168 0 .305.137.305.305v3h3.524a.28.28 0 01.272.35c-.154.61-.446 1.784-.757 3.028-.208.84-.421 1.696-.59 2.369l-.094.38-.198.78c-.252.975-.616 1.69-1.106 2.183-.507.498-1.143.753-1.897.753H10.63c-.765 0-1.443-.255-1.956-.74-.546-.515-.899-1.263-1.053-2.226-.066-.415-.386-2.35-.727-4.401l-.172-1.029a825.1 825.1 0 00-.74-4.397 1.61 1.61 0 00-.638-.997 2.103 2.103 0 00-1.269-.412H2.436a.28.28 0 01-.28-.28.28.28 0 01.28-.28h1.639zm15.51 6.625a.305.305 0 01-.221.515H18.03v3.519c0 .54-.31.851-.851.851H11.17c-.54 0-.851-.31-.851-.851V9.296H8.985a.306.306 0 01-.22-.515l1.09-1.149h-2.71c.433 2.594.947 5.694 1.03 6.233.253 1.608 1.127 2.496 2.455 2.496h6.554c.608 0 1.098-.196 1.499-.597.414-.414.737-1.062.96-1.924.086-.326.31-1.232.572-2.279l.123-.491.062-.25.126-.504c.258-1.037.504-2.028.67-2.68l-2.699-.002 1.088 1.147zM14.18 3.974L10.893 7.43a.282.282 0 01-.175.186l-1.021 1.07h.927c.168 0 .305.137.305.305v3.824c0 .198.042.24.241.24h6.009c.199 0 .24-.042.24-.24V8.99c0-.168.138-.305.306-.305h.927l-1.148-1.213a.306.306 0 01-.084-.21V4.38h-1.028v1.157a.306.306 0 01-.527.21L14.18 3.974z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyHomeProductsLight;