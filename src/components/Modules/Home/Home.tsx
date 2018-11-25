import * as React from 'react';
import {LayoutHeader} from '../Header/LayoutHeader';

export const Home = () => {
    return (
        <div>
            <div className="col-xs-12">
                <div className="col-xs-12 layout-panel pt-7 pb-7">
                    <LayoutHeader label="Лента"/>
                </div>
            </div>
        </div>
    )
}