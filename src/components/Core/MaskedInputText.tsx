import {isFunction} from 'lodash';
import * as React from 'react';
import MaskedInput from 'react-text-mask';
import {MaskedInputProps} from 'react-text-mask';

/**
 * Свойства компонента.
 *
 * @prop {Function} [onBlur] Коллбэк на потерю полем ввода фокуса.
 * @prop {Function} [onChange] Коллбэк на изменение значения, введенного в поле ввода.
 * @prop {number} [maxlength] Параметр, отвечающий за ограничение введенных символов.
 * @prop {(string | RegExp)[]} [mask] Маска, ограничивающая ввод.
 * @prop {string} [placeholder] Плейсхолдер компонента.
 */
interface IProps extends MaskedInputProps {
    onBlur?: (value: any) => void;
    onChange?: (value: any) => void;
    maxLength?: number;
    mask?: (string | RegExp)[];
    placeholder?: string;
}

/**
 * Компонент-обёртка над MaskedInput. Отображает инпут с возможностью маскирования ввода.
 */
export class MaskedInputText extends React.Component<IProps, {}> {

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

    render () {
        const {className, mask, placeholder, ...restProps} = this.props;

        return (
            <MaskedInput
                {...restProps}
                className={`form-control ${className ? className : ''}`}
                value={restProps.value !== null ? restProps.value : ''}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                mask={mask}
                placeholder={placeholder}
            />
        )
    }
}
