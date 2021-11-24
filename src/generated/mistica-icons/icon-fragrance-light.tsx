/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFragranceLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.408 19.188c1.95-1.07 2.98-2.93 2.98-5.39 0-4.386-3.53-5.736-5.047-6.112a9.741 9.741 0 00-2.34-.28c-.882 0-1.778.123-2.63.376-.014.005-.03.008-.044.014-2.566.773-4.706 2.72-4.706 6.002 0 2.423 1.05 4.28 3.036 5.376a.074.074 0 00.017.014h8.734zm.162 1.68a.431.431 0 000-.86h-9.1a.431.431 0 000 .86h9.1zM9.612 3.944v2.924a10.316 10.316 0 012.39-.283c.7 0 1.38.084 2.042.213V3.944c0-.622-.505-1.126-1.126-1.126h-2.182c-.62 0-1.124.507-1.124 1.126zm10.594 9.854c0 2.507-.966 4.468-2.793 5.726.247.227.404.552.404.913 0 .69-.56 1.25-1.25 1.25H7.47a1.25 1.25 0 01-1.249-1.25c0-.37.165-.698.42-.927-1.411-.97-2.84-2.695-2.84-5.712 0-3.602 2.25-5.77 4.992-6.692V3.944A1.945 1.945 0 0110.736 2h2.182c1.072 0 1.944.871 1.944 1.944V6.98c3.353.958 5.344 3.482 5.344 6.818zm-5.095 1.544v-2.905a.937.937 0 00-.936-.936H9.582a.937.937 0 00-.936.936v2.905c0 .518.42.938.936.938h4.593c.516 0 .936-.42.936-.938zm-.936-4.661c.97 0 1.757.787 1.757 1.753v2.905c0 .97-.787 1.756-1.757 1.756H9.582c-.97 0-1.757-.787-1.757-1.756v-2.905c0-.969.787-1.753 1.757-1.753h4.593zm-2.14-5.807a.466.466 0 10.932-.001.466.466 0 00-.932 0zm1.751 0a1.285 1.285 0 11-2.567.001 1.285 1.285 0 012.567-.001zm2.51-.535a.41.41 0 01-.289-.7l.818-.818a.41.41 0 01.58.58l-.818.817a.407.407 0 01-.291.12zm-.087.513c0-.227.182-.41.409-.41h1.496c.227 0 .409.183.409.41a.408.408 0 01-.41.409h-1.495a.41.41 0 01-.409-.41zm-.154.677a.41.41 0 01.58 0l.862.866a.41.41 0 01-.288.7.4.4 0 01-.289-.12l-.862-.866a.408.408 0 01-.003-.58zm-5.49 7.908a.41.41 0 010-.818h2.624c.227 0 .41.182.41.409a.408.408 0 01-.41.409h-2.624zm3.613.804c.227 0 .41.182.41.409a.408.408 0 01-.41.409h-4.6a.408.408 0 01-.408-.41c0-.226.182-.408.409-.408h4.6z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFragranceLight;
