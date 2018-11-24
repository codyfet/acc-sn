import {isFunction, uniqueId} from 'lodash';
import * as React from 'react';

/**
 * Свойства компонента.
 *
 * @prop {boolean} value Значение чекбокса.
 * @prop {string} [className] CSS-классы компонента.
 * @prop {string} [labelClassName] CSS-классы лейбла чекбокса.
 * @prop {boolean} [disabled] Признак, является ли чекбокс заблокированным.
 * @prop {Function} [onChange] Коллбэк на изменение состояния чекбокса.
 * @prop {string} [name] html-атрибут name инпута
 */
interface IProps {
    value: boolean;
    className?: string;
    labelClassName?: string;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    name?: string;
}

/**
 * Состояние компонента.
 *
 * @prop {boolean} checked Состояние чекбокса (выбран/не выбран).
 * @prop {string} [id] Идентификатор чекбокса для связи input с label.
 */
interface IState {
    checked: boolean;
    id?: string;
}

/**
 * Компонент базового чекбокса.
 */
export class Checkbox extends React.PureComponent<IProps, IState> {

    static displayName = 'Checkbox';

    constructor(props: IProps) {
        super(props);

        this.state = {
            checked: props.value ? props.value : false
        }
    }

    componentWillMount() {
        const id = uniqueId('checkbox-');

        this.setState({id});
    }

    /**
     * Обработчик изменения состояния чекбокса (выбран/не выбран).
     */
    handleToggle = () => {
        const {onChange} = this.props;

        this.setState(
            (prevState: IState) => ({checked: !prevState.checked}),
            () => {isFunction(onChange) && onChange(this.state.checked);}
        );
    }

    render() {
        const {
            children,
            className,
            labelClassName,
            disabled,
            name,
        } = this.props;
        const {checked, id} = this.state;

        return (
            <div className={`checkbox ${disabled ? 'disabled' : ''} ${className ? className : ''}`}>
                <input
                    name={name}
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleToggle}
                    disabled={disabled}
                />
                <label htmlFor={id} className={`${labelClassName ? labelClassName : ''}`}>
                    {children}
                </label>
            </div>
        )
    }
}
