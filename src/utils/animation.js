// @flow
import * as React from 'react';
import {isOldChrome, isRunningAcceptanceTest} from './platform';

const animationsSupported = !isOldChrome() && !isRunningAcceptanceTest();

type ShakeStyles = {outerAnimation: any, innerAnimation: any, '@keyframes shake'?: any};

export const animateShakeStyles = (): ShakeStyles =>
    animationsSupported
        ? {
              '@keyframes shake': {
                  '10%, 90%': {
                      transform: 'translate(3px, 0)',
                  },
                  '20%, 80%': {
                      transform: 'translate(6px, 0)',
                  },

                  '30%, 50%, 70%': {
                      transform: 'translate(0px, 0)',
                  },

                  '40%, 60%': {
                      transform: 'translate(8px, 0)',
                  },
              },
              outerAnimation: {
                  animation: '$shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                  animationDelay: ({delay}: {delay: number}) => `${delay + 0.04}s`,
                  marginLeft: '-4px',
                  transform: 'translate(4px, 0)',
              },
              innerAnimation: {
                  animation: '$shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
                  animationDelay: ({delay}: {delay: number}) => `${delay}s`,
                  marginLeft: '-4px',
                  transform: 'translate(4px, 0)',
              },
          }
        : {innerAnimation: {}, outerAnimation: {}};

type AnimationProps = {
    children?: React.Node,
    strokeDasharray?: string,
    strokeDashoffset?: string,
    opacity?: number,
};

export const getAnimateDrawLineProps = (from: string, begin: string): null | AnimationProps =>
    animationsSupported
        ? {
              strokeDasharray: from.replace('-', ''),
              strokeDashoffset: from,
              children: (
                  <animate
                      attributeName="stroke-dashoffset"
                      from={from}
                      to="0"
                      dur="0.7"
                      repeatCount="1"
                      begin={begin}
                      fill="freeze"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.75 0 0.25 1"
                  />
              ),
          }
        : null;

export const getAnimateFadeInProps = (begin: string): null | AnimationProps =>
    animationsSupported
        ? {
              opacity: 0,
              children: (
                  <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      dur="0.4"
                      repeatCount="1"
                      begin={begin}
                      fill="freeze"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.75 0 0.25 1"
                  />
              ),
          }
        : null;

export const getAnimateHopInProps = (begin: string): null | AnimationProps =>
    animationsSupported
        ? {
              children: (
                  <>
                      <animate
                          attributeName="stroke-width"
                          from="2.5"
                          to="2"
                          dur="0.7s"
                          begin={begin}
                          keyTimes="0;1"
                          calcMode="spline"
                          fill="freeze"
                          keySplines="0.75 0 0.25 1"
                      />
                      <animateTransform
                          attributeName="transform"
                          type="translate"
                          from="-0.5 1"
                          to="0 0"
                          dur="0.7s"
                          begin={begin}
                          keyTimes="0;1"
                          calcMode="spline"
                          fill="freeze"
                          keySplines="0.75 0 0.25 1"
                      />
                  </>
              ),
          }
        : null;

export const getAnimateSweepInProps = (begin: string): null | AnimationProps =>
    animationsSupported
        ? {
              opacity: 0,
              children: (
                  <>
                      <animate
                          attributeName="opacity"
                          from="0"
                          to="1"
                          dur="0.1"
                          begin={begin}
                          fill="freeze"
                          keyTimes="0;1"
                          calcMode="spline"
                          keySplines="0.75 0 0.25 1"
                      />
                      <animateTransform
                          attributeName="transform"
                          type="scale"
                          from="0 0"
                          to="1.15 1.15"
                          dur="0.8s"
                          begin={begin}
                          keyTimes="0;1"
                          additive="sum"
                          calcMode="spline"
                          fill="freeze"
                          keySplines="0.8 0 0 1"
                      />
                      <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="50 21 10"
                          to="0 21 10"
                          dur="0.8s"
                          begin={begin}
                          keyTimes="0;1"
                          additive="sum"
                          calcMode="spline"
                          fill="freeze"
                          keySplines="0.8 0 0 1"
                      />
                      <animateTransform
                          attributeName="transform"
                          type="scale"
                          from="1.1 1.1"
                          to="1 1"
                          dur="0.2s"
                          begin={`${parseFloat(begin) + 0.8}s`}
                          keyTimes="0;1"
                          calcMode="spline"
                          fill="freeze"
                          keySplines="0.75 0 0.25 1"
                      />
                  </>
              ),
          }
        : null;

const mergeChildren = ({children}: AnimationProps, nextChild?: React.Node) => (
    <>
        {children}
        {nextChild}
    </>
);

export const mergeProperties = (...props: Array<AnimationProps | null>): AnimationProps =>
    props.reduce(
        (allProps, nextProps) => ({
            ...allProps,
            ...(nextProps || {}),
            children: mergeChildren(allProps, nextProps ? nextProps.children : null),
        }),
        {children: null}
    );
