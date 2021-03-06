import React from 'react';
import { IProps } from '../../utils';
import { ICommand } from '../../commands';
import './index.less';
export interface IToolbarProps extends IProps {
    height?: React.CSSProperties['height'];
    onCommand?: (command: ICommand<string>, groupName?: string) => void;
    commands?: ICommand<string>[];
}
export default function Toolbar(props?: IToolbarProps): JSX.Element;
