import * as React from 'react';
import {FormGroup} from '../../Core/FormGroup';

interface IProps {
    label: string;
    className?: string;
}

/**
 * Отображает заголовка.
 */
export const LayoutHeader: React.SFC<IProps> = (props: IProps) => {
    const {label, className="text-left text-5"} = props;

    return (
        <div className="header col-xs-12">
            <FormGroup label={label} className={className}/>
        </div>
    )
}