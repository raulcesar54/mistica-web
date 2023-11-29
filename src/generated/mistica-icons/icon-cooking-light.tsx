'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCookingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.24 7.869c.05.173.202.285.37.285.034 0 .07-.005.1-.016L18.972 4.03a.39.39 0 0 0 .267-.482.386.386 0 0 0-.474-.269l-5.146 1.48s-.039-.194-.084-.348c-.249-.865-1.039-1.737-2.456-1.33-1.415.408-1.65 1.582-1.418 2.459l.045.162c.014.042.034.101.062.171l-5.26 1.513a.392.392 0 0 0-.267.482Zm7.05-4.034c1.034-.3 1.39.373 1.516.796.042.15.107.333.107.333l-2.404.692a1.904 1.904 0 0 1-.064-.172l-.003-.01-.037-.135c-.114-.434-.15-1.207.886-1.504Zm10.547 12.022c0-1.498-1.037-2.044-1.924-2.05h-.003l-.219-.011c.003-.093.003-1.093.003-1.395.087-.059.16-.118.219-.174.226-.224.495-.627.495-1.308 0-.678-.269-1.084-.495-1.305a1.576 1.576 0 0 0-.704-.398c-.078-.658-.358-1.067-.599-1.305-.392-.387-.924-.583-1.583-.583-.66 0-1.19.199-1.585.583a2.29 2.29 0 0 0-.232.285c-.522.02-.959.168-1.306.443a2.33 2.33 0 0 0-.837-.143c-.384 0-.69.073-.933.18l-.005-.007a.967.967 0 0 0-.085-.092c-.235-.232-.67-.51-1.375-.51-.706 0-1.14.28-1.376.513a.335.335 0 0 1-.03.034 2.1 2.1 0 0 0-.328-.025c-.633 0-1.02.249-1.235.462a1.608 1.608 0 0 0-.115.126 1.673 1.673 0 0 0-.939.378c-.028-.003-.053-.003-.075-.003-.546 0-.894.213-1.093.4-.554.01-.902.233-1.092.424-.205.199-.445.566-.445 1.17v.382c0 .207.078.408.224.554.014.016.032.027.051.038a.303.303 0 0 1 .041.027v1.15l.001.058.002.058c-.065-.009-.112-.009-.177-.009h-.002c-.888.006-1.925.55-1.925 2.05 0 1.5 1.042 2.048 1.933 2.062l.162-.003c.057 0 .143-.005.283-.025l.196-.011c.589 1.964 1.838 3.135 4.345 3.135.185 0 .356-.009.501-.02h4.78c.167.011.338.022.52.022s.353-.008.499-.02h.224c.05 0 .1-.01.146-.033 1.958-.244 2.977-1.356 3.484-3.081.123.011.457.036.51.036l.162.003c.894-.014 1.936-.563 1.936-2.062Zm-3.165-3.95v.007h-3.34l-1.383.005h-2.207c-.019 0-.033-.003-.048-.006l-.03-.005h-1.561a.161.161 0 0 0-.036.005c-.012.003-.025.006-.04.006H7.792l-3.092.02v-.381c0-.266.072-.468.213-.608.134-.135.33-.205.58-.205.045 0 .087.007.127.012.07.01.133.02.192-.009.057-.026.084-.07.112-.115.018-.029.036-.058.061-.084.135-.134.33-.201.583-.201.062 0 .109.01.15.018.057.013.104.023.17-.002a.568.568 0 0 0 .187-.142l.017-.017c.165-.163.4-.244.703-.244a.35.35 0 0 0 .204-.056c.072-.046.106-.102.14-.159a.563.563 0 0 1 .09-.121c.163-.163.4-.244.703-.244.146 0 .261.042.372.081.036.013.071.026.107.037.031.008.081.011.129-.006.07-.022.112-.084.112-.084l.008-.02a.903.903 0 0 1 .166-.237c.196-.19.479-.292.843-.292.361 0 .647.101.843.292.151.145.227.36.266.607 0 0 .025.073.087.087a.12.12 0 0 0 .126-.036l.032-.054c.03-.051.06-.103.1-.142.22-.216.538-.325.944-.325.406 0 .725.109.944.325.016.017.025.022.044.022.023-.003.026-.008.037-.03.053-.096.115-.186.19-.258.247-.241.6-.362 1.05-.362.043 0 .083.007.123.013.075.012.145.023.206-.016.033-.022.042-.044.053-.078.061-.165.148-.308.266-.423.24-.24.594-.364 1.047-.364.454 0 .804.123 1.05.364.258.25.387.622.387 1.1 0 .056-.009.105-.017.15-.012.067-.023.123 0 .167.022.04.105.039.182.037h.043c.305 0 .543.081.708.244.171.17.258.42.258.742 0 .325-.087.574-.258.742-.165.163-.403.244-.708.244Zm1.22 5.23h-.133c-.037 0-.253-.016-.334-.025.146-.756.221-1.605.252-2.532l.233.011c.434.003 1.162.174 1.162 1.27 0 1.095-.74 1.27-1.18 1.276Zm-.968-4.422c-.003.43-.003 1.064-.003 1.134-.037 4.375-.952 6.095-3.375 6.35a.367.367 0 0 0-.076.017h-.12a7.45 7.45 0 0 1-.97 0H9.551l-.088.005c-.125.007-.252.015-.385.015-3.006 0-4.028-1.653-4.048-6.535v-.986h13.894ZM4.403 17.124c-.067.008-.12.01-.16.01h-.137c-.44-.005-1.177-.181-1.177-1.277 0-1.095.729-1.266 1.163-1.268.07 0 .134-.003.188-.009.03.958.106 1.754.263 2.532a.786.786 0 0 1-.107.01l-.033.002Z"
            />
        </svg>
    );
};

export default IconCookingLight;
