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

const IconVideogamesLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.118 8.32c.256 0 .456.065.595.192.145.134.22.33.22.589 0 .255-.075.452-.22.585-.14.128-.339.192-.595.192-.256 0-.455-.064-.594-.192-.143-.133-.217-.327-.217-.585 0-.258.074-.455.217-.589.14-.127.338-.191.594-.191zm-1.641 1.555c.256 0 .455.064.594.194.145.134.22.33.22.589 0 .255-.075.452-.22.585-.14.128-.338.192-.594.192-.256 0-.456-.064-.595-.192-.142-.133-.219-.327-.219-.585 0-.258.074-.455.22-.589.136-.127.335-.194.594-.194zm1.641 1.557c.256 0 .456.064.595.192.145.133.22.33.22.588 0 .255-.075.452-.22.586-.14.127-.339.191-.595.191-.256 0-.455-.064-.594-.191-.143-.134-.217-.328-.217-.586 0-.255.074-.455.217-.588.14-.128.338-.192.594-.192zm1.645-1.557c.256 0 .455.064.594.194.146.134.22.33.22.589 0 .255-.074.452-.22.585-.139.128-.338.192-.594.192-.26 0-.455-.064-.595-.192-.145-.133-.216-.327-.216-.585 0-.258.074-.455.216-.589.14-.127.339-.194.595-.194zM9.3 10.994c.089-.084.103-.275.103-.384 0-.105-.014-.3-.103-.383-.065-.06-.207-.094-.398-.094-.054 0-.065.006-.085.006h-.032c-.011 0-.022 0-.02-.003a1.27 1.27 0 01-.105.005.458.458 0 01-.242-.058c-.108-.066-.182-.183-.222-.344-.017-.064-.017-.12-.017-.175l-.002-.03c.002-.011.002-.02.002-.028.003-.028.009-.058.009-.075 0-.108-.014-.303-.103-.386-.065-.06-.207-.094-.398-.094-.188 0-.327.033-.392.094-.092.083-.103.278-.103.386 0 .064.009.114.017.166 0 .003 0 .006.003.009.003.02-.003.033 0 .053a.493.493 0 01-.077.34c-.08.106-.21.17-.387.195-.008.003-.017.003-.028.003-.023 0-.043-.003-.068-.003H6.65c-.029 0-.057.003-.083.003-.02 0-.037-.003-.057-.006h-.003c-.03-.002-.06-.01-.096-.01-.188 0-.327.033-.393.096-.088.084-.102.275-.102.383 0 .184.037.322.1.383.065.059.207.095.395.095.094 0 .094 0 .162-.011h.003c.014 0 .06-.006.074-.006h.003c.028-.003.06-.003.088-.003.09 0 .173.017.239.059.108.066.182.18.222.341.014.053.011.094.014.139 0 .016.003.03.003.044-.006.03-.009.059-.012.086-.005.034-.014.072-.014.1 0 .183.037.325.1.383.065.058.207.092.392.092.188 0 .333-.034.399-.095.088-.083.102-.274.102-.383 0-.027-.014-.069-.017-.105l-.009-.061c-.002-.025-.002-.05-.002-.078 0-.033-.009-.064-.006-.1.017-.163.077-.291.176-.369a.516.516 0 01.33-.097h.046l.045.003h.003a.288.288 0 00.08.008h.074c.185.003.33-.033.395-.091zm-.281-1.66c.364.016.651.125.859.316.239.222.358.544.358.96 0 .42-.12.742-.36.964-.203.186-.482.291-.854.31 0 .42-.123.741-.362.963-.227.209-.557.317-.976.317-.418 0-.742-.106-.973-.317-.224-.21-.347-.519-.355-.91-.393-.011-.703-.116-.922-.319-.236-.22-.359-.541-.359-.96 0-.417.123-.741.359-.96.219-.203.529-.311.922-.323.008-.39.128-.696.355-.907.23-.214.555-.322.973-.322.419 0 .749.108.976.322.222.202.344.494.359.866zm11.892 7.121c.106-.338.248-1.076.254-1.398.031-2.329-1.187-5.068-1.844-6.54-.097-.218-.185-.41-.253-.574l-.032-.077c-.042-.103-.082-.192-.113-.264a.647.647 0 00-.037-.075l-.009-.017-.023-.044-.042-.075a2.21 2.21 0 00-.39-.508c-.53-.494-1.315-.74-2.33-.74a4.63 4.63 0 00-1.167.146 7.78 7.78 0 00-.646.247c-.096.053-.364.2-.46.264a3.325 3.325 0 01-3.64 0c-.1-.064-.366-.214-.463-.267a7.206 7.206 0 00-.646-.247 4.596 4.596 0 00-1.164-.147c-1.018 0-1.8.25-2.33.741-.142.13-.27.303-.407.539l-.031.058-.003.003-.023.047-.037.075c-.037.08-.08.18-.128.291l-.02.048c-.07.166-.156.358-.253.577-.654 1.47-1.875 4.21-1.843 6.541.002.322.145 1.06.25 1.4.15.474.486.824.927.965.168.053.447.106.663.12.23 0 .72-.109.948-.209.199-.086.387-.205.58-.366.108-.092.157-.147.39-.427l.097-.114.185-.233c.156-.2.335-.428.56-.636.683-.633 1.55-1.096 2.584-1.38a7.509 7.509 0 011.977-.263c.671 0 1.337.089 1.977.264 1.036.283 1.904.746 2.584 1.379.224.208.4.436.56.638.06.078.123.156.185.23l.094.115c.233.28.282.335.393.427.244.203.455.308.594.366.236.103.783.208 1.002.208.11 0 .358-.041.597-.119.444-.144.783-.497.933-.969zm-1.072-8.82c.569 1.332 2.2 4.588 2.16 7.433-.006.41-.166 1.227-.29 1.618a2.247 2.247 0 01-1.46 1.493c-.26.083-.61.161-.863.161-.338 0-1.004-.13-1.345-.28a3.345 3.345 0 01-.797-.492c-.19-.16-.276-.266-.589-.646-.222-.267-.418-.558-.674-.797-.59-.55-1.34-.94-2.23-1.182a6.776 6.776 0 00-1.75-.233c-.592 0-1.181.077-1.75.233-.89.244-1.64.633-2.23 1.182-.257.239-.453.528-.678.797-.316.377-.398.485-.589.646a3.319 3.319 0 01-.782.492c-.316.138-.925.28-1.284.28h-.08a4.395 4.395 0 01-.861-.161 2.259 2.259 0 01-1.46-1.493c-.122-.391-.282-1.21-.287-1.618-.04-2.842 1.59-6.098 2.16-7.433.059-.141.11-.263.153-.358.04-.089.057-.116.068-.139l.06-.11c.153-.267.33-.514.558-.722.688-.641 1.67-.966 2.91-.966.51 0 .962.07 1.383.178.247.063.796.3.808.305 0 0 .42.23.552.32.407.266.876.399 1.346.399.469 0 .941-.133 1.345-.4.134-.089.555-.32.555-.32.009-.005.558-.24.805-.304a5.476 5.476 0 011.383-.178c1.24 0 2.22.325 2.91.966.223.208.402.455.555.721l.057.111c.012.023.029.05.069.14.05.094.102.218.162.357z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideogamesLight;