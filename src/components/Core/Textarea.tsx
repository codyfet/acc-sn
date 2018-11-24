import {isFunction} from 'lodash';
import * as React from 'react';

/**
 * Свойства компонента.
 *
 * @prop {Function} [onBlur] Коллбэк на потерю textarea ввода фокуса.
 * @prop {Function} [onChange] Коллбэк на изменение значения, введенного в textarea.
 */
interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onBlur?: (value: any) => void;
    onChange?: (value: any) => void;
}

/**
 * Компонент, отображающий textarea.
 */
export class Textarea extends React.PureComponent<IProps, {}> {

    static displayName = 'Textarea';

    static defaultProps: Partial<IProps> = {
        className: 'form-control'
    };

    /**
     * Обработчик потери textarea ввода фокуса.
     *
     * @param {React.SyntheticEvent<HTMLTextAreaElement>} event Событие.
     */
    handleBlur = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const {onBlur} = this.props;
        const {value} = event.currentTarget;

        isFunction(onBlur) && onBlur(value);
    }

    /**
     * Обработчик изменения введенного в textarea ввода значения.
     *
     * @param {React.SyntheticEvent<HTMLTextAreaElement>} event Событие.
     */
    handleChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const {onChange} = this.props;
        const {value} = event.currentTarget;

        isFunction(onChange) && onChange(value);
    }

    render() {
        const {...restProps} = this.props;

        return (
            <textarea
                {...restProps}
                value={restProps.value !== null ? restProps.value : ''}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
            />
        )
    }
}
