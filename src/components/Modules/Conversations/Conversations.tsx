import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

interface IProps {
    rooms: Array<any>;
}

interface IState {
    
}

/**
 * Список перписок пользователя.
 */
export class Conversations extends React.Component<IProps, IState> {
    handleListItemClick = () => {
        console.log('handleListItemClick');
    }

    render () {
        return (
            <ListGroup>
                {
                    this.props.rooms.map(
                        (item) => {
                            return (
                                <ListGroupItem 
                                    key={item.createdAt}
                                    onClick={this.handleListItemClick}
                                    className="conversation"
                                >
                                    {item.id}
                                </ListGroupItem>
                            );
                        }
                    )
                }
            </ListGroup>
        );
    }
}