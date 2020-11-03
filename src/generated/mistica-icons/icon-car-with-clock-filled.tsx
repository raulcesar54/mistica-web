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

const IconCarWithClockFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.26 18.434c.188-.32.443-1.103-.238-2.386-1.044-1.986-3.056-2.124-3.072-2.124a.615.615 0 01-.507-.322c-.073-.131-1.914-3.35-6.415-3.35-2.238 0-3.773 1.079-4.672 1.983-1.364 1.381-2.093 3.236-2.084 4.272-.042.84 0 1.507.056 1.927h1.176c.221-1.269 1.168-2.033 2.574-2.033 1.407 0 2.353.767 2.575 2.033h3.406c.213-1.269 1.154-2.025 2.557-2.025 1.406 0 2.353.76 2.566 2.025h2.078zm-3.243.616v-.008c0-.947-.457-1.398-1.398-1.398-.938 0-1.39.454-1.39 1.398v.008c0 .939.449 1.401 1.39 1.401.938 0 1.398-.462 1.398-1.4zm-8.54 0v-.016c0-.947-.457-1.401-1.399-1.401-.94 0-1.397.454-1.397 1.4 0 .947.456 1.41 1.397 1.41.933 0 1.39-.454 1.398-1.393zm11.621-4.938c.367.356.72.798 1.014 1.359 1.356 2.577-.064 3.969-.123 4.025a.616.616 0 01-.426.17h-2.378c-.23 1.261-1.168 2.017-2.566 2.017s-2.336-.756-2.557-2.016H9.644c-.23 1.252-1.168 2.008-2.566 2.008-1.397 0-2.339-.756-2.565-2.008H2.798a.617.617 0 01-.596-.485c-.009-.04-.238-1.104-.157-2.7-.009-1.244.753-3.4 2.445-5.112.712-.726 1.773-1.55 3.202-2-.009-.098-.009-.205-.009-.303C7.683 4.51 10.176 2 14.695 2c4.526 0 7.02 2.51 7.02 7.064 0 2.157-.547 3.855-1.617 5.048zm-3.734-3.871a.615.615 0 00.434-1.053l-1.546-1.56V5.526a.614.614 0 10-1.227 0v2.355c0 .166.065.32.18.437l1.728 1.74c.12.12.277.18.431.182z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCarWithClockFilled;