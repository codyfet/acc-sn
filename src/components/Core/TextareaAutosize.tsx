import {isEmpty, isFunction} from 'lodash';
import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import {TextareaAutosizeProps} from 'react-textarea-autosize';

/**
 * Модель свойств компонента.
 *
 * @prop {Function} [onBlur] Коллбэк на потерю textarea ввода фокуса.
 * @prop {Function} [onChange] Коллбэк на изменение значения, введенного в textarea.
 * @prop {string[]} [errors] Ошибки для отображения.
 */
interface IProps extends TextareaAutosizeProps {
    onBlur?: (value: any) => void;
    onChange?: (value: any) => void;
    errors?: string[];
}

/**
 * Компонент, отображающий textarea, изменяющую свой размер относительно контента.
 */
export class TextareaAutosize extends React.PureComponent<IProps, {}> {

    static displayName = 'Textarea';

    static defaultProps: Partial<IProps> = {
        className: 'form-control'
    };

    textarea: any;

    componentDidMount() {
        this.textarea._resizeComponent();
    }

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
        const {ref, errors, ...restProps} = this.props;
        const hasError = !isEmpty(errors);

        return (
            hasError ? (
                <div className="has-error">
                    <Textarea
                        {...restProps}
                        value={restProps.value !== null ? restProps.value : ''}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        ref={(ref: any) => this.textarea = ref}
                    />

                    {errors.map((error) => (
                        <div className="color-red text-small pt-1">
                            {error}
                        </div>
                    ))}
                </div>
            ) : (
                <Textarea
                    {...restProps}
                    value={restProps.value !== null ? restProps.value : ''}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    ref={(ref: any) => this.textarea = ref}
                />
            )
        )
    }
}
