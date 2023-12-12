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

const IconTramTrainRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.984 7.88c.199.009 4.216.244 6.067 4.042 2.076 4.258-.47 5.953-1.56 6.675l-.073.048a2.051 2.051 0 0 1-1.131.345h-.017l-.625-.003c-.092.994-.776 1.627-1.807 1.627-1.036 0-1.72-.639-1.81-1.639l-2.57-.005c-.087 1-.774 1.641-1.81 1.641-1.04 0-1.723-.644-1.81-1.647h-.456c-.084 1.006-.77 1.647-1.81 1.647-1.039 0-1.725-.644-1.81-1.647H2.758a.605.605 0 0 1-.602-.61V8.49c0-.163.064-.317.176-.432a.596.596 0 0 1 .426-.179h5.294l1.034-1.047a.606.606 0 0 1-.384-.566V4.61H2.757a.605.605 0 0 1-.602-.61c0-.336.269-.611.602-.611h18.348c.333 0 .602.272.602.61 0 .337-.27.611-.602.611H15.16v1.656c0 .336-.27.61-.603.61h-1.395l-.989 1.003zm3.773 9.745.076-.05.004-.003c.481-.322 1.067-.713 1.436-1.325H3.363v1.502H4c.3-.527.851-.838 1.574-.838.723 0 1.275.31 1.574.838h.927c.3-.53.852-.84 1.575-.84.722 0 1.274.31 1.574.84l3.036.005c.297-.53.852-.846 1.577-.846.732 0 1.286.32 1.583.857l.857.006c.168.028.334-.048.48-.146m-2.919 1.765c.449 0 .622-.177.622-.63 0-.454-.173-.63-.622-.63-.448 0-.621.176-.621.63 0 .453.176.63.621.63m-6.812-.63c0 .453.177.63.622.63.448 0 .622-.177.622-.63 0-.454-.174-.63-.622-.63s-.622.176-.622.63m-3.454.63c.448 0 .622-.177.622-.63 0-.454-.174-.63-.622-.63s-.622.176-.622.63c0 .453.174.63.622.63m-.053-6.216v-2.123H3.362v2.123zm1.205 0h1.935v-2.123H6.724zm5.114 0v-2.123H9.864v2.123zm1.99-4.07-10.469.003v.726h9.082c.333 0 .602.271.602.61v3.345c0 .336-.269.61-.602.61H3.359v.62h17.247a.03.03 0 0 1 .011.002c.004.002.007.003.011.003a3.471 3.471 0 0 0-.02-.557H14.43a.605.605 0 0 1-.602-.611zM11.46 6.877h-.717L9.754 7.88h.717zm-1.554-1.22h4.05V4.61h-4.05zM20.3 13.241a8.93 8.93 0 0 0-.331-.776c-1.423-2.92-4.409-3.308-4.935-3.356v4.132z"
            />
        </svg>
    );
};

export default IconTramTrainRegular;
