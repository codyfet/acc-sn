import * as React from 'react';
import {FormGroup} from '../../Core/FormGroup';
import {LayoutHeader} from '../Header/LayoutHeader';


export const Profile = () => {
    return (
        <div className="row profile">
            <div className="col-xs-12">
                <div className="col-xs-12 layout-panel pt-7 pb-7 mb-3">
                    <div className="col-xs-4">
                        <img className="user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf00ByiPUMeiPAfU6BMmbutoOswG-3LPfEYR8BqJfrQF3s5rcz"/>
                    </div>
                    <div className="col-xs-8">
                        <FormGroup label="ФИО" className="text-left text-5"/>
                        <FormGroup label="Разработчик" className="text-left"/>
                    </div>
                </div>
                <div className="col-xs-12 layout-panel pt-7 pb-7">
                    <LayoutHeader label="Лента"/>
                </div>
            </div>
        </div>
    )
}