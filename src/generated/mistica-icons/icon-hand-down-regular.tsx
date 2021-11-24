/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconHandDownRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.76 2.16H6.975c-.984 0-1.824.308-2.364.866-.538.554-.81 1.33-.81 2.302v6.994c0 1.272.782 2.065 2.036 2.065.283 0 .541-.04.774-.118.238.857.94 1.367 1.95 1.367.282 0 .545-.039.775-.117.24.848.941 1.352 1.944 1.352.246 0 .476-.03.683-.09v2.903c0 1.333.818 2.162 2.135 2.162 1.266 0 2.042-.773 2.129-2.117.003-.014.003-.028.003-.045 0-.258.002-5.157 0-7.384.339.577.641.98 1.008 1.272a1.95 1.95 0 001.21.431c.403 0 .801-.132 1.132-.395.65-.52.806-1.409.409-2.263a415.425 415.425 0 00-2.748-5.647 208.864 208.864 0 01-1.21-2.476c-.143-.32-.488-1.062-1.27-1.062m-.033 1.232c.076.079.168.278.2.35.148.323.646 1.334 1.22 2.505a382.72 382.72 0 012.737 5.627c.073.157.216.547-.064.77a.584.584 0 01-.37.13.728.728 0 01-.451-.166c-.219-.173-.434-.454-.717-.935a1.217 1.217 0 00-1.373-.558c-.53.146-.896.633-.896 1.188v6.81l.003.537c-.054.804-.387.967-.91.967-.642 0-.914-.278-.914-.93v-2.905c0-.387-.18-.748-.482-.98a1.21 1.21 0 00-1.067-.208 1.356 1.356 0 01-.356.045c-.641 0-.73-.322-.77-.462a1.233 1.233 0 00-.602-.75 1.198 1.198 0 00-.953-.082 1.273 1.273 0 01-.392.056c-.644 0-.734-.328-.773-.468a1.223 1.223 0 00-1.557-.84 1.273 1.273 0 01-.392.056c-.58 0-.816-.241-.816-.832V5.322c0-.647.152-1.117.463-1.44.305-.313.846-.495 1.49-.495h7.742"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHandDownRegular;
