import {isFunction, uniqueId} from 'lodash'
import * as React from 'react';

const classNames = require('classnames');

/**
 * Свойства компонента.
 *
 * @prop {string} [className] CSS-классы компонента.
 * @prop {boolean} [disabled] Признак, заблокирован ли компонент.
 * @prop {any} [value] Значение переключателя.
 * @prop {Function} [onChange] Коллбэк на изменение значения переключателя.
 */
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    value?: any;
    onChange?: (value: any) => void;
}

/**
 * Состояние компонента.
 *
 * @prop {string} id Идентификатор переключателя (для связи input и label).
 */
interface IState {
    id: string;
}

/**
 * Компонент стандартного переключателя Radio.
 */
export class Radio extends React.PureComponent<IProps, IState> {

    static displayName = 'Radio';

    componentWillMount() {
        const id = uniqueId('radio-');

        this.setState({id});
    }

    /**
     * Обработчик изменения выбранного значения.
     *
     * @param {React.SyntheticEvent<HTMLInputElement>} event Событие.
     */
    handleChange = (_event: React.SyntheticEvent<HTMLInputElement>) => {
        const {onChange, value} = this.props;

        isFunction(onChange) && onChange(value);
    }

    render() {
        const {
            children,
            className,
            value,
            checked,
            ...restProps
        } = this.props;
        const {id} = this.state;
        const cssClasses = classNames('radio', className);

        return (
            <div className={cssClasses}>
                <input
                    id={id}
                    checked={checked}
                    type="radio"
                    onChange={this.handleChange}
                    value={value}
                    {...restProps}
                />
                <label htmlFor={id}>
                    {children}
                </label>
            </div>
        )
    }
}
