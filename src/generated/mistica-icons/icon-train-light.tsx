'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTrainLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.743 9.638v11.999c0 .2-.166.363-.371.363A.368.368 0 0 1 4 21.637v-12C4 5.427 7.507 2 11.819 2c4.312 0 7.819 3.426 7.819 7.638v9.453c0 .2-.167.363-.372.363a.368.368 0 0 1-.371-.363V9.638c0-3.807-3.174-6.907-7.071-6.907-3.898 0-7.08 3.1-7.08 6.907ZM17.29 21.38a.351.351 0 0 1 0 .512.376.376 0 0 1-.524 0l-2.869-2.802h-4.16l-2.868 2.802a.376.376 0 0 1-.524 0 .351.351 0 0 1 0-.512l2.345-2.29h-.22c-1.024 0-1.863-.815-1.863-1.82v-8.36c0-1 .834-1.82 1.863-1.82h6.7c1.024 0 1.863.815 1.863 1.82v8.365c0 1-.834 1.82-1.863 1.82h-.22l2.34 2.285Zm-9.944-8.834h8.934V8.912c0-.6-.5-1.09-1.115-1.09h-6.7a1.105 1.105 0 0 0-1.12 1.09v3.635Zm1.12 5.818h6.699c.614 0 1.115-.489 1.115-1.09v-.125a1.32 1.32 0 0 1-.558.126c-.72 0-1.3-.573-1.3-1.27 0-.699.586-1.271 1.3-1.271.2 0 .391.046.558.125v-1.582H7.345v1.582a1.32 1.32 0 0 1 .557-.125c.72 0 1.301.572 1.301 1.27 0 .698-.581 1.27-1.296 1.27-.2 0-.39-.046-.557-.125v.126c-.005.6.5 1.089 1.115 1.089Zm0-2.36a.552.552 0 0 1-.558.545.552.552 0 0 1-.557-.545c0-.298.252-.544.557-.544.305 0 .558.246.558.544Zm7.256-.55a.552.552 0 0 0-.557.545c0 .298.252.545.557.545A.555.555 0 0 0 16.28 16a.552.552 0 0 0-.558-.544Zm2.792 5.819c0-.4.334-.726.744-.726.414 0 .743.326.743.726 0 .4-.334.726-.743.726a.736.736 0 0 1-.744-.726Z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="m2.155 14.449.001-.006.002-.005v-2.961c0-.001 0-.003-.002-.004l-.001-.004v-6.4c0-.133.042-.259.12-.351a.372.372 0 0 1 .289-.143H13.1c.196-.002 3.42-.028 7.187 4.51 1.112 1.339 1.616 2.711 1.501 4.081-.165 1.955-1.552 3.328-2.361 3.97-.311.246-.67.378-1.042.378h-.014c-1.062-.012-4.726-.031-15.804-.031-.227 0-.41-.222-.41-.493v-2.533zm.818-8.888v.97h8.93c.227 0 .409.22.409.492v4.446c0 .274-.182.493-.41.493H2.977v1.994h17.773l.008.001.009.002c.103-.283.182-.577.21-.894.03-.336 0-.678-.076-1.022h-7.35c-.227 0-.409-.219-.409-.493V5.56c-.017.003-.03.003-.034 0zm17.576 5.493.001.003v-.003zm0 0a6.544 6.544 0 0 0-.842-1.272c-2.44-2.938-4.605-3.829-5.748-4.1v5.372zm-1.576 5.258c.308-.244.84-.726 1.283-1.373H2.976v1.555c10.765 0 14.35.022 15.4.03a.871.871 0 0 0 .597-.212M5.36 10.976v-3.46H2.976v3.46zm.817 0h2.28v-3.46h-2.28zm5.317 0v-3.46H9.275v3.46zm10.347 7.958c0-.272-.182-.493-.409-.493H2.564c-.227 0-.409.22-.409.493 0 .271.182.493.409.493h18.868c.227 0 .41-.222.41-.493"
                />
            </svg>
        );
    }
};

export default IconTrainLight;
