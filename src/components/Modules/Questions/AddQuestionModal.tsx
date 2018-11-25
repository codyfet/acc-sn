import * as React from 'react';
import {SimpleButton} from '../../Core/SimpleButton';
import {ModalWindow} from '../../Core/ModalWindow';
import {EButtonStyle} from '../../Core/Enums';
import {FormGroup} from '../../Core/FormGroup';
import {TextareaAutosize} from '../../Core/TextareaAutosize';
import {Input} from '../../Core/Input';
import {IQuestion} from './Models';

interface IProps {
    onClose: () => void;
    onSubmit: (request: any) => void;
}

interface IState {
    question: IQuestion;
}
/**
 * Отображает вопросы по выбранному типу.
 */
export class AddQuestionModal extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            question: null
        }
    }

    /**
     * Изменение полей запроса.
     *
     * @param {string} value Новое значение.
     */
    handleRequestChange = (field: keyof IQuestion) => (value: any) => {
        this.setState({question: {...this.state.question, [field]: value}});
    }

     /**
     * Рендерит тело модального окна.
     */
    renderModalBody = () => {
        const {question} = this.state;

        return (
            <div className="form-horizontal">
                <div className="ml-5 mr-5">
                    <FormGroup isRequired label="Вопрос" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Input value={question && question.label} onChange={this.handleRequestChange('label')} placeholder="Напишите вопрос"/>
                    </FormGroup>
                    <FormGroup isRequired label="Ответ" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <TextareaAutosize className="form-control" value={question && question.answer} onChange={this.handleRequestChange('answer')} placeholder="Напишите ответ"/>
                    </FormGroup>
                </div>
            </div>
        )
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.question);
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
                dialogClassName="modal-200"
                header="Добавление вопроса"
                body={this.renderModalBody()}
                footer={this.renderModalFooter()}
                onClose={onClose}
            />
        )
    }
}