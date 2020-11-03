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

const IconDeviceLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.943 5.56a.406.406 0 01-.409-.404l.014-2.602a.406.406 0 01.412-.398h.003c.227.003.412.18.409.404l-.014 2.602a.41.41 0 01-.415.398zm-2.535.66l-1.16-1.142a.395.395 0 01.003-.569.42.42 0 01.583.003l1.16 1.143a.397.397 0 01-.003.568.424.424 0 01-.583-.002zm4.79.118a.41.41 0 01-.288-.117.395.395 0 01-.003-.569l1.16-1.14c.16-.16.42-.16.582-.003a.395.395 0 01.003.569l-1.16 1.143a.422.422 0 01-.294.117zm-9.07 1.83c-.24.226-.361.596-.361 1.103s.12.877.358 1.1c.233.22.608.329 1.115.329s.885-.11 1.12-.33c.242-.222.362-.592.362-1.099s-.123-.88-.361-1.104c-.236-.218-.61-.333-1.118-.333-.507.003-.882.115-1.115.333zm1.115 3.336c-.728 0-1.294-.185-1.686-.552-.406-.381-.614-.944-.614-1.678s.208-1.3.614-1.684c.392-.367.958-.554 1.686-.554.726 0 1.294.187 1.69.554.408.384.615.95.615 1.684s-.207 1.297-.616 1.68c-.395.365-.963.55-1.689.55zM20.974 19.4l.045-4.434c0-.499-.148-.913-.429-1.2-.392-.397-.994-.48-1.428-.48h-3.56c-.163 0-.418-.063-.533-.138-.154-.101-.31-.328-.31-.328L12.41 9.744v2.914l1.247 1.593v-.43c0-.222.185-.401.411-.401.227 0 .412.179.412.4v1.608c0 .008.006.014.006.025v.118c0 .067.003.134.003.207l-.006.485v.722h-.008l-.031 2.415h4.053v-3.163c0-.22.185-.4.412-.4.227 0 .412.18.412.4v3.16h1.652v.003zm-9.39-6.871V9.744L9.238 12.82s-.156.227-.31.328c-.115.075-.373.137-.533.137H4.84c-.434 0-1.037.084-1.429.482-.28.286-.428.7-.428 1.199l.044 4.434h1.656v-3.16c0-.221.185-.4.412-.4.227 0 .411.179.411.4v3.16h4.05l-.027-2.415H9.52v-.725l-.005-.482c0-.07.003-.137.003-.204v-.118l.002-.025v-1.608c0-.221.185-.4.412-.4.227 0 .412.179.412.4v.431l1.246-1.594v-.131h-.005zm9.597.683c.432.437.662 1.042.662 1.754l-.05 4.98c0 .14-.116.255-.261.255h-7.656a.259.259 0 01-.26-.255l.044-3.68v-.692L12 13.45l-1.659 2.12v.69l.045 3.683a.26.26 0 01-.26.255h-7.66a.261.261 0 01-.263-.255l-.048-4.98c0-.712.227-1.317.659-1.754.47-.476 1.17-.728 2.022-.728h2.807c.274 0 .54-.02.773-.134.143-.07.428-.359.428-.359l2.818-3.692.003-.005a.467.467 0 01.199-.143c.003 0 .022-.009.025-.009.028-.008.07-.008.115-.008a.42.42 0 01.118.017l.01.003a.483.483 0 00.194.134l.003.006c.003.003.003.003.006.003l.002.005v.003l2.815 3.689s.289.288.429.359c.233.114.501.134.773.134h2.804c.854 0 1.555.252 2.022.728zm-4.543-5.039c-.24.227-.364.597-.364 1.104 0 .504.123.876.361 1.098.236.218.61.327 1.12.327.51 0 .883-.109 1.116-.327.238-.224.358-.594.358-1.101s-.12-.88-.361-1.104c-.233-.218-.608-.33-1.115-.33-.504 0-.88.112-1.115.333zm-.569 2.782c-.409-.381-.619-.947-.619-1.681 0-.734.208-1.3.62-1.684.392-.367.96-.554 1.686-.554.725 0 1.294.185 1.686.554.406.381.613.947.613 1.681 0 .734-.207 1.3-.613 1.68-.392.368-.958.553-1.686.553-.726.002-1.294-.182-1.687-.55z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDeviceLight;