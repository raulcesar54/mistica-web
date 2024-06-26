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

const IconOfferEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m18.91 11.993 2.518-2.74a.356.356 0 0 0-.192-.59l-3.646-.737.43-3.7a.36.36 0 0 0-.146-.329.35.35 0 0 0-.361-.037l-3.38 1.55-1.823-3.242c-.128-.224-.494-.224-.621 0L9.866 5.411l-3.38-1.55a.36.36 0 0 0-.502.366l.429 3.7-3.646.736a.37.37 0 0 0-.27.238.36.36 0 0 0 .078.352l2.522 2.74-2.517 2.74a.356.356 0 0 0 .192.59l3.645.736-.43 3.7a.36.36 0 0 0 .147.33.35.35 0 0 0 .356.036l3.38-1.55 1.823 3.242a.355.355 0 0 0 .621 0l1.823-3.243 3.38 1.55a.36.36 0 0 0 .507-.366l-.2-1.737a.36.36 0 0 0-.713.082l.128 1.107-3.102-1.422a.356.356 0 0 0-.461.15l-1.672 2.973-1.672-2.977a.36.36 0 0 0-.461-.151l-3.102 1.422.393-3.393a.36.36 0 0 0-.284-.394l-3.343-.672 2.311-2.516a.354.354 0 0 0 0-.484L3.535 9.23l3.343-.672a.355.355 0 0 0 .284-.394l-.393-3.393L9.87 6.193c.168.078.37.014.46-.15l1.673-2.97 1.676 2.978a.36.36 0 0 0 .462.151l3.101-1.422-.392 3.393c-.023.183.1.357.283.394l3.343.672-2.311 2.516a.354.354 0 0 0 0 .485l2.311 2.515-1.132.229a.358.358 0 0 0 .142.7l1.753-.353a.37.37 0 0 0 .27-.237.36.36 0 0 0-.078-.353zm-1.552 3.215a.714.714 0 0 1 0 1.427.714.714 0 0 1 0-1.427m-2.947-5.84a3.01 3.01 0 0 0-4.271 1.376h2.942a.357.357 0 0 1 0 .713H9.92q-.049.261-.05.536 0 .089.009.178h3.202a.357.357 0 0 1 0 .713h-3.079a3.045 3.045 0 0 0 2.9 2.146c.53 0 1.056-.142 1.517-.412a.358.358 0 0 1 .361.617 3.7 3.7 0 0 1-1.873.508 3.75 3.75 0 0 1-3.636-2.859h-.827a.357.357 0 0 1 0-.713h.722a2 2 0 0 1-.01-.178q0-.275.042-.536h-.758a.357.357 0 0 1 0-.713h.932a3.75 3.75 0 0 1 3.526-2.502c.653 0 1.302.178 1.873.508a.358.358 0 0 1-.36.617"
            />
        </svg>
    );
};

export default IconOfferEuroLight;
