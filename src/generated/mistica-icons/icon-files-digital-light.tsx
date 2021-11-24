/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFilesDigitalLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M10.596 19H3.061c-.04 0-.084-.047-.087-.067V8.689c.009-.028.062-.07.087-.072h4.008v1.31c0 .611.216 1.14.625 1.527.403.384.955.585 1.591.585h1.398v6.891c0 .025-.042.073-.087.07zM5.386 6.913c0-.638.151-1.117.45-1.417.309-.31.813-.468 1.5-.468l11.686-.005c.683 0 1.185.157 1.496.467.3.3.45.78.45 1.418v5.39c0 .643-.153 1.125-.456 1.433-.31.317-.812.477-1.493.477l-7.521.002v-2.73a.376.376 0 00-.034-.158.547.547 0 00-.14-.243L8.053 7.975a.576.576 0 00-.407-.16h-2.26v-.902zm2.501 2.023l2.429 2.302h-1.03c-.421 0-.774-.123-1.023-.361-.244-.232-.376-.56-.376-.95v-.991zm13.547 6.843H11.5v-.768l7.52-.002c.911 0 1.611-.244 2.085-.723.454-.462.683-1.132.683-1.992V6.905c0-.857-.23-1.521-.686-1.978-.47-.47-1.17-.708-2.084-.708l-11.69.005c-.912 0-1.61.241-2.08.709-.457.457-.687 1.12-.687 1.978v.902h-1.5c-.473.002-.905.417-.905.874v10.246c0 .465.423.871.905.871h7.535c.49 0 .905-.398.905-.871v-2.35h9.933a.404.404 0 00.409-.4v-.003a.408.408 0 00-.41-.401z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilesDigitalLight;
