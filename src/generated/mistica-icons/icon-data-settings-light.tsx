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

const IconDataSettingsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 4.928c0-1.061-.877-1.855-2.601-2.362C18.164 2.2 16.539 2 14.829 2c-1.71 0-3.333.202-4.574.566-1.437.421-2.287 1.053-2.53 1.872v.003a1.748 1.748 0 0 0-.068.487v4.416c0 .028.008.053.015.079l.005.018v.256c-.33.068-.654.168-.967.296l-.757-.74a1.134 1.134 0 0 0-1.58 0l-.768.754a1.072 1.072 0 0 0 0 1.545l.748.731a5.6 5.6 0 0 0-.296.953h-.95c-.609 0-1.107.487-1.107 1.084v1.033c0 .598.498 1.084 1.107 1.084h.95c.072.328.171.646.296.956l-.748.732c-.21.204-.327.478-.327.77 0 .294.116.573.327.775l.771.756a1.134 1.134 0 0 0 1.58 0l.757-.74c.313.129.637.228.967.297v.933c0 .597.498 1.084 1.107 1.084h1.059c.42 0 .777-.242.964-.583 2.112.478 3.262.48 4.021.48 1.705 0 3.327-.201 4.57-.566C21.127 20.822 22 20.028 22 18.97V4.928Zm-.84 14.039c0 .651-.674 1.18-2 1.573-1.17.345-2.706.532-4.326.524-.728 0-1.83-.003-3.878-.47v-.62a5.51 5.51 0 0 0 .967-.296l.754.74a1.134 1.134 0 0 0 1.58 0l.77-.754.027-.026a1.074 1.074 0 0 0-.026-1.52l-.754-.739c.027-.067.048-.14.07-.215a4.06 4.06 0 0 1 .038-.126.433.433 0 0 0 .134.028l.327.003c1.71 0 3.332-.2 4.57-.563.7-.205 1.295-.498 1.747-.84v3.3Zm-11.05.674.006 1.27c0 .144-.12.261-.267.261H8.793a.264.264 0 0 1-.268-.262v-1.272a.415.415 0 0 0-.353-.404c-.509-.08-.964-.219-1.36-.41a.424.424 0 0 0-.484.077l-.961.942a.284.284 0 0 1-.393 0l-.771-.757a.265.265 0 0 1-.08-.19.258.258 0 0 1 .08-.19l.959-.94a.401.401 0 0 0 .068-.492c-.196-.339-.342-.92-.407-1.315a.422.422 0 0 0-.415-.347H3.107a.266.266 0 0 1-.268-.262v-1.032a.268.268 0 0 1 .268-.262h1.295a.416.416 0 0 0 .415-.345c.066-.395.21-.976.407-1.314a.402.402 0 0 0-.068-.492l-.96-.94a.264.264 0 0 1-.079-.19.258.258 0 0 1 .08-.19l.771-.755a.284.284 0 0 1 .393 0l.962.942a.424.424 0 0 0 .483.077c.43-.202.888-.341 1.36-.41a.417.417 0 0 0 .354-.407V8.761a.268.268 0 0 1 .267-.262h1.056c.145 0 .265.116.267.262v1.271c0 .205.151.379.353.407.473.069.93.208 1.36.413a.43.43 0 0 0 .484-.08l.962-.942a.284.284 0 0 1 .393 0l.771.754c.051.049.08.12.08.191a.258.258 0 0 1-.08.19l-.962.943a.403.403 0 0 0-.08.472c.206.421.348.87.419 1.334.037.2.21.348.415.345h1.3a.262.262 0 0 1 .266.261v1.03c0 .146-.12.262-.268.262h-1.3a.419.419 0 0 0-.416.347c-.08.498-.222.945-.418 1.332a.403.403 0 0 0 .08.472l.964.942c.051.049.08.12.08.19a.258.258 0 0 1-.08.191l-.771.757a.284.284 0 0 1-.393 0l-.962-.942a.43.43 0 0 0-.483-.08c-.43.206-.888.345-1.36.413a.415.415 0 0 0-.354.407ZM8.55 4.635c.172-.512.843-.956 1.953-1.283 1.158-.342 2.695-.53 4.326-.53 1.63 0 3.167.188 4.328.53 1.15.338 1.807.78 1.964 1.317a.119.119 0 0 1-.007.008.064.064 0 0 0-.01.018c-.194.492-.863.919-1.941 1.234-1.158.345-2.695.533-4.326.533-1.628 0-3.164-.191-4.325-.533-1.102-.321-1.779-.762-1.95-1.271 0-.005-.003-.01-.005-.013-.003-.003-.005-.007-.006-.01Zm6.475 5.369s-.771-.754-.768-.754a1.134 1.134 0 0 0-1.58 0l-.757.74a5.716 5.716 0 0 0-.967-.296v-.93c0-.598-.495-1.085-1.107-1.085H8.79c-.086 0-.164.023-.243.045l-.044.012V5.884c.426.333 1.015.615 1.77.836 1.238.367 2.86.567 4.567.567 1.71 0 3.332-.202 4.57-.567.743-.219 1.324-.495 1.75-.822v3.66c-.216.392-.836.915-1.991 1.254-1.08.319-2.513.492-3.993.518.102-.168.176-.353.176-.555 0-.29-.116-.566-.327-.771Zm1.608 4.316c0-.597-.498-1.084-1.107-1.084l-.95.003a5.59 5.59 0 0 0-.302-.947l.13-.128.221.001.22.002c1.711 0 3.333-.2 4.571-.564.7-.208 1.295-.498 1.747-.84v3.705c-.213.39-.84.914-1.992 1.252-.834.248-1.87.41-2.988.484.268-.2.45-.498.45-.85V14.32Z"
            />
        </svg>
    );
};

export default IconDataSettingsLight;
