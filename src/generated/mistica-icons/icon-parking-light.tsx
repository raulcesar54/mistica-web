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

const IconParkingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.889 20.91a.36.36 0 01.352.364c0 .2-.158.363-.357.368H4.245c-.975 0-1.765-.82-1.765-1.82V3.82C2.48 2.815 3.275 2 4.245 2h15.517c.976 0 1.766.82 1.766 1.82v16.002c0 .824-.542 1.55-1.323 1.754a.35.35 0 01-.43-.26.362.362 0 01.254-.442 1.08 1.08 0 00.794-1.052V3.82c0-.6-.474-1.09-1.056-1.09H4.245c-.582 0-1.056.49-1.056 1.09v16.002c0 .6.474 1.089 1.056 1.089H15.89zM18.002 22a.716.716 0 00.704-.726c0-.4-.316-.726-.704-.726a.716.716 0 00-.705.726c0 .4.316.726.705.726zm-8.466-4.361v-4.73h3.174c1.946 0 3.526-1.628 3.526-3.634 0-2.006-1.58-3.635-3.526-3.635H8.832v11.999c0 .2.158.363.352.363a.358.358 0 00.352-.363zM12.71 6.366c1.558 0 2.822 1.303 2.822 2.909 0 1.606-1.264 2.909-2.822 2.909H9.536V6.366h3.174z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.366 8.525c.017-2.11-.538-3.7-1.622-4.726a5.501 5.501 0 00-2.535-1.266 15.894 15.894 0 00-3.748-.37H5.024a.41.41 0 00-.409.41v18.86a.41.41 0 00.409.408h4.274a.408.408 0 00.41-.409v-6.1h2.607a10.295 10.295 0 003.26-.46 5.265 5.265 0 002.284-1.493 7.096 7.096 0 001.507-4.854zm-.799-.009a6.353 6.353 0 01-1.297 4.305 4.402 4.402 0 01-1.94 1.267 9.382 9.382 0 01-3.015.417H9.301a.407.407 0 00-.406.409v6.112H5.43V2.98h6.03c1.205-.025 2.41.09 3.586.345a4.765 4.765 0 012.143 1.09c.913.82 1.378 2.237 1.378 4.1zM13.01 5.44c.454.09.874.3 1.221.608.605.698.9 1.614.815 2.535a3.696 3.696 0 01-.888 2.69c-.31.316-.697.548-1.123.672a6.65 6.65 0 01-1.63.165H9.3a.405.405 0 01-.406-.409V5.687c0-.227.182-.409.406-.409h2a7.642 7.642 0 011.71.162zm1.216 3.166a2.63 2.63 0 00-.586-1.936 1.708 1.708 0 00-.815-.409 7.152 7.152 0 00-1.524-.165H9.713v5.193h1.658c.485.014.97-.03 1.443-.14.294-.081.557-.24.767-.46a2.924 2.924 0 00.645-2.083z"
                />
            </svg>
        );
    }
};

export default IconParkingLight;
