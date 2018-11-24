import * as React from 'react';
import {EQuestionType, IQuestion} from './Models';
import {map, filter} from 'lodash';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType} from '../../Core/Enums';
import {questionsMock} from './QuestionsMock';

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
                </ExpandingPanel>
            )
        })
    }

    render () {
        return (
            <div className="questions">
               {this.getQuestions()}
            </div>
        )
    }
}