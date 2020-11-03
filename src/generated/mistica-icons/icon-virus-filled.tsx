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

const IconVirusFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.838 15.692a.62.62 0 01.775.412.61.61 0 01-.411.764l-.933.289c.067.42.05.781-.025 1.095l.792.42c.306.157.42.535.255.832a.598.598 0 01-.543.33.583.583 0 01-.289-.067l-.806-.425c-.28.294-.611.501-.874.641l.288.939a.623.623 0 01-.412.773.629.629 0 01-.776-.412l-.288-.938c-.14.016-.288.033-.454.033-.199 0-.412-.025-.627-.073l-.437.815a.62.62 0 01-.544.33.621.621 0 01-.546-.905l.429-.814a2.774 2.774 0 01-.636-.88s0 .009-.008.009l-.942.288a.494.494 0 01-.182.034.617.617 0 01-.182-1.21l.941-.289c.009-.008.009 0 .017-.008a2.88 2.88 0 01.009-1.078l-.799-.429a.606.606 0 01-.255-.832.616.616 0 01.832-.263l.801.428c.28-.305.611-.51.883-.641l-.289-.938a.613.613 0 01.412-.765.626.626 0 01.776.403l.288.947c.14-.017.289-.034.463-.034.187 0 .403.026.619.073l.428-.815a.628.628 0 01.84-.263.63.63 0 01.255.84l-.42.798c.238.213.462.505.645.883l.93-.297zm11.436-1.639a.624.624 0 01.412.773.629.629 0 01-.594.437.452.452 0 01-.179-.033l-.815-.255c-.1.263-.255.518-.445.764l.627.628a.62.62 0 010 .871.65.65 0 01-.437.182.65.65 0 01-.437-.182l-.619-.616c-.213.173-.47.336-.759.454l.246.798a.623.623 0 01-.403.773.742.742 0 01-.19.025.606.606 0 01-.586-.426l-.297-.93a3.324 3.324 0 01-.955-.173c-.115-.034-.23-.081-.356-.132l-.072.616a.607.607 0 01-.611.535h-.073a.613.613 0 01-.535-.691l.132-1.054a11.995 11.995 0 01-1.12-.798l-.42.832a.618.618 0 01-.833.269.617.617 0 01-.272-.832l.547-1.079a28.514 28.514 0 01-1.26-1.168l-.816.816a.65.65 0 01-.437.182.634.634 0 01-.437-.182.62.62 0 010-.872l.818-.815a30.47 30.47 0 01-1.18-1.266l-1.08.544a.54.54 0 01-.272.064.617.617 0 01-.28-1.168l.823-.42c-.073-.098-.148-.19-.221-.289a11.361 11.361 0 01-.56-.823l-1.065.131h-.08a.616.616 0 01-.073-1.227l.627-.08c-.05-.107-.082-.214-.115-.314a3.501 3.501 0 01-.174-.98l-.955-.303a.611.611 0 01-.403-.773.614.614 0 01.776-.404l.831.252c.115-.28.28-.526.446-.73l-.644-.65a.62.62 0 010-.872.624.624 0 01.874 0l.652.65a3.2 3.2 0 01.734-.437l-.263-.849a.614.614 0 01.406-.773.626.626 0 01.776.404l.305.986c.297.008.61.058.955.165.11.03.216.073.33.115l.082-.65a.627.627 0 01.692-.535c.339.05.577.353.538.692l-.14 1.1c.353.213.725.48 1.112.782l.437-.863a.612.612 0 01.832-.271c.305.156.42.526.271.832l-.56 1.109c.395.347.815.734 1.252 1.168l.84-.849a.624.624 0 01.875 0 .606.606 0 010 .871l-.84.84c.428.435.814.858 1.17 1.25l1.112-.558a.63.63 0 01.835.28.615.615 0 01-.28.824l-.857.429c.305.395.577.764.792 1.12l1.096-.14a.616.616 0 01.683.535.614.614 0 01-.535.692l-.636.081c.182.462.28.888.297 1.291l.938.3z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVirusFilled;