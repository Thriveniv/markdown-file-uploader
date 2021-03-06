import React from 'react';
import { ICommand, TextAreaCommandOrchestrator } from './commands';
export declare type PreviewType = 'live' | 'edit' | 'preview';
export declare type ContextStore = {
    commands?: ICommand<string>[];
    markdown?: string;
    preview?: PreviewType;
    height?: number;
    fullscreen?: boolean;
    highlightEnable?: boolean;
    autoFocus?: boolean;
    onChange?: (value?: string) => void;
    textarea?: HTMLTextAreaElement;
    commandOrchestrator?: TextAreaCommandOrchestrator;
    textareaWarp?: HTMLDivElement;
    textareaPre?: HTMLPreElement;
    container?: HTMLDivElement | null;
    dispatch?: React.Dispatch<ContextStore>;
    barPopup?: Record<string, boolean>;
    scrollTop?: number;
    scrollTopPreview?: number;
    tabSize?: number;
};
export declare function reducer(state: ContextStore, action: ContextStore): {
    commands?: ICommand<string>[] | undefined;
    markdown?: string | undefined;
    preview?: PreviewType | undefined;
    height?: number | undefined;
    fullscreen?: boolean | undefined;
    highlightEnable?: boolean | undefined;
    autoFocus?: boolean | undefined;
    onChange?: ((value?: string | undefined) => void) | undefined;
    textarea?: HTMLTextAreaElement | undefined;
    commandOrchestrator?: TextAreaCommandOrchestrator | undefined;
    textareaWarp?: HTMLDivElement | undefined;
    textareaPre?: HTMLPreElement | undefined;
    container?: HTMLDivElement | null | undefined;
    dispatch?: React.Dispatch<ContextStore> | undefined;
    barPopup?: Record<string, boolean> | undefined;
    scrollTop?: number | undefined;
    scrollTopPreview?: number | undefined;
    tabSize?: number | undefined;
};
export declare const EditorContext: React.Context<ContextStore>;
