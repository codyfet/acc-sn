import * as React from 'react';
import classNames = require('classnames');
import {Link} from 'react-router-dom';

interface IProps {
    name: string | JSX.Element;
    route?: string;
    iconClass: string;
    className?: string;
}

/**
 * Компонент отображает ячейку меню.
 */
export const MenuLabel: React.SFC<IProps> = (props: IProps) => {
    const {name, route, iconClass, className} = props;

    return route ? (
        <ul className={classNames('menu-label', className)}><Link to={`/${route}`}> <i className={classNames('fa', iconClass, 'mr-2')} />{name}</Link></ul>
    ) : (
        <ul className={classNames('menu-label', className)}>{name}</ul>
    );
}