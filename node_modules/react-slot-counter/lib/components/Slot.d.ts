import React, { RefObject } from 'react';
interface Props {
    index: number;
    isNew?: boolean;
    charClassName?: string;
    numbersRef: RefObject<HTMLDivElement>;
    active: boolean;
    isChanged: boolean;
    effectiveDuration: number;
    delay: number;
    value: string | number | JSX.Element;
    startValue?: string | number | JSX.Element;
    disableStartValue?: boolean;
    dummyList: (string | number | JSX.Element)[];
    hasSequentialDummyList?: boolean;
    hasInfiniteList?: boolean;
    valueClassName?: string;
    reverse?: boolean;
    sequentialAnimationMode: boolean;
    useMonospaceWidth: boolean;
    maxNumberWidth?: number;
}
declare function Slot({ isNew, charClassName, numbersRef, active, isChanged, effectiveDuration, delay, value, startValue, disableStartValue, dummyList, hasSequentialDummyList, hasInfiniteList, valueClassName, reverse, sequentialAnimationMode, useMonospaceWidth, maxNumberWidth, }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Slot>;
export default _default;
