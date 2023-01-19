/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSupportAgentFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.739 11.642h4.417c1.217 0 2.21-.964 2.207-2.144v-.204c0-3.884-3.184-7.157-7.099-7.289-2.016-.072-3.93.636-5.382 1.992C5.43 5.354 4.63 7.182 4.63 9.138c0 .396.33.716.738.716a.73.73 0 00.738-.716c0-1.564.644-3.028 1.803-4.117 1.159-1.084 2.689-1.648 4.306-1.596 3.13.108 5.68 2.74 5.68 5.865v.204a.73.73 0 01-.739.716h-4.417a.73.73 0 00-.739.716.73.73 0 00.739.716z"
                />
                <path
                    fill={fillColor}
                    d="M12.739 12.715h2.206c2.66.788 4.426 2.692 4.422 5.024V22H4.63v-4.253c0-2.328 1.728-4.184 4.384-4.968-1.101-.852-1.806-2.16-1.806-3.629 0-1.252.515-2.388 1.353-3.224l.03-.034.031-.034c.095-.092.19-.172.285-.252.01-.011.022-.02.032-.03.01-.007.018-.015.026-.022.01-.009.022-.017.033-.025a7.91 7.91 0 01.338-.24 6 6 0 01.396-.232 7.362 7.362 0 01.42-.192 9.594 9.594 0 01.403-.14l.039-.012a3.99 3.99 0 01.441-.104c.006 0 .011-.002.017-.004.107-.021.225-.036.338-.05l.037-.006c.013-.001.026-.004.04-.007a.646.646 0 01.05-.009A4.81 4.81 0 0112 4.51c.109 0 .21.007.317.015l.022.001c.078.004.156.008.235.02l.06.008a4.885 4.885 0 01.45.077h.005c2.058.487 3.626 2.34 3.696 4.516h-4.046c-1.015 0-1.84.8-1.84 1.784 0 .985.825 1.785 1.84 1.785z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.625 3.712c-1.07-1.033-2.624-1.557-4.616-1.557-1.79 0-3.232.423-4.283 1.26-1.1.877-1.756 2.188-1.952 3.894a.56.56 0 001.112.129c.16-1.403.678-2.46 1.535-3.146.846-.672 2.053-1.017 3.583-1.017 1.691 0 2.983.418 3.84 1.244.888.852 1.336 2.174 1.339 3.927l-.009.544v.008c0 .185-.03.432-.17.574-.113.112-.3.168-.552.168h-2.53c-.157-.232-.428-.367-.781-.367-.577 0-.939.359-.939.933 0 .283.084.513.247.678.162.165.403.255.689.255.286 0 .527-.087.689-.255a.702.702 0 00.098-.123h2.518c.56 0 1.011-.165 1.34-.49.327-.325.503-.799.503-1.364l.009-.544v-.008c.008-2.076-.558-3.67-1.67-4.743zm3.846 18.138H3.538a.562.562 0 01-.56-.56v-1.64c0-1.565.49-2.904 1.42-3.87 1.012-1.05 2.513-1.605 4.34-1.605h6.534c1.827 0 3.328.554 4.34 1.605.93.966 1.42 2.305 1.42 3.87v1.64c0 .31-.25.56-.56.56z"
                />
                <path
                    fill={fillColor}
                    d="M12.051 11.376c.275.278.65.423 1.09.423.414 0 .776-.131 1.042-.38h1.563c-.712 1.128-1.978 1.725-3.731 1.725-2.838 0-4.4-1.563-4.4-4.4 0-2.838 1.562-4.401 4.4-4.401 2.837 0 4.4 1.563 4.4 4.4 0 .149-.005.294-.014.437h-2.23c-.263-.238-.618-.367-1.03-.367-.437 0-.807.143-1.082.415-.274.272-.417.644-.417 1.078 0 .429.143.799.41 1.07z"
                />
            </svg>
        );
    }
};

export default IconSupportAgentFilled;
