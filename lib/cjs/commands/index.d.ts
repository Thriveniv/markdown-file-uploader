/// <reference types="react" />
import { bold } from './bold';
import { code, codeBlock } from './code';
import { italic } from './italic';
import { link } from './link';
import { unorderedListCommand, orderedListCommand, checkedListCommand } from './list';
import { quote } from './quote';
import { hr } from './hr';
import { title } from './title';
import { title1 } from './title1';
import { title2 } from './title2';
import { title3 } from './title3';
import { title4 } from './title4';
import { title5 } from './title5';
import { title6 } from './title6';
import { group } from './group';
import { divider } from './divider';
import { codePreview, codeEdit, codeLive } from './preview';
import { fullscreen } from './fullscreen';
import { image } from './image';
import { strikethrough } from './strikeThrough';
export interface CommandOrchestrator {
    executeCommand(command: ICommand): void;
}
export declare type ICommandChildHandleParam = {
    getState?: TextAreaCommandOrchestrator['getState'];
    textApi?: TextApi;
};
export declare type ICommandChildHandle = {
    children?: (handle: {
        close: () => void;
        execute: () => void;
    } & ICommandChildHandleParam) => React.ReactElement;
};
export declare type ICommandChildCommands<T = string> = {
    children?: Array<ICommand<T>>;
};
export declare type ICommand<T = string> = {
    parent?: ICommand;
    keyCommand?: string;
    name?: string;
    shortcuts?: string;
    groupName?: string;
    icon?: React.ReactElement;
    value?: T;
    position?: 'right';
    liProps?: React.LiHTMLAttributes<HTMLLIElement>;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | null;
    execute?: (state: TextState, api: TextApi) => void;
} & ICommandChildCommands & ICommandChildHandle;
export interface TextRange {
    start: number;
    end: number;
}
export interface TextState {
    text: string;
    selectedText: string;
    selection: TextRange;
}
export interface TextApi {
    /**
     * Replaces the current selection with the new text. This will make the new selectedText to be empty, the
     * selection start and selection end will be the same and will both point to the end
     * @param text Text that should replace the current selection
     */
    replaceSelection(text: string): TextState;
    /**
     * Selects the specified text range
     * @param selection
     */
    setSelectionRange(selection: TextRange): TextState;
}
declare const getCommands: () => ICommand[];
declare function getStateFromTextArea(textArea: HTMLTextAreaElement): TextState;
declare class TextAreaTextApi implements TextApi {
    textArea: HTMLTextAreaElement;
    constructor(textArea: HTMLTextAreaElement);
    replaceSelection(text: string): TextState;
    setSelectionRange(selection: TextRange): TextState;
}
declare class TextAreaCommandOrchestrator implements CommandOrchestrator {
    textArea: HTMLTextAreaElement;
    textApi: TextApi;
    constructor(textArea: HTMLTextAreaElement);
    getState(): false | TextState;
    executeCommand(command: ICommand<string>): void;
}
export { title, title1, title2, title3, title4, title5, title6, bold, codeBlock, italic, strikethrough, hr, group, divider, link, quote, code, image, unorderedListCommand, orderedListCommand, checkedListCommand, codeEdit, codeLive, codePreview, fullscreen, getCommands, getStateFromTextArea, TextAreaCommandOrchestrator, TextAreaTextApi, };
