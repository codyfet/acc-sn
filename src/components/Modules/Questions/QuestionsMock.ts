import {EQuestionType, IQuestion} from "./Models";

export const questionsMock: IQuestion[] = [
    {type: EQuestionType.IT, label: 'Сломался компьютер?', answer: 'Приходите к нам'},
    {type: EQuestionType.HR, label: 'Оформление отпусков', answer: `Уважаемые Коллеги,
    Хотим обратить ваше внимание на то, что основной ежегодный отпуск (и дополнительный ежегодный отпуск) должен быть оформлен не позднее, чем за 5 дней до его начала. 
    Эта необходимость связана с требованием ТК РФ (ст. 136), и нарушение этих сроков влечет финансовую ответственность работодателя.
    
    Если вы планируете брать отпуск/день отдыха
    
    НЕОБХОДИМЫЕ ДЕЙСТВИЯ:
    • Заполнить заявку на отпуск в Vacation and Business Trips Request tool до начала отпуска
    • Отправить скан письменного заявления Анне Яковлевой: anna.yakovleva@accenture.com (форма заявления приходит Вам на email вместе с одобрением руководителя), оригинал передайте в HR за 5 дней до начала отпуска
    • Подписать приказ на отпуск, оригинал передать в HR. 
    • Отразить даты отпуска в myTE в соответствии с датами в заявлении
    
    БУДЬТЕ ВНИМАТЕЛЬНЫ 
    Вид отпуска	Time Report
     Ежегодный основной/дополнительный оплачиваемый отпуск	Regular Vacation Taken (900X00)
    Отпуск без сохранения заработной платы	Other Approved Absence (955X00)
    Оплачиваемые выходные дни в связи с рождением ребенка	
    Оплачиваемые выходные дни в связи со смертью родственника	
    Оплачиваемые выходные дни в связи co свадьбой	
    День отдыха за вылет/выезд в командировку в выходной день	
    День отдыха за работу в выходной день	
    День отдыха за сдачу крови
    `},
    {type: EQuestionType.HR, label: 'Работа в выходные', answer: `Если кому-то из вас нужен доступ в офис в выходные, пожалуйста, внесите свои ФИО в заявку (лежит у Рады на столе) – сегодня до 15.00ч.

    Уходишь последний? 
    Пожалуйста, проверь закрыты ли окна, выключены ли электрические приборы на кухнях и «основной» свет в офисах!
    `},
    {type: EQuestionType.HR, label: 'Заказ справки', answer: `Если вам необходимо узнать информацию о балансе своего отпуска, получить заверенную копию трудовой книжки, заказать полис для выезда за рубеж или справку для визы (ИМЯ,ФАМИЛИЯ - как в загранпаспорте) 

    MyRequests tool – Вы можете разместить запрос и отслеживать статус запроса онлайн в любое время, пройдя по ссылке: myrequests.accenture.com: раздел „HR QUESTION" Category: Other/General Inquiry 
    
    https://ts.accenture.com/sites/ATS-Russia
    
    Вся информация для сотрудников тут.
    `},
    {type: EQuestionType.HR, label: 'Программа поощрения сезонных отпусков', answer: `Грамотное планирование отпусков остается одним из ключевых компонентов для эффективной экономической деятельности компании и персональной продуктивности. 
    Вместе с этим, мы ожидаем, что у каждого из вас будет разумный баланс между занятостью на проектах и временем для отдыха.
    Для того, чтобы выполнить все намеченные планы в новом финансовом году, мы все должны понимать принципы данного подхода.
     
    Руководство компании, принимая во внимание ваши позитивные отзывы о программе поощрения сезонных отпусков в прошлом году и на период январь-февраль в этом году, приняло решение о ее продлении на май 2018 г.

    УСЛОВИЯ ПРОГРАММЫ ПООЩРЕНИЯ СЕЗОННЫХ ОТПУСКОВ: 

    ИДЕЯ ПРОГРАММЫ	Корпоративная программа поощрения сезонных отпусков заключается в стимулировании оформления сотрудниками отпусков через возмещение разницы между отпускными выплатами и суммой оклада в месяцы с наименьшим количеством рабочих дней. 

    ОЖИДАНИЯ ОТ ПРОГРАММЫ	Нашим приоритетом является 5 дней общего отпускного баланса на 31 августа 2018 года. У тех сотрудников, у которых накоплен отпускной баланс за предыдущие года, мы рекомендуем использовать в течение 2018 финансового года 33 календарных дня, предоставляемых компанией + 5 дней для сокращения отпускного баланса. Период финансового года: 1 сентября – 31 августа.

    КАК ОФОРМИТЬ?	Необходимо оформить отпуск, включая как рабочие, так и выходные дни 
    (пример: по заявлению на отпуск с понедельника по воскресенье, включительно, или со среды по воскресенье включительно, предусмотрено возмещение; по заявлению на отпуск с понедельника по пятницу или со среды пятницу – возмещение не предусмотрено);

    ДЛЯ КОГО?	Дельта возмещается всем работникам всех отделов до уровня Менеджер включительно (в том числе младшим стажерам и стажерам);

    СКОЛЬКО? 	Доплатой возмещается дельта (разница) между отпускными выплатами и суммой оклада на период указанного отпуска; 

    КОГДА? 	Выплата доплаты производится в заработную плату за вторую половину мая 2018 года.

    КАК ПРАВИЛЬНО ОФОРМИТЬ ОТПУСК: 

    СОЗДАТЬ ЗАЯВКУ. Не позднее, чем за 2 недели до начала отпуска создать заявку на портале Vacation and Business Trips Request tool  ПЕРЕДАТЬ ПИСЬМЕННОЕ ЗАЯВЛЕНИЕ. Не позднее чем за 5 рабочих дней до начала отпуска отправить скан заявления (форма заявления приходит
    на рабочую электронную почту вместе с одобрением руководителя) представителю Аксор на e-mail anna.yakovleva@accenture.com; ПОДПИСАТЬ ПРИКАЗ. Подписать присланные Вам приказы на отпуск и передать их в HR;

    ВНЕСТИ В TIME REPORT. До начала отпуска отразить даты отпуска в корпоративном Time Report строго в соответствиями с датами в заявлении. 
    В случае несоблюдения процедуры по оформлению отпуска существует следующий риск: Увеличение стоимости проекта (при аудите - отпускные дни из Time Reports, не подтвержденные письменным заявлением, переходят обратно на проектный WBS).
    Если у вас возникнут дополнительны вопросы по программе, пожалуйста, обращайтесь к HR 

    ЖЕЛАЕМ ВАМ ОТЛИЧНОГО ОТДЫХА!

    HUMAN RESOURCES TEAM    
    `},
    {type: EQuestionType.WORKPLACE, label: 'Как пользоваться бейджиками?', answer: 'Никак'},
    {type: EQuestionType.CAREERS, label: 'Зачем нужен Карьерный Наставник?', answer: 'Ответ на вопрос'},
    {type: EQuestionType.SEQRITY, label: 'Потеряли рабочий ноутбук?', answer: 'Ответ на вопрос'},
    {type: EQuestionType.SEQRITY, label: 'Взломали ваш Enterprise Id?', answer: 'Ответ на вопрос'},
    {type: EQuestionType.SEQRITY, label: 'Действия при пожаре', answer: 'Ответ на вопрос'},
]
