import * as moment from 'moment';

/**
 * Общий интерфейс для отдельного элемента выпадающих списков, радиогрупп и т.д.
 *
 * @prop {any} label Текстовая метка.
 * @prop {T} value Значение.
 * @prop {string} [title] Поясняющая подсказка.
 */
export interface IOption<T> {
    label: any;
    value: T;
    title?: string;
}

export interface IChartData {
    value: number;
    label?: string;
}

export interface IChartLineData {
    data: IChartData[];
    label?: string;
}

/**
 * Серверный формат даты.
 */
const SERVER_DATE_FORMAT = 'YYYY-MM-DD';
/**
 * Серверный формат даты со временем.
 */
const SERVER_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS';

/**
 * Формат даты на front-end.
 */
const FRONTEND_DATE_FORMAT = 'DD.MM.YYYY';
/**
 * Формат даты со временем на front-end.
 */
const FRONTEND_DATETIME_FORMAT = 'DD.MM.YYYY HH:mm';

/**
 * Форматирует переданную дату из заданного формата в принятый для отображения
 * пользователю формат.
 *
 * @param {string} dateString Форматируемая дата.
 * @param {string} [dateFormat] Формат передаваемой даты (по умолчанию - серверный).
 */
function formatDate(dateString: string, dateFormat = SERVER_DATE_FORMAT): string {
    return dateString ? moment(dateString, dateFormat).format(FRONTEND_DATE_FORMAT) : '';
}

/**
 * Форматирует переданную дату со временем из заданного формата в принятый для отображения
 * пользователю формат.
 *
 * @param {string} datetimeString Форматируемая дата.
 * @param {string} [datetimeFormat] Формат передаваемой даты (по умолчанию - серверный).
 */
function formatDatetime(datetimeString: string, datetimeFormat = SERVER_DATETIME_FORMAT): string {
    return datetimeString ? moment(datetimeString, datetimeFormat).format(FRONTEND_DATETIME_FORMAT) : '';
}

/**
 * Возвращает текущую дату в строков представлении по заданному формату.
 *
 * @param {string} [dateFormat] Формат возвращаемой даты (по умолчанию - серверный).
 */
function getToday(dateFormat = SERVER_DATE_FORMAT): string {
    return moment().format(dateFormat);
}

/**
 * Возвращает время между переданными датами в указанной единице измерения.
 *
 * @param {string} startDate Начальная дата.
 * @param {string} endDate Конечная дата.
 * @param {moment.unitOfTime.Diff} measurement Единица измерения.
 * @param {string} [dateFormat] Формат передаваемых дат (по умолчанию - серверный).
 */
function getTimeBetween(startDate: string, endDate: string, measurement: moment.unitOfTime.Diff, dateFormat = SERVER_DATE_FORMAT): number {
    return moment(endDate, dateFormat).diff(moment(startDate, dateFormat), measurement);
}

/**
 * Возвращает дату, увеличенную на указанное количество дней.
 *
 * @param {string} dateFrom Начальная дата
 * @param {string | number} days Количество дней, добавляемых к начальной дате.
 */
function addDays(dateFrom: string, days: string | number): string {
    let resultDate = dateFrom ? moment(dateFrom, SERVER_DATE_FORMAT) : moment(SERVER_DATE_FORMAT);

    return resultDate.add(days, 'days').format(SERVER_DATE_FORMAT);
}

/**
 * Возвращает текущую дату в серверном формате.
 *
 * @param {boolean} [isRounded] Признак округления времени до 30 минут в большую сторону.
 */
export const getCurrentDate = (isRounded?: boolean): string => {
    const date = new Date();
    const month = date.getUTCMonth() + 1;

    /**
     * Возвращает валидное для даты чило в виде строки. Вместо 2 выведет '02'.
     */
    const getDateNumber = (num: number): string => {
        let adder: string = '';
        if (num < 10) {
            adder = '0';
        }

        return (adder + num);
    };

    /**
     * Возвращает валидные часы.
     */
    const getHours = (): string => {
        let hours = date.getHours();

        if (isRounded) {
            if (date.getMinutes() > 30) {
                hours ++;
            }

            if (hours > 23) {
                hours = 0;
            }
        }

        return getDateNumber(hours);
    }

    /**
     * Возвращает валидные минуты.
     */
    const getMinutes = (): string => {
        let minutes = date.getMinutes();

        if (isRounded) {
            if (minutes > 30) {
                minutes = 0;
            } else {
                minutes = 30;
            }
        }

        return getDateNumber(minutes);
    }

    return `${date.getUTCFullYear()}-${getDateNumber(month)}-${getDateNumber(date.getUTCDate())}T${getHours()}:${getMinutes()}:00.000`;
};

/**
 * Вовзращает текущую дату и время в строком представлении.
 *
 * @param {string} dateFormat Формат даты.
 */
function getNow(dateFormat = SERVER_DATETIME_FORMAT): string {
    return moment().format(dateFormat);
}

/**
 * Возвращает текущую дату и время плюс 7 дней в строков представлении.
 *
 * @param {string} dateFormat Формат даты.
 */
function getNowPlusWeek(dateFormat = SERVER_DATETIME_FORMAT): string {
    return moment().add(7, 'days').format(dateFormat);
}

export {
    SERVER_DATE_FORMAT,
    SERVER_DATETIME_FORMAT,
    FRONTEND_DATETIME_FORMAT,
    FRONTEND_DATE_FORMAT,
    formatDate,
    formatDatetime,
    getToday,
    getTimeBetween,
    addDays,
    getNow,
    getNowPlusWeek
}
