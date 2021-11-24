/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowsLeftAndRightLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M17.451 5.319L22 10.193l-4.54 4.813c-.325.332-.841.414-1.321.217-.452-.192-.728-.581-.728-1.02v-1.806H7.885V9.804c0-.156-.144-.283-.284-.34-.168-.074-.404-.082-.536.05l-4.053 4.35 4.065 4.309c.128.13.364.114.536.04.136-.057.284-.184.284-.34V15.33h4.121c.196 0 .356.164.356.364 0 .201-.16.365-.356.365H8.593v1.806c0 .439-.284.828-.728 1.02a1.26 1.26 0 01-.532.115c-.3 0-.584-.107-.784-.315L2 13.863l4.54-4.866c.325-.332.841-.414 1.321-.217.452.192.728.582.728 1.02v1.864h7.526v2.535c0 .156.144.283.292.34.16.066.404.082.536-.049L21 10.189l-4.065-4.358c-.12-.123-.364-.115-.524-.041-.136.057-.292.184-.292.34v2.593H9.485a.361.361 0 01-.356-.365c0-.2.16-.365.356-.365h5.918V6.13c0-.439.284-.828.728-1.02.476-.201.996-.123 1.32.209zm-3.3 9.638c.397 0 .72.33.72.737a.729.729 0 01-.72.738.729.729 0 01-.72-.738c0-.407.322-.737.72-.737z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.865 13.634a.533.533 0 01-.224-.05.485.485 0 01-.283-.443l-.02-2.244-3.389.005a.962.962 0 01-.96-.96v-2.46c0-.53.43-.96.96-.96l3.392-.003.02-2.247a.49.49 0 01.283-.44.515.515 0 01.569.084l4.47 4.429c.093.078.151.19.168.31a.488.488 0 01-.168.43l-4.473 4.414-.02.017a.526.526 0 01-.325.118zm-.468-3.303c.27 0 .493.216.502.485v.005l.017 2.177 4.341-4.286-4.341-4.308-.017 2.176v.006a.503.503 0 01-.502.484h-.008l-3.44.003a.4.4 0 00-.4.4v2.46a.4.4 0 00.4.4l3.44-.005a.01.01 0 00.008.003zm-9.254 9.852a.51.51 0 01-.342-.135l-4.474-4.437a.498.498 0 01-.168-.31.488.488 0 01.168-.43l4.474-4.414c.005-.006.014-.011.02-.017a.515.515 0 01.548-.064.485.485 0 01.283.442l.02 2.244 3.39-.006c.529 0 .96.432.96.961v2.46a.96.96 0 01-.96.96l-3.393.003-.02 2.25a.491.491 0 01-.282.44.488.488 0 01-.224.053zM2.75 15.24l4.342 4.308.017-2.176v-.006a.501.501 0 01.51-.484l3.44-.003a.4.4 0 00.4-.4v-2.46a.4.4 0 00-.4-.4l-3.44.005a.501.501 0 01-.51-.484v-.006l-.017-2.177L2.75 15.24z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowsLeftAndRightLight;
