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

const IconChangePlanLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.86 3.782h2.321c.065 0 .125.023.174.06l.007.008a.091.091 0 01.018.014l4.37 4.37.014.017a.283.283 0 01.022.027l-.036-.045c.02.02.036.042.048.066a.28.28 0 01.036.136l-.003.017V19.41c0 .18-.014.387-.131.549-.118.162-.306.246-.563.246h-9.429c-.518 0-.815-.3-.815-.82V4.586c0-.51.297-.8.812-.804h3.155zm-8.844 7.101c.023 0 .046.003.067.009l-.067-.009a.28.28 0 01.162.051l.02.017a.1.1 0 01.017.014l2.429 2.428.016.02a.283.283 0 01.008.01l-.024-.03a.28.28 0 01.05.07l.012.03c.005.01.008.02.01.03l.001.005.008.064v6.03c0 .34-.219.561-.56.561l-2.675.003H2.728c-.353 0-.572-.221-.572-.577v-8.157c0-.35.219-.569.572-.569h3.288zm10.887-6.538h-5.195c-.218 0-.252.06-.252.244v14.799c0 .212.045.26.255.26h.319l.781-.001h.245l2.689-.001h5.392a.286.286 0 00.109-.015.595.595 0 00.025-.221V8.714l-1.902.001c-1.52 0-2.465-.944-2.465-2.465V4.345zm-11.168 7.1l-3.019.001v8.18h5.449V13.87l-.692.001c-.56 0-.995-.151-1.292-.445-.296-.294-.445-.731-.445-1.292v-.69zm1.259 6.486a.28.28 0 01.28.28.28.28 0 01-.28.28H3.899a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.095zm0-1.457a.28.28 0 01.28.28.28.28 0 01-.28.28H3.899a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.095zm12.409-.12a.28.28 0 01.28.28.28.28 0 01-.28.28h-6.076a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.076zm-12.41-1.336a.28.28 0 01.28.28.28.28 0 01-.28.28H3.9a.28.28 0 01-.28-.28.28.28 0 01.28-.28h3.095zm12.41-1.418a.28.28 0 01.28.28.28.28 0 01-.28.28h-6.076a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.076zm-11.637-.289l-1.47-1.47v.294c0 .813.364 1.177 1.177 1.177h.293zm11.637-2.447a.28.28 0 01.28.28.28.28 0 01-.28.28h-6.076a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.076zM7.548 5.189c.028.025.695.59.939.834.322.323.325.692.005 1.009-.123.123-.86.756-.944.826a.28.28 0 01-.364-.426c.217-.186.52-.45.718-.625H6.798c-.726 0-1.27.172-1.62.508-.36.347-.546.907-.546 1.66v.833a.277.277 0 01-.277.28.28.28 0 01-.28-.28v-.832c0-.91.24-1.605.717-2.065.457-.44 1.132-.664 2.006-.664l1.11.001a30.6 30.6 0 00-.724-.634.28.28 0 11.364-.425zm13.327 2.965l-3.41-3.414v1.51c0 1.21.694 1.905 1.904 1.905h1.506z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChangePlanLight;