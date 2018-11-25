import * as React from 'react';
import {EQuestionType, IQuestion} from './Models';
import {map, filter} from 'lodash';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType, EButtonStyle} from '../../Core/Enums';
import {questionsMock} from './QuestionsMock';
import {SimpleButton} from '../../Core/SimpleButton';
import {LayoutHeader} from '../Header/LayoutHeader';
import {CreateServiceRoomModal} from '../Conversations/CreateServiceRoomModal';
import {getQuestions} from './QuestionsService';
import {Spinner} from '../../../Components/Core/Spinner';

interface IProps {
    questionType: EQuestionType;
}

interface IState {
    isCreateServiceRoomModalShow: boolean;
    isLoading: boolean;
}

/**
 * Отображает вопросы по выбранному типу.
 */
export class Questions extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            isCreateServiceRoomModalShow: false,
            isLoading: false
        }
    }

    handleLoading = (isLoading: boolean) => () => {
        this.setState({isLoading});
    }

    componentDidMount () {
        this.handleLoading(true);
        getQuestions(this.handleLoading(false), this.handleLoading(false));
    }

    handleCreateModalShown = (isShow: boolean) => () => {
        this.setState({isCreateServiceRoomModalShow: isShow});
    }

    handleCreateServiceRoom = (_request: any) => {
        this.setState({isCreateServiceRoomModalShow: false});
    }

    getQuestions = () => {
        const {questionType} = this.props;

        return map(filter(questionsMock, (question: IQuestion) => {return question.type === questionType}), (question: IQuestion) => {
            return (
                <ExpandingPanel
                    collapsed
                    className="col-xs-12 question"
                    headerClassName="pb-0"
                    collapsedIconClassName="fa-plus"
                    expandedIconClassName="fa-minus"
                    panelType={EExpandingPanelType.EXPANDING_BLOCK}
                    header={question.label}
                >
                   {map(question.answer.split('\n'), (text: string) => {return <div className="text-block">{text}</div>})}
                    <div className="col-xs-12">
                        <SimpleButton label="Остались вопросы?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION} onClick={this.handleCreateModalShown(true)}/>
                    </div>
                </ExpandingPanel>
            )
        })
    }

    getLabel = () => {
        const {questionType} = this.props;
        let result = 'Вопросы';

        switch (questionType) {
            case EQuestionType.CAREERS:
                result = 'Вопросы Карьеры'
                break;
            case EQuestionType.HR:
                result = 'Вопросы Human Resource'
                break;
            case EQuestionType.IT:
                result = 'Вопросы Тверского IT'
                break;
            case EQuestionType.SEQRITY:
                result = 'Вопросы Безопасности'
                break;
            case EQuestionType.WORKPLACE:
                result = 'Вопросы Рабочего Пространства'
                break;
        }

        return result;
    }

    render () {
        const {questionType} = this.props;
        const {isCreateServiceRoomModalShow, isLoading} = this.state;

        return (
            <div className="questions">
                <LayoutHeader label={this.getLabel()}/>

                {this.getQuestions()}

                <div className="col-xs-12 mt-3">
                    <SimpleButton label="Нет вашего вопроса?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION} onClick={this.handleCreateModalShown(true)}/>
                </div>

                {isCreateServiceRoomModalShow &&
                    <CreateServiceRoomModal
                        questionType={questionType}
                        onClose={this.handleCreateModalShown(false)}
                        onSubmit={this.handleCreateServiceRoom}
                    />
                }

                {isLoading && <Spinner/>}
            </div>
        )
    }
}