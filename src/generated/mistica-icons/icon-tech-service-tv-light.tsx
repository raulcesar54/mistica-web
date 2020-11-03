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

const IconTechServiceTvLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.993 18.043a.28.28 0 01.28.28.28.28 0 01-.28.28H8.985a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.008zM18.817 4.9c1.014 0 1.784.294 2.291.874.476.546.72 1.353.72 2.398v4.938c0 1.045-.241 1.852-.72 2.398-.504.582-1.277.877-2.291.877H5.16c-1.014 0-1.784-.295-2.291-.874-.476-.55-.72-1.356-.72-2.4V8.17c0-1.044.24-1.85.72-2.397.507-.58 1.277-.874 2.291-.874h13.656zm0 .56H5.16c-1.672 0-2.45.863-2.45 2.715v4.938c0 1.851.778 2.714 2.45 2.714h13.656c1.672 0 2.45-.863 2.45-2.714V8.172c0-1.852-.778-2.712-2.45-2.712zm-3.575 1.404c.56-.003 1.084.184 1.138.201.266.098.44.322.45.583.012.26-.142.498-.4.619l-.493.23-.073.35.314.168.496-.23a.713.713 0 01.31-.073.617.617 0 01.51.26.674.674 0 01.068.623 3.83 3.83 0 01-.28.585c-.26.448-.566.756-.908.916-.218.1-.476.154-.77.154-.516 0-1-.157-1.118-.199h-.011l-3.782 1.762-.008.009a3.723 3.723 0 01-.272.563c-.26.448-.566.756-.907.916-.219.1-.48.154-.77.154a3.65 3.65 0 01-1.14-.208c-.267-.098-.443-.325-.452-.582-.008-.258.146-.496.404-.617l.493-.23.073-.35-.314-.167-.493.23a.713.713 0 01-.311.072.617.617 0 01-.51-.26.672.672 0 01-.067-.622c.076-.205.17-.398.28-.586.26-.448.566-.756.908-.916.218-.1.479-.154.77-.154.515 0 1 .157 1.118.2h.01l3.78-1.763.008-.008c.075-.196.165-.384.272-.563.263-.448.568-.756.907-.913.219-.101.476-.154.77-.154zm0 .557c-.187.003-.375.03-.532.104-.566.266-.896 1.182-.896 1.182a.592.592 0 01-.269.297l-3.82 1.781a.627.627 0 01-.228.042.525.525 0 01-.173-.028l-.012-.004-.084-.028a3.054 3.054 0 00-.851-.142c-.188 0-.375.026-.535.101-.566.266-.896 1.182-.896 1.182-.028.082-.006.132.05.132a.16.16 0 00.073-.02l.552-.257a.437.437 0 01.179-.037.447.447 0 01.207.045l.55.294a.31.31 0 01.145.314l-.129.608a.49.49 0 01-.24.302l-.553.258c-.106.053-.103.126.009.168 0 0 .47.174.946.174.188 0 .376-.025.535-.101.566-.266.897-1.182.897-1.182a.598.598 0 01.269-.294l3.82-1.785a.627.627 0 01.227-.042c.06 0 .118.009.174.028 0 0 .47.174.947.174.187 0 .375-.025.535-.1.566-.267.896-1.183.896-1.183.028-.081.006-.131-.05-.131a.166.166 0 00-.073.02l-.552.257a.437.437 0 01-.18.036.44.44 0 01-.206-.045l-.55-.294a.308.308 0 01-.148-.313l.129-.611a.489.489 0 01.24-.305l.553-.258c.106-.05.103-.123-.009-.165 0 0-.47-.174-.947-.174z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceTvLight;