import * as React from 'react';
import {createUseStyles} from './jss';
import IcnCloseRegular from './generated/mistica-icons/icon-close-regular';
import IconButton from './icon-button';
import {useTheme, useScreenSize} from './hooks';

import type {TrackingEvent} from './utils/types';

// Zeplin definition:
// https://app.zeplin.io/project/5c9b6f097168bc065782b5c3/screen/5d15d87e46571573089f2863

const defaultPositionDesktop = 'bottom';
const defaultPositionMobile = 'top';
const arrowSize = 12;
const distanceToTarget = 8 + arrowSize;
const marginLeftRightMobile = 16;
const maxWidthDesktop = 488;
const arrowWrapperWidth = arrowSize * 2;
const arrowWrapperHeight = arrowSize;

const useStyles = createUseStyles((theme) => {
    const shadowAlpha = theme.isDarkMode ? 1 : 0.2;
    return {
        arrow: {
            position: 'absolute',
            backgroundColor: theme.colors.background,
            width: arrowSize,
            height: arrowSize,
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            border: `1px solid ${theme.colors.divider}`,
            borderRadius: 2,
            boxShadow: ({position}) =>
                position === 'bottom' ? 'initial' : `0 0 4px 0 rgba(0, 0, 0, ${shadowAlpha})`,
        },

        arrowWrapper: {
            position: 'absolute',
            color: theme.colors.background,
            width: arrowWrapperWidth,
            height: arrowWrapperHeight,
            overflow: 'hidden',
        },

        wrapper: {
            position: 'relative',
        },

        container: {
            position: 'absolute',
            width: 'auto',
            zIndex: 9,
            boxShadow: `0 2px 4px 0 rgba(0, 0, 0, ${shadowAlpha})`,
            backgroundColor: theme.colors.background,
            border: `1px solid ${theme.colors.divider}`,
            borderRadius: 4,
        },

        title: {
            marginBottom: 4,
            color: theme.colors.textPrimary,
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: 16,
        },

        boxContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
        },

        textContent: {
            display: 'flex',
            flexDirection: 'column',
            margin: 16,
            marginRight: 8,
            justifyContent: 'center',
            width: '100%',
            wordBreak: 'break-word',
        },
        assetContent: {
            width: 40,
            minWidth: 40,
            height: 40,
            margin: 16,
            marginRight: 0,
        },
        text: {
            color: theme.colors.textSecondary,
            textAlign: 'left',
            lineHeight: 1.42857142,
            fontSize: 14,
        },

        closeButtonIcon: {
            paddingTop: 8,
            paddingRight: 8,
        },
    };
});

type Position = 'top' | 'bottom' | 'left' | 'right';

type TargetPosition = {
    left: number;
    top: number;
    width: number;
    height: number;
    parentLeft: number;
};

const getWidthDesktop = (customWidth?: number): number => (customWidth ? customWidth : maxWidthDesktop);

const getPosition = (position: Position = defaultPositionDesktop, isTabletOrSmaller: boolean) =>
    isTabletOrSmaller && (position === 'left' || position === 'right') ? defaultPositionMobile : position;

const getWidth = (isTabletOrSmaller: boolean, isIos: boolean, width?: number): number =>
    // in iOS, when the webview is rendered offscreen (eg. acccount tab), window.innerWidth value is wrong, it returns strange values like 0 or 80.
    isTabletOrSmaller
        ? (isIos ? window.screen.width : window.innerWidth) - marginLeftRightMobile * 2
        : getWidthDesktop(width);

