/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconMouseRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M6.489 2.16a.55.55 0 01.549.549c0 .888 1.064 1.204 2.062 1.204h1.918c.869 0 1.544.39 1.9 1.096.254.501.26.989.26 1.045l.001.367c1.504.09 2.693.546 3.542 1.352.998.947 1.502 2.356 1.502 4.185v4.311c0 1.897-.44 3.264-1.347 4.174-.922.933-2.32 1.386-4.275 1.386-1.779 0-3.165-.462-4.12-1.37-.998-.946-1.502-2.355-1.502-4.184V11.96c0-1.829.504-3.238 1.502-4.185.862-.82 2.072-1.276 3.6-1.359l.002-.36c0-.02-.011-.309-.157-.578-.174-.322-.462-.47-.91-.47h-1.92c-.895 0-1.663-.2-2.218-.574-.605-.412-.938-1.026-.938-1.726a.55.55 0 01.549-.549zm10.638 11.439l.623-.078c-1.681.23-3.398.348-5.096.348h-.106c-1.489 0-2.99-.09-4.473-.268v2.674c0 3 1.481 4.46 4.526 4.46 1.647 0 2.793-.348 3.499-1.06.692-.697 1.028-1.81 1.028-3.403l-.001-2.673zm-4.526-6.097c-3.048 0-4.527 1.46-4.527 4.462v.532l.346.044c1.37.156 2.756.233 4.13.233h.101a36.59 36.59 0 004.477-.274v-.538c.002-3.003-1.48-4.46-4.527-4.46zm0 .8a.55.55 0 01.55.55v2.877a.55.55 0 01-1.099 0V8.852a.55.55 0 01.55-.55z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMouseRegular;
