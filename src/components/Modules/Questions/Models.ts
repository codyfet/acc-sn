export enum EQuestionType {
    HR = 'HR',
    IT = 'IT',
    CAREERS = 'CAREERS',
    WORKPLACE = 'WORKPLACE',
    SEQRITY = 'SEQRITY'
}

export interface IQuestion {
    type: EQuestionType;
    label: string;
    answer: string;
}