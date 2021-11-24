/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTechServiceInternetLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M7.544 13.107c3.056 0 5.544-2.494 5.544-5.556A5.55 5.55 0 007.544 2a5.554 5.554 0 000 11.107zm.374-.834V7.92h1.655c-.08 2.29-.851 3.949-1.655 4.352zm0-5.092V2.834c.804.403 1.575 2.062 1.655 4.352H7.918v-.005zm-.743-4.347v4.352H5.52c.08-2.29.852-3.953 1.656-4.352zm0 5.092v4.351c-.804-.403-1.575-2.062-1.656-4.351h1.656zm1.992 4.152c.652-.934 1.088-2.422 1.14-4.157h2.024a4.813 4.813 0 01-3.164 4.157zm3.164-4.897h-2.024c-.057-1.73-.488-3.223-1.14-4.157A4.824 4.824 0 0112.33 7.18zM5.926 3.03c-.653.934-1.083 2.422-1.14 4.157H2.762A4.813 4.813 0 015.926 3.03zM2.762 7.926h2.024c.057 1.73.487 3.223 1.14 4.157a4.824 4.824 0 01-3.164-4.157zm18.259 5.247a3.317 3.317 0 01-3.212.858.37.37 0 01-.26-.455.369.369 0 01.454-.26 2.567 2.567 0 002.493-.669 2.59 2.59 0 00.719-2.29l-1.24 1.247a1.108 1.108 0 01-1.546.024l-.54-.507a1.11 1.11 0 01-.345-.792 1.085 1.085 0 01.327-.801l1.258-1.261a2.592 2.592 0 00-2.952 3.224l.057.208-4.522 4.518-.209-.057a2.59 2.59 0 00-3.217 2.958l1.245-1.247a1.104 1.104 0 011.547-.024l.539.508c.218.208.34.488.345.791.005.304-.109.588-.326.801l-1.258 1.261a2.592 2.592 0 002.952-3.224l-.057-.208 1.23-1.232a.362.362 0 01.52 0 .368.368 0 010 .521l-.937.939a3.34 3.34 0 01-.908 3.005c-.63.65-1.476.991-2.337.991-.44 0-.88-.085-1.3-.265l-.507-.214 2.081-2.086a.373.373 0 00-.004-.53l-.54-.508a.37.37 0 00-.515.01l-2.067 2.071-.213-.507a3.336 3.336 0 01.71-3.66 3.324 3.324 0 012.998-.91l3.927-3.934a3.34 3.34 0 01.908-3.006 3.316 3.316 0 013.652-.71l.506.212-2.081 2.086a.373.373 0 00.004.531l.54.507a.365.365 0 00.515-.009l2.067-2.072.213.508a3.33 3.33 0 01-.714 3.66zm-3.865 2.157a.74.74 0 01-.738.74.74.74 0 010-1.48.74.74 0 01.738.74z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M21.548 18.043a.28.28 0 01.28.28.28.28 0 01-.28.28H2.43a.28.28 0 01-.28-.28.28.28 0 01.28-.28h19.118zM18.825 4.9c1.014 0 1.784.294 2.291.874.477.546.72 1.353.72 2.398v4.938c0 1.045-.24 1.852-.72 2.398-.507.582-1.277.877-2.29.877H5.17c-1.014 0-1.785-.295-2.292-.874-.479-.55-.72-1.356-.72-2.4V8.17c0-1.044.241-1.85.72-2.397.507-.58 1.278-.874 2.292-.874h13.655zm0 .56H5.17c-1.673 0-2.451.863-2.451 2.715v4.938c0 1.851.778 2.714 2.45 2.714h13.656c1.672 0 2.451-.863 2.451-2.714V8.172c0-1.852-.779-2.712-2.45-2.712zm-3.574 1.4c.557 0 1.081.188 1.137.208.266.098.44.322.451.583.011.26-.143.498-.4.619l-.493.23-.073.35.313.168.493-.23a.713.713 0 01.311-.073c.202 0 .392.095.51.26a.672.672 0 01.067.622 3.62 3.62 0 01-.28.586c-.26.448-.566.756-.907.916a1.84 1.84 0 01-.77.154c-.516 0-1-.157-1.118-.199h-.011l-3.782 1.762-.008.008a3.723 3.723 0 01-.272.563c-.26.449-.566.757-.908.916a1.83 1.83 0 01-.77.154 3.65 3.65 0 01-1.14-.207c-.266-.098-.443-.322-.451-.582a.664.664 0 01.403-.62l.493-.23.073-.35-.314-.167-.493.23a.713.713 0 01-.31.072.617.617 0 01-.51-.26.672.672 0 01-.067-.622 3.62 3.62 0 01.28-.586c.26-.448.565-.756.907-.916.219-.1.48-.154.77-.154.516 0 1 .157 1.118.2h.011l3.78-1.763.007-.008c.076-.196.166-.384.272-.563.263-.448.569-.756.91-.916.219-.101.477-.154.77-.154zm0 .561c-.188 0-.376.028-.535.1-.566.267-.897 1.183-.897 1.183a.592.592 0 01-.268.297L9.73 10.785a.627.627 0 01-.227.042.525.525 0 01-.174-.028s-.47-.174-.947-.174a1.27 1.27 0 00-.535.101c-.565.266-.896 1.182-.896 1.182-.028.082-.005.132.05.132a.154.154 0 00.073-.02l.552-.257a.437.437 0 01.18-.037.447.447 0 01.207.045l.549.294a.306.306 0 01.145.314l-.128.61a.49.49 0 01-.241.303l-.552.258c-.107.053-.104.126.008.168l.044.015c.128.042.513.159.903.159.188 0 .375-.026.535-.101.566-.266.896-1.182.896-1.182a.598.598 0 01.27-.294l3.82-1.788a.627.627 0 01.227-.042c.059 0 .118.009.174.028 0 0 .47.174.946.174.188 0 .376-.025.535-.1.566-.267.897-1.183.897-1.183.028-.081.005-.131-.05-.131a.166.166 0 00-.073.02l-.552.257a.437.437 0 01-.18.036.447.447 0 01-.207-.045l-.549-.294a.31.31 0 01-.146-.313l.13-.611a.489.489 0 01.24-.305l.552-.258c.106-.05.104-.123-.008-.165l-.012-.004-.084-.028a3.054 3.054 0 00-.851-.142z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTechServiceInternetLight;
