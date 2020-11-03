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

const IconRatingLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.725 18.692c.242 0 .441-.19.441-.427V8.587H2.834v9.68c0 .237.199.428.44.428l17.451-.003zM3.275 5.31a.435.435 0 00-.441.427v2.04h18.332v-2.04a.435.435 0 00-.44-.427H3.274zm17.45-.811c.703 0 1.275.555 1.275 1.235v12.53c0 .68-.572 1.235-1.275 1.235H3.275C2.572 19.503 2 18.948 2 18.268V5.738c0-.683.572-1.235 1.275-1.235 0-.003 17.45-.003 17.45-.003zM6.257 7.166a.572.572 0 01-.58-.563c0-.31.259-.563.58-.563.322 0 .58.25.58.563 0 .31-.258.563-.58.563zm1.742 0a.57.57 0 01-.58-.56v-.003c0-.31.258-.563.58-.563.321 0 .58.25.58.563 0 .31-.259.563-.58.563zm-3.48 0a.572.572 0 01-.581-.563c0-.31.259-.563.58-.563a.57.57 0 01.581.563c0 .31-.259.563-.58.563zm8.537 6.207l.595-.586-.8-.117a.7.7 0 01-.512-.367L12 11.61l-.339.688a.686.686 0 01-.518.373l-.796.117.592.583c.15.148.222.376.187.58l-.133.795.68-.362a.691.691 0 01.637-.005l.692.367-.137-.794a.691.691 0 01.19-.578zm.93-1.19a.527.527 0 01.424.353.53.53 0 01-.128.552l-.751.738c-.003.002-.006.01-.006.02l.177 1.041a.524.524 0 01-.222.526.524.524 0 01-.55.032l-.924-.493L12 14.95c-.003 0-.003 0-.003.002l-.928.493a.544.544 0 01-.25.062.504.504 0 01-.299-.094.524.524 0 01-.222-.526l.177-1.042c0-.008-.003-.017-.006-.02l-.748-.737a.529.529 0 01-.129-.552.527.527 0 01.425-.352l1.035-.151c.006 0 .009-.006.012-.009l.464-.947a.53.53 0 01.956 0l.464.947c.002.003.005.009.011.009l1.027.15zm4.91 1.19l.594-.586-.8-.117a.7.7 0 01-.512-.367l-.339-.694-.335.688a.686.686 0 01-.518.373l-.797.117.592.583a.67.67 0 01.188.58l-.134.795.68-.362a.691.691 0 01.638-.005l.691.367-.134-.794a.687.687 0 01.185-.578zm.93-1.19a.534.534 0 01.299.905l-.752.738c-.002.002-.005.01-.005.02l.176 1.041a.524.524 0 01-.222.526.524.524 0 01-.55.032l-.927-.493-.006-.002c-.002 0-.002 0-.002.002l-.925.493a.544.544 0 01-.25.062.504.504 0 01-.3-.094.524.524 0 01-.221-.526l.176-1.042c0-.008-.003-.017-.006-.02l-.748-.737a.529.529 0 01-.128-.552.527.527 0 01.424-.352l1.036-.151c.005 0 .008-.006.011-.009l.464-.947a.53.53 0 01.956 0l.464.947c.003.003.006.009.011.009l1.025.15zm-12.61 1.19l.595-.586-.8-.117a.7.7 0 01-.512-.367l-.338-.694-.34.688a.686.686 0 01-.517.373l-.797.117.592.583a.67.67 0 01.188.58l-.137.795.68-.362a.691.691 0 01.638-.005l.691.367-.136-.794a.702.702 0 01.193-.578zm.93-1.19a.527.527 0 01.425.353.53.53 0 01-.128.552l-.751.74c-.006.003-.009.012-.006.02l.176 1.042a.524.524 0 01-.222.526.524.524 0 01-.549.032l-.925-.493c-.003 0-.003-.003-.005-.003-.003 0-.003 0-.003.003l-.928.493a.544.544 0 01-.25.062.532.532 0 01-.524-.62l.176-1.042a.044.044 0 00-.005-.02l-.749-.737a.529.529 0 01-.128-.552.527.527 0 01.424-.353l1.036-.15c.006 0 .009-.006.011-.009l.464-.948a.53.53 0 01.956 0l.464.948c.003.003.006.009.012.009-.006-.003 1.03.148 1.03.148z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconRatingLight;