import * as classNames from 'classnames';
import {isEmpty, map} from 'lodash';
import * as React from 'react';

/**
 * Свойства компонента - layout-а строки формы ввода данных.
 *
 * @prop {(string | JSX.Element)} [label] Лейбл компонента.
 * @prop {string} [className] CSS-классы для всего блока.
 * @prop {string} [classNameLabel] CSS-классы для контейнера с лейблом.
 * @prop {string} [classNameElement] CSS-классы для контейнера элемента.
 * @prop {TChildrenOrChildrens} [children] Компоненты для отображения внутри контейнера элемента.
 * @prop {string[]} [errors] Массив ошибок для отображения под дочерними элементами.
 * @prop {boolean} [isRequired] Признак, помечающий отображаемый лейбл компонента символом *.
 */
export interface IProps {
    label?: string | JSX.Element;
    className?: string;
    classNameLabel?: string;
    classNameElement?: string;
    children?: TChildrenOrChildrens;
    errors?: string[];
    isRequired?: boolean;
}

/* Типы элементов, отображаемых в компоненте. */
type TChildren = undefined | false | null | string | string[] | number | number[] | JSX.Element | JSX.Element[] | React.ReactNode;
type TChildrenOrChildrens = TChildren | TChildren[];

/**
 * Компонент вывода стандартной разметки для компонента формы с
 * горизонтальным расположением лейбла и соответствующего ему элемента.
 */
export const FormGroup: React.SFC<IProps> = (props: IProps) => {
    const {
        label,
        className = null,
        classNameLabel,
        classNameElement,
        children,
        errors,
        isRequired
    } = props;
    const CSSClasses = {
        element: [classNameElement],
        formGroup: ['form-group', className],
        label: ['control-label', classNameLabel]
    };
    const hasError = !isEmpty(errors);

    if (hasError) {CSSClasses.element.push('has-error');}

    if (isRequired) {CSSClasses.label.push('label-required');}

    return (
        <div className={classNames(CSSClasses.formGroup)}>
            <label className={classNames(CSSClasses.label)}>
                {label}
            </label>

            <div className={classNames(CSSClasses.element)}>
                {children}
                {hasError && (
                    map(errors, (error, idx) => (
                        <div
                            key={`${idx}_${error}`}
                            className="color-red text-small pt-1"
                        >
                            {error}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

FormGroup.displayName = 'FormGroup';
