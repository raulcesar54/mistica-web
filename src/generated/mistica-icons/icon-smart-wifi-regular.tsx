/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSmartWifiRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.735 10.332c.213-.51.1-1.078-.292-1.479l-6.117-6.269c-.55-.565-1.586-.565-2.138 0L7.116 8.808h-2.39c-.826 0-1.45.225-1.904.687-.449.456-.667 1.078-.667 1.899v7.868c0 .84.218 1.468.672 1.919.448.448 1.07.664 1.9.664h3.912c.83 0 1.452-.216 1.897-.664.454-.454.675-1.081.675-1.922v-1.308h7.454c.806 0 1.462-.63 1.462-1.403v-5.333h.25c.599 0 1.134-.348 1.358-.883zm-1.12-.47c-.012.03-.068.134-.236.137h-.854a.61.61 0 00-.608.61v5.945c0 .086-.101.182-.25.182h-7.453v-5.34c0-.831-.219-1.456-.667-1.91-.42-.423-.994-.636-1.742-.664l5.252-5.383c.095-.101.305-.101.403 0l6.118 6.271c.05.05.059.096.036.152zM9.997 19.259c0 .499-.104.844-.316 1.05-.208.211-.55.312-1.043.312H4.726c-.493 0-.834-.101-1.044-.311-.21-.21-.314-.555-.314-1.053v-7.869c0-.482.103-.823.316-1.039.216-.218.558-.325 1.042-.325H8.64c.493 0 .835.104 1.045.317.21.213.314.557.314 1.05v7.868zm-3.316-.812c.414 0 .663.252.663.67a.678.678 0 01-.173.487c-.115.12-.286.182-.49.182a.673.673 0 01-.49-.182c-.116-.118-.174-.283-.174-.487.002-.42.249-.67.664-.67zm7.95-5.196c0-.098 0-.199-.186-.204H14.4c-.16 0-.17.08-.17.198-.003.124.01.208.176.208.224-.003.224-.104.224-.202zm-.175-1.014c.496.014.984.333.984 1.017 0 .686-.488 1.003-.972 1.014-.555-.006-1.048-.322-1.048-1.017 0-.695.49-1.011.975-1.014h.061zm3.768-3.258c-1.51-1.7-3.756-1.585-3.832-1.58-2.376.025-3.665 1.388-3.759 1.487l-.003.004a.406.406 0 00.6.546c.042-.048 1.123-1.202 3.187-1.224h.003c.078-.003 1.977-.063 3.199 1.31.081.09.193.135.302.135a.407.407 0 00.303-.678zm-3.826.031h.01c.165-.003 1.88-.03 2.99 1.222a.407.407 0 01-.034.574.404.404 0 01-.571-.034c-.894-1.003-2.356-.96-2.376-.95-1.447.017-2.319.931-2.354.969h-.002a.396.396 0 01-.3.132.407.407 0 01-.303-.675l.009-.007a4.226 4.226 0 012.93-1.23zm2.02 2.47c-.771-.87-1.976-.828-2.01-.823-1.218.014-1.938.799-1.966.835a.406.406 0 00.028.571.41.41 0 00.571-.028l.004-.002a2 2 0 011.383-.563c.006-.012.871-.023 1.384.551a.404.404 0 00.572.034.407.407 0 00.033-.574z"
            />
        </svg>
    );
};

export default IconSmartWifiRegular;
