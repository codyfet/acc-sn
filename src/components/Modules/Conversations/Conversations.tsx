import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

/**
 * Список перписок пользователя.
 */
export class Conversations extends React.Component {
    handleListItemClick = () => {
        console.log('handleListItemClick');
    }

    render () {
        return (
            <ListGroup>
                <ListGroupItem onClick={this.handleListItemClick} className="conversation">Room ID 19385475</ListGroupItem>
                <ListGroupItem className="conversation">Переписка с Машей</ListGroupItem>
                <ListGroupItem className="conversation">Переписка с Петей</ListGroupItem>
            </ListGroup>
        )
    }
}