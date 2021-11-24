/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconOpticalFiberLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M9.943 21.274c0 .4-.31.726-.69.726-.38 0-.69-.326-.69-.726 0-.4.31-.727.69-.727.38 0 .69.326.69.727zM21 7.819c0 .801-.62 1.453-1.38 1.453-.256 0-.49-.08-.699-.205l-4.714 4.963.477.503a1.134 1.134 0 010 1.54l-3.799 4a.337.337 0 01-.243.107.337.337 0 01-.244-.107.37.37 0 010-.512l3.8-4a.38.38 0 000-.512L8.603 9.165a.335.335 0 00-.487 0l-5.528 5.82a.327.327 0 01-.487 0 .375.375 0 010-.513l5.529-5.82a1.017 1.017 0 011.464 0l.477.503 4.715-4.967a1.511 1.511 0 01-.194-.735c0-.801.619-1.453 1.38-1.453.76 0 1.38.652 1.38 1.453 0 .8-.62 1.452-1.38 1.452-.257 0-.491-.08-.7-.205l-4.714 4.968 1.583 1.666 6.794-7.146a1.511 1.511 0 01-.195-.735c0-.801.62-1.453 1.38-1.453.76 0 1.38.652 1.38 1.453 0 .8-.62 1.452-1.38 1.452-.256 0-.49-.08-.699-.205l-6.789 7.151 1.584 1.667 4.719-4.968a1.511 1.511 0 01-.195-.735c0-.801.62-1.453 1.38-1.453.76 0 1.38.652 1.38 1.457zm-2.07-4.366c0 .4.31.726.69.726.38 0 .69-.326.69-.726 0-.4-.31-.727-.69-.727-.38 0-.69.326-.69.727zm-4.149 0c0 .4.31.726.69.726.38 0 .69-.326.69-.726 0-.4-.31-.727-.69-.727-.38 0-.69.326-.69.727zm5.529 4.366c0-.4-.31-.726-.69-.726-.38 0-.69.326-.69.726 0 .4.31.727.69.727.38 0 .69-.326.69-.727z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M11.994 2.156c3.14 0 5.574.813 7.238 2.418 1.725 1.663 2.602 4.162 2.602 7.423 0 6.437-3.403 9.837-9.84 9.837-6.434 0-9.838-3.4-9.838-9.835 0-6.434 3.404-9.843 9.838-9.843zm0 .56c-2.989 0-5.294.762-6.849 2.261-1.61 1.555-2.429 3.916-2.429 7.02 0 2.22.42 4.063 1.248 5.5l.038-.05.006-.005 3.325-3.283a.279.279 0 01.395.003l.465.47c.751-1.389 1.594-3.571 1.786-6.562a1.144 1.144 0 01-.61-.337c-.227-.238-.347-.56-.347-.95 0-.389.117-.71.347-.949.23-.238.538-.367.905-.367s.67.123.905.367.347.56.347.95c0 .39-.118.711-.347.95a1.18 1.18 0 01-.642.342l.003-.046c-.182 3.011-1.008 5.244-1.77 6.703l6.04-5.962a1.141 1.141 0 01-.206-.693c.009-.33.154-.639.435-.913.28-.275.588-.42.921-.429a1.2 1.2 0 01.902.373c.26.257.387.557.378.896-.008.33-.157.639-.434.913-.277.275-.588.42-.921.429h-.037c-.23 0-.443-.063-.636-.187l-5.955 5.881c1.45-.738 3.616-1.518 6.51-1.703.04-.264.157-.488.347-.672.244-.235.56-.347.95-.347.39 0 .711.117.95.347.237.23.366.538.366.905s-.123.67-.367.905c-.243.235-.557.347-.95.347-.391 0-.71-.118-.949-.347a1.158 1.158 0 01-.33-.582l.078-.007c-3.025.185-5.227 1.037-6.627 1.796l.49.496a.279.279 0 01-.003.395L6.33 19.928c1.461.894 3.36 1.346 5.665 1.346 2.989 0 5.294-.76 6.851-2.258C20.46 17.462 21.277 15.1 21.277 12s-.818-5.465-2.432-7.02c-1.557-1.5-3.862-2.263-6.851-2.263zM7.529 14.753l-3.13 3.087a.635.635 0 01-.147.118 6.812 6.812 0 001.608 1.657l.027-.036 3.244-3.201-.801-.813-.272-.274-.53-.538zm9.535-1.765c-.216 0-.378.053-.49.163a.548.548 0 00-.163.425v.014a.54.54 0 00.163.407c.112.109.274.162.49.162.215 0 .378-.053.49-.162a.547.547 0 00.162-.423c0-.182-.05-.32-.162-.423-.112-.104-.275-.163-.49-.163zM15.974 7.4c-.16.003-.314.081-.473.235-.16.154-.236.306-.238.46 0 .15.056.28.185.406.128.126.26.185.417.18.16-.004.314-.082.47-.236.157-.154.236-.306.239-.46.005-.15-.054-.28-.182-.406a.545.545 0 00-.418-.18zm-5.7-1.272a.549.549 0 00-.423.163c-.104.109-.163.274-.163.49 0 .216.054.378.163.49.104.107.232.16.406.163h.017a.553.553 0 00.423-.163c.106-.11.162-.274.162-.49 0-.216-.053-.378-.162-.49a.547.547 0 00-.423-.163z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconOpticalFiberLight;
