/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataNetworkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.387 7.735c.04.064.065.145.073.224.252.941.381 1.983.384 3.132 0 5.837-3.123 8.924-9.036 8.924a14.02 14.02 0 01-2.32-.185v.073c0 .513-.283 1.218-1.647 1.619-.692.21-1.59.322-2.524.322-.932 0-1.826-.112-2.515-.322-1.364-.4-1.647-1.106-1.647-1.62V12.43c0-.128.014-.249.048-.36v-.01c.162-.562.697-.988 1.582-1.251.098-5.661 3.213-8.653 9.02-8.653 4.569 0 7.52 1.955 8.582 5.58zm-9.19-.328V3.455c-1.291.375-2.434 1.899-3.076 3.952h3.076zm1.216-3.944v3.944h2.863c-.575-2.076-1.622-3.566-2.863-3.944zm4.266 10.583h2.571c.244-.866.376-1.852.373-2.958 0-.908-.09-1.726-.252-2.48h-2.597c.123.78.188 1.597.188 2.463a15.7 15.7 0 01-.283 2.975zm-.3 1.204c-.38 1.3-.941 2.39-1.63 3.207 1.916-.515 3.269-1.58 4.056-3.207h-2.426zm-3.966 3.462c1.137-.35 2.109-1.641 2.7-3.456h-2.7v3.456zM16.536 8.61h-3.123v5.445l3.033-.008c.194-.916.3-1.925.3-2.975 0-.857-.073-1.686-.21-2.462zm1.008-1.202h2.465c-.73-1.877-2.143-3.112-4.201-3.68.764.913 1.364 2.182 1.736 3.68zm-7.058 6.647h1.711V8.61H8.822a12.263 12.263 0 00-.236 2.134c.082.014.171.031.252.056 1.365.41 1.648 1.107 1.648 1.628v1.627zm1.711 4.731V15.26h-1.711v3.375a.479.479 0 00.053-.004c.018-.002.036-.004.053-.004.501.095 1.045.137 1.605.16zM8.5 15.195c.42-.13.663-.306.77-.427h.003v-1.176l-.031.012c-.128.052-.25.1-.392.14-.692.21-1.583.321-2.524.321-.933 0-1.835-.114-2.516-.322a4.36 4.36 0 01-.436-.16v1.202c.09.104.333.272.787.41 1.15.335 3.179.335 4.339 0zm.77 2.187h.003V16.18c-.14.065-.278.12-.423.16-.692.21-1.583.322-2.524.322-.933 0-1.835-.112-2.516-.322a2.31 2.31 0 01-.358-.127 11.57 11.57 0 00-.078-.033v1.22c.08.098.302.266.787.409 1.15.336 3.179.336 4.339 0 .42-.13.663-.306.77-.426zm-.779 2.991c.535-.162.779-.353.779-.473h.003v-1.106a8.074 8.074 0 00-.095.038 3.203 3.203 0 01-.328.121c-.692.21-1.583.322-2.524.322-.933 0-1.835-.114-2.516-.322a4.36 4.36 0 01-.436-.16V19.9c0 .12.243.311.778.474 1.16.336 3.171.336 4.34 0zm-4.342-8.42c-.364.112-.565.224-.672.311.104.096.308.216.68.328 1.152.336 3.18.336 4.331 0 .39-.118.583-.232.681-.32-.112-.095-.33-.215-.68-.319-1.152-.344-3.188-.344-4.34 0zM7.572 8.61H5.245c-.138.602-.21 1.26-.236 1.955a12.376 12.376 0 012.37-.022c.023-.667.087-1.309.193-1.933zm2.126-4.85c-2.002.583-3.375 1.804-4.095 3.65H7.85c.406-1.468 1.045-2.728 1.848-3.65z"
            />
        </svg>
    );
};

export default IconDataNetworkRegular;
