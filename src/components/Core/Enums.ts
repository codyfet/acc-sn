/**
 * Типы разворачивающихся/сворачивающихся панелей.
 *
 * EXPANDING_BLOCK - Сворачивающийся блок с границей (обычно используется для дочерних сущностей).
 * EXPANDING_PANEL - Сворачивающаяся панель (обычно используется для разделения контента на форме).
 * SPOILER - Сворачивающийся блок (обычно используется для детального отображения информации - например, полные данные контакта).
 * MENU - Сворачивающаяся панель для меню.
 */
export enum EExpandingPanelType {
    EXPANDING_BLOCK,
    EXPANDING_PANEL,
    SPOILER,
    MENU
}

export enum EButtonStyle {
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    QUESTION = 'question'
}
