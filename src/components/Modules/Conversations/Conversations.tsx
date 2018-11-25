import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {CreateCustomRoomModal} from './CreateCustomRoomModal';
import moment = require('moment');

interface IProps {
    chatkitUser: any;
}

interface IState {
    toMessageList: boolean;
    clickedIndex: number;
    showAddRoomModal: boolean;
}

/**
 * Список перписок пользователя.
 */
export class Conversations extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            toMessageList: false,
            clickedIndex: null,
            showAddRoomModal: false
        }
    }

    handleListItemClick = (event: any) => {
        this.setState({
            toMessageList: true,
            clickedIndex: parseInt(event.currentTarget.id)
        })
    }

    handleAddClick = () => {
        this.setState({
            showAddRoomModal: true
        })
    }

    handleAddModalClose = () => {
        this.setState({
            showAddRoomModal: false
        })
    }

    handleSave = (roomData: any) => {
        const {chatkitUser} = this.props;
        const {info, theme, selectedUsersIds, isPrivate} = roomData;

        chatkitUser.createRoom({
            name: theme,
            private: !!isPrivate,
            addUserIds: selectedUsersIds,
            customData: {info}
          }).then((room: any) => {
                console.log(`Created room called ${room.name}`)
          })
          .catch((err: any) => {
                console.log(`Error creating room ${err}`)
          })        
    }

    render () {
        if (this.state.toMessageList) {
            return (
                <Redirect to={`/conversations/${this.state.clickedIndex}`} />
            );
        }

        if (!this.props.chatkitUser.rooms) {
            return null;
        }

        return (
            <React.Fragment>
                <p>
                    <a 
                        onClick={this.handleAddClick} 
                        className="add-room-btn"
                    >
                        Добавить
                    </a>
                </p>
                <ListGroup>
                    {
                        this.props.chatkitUser.rooms.map(
                            (item: any, index: number) => {
                                return (
                                    <ListGroupItem 
                                        key={item.createdAt}
                                        id={index.toString()}
                                        onClick={this.handleListItemClick}
                                        className="conversation"
                                    >
                                    <div className="row">
                                        <div className="col-xs-1">
                                            <i className="fa fa-envelope-open-o text-5"/>
                                        </div>
                                        <div className="col-xs-9">
                                            {item.userIds.join(', ')}
                                        </div>
                                        <div className="col-xs-2 text-right">
                                            {moment(item.createdAt).format('DD.MM.YYYY')}
                                        </div>
                                    </div>
                                        
                                    </ListGroupItem>
                                );
                            }
                        )
                    }
                </ListGroup>
                {
                    this.state.showAddRoomModal && (
                        <CreateCustomRoomModal
                            onClose={this.handleAddModalClose}
                            onSubmit={this.handleSave}
                            chatkitUser={this.props.chatkitUser}
                        />
                    )
                }
            </React.Fragment>
        );
    }
}