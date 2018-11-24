import * as React from 'react';
import {EQuestionType, IQuestion} from './Models';
import {map, filter} from 'lodash';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType, EButtonStyle} from '../../Core/Enums';
import {questionsMock} from './QuestionsMock';
import {SimpleButton} from '../../Core/SimpleButton';
import {LayoutHeader} from '../Header/LayoutHeader';

interface IProps {
    questionType: EQuestionType;
}

/**
 * Отображает вопросы по выбранному типу.
 */
export class Questions extends React.PureComponent<IProps> {

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
                        <SimpleButton label="Остались вопросы?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION}/>
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
        

        return (
            <div className="questions">
                <LayoutHeader label={this.getLabel()}/>
               {this.getQuestions()}
               <div className="col-xs-12 mt-3">
                    <SimpleButton label="Нет вашего вопроса?" iconClass="fa-comment" btnStyle={EButtonStyle.QUESTION}/>
                </div>
            </div>
        )
    }
}