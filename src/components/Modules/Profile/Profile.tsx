import * as React from 'react';
import {FormGroup} from '../../Core/FormGroup';
import {User} from '../../../models/Common';
import {SimpleButton} from '../../../Components/Core/SimpleButton';
import Dropzone from 'react-dropzone';
import {isFunction} from 'lodash';
// import {MessageList} from '../MessageList/MessageList';
import {NewsList} from '../NewsList/NewsList';

interface IProps {
    user: User;
    users: User[];
    chatkitUser: any;
}

interface IState {

}

const today = '25.11.2018';
export class Profile extends React.Component<IProps, IState> {

    dropzoneRef: any;

    /**
     * Обработчик открытия стандартного диалогового окна выбора загружаемого файла.
     */
    handleOpenSelectFileDialog = () => {
        this.dropzoneRef.open();
    }

    /**
     * Обработчик выбора файла в диалоговом окне.
     */
    handleDrop = (acceptedFiles: File[]) => {
        const {chatkitUser} = this.props;

        isFunction(chatkitUser.uploadDataAttachment) && chatkitUser.uploadDataAttachment(chatkitUser.rooms[0].id, {fiel: acceptedFiles[0], name: acceptedFiles[0].name});
    }

    render () {
        const enterprisedId: string = window.location.pathname.split('/')[2] || null;
        const user: User = this.props.users.find(
            (item: User) => item.enterpriseId === enterprisedId
        );

        return (
            <div className="row profile">
                <div className="col-xs-12">
                    <div className="col-xs-12 layout-panel pt-7 pb-7 mb-3">
                        <div className="col-xs-4">
                            <img className="user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf00ByiPUMeiPAfU6BMmbutoOswG-3LPfEYR8BqJfrQF3s5rcz"/>
                        </div>
                        <div className="col-xs-8">
                            <FormGroup
                                label={`${!!user ? user.name : this.props.user.name} ${!!user ? user.surname : this.props.user.surname}`}
                                className="text-left text-5"
                                classNameElement="text-right col-xs-2"
                                classNameLabel="col-xs-10"
                            >
                                <div className="row">
                                    <img className="online-image mr-2 mt-1" src="https://upload.wikimedia.org/wikipedia/commons/5/50/WX_circle_green.png"/>
                                    <span className="text-1">online</span>
                                </div>
                            </FormGroup>
                            <FormGroup label="Разработчик" className="text-left" classNameElement="text-right col-xs-12" classNameLabel="col-xs-6"/>
                            <FormGroup
                                label="Дата регистрации"
                                className="text-left mt-9"
                                classNameElement="text-right col-xs-6"
                                classNameLabel="col-xs-6"
                            >
                                {today}
                            </FormGroup>
                            <FormGroup
                                label="Achievements"
                                classNameElement="text-right col-xs-12"
                                classNameLabel="text-left col-xs-12"
                            >
                                <img className="achievement-image mt-1" src="https://peoplebeta.accenture.com/flairimages/73a60c9e-4285-482d-91a8-be6ccbee646c.gif"/>
                                <img className="achievement-image mt-1" src="https://peoplebeta.accenture.com/flairimages/0912f9da-63d6-4433-bd77-cc30b3465371.gif"/>
                                <img className="achievement-image mt-1" src="https://peoplebeta.accenture.com/flairimages/c85a04a9-c856-4604-b2ec-0413c370ad7e.gif"/>
                                <img className="achievement-image mt-1" src="https://peoplebeta.accenture.com/flairimages/90cd28a7-662a-43d0-b9b2-76677f1d2232.gif"/>
                                <img className="achievement-image mt-1" src="https://people.accenture.com/FlairImages/2423.gif"/>
                            </FormGroup>
                        </div>
                        <div className="col-xs-12 text-left">
                            <SimpleButton onClick={this.handleOpenSelectFileDialog} iconClass="fa-cloud-upload" label='Изменить аватар' className="upload-avatar mt-2"/>
                        </div>
                    </div>
                    <Dropzone
                        ref={(node: any) => {this.dropzoneRef = node}}
                        onDrop={this.handleDrop}
                        className="hidden"
                    />
                    <div className="col-xs-12 layout-panel pt-7 pb-7">
                        <NewsList chatkitUser={this.props.chatkitUser} />
                    </div>
                </div>
            </div>
        )
    }

}