/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconWorkshopMeetingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.84 10.29c-1.605 0-2.295.633-2.295.633a.353.353 0 01-.513 0 .364.364 0 010-.519.259.259 0 00.06-.04c.169-.127.689-.516 1.689-.702-.69-.37-1.129-1.075-1.129-1.931 0-1.227.984-2.231 2.187-2.231 1.203 0 2.187 1.004 2.187 2.23a2.25 2.25 0 01-1.128 1.932c1.203.186 1.711.704 1.748.742a.364.364 0 010 .519.338.338 0 01-.256.109.322.322 0 01-.257-.11.19.19 0 01-.048-.03c-.178-.126-.854-.602-2.246-.602zm9.106 3.61c0-1.189-1.24-2.045-2.914-2.045-1.604 0-2.77.78-2.845 1.898l4.155 2.526a.403.403 0 01.107.518.434.434 0 01-.326.186c-.075 0-.145 0-.182-.038l-7.102-4.348-7.074 4.343c-.182.114-.396.076-.508-.11-.112-.185-.075-.409.107-.518l4.155-2.564c-.037-1.151-1.236-1.97-2.877-1.97-1.711 0-2.915.857-2.915 2.046V15.5c0 .223-.144.37-.363.37-.22 0-.364-.147-.364-.37v-1.675c0-1.265.984-2.269 2.439-2.64A2.448 2.448 0 013.09 8.991c0-1.336 1.059-2.416 2.406-2.378 1.31 0 2.37 1.08 2.37 2.416a2.42 2.42 0 01-1.241 2.117c1.385.262 2.406 1.08 2.625 2.193l2.439-1.48a.318.318 0 01.364 0l2.438 1.485c.257-1.113 1.31-1.931 2.733-2.155a2.438 2.438 0 01-1.385-2.193c0-1.336 1.058-2.416 2.369-2.416 1.31 0 2.369 1.08 2.369 2.416 0 1.004-.578 1.86-1.455 2.231 1.53.333 2.55 1.337 2.55 2.673v1.97c0 .223-.144.37-.363.37-.22 0-.364-.147-.364-.37V13.9zm-2.728-6.583c-.914 0-1.641.747-1.641 1.674 0 .928.727 1.675 1.641 1.675s1.642-.742 1.642-1.675c0-.932-.728-1.674-1.642-1.674zM3.823 8.991c0 .928.728 1.675 1.642 1.675.914 0 1.641-.742 1.641-1.675 0-.932-.727-1.674-1.641-1.674s-1.642.747-1.642 1.674zm8.016-2.787c-.802 0-1.455.67-1.455 1.484s.658 1.484 1.455 1.484 1.455-.67 1.455-1.484c0-.813-.653-1.484-1.455-1.484zm8.706 11.554c0-.41.326-.742.727-.742.402 0 .733.338.728.742a.736.736 0 01-.727.742.736.736 0 01-.728-.742z"
            />
        </svg>
    );
};

export default IconWorkshopMeetingLight;