const getPositionStyles = (
    position: Position,
    width: number,
    targetPosition: TargetPosition,
    isTabletOrSmaller: boolean
) => {
    const containerStylesByPos: Record<Position, React.CSSProperties> = {
        right: {
            left: targetPosition.width + distanceToTarget,
            top: targetPosition.height / 2,
            transform: 'translateY(-50%)',
            WebkitTransform: 'translateY(-50%)',
        },
        left: {
            left: targetPosition.left - width - distanceToTarget,
            top: targetPosition.height / 2,
            transform: 'translateY(-50%)',
            WebkitTransform: 'translateY(-50%)',
        },
        top: {
            transform: 'translateY(-100%)',
            WebkitTransform: 'translateY(-100%)',
            top: -distanceToTarget,
            left: isTabletOrSmaller
                ? marginLeftRightMobile - targetPosition.parentLeft
                : Math.max(targetPosition.width / 2 - width / 2, 0),
        },
        bottom: {
            top: targetPosition.height + distanceToTarget,
            left: isTabletOrSmaller
                ? marginLeftRightMobile - targetPosition.parentLeft
                : Math.max(targetPosition.width / 2 - width / 2, 0),
        },
    };

    const containerStyles = containerStylesByPos[position];

    const arrowStylesByPos: Record<Position, React.CSSProperties> = {
        right: {
            right: '100%',
            top: '50%',
            transform: 'translateY(-100%) rotate(90deg)',
            transformOrigin: 'bottom',
        },
        left: {
            left: '100%',
            top: '50%',
            transform: 'translateY(-100%) rotate(-90deg)',
            transformOrigin: 'bottom',
        },
        top: {
            top: '100%',
            left: containerStyles.left === 0 ? targetPosition.width / 2 : '50%',
            transform: 'translateX(-50%)',
        },
        bottom: {
            bottom: '100%',
            left: containerStyles.left === 0 ? targetPosition.width / 2 : '50%',
            transform: 'translateX(-50%) rotate(180deg)',
        },
    };

    const arrowStyles = arrowStylesByPos[position];

    if (isTabletOrSmaller) {
        arrowStyles.left = targetPosition.parentLeft + targetPosition.width / 2 - marginLeftRightMobile;
    }

    return {containerStyles, arrowStyles};
};

const getTargetPosition = (targetWrapper: HTMLDivElement | null): TargetPosition | null =>
    targetWrapper
        ? {
              left: targetWrapper.offsetLeft,
              top: targetWrapper.offsetTop,
              width: targetWrapper.offsetWidth,
              height: targetWrapper.offsetHeight,
              // @ts-expect-error - parentNode must exist
              parentLeft: targetWrapper.parentNode.offsetLeft,
          }
        : null;

type Props = {
    description: string;
    target: React.ReactNode;
    title?: string;
    asset?: React.ReactNode;
    onClose?: () => void;
    position?: Position;
    width?: number;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    isVisible?: boolean;
    children?: void;
};

const Popover: React.FC<Props> = ({
    description,
    title,
    onClose,
    trackingEvent,
    position,
    width,
    target,
    asset,
    isVisible = true,
}) => {
    const {texts, colors, isIos} = useTheme();
    const {isTabletOrSmaller} = useScreenSize();
    const [targetPosition, setTargetPosition] = React.useState<TargetPosition | null>(null);

    const targetWrapperRef = React.useRef<HTMLDivElement | null>(null);

    position = getPosition(position, isTabletOrSmaller);
    const innerWidth = getWidth(isTabletOrSmaller, isIos, width);
    const classes = useStyles({position});

    React.useEffect(() => {
        const handleResize = () => {
            setTargetPosition(getTargetPosition(targetWrapperRef.current));
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        setTargetPosition(getTargetPosition(targetWrapperRef.current));
    }, [isVisible]);

    let popoverContainer = null;

    if (isVisible && targetPosition) {
        const {containerStyles, arrowStyles} = getPositionStyles(
            position,
            innerWidth,
            targetPosition,
            isTabletOrSmaller
        );

        popoverContainer = (
            <div
                className={classes.container}
                style={{
                    width: innerWidth,
                    ...containerStyles,
                }}
            >
                <div className={classes.arrowWrapper} style={arrowStyles}>
                    <div className={classes.arrow} />
                </div>
                <div className={classes.boxContainer}>
                    {asset && <div className={classes.assetContent}>{asset}</div>}
                    <div className={classes.textContent}>
                        {title && <span className={classes.title}>{title}</span>}
                        <span className={classes.text}>{description}</span>
                    </div>
                    <div className={classes.closeButtonIcon}>
                        <IconButton
                            onPress={(e) => {
                                onClose?.();
                                e.stopPropagation();
                            }}
                            trackingEvent={trackingEvent}
                            aria-label={texts.modalClose}
                        >
                            <IcnCloseRegular color={colors.neutralHigh} />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.wrapper}>
            <div ref={targetWrapperRef}>{target}</div>
            {popoverContainer}
        </div>
    );
};

export default Popover;
