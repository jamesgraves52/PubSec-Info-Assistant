// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "What is NSWC Dahlgren?", value: "What is NSWC Dahlgren?" },
    { text: "What is NSWC Dahlgren's mission?", value: "What is NSWC Dahlgren's mission?" },
    { text: "What different departments does NSWC Dahlgren have?", value: "What different departments does NSWC Dahlgren have?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
