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

const IconOpticalFiberLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.994 2.156c3.14 0 5.574.813 7.238 2.418 1.725 1.663 2.602 4.162 2.602 7.423 0 6.437-3.403 9.837-9.84 9.837-6.434 0-9.838-3.4-9.838-9.835 0-6.434 3.404-9.843 9.838-9.843zm0 .56c-2.989 0-5.294.762-6.849 2.261-1.61 1.555-2.429 3.916-2.429 7.02 0 2.22.42 4.063 1.248 5.5l.038-.05.006-.005 3.325-3.283a.279.279 0 01.395.003l.465.47c.751-1.389 1.594-3.571 1.786-6.562a1.144 1.144 0 01-.61-.337c-.227-.238-.347-.56-.347-.95 0-.389.117-.71.347-.949.23-.238.538-.367.905-.367s.67.123.905.367.347.56.347.95c0 .39-.118.711-.347.95a1.18 1.18 0 01-.642.342l.003-.046c-.182 3.011-1.008 5.244-1.77 6.703l6.04-5.962a1.141 1.141 0 01-.206-.693c.009-.33.154-.639.435-.913.28-.275.588-.42.921-.429a1.2 1.2 0 01.902.373c.26.257.387.557.378.896-.008.33-.157.639-.434.913-.277.275-.588.42-.921.429h-.037c-.23 0-.443-.063-.636-.187l-5.955 5.881c1.45-.738 3.616-1.518 6.51-1.703.04-.264.157-.488.347-.672.244-.235.56-.347.95-.347.39 0 .711.117.95.347.237.23.366.538.366.905s-.123.67-.367.905c-.243.235-.557.347-.95.347-.391 0-.71-.118-.949-.347a1.158 1.158 0 01-.33-.582l.078-.007c-3.025.185-5.227 1.037-6.627 1.796l.49.496a.279.279 0 01-.003.395L6.33 19.928c1.461.894 3.36 1.346 5.665 1.346 2.989 0 5.294-.76 6.851-2.258C20.46 17.462 21.277 15.1 21.277 12s-.818-5.465-2.432-7.02c-1.557-1.5-3.862-2.263-6.851-2.263zM7.529 14.753l-3.13 3.087a.635.635 0 01-.147.118 6.812 6.812 0 001.608 1.657l.027-.036 3.244-3.201-.801-.813-.272-.274-.53-.538zm9.535-1.765c-.216 0-.378.053-.49.163a.548.548 0 00-.163.425v.014a.54.54 0 00.163.407c.112.109.274.162.49.162.215 0 .378-.053.49-.162a.547.547 0 00.162-.423c0-.182-.05-.32-.162-.423-.112-.104-.275-.163-.49-.163zM15.974 7.4c-.16.003-.314.081-.473.235-.16.154-.236.306-.238.46 0 .15.056.28.185.406.128.126.26.185.417.18.16-.004.314-.082.47-.236.157-.154.236-.306.239-.46.005-.15-.054-.28-.182-.406a.545.545 0 00-.418-.18zm-5.7-1.272a.549.549 0 00-.423.163c-.104.109-.163.274-.163.49 0 .216.054.378.163.49.104.107.232.16.406.163h.017a.553.553 0 00.423-.163c.106-.11.162-.274.162-.49 0-.216-.053-.378-.162-.49a.547.547 0 00-.423-.163z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOpticalFiberLight;