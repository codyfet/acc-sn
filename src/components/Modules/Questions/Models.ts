export enum EQuestionType {
    HR = 'HR',
    IT = 'IT',
    CAREERS = 'CAREERS',
    WORKPLACE = 'WORKPLACE'
}

export interface IQuestion {
    type: EQuestionType;
    label: string;
    answer: string;
}