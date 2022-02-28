/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
import React, { CSSProperties } from "react";

export interface InfotextProps {
    number: number;
    name: string;
    sdg: string;
    text: Record<number, string|JSX.Element>;
    header: Record<number, string>;
    logo: string;
    eg: string;
    audioFile: Record<number, string>;
}

export interface ModalProps {
    modalContent?: JSX.Element;
    modalStyle?: CSSProperties;
    incrementCount: () => void;
    setSelectedItem: (n: number) => void;
    answercw;
    modalIsOpen;
    setIsOpen;
    answer: string;
}
export interface ModalHelperProps {
    modalContent?: JSX.Element;
    modalStyle?: CSSProperties;
    setSelectedItem: (n: number) => void;
    answercw;
    modalIsOpen;
    setIsOpen;
    answer: string;
}
    

export interface QuizProps {
    /**
     * header
     */
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo: string;

    /**
     * props for text part
     */
    tile: Record<number, string>;
    text: Record<number, JSX.Element>;

    /**
     * props for quiz part
     */
    question: Record<number, string>;
    buttonLeftContent: Record<number, JSX.Element>;
    buttonRightContent: Record<number, JSX.Element>;
    answerNumbersLeft: Record<number, string>;
    answerNumbersRight: Record<number, string>;
    explanation: Record<number, string>;

    /**
     * Modal
     */
    modalContent?: JSX.Element;
    modalStyle?: CSSProperties;
    isQuizActive: Record<number, boolean>;
}

export interface Quiz3OProps {
    /**
     * header
     */
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo: string;

    /**
     * props for text part
     */
    tile: Record<number, string>;
    text: Record<number, JSX.Element>;

    /**
     * props for quiz part
     */
    question: Record<number, string>;
    buttonLeftContent: Record<number, JSX.Element>;
    buttonMiddleContent: Record<number, JSX.Element>;
    buttonRightContent: Record<number, JSX.Element>;
    answerNumbersLeft: Record<number, string>;
    answerNumbersMiddle: Record<number, string>;
    answerNumbersRight: Record<number, string>;
    explanation: Record<number, string>;

    /**
     * Modal
     */
    modalContent?: JSX.Element;
    modalStyle?: CSSProperties;
    isQuizActive: Record<number, boolean>;
}

export interface Quiz3Mixed {
    /**
     * header
     */
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo: string;

    /**
     * props for text part
     */
    tile: Record<number, string>;
    text: Record<number, JSX.Element>;

    /**
     * props for quiz part
     */
    question: Record<number, string>;
    buttonLeftContent: Record<number, JSX.Element>;
    buttonMiddleContent: Record<number, JSX.Element>;
    buttonRightContent: Record<number, JSX.Element>;
    answerNumbersLeft: Record<number, string>;
    answerNumbersMiddle: Record<number, string>;
    answerNumbersRight: Record<number, string>;
    explanation: Record<number, string>;

    /**
     * Modal
     */
    modalContent?: JSX.Element;
    modalStyle?: CSSProperties;
    isQuizActive: Record<number, boolean>;
    isThreeAnswerActive: Record<number, boolean>;
}

export interface TextProps {
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo: string;

    header: Record<number, string>;
    text: Record<number, JSX.Element| string>;
}

export interface VideoProps {
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo: string;
    source;
    text?: Record<number, JSX.Element| string> ; 
    quelle: string|JSX.Element;
    isCCBY?: boolean;
}
