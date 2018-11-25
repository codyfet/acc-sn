import * as React from 'react';
import {SimpleButton} from '../../Core/SimpleButton';
import {ModalWindow} from '../../Core/ModalWindow';
import {EButtonStyle} from '../../Core/Enums';
import {FormGroup} from '../../Core/FormGroup';
import {TextareaAutosize} from '../../Core/TextareaAutosize';
import {Input} from '../../Core/Input';
import Select from 'react-select';
import {User} from '../../../models/Common';
import {IOption} from '../../Core/Models';
import {map, isEmpty} from 'lodash';
import {usersMock} from './UsersMock';
import {Checkbox} from '../..//Core/CheckBox';

interface IProps {
    onClose: () => void;
    onSubmit: (request: any) => void;
    chatkitUser: any;
}

interface IState {
    info?: string;
    theme?: string;
    selectedUsersIds?: string[];
    isPrivate?: boolean;
}
/**
 * Отображает вопросы по выбранному типу.
 */
export class CreateCustomRoomModal extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            info: '',
            theme: '',
            selectedUsersIds: null,
            isPrivate: false
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

    getUsersOptions = (): IOption<string>[] => {
        return map(usersMock, (user: User) => {
            return {
                label: `${user.surname} ${user.name}`,
                value: user.enterpriseId,
                title: `${user.surname} ${user.name}`
            }
        })
    }

    handleUsersChange = (usersOptions: IOption<string>[]) => {
        if (isEmpty(usersOptions)) {
            this.setState({selectedUsersIds: null});
        } else {
            this.setState({selectedUsersIds: map(usersOptions, (userOption: IOption<string>) => {return userOption.value})});
        }
    }

     /**
     * Рендерит тело модального окна.
     */
    renderModalBody = () => {
        const {info, theme, selectedUsersIds, isPrivate} = this.state;

        return (
            <div className="form-horizontal">
                <div className="ml-5 mr-5">
                    <FormGroup isRequired label="Тема/Название" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Input value={theme} onChange={this.handleRequestChange('theme')} placeholder="Тема вашего общения"/>
                    </FormGroup>
                    <FormGroup label="Информация о чате" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <TextareaAutosize className="form-control" value={info} onChange={this.handleRequestChange('info')} placeholder="Напишите краткую информацию"/>
                    </FormGroup>
                    <FormGroup isRequired label="Участники" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Select
                            options={this.getUsersOptions()}
                            value={selectedUsersIds}
                            onChange={this.handleUsersChange}
                            multi
                            closeOnSelect={false}
                            placeholder="Выберите участников"
                        />
                    </FormGroup>
                    <FormGroup label="Приватный чат" className="text-left" classNameLabel="col-xs-3" classNameElement="col-xs-9">
                        <Checkbox
                            onChange={this.handleRequestChange('isPrivate')}
                            value={isPrivate}
                            className="ml-3"
                        />
                    </FormGroup>
                </div>
            </div>
        )
    }

    handleSubmit = () => {
        const {chatkitUser} = this.props;
        const {info, theme, selectedUsersIds, isPrivate} = this.state;

        console.log('chatkitUser');
        console.log(chatkitUser);

        this.props.onSubmit({
            info,
            theme,
            selectedUsersIds: [...selectedUsersIds, chatkitUser.id], // Добавляем себя, это обязательно.
            isPrivate
        });
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
                header="Создание чата"
                body={this.renderModalBody()}
                footer={this.renderModalFooter()}
                onClose={onClose}
            />
        )
    }
}