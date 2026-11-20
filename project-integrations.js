// Каталог для папки «Реализованные мной интеграции». Один узел на сервис, включая варианты подключения.
const independentCatalog = {
  categories: {
    "crm": "CRM и обзвон",
    "lead": "Партнёрские сети и API",
    "bank": "Финансовые сервисы",
    "msg": "Сообщения",
    "tel": "Телефония",
    "data": "Данные и автоматизация"
  },
  integrations: [
    { id: "patreon", cat: "pay", name: "Patreon", task: "Интеграция Patreon как способа оплаты." },
    // CRM и обзвон
    { id: "bitrix24", cat: "crm", name: "Битрикс24", icon: "integration-icons/bitrix24.png",
      task: "Передача лидов в CRM из очереди интеграций, с сопоставлением полей для разных проектов." },
    { id: "skorozvon", cat: "crm", name: "Скорозвон", icon: "integration-icons/skorozvon.png",
      task: "Передача контактов для обзвона, выбор проекта и назначение ответственного пользователя." },
    { id: "llcrm", cat: "crm", name: "LLCRM",
      task: "Выгрузка заявок в CRM из нескольких проектных команд через общий обработчик." },
    { id: "practice", cat: "crm", name: "PracticeCRM",
      task: "Передача заявок проекта KMA в партнёрскую CRM." },
    { id: "e2crm", cat: "crm", name: "E2CRM", icon: "integration-icons/e2crm.png",
      task: "Выгрузка заявок проекта «СтопКредит» в CRM." },
    // Партнёрские сети
    { id: "guru", cat: "lead", name: "GuruLeads", icon: "integration-icons/guru.png",
      task: "Отправка лидов и проверка контактов через партнёрский API." },
    { id: "leadgid", cat: "lead", name: "Leadgid", icon: "integration-icons/leadgid.png",
      task: "Передача заявок по настроенным учётным записям партнёрской сети." },
    { id: "leadssu", cat: "lead", name: "Leads.su", icon: "integration-icons/leadssu.png",
      task: "Выгрузка лидов в партнёрскую сеть." },
    { id: "unicom", cat: "lead", name: "Юником24", icon: "integration-icons/unicom.png",
      task: "Сопоставление городов и регионов, передача заявок и обновление статусов." },
    { id: "finmarket", cat: "lead", name: "Finmarket",
      task: "Передача заявок в Finmarket из консольных задач." },
    { id: "exbico", cat: "lead", name: "EXBICO", icon: "integration-icons/exbico.png",
      task: "Передача заявок, включая отдельный сценарий CreditLead." },
    { id: "creditcall", cat: "lead", name: "ONECTA", icon: "integration-icons/creditcall.png",
      task: "Отправка лидов через CreditCall для нескольких сценариев кампаний." },
    { id: "rafinad", cat: "lead", name: "Рафинад", icon: "integration-icons/rafinad.png",
      task: "Проверка контактов через API Рафинада из очереди проверок." },
    // Финансовые сервисы
    { id: "alfa", cat: "bank", name: "Альфа-Банк", icon: "integration-icons/alfa.png",
      task: "Пакетная проверка контактов и обработка результатов проверки." },
    { id: "sovcom", cat: "bank", name: "Совкомбанк", icon: "integration-icons/sovcom.png",
      task: "Отправка заявок и предварительная проверка контактов, включая сценарий «Халва»." },
    { id: "bistro", cat: "bank", name: "Быстроденьги", icon: "integration-icons/bistro.png",
      task: "Передача заявок из очереди во внешний сервис." },
    // Партнёрские API
    { id: "bankgra", cat: "lead", name: "Bankgra", icon: "integration-icons/bankgra.png",
      task: "Отправка заявки в CRM партнёра из консольной команды." },
    { id: "liga", cat: "lead", name: "Лига защиты",
      task: "Формирование партнёрской заявки с данными кампании и отправка в API." },
    { id: "sfera", cat: "lead", name: "Сфера",
      task: "Передача заявок и контактов на проверку, получение результатов через интерфейсы MFA1 и MFA2." },
    { id: "stopdolg", cat: "lead", name: "СтопДолг",
      task: "Обмен заявками с партнёром через обработчик очереди." },
    { id: "vitakon", cat: "lead", name: "Витакон", icon: "integration-icons/vitakon.png",
      task: "Выгрузка лидов в партнёрский сервис." },
    { id: "femida", cat: "lead", name: "Femida Search",
      task: "Запрос информации и запись обратной связи в таблицу." },
    // Сообщения
    { id: "p1sms", cat: "msg", name: "P1SMS", icon: "integration-icons/p1sms.png",
      task: "Отправка SMS по результатам обработки лида, включая сценарий Teleport." },
    { id: "papa", cat: "msg", name: "PapaMedia", icon: "integration-icons/papa.png",
      task: "Отправка SMS по заявкам, в том числе из сценария IVR." },
    { id: "telegram", cat: "msg", name: "Telegram", icon: "integration-icons/telegram.png",
      task: "Уведомления из сервиса журналов звонков через бота." },
    { id: "webcom", cat: "msg", name: "Webcom Mobi", icon: "integration-icons/webcom.png",
      task: "Отправка SMS через шлюз в сценарии Быстроденег." },
    // Телефония
    { id: "bdpn", cat: "tel", name: "БДПН",
      task: "Импорт изменений базы перенесённых номеров и обновление привязки к оператору." },
    { id: "kody", cat: "tel", name: "Коды.su", icon: "integration-icons/kody.png",
      task: "Загрузка справочной информации о телефонной нумерации." },
    // Данные и автоматизация
    { id: "sheets", cat: "data", name: "Google Таблицы", icon: "integration-icons/sheets.png",
      task: "Запись заявок в таблицы и обновление строк с результатами обработки." },
    { id: "albato", cat: "data", name: "Albato", icon: "integration-icons/albato.png",
      task: "Передача заявок в сценарии автоматизации через вебхуки." },
    { id: "vkcloud", cat: "data", name: "VK Cloud Storage", icon: "integration-icons/vkcloud.png",
      task: "Сохранение аудиозаписей в S3-совместимое хранилище и выдача временных ссылок." },
    { id: "ycloud", cat: "data", name: "Yandex Cloud Functions", icon: "integration-icons/ycloud.png",
      task: "Передача заявок NSDD в облачную функцию." },
    { id: "ldap", cat: "data", name: "LDAP",
      task: "Проверка учётных данных, получение пользователей и групп из каталога." },
    { id: "fias", cat: "data", name: "ФИАС", icon: "integration-icons/fias.png",
      task: "Загрузка адресных записей из справочника и привязка к регионам." },
  ]
};

