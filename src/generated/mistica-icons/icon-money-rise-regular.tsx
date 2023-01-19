/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMoneyRiseRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.127 6.455a.757.757 0 00.686.445l1.148.011.003 1.978a1.1 1.1 0 001.093 1.106h1.717a1.1 1.1 0 001.092-1.109l-.003-1.978L21.01 6.9c.297 0 .56-.17.69-.445.128-.275.089-.605-.138-.883l-3.05-3.131a1.111 1.111 0 00-.115-.115.736.736 0 00-.56-.165c-.202.022-.384.126-.466.235l-3.142 3.216a.807.807 0 00-.101.843zM2.89 7.46c0-.344.278-.624.617-.624h.375a2.974 2.974 0 00-.014-.165 2.718 2.718 0 01-.017-.27c0-.02.002-.04.004-.06a.394.394 0 00.005-.06h-.356a.62.62 0 01-.616-.625c0-.344.277-.624.616-.624h.515c.437-1.804 1.785-2.793 3.933-2.793.804 0 1.504.137 2.084.412a.632.632 0 01.3.832.614.614 0 01-.818.305c-.417-.196-.944-.297-1.566-.297-1.428 0-2.294.499-2.661 1.54h2.036a.62.62 0 01.617.625.622.622 0 01-.617.625H5.093c0 .021-.002.04-.004.06a.554.554 0 00-.004.06c0 .104.007.2.015.295l.01.14h2.218a.62.62 0 01.617.624.622.622 0 01-.617.625H5.43c.423.823 1.247 1.227 2.524 1.227.63 0 1.16-.101 1.58-.303a.614.614 0 01.82.3.631.631 0 01-.293.835c-.586.28-1.295.423-2.107.423-2.022 0-3.344-.871-3.857-2.476h-.591a.628.628 0 01-.614-.63zm15.03-3.85l1.998 2.05-.538.006a.757.757 0 00-.538.246.763.763 0 00-.21.54l.003 2.295h-1.432L17.2 6.474a.774.774 0 00-.762-.81l-.521-.005 2.002-2.05zm2.082 16.748c-.986.3-2.723.3-3.7.002-.502-.154-.594-.302-.606-.325v-.854l.066.027c.061.026.121.05.19.071.604.185 1.386.286 2.204.286.818 0 1.6-.1 2.204-.286a2.02 2.02 0 00.193-.074l.056-.024v.852s-.078.165-.607.325zm-5.547-.311c-.09.087-.282.215-.602.313-.975.297-2.717.297-3.7.003-.353-.109-.535-.235-.613-.308v-.913l.084.035c.056.023.113.047.176.066.605.185 1.387.285 2.205.285.817 0 1.602-.1 2.204-.285.057-.018.11-.04.16-.06.029-.013.057-.024.086-.035v.899zm-6.753.313c-.975.297-2.717.3-3.697-.002-.359-.11-.541-.233-.617-.308v-.9l.085.035c.056.024.112.047.176.066.602.185 1.386.286 2.204.286.818 0 1.603-.1 2.205-.286.057-.017.106-.038.156-.058.03-.013.06-.025.093-.037v.885c-.084.081-.263.216-.605.32zm-4.16-2.504c.093-.059.227-.126.457-.196.98-.3 2.72-.3 3.7 0 .233.073.37.143.46.199a2.03 2.03 0 01-.457.193c-.98.3-2.717.297-3.697 0a1.861 1.861 0 01-.463-.196zm6.608-2.515c.98-.297 2.723-.297 3.7 0 .236.07.37.14.46.199a1.976 1.976 0 01-.457.193c-.975.297-2.717.297-3.697 0a1.69 1.69 0 01-.46-.199 2.03 2.03 0 01.454-.193zm5.695-2.081c.092-.06.232-.126.454-.194.983-.302 2.72-.3 3.703 0 .232.073.37.14.46.2a1.978 1.978 0 01-.457.192c-.98.3-2.72.297-3.698 0a1.72 1.72 0 01-.462-.198zm-.151 3.605l.092.036c.052.022.105.044.165.062.602.185 1.384.285 2.205.285.82 0 1.605-.103 2.204-.285.062-.02.118-.043.174-.067l.075-.031v.896c-.086.087-.28.218-.605.32-.983.299-2.717.299-3.7 0-.347-.104-.532-.228-.61-.303v-.913zm.079-2.274c.056.024.112.048.175.066.605.182 1.387.283 2.205.283.818 0 1.6-.1 2.204-.285.07-.021.128-.045.188-.07l.062-.026v.886c-.082.08-.264.215-.605.319-.978.3-2.717.3-3.698 0-.358-.11-.538-.233-.616-.308v-.9l.085.035zM9.54 17.733h-.003v-.902l.085.034c.056.023.112.046.175.067.603.185 1.384.286 2.205.286.82 0 1.605-.101 2.204-.286.058-.018.11-.04.16-.06a3.28 3.28 0 01.087-.035v.888c-.082.084-.26.212-.6.316-.98.3-2.714.297-3.697 0-.356-.11-.538-.232-.616-.308zm12.302-4.336c0-.49-.258-1.154-1.487-1.53-1.205-.37-3.205-.37-4.412.006-.801.244-1.283.639-1.437 1.174a1.22 1.22 0 00-.05.353v.84a2.577 2.577 0 00-.25-.092c-1.201-.37-3.207-.37-4.412 0-.8.243-1.285.638-1.437 1.173-.033.112-.05.23-.05.353v.882l-.063-.024a2.435 2.435 0 00-.19-.068c-1.204-.367-3.206-.367-4.41 0-.802.244-1.287.639-1.44 1.174v.003a1.325 1.325 0 00-.048.35v2.31c0 .2.095.368.238.482.255.33.678.597 1.255.773.6.185 1.384.286 2.204.286.821 0 1.605-.1 2.205-.286a2.98 2.98 0 00.86-.417 3 3 0 00.882.417c.602.185 1.384.286 2.205.286.82 0 1.605-.1 2.204-.286a3 3 0 00.863-.417c.215.157.493.303.87.417.606.185 1.387.286 2.205.286.818 0 1.603-.1 2.208-.286 1.23-.375 1.487-1.039 1.487-1.529v-6.63z"
            />
        </svg>
    );
};

export default IconMoneyRiseRegular;
