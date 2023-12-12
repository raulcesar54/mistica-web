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

const IconNeuralNetworkRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.919 3.993c3.034.224 4.1 2.75 4.1 4.93 0 .565-.083 1.918-.8 3.078.72 1.162.804 2.51.804 3.073 0 2.193-1.084 4.745-4.104 4.938-.476 1.185-1.49 1.83-2.9 1.83-.93 0-1.579-.468-2.008-1.012-.403.502-1.053 1.011-2.03 1.011-1.415 0-2.432-.647-2.905-1.837-3.034-.224-4.101-2.754-4.101-4.933 0-.563.084-1.916.804-3.076-.72-1.162-.804-2.51-.804-3.072 0-2.197 1.084-4.748 4.104-4.939.479-1.17 1.512-1.829 2.899-1.829.93 0 1.577.468 2.005 1.011.406-.501 1.056-1.011 2.034-1.011 1.412 0 2.429.65 2.902 1.838M9.978 20.637c.86 0 1.28-.826 1.398-1.095.002-.258.008-.902.008-1.079v-.294H6.252a.61.61 0 0 1-.616-.594l-.011-.742c0-.007.001-.013.003-.018l.002-.018a1.137 1.137 0 0 1-.557-.973c0-.635.53-1.15 1.176-1.15.648 0 1.177.515 1.177 1.15a1.144 1.144 0 0 1-.571.98v.007c.002.002.002.005.002.005v.146h4.519v-4.824H9.899v1.252c.337.202.56.56.56.975 0 .633-.529 1.149-1.176 1.149-.647 0-1.176-.516-1.176-1.149.002-.4.215-.77.56-.975v-1.854a.614.614 0 0 1 .619-.602h2.092v-1.02H7.132a1.175 1.175 0 0 1-.997.546c-.653 0-1.18-.515-1.18-1.148 0-.636.53-1.151 1.18-1.151.403 0 .781.204.997.546h4.252v-1.21h-1.12a1.182 1.182 0 0 1-.998.546c-.65 0-1.176-.515-1.176-1.148 0-.636.526-1.152 1.176-1.152.404 0 .782.205.998.546h1.12v-.767c-.006-.14-.003-.717 0-.938-.084-.26-.454-1.23-1.403-1.23-.746 0-1.27.252-1.591.756.114.045.224.095.33.157l.007.004a.6.6 0 0 1 .206.825.626.626 0 0 1-.846.207c-.16-.092-.342-.123-.552-.131-3.087 0-3.322 2.871-3.322 3.748 0 .383.059 1.672.754 2.63.156.12.38.199.672.224.308.025.549-.014.725-.118a.623.623 0 0 1 .846.202l.009.017a.595.595 0 0 1-.216.812c-.305.18-.672.27-1.073.286.045.064.11.115.185.137.314.12.513.476.398.785-.093.243-.306.409-.55.409a.613.613 0 0 1-.187-.031c-.007 0-.067-.022-.095-.032l-.014-.005c-.53-.201-.97-.65-1.009-1.277-.403.86-.448 1.798-.448 2.115 0 .88.236 3.748 3.244 3.748l.011.001.011.002c.013 0 .024-.003.036-.005.016-.003.031-.006.048-.004.213.003.435-.07.687-.232a.625.625 0 0 1 .858.18l.004.007a.597.597 0 0 1-.187.821 3.092 3.092 0 0 1-.546.272c.319.518.848.773 1.602.773m6.56-1.824h.006c3.008-.047 3.243-2.868 3.24-3.742 0-.39-.058-1.728-.795-2.69-.384-.4-.91-.64-1.571-.71h-.006a.607.607 0 0 1-.538-.667.613.613 0 0 1 .68-.532c.628.061 1.23.271 1.757.616.429-.871.474-1.843.474-2.165 0-.88-.236-3.748-3.244-3.748h-.003c-.686-.023-1.006.607-1.1.87l-.051.15a.615.615 0 0 1-.77.397.6.6 0 0 1-.41-.753l.065-.188c.213-.588.672-1.185 1.361-1.482-.316-.538-.848-.807-1.616-.807-.863 0-1.283.83-1.395 1.09-.003.258-.008.902-.008 1.078v3.188h3.68v-.874a1.14 1.14 0 0 1-.557-.972c0-.636.53-1.151 1.176-1.151.647 0 1.177.515 1.177 1.151 0 .415-.227.773-.563.975v1.476a.608.608 0 0 1-.616.602h-2.185V11.8c.185.093.341.236.454.412l2.857-.006c.162 0 .319.065.437.177.114.112.179.266.179.426v1.857c.333.204.557.563.557.972 0 .636-.53 1.151-1.176 1.151-.653 0-1.18-.518-1.18-1.151 0-.412.227-.773.564-.975v-1.25l-2.247.006a1.178 1.178 0 0 1-.994.544c-.647 0-1.177-.518-1.177-1.152 0-.38.196-.72.49-.93V9.926h-.874v6.171h1.239c.207-.325.574-.546.997-.546.647 0 1.176.515 1.176 1.151s-.526 1.151-1.176 1.151c-.423 0-.79-.218-.998-.546H12.62v1.16c.006.14.003.717 0 .938.082.26.451 1.23 1.4 1.23.771 0 1.3-.269 1.617-.807a3.13 3.13 0 0 1-.46-.238 3.157 3.157 0 0 1-.254-.182.592.592 0 0 1-.084-.835c.218-.26.6-.302.868-.095.048.037.098.073.151.107.247.16.482.232.681.23"
            />
        </svg>
    );
};

export default IconNeuralNetworkRegular;