// Реализации из модулей ReadyScript: платёжные и транспортные адаптеры,
// типы товарного экспорта, обмен CommerceML, уведомления и сервисы данных.
const readyScriptIntegrations = [
  { id: "asterisk", cat: "tel", name: "Asterisk", task: "Интеграция с телефонией Asterisk." },
  { id: "onec", cat: "data", name: "1С:Предприятие", icon: "integration-icons/onec.png",
    task: "Обмен каталогом, остатками и заказами в формате CommerceML." },
  { id: "dadata", cat: "data", name: "DaData", icon: "integration-icons/dadata.png",
    task: "Адресные подсказки и определение местоположения по IP." },
  { id: "ipgeobase", cat: "data", name: "IPGeoBase",
    task: "Получение города, страны и координат посетителя по IP." },
  { id: "cbr", cat: "data", name: "Банк России", icon: "integration-icons/cbr.png",
    task: "Загрузка официальных валютных курсов для пересчёта цен каталога." },
  { id: "yamaps", cat: "data", name: "Яндекс Карты",
    task: "Отображение интерактивной карты в конструкторе страниц." },
  { id: "speller", cat: "data", name: "Яндекс Спеллер",
    task: "Проверка орфографии поисковых запросов." },
  { id: "recaptcha", cat: "data", name: "Google reCAPTCHA",
    task: "Проверка ответа reCAPTCHA v3 при отправке формы." },
  { id: "avito", cat: "market", name: "Авито", icon: "integration-icons/avito.png",
    task: "Формирование объявлений из каталога для автозагрузки на Авито." },
  { id: "googlemerchant", cat: "market", name: "Google Merchant Center",
    task: "Подготовка товарного фида для Google Покупок." },
  { id: "mailgoods", cat: "market", name: "Товары@Mail.Ru", icon: "integration-icons/mailgoods.png",
    task: "Выгрузка предложений в формате товарного каталога площадки." },
  { id: "megamarket", cat: "market", name: "СберМегаМаркет", icon: "integration-icons/megamarket.png",
    task: "Экспорт ассортимента в формате площадки СберМегаМаркет." },
  { id: "yamarket", cat: "market", name: "Яндекс Маркет", icon: "integration-icons/yamarket.png",
    task: "Экспорт каталога и предложений магазина в YML." },
  { id: "youtube", cat: "media", name: "YouTube", icon: "integration-icons/youtube.png",
    task: "Встраивание видео по ссылке в карточку товара." },
  { id: "rutube", cat: "media", name: "RUTUBE", icon: "integration-icons/rutube.png",
    task: "Разбор ссылки на ролик для показа видео товара." },
  { id: "vkvideo", cat: "media", name: "VK Видео", icon: "integration-icons/vkvideo.png",
    task: "Встраивание видео из VK Видео в карточку товара." },
  { id: "smsuslugi", cat: "msg", name: "SMS-Услуги", icon: "integration-icons/smsuslugi.png",
    task: "Передача SMS-уведомлений через транспорт провайдера." },
  { id: "paypal", cat: "pay", name: "PayPal", icon: "integration-icons/paypal.png",
    task: "Приём оплаты интернет-магазина через PayPal." },
  { id: "robokassa", cat: "pay", name: "Robokassa", icon: "integration-icons/robokassa.png",
    task: "Выставление платежа и обработка уведомлений о результате оплаты." },
  { id: "yookassa", cat: "pay", name: "ЮKassa", icon: "integration-icons/yookassa.png",
    task: "Приём платежей по API и поддержка прежнего HTTP-протокола." },
  { id: "modulkassa", cat: "pay", name: "МодульКасса", icon: "integration-icons/modulkassa.png",
    task: "Платёжный и кассовый модули для оформления оплаты и чеков заказа." },
  { id: "atol", cat: "pay", name: "АТОЛ Онлайн", icon: "integration-icons/atol.png",
    task: "Отправка чеков на фискализацию с поддержкой версий протокола 3, 4 и 5." },
  { id: "cdek", cat: "ship", name: "СДЭК", icon: "integration-icons/cdek.png",
    task: "Расчёт доставки и работа с заказами перевозчика через две версии интеграции." },
  { id: "ruspost", cat: "ship", name: "Почта России", icon: "integration-icons/ruspost.png",
    task: "Расчёт тарифа почтовой доставки по параметрам отправления." },
  { id: "sheepla", cat: "ship", name: "Sheepla",
    task: "Подключение виджета выбора доставки в оформлении заказа." },
];

const byService = new Map(independentCatalog.integrations.map(item => [item.id, {
  ...item, contributions: { solo: item.task }
}]));
for (const item of readyScriptIntegrations) {
  const existing = byService.get(item.id);
  if (existing) existing.contributions.team = item.task;
  else byService.set(item.id, {...item, contributions: { team: item.task }});
}
const integrationRoles = {
  solo: { label: 'Создавал самостоятельно', color: '#60b5ff' },
  team: { label: 'Участвовал в разработке интеграций', color: '#ffa047' }
};
const projectCatalog = {
  categories: {...independentCatalog.categories, pay:'Платежи и кассы', ship:'Доставка', market:'Товарные площадки', media:'Видео'},
  integrations: [...byService.values()]
};
