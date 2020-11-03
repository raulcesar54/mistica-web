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

const IconLoudspeakerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.563 5.622a.98.98 0 01.392.79v11.202a.98.98 0 01-.39.787.904.904 0 01-.804.143L10.304 16.9l-.198.632a.801.801 0 01-.403.482.782.782 0 01-.625.056l-2.269-.711a.822.822 0 01-.538-1.028l.185-.59-3.21-.966a.535.535 0 01-1.056-.123V9.37a.535.535 0 011.056-.122L15.76 5.479a.894.894 0 01.802.143zm2.938 9.854l1.507 1.507a.548.548 0 01-.773.773l-1.507-1.507a.548.548 0 01.773-.773zM15.885 6.56L3.294 10.35v3.322l12.59 3.793V6.56zm-8.418 9.617l-.07.224 1.748.549.07-.224-1.748-.55zm13.869-4.944a.545.545 0 110 1.092H19.15a.545.545 0 110-1.092h2.185zm-.32-5.496a.548.548 0 010 .773L19.47 8.056a.545.545 0 01-.773 0 .548.548 0 010-.773l1.546-1.546a.548.548 0 01.773 0z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLoudspeakerRegular;