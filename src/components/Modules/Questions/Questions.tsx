import * as React from 'react';
import {EQuestionType, IQuestion} from './Models';
import {map, filter, get} from 'lodash';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType, EButtonStyle} from '../../Core/Enums';
import {SimpleButton} from '../../Core/SimpleButton';
import {LayoutHeader} from '../Header/LayoutHeader';
import {CreateServiceRoomModal} from '../Conversations/CreateServiceRoomModal';
import {getQuestions, addQuestion} from './QuestionsService';
import {Spinner} from '../../../Components/Core/Spinner';
import {AddQuestionModal} from './AddQuestionModal';

interface IProps {
    questionType: EQuestionType;
    isExpert?: boolean;
}

interface IState {
    isCreateServiceRoomModalShow: boolean;
    isCreateQuestionModalShown: boolean;
    isLoading: boolean;
    questions: IQuestion[];
}

/**
 * Отображает вопросы по выбранному типу.
 */
export class Questions extends React.PureComponent<IProps, IState> {

    constructor (props: IProps) {
        super (props);

        this.state = {
            isCreateServiceRoomModalShow: false,
            isCreateQuestionModalShown: false,
            isLoading: false,
            questions: []
        }
    }

    getQuestions = () => {
        this.handleLoading(true)();
        getQuestions((axioData: any) => {
            this.handleLoading(false)()
            if (get(axioData, 'data.data')) {
                this.setState({questions: axioData.data.data, isCreateQuestionModalShown: false});
            }
        }, this.handleLoading(false));
    }

    handleLoading = (isLoading: boolean) => () => {
        this.setState({isLoading});
    }

    componentDidMount () {
        this.getQuestions();
    }
        

    handleCreateRoomModalShown = (isShow: boolean) => () => {
        this.setState({isCreateServiceRoomModalShow: isShow});
    }

    handleCreateQuestionModalShown = (isShow: boolean) => () => {
        this.setState({isCreateQuestionModalShown: isShow});
    }

    handleCreateServiceRoom = (_request: any) => {
        this.setState({isCreateServiceRoomModalShow: false});
    }

    handleCreateQuestion = (request: any) => {
        this.handleLoading(true)();
        addQuestion({...request, type: this.props.questionType},
            () => {
                this.getQuestions();
            }, this.handleLoading(false))
    }

    getQuestionsElement = () => {
        const {questionType} = this.props;
        const {questions} = this.state;

        return map(filter(questions, (question: IQuestion) => {return question.type === questionType}), (question: IQuestion) => {
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
                        <SimpleButton label="Остались вопросы?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION} onClick={this.handleCreateRoomModalShown(true)}/>
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
        const {questionType, isExpert} = this.props;
        const {
            isCreateServiceRoomModalShow,
            isCreateQuestionModalShown,
            isLoading
        } = this.state;

        return (
            <div className="questions">
                <LayoutHeader label={this.getLabel()}/>

                {this.getQuestionsElement()}

                <div className="col-xs-12 mt-3">
                    {isExpert ? (
                            <SimpleButton label="Нет вашего вопроса?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION} onClick={this.handleCreateRoomModalShown(true)}/>
                        ) : (
                            <SimpleButton label="Добавить вопрос" iconClass="fa-comment" btnStyle={EButtonStyle.SUCCESS} onClick={this.handleCreateQuestionModalShown(true)}/>
                        )
                    }
                </div>

                {isCreateServiceRoomModalShow &&
                    <CreateServiceRoomModal
                        questionType={questionType}
                        onClose={this.handleCreateRoomModalShown(false)}
                        onSubmit={this.handleCreateServiceRoom}
                    />
                }

                {isCreateQuestionModalShown &&
                    <AddQuestionModal
                        onClose={this.handleCreateQuestionModalShown(false)}
                        onSubmit={this.handleCreateQuestion}
                    />
                }

                {isLoading && <Spinner/>}
            </div>
        )
    }
}