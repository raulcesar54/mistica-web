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

const IconFileMp3Light = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.333 15.117v-.583c.215.04.47.065.74.065.302 0 .481-.04.61-.123.129-.087.199-.227.199-.426 0-.194-.07-.325-.185-.406-.135-.098-.342-.13-.72-.13h-.104v-.54h.13c.338 0 .512-.042.643-.157.087-.075.146-.199.146-.378 0-.14-.04-.26-.123-.336-.11-.098-.292-.14-.583-.14-.238 0-.507.022-.723.053v-.571c.25-.053.564-.082.85-.082.464 0 .86.11 1.086.337.157.157.255.372.255.68 0 .384-.168.653-.49.815.39.14.622.432.622.914 0 .285-.087.535-.26.714-.245.255-.64.384-1.2.384a4.646 4.646 0 0 1-.893-.09M4.422 11.434h.664l1.168 2.064 1.205-2.064h.647v3.694h-.77V13l-.768 1.286h-.647l-.79-1.308v2.151h-.709zM8.91 11.434h1.269c.577 0 .944.08 1.182.302.199.185.297.47.297.866 0 .395-.093.691-.275.896-.215.244-.552.356-1.036.356h-.594v1.274H8.91zm1.75 1.647c.098-.098.146-.255.146-.471 0-.199-.042-.344-.14-.437-.104-.092-.26-.129-.518-.129h-.395v1.18h.417v-.003c.27 0 .384-.04.49-.14"
            />
            <path
                fill={fillColor}
                d="M21.806 7.907c.022.05.034.104.034.162v12.563c0 .653-.563 1.205-1.23 1.205H8.173c-.655 0-1.23-.563-1.23-1.205l.037-3.036H4.422a2.27 2.27 0 0 1-2.266-2.269v-4.18A2.27 2.27 0 0 1 4.422 8.88h2.521V3.36c0-.63.586-1.205 1.23-1.205h7.572c.179 0 .35.07.481.194l5.41 5.235a.623.623 0 0 1 .17.322M20.61 21.01c.207 0 .403-.185.403-.379V8.75h-2.565c-.98 0-1.827-.316-2.443-.916-.622-.602-.952-1.428-.952-2.384V2.98H8.17c-.185 0-.406.204-.406.378v5.518h6.706a2.27 2.27 0 0 1 2.266 2.269v4.18a2.27 2.27 0 0 1-2.266 2.268H7.803l-.036 3.042c0 .182.204.373.406.373H20.61zM2.98 15.324c0 .796.644 1.443 1.44 1.443h10.053c.792 0 1.44-.647 1.44-1.443v-4.179c0-.795-.645-1.443-1.44-1.443H4.42c-.793 0-1.44.648-1.44 1.443zM15.879 3.16v2.289c0 .728.24 1.347.7 1.79.462.445 1.107.683 1.869.683h2.35z"
            />
        </svg>
    );
};

export default IconFileMp3Light;
