/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconConferenceCallRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.593 2h14.81A2.6 2.6 0 0122 4.593v14.814A2.594 2.594 0 0119.407 22H4.593A2.594 2.594 0 012 19.407V4.593A2.594 2.594 0 014.593 2zm.488 8.699a.558.558 0 00.617-.489c.08-.71.81-1.175 1.853-1.175 1.086 0 1.963.507 2.038 1.175a.557.557 0 00.55.493c.02 0 .043 0 .067-.004a.556.556 0 00.488-.617c-.09-.786-.65-1.44-1.47-1.815.342-.389.546-.9.546-1.455a2.226 2.226 0 00-2.224-2.224 2.226 2.226 0 00-2.223 2.224c0 .568.218 1.085.569 1.479-.73.37-1.214 1-1.304 1.791a.568.568 0 00.493.617zm2.47-4.997a1.11 1.11 0 010 2.219 1.11 1.11 0 01-1.11-1.11c0-.61.499-1.109 1.11-1.109zm6.85 4.508a.56.56 0 01-.616.489.568.568 0 01-.493-.617c.09-.791.573-1.422 1.303-1.791a2.217 2.217 0 01-.569-1.48 2.223 2.223 0 113.902 1.456c.82.374 1.38 1.029 1.47 1.816a.556.556 0 01-.489.616.557.557 0 01-.616-.488c-.076-.669-.953-1.176-2.038-1.176-1.043 0-1.773.46-1.854 1.175zm.744-3.398a1.11 1.11 0 002.219 0 1.11 1.11 0 00-1.11-1.11 1.11 1.11 0 00-1.109 1.11zM9.775 15.7a2.2 2.2 0 01-.546 1.455c.82.375 1.38 1.029 1.465 1.816a.556.556 0 01-.488.616c-.024.005-.048.005-.067.005a.557.557 0 01-.55-.493c-.075-.669-.952-1.176-2.038-1.176-1.043 0-1.773.465-1.853 1.176a.558.558 0 01-.617.488.561.561 0 01-.488-.616c.09-.792.574-1.422 1.304-1.792a2.217 2.217 0 01-.57-1.48 2.227 2.227 0 012.224-2.222c1.228 0 2.223 1 2.223 2.223zM7.55 14.59a1.11 1.11 0 00-1.11 1.11 1.11 1.11 0 002.219 0 1.11 1.11 0 00-1.109-1.11zm10.927 1.11a2.2 2.2 0 01-.545 1.455c.82.375 1.38 1.029 1.465 1.816a.556.556 0 01-.489.616.557.557 0 01-.616-.488c-.076-.669-.953-1.176-2.038-1.176-1.043 0-1.773.465-1.854 1.176a.56.56 0 01-.616.488.561.561 0 01-.489-.616c.09-.792.574-1.422 1.304-1.792a2.217 2.217 0 01-.569-1.48 2.223 2.223 0 014.447 0zm-3.333 0a1.11 1.11 0 002.219 0 1.11 1.11 0 00-1.11-1.11 1.11 1.11 0 00-1.109 1.11zm5.371 3.702V4.593a1.11 1.11 0 00-1.109-1.11H4.593a1.11 1.11 0 00-1.11 1.11v14.81c0 .61.499 1.109 1.11 1.109h14.814a1.11 1.11 0 001.11-1.11zm-1.479-6.85a.552.552 0 00.555-.554.556.556 0 00-.56-.555h-6.48v-6.48a.552.552 0 00-.554-.555.552.552 0 00-.555.555v6.48h-6.48a.552.552 0 00-.555.555c0 .308.247.554.555.554h6.48v6.48c0 .309.247.555.555.555a.552.552 0 00.554-.555v-6.48h6.485z"
            />
        </svg>
    );
};

export default IconConferenceCallRegular;
