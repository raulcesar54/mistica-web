/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconShoppingCartRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.076 17.36c-.036 0-.072 0-.104.004-.016 0-.036-.004-.052-.004H8.548l-.632-2.472h11.432L22 4.312H5.212l-.132-.524a2.118 2.118 0 00-2.052-1.596h-.324a.705.705 0 000 1.408h.324c.32 0 .6.22.68.532L7.12 17.46a2.296 2.296 0 00-1.64 2.196c0 1.268 1.04 2.292 2.316 2.292 1.276 0 2.316-1.028 2.316-2.292 0-.312-.064-.612-.18-.884h6.004c-.116.272-.18.572-.18.884 0 1.268 1.04 2.292 2.316 2.292a2.3 2.3 0 002.316-2.292 2.305 2.305 0 00-2.312-2.296zm2.112-11.64l-1.94 7.764H7.556L5.572 5.72h14.616zM8.444 20.268a.905.905 0 01-.644.268c-.5 0-.908-.396-.908-.88 0-.236.092-.452.26-.62a.891.891 0 01.644-.268c.5 0 .908.396.908.88a.843.843 0 01-.26.62zm10.276 0a.891.891 0 01-.644.268c-.5 0-.908-.396-.908-.88 0-.236.092-.452.26-.62a.891.891 0 01.644-.268c.5 0 .908.396.908.88a.828.828 0 01-.26.62z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M16.479 17.042h-6.008c-.838 0-1.58-.283-2.149-.815-.59-.558-.975-1.361-1.137-2.39-.135-.851-1.454-8.523-1.636-9.54-.12-.672-.82-1.177-1.633-1.177H2.563a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h1.353c1.367 0 2.518.882 2.737 2.1.058.323.23 1.309.44 2.536h14.025a.56.56 0 01.537.72c-.462 1.552-1.703 5.764-1.901 6.535-.267 1.025-.653 1.778-1.183 2.308-.56.56-1.263.843-2.092.843zM7.286 7.756c.428 2.496.927 5.4 1.005 5.908.124.776.39 1.361.799 1.748.361.339.823.51 1.38.51h6.009c.683 0 1.653-.239 2.188-2.311.187-.723 1.179-4.096 1.7-5.855H7.286zm3.185 13.93c-.502 0-.902-.143-1.194-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.23.292-.28.695-.422 1.194-.422.498 0 .902.143 1.193.423.305.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.291.28-.692.422-1.193.422zm0-2.185c-.41 0-.533.124-.533.533 0 .409.124.532.533.532.409 0 .532-.123.532-.532 0-.41-.126-.533-.532-.533zm5.462 2.185c-.502 0-.902-.143-1.194-.423-.305-.294-.459-.706-.459-1.23 0-.523.154-.935.46-1.23.29-.28.694-.422 1.193-.422.498 0 .902.143 1.193.423.303.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.291.28-.692.422-1.193.422zm0-2.185c-.41 0-.532.124-.532.533 0 .409.123.532.532.532.409 0 .532-.123.532-.532 0-.41-.126-.533-.532-.533z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShoppingCartRegular;
