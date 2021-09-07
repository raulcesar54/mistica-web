/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

type Props = {
    color?: string;
    size?: string | number;
};

const IconNeuralNetworkHumanRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.478 9.627a.417.417 0 01-.832 0c0-.226.187-.409.417-.409.087 0 .165.034.235.082.017.02.026.045.045.061.017.014.037.023.053.034a.403.403 0 01.082.232m7.044 5.995l-.01 4.835H9.454V18.21c-3.224 0-2.975-1.706-2.975-1.706l-.033-2.277-2.356-.614a10.53 10.53 0 001.636-2.21c.39-.711.641-1.493.689-2.3.196-3.375 1.944-5.232 4.874-5.73v3.1L9.693 8.11a1.684 1.684 0 00-.63-.123c-.919 0-1.664.734-1.664 1.639 0 .904.745 1.641 1.664 1.641.916 0 1.664-.737 1.664-1.641 0-.233-.05-.454-.14-.656l1.594-1.633h1.75c.132.361.384.664.715.86l-1.13 3.067c-.834.087-1.49.776-1.49 1.625 0 .905.746 1.641 1.664 1.641a1.67 1.67 0 001.541-1.025h3.583a4.97 4.97 0 01-2.292 2.118m-1.03-8.42a.412.412 0 01-.415-.41c0-.226.188-.408.415-.408.23 0 .417.185.417.409a.413.413 0 01-.417.409m-1.804 5.274c.23 0 .414.185.414.412a.412.412 0 01-.414.409.412.412 0 01-.415-.409c0-.227.185-.409.415-.412m5.952-2.714c0 .947-.123 1.776-.339 2.51h-4.073a1.65 1.65 0 00-.51-.664l1.191-3.233c.717-.185 1.25-.82 1.25-1.582 0-.905-.746-1.642-1.665-1.642a1.66 1.66 0 00-1.507.955H12.54V3.244c.16-.006.317-.014.482-.014 4.18 0 6.62 2.084 6.62 6.532M13.014 2C8.22 2 5.433 4.499 5.17 9.03a4.243 4.243 0 01-.54 1.785 9.402 9.402 0 01-1.446 1.953 1.216 1.216 0 00-.29 1.182c.122.42.456.742.882.851l1.44.375.019 1.289a2.45 2.45 0 00.627 1.748c.524.594 1.311.975 2.35 1.137v1.107c0 .677.558 1.23 1.247 1.23h7.053a1.236 1.236 0 001.247-1.228l.01-4.112c1.556-.969 3.121-2.87 3.121-6.585C20.887 4.829 18.02 2 13.015 2"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNeuralNetworkHumanRegular;