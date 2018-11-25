import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {groupsMock} from './GroupsMock';
import {LayoutHeader} from '../Header/LayoutHeader';

interface IProps {
    chatkitUser: any;
}

export class Groups extends React.Component<IProps> {

    handleListItemClick = (_event: any) => {

    }

    handleAddClick = () => {
        this.setState({
            showAddRoomModal: true
        })
    }

    render () {
        return (
            <div className="groups">
                <LayoutHeader label="Группы Тверского ATC" className="text-5"/>
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
                    groupsMock.map(
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
                                            <img className="online-image mr-2 mt-1" src={item.imgSrc}/>
                                        </div>
                                        <div className="col-xs-9">
                                            {item.name}
                                        </div>
                                        <div className="col-xs-2 text-right">
                                            {item.createdAt}
                                        </div>
                                    </div>
                                </ListGroupItem>
                            );
                        }
                    )
                }
            </ListGroup>
        </div>
        )
    }
}