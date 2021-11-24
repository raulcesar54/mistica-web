/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconVideogamesRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M15.927 8.35c.252 0 .448.065.586.193.142.135.215.334.215.594 0 .258-.073.457-.215.591-.138.13-.334.194-.586.194-.252 0-.448-.065-.585-.194-.143-.134-.213-.33-.213-.59 0-.261.073-.46.213-.595.134-.128.33-.193.585-.193zm-1.619 1.57c.252 0 .448.064.586.196.142.134.215.333.215.594 0 .257-.073.456-.215.59-.138.13-.334.194-.586.194-.252 0-.448-.064-.585-.193-.14-.135-.216-.33-.216-.591 0-.26.073-.46.216-.594.137-.132.333-.196.585-.196zm1.62 1.568c.251 0 .447.065.585.194.142.134.215.333.215.594 0 .257-.073.456-.215.59-.138.13-.334.194-.586.194-.252 0-.448-.065-.585-.193-.143-.135-.213-.331-.213-.591 0-.261.073-.46.213-.594.134-.13.33-.194.585-.194zm1.615-1.568c.253 0 .449.064.586.196.143.134.216.333.216.594 0 .257-.073.456-.216.59-.137.13-.333.194-.586.194-.254 0-.448-.064-.585-.193-.14-.135-.213-.33-.213-.591 0-.26.073-.46.213-.594.137-.132.333-.196.585-.196zm-8.378-.35c.359 0 .633.086.818.263.193.188.292.462.292.826 0 .364-.099.639-.292.821-.185.176-.462.266-.818.266h-.112l.003.023a.845.845 0 01.022.176c0 .364-.098.639-.29.82-.189.177-.463.264-.819.264-.358 0-.636-.087-.818-.266-.19-.177-.285-.454-.285-.82 0-.034.01-.121.016-.158-.042.003-.072.006-.168.006-.358 0-.633-.09-.818-.266-.187-.177-.285-.457-.285-.824 0-.367.098-.644.288-.823.182-.174.457-.266.815-.266.031 0 .115.005.146.01h.02c-.006-.05-.012-.1-.012-.159 0-.367.096-.644.292-.826.182-.174.456-.266.815-.266.358 0 .633.09.818.266.19.182.291.462.291.826 0 .017-.003.07-.008.107.01.002.042 0 .09 0zm11.087 6.868c.1-.33.227-1.034.23-1.297.03-2.263-1.149-4.978-1.782-6.437-.095-.221-.182-.417-.252-.585l-.036-.09-.104-.244-.025-.056-.014-.028-.006-.01-.039-.074a1.976 1.976 0 00-.316-.431c-.443-.42-1.118-.633-2.009-.633-.353 0-.695.045-1.04.137a6.775 6.775 0 00-.556.221c-.101.056-.32.18-.407.238-.6.404-1.297.617-2.022.617a3.598 3.598 0 01-2.022-.617c-.093-.061-.311-.184-.41-.24a8.984 8.984 0 00-.557-.222 4.105 4.105 0 00-1.04-.137c-.89 0-1.565.216-2.005.633-.103.1-.21.241-.316.431l-.031.062-.025.05-.028.06c-.034.075-.073.17-.118.277l-.022.056c-.07.168-.157.367-.252.585-.633 1.46-1.813 4.174-1.782 6.437.003.263.126.97.23 1.297.154.499.504.661.65.709.131.044.375.086.554.103.124-.003.55-.095.734-.179.157-.07.311-.17.47-.305.076-.065.104-.096.331-.376l.096-.117c.058-.076.114-.152.173-.227.165-.216.348-.46.591-.692.72-.686 1.636-1.188 2.717-1.49a7.717 7.717 0 014.118 0c1.084.302 1.997.804 2.717 1.49.244.232.431.476.594.692l.174.224.092.115c.227.28.258.31.33.378.2.17.373.258.485.305.171.076.656.174.818.174.064 0 .266-.037.46-.098.148-.045.498-.207.652-.706zm-.664-8.782c.563 1.348 2.166 4.63 2.126 7.5-.005.414-.16 1.237-.283 1.635-.243.793-.812 1.302-1.437 1.507-.255.081-.599.16-.848.16-.334 0-.99-.132-1.325-.283a3.19 3.19 0 01-.785-.496c-.187-.16-.271-.272-.58-.653-.22-.269-.414-.563-.666-.804-.58-.552-1.32-.95-2.196-1.193a6.374 6.374 0 00-1.723-.235 6.28 6.28 0 00-1.723.235c-.876.244-1.613.639-2.196 1.193-.252.241-.445.533-.663.804-.311.381-.393.493-.58.653-.314.266-.58.412-.77.496-.312.14-.908.285-1.261.285-.028 0-.056 0-.079-.002a4.187 4.187 0 01-.848-.16c-.625-.205-1.19-.714-1.437-1.507-.124-.398-.278-1.221-.286-1.636-.04-2.868 1.566-6.151 2.126-7.499.059-.14.11-.266.154-.36.04-.088.056-.116.067-.14l.056-.11c.154-.27.325-.521.55-.731.677-.647 1.644-.975 2.862-.975.504 0 .95.07 1.361.18.244.064.785.302.793.307 0 0 .415.233.546.32a2.377 2.377 0 002.653 0c.132-.087.546-.32.546-.32.012-.005.552-.243.796-.308.414-.112.86-.18 1.361-.18 1.221 0 2.185.329 2.866.976.221.21.395.462.546.73l.059.11c.011.025.028.053.067.14.042.095.092.221.151.361z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideogamesRegular;
