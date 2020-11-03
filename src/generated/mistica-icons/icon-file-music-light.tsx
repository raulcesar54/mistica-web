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

const IconFileMusicLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.171 21.016c.208 0 .4-.185.4-.378V8.758h-2.543c-.972 0-1.81-.316-2.423-.915-.616-.603-.94-1.426-.94-2.384V2.985h-6.82c-.182 0-.4.205-.4.379v17.274c0 .188.201.378.4.378H18.17zM18.36 7.93l-4.877-4.764v2.291c0 .728.238 1.347.692 1.79.457.445 1.098.683 1.852.683h2.333zm1-.016c.022.05.034.103.034.162v12.563c0 .653-.558 1.205-1.222 1.205H5.846c-.65 0-1.221-.564-1.221-1.205V3.361c0-.63.583-1.205 1.221-1.205h7.502c.179 0 .347.07.476.194l5.361 5.238a.646.646 0 01.174.325zm-5.241 10.913c.42-.009.916-.185.916-.978 0-.795-.501-.972-.922-.983h-.117c-.41.003-.902.176-.902.978 0 .8.496.977.913.983h.112zM10.942 11.4l4.092 1.123v-.753l-4.092-1.12v.75zm-1.734 5.375c.417-.005.916-.182.916-.974 0-.796-.502-.972-.922-.984l-.12-.002c-.41.002-.9.179-.9.977 0 .804.496.98.914.986l.112-.003zm6.095-5.792c.308.033.549.3.549.619v6.246c0 1.308-.927 1.79-1.72 1.804h-.14c-.793-.011-1.72-.493-1.72-1.812 0-1.322.922-1.796 1.712-1.804h.142c.303.008.622.081.905.243v-2.904l-4.092-1.12-.014 3.688c-.07 1.19-.944 1.645-1.706 1.656h-.135c-.798-.011-1.725-.493-1.725-1.812 0-1.323.921-1.796 1.711-1.804l.149.002c.3.009.616.084.896.244v-3.86c0-.344.278-.625.62-.625l.106.014 4.462 1.225z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFileMusicLight;