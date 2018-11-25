// import {isFunction} from 'lodash';
// import * as React from 'react';
// import {IOption} from './Models';
// import {Radio} from './Radio';

// /**
//  * Свойства компонента.
//  *
//  * @prop {IOption<T>[]} options Массив возможных опций группы переключателей.
//  * @prop {T} value Значение текущего выбранного переключателя.
//  * @prop {Function} onChange Коллбэк на изменение выбранного переключателя.
//  * @prop {string} [className] CSS-классы компонента.
//  * @prop {string} [classNameRadio] CSS-классы элементов группы переключателей.
//  * @prop {boolean} [disabled] Признак, заблокированы ли переключатели.
//  * @prop {string} [layout] Лайаут компонента.
//  */
// interface IProps<T> {
//     options: IOption<T>[];
//     value: T;
//     onChange: (value: T) => void;
//     className?: string;
//     classNameRadio?: string;
//     disabled?: boolean;
//     layout?: 'inline';
// }

// /**
//  * Компонент отображения группы переключателей (Radio).
//  */
// export class RadioGroup extends React.Component<IProps<any>, {}> {

//     static displayName: 'RadioGroup';

//     /**
//      * Обработчик изменения выбранного значения в группе переключателей.
//      *
//      * @param {React.SyntheticEvent<HTMLInputElement>} event Событие.
//      */
//     handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
//         const {onChange} = this.props;

//         isFunction(onChange) && onChange(event.currentTarget.value);
//     };

//     render () {
//         const {
//             className,
//             classNameRadio,
//             disabled,
//             options,
//             value,
//             layout
//         } = this.props;

//             options.map((item) => {
//                 console.log(item.value, value);
//                 return item.value === value
//             })

//         return (
//             <div className={`${className ? className : ''} ${layout === 'inline' ? 'radio-inline' : ''}`}>
//                 {options.map((item, index) => (
//                     <Radio
//                         key={index}
//                         value={item.value}
//                         checked={item.value === value}
//                         className={classNameRadio}
//                         disabled={disabled}
//                         onChange={this.handleChange}
//                     >
//                         {item.label}
//                     </Radio>
//                 ))}
//             </div>
//         )
//     }
// }
