import * as React from 'react';
import {Button} from 'react-bootstrap';
import {EButtonStyle} from './Enums';

const classNames = require('classnames');

/**
 * Свойства компонента.
 *
 * @prop {string} [className] CSS-классы компонента.
 * @prop {boolean} [disabled] Признак, заблокирован ли компонент.
 * @prop {string} [label] Лейбл кнопки
 * @prop {Function} [onClick] Коллбэк на изменение значения переключателя.
 * @prop {string} [iconClass] Класс иконки.
 */
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    onClick?: () => void;
    iconClass?: string;
    btnStyle?: EButtonStyle;
}

/**
 * Компонент простой кнопки с возможностью иконок.
 */
export class SimpleButton extends React.PureComponent<IProps> {
    static defaultProps: Partial<IProps> = {
        btnStyle: EButtonStyle.SUCCESS
    }

    static displayName = 'Button';

    render() {
        const {
            className,
            disabled,
            iconClass,
            label,
            btnStyle,
            onClick
        } = this.props;

        return (
            <Button
                onClick={onClick}
                bsStyle={btnStyle}
                disabled={disabled}
                className={classNames(className)}
                title={label}
            >
                <i className={classNames('fa', iconClass)} />
                {label}
            </Button>

        )
    }
}
