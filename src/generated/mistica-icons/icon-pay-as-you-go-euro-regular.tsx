/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPayAsYouGoEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.189 17.378a.735.735 0 01.8.619.684.684 0 01-.588.806l-3.724.581-.524-3.89a.727.727 0 01.592-.836.735.735 0 01.8.618l.208 1.563A9.025 9.025 0 0020.181 12c0-4.73-3.656-8.546-8.215-8.546-1.216 0-2.364.289-3.48.836a.73.73 0 01-.94-.364c-.14-.363 0-.798.349-.982A9.516 9.516 0 0112.002 2c5.291 0 9.57 4.471 9.535 10 0 1.998-.56 3.928-1.604 5.562l1.256-.184zm-9.187 3.168a7.96 7.96 0 003.551-.836.641.641 0 01.908.326.748.748 0 01-.316.982 9.094 9.094 0 01-4.143.982c-5.287 0-9.57-4.471-9.57-10 0-1.998.591-3.928 1.635-5.566l-1.256.184c-.384.075-.728-.218-.8-.619a.727.727 0 01.592-.836l3.76-.547.524 3.89a.727.727 0 01-.592.836H6.19a.693.693 0 01-.696-.618L5.287 7.16A8.757 8.757 0 003.823 12c0 4.73 3.656 8.546 8.179 8.546z"
            />
            <path
                fill={fillColor}
                d="M6.955 13.09c0 .402.316.728.696.728h.695c.696 1.709 2.296 2.908 4.176 2.908.8 0 1.564-.217 2.264-.652a.708.708 0 00.244-.982c-.208-.363-.624-.472-.94-.255a3.021 3.021 0 01-1.564.435c-1.08 0-2.052-.58-2.612-1.454h2.612c.384 0 .696-.33.696-.727 0-.397-.316-.727-.696-.727h-3.1c0-.11-.036-.255-.036-.364 0-.109 0-.255.036-.364h3.096c.384 0 .696-.33.696-.727 0-.397-.316-.727-.696-.727H9.914c.556-.873 1.532-1.454 2.612-1.454.556 0 1.08.146 1.564.435a.662.662 0 00.94-.255.725.725 0 00-.244-.982c-.696-.402-1.464-.652-2.264-.652-1.88 0-3.48 1.2-4.176 2.908h-.695c-.384 0-.696.33-.696.727 0 .397.316.727.696.727h.348c0 .11-.036.255-.036.364 0 .109 0 .255.036.364H7.65c-.38 0-.696.325-.696.727z"
            />
        </svg>
    );
};

export default IconPayAsYouGoEuroRegular;
