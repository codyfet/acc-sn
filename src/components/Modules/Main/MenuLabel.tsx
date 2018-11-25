import * as React from 'react';
import classNames = require('classnames');
import {Link} from 'react-router-dom';
import {isFunction} from 'lodash';

interface IProps {
    name: string | JSX.Element;
    route?: string;
    iconClass?: string;
    className?: string;
    onClick?: () => void;
    isExtLink?: boolean;
}

/**
 * Компонент отображает ячейку меню.
 */
export const MenuLabel: React.SFC<IProps> = (props: IProps) => {
    const {name, route, iconClass, className, onClick, isExtLink} = props;

    const handleClick = () => {
        if (isFunction(onClick)) {
            onClick();
        }
    }

    const getIcon = () => {
        let result: JSX.Element = null;
        if (iconClass) {
            result = <i className={classNames('fa', iconClass, 'mr-2')} />
        }

        return result;
    }

    return route ? (
        <ul className={classNames('menu-label', className)}>
            {isExtLink ? (
                <a href={route}>{getIcon()}{name}</a>
            ) : (
                <Link to={`/${route}`}>{getIcon()}{name}</Link>
            )}
        
        </ul>
    ) : (
        <ul className={classNames('menu-label', className)} onClick={handleClick}>
            {!!iconClass && <i className={classNames('fa', iconClass, 'mr-2')} />}
            {name}
        </ul>
    );
}