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

const IconGroupLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.16 11.045c.653.639 1.6.964 2.813.964s2.16-.322 2.818-.964c.683-.663 1.03-1.65 1.03-2.932 0-1.283-.347-2.272-1.03-2.939-.658-.641-1.608-.969-2.818-.969s-2.157.328-2.812.972c-.678.664-1.023 1.655-1.023 2.936 0 1.282.345 2.269 1.023 2.932Zm-.24-2.932c0-1.06.263-1.855.784-2.365.501-.495 1.266-.745 2.272-.745 1 0 1.764.25 2.271.745.524.513.787 1.309.787 2.365 0 1.056-.263 1.848-.787 2.358-.507.493-1.271.742-2.274.742-1.003 0-1.768-.249-2.269-.742-.521-.507-.784-1.302-.784-2.358Zm-3.656 2.58c.205-.2.532-.3.975-.297.448 0 .779.103.983.302.21.204.317.546.317 1.017 0 .468-.107.81-.317 1.014-.204.199-.535.3-.983.3-.445 0-.776-.101-.978-.3-.207-.205-.313-.546-.313-1.017 0-.47.106-.815.316-1.02Zm-.546 2.61c.356.345.868.521 1.524.521.658 0 1.173-.176 1.526-.524.37-.361.558-.896.558-1.59 0-.693-.188-1.23-.558-1.592-.355-.347-.868-.524-1.526-.524-.656 0-1.168.18-1.524.527-.367.361-.555.896-.555 1.591s.188 1.23.555 1.591Zm12.056-2.625c.204-.199.535-.3.983-.3.446 0 .776.101.978.3.21.208.316.55.316 1.02 0 .468-.106.81-.313 1.014-.205.199-.533.3-.98.3-.449 0-.78-.101-.984-.3-.21-.204-.317-.546-.317-1.014 0-.47.107-.815.317-1.02Zm-1.1 1.02c0 .695.187 1.23.557 1.591.355.345.868.521 1.526.518.659 0 1.171-.173 1.527-.52.37-.362.555-.897.555-1.589 0-.695-.188-1.232-.555-1.594-.356-.347-.868-.524-1.527-.524-.658 0-1.17.177-1.526.527-.37.361-.558.896-.558 1.591Zm5.383 5.933h-2.275c-.072-.989-.403-1.843-.966-2.496h1.207c.659 0 1.194.19 1.547.566.322.336.487.815.487 1.38v.55Zm-3.045.42v.941H5.936v-.941c0-1.03.306-1.9.886-2.513.636-.67 1.602-1.028 2.81-1.028h4.677c1.207 0 2.182.359 2.818 1.028.58.617.885 1.485.885 2.513ZM5.17 17.648h-2.23v-.552c0-.566.174-1.045.488-1.378.353-.373.888-.566 1.546-.566h1.154c-.563.653-.888 1.507-.958 2.496Zm16.672-.566c0-.773-.243-1.443-.706-1.93-.504-.535-1.232-.813-2.109-.815h-2.165c-.698-.415-1.56-.622-2.55-.622H9.635c-.997 0-1.868.216-2.566.639H4.973c-.88 0-1.608.28-2.112.803-.462.496-.706 1.166-.706 1.939v.706a.638.638 0 0 0 .636.641h2.361v.91c.003.244.2.44.44.44h12.765c.243 0 .44-.196.44-.44v-.924h2.417a.634.634 0 0 0 .627-.638v-.71Z"
            />
        </svg>
    );
};

export default IconGroupLight;
