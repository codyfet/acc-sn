import * as React from 'react';
import {SimpleButton} from '../../Core/SimpleButton';
import {ModalWindow} from '../../Core/ModalWindow';
import {EButtonStyle} from '../../Core/Enums';
import {EQuestionType} from '../Questions/Models';
import {FormGroup} from '../../Core/FormGroup';
import {TextareaAutosize} from '../../Core/TextareaAutosize';
import {Input} from '../../Core/Input';

interface IProps {
    onClose: () => void;
    onSubmit: (request: any) => void;
    questionType: EQuestionType;
}

interface IState {
    question?: string;
    theme?: string;
}
/**
 * Отображает вопросы по выбранному типу.
 */
export class CreateServiceRoomModal extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            question: '',
            theme: ''
        }
    }

    /**
     * Изменение полей запроса.
     *
     * @param {string} value Новое значение.
     */
    handleRequestChange = (field: keyof IState) => (value: any) => {
        this.setState({[field]: value});
    }

     /**
     * Рендерит тело модального окна.
     */
    renderModalBody = () => {
        const {question, theme} = this.state;

        return (
            <div className="form-horizontal">
                <div className="ml-5 mr-5">
                    <FormGroup isRequired label="Тема" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Input value={theme} onChange={this.handleRequestChange('theme')} placeholder="Напишите тему вашего вопроса"/>
                    </FormGroup>
                    <FormGroup isRequired label="Вопрос" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <TextareaAutosize className="form-control" value={question} onChange={this.handleRequestChange('question')} placeholder="Напишите ваш вопрос"/>
                    </FormGroup>
                </div>
            </div>
        )
    }

    handleSubmit = () => {
        this.props.onSubmit(null);
    }

     /**
     * Рендерит футер модального окна.
     */
    renderModalFooter = () => {
        const {onClose} = this.props;

        return (
            <React.Fragment>
                <SimpleButton label="Создать" onClick={this.handleSubmit} iconClass="fa-check"/>

                <SimpleButton label="Отмена" btnStyle={EButtonStyle.WARNING} onClick={onClose} iconClass="fa-ban"/>
            </React.Fragment>
        )
    }

    render () {
        const {onClose} = this.props;

        return (
            <ModalWindow
                show
                className=""
                header={`Моё сообщение`}
                body={this.renderModalBody()}
                footer={this.renderModalFooter()}
                onClose={onClose}
            />
        )
    }
}