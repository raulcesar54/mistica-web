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

const IconIdCardRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M3.431 5.78a.228.228 0 00-.224.233V17.8a.228.228 0 00.224.232h16.827a.228.228 0 00.224-.232V6.013a.228.228 0 00-.224-.233H3.43zm16.824 13.51H3.43c-.789 0-1.43-.67-1.43-1.49V6.013c0-.821.641-1.488 1.431-1.488h16.827c.79 0 1.431.667 1.431 1.488V17.8c-.003.82-.644 1.49-1.434 1.49zm-9.392-4.986H4.622a.614.614 0 01-.602-.628c0-.347.271-.627.602-.627h6.24c.334 0 .603.28.603.627a.616.616 0 01-.602.628zm-2.006-3.35H4.622a.617.617 0 01-.605-.628c0-.347.272-.627.605-.627h4.235c.333 0 .605.28.605.627a.62.62 0 01-.605.628zm7.258-2.871c.568 0 1.014.156 1.322.465.32.319.482.795.482 1.411 0 .617-.163 1.09-.482 1.412-.308.308-.754.462-1.322.462-.569 0-1.014-.157-1.32-.462-.319-.32-.478-.793-.478-1.412 0-.616.16-1.09.479-1.409.308-.313.753-.467 1.319-.467zm0 1.086c-.163 0-.454.02-.591.16-.14.14-.163.457-.163.63 0 .174.023.488.16.625.104.104.314.16.594.16.283 0 .496-.056.6-.16.14-.14.159-.45.159-.625 0-.173-.02-.487-.163-.627-.14-.14-.43-.163-.596-.163zm1.1 3.482c.667 0 1.216.213 1.586.61.34.368.518.878.518 1.474v.625a.21.21 0 01-.204.213h-5.992a.205.205 0 01-.204-.21v-.628c0-.596.179-1.106.515-1.473.367-.398.916-.61 1.583-.61h2.199zm0 1.09h-2.198c-.263 0-.62.048-.83.277a.908.908 0 00-.207.468h4.27a.878.878 0 00-.208-.468c-.207-.23-.566-.277-.826-.277z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconIdCardRegular;