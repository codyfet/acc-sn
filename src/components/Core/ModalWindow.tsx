import {isFunction} from 'lodash';
import * as React from 'react';
import {Modal} from 'react-bootstrap';

/**
 * Интерфейс свойств компонента "Модальное окно".
 *
 * @prop {boolean} [show] Флаг состояния модального окна (открыто или закрыто).
 * @prop {JSX.Element | string} [header] Заголовок модального окна.
 * @prop {JSX.Element} body Тело модального окна.
 * @prop {JSX.Element} [footer] Подвал модального окна.
 * @prop {boolean} [disableClose] Флаг блокировки кнопки закрытия модального окна (кнопка-крестик).
 * @prop {Function} [onClose] Коллбэк на закрытие модального окна.
 * @prop {boolean} [isLoading] Флаг отображения спинера загрузки данных.
 * @prop {boolean} [isConfirmationShown] Флаг отображения подтверждения действия.
 * @prop {JSX.Element} [confirmation] Текст подтверждения.
 */
interface IProps extends Partial<Modal.ModalProps> {
    show?: boolean;
    header?: JSX.Element | string;
    body: JSX.Element;
    footer?: JSX.Element;
    disableClose?: boolean;
    onClose?: () => void;
    isLoading?: boolean;
    isConfirmationShown?: boolean;
    confirmation?: JSX.Element;
}

/**
 * Интерфейс состояния компонента "Модальное окно".
 *
 * @prop {boolean} show Флаг состояния модального окна (открыто или закрыто).
 */
interface IState {
    show: boolean;
}

/**
 * Компонент модального окна.
 */
export class ModalWindow extends React.Component<IProps, IState> {

    static displayName = 'ModalWindow';

    constructor(props: IProps) {
        super(props);

        const {show = false} = props;

        this.state = {
            show
        }
    }

    componentWillReceiveProps (nextProps: IProps) {
        const {show} = nextProps;

        this.setState({show});
    }

    /**
     * Обработчик закрытия модального окна.
     */
    handleClose = () => {
        const {onClose} = this.props;

        this.setState({show: false}, () => {
            onClose && isFunction(onClose) && onClose();
        });
    };

    render () {
        const {show} = this.state;
        const {
            animation = true,
            body,
            disableClose = false,
            footer,
            header,
            isLoading = false,
            dialogClassName,
            isConfirmationShown,
            confirmation,
            ...restProps
        } = this.props;

        return (
            <Modal
                dialogClassName={`app ${dialogClassName ? dialogClassName : ''}`}
                animation={animation}
                show={show}
                onHide={this.handleClose}
                {...restProps}
            >

                {isConfirmationShown &&
                    <div className="confirmation">
                        <div className="confirmation__dialog">
                            {confirmation}
                        </div>
                    </div>
                }

                {header && (
                    <Modal.Header closeButton={!disableClose}>
                        <Modal.Title>
                            {header}
                        </Modal.Title>
                    </Modal.Header>
                )}

                <Modal.Body>{body}</Modal.Body>

                {footer && (
                    <Modal.Footer>
                        {footer}
                    </Modal.Footer>
                )}
            </Modal>
        );
    }
}
