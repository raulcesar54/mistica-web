import * as React from 'react';
import {createUseStyles} from './jss';
import {ButtonLink, ButtonLinkProps, ButtonPrimary, ButtonProps, ButtonSecondary} from './button';
import classNames from 'classnames';

const buttonLayoutSpacing = 16;
const buttonLinkPadding = 6;

const useStyles = createUseStyles(() => ({
    inline: {
        display: 'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    container: {
        marginTop: -buttonLayoutSpacing,
        marginLeft: -buttonLayoutSpacing - buttonLinkPadding,
    },
    buttons: {
        marginLeft: buttonLinkPadding,
        '& > div': {
            marginTop: buttonLayoutSpacing,
            marginLeft: buttonLayoutSpacing,
        },
    },
    link: {
        marginTop: buttonLayoutSpacing,
        marginLeft: buttonLayoutSpacing,
        width: ({bothButtons}) => (bothButtons ? '100%' : 'auto'),
    },
}));

export interface ButtonGroupProps {
    primaryButton?: React.ReactElement<ButtonProps, typeof ButtonPrimary>;
    secondaryButton?: React.ReactElement<ButtonProps, typeof ButtonSecondary>;
    link?: React.ReactElement<ButtonLinkProps, typeof ButtonLink>;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({primaryButton, secondaryButton, link}) => {
    const anyAction = !!primaryButton || !!secondaryButton || !!link;
    const bothButtons = !!primaryButton && !!secondaryButton;
    const classes = useStyles({bothButtons});

    return anyAction ? (
        <div className={classNames(classes.inline, classes.container)}>
            {(primaryButton || secondaryButton) && (
                <div className={classNames(classes.inline, classes.buttons)}>
                    {primaryButton && <div>{primaryButton}</div>}
                    {secondaryButton && <div>{secondaryButton}</div>}
                </div>
            )}
            {link && <div className={classes.link}>{link}</div>}
        </div>
    ) : null;
};

export default ButtonGroup;