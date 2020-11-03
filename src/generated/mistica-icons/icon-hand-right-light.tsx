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

const IconHandRightLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.168 19.392c-.748 0-1.33-.193-1.728-.58-.398-.386-.62-1.017-.62-1.779V9.246c0-.19.166-.341.586-.535.32-.148 1.378-.666 2.496-1.218 1.866-.919 4.188-2.062 5.636-2.74.501-.235.989-.168 1.266.18a.986.986 0 01.218.624c0 .25-.09.499-.254.703-.208.26-.522.504-1.048.813a.811.811 0 00-.373.916.824.824 0 00.793.599h7.375c1.21.078 1.348.787 1.348 1.317 0 .862-.462 1.319-1.34 1.319h-2.901a.818.818 0 00-.82.812c0 .073.01.149.03.219.04.137.059.294.059.465 0 .627-.255 1.02-.76 1.162a.819.819 0 00-.554 1.04c.05.15.076.327.076.52 0 .63-.258 1.023-.768 1.166a.82.82 0 00-.504.4.806.806 0 00-.056.639c.05.151.076.328.076.518 0 .812-.418 1.224-1.241 1.224l-6.992.003zm9.059-1.224c0-.283-.04-.544-.118-.773.857-.238 1.367-.941 1.367-1.947 0-.283-.042-.543-.117-.776.848-.24 1.352-.941 1.352-1.944 0-.246-.03-.476-.09-.683h2.903c1.333 0 2.162-.818 2.162-2.135 0-1.266-.77-2.042-2.117-2.129h-.042l-7.387-.005c.577-.34.98-.645 1.272-1.009a1.95 1.95 0 00.431-1.207c0-.403-.132-.804-.398-1.132-.52-.65-1.409-.812-2.26-.409-1.448.681-3.776 1.827-5.647 2.745a178.19 178.19 0 01-2.476 1.21C2.742 8.12 2 8.465 2 9.247v7.787c0 .984.308 1.821.866 2.362.554.538 1.33.81 2.3.81h6.996c1.275 0 2.065-.78 2.065-2.037z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandRightLight;