import {isFunction} from 'lodash';
import * as React from 'react';

/**
 * Свойства компонента.
 *
 * @prop {Function} [onBlur] Коллбэк на потерю полем ввода фокуса.
 * @prop {Function} [onChange] Коллбэк на изменение значения, введенного в поле ввода.
 * @prop {IValidationErrors} [errors] Ошибки для отображения.
 * @prop {string} [containerclassname] Классы контейнера lowcase потому, что реакт выдаёт варнинги.
 */
export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onBlur?: (value: any) => void;
    onChange?: (value: any) => void;
    containerclassname?: string;
}

/**
 * Компонент, отображающий поле ввода.
 */
export class Input extends React.PureComponent<IProps> {

    static defaultProps: Partial<IProps> = {
        type: 'text',
        className: 'form-control'
    };

    /**
     * Обработчик потери полем ввода фокуса.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event Событие.
     */
    handleBlur = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {onBlur} = this.props;
        const {value} = event.currentTarget;

        isFunction(onBlur) && onBlur(value);
    }

    /**
     * Обработчик изменения введенного в поле ввода значения.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event Событие.
     */
    handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {onChange} = this.props;
        const {value} = event.currentTarget;

        isFunction(onChange) && onChange(value);
    }

    render() {
        const restProps = {...this.props};

        return (
            <div className={restProps.containerclassname}>
                <input
                    {...restProps}
                    value={restProps.value !== null && restProps.value !== undefined ? restProps.value : ''}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
