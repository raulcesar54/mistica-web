/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconShareRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M18.296 15.496a3.692 3.692 0 00-2.903 1.424l-6.114-3.44a3.84 3.84 0 00-.099-2.284l6.204-3.14a3.683 3.683 0 002.912 1.435c2.04 0 3.704-1.684 3.704-3.75S20.337 2 18.296 2c-2.04 0-3.704 1.684-3.704 3.75 0 .336.046.663.129.97L8.39 9.924a3.673 3.673 0 00-2.687-1.176C3.664 8.748 2 10.432 2 12.498s1.663 3.75 3.704 3.75a3.692 3.692 0 002.903-1.424l6.114 3.44a3.851 3.851 0 00-.129.986c0 2.066 1.663 3.75 3.704 3.75C20.336 23 22 21.316 22 19.25s-1.663-3.754-3.704-3.754zm0-11.997c1.224 0 2.223 1.008 2.223 2.25 0 1.244-.995 2.252-2.223 2.252-1.228 0-2.223-1.008-2.223-2.251 0-1.243.995-2.25 2.223-2.25zM5.704 14.75c-1.224 0-2.223-1.008-2.223-2.251 0-1.239.995-2.25 2.223-2.25 1.228 0 2.223 1.007 2.223 2.25 0 1.239-.995 2.25-2.223 2.25zm12.592 6.748c-1.223 0-2.223-1.008-2.223-2.251 0-1.243.995-2.25 2.223-2.25 1.228 0 2.223 1.007 2.223 2.25s-1 2.25-2.223 2.25z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.843 2.014c3.135 0 5.563.812 7.227 2.415 1.726 1.663 2.602 4.156 2.602 7.414s-.876 5.75-2.602 7.415c-1.664 1.602-4.095 2.414-7.227 2.414-3.132 0-5.563-.812-7.227-2.414-1.725-1.664-2.602-4.157-2.602-7.415 0-3.255.874-5.75 2.602-7.414 1.661-1.603 4.093-2.415 7.227-2.415zm0 1.123c-2.832 0-5.003.706-6.448 2.101-1.499 1.443-2.258 3.667-2.258 6.608s.76 5.162 2.258 6.608c1.445 1.395 3.616 2.1 6.448 2.1 2.832 0 5.003-.705 6.448-2.1 1.499-1.443 2.258-3.667 2.258-6.608s-.76-5.163-2.258-6.608c-1.445-1.395-3.616-2.1-6.448-2.1zm3.207 2.824c.71 0 1.306.21 1.723.605.448.426.675 1.033.675 1.804 0 .736-.21 1.327-.624 1.75-.42.432-1.034.659-1.776.659-.743 0-1.356-.227-1.776-.659a2.028 2.028 0 01-.174-.204l-2.647 1.325c.036.188.053.39.053.602 0 .216-.017.418-.053.608l2.644 1.322c.067-.092.146-.18.23-.26.414-.395 1.011-.605 1.723-.605.711 0 1.308.21 1.734.599.448.426.675 1.034.675 1.804 0 .737-.21 1.328-.625 1.75-.42.432-1.034.659-1.776.659s-1.356-.227-1.776-.658c-.414-.423-.625-1.012-.625-1.751 0-.174.014-.339.037-.496l-2.695-1.347c-.036.042-.07.084-.109.123-.42.431-1.034.658-1.776.658s-1.356-.227-1.776-.658c-.414-.423-.625-1.011-.625-1.75 0-.771.227-1.379.676-1.805.414-.395 1.014-.605 1.722-.605.709 0 1.306.21 1.723.605.059.056.115.118.165.18L12.69 8.87a3.2 3.2 0 01-.036-.501c0-.77.227-1.378.675-1.804.414-.395 1.01-.605 1.722-.605zm-.002 8.067c-.874 0-1.28.409-1.28 1.289 0 .437.103.761.305.969.207.213.535.319.975.319.44 0 .767-.106.974-.32.202-.207.306-.531.306-.968 0-.88-.406-1.289-1.28-1.289zM8.1 10.555c-.874 0-1.28.409-1.28 1.288 0 .437.103.762.305.97.207.212.535.319.975.319.44 0 .767-.107.975-.32a.923.923 0 00.176-.263.322.322 0 01.023-.05c.07-.18.106-.398.106-.656 0-.246-.03-.454-.095-.627l-.009-.014a.43.43 0 01-.03-.076c-.185-.387-.56-.571-1.146-.571zm6.947-3.471c-.874 0-1.28.409-1.28 1.289 0 .437.103.761.305.969.207.213.535.32.975.32.44 0 .767-.107.974-.32.202-.208.306-.535.306-.97 0-.879-.406-1.288-1.28-1.288z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconShareRegular;
