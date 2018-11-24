import {isFunction} from 'lodash'
import * as React from 'react';
import {Button} from 'react-bootstrap';

const classNames = require('classnames');

/**
 * Свойства компонента.
 *
 * @prop {string} [className] CSS-классы компонента.
 * @prop {boolean} [disabled] Признак, заблокирован ли компонент.
 * @prop {string} [label] Лейбл кнопки
 * @prop {Function} [onChange] Коллбэк на изменение значения переключателя.
 * @prop {string} [iconClass] Класс иконки.
 */
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    onChange?: () => void;
    iconClass?: string;
}

/**
 * Компонент простой кнопки с возможностью иконок.
 */
export class SimpleButton extends React.PureComponent<IProps> {

    static displayName = 'Button';

    /**
     * Обработчик изменения выбранного значения.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event Событие.
     */
    handleChange = () => {
        const {onChange} = this.props;

        isFunction(onChange) && onChange();
    }

    render() {
        const {
            className,
            disabled,
            iconClass,
            label
        } = this.props;

        return (
            <Button
                onClick={this.handleChange}
                bsStyle="success"
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
