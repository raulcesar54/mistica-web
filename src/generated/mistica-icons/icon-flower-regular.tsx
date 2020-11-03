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

const IconFlowerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.947 12.703a4.62 4.62 0 00-.022-1.022c-.009-.056-.02-.112-.028-.168a3.43 3.43 0 00-.076-.337c-.017-.056-.03-.114-.05-.168a3.043 3.043 0 00-.107-.263 2.238 2.238 0 00-.176-.322l-.05-.081c-.018-.023-.032-.053-.051-.076 1.084-1.232 2.103-2.045 2.843-2.255 1.658-.473 2.779.171 3.24 1.855.463 1.689-.17 2.831-1.828 3.305-.751.21-2.082.042-3.695-.468m3.465 5.445c-.118.63-.538 1.197-1.247 1.687-1.42.983-2.68.736-3.647-.715-.465-.697-.73-2.103-.745-3.899.028-.005.05-.017.076-.022.146-.031.288-.073.429-.126l.148-.062c.12-.053.235-.115.342-.182.036-.025.075-.045.109-.067a2.56 2.56 0 00.37-.325c.022-.025.042-.056.064-.084.084-.1.16-.21.23-.325.014-.022.03-.04.045-.062 1.633.678 2.812 1.446 3.28 2.143.479.723.664 1.41.546 2.04m-7.849.988c-.482.723-1.039 1.149-1.658 1.27-.62.114-1.286-.07-1.994-.564-1.42-.98-1.661-2.266-.698-3.72.454-.683 1.616-1.442 3.23-2.117.014.025.036.044.05.07.067.106.14.207.221.302.031.034.057.07.087.104.112.117.236.224.373.316.036.023.078.042.115.065.274.168.577.283.893.341.042.009.079.026.12.034-.01 1.798-.277 3.202-.739 3.9M5.36 13.181c-.827-.235-1.4-.636-1.709-1.193-.308-.558-.347-1.266-.118-2.11.23-.84.625-1.428 1.171-1.742.328-.182.7-.274 1.076-.266.305 0 .636.05.992.154.739.213 1.753 1.023 2.829 2.252a2.54 2.54 0 00-.275.493c-.022.05-.04.104-.059.157a3.695 3.695 0 00-.131.457c-.012.061-.026.123-.037.187a4.511 4.511 0 00-.036 1.149c-1.61.51-2.941.683-3.703.462m6.65-9.936c1.72.009 2.624.939 2.619 2.692 0 .793-.516 2.045-1.432 3.48-.028-.012-.061-.015-.09-.023-.128-.04-.26-.07-.392-.092a4.407 4.407 0 00-.711-.064c-.207 0-.4.016-.588.044l-.107.017a3.41 3.41 0 00-.442.106c-.023.006-.048.009-.067.017-.91-1.431-1.426-2.69-1.42-3.499 0-1.75.91-2.678 2.63-2.678m.134 10.793c-.048 0-.092.003-.14.009h-.076c-1.156-.026-1.448-.591-1.565-1.014a.435.435 0 00-.023-.065c-.017-.064-.025-.134-.036-.204-.006-.042-.017-.082-.023-.126a4.156 4.156 0 01-.02-.376c0-.694.18-1.185.533-1.462.022-.017.05-.03.1-.062.275-.17.648-.257 1.107-.257.462 0 .83.084 1.098.25.014.01.079.052.095.06.362.272.547.765.547 1.471a2.69 2.69 0 01-.084.731v.003c-.12.465-.404 1-1.513 1.042m9.51-4.51c-.65-2.364-2.423-3.378-4.748-2.722-.454.129-.916.39-1.37.711.19-.546.317-1.084.317-1.574.008-2.46-1.426-3.933-3.838-3.944h-.003C9.597 2 8.154 3.468 8.154 5.919c-.003.507.124 1.059.32 1.616-.454-.322-.916-.583-1.373-.714-1.132-.325-2.168-.247-2.997.227-.83.476-1.437 1.339-1.75 2.495-.648 2.37.352 4.18 2.677 4.838.308.09.655.129 1.014.134-.336.28-.63.583-.843.905-1.353 2.042-.97 4.081 1.022 5.454.77.538 1.563.812 2.325.812.196 0 .392-.017.583-.056.935-.18 1.779-.8 2.44-1.792a4.38 4.38 0 00.47-1.02c.123.37.272.717.462 1.003.821 1.23 1.874 1.86 3.023 1.86.748 0 1.538-.27 2.325-.815.975-.673 1.585-1.53 1.762-2.485.176-.95-.079-1.98-.74-2.975v-.003c-.216-.325-.515-.627-.857-.91.322-.003.641-.045.952-.126 2.328-.658 3.33-2.468 2.684-4.838"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFlowerRegular;