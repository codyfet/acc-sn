import {isFunction, noop, omit} from 'lodash';
import * as React from 'react';
import {Button, Panel} from 'react-bootstrap';
import {EExpandingPanelType} from './Enums';

/**
 * Интерфейс свойств компонента.
 *
 * @prop {JSX.Element | string} header Элемент или текст заголовка панели.
 * @prop {JSX.Element | string} [expandedHeader] Элемент или текст развёрнутого заголовка панели.
 * @prop {string | JSX.Element | JSX.Element[]} [subHeader] Подзаголовок панели.
 * @prop {boolean} [collapsed] Признак того, что панель свёрнута по умолчанию.
 * @prop {EExpandingPanelType} [panelType] Тип панели (по умолчанию EXPANDING_PANEL).
 * @prop {string} [collapsedIconClassName] Иконка заголовка панели в свернутом состоянии (по умолчанию fa-plus).
 * @prop {string} [expandedIconClassName] Иконка заголовка панели в развёрнутом состоянии (по умолчанию fa-minus).
 * @prop {string} [headerClassName] Классы заголовка панели.
 * @prop {string} [subHeaderClassName] Классы подзаголовка панели.
 * @prop {JSX.Element} [actionsPanel] Блок с действиями в заголовки панели.
 * @prop {string} [bodyClassName] CSS-классы тела панели.
 * @prop {string} [collapsedClassName] Класс для свернутой панели.
 * @prop {string} [expandedClassName] Класс для развернутой панели.
 */
interface IProps extends Panel.PanelProps {
    header: JSX.Element | string;
    expandedHeader?: JSX.Element | string;
    subHeader?: string | JSX.Element | JSX.Element[];
    collapsed?: boolean;
    panelType?: EExpandingPanelType;
    collapsedIconClassName?: string;
    expandedIconClassName?: string;
    headerClassName?: string;
    subHeaderClassName?: string;
    actionsPanel?: JSX.Element;
    bodyClassName?: string;
    collapsedClassName?: string;
    expandedClassName?: string;
}

/**
 * Интерфейс состояния компонента.
 *
 * @prop {boolean} collapsed Признак того, что панель свёрнута.
 */
interface IState {
    collapsed: boolean;
}

/**
 * Маппинг типов панели и соответствующих CSS-классов.
 */
const panelClassNameMap = {
    [EExpandingPanelType.EXPANDING_BLOCK]: 'expanding-block',
    [EExpandingPanelType.EXPANDING_PANEL]: 'expanding-panel',
    [EExpandingPanelType.SPOILER]: 'spoiler'
}

/**
 * Компонент сворачивающейся/разворачивающейся панели.
 */
export class ExpandingPanel extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const {collapsed = false} = props;

        this.state = {
            collapsed
        }
    }

    static defaultProps: Partial<IProps> = {
        collapsed: false,
        panelType: EExpandingPanelType.EXPANDING_PANEL,
        collapsedIconClassName: 'fa-plus',
        expandedIconClassName: 'fa-minus',
        collapsedClassName: ''
    }

    /**
     * Обработчик переключения состояния панели (свёрнута/развёрнута).
     */
    handleToggle = () => {
        const {onToggle} = this.props;

        this.setState({collapsed: !this.state.collapsed}, () => {
            isFunction(onToggle) && onToggle();
        });
    }

    render () {
        const {
            onExit,
            header,
            onEnter,
            children,
            onExited,
            onExiting,
            panelType,
            onEntered,
            subHeader,
            onEntering,
            className,
            actionsPanel,
            bodyClassName,
            expandedHeader,
            headerClassName,
            collapsedClassName,
            expandedClassName,
            subHeaderClassName,
            collapsedIconClassName,
            expandedIconClassName,
            ...restProps
        } = this.props;
        const {collapsed} = this.state;
        const panelClassName = panelClassNameMap[panelType];
        const panelProps = omit(restProps, 'collapsed');
        const renderedHeader = !collapsed ? expandedHeader ? expandedHeader : header : header;

        return (
            <Panel
                className={`${panelClassName} ${className} ${collapsed && collapsedClassName} ${!collapsed && expandedClassName ? expandedClassName : ''}`}
                expanded={!collapsed}
                onToggle={noop}
                {...panelProps}
            >
                <div
                    className={`${panelClassName}-header ${headerClassName ? headerClassName : ''} ${!collapsed ? 'expanded' : 'collapsed'}`}
                    onClick={this.handleToggle}
                >
                    <i className={`fa ${panelClassName}-icon ${collapsed ? collapsedIconClassName : expandedIconClassName}`} />

                    {panelType === EExpandingPanelType.SPOILER ? (
                        <Button bsStyle="link" className="font-base">{renderedHeader}</Button>
                    ) : (
                        <span className={`${panelClassName}-title`}>
                            {renderedHeader}
                        </span>
                    )}

                    {subHeader && (
                        <div className={`${subHeaderClassName ? subHeaderClassName : ''}`}>
                            {subHeader}
                        </div>
                    )}
                </div>

                {actionsPanel && (
                    actionsPanel
                )}

                <Panel.Collapse
                    onEnter={onEnter}
                    onEntering={onEntering}
                    onEntered={onEntered}
                    onExit={onExit}
                    onExiting={onExiting}
                    onExited={onExited}
                >
                    <Panel.Body className={`${panelClassName}-body ${bodyClassName ? bodyClassName : ''}`}>
                        {children}
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        )
    }
}
