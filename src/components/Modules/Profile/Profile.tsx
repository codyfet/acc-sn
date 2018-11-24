import * as React from 'react';
import {ExpandingPanel} from '../../Core/ExpandingPanel';
import {EExpandingPanelType} from '../../Core/Enums';

export const Profile = () => {
    return (
        <div className="row">
            <div className="col-xs-12">
                <ExpandingPanel
                    collapsed
                    className="mt-2 col-xs-4"
                    headerClassName="pb-0"
                    collapsedIconClassName="fa-plus"
                    expandedIconClassName="fa-minus"
                    panelType={EExpandingPanelType.EXPANDING_BLOCK}
                    header="Информация1"
                >
                   Здесь будет страница профиля
                </ExpandingPanel>
                <ExpandingPanel
                    collapsed
                    className="mt-2 col-xs-4"
                    headerClassName="pb-0"
                    collapsedIconClassName="fa-plus"
                    expandedIconClassName="fa-minus"
                    panelType={EExpandingPanelType.EXPANDING_PANEL}
                    header="Информация2"
                >
                   Здесь будет страница профиля
                </ExpandingPanel>
                <ExpandingPanel
                    collapsed
                    className="mt-2 col-xs-4"
                    headerClassName="pb-0"
                    collapsedIconClassName="fa-plus"
                    expandedIconClassName="fa-minus"
                    panelType={EExpandingPanelType.SPOILER}
                    header="Информация3"
                >
                   Здесь будет страница профиля
                </ExpandingPanel>
            </div>
        </div>
    )
}