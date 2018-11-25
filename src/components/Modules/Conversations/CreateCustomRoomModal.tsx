import * as React from 'react';
import {SimpleButton} from '../../Core/SimpleButton';
import {ModalWindow} from '../../Core/ModalWindow';
import {EButtonStyle} from '../../Core/Enums';
import {EQuestionType} from '../Questions/Models';
import {FormGroup} from '../../Core/FormGroup';
import {TextareaAutosize} from '../../Core/TextareaAutosize';
import {Input} from '../../Core/Input';

import {User} from '../../../models/Common';
import {IOption} from '../../Core/Models';
import {map} from 'lodash';
import {usersMock} from './UsersMock';

interface IProps {
    onClose: () => void;
    onSubmit: (request: any) => void;
    questionType: EQuestionType;
}

interface IState {
    question?: string;
    theme?: string;
    selectedUsersIds?: number;
}
/**
 * Отображает вопросы по выбранному типу.
 */
export class CreateCustomRoomModal extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            question: '',
            theme: '',
            selectedUsersIds: null
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

    getUsersOptions = (): IOption<number>[] => {
        return map(usersMock, (user: User) => {
            return {
                label: `${user.surname} ${user.name}`,
                value: user.id,
                title: `${user.surname} ${user.name}`
            }
        })
    }

     /**
     * Рендерит тело модального окна.
     */
    renderModalBody = () => {
        const {question, theme, selectedUsersIds} = this.state;

        return (
            <div className="form-horizontal">
                <div className="ml-5 mr-5">
                <FormGroup isRequired label="Тема/Название" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Input value={theme} onChange={this.handleRequestChange('theme')} placeholder="Тема вашего общения"/>
                    </FormGroup>
                    <FormGroup isRequired label="Информация о чате" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <TextareaAutosize className="form-control" value={question} onChange={this.handleRequestChange('question')} placeholder="Напишите краткую информацию"/>
                    </FormGroup>
                    <FormGroup isRequired label="Информация о чате" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Select options={this.getUsersOptions()} value={selectedUsersIds} onChange={this.handleRequestChange('selectedUsersIds')}/>
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
                header={`Создание чата`}
                body={this.renderModalBody()}
                footer={this.renderModalFooter()}
                onClose={onClose}
            />
        )
    }
}