'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandSnapRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.814 2.716v3.586c0 .395.311.716.694.716a.706.706 0 0 0 .694-.716V2.716A.706.706 0 0 0 8.508 2a.706.706 0 0 0-.694.716Zm11.565 11.378c.267.105.512.266.716.477a2.1 2.1 0 0 1 .596 1.478c0 .56-.213 1.089-.596 1.483l-2.549 2.631a6.501 6.501 0 0 1-.431.404l-.062.05c-.085.06-2.087 1.383-3.955 1.383-.067 0-.129 0-.191-.005-1.948-.096-2.936-.744-3.986-1.827a6.341 6.341 0 0 1-1.654-3.145l-.245-1.185a4.912 4.912 0 0 0-1.277-2.428l-1.717-1.773a2.12 2.12 0 0 1 0-2.93 1.96 1.96 0 0 1 2.838 0l2.358 2.434 7.055-7.286a1.98 1.98 0 0 1 1.436-.615c.543 0 1.055.22 1.437.615.387.4.596.923.596 1.483s-.213 1.088-.596 1.483l-1.94 2.002c.192.1.37.23.526.39.573.592.725 1.46.462 2.204.263.1.507.257.716.473.574.597.726 1.46.463 2.204Zm-4.039-1.47 1.415-1.46c.249-.257.249-.68.004-.936a.626.626 0 0 0-.454-.193.626.626 0 0 0-.453.193l-1.415 1.46a.683.683 0 0 0 0 .936.64.64 0 0 0 .903 0Zm.276 1.745a.675.675 0 0 0 0 .932c.249.257.654.257.903 0l1.419-1.46a.675.675 0 0 0 0-.932.63.63 0 0 0-.908 0l-1.414 1.46Zm-5.712 4.78c.868.895 1.548 1.331 3.07 1.41 1.338.076 2.966-.918 3.272-1.105l.02-.011a.655.655 0 0 1 .057-.055 2.105 2.105 0 0 1-.511-.386c-.579-.592-.725-1.46-.463-2.204a1.983 1.983 0 0 1-.716-.473 2.15 2.15 0 0 1-.463-2.204 2.04 2.04 0 0 1-.716-.477 2.111 2.111 0 0 1-.596-1.483c0-.56.21-1.084.592-1.479.004 0 .004-.004.004-.004L18.17 5.81a.675.675 0 0 0 .187-.468.667.667 0 0 0-.187-.469.641.641 0 0 0-.903 0l-8.042 8.292-3.34-3.448a.62.62 0 0 0-.873 0 .652.652 0 0 0 0 .9l1.717 1.772a6.341 6.341 0 0 1 1.655 3.145l.245 1.185a4.912 4.912 0 0 0 1.276 2.429Zm9.208-2.631a.652.652 0 0 0 .192-.468.667.667 0 0 0-.187-.469.623.623 0 0 0-.903 0l-1.42 1.465a.675.675 0 0 0 0 .932c.24.248.663.248.904 0l1.414-1.46ZM3.504 3.644a.734.734 0 0 0 0 1.014L5.94 7.17a.666.666 0 0 0 .49.211.666.666 0 0 0 .489-.211.734.734 0 0 0 0-1.015L4.487 3.644a.68.68 0 0 0-.983 0Zm6.6 3.526a.734.734 0 0 1 0-1.015l2.434-2.511a.68.68 0 0 1 .983 0 .734.734 0 0 1 0 1.014L11.088 7.17a.666.666 0 0 1-.49.211.701.701 0 0 1-.493-.211Z"
            />
        </svg>
    );
};

export default IconHandSnapRegular;
