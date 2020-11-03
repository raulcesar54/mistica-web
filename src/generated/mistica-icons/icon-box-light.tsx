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

const IconBoxLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.85 20.338c0 .367-.285.667-.635.667H3.781c-.347 0-.633-.3-.633-.667V8.646c0-.367.286-.666.633-.666h5.417v2.72c0 .23.222.417.496.417h4.286c.274 0 .496-.188.496-.417l-.003-2.72h5.745c.35 0 .636.3.636.666v11.692h-.003zM4.583 3.476a.377.377 0 00.014-.098c0-.213.205-.387.46-.387h4.638l-.44 4.151H3.781c-.084 0-.163.011-.241.023l1.042-3.69zm8.902 6.806H10.19l-.003-2.302h3.297v2.302zm-.594-7.285l.53 4.145h-3.174l.44-4.145h2.204zm6.53.481l1.072 3.692a1.547 1.547 0 00-.277-.025h-5.801l-.527-4.151h5.06c.251 0 .456.173.456.386 0 .034.005.068.017.098zm2.389 4.703l-1.417-4.857c-.031-.65-.67-1.168-1.449-1.168H5.055c-.781 0-1.417.518-1.45 1.168L2.231 8.181c-.003.012 0 .026-.003.037-.045.14-.07.283-.073.428v11.692c0 .83.729 1.505 1.625 1.505h16.437c.896 0 1.625-.676 1.625-1.505V8.646c0-.1-.012-.196-.031-.288a.376.376 0 00-.003-.177z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBoxLight;