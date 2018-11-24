import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

/**
 * Список перписок пользователя.
 */
export const Conversations = () => {
    return (
        <ListGroup>
            <ListGroupItem className="conversation">Переписка с Сашей</ListGroupItem>
            <ListGroupItem className="conversation">Переписка с Машей</ListGroupItem>
            <ListGroupItem className="conversation">Переписка с Петей</ListGroupItem>
        </ListGroup>
    )
}