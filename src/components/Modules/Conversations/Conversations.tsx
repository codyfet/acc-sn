import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

interface IProps {
    rooms: Array<any>;
}

interface IState {
    toMessageList: boolean;
    clickedIndex: number
}

/**
 * Список перписок пользователя.
 */
export class Conversations extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            toMessageList: false,
            clickedIndex: null
        }
    }

    handleListItemClick = (event: any) => {
        console.log(event);

        this.setState({
            toMessageList: true,
            clickedIndex: parseInt(event.currentTarget.id)
        })
    }

    render () {
        if (this.state.toMessageList) {
            return (
                <Redirect to={`/conversations/${this.state.clickedIndex}`} />
            );
        }

        if (!this.props.rooms) {
            return null;
        }

        return (
            <ListGroup>
                {
                    this.props.rooms.map(
                        (item, index) => {
                            return (
                                <ListGroupItem 
                                    key={item.createdAt}
                                    id={index.toString()}
                                    onClick={this.handleListItemClick}
                                    className="conversation"
                                >
                                    {item.userIds.join(', ')}
                                </ListGroupItem>
                            );
                        }
                    )
                }
            </ListGroup>
        );
    }
}