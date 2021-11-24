/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconArrowDownLeftRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.334 22H2V8.603c0-.868.492-1.612 1.288-1.936a2.196 2.196 0 012.371.476l2.768 2.768 7.71-7.704a.722.722 0 011.013 0 .722.722 0 010 1.012l-8.22 8.212c-.504.504-.892.12-1.524-.512l-2.76-2.76a.73.73 0 00-.807-.172.64.64 0 00-.404.616v11.969h11.91c.396 0 .56-.292.608-.42a.794.794 0 00-.16-.86l-3.716-3.716 8.703-8.729a.722.722 0 011.012 0 .722.722 0 010 1.012l-7.71 7.713 2.71 2.712c.633.632.817 1.58.477 2.42-.34.792-1.076 1.296-1.936 1.296z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M4.585 20.591a.89.89 0 01-.641-.258.89.89 0 01-.252-.717l.005-12.145a1.009 1.009 0 01.614-.956c.457-.204 1.048-.112 1.406.216a.07.07 0 00.017.014l2.378 2.378 4.79-4.905.006-.005c.728-.728 1.568-.72 2.305.017l5.05 5.025.017.017c.32.347.44.708.361 1.078-.072.336-.302.605-.52.824l-.015.014-5.12 4.815 2.58 2.577.008.008c.317.33.41.894.219 1.34-.177.414-.566.66-1.042.66H4.664c-.028.003-.053.003-.079.003zm.183-1.078H16.75a.184.184 0 00.053-.006c.022-.036.017-.137-.009-.177l-2.652-2.652a.95.95 0 01-.275-.7.995.995 0 01.294-.676l.012-.01 5.187-4.877c.168-.171.21-.247.222-.275a.604.604 0 00-.093-.129L14.45 4.994c-.157-.156-.3-.243-.4-.246-.127 0-.278.12-.382.227L8.812 9.947l-.005.005a.973.973 0 01-1.376.017L4.983 7.521c-.042-.03-.148-.045-.213-.03l-.002 12.022z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconArrowDownLeftRegular;
