export interface Abbreviation {
    abbr:        string;
    text:        string;
    translation: { [lang: string]: string };
    seeAlso?:    string[];
}

export const abbreviations: Abbreviation[] = [
    {
        abbr: 'aav',
        text: 'algemene administratievoorschriften',
        translation: {
            ru: 'Общие административные предписания',
            en: 'General administrative rules',
        },
    },
    {
        abbr: 'a/b',
        text: 'aan boord',
        translation: {
            ru: 'На борт(у) (корабля)',
            en: 'Board (a ship)',
        },
    },
    {
        abbr: 'ABC-eilanden',
        text: 'Aruba, Bonaire, Curaçao',
        translation: {
            ru: 'Нидерландские Карибские острова: Аруба, Бонэйр, Кюрасао',
            en: 'The Dutch Caribbean islands: Aruba, Bonaire, Curaçao',
        },
    },
    {
        abbr: 'ABN',
        text: 'Algemeen Beschaafd Nederlands',
        translation: {
            ru: 'Стандартный нидерландский язык',
            en: 'Standard Dutch',
        },
    },
    {
        abbr: 'AC&M',
        text: 'Autoriteit Consument en Markt',
        translation: {
            ru: 'Национальный надзорный орган по защите прав потребителей',
            en: 'Dutch National Market Authority',
        },
    },
    {
        abbr: 'AD',
        text: 'Algemeen Dagblad',
        translation: {
            ru: 'Голландская ежедневная газета «Algemeen Dagblad»',
            en: 'Dutch daily newspaper "Algemeen Dagblad"',
        },
    },
    {
        abbr: 'AD',
        text: 'Anno Domini',
        translation: {
            ru: 'Нашей эры',
            en: 'Anno Domini',
        },
    },
    {
        abbr: 'adh',
        text: 'aanbevolen dagelijkse hoeveelheid',
        translation: {
            ru: 'Рекомендуемая ежесуточная доза',
            en: 'Recommended daily dose/intake/allowance',
        },
    },
    {
        abbr: 'ADHD',
        text: 'Attention deficit hyperactivity disorder',
        translation: {
            ru: 'Синдром дефицита внимания и гиперактивности',
            en: 'Attention deficit hyperactivity disorder',
        },
    },
    {
        abbr: 'a.d.h.v.',
        text: 'aan de hand van',
        translation: {
            ru: 'На основании <i>того-то</i>',
            en: 'On the basis of/In the view of',
        },
    },
    {
        abbr: 'AED',
        text: 'automatische externe defibrillator',
        translation: {
            ru: 'Автоматический дефибриллятор',
            en: 'Automated external defibrillator',
        },
    },
    {
        abbr: 'AEX',
        text: 'Amsterdam Exchange Index',
        translation: {
            ru: 'Индекс Амстердамской фондовой биржи',
            en: 'Euronext Amsterdam index',
        },
    },
    {
        abbr: 'afb.',
        text: 'afbeelding',
        translation: {
            ru: 'Изображение',
            en: 'Illustration, figure',
        },
    },
    {
        abbr: 'afd.',
        text: 'afdeling',
        translation: {
            ru: 'Отдел, отделение',
            en: 'Department',
        },
    },
    {
        abbr: 'afk.',
        text: 'afkorting',
        translation: {
            ru: 'Сокращение',
            en: 'Abbreviation',
        },
    },
    {
        abbr: 'AFM',
        text: 'Autoriteit Financiële Markten',
        translation: {
            ru: 'Национальный надзорный орган за финансовыми рынками',
            en: 'Financial Markets Authority',
        },
    },
    {
        abbr: 'afz.',
        text: 'afzender',
        translation: {
            ru: 'Отправитель',
            en: 'Sender',
        },
    },
    {
        abbr: 'a.g.v.',
        text: 'als gevolg van',
        translation: {
            ru: 'Как следствие <i>того-то</i>',
            en: 'As a consequence of, owing to',
        },
    },
    {
        abbr: 'a.h.w.',
        text: 'als het ware',
        translation: {
            ru: 'Так сказать',
            en: 'As it were',
        },
    },
    {
        abbr: 'AI',
        text: 'Artificiële Intelligentie',
        translation: {
            ru: 'Искусственный интеллект',
            en: 'Artificial intelligence',
        },
    },
    {
        abbr: 'a.i.',
        text: 'ad interim',
        translation: {
            ru: 'Исполняющий обязанности (<i>лат.</i>)',
            en: 'Temporary (<i>Latin</i>)',
        },
    },
    {
        abbr: 'airco.',
        text: 'airconditioning',
        translation: {
            ru: 'Кондиционер воздуха',
            en: 'Air conditioning',
        },
    },
    {
        abbr: 'AIVD',
        text: 'Algemene Inlichtingen- en Veiligheidsdienst',
        translation: {
            ru: 'Служба разведки и безопасности',
            en: 'General Intelligence and Security Service',
        },
    },
    {
        abbr: 'alg.',
        text: 'algemeen',
        translation: {
            ru: 'Общий (в противоположность специализированному)',
            en: 'General, common',
        },
    },
    {
        abbr: 'ANP',
        text: 'Algemeen Nederlands Persbureau',
        translation: {
            ru: 'Нидерландское пресс-бюро',
            en: 'Dutch news agency',
        },
    },
    {
        abbr: 'anwb',
        text: 'Algemene Nederlandse Wielrijdersbond',
        translation: {
            ru: 'Нидерландская автомобильно-туристическая ассоциация',
            en: 'Royal Dutch Touring Club',
        },
    },
    {
        abbr: 'Ao',
        text: 'Anno',
        translation: {
            ru: 'В <i>таком-то</i> году (<i>лат.</i>)',
            en: 'In the year (<i>Latin</i>)',
        },
    },
    {
        abbr: 'aov',
        text: 'Arbeidsongeschiktheidsverzekering',
        translation: {
            ru: 'Страховка по нетрудоспособности',
            en: 'Disability insurance',
        },
    },
    {
        abbr: 'AOW',
        text: 'Algemene Ouderdomswet',
        translation: {
            ru: 'Общий закон о пенсиях по старости',
            en: 'General old age pensions act',
        },
    },
    {
        abbr: 'ap',
        text: 'Autoriteit persoonsgegevens',
        translation: {
            ru: 'Национальный орган по защите персональных данных',
            en: 'Dutch Data Protection Authority',
        },
    },
    {
        abbr: 'apk',
        text: 'algemene periodieke keuring',
        translation: {
            ru: 'Периодический техосмотр (транспортного средства)',
            en: 'MOT test, a periodic vehicle safety checkup',
        },
    },
    {
        abbr: 'apv',
        text: 'algemene plaatselijke verordening',
        translation: {
            ru: 'Общее местное законодательство',
            en: 'General local ordinance',
        },
    },
    {
        abbr: 'arbo.',
        text: 'arbeidsomstandigheden',
        translation: {
            ru: 'Условия труда',
            en: 'Working conditions',
        },
    },
    {
        abbr: 'art.',
        text: 'artikel',
        translation: {
            ru: 'Артикул, товар',
            en: 'Article, item',
        },
    },
    {
        abbr: 'a.s.',
        text: 'aanstaande',
        translation: {
            ru: 'Предстоящий, следующий (<i>о дате</i>)',
            en: 'Next (<i>about a date</i>)',
        },
    },
    {
        abbr: 'a.u.b.',
        text: 'alstublieft',
        translation: {
            ru: 'Пожалуйста',
            en: 'Please',
        },
    },
    {
        abbr: 'AVG',
        text: 'Algemene verordening gegevensbescherming',
        translation: {
            ru: 'Общий регламент по защите персональных данных',
            en: 'General Data Protection Regulation (GDPR)',
        },
    },
    {
        abbr: 'avrotros',
        text: 'Algemene vereniging radio-omroep/Televisie Radio Omroep Stichting',
        translation: {
            ru: 'Национальная телерадиокомпания',
            en: 'Dutch radio and television broadcaster',
        },
    },
    {
        abbr: 'azc',
        text: 'asielzoekerscentrum',
        translation: {
            ru: 'Центр приёма беженцев',
            en: 'Asylum seekers\' centre',
        },
    },
    {
        abbr: 'b.a.',
        text: 'bij afwezigheid',
        translation: {
            ru: 'При отсутствии',
            en: 'In the absence of',
        },
    },
    {
        abbr: 'BAG',
        text: 'Basisregistraties Adressen en Gebouwen',
        translation: {
            ru: 'Национальный реестр адресов и строений',
            en: 'Dutch address and building register',
        },
    },
    {
        abbr: 'BAM',
        text: 'Bataafsche AannemingsMaatschappij',
        translation: {
            ru: 'Нидерландская строительная корпорация',
            en: 'Dutch construction company',
        },
    },
    {
        abbr: 'bbp',
        text: 'bruto binnenlands product',
        translation: {
            ru: 'Валовой внутренний продукт',
            en: 'Gross domestic product, GDP',
        },
    },
    {
        abbr: 'b.d.',
        text: 'buiten dienst',
        translation: {
            ru: 'Не работает',
            en: 'Out of service',
        },
    },
    {
        abbr: 'B en W',
        text: 'Burgemeester en Wethouders',
        translation: {
            ru: 'Бургомистр и коллегия городского совета',
            en: 'Mayor and aldermen, municipal executive',
        },
    },
    {
        abbr: 'Benelux',
        text: 'België, Nederland, Luxemburg',
        translation: {
            ru: 'Бенилюкс (Бельгия, Нидерланды и Люксембург)',
            en: 'Benelux (Belgium, the Netherlands, and Luxembourg)',
        },
    },
    {
        abbr: 'betr.',
        text: 'betreft',
        translation: {
            ru: 'Касательно',
            en: 'Subject/concerning',
        },
    },
    {
        abbr: 'bez.vnw.',
        text: 'bezittelijk voornaamwoord',
        translation: {
            ru: 'Притяжательное местоимение',
            en: 'Possessive pronoun',
        },
    },
    {
        abbr: 'bga',
        text: 'beschermde geografische aanduiding',
        translation: {
            ru: 'Защищённое законом географическое наименование',
            en: 'Protected geographical indication',
        },
    },
    {
        abbr: 'b.g.g.',
        text: 'bij geen gehoor',
        translation: {
            ru: 'При отсутствии ответа',
            en: 'If there\'s no reply',
        },
    },
    {
        abbr: 'bh',
        text: 'bustehouder',
        translation: {
            ru: 'Бюстгальтер (.)(.)',
            en: 'Bra (.)(.)',
        },
    },
    {
        abbr: 'bhv',
        text: 'bedrijfshulpverlening',
        translation: {
            ru: 'Помощь при ЧП на предприятии',
            en: 'Industrial emergency services',
        },
    },
    {
        abbr: 'BI',
        text: 'Bureau Inlichtingen',
        translation: {
            ru: 'Разведывательное бюро',
            en: 'Intelligence bureau',
        },
    },
    {
        abbr: 'bibl.',
        text: 'bibliotheek',
        translation: {
            ru: 'Библиотека',
            en: 'library',
        },
    },
    {
        abbr: 'bijl.',
        text: 'bijlage',
        translation: {
            ru: 'Приложение (к чему-то)',
            en: 'Enclosure',
        },
    },
    {
        abbr: 'bijv.',
        text: 'bijvoorbeeld',
        translation: {
            ru: 'Например',
            en: 'For example',
        },
    },
    {
        abbr: 'bijz.',
        text: 'bijzonder',
        translation: {
            ru: 'Особенно',
            en: 'Particular(ly), special(ly)',
        },
    },
    {
        abbr: 'bila',
        text: 'bilateraal overleg',
        translation: {
            ru: 'Двустороннее совещание',
            en: 'Bilateral meeting',
        },
    },
    {
        abbr: 'BKR',
        text: 'Bureau Kredietregistratie',
        translation: {
            ru: 'Бюро регистрации кредитной истории',
            en: 'Credit registration bureau',
        },
    },
    {
        abbr: 'blz.',
        text: 'bladzijde',
        translation: {
            ru: 'Страница',
            en: 'Page',
        },
    },
    {
        abbr: 'BN',
        text: 'Bekende Nederlander',
        translation: {
            ru: 'Голландская знаменитость',
            en: 'Dutch celebrity',
        },
    },
    {
        abbr: 'BN',
        text: 'Belgisch Nederlands',
        translation: {
            ru: 'Бельгийский вариант нидерландского языка',
            en: 'Belgian Dutch variant',
        },
    },
    {
        abbr: 'bnp',
        text: 'bruto nationaal product',
        translation: {
            ru: 'Валовой национальный доход',
            en: 'Gross national income',
        },
    },
    {
        abbr: 'bnw.',
        text: 'bijvoeglijk naamwoord',
        translation: {
            ru: 'Прилагательное',
            en: 'Adjective',
        },
    },
    {
        abbr: 'boa',
        text: 'buitengewoon opsporingsambtenaar',
        translation: {
            ru: 'Следователь',
            en: 'Community Service Officer',
        },
    },
    {
        abbr: 'bom',
        text: 'bewust ongehuwde moeder',
        translation: {
            ru: 'Сознательно незамужняя мать',
            en: 'Consciously unwed mother',
        },
    },
    {
        abbr: 'BPM',
        text: 'Belasting van personenauto\'s en motorrijwielen',
        translation: {
            ru: 'Налог на транспортные средства',
            en: 'Car and motorcycle tax',
        },
    },
    {
        abbr: 'bps',
        text: 'beelden per seconde',
        translation: {
            ru: 'Кадров в секунду',
            en: 'Frames per second',
        },
    },
    {
        abbr: 'br.',
        text: 'broeder',
        translation: {
            ru: 'Брат',
            en: 'Brother',
        },
    },
    {
        abbr: 'BRP',
        text: 'Basisregistratie Personen',
        translation: {
            ru: 'Национальный реестр персональных данных',
            en: 'Dutch personal data register',
        },
    },
    {
        abbr: 'bsn',
        text: 'burgerservicenummer',
        translation: {
            ru: 'Идентификатор гражданина',
            en: 'Citizen\'s identifier',
        },
    },
    {
        abbr: 'bso',
        text: 'buitenschoolse opvang',
        translation: {
            ru: 'Продлёнка после школы',
            en: 'After-school care',
        },
    },
    {
        abbr: 'btw',
        text: 'belasting over de toegevoegde waarde',
        translation: {
            ru: 'Налог на добавленную стоимость',
            en: 'Value-added tax, VAT',
        },
    },
    {
        abbr: 'buma',
        text: 'bureau muziekauteursrechten',
        translation: {
            ru: 'Бюро по авторским правам на музыку',
            en: 'Music authors copyright bureau',
        },
    },
    {
        abbr: 'BuZa',
        text: 'Buitenlandse Zaken',
        translation: {
            ru: 'Министерство внешних дел',
            en: '(Ministry of) Foreign Affairs',
        },
    },
    {
        abbr: 'bv.',
        text: 'bijvoorbeeld',
        translation: {
            ru: 'Например',
            en: 'For example',
        },
    },
    {
        abbr: 'bv',
        text: 'besloten vennootschap',
        translation: {
            ru: 'Закрытое партнёрство',
            en: 'Private limited liability company',
        },
    },
    {
        abbr: 'b.v.d.',
        text: 'bij voorbaat dank',
        translation: {
            ru: 'Заранее благодарен(на)',
            en: 'Thank you in advance',
        },
    },
    {
        abbr: 'bw.',
        text: 'bijwoord',
        translation: {
            ru: 'Наречие',
            en: 'Adverb',
        },
    },
    {
        abbr: 'BW',
        text: 'Burgerlijk Wetboek',
        translation: {
            ru: 'Гражданский кодекс',
            en: 'Civil code',
        },
    },
    {
        abbr: 'B&W',
        text: 'Burgemeester & Wethouders',
        translation: {
            ru: 'Бургомистр и коллегия городского совета',
            en: 'Mayor and aldermen, municipal executive',
        },
    },
    {
        abbr: 'b.z.a.',
        text: 'biedt zich aan',
        translation: {
            ru: 'Предлагает услуги',
            en: 'Seeks work as',
        },
    },
    {
        abbr: 'C&A',
        text: 'Clemens & August',
        translation: {
            ru: 'Сеть магазинов C&A',
            en: 'Chain of retail clothing stores C&A',
        },
    },
    {
        abbr: 'ca.',
        text: 'circa',
        translation: {
            ru: 'Примерно (<i>лат.</i>)',
            en: 'Approximately (<i>Latin</i>)',
        },
    },
    {
        abbr: 'cado',
        text: 'calamiteitendoorsteek',
        translation: {
            ru: 'Открывающаяся секция «отбойника» на трассе для проезда аварийных служб',
            en: 'Foldable segment of a traffic barrier for emergency services',
        },
    },
    {
        abbr: 'cao',
        text: 'collectieve arbeidsovereenkomst',
        translation: {
            ru: '<a href="https://yktoo.com/ru/glossary/cao/">Коллективный трудовой договор</a>',
            en: 'Collective labour agreement',
        },
    },
    {
        abbr: 'cat.',
        text: 'catalogus',
        translation: {
            ru: 'Каталог',
            en: 'Catalogue',
        },
    },
    {
        abbr: 'CBR',
        text: 'Centraal Bureau Rijvaardigheidsbewijzen',
        translation: {
            ru: 'Центральное бюро регистрации ограничений к вождению',
            en: 'Central bureau for driving ability registration',
        },
    },
    {
        abbr: 'CBS',
        text: 'Centraal Bureau voor de Statistiek',
        translation: {
            ru: 'Центральное статистическое бюро',
            en: 'Statistics Netherlands',
        },
    },
    {
        abbr: 'cd',
        text: 'compact disc',
        translation: {
            ru: 'Компакт-диск',
            en: 'Compact disc',
        },
    },
    {
        abbr: 'cf.',
        text: 'confer',
        translation: {
            ru: 'Сравни (<i>лат.</i>)',
            en: 'Compare (<i>Latin</i>)',
        },
        seeAlso: [
            'cfr.',
            'vgl.',
        ],
    },
    {
        abbr: 'cf.',
        text: 'conform',
        translation: {
            ru: 'В соответствии с',
            en: 'In accordance with',
        },
    },
    {
        abbr: 'cfr.',
        text: 'confer',
        translation: {
            ru: 'Сравни (<i>лат.</i>)',
            en: 'Compare (<i>Latin</i>)',
        },
        seeAlso: [
            'cf.',
            'vgl.',
        ],
    },
    {
        abbr: 'c.i.',
        text: 'civiel-ingenieur',
        translation: {
            ru: 'Гражданский инженер',
            en: 'Civil engineer',
        },
    },
    {
        abbr: 'CITo',
        text: 'Centraal Instituut voor Toetsontwikkeling',
        translation: {
            ru: 'Центральный институт разработки экзаменов',
            en: 'Central exam authority',
        },
    },
    {
        abbr: 'CJIB',
        text: 'Centraal Justitieel Incassobureau',
        translation: {
            ru: 'Центральное бюро инкассации',
            en: 'Central Judicial Collection Agency',
        },
    },
    {
        abbr: 'CPB',
        text: 'Centraal Planbureau',
        translation: {
            ru: 'Бюро политико-экономического анализа',
            en: 'Bureau for Economic Policy Analysis',
        },
    },
    {
        abbr: 'c.q.',
        text: 'casu quo',
        translation: {
            ru: 'И/или (<i>лат.</i>)',
            en: 'And/or (<i>Latin</i>)',
        },
    },
    {
        abbr: 'CS',
        text: 'Centraal station',
        translation: {
            ru: 'Центральный вокзал',
            en: 'Central (railway) station',
        },
    },
    {
        abbr: 'CT',
        text: 'computertomografie',
        translation: {
            ru: 'Компьютерная томография',
            en: 'Computed tomography',
        },
    },
    {
        abbr: 'cv',
        text: 'commanditaire vennootschap',
        translation: {
            ru: 'Товарищество на вере, коммандитное товарищество',
            en: 'Limited partnership business entity',
        },
    },
    {
        abbr: 'cv',
        text: 'centrale verwarming',
        translation: {
            ru: 'Центральное отопление',
            en: 'Central heating',
        },
    },
    {
        abbr: 'cvba',
        text: 'coöperatieve vennootschap met beperkte aansprakelijkheid',
        translation: {
            ru: 'Кооперативное товарищество с ограниченной ответственностью',
            en: 'Cooperative company with limited liability',
        },
    },
    {
        abbr: 'cve',
        text: 'centrale verwerkingseenheid',
        translation: {
            ru: 'Мэйнфрейм',
            en: 'Mainframe',
        },
    },
    {
        abbr: 'CWI',
        text: 'Centrum voor Werk en Inkomen',
        translation: {
            ru: 'Центр по трудоустройству и доходам',
            en: 'Employment and Income Agency',
        },
    },
    {
        abbr: 'czs',
        text: 'centraal zenuwstelsel',
        translation: {
            ru: 'Центральная нервная система',
            en: 'Central nervous system',
        },
    },
    {
        abbr: 'D66',
        text: 'Democraten 66',
        translation: {
            ru: 'Демократы-66 (политическая партия)',
            en: 'Democrats 66 (political party)',
        },
    },
    {
        abbr: 'DBA',
        text: '(Wet) Deregulering Beoordeling Arbeidsrelatie',
        translation: {
            ru: 'Закон о прекращении регулирования оценки рабочих отношений, см. <a href="https://yktoo.com/ru/glossary/wet-dba/">Wet DBA</a>',
            en: 'Labour relationship assessment deregulation law',
        },
    },
    {
        abbr: 'd.d.',
        text: 'de dato',
        translation: {
            ru: 'Датируемый (<i>лат.</i>)',
            en: 'Dated (<i>Latin</i>)',
        },
    },
    {
        abbr: 'DG',
        text: 'directeur-generaal',
        translation: {
            ru: 'Генеральный директор',
            en: 'Director-general',
        },
    },
    {
        abbr: 'dhr.',
        text: 'de heer',
        translation: {
            ru: 'Господин',
            en: 'Mr',
        },
    },
    {
        abbr: 'd.i.',
        text: 'dit is',
        translation: {
            ru: 'То есть',
            en: 'That is',
        },
    },
    {
        abbr: 'dir.',
        text: 'directeur',
        translation: {
            ru: 'Директор',
            en: '(Managing) director',
        },
    },
    {
        abbr: 'd.m.v.',
        text: 'door middel van',
        translation: {
            ru: 'При помощи/посредством',
            en: 'By means of',
        },
    },
    {
        abbr: 'DNB',
        text: 'De Nederlandsche Bank',
        translation: {
            ru: 'Нидерландский центробанк',
            en: 'Central bank of the Netherlands',
        },
    },
    {
        abbr: 'DR',
        text: 'Drenthe',
        translation: {
            ru: 'Дренте (провинция)',
            en: 'Drenthe (province)',
        },
    },
    {
        abbr: 'dr.',
        text: 'doctor',
        translation: {
            ru: 'Доктор',
            en: 'Doctor, Ph.D.',
        },
    },
    {
        abbr: 'drs.',
        text: 'doctorandus',
        translation: {
            ru: 'Доктор наук (<i>лат.</i>)',
            en: 'Master of Arts (M.A.)/Master of Science (M.Sc.) (<i>Latin</i>)',
        },
    },
    {
        abbr: 'ds.',
        text: 'dominee',
        translation: {
            ru: 'Священник',
            en: 'Minister',
        },
    },
    {
        abbr: 'DSO',
        text: 'Digitaal Stelsel Omgevingswet',
        translation: {
            ru: 'Онлайн-сервисы для реализации Закона о жилой среде',
            en: 'Online ecosystem supporting the Living Environment Regulation',
        },
    },
    {
        abbr: 'DUO',
        text: 'Dienst Uitvoering Onderwijs',
        translation: {
            ru: 'Исполнительная служба образования',
            en: 'Dutch Education Agency',
        },
    },
    {
        abbr: 'DWDD',
        text: 'De wereld draait door',
        translation: {
            ru: 'De wereld draait door (голландская телепрограмма)',
            en: 'De wereld draait door (Dutch TV show)',
        },
    },
    {
        abbr: 'd.w.z.',
        text: 'dat wil zeggen',
        translation: {
            ru: 'Иными словами',
            en: 'That is/means',
        },
    },
    {
        abbr: 'e.a.',
        text: 'en andere(n)',
        translation: {
            ru: 'И другие',
            en: 'And other(s)',
        },
    },
    {
        abbr: 'e.c.',
        text: 'exempli causa',
        translation: {
            ru: 'Например (<i>лат.</i>)',
            en: 'For example (<i>Latin</i>)',
        },
    },
    {
        abbr: 'ecg',
        text: 'elektrocardiogram',
        translation: {
            ru: 'Электрокардиограмма',
            en: 'Electrocardiogram',
        },
    },
    {
        abbr: 'ed.',
        text: 'editie',
        translation: {
            ru: 'Издание',
            en: 'Edition',
        },
    },
    {
        abbr: 'e.d.',
        text: 'en dergelijke(n)',
        translation: {
            ru: 'И тому подобное',
            en: 'And the like',
        },
    },
    {
        abbr: 'e.e.a.',
        text: 'een en ander',
        translation: {
            ru: 'Тот или иной',
            en: 'This and that',
        },
    },
    {
        abbr: 'eeg',
        text: 'elektro-encefalogram',
        translation: {
            ru: 'Электроэнцефалограмма',
            en: 'Electroencephalogram',
        },
    },
    {
        abbr: 'EEG',
        text: 'Europese Economische Gemeenschap',
        translation: {
            ru: 'Европейское Экономическое Сообщество (ЕЭС)',
            en: 'European Economic Community (EEC)',
        },
    },
    {
        abbr: 'e.g.',
        text: 'exempli gratia',
        translation: {
            ru: 'Например (<i>лат.</i>)',
            en: 'For example (<i>Latin</i>)',
        },
    },
    {
        abbr: 'EG',
        text: 'Europese Gemeenschap',
        translation: {
            ru: 'Евросоюз',
            en: 'European Union (EU)',
        },
    },
    {
        abbr: 'EHBO',
        text: 'Eerste hulp bij ongelukken',
        translation: {
            ru: 'Первая помощь при происшествиях',
            en: 'First aid',
        },
    },
    {
        abbr: 'e.i.',
        text: 'elektrotechnisch ingenieur',
        translation: {
            ru: 'Инженер-электротехник',
            en: 'Electrical engineer',
        },
    },
    {
        abbr: 'EK',
        text: 'Europees kampioenschap',
        translation: {
            ru: 'Чемпионат Европы',
            en: 'European championship',
        },
    },
    {
        abbr: 'emg',
        text: 'elektromyogram',
        translation: {
            ru: 'Электромиограмма',
            en: 'Electromyogram',
        },
    },
    {
        abbr: 'enz.',
        text: 'enzovoort(s)',
        translation: {
            ru: 'И так далее',
            en: 'And so on, etc.',
        },
    },
    {
        abbr: 'e.o.',
        text: 'en omstreken',
        translation: {
            ru: 'И окрестности',
            en: 'And (its) environs',
        },
    },
    {
        abbr: 'EPD',
        text: 'Elektronisch patiëntendossier',
        translation: {
            ru: 'Электронное досье пациента',
            en: 'Electronic patient file',
        },
    },
    {
        abbr: 'et al.',
        text: 'et alii',
        translation: {
            ru: 'И другие (<i>лат.</i>)',
            en: 'And other(s) (<i>Latin</i>)',
        },
    },
    {
        abbr: 'etc.',
        text: 'et cetera',
        translation: {
            ru: 'И так далее (<i>лат.</i>)',
            en: 'And so on (<i>Latin</i>)',
        },
    },
    {
        abbr: 'e.v.',
        text: 'en volgende(n)',
        translation: {
            ru: 'И следующие',
            en: 'And the following',
        },
    },
    {
        abbr: 'e/v',
        text: 'echtgenoot/echtgenote van',
        translation: {
            ru: 'Супруг(а) <i>того-то</i>',
            en: 'Spouse of',
        },
    },
    {
        abbr: 'e.v.a.',
        text: 'en vele andere(n)',
        translation: {
            ru: 'И многие другие',
            en: 'And many other(s)',
        },
    },
    {
        abbr: 'evt.',
        text: 'eventueel',
        translation: {
            ru: 'Возможно/возможный',
            en: 'Possible/possibly',
        },
    },
    {
        abbr: 'excl.',
        text: 'exclusief',
        translation: {
            ru: 'Исключая',
            en: 'Excluding',
        },
        seeAlso: [
            'm.u.v.',
        ],
    },
    {
        abbr: 'exx.',
        text: 'exemplaren',
        translation: {
            ru: 'Экземпляры',
            en: 'Copies',
        },
    },
    {
        abbr: 'EZ',
        text: '(Ministerie van) Economische Zaken',
        translation: {
            ru: 'Министерство экономики',
            en: '(Ministry of) Economic Affairs',
        },
    },
    {
        abbr: 'fa.',
        text: 'firma',
        translation: {
            ru: 'Фирма',
            en: 'Firm',
        },
    },
    {
        abbr: 'fam.',
        text: 'familie',
        translation: {
            ru: 'Семья',
            en: 'Family',
        },
    },
    {
        abbr: 'FC',
        text: 'Football Club',
        translation: {
            ru: 'Футбольный клуб',
            en: 'Football Club',
        },
    },
    {
        abbr: 'fig.',
        text: 'figuur(lijk)',
        translation: {
            ru: 'Фигурально/фигуральный',
            en: 'Figurative',
        },
    },
    {
        abbr: 'FL',
        text: 'Flevoland',
        translation: {
            ru: 'Флеволанд (провинция)',
            en: 'Flevoland (province)',
        },
    },
    {
        abbr: 'fl.',
        text: 'florijn',
        translation: {
            ru: 'Флорин',
            en: 'Florin',
        },
    },
    {
        abbr: 'FR',
        text: 'Friesland',
        translation: {
            ru: 'Фрисландия (провинция)',
            en: 'Friesland (province)',
        },
    },
    {
        abbr: 'FVD',
        text: 'Forum voor Democratie',
        translation: {
            ru: 'Форум за демократию (партия)',
            en: 'Forum for Democracy (political party)',
        },
    },
    {
        abbr: 'GD',
        text: 'Gelderland',
        translation: {
            ru: 'Гелдерланд (провинция)',
            en: 'Gelderland, Guelders (province)',
        },
    },
    {
        abbr: 'GBA',
        text: 'Gemeentelijke Basis Administratie',
        translation: {
            ru: 'Муниципальный реестр персональных данных, ныне заменён на BRP',
            en: 'Municipal personal data register, now superseded by BRP',
        },
    },
    {
        abbr: 'geb.',
        text: 'geboren',
        translation: {
            ru: 'Родился(лась)',
            en: 'Born',
        },
    },
    {
        abbr: 'gebr.',
        text: 'gebroeders',
        translation: {
            ru: 'Братья',
            en: 'Brothers',
        },
    },
    {
        abbr: 'geh.',
        text: 'geheel',
        translation: {
            ru: 'В целом',
            en: 'Entire, whole',
        },
    },
    {
        abbr: 'geh.',
        text: 'gehuwd',
        translation: {
            ru: 'В браке',
            en: 'Married',
        },
    },
    {
        abbr: 'gem.',
        text: 'gemeente',
        translation: {
            ru: 'Муниципалитет (или его здание), <a href="https://yktoo.com/ru/glossary/gemeente/">«хемента»</a>',
            en: '<a href="https://yktoo.com/en/glossary/gemeente/">Municipality or town hall</a>',
        },
    },
    {
        abbr: 'gem.',
        text: 'gemiddeld',
        translation: {
            ru: 'В среднем',
            en: '(On) average',
        },
    },
    {
        abbr: 'get.',
        text: 'getekend',
        translation: {
            ru: 'Подписавшийся(шаяся), отмеченный(ая)',
            en: 'Marked',
        },
    },
    {
        abbr: 'get.',
        text: 'getuige',
        translation: {
            ru: 'Свидетель(ница)',
            en: 'Witness',
        },
    },
    {
        abbr: 'gez.',
        text: 'gezang',
        translation: {
            ru: 'Песня',
            en: 'Song',
        },
    },
    {
        abbr: 'gez.',
        text: 'gezusters',
        translation: {
            ru: 'Сёстры',
            en: 'Sisters',
        },
    },
    {
        abbr: 'gft',
        text: 'Groente-, fruit- en tuinafval',
        translation: {
            ru: '<a href="https://yktoo.com/ru/glossary/gft/">Био-отходы (овощные, фруктовые и садовые)</a>',
            en: '<a href="https://yktoo.com/en/glossary/gft/">Organic waste (vegetable, fruit and garden waste)</a>',
        },
    },
    {
        abbr: 'GGD',
        text: 'Gemeentelijke gezondheidsdienst',
        translation: {
            ru: 'Муниципальная служба здравоохранения',
            en: 'Local/Public Health Authority',
        },
    },
    {
        abbr: 'g.g.d.',
        text: 'grootste gemene deler',
        translation: {
            ru: 'Наибольший общий делитель',
            en: 'The greatest common divisor',
        },
    },
    {
        abbr: 'ggo',
        text: 'Genetisch Gemodificeerd Organisme',
        translation: {
            ru: 'Генетически модифицированный организм (ГМО)',
            en: 'Genetically modified organism (GMO)',
        },
    },
    {
        abbr: 'GGZ',
        text: 'Geestelijke gezondheidszorg',
        translation: {
            ru: 'Охрана психического здоровья',
            en: 'Mental health care',
        },
    },
    {
        abbr: 'gld.',
        text: 'gulden',
        translation: {
            ru: 'Гульден (нидерландская валюта до евро)',
            en: 'Guilder (Dutch currency before euro)',
        },
    },
    {
        abbr: 'glw',
        text: 'gas, licht en water',
        translation: {
            ru: 'Газ, свет (электричество) и вода',
            en: 'Gas, light, and water',
        },
    },
    {
        abbr: 'GR',
        text: 'Groningen',
        translation: {
            ru: 'Гронинген (провинция)',
            en: 'Groningen (province)',
        },
    },
    {
        abbr: 'GS',
        text: 'Gedeputeerde Staten',
        translation: {
            ru: 'Провинциальная исполнительная власть',
            en: 'Provincial Executive',
        },
    },
    {
        abbr: 'GTST',
        text: 'Goede tijden, slechte tijden',
        translation: {
            ru: '«Хорошие времена, плохие времена» (голландский телесериал)',
            en: '"Good times, bad times" (Dutch TV series)',
        },
    },
    {
        abbr: 'gym',
        text: 'gymnasium',
        translation: {
            ru: 'Гимназия',
            en: 'Gymnasium, grammar school',
        },
    },
    {
        abbr: 'H.',
        text: 'Heilige',
        translation: {
            ru: 'Святой',
            en: 'Saint',
        },
    },
    {
        abbr: 'havo',
        text: 'hoger algemeen voortgezet onderwijs',
        translation: {
            ru: 'Продолженное общее высшее образование',
            en: 'Higher general continued education',
        },
    },
    {
        abbr: 'hbo',
        text: 'hoger beroepsonderwijs',
        translation: {
            ru: 'Высшее профессиональное образование',
            en: 'Higher professional education',
        },
    },
    {
        abbr: 'heao',
        text: 'hoger economisch en administratief onderwijs',
        translation: {
            ru: 'Высшее административно-экономическое образование',
            en: 'Higher economical and administrative education',
        },
    },
    {
        abbr: 'HEMA',
        text: 'Hollandsche Eenheidsprijzen Maatschappij Amsterdam',
        translation: {
            ru: '«Голландское Амстердамское общество единых цен» (сеть магазинов «HEMA»)',
            en: '"Hollandic Standard Prices Company Amsterdam" (the "HEMA" store chain)',
        },
    },
    {
        abbr: 'hfl',
        text: 'Hollandse florijn (gulden)',
        translation: {
            ru: 'Гульден (нидерландская валюта до евро)',
            en: 'Dutch florin (Dutch currency before euro)',
        },
    },
    {
        abbr: 'H.K.H.',
        text: 'Hare Koninklijke Hoogheid',
        translation: {
            ru: 'Её Королевское Высочество',
            en: 'Her Royal Highness',
        },
    },
    {
        abbr: 'H.M.',
        text: 'Hare Majesteit',
        translation: {
            ru: 'Её Величество',
            en: 'Her Majesty',
        },
    },
    {
        abbr: 'horeca',
        text: 'hotel, restaurant, café',
        translation: {
            ru: 'Хорека (отельно-ресторанный бизнес)',
            en: 'Hotel, restaurant, and café; hotel and catering industry',
        },
    },
    {
        abbr: 'Hr.',
        text: 'Heer',
        translation: {
            ru: 'Господин',
            en: 'Mr',
        },
    },
    {
        abbr: 'H.R.',
        text: 'Hoge Raad',
        translation: {
            ru: 'Верховный суд Нидерландов',
            en: 'Dutch Supreme Court',
        },
    },
    {
        abbr: 'HS',
        text: 'Hollands Spoor',
        translation: {
            ru: '«Голландская железная дорога» (станция в Гааге)',
            en: '"Holland railway" (station in the Hague)',
        },
    },
    {
        abbr: 'hsl',
        text: 'hogesnelheidslijn',
        translation: {
            ru: 'Скоростная железная дорога',
            en: 'High-speed rail link',
        },
    },
    {
        abbr: 'hst',
        text: 'hogesnelheidstrein',
        translation: {
            ru: 'Скоростной поезд',
            en: 'High-speed train',
        },
    },
    {
        abbr: 'hts',
        text: 'hogere technische school',
        translation: {
            ru: 'Высшая техническая школа',
            en: 'College/university of technology',
        },
    },
    {
        abbr: 'i.a.v.',
        text: 'in aanwezigheid van',
        translation: {
            ru: 'В присутствии <i>того-то</i>',
            en: 'In the presence of',
        },
    },
    {
        abbr: 'i.a.v.',
        text: 'in afwachting van',
        translation: {
            ru: 'В ожидании <i>того-то</i>',
            en: 'In expectation/anticipation of',
        },
    },
    {
        abbr: 'IB',
        text: 'Inkomstenbelasting',
        translation: {
            ru: 'Подоходный налог',
            en: 'Income tax',
        },
    },
    {
        abbr: 'i.b.d.',
        text: 'in buitengewone dienst',
        translation: {
            ru: 'На особой службе',
            en: 'In extraordinary service',
        },
    },
    {
        abbr: 'i.b.v.',
        text: 'in bezit van',
        translation: {
            ru: 'Владеющий <i>тем-то</i>',
            en: 'In possession of',
        },
    },
    {
        abbr: 'IC',
        text: 'Intercity',
        translation: {
            ru: 'Интерсити (скоростной поезд)',
            en: 'Intercity (train)',
        },
    },
    {
        abbr: 'i.c.',
        text: 'in casu',
        translation: {
            ru: 'В данном случае (<i>лат.</i>)',
            en: 'In this case (<i>Latin</i>)',
        },
    },
    {
        abbr: 'ICE',
        text: 'Intercity Express',
        translation: {
            ru: 'Интерсити-экспресс (скоростной поезд)',
            en: 'Intercity Express (high-speed train)',
        },
    },
    {
        abbr: 'i.c.m.',
        text: 'in combinatie met',
        translation: {
            ru: 'В сочетании с',
            en: 'In combination with',
        },
    },
    {
        abbr: 'ICT',
        text: 'Informatie- en Communicatietechnologie',
        translation: {
            ru: 'ИТ (<i>букв.</i> «информационные и коммуникационные технологии»)',
            en: 'IT (information and communication technology)',
        },
    },
    {
        abbr: 'id.',
        text: 'idem',
        translation: {
            ru: 'То же самое (<i>лат.</i>)',
            en: 'Same (here) (<i>Latin</i>)',
        },
    },
    {
        abbr: 'ID-bewijs',
        text: 'identiteitsbewijs',
        translation: {
            ru: 'Удостоверение личности',
            en: 'Identity',
        },
    },
    {
        abbr: 'idd',
        text: 'inderdaad',
        translation: {
            ru: 'Действительно',
            en: 'Indeed',
        },
    },
    {
        abbr: 'i.e.',
        text: 'id est',
        translation: {
            ru: 'То есть (<i>лат.</i>)',
            en: 'That is (<i>Latin</i>)',
        },
    },
    {
        abbr: 'i.g.st.',
        text: 'in goede staat',
        translation: {
            ru: 'В хорошем состоянии',
            en: 'In good condition',
        },
    },
    {
        abbr: 'i.g.v.',
        text: 'in geval van',
        translation: {
            ru: 'В случае <i>того-то</i>',
            en: 'In case of',
        },
    },
    {
        abbr: 'i.h.a.',
        text: 'in het algemeen',
        translation: {
            ru: 'В целом',
            en: 'In general',
        },
    },
    {
        abbr: 'i.h.b.',
        text: 'in het bijzonder',
        translation: {
            ru: 'В особенности',
            en: 'In particular, especially',
        },
    },
    {
        abbr: 'i.h.k.v.',
        text: 'in het kader van',
        translation: {
            ru: 'В рамках <i>того-то</i>',
            en: 'Within the scope of, as part of',
        },
    },
    {
        abbr: 'i.h.t.v.',
        text: 'in het teken van',
        translation: {
            ru: 'Знаменующийся <i>тем-то</i>',
            en: 'Characterised by',
        },
    },
    {
        abbr: 'i.i.g.',
        text: 'in ieder geval',
        translation: {
            ru: 'В любом случае',
            en: 'In any case',
        },
    },
    {
        abbr: 'IND',
        text: 'Immigratie- en Naturalisatiedienst',
        translation: {
            ru: 'Иммиграционно-натурализационная служба',
            en: 'Immigration and Naturalisation service',
        },
    },
    {
        abbr: 'incl.',
        text: 'inclusief',
        translation: {
            ru: 'Включая',
            en: 'Including',
        },
    },
    {
        abbr: 'info',
        text: 'informatie',
        translation: {
            ru: 'Информация',
            en: 'Information',
        },
    },
    {
        abbr: 'ing.',
        text: 'ingenieur',
        translation: {
            ru: 'Инженер',
            en: 'Engineer',
        },
    },
    {
        abbr: 'intern.',
        text: 'internationaal',
        translation: {
            ru: 'Международный',
            en: 'International',
        },
    },
    {
        abbr: 'i.o.m.',
        text: 'in overeenstemming met',
        translation: {
            ru: 'В соответствии с',
            en: 'In accordance with',
        },
    },
    {
        abbr: 'i.o.m.',
        text: 'in overleg met',
        translation: {
            ru: 'В обсуждении с',
            en: 'In agreement with',
        },
    },
    {
        abbr: 'i.o.v.',
        text: 'in opdracht van',
        translation: {
            ru: 'По поручению <i>того-то</i>',
            en: 'By <i>someone\'s</i> order',
        },
    },
    {
        abbr: 'i.p.v.',
        text: 'in plaats van',
        translation: {
            ru: 'Вместо <i>того-то</i>',
            en: 'Instead of',
        },
    },
    {
        abbr: 'ir.',
        text: 'ingenieur',
        translation: {
            ru: 'Инженер',
            en: 'Engineer',
        },
    },
    {
        abbr: 'i.r.t.',
        text: 'in relatie tot',
        translation: {
            ru: 'В отношении <i>того-то</i>',
            en: 'In relation to',
        },
    },
    {
        abbr: 'i.s.m.',
        text: 'in samenwerking met',
        translation: {
            ru: 'В сотрудничестве с',
            en: 'In cooperation with',
        },
    },
    {
        abbr: 'i.t.t.',
        text: 'in tegenstelling tot',
        translation: {
            ru: 'В противоположность <i>тому-то</i>',
            en: 'In contrast to',
        },
    },
    {
        abbr: 'ivf',
        text: 'In-vitrofertilisatie',
        translation: {
            ru: 'Экстракорпоральное оплодотворение (ЭКО)',
            en: 'In vitro fertilization',
        },
    },
    {
        abbr: 'i.v.m.',
        text: 'in verband met',
        translation: {
            ru: 'В связи с',
            en: 'In connection with',
        },
    },
    {
        abbr: 'i.z.g.st.',
        text: 'in zeer goede staat',
        translation: {
            ru: 'В очень хорошем состоянии',
            en: 'In very good condition',
        },
    },
    {
        abbr: 'j.',
        text: 'jaar',
        translation: {
            ru: 'Год',
            en: 'Year',
        },
    },
    {
        abbr: 'jhr.',
        text: 'Jonkheer',
        translation: {
            ru: 'Эсквайр',
            en: 'Esquire',
        },
    },
    {
        abbr: 'jkvr.',
        text: 'jonkvrouw',
        translation: {
            ru: 'Леди',
            en: 'Lady',
        },
    },
    {
        abbr: 'jl.',
        text: 'jongstleden',
        translation: {
            ru: 'Прошлый (о дате)',
            en: 'Last (about date)',
        },
    },
    {
        abbr: 'jr.',
        text: 'junior',
        translation: {
            ru: 'Младший',
            en: 'Junior',
        },
    },
    {
        abbr: 'K.B.',
        text: 'Koninklijk Besluit',
        translation: {
            ru: 'Королевское постановление',
            en: 'Royal Decree',
        },
    },
    {
        abbr: 'kca',
        text: 'klein chemisch afval',
        translation: {
            ru: 'Мелкий химический мусор',
            en: 'Household hazardous waste',
        },
    },
    {
        abbr: 'kdt',
        text: 'keuken, douche en toilet',
        translation: {
            ru: 'Кухня, душ и туалет',
            en: 'Kitchen, shower, and toilet',
        },
    },
    {
        abbr: 'k.g.v.',
        text: 'kleinste gemene veelvoud',
        translation: {
            ru: 'Наименьшее общее кратное',
            en: 'Lowest common multiple',
        },
    },
    {
        abbr: 'KI',
        text: 'Kunstmatige inseminatie',
        translation: {
            ru: 'Искусственное осеменение',
            en: 'Artificial insemination',
        },
    },
    {
        abbr: 'Kifid',
        text: 'Klachteninstituut Financiële Dienstverlening',
        translation: {
            ru: 'Финансовый арбитражный суд',
            en: 'Financial Services Complaints Tribunal',
        },
    },
    {
        abbr: 'k.k.',
        text: 'kosten koper',
        translation: {
            ru: 'Расходы оплачивает покупатель',
            en: 'Expenses to be paid for by the buyer',
        },
    },
    {
        abbr: 'KL',
        text: 'Koninklijke Landmacht',
        translation: {
            ru: 'Королевская пехота',
            en: 'Royal Netherlands Army',
        },
    },
    {
        abbr: 'Kliko',
        text: 'Klinkenberg en Koster',
        translation: {
            ru: '«Кли́ко» (народное название контейнеров для мусора)',
            en: '"Kliko" (common name of household waste container)',
        },
    },
    {
        abbr: 'KLM',
        text: 'Koninklijke Luchtvaart Maatschappij',
        translation: {
            ru: 'Королевское воздухоплавательное общество (авиакомпания)',
            en: 'Royal Dutch Airlines (KLM)',
        },
    },
    {
        abbr: 'KLPD',
        text: 'Korps landelijke politiediensten',
        translation: {
            ru: 'Корпус национальной полиции',
            en: 'National Police Services Agency',
        },
    },
    {
        abbr: 'KLu',
        text: 'Koninklijke Luchtmacht',
        translation: {
            ru: 'Королевские военно-воздушные силы',
            en: 'Royal air force',
        },
    },
    {
        abbr: 'KM',
        text: 'Koninklijke Marine',
        translation: {
            ru: 'Королевские военно-морские силы',
            en: 'Royal navy',
        },
    },
    {
        abbr: 'KMAR',
        text: 'Koninklijke Marechaussee',
        translation: {
            ru: 'Королевская военная полиция',
            en: 'Royal military police',
        },
    },
    {
        abbr: 'KNMI',
        text: 'Koninklijk Nederlands Meteorologisch Instituut',
        translation: {
            ru: 'Королевский метеорологический институт',
            en: 'Royal Netherlands Meteorological Institute',
        },
    },
    {
        abbr: 'kno',
        text: 'Keel-, neus- en oor-(heelkunde)',
        translation: {
            ru: 'Ухо-горло-нос («ЛОР»)',
            en: 'Ear, nose, throat (E.N.T.)',
        },
    },
    {
        abbr: 'Kon.',
        text: 'Koninklijk',
        translation: {
            ru: 'Королевский (префикс)',
            en: 'Royal',
        },
    },
    {
        abbr: 'KP',
        text: 'Kanaalpeil',
        translation: {
            ru: 'Уровень воды в канале',
            en: 'Canal depth',
        },
    },
    {
        abbr: 'KPN',
        text: 'Koninklijke PTT Nederland',
        translation: {
            ru: 'Королевская почтово-телеграфная компания (телеком-провайдер)',
            en: 'Dutch landline and mobile telecommunications company',
        },
    },
    {
        abbr: 'K.v.K.',
        text: 'Kamer van Koophandel',
        translation: {
            ru: 'Торговая палата',
            en: 'Chamber of Commerce',
        },
    },
    {
        abbr: 'l.a.',
        text: 'linksaf',
        translation: {
            ru: 'Налево',
            en: '(To the) left',
        },
    },
    {
        abbr: 'lab',
        text: 'laboratorium',
        translation: {
            ru: 'Лаборатория',
            en: ' Laboratory',
        },
    },
    {
        abbr: 'lavo',
        text: 'lager algemeen voortgezet onderwijs',
        translation: {
            ru: 'Низшее общее продолженное образование',
            en: 'Lower general continued education',
        },
    },
    {
        abbr: 'LB',
        text: 'Limburg',
        translation: {
            ru: 'Лимбург (провинция)',
            en: 'Limburg (province)',
        },
    },
    {
        abbr: 'lbo',
        text: 'lager beroepsonderwijs',
        translation: {
            ru: 'Низшее профессиональное образование',
            en: 'Lower professional education',
        },
    },
    {
        abbr: 'leao',
        text: 'lager economisch en administratief onderwijs',
        translation: {
            ru: 'Низшее административно-экономическое образование',
            en: 'Lower economical and administrative education',
        },
    },
    {
        abbr: 'lez',
        text: 'Lage emissiezone',
        translation: {
            ru: 'Экологическая зона',
            en: 'Low-emission zone',
        },
    },
    {
        abbr: 'l.g.',
        text: 'laatstgenoemde',
        translation: {
            ru: 'Упомянутый последним',
            en: 'Last mentioned',
        },
    },
    {
        abbr: 'l.i.',
        text: 'landbouwkundig ingenieur',
        translation: {
            ru: 'Сельскохозяйственный инженер',
            en: 'Agricultural engineer',
        },
    },
    {
        abbr: 'LIO',
        text: 'Leraar in opleiding',
        translation: {
            ru: 'Учитель-стажёр',
            en: 'Teacher in practice',
        },
    },
    {
        abbr: 'll.',
        text: 'laatstleden',
        translation: {
            ru: 'Прошлый (о дате)',
            en: 'Last (about date)',
        },
    },
    {
        abbr: 'LO',
        text: 'lager onderwijs',
        translation: {
            ru: 'Низшее образование',
            en: 'Lower education',
        },
    },
    {
        abbr: 'LO',
        text: 'lichamelijke opvoeding',
        translation: {
            ru: 'Физподготовка',
            en: 'Physical education',
        },
    },
    {
        abbr: 'LOM',
        text: 'Kinderen met leer- en opvoedingsmoeilijkheden',
        translation: {
            ru: 'Дети с трудностями в обучении или воспитании',
            en: 'Children with learning difficulties',
        },
    },
    {
        abbr: 'lsd',
        text: 'lysergeenzuurdi-ethylamide',
        translation: {
            ru: 'ЛСД (наркотик)',
            en: 'LSD (drug)',
        },
    },
    {
        abbr: 'lt.',
        text: 'Luitenant',
        translation: {
            ru: 'Лейтенант',
            en: 'Lieutenant',
        },
    },
    {
        abbr: 'lts',
        text: 'lagere technische school',
        translation: {
            ru: 'Низшая техническая школа',
            en: 'Basic technical school',
        },
    },
    {
        abbr: 'm.',
        text: 'mannelijk',
        translation: {
            ru: 'Мужской род',
            en: 'Male/masculine',
        },
    },
    {
        abbr: 'm.',
        text: 'meneer / mijnheer',
        translation: {
            ru: 'Господин',
            en: 'Gentleman/mister',
        },
    },
    {
        abbr: 'mavo',
        text: 'middelbaar algemeen voortgezet onderwijs',
        translation: {
            ru: 'Среднее общее продолженное образование',
            en: 'Secondary general continued education',
        },
    },
    {
        abbr: 'm.a.w.',
        text: 'met andere woorden',
        translation: {
            ru: 'Другими словами',
            en: 'In other words',
        },
    },
    {
        abbr: 'max.',
        text: 'maximum/maximaal',
        translation: {
            ru: 'Максимум/максимальный',
            en: 'Maximum/maximal',
        },
    },
    {
        abbr: 'MBA',
        text: 'Moderne Bedrijfsadministratie',
        translation: {
            ru: 'Современное бизнес-администрирование',
            en: 'Modern business administration',
        },
    },
    {
        abbr: 'mbo',
        text: 'middelbaar beroepsonderwijs',
        translation: {
            ru: 'Среднее профессиональное образование',
            en: 'Secondary professional education',
        },
    },
    {
        abbr: 'm.b.t.',
        text: 'met betrekking tot',
        translation: {
            ru: 'В отношении <i>того-то</i>',
            en: 'With regard to',
        },
    },
    {
        abbr: 'm.b.v.',
        text: 'met behulp van',
        translation: {
            ru: 'При помощи <i>того-то</i>',
            en: 'With the help of',
        },
    },
    {
        abbr: 'ME',
        text: 'Mobiele Eenheid',
        translation: {
            ru: 'Мобильное спецподразделение полиции',
            en: 'Special duty police',
        },
    },
    {
        abbr: 'ME',
        text: 'Middeleeuwen',
        translation: {
            ru: 'Средние века',
            en: 'Middle Ages',
        },
    },
    {
        abbr: 'meao',
        text: 'middelbaar economisch en administratief onderwijs',
        translation: {
            ru: 'Среднее административно-экономическое образование',
            en: 'Secondary economical and administrative education',
        },
    },
    {
        abbr: 'mej.',
        text: 'mejuffrouw',
        translation: {
            ru: 'Мисс',
            en: 'Miss',
        },
    },
    {
        abbr: 'mevr.',
        text: 'mevrouw',
        translation: {
            ru: 'Госпожа',
            en: 'Madam/Mrs',
        },
    },
    {
        abbr: 'm.h.g.',
        text: 'met hartelijke groeten',
        translation: {
            ru: 'С наилучшими пожеланиями',
            en: 'With kind regards',
        },
    },
    {
        abbr: 'm.i.',
        text: 'mijns inziens',
        translation: {
            ru: 'По моему мнению',
            en: 'In my opinion',
        },
    },
    {
        abbr: 'mi.',
        text: 'middag',
        translation: {
            ru: 'Полдень',
            en: '(After)noon',
        },
    },
    {
        abbr: 'Mij',
        text: 'maatschappij',
        translation: {
            ru: 'Общество (организация)',
            en: 'Society',
        },
    },
    {
        abbr: 'min.',
        text: 'minimum/minimaal',
        translation: {
            ru: 'Минимум/минимальный',
            en: 'Minimum/minimal',
        },
    },
    {
        abbr: 'min.',
        text: 'minister',
        translation: {
            ru: 'Министр',
            en: 'Minister',
        },
    },
    {
        abbr: 'min.',
        text: 'minuut',
        translation: {
            ru: 'Минута',
            en: 'Minute',
        },
    },
    {
        abbr: 'm.i.v.',
        text: 'met ingang van',
        translation: {
            ru: 'Начиная с (даты)',
            en: 'As of',
        },
    },
    {
        abbr: 'm.i.v.',
        text: 'met inbegrip van',
        translation: {
            ru: 'Включая',
            en: 'Including',
        },
    },
    {
        abbr: 'mkb',
        text: 'Midden- en kleinbedrijf',
        translation: {
            ru: 'Средний и малый бизнес',
            en: 'Small and medium-sized businesses',
        },
    },
    {
        abbr: 'mld.',
        text: 'miljard',
        translation: {
            ru: 'Миллиард',
            en: 'Billion',
        },
    },
    {
        abbr: 'mln.',
        text: 'miljoen',
        translation: {
            ru: 'Миллион',
            en: 'Million',
        },
    },
    {
        abbr: 'MMT',
        text: 'Mobiel Medisch Team',
        translation: {
            ru: 'Мобильная медбригада',
            en: 'Air medical services',
        },
    },
    {
        abbr: 'm.m.v.',
        text: 'met medewerking van',
        translation: {
            ru: 'При сотрудничестве с',
            en: 'With the cooperation of',
        },
    },
    {
        abbr: 'm.n.',
        text: 'met name',
        translation: {
            ru: 'Особенно',
            en: 'Especially, particularly',
        },
    },
    {
        abbr: 'mngt',
        text: 'Management',
        translation: {
            ru: 'Менеджмент',
            en: 'Management',
        },
    },
    {
        abbr: 'MP',
        text: 'Militaire politie',
        translation: {
            ru: 'Военная полиция',
            en: 'Military police',
        },
    },
    {
        abbr: 'mr.',
        text: 'meester',
        translation: {
            ru: 'Мастер, магистр',
            en: 'Master',
        },
    },
    {
        abbr: 'ms',
        text: 'motorschip',
        translation: {
            ru: 'Моторная лодка',
            en: 'Motor vessel',
        },
    },
    {
        abbr: 'MSc',
        text: 'Magister Scientiae',
        translation: {
            ru: 'Магистр наук',
            en: 'Master of Sciences',
        },
    },
    {
        abbr: 'mts',
        text: 'maatschap',
        translation: {
            ru: 'Партнёрство',
            en: 'Partnership',
        },
    },
    {
        abbr: 'mts',
        text: 'middelbare technische school',
        translation: {
            ru: 'Средняя техническая школа',
            en: 'Secondary technical school',
        },
    },
    {
        abbr: 'm.u.v.',
        text: 'met uitzondering van',
        translation: {
            ru: 'За исключением <i>того-то</i>',
            en: 'With the exception of',
        },
        seeAlso: [
            'excl.',
        ],
    },

    {
        abbr: 'mv.',
        text: 'meervoud',
        translation: {
            ru: 'Множественное число',
            en: 'Plural',
        },
    },
    {
        abbr: 'm.v.g.',
        text: 'met vriendelijke groet',
        translation: {
            ru: 'С дружескими пожеланиями',
            en: 'With kind regards',
        },
    },
    {
        abbr: 'mw.',
        text: 'mevrouw',
        translation: {
            ru: 'Госпожа',
            en: 'Madam/Mrs',
        },
    },
    {
        abbr: 'N',
        text: 'noorden',
        translation: {
            ru: 'Север',
            en: 'North',
        },
    },
    {
        abbr: 'NA',
        text: 'Nationaal Archief',
        translation: {
            ru: 'Национальный архив',
            en: 'National Archive',
        },
    },
    {
        abbr: 'nabo',
        text: 'niet actief beveiligde overweg',
        translation: {
            ru: 'Железнодорожный переезд без шлагбаума',
            en: 'Level crossing without barrier',
        },
    },
    {
        abbr: 'NAP',
        text: 'Normaal Amsterdams Peil',
        translation: {
            ru: 'Нормальный амстердамский уровень (воды)',
            en: 'Amsterdam Ordnance Datum',
        },
    },
    {
        abbr: 'n.a.v.',
        text: 'naar aanleiding van',
        translation: {
            ru: 'Как результат <i>того-то</i>',
            en: 'As a result of',
        },
    },
    {
        abbr: 'NAVO',
        text: 'Noord-Atlantische Verdragsorganisatie',
        translation: {
            ru: 'Организация Североатлантического договора (НАТО)',
            en: 'North Atlantic Treaty Organization (NATO)',
        },
    },
    {
        abbr: 'NAW',
        text: 'Naam, Adres en Woonplaats',
        translation: {
            ru: 'Имя, адрес, место жительства (данные)',
            en: 'Name, address, and residence',
        },
    },
    {
        abbr: 'NB',
        text: 'Noord-Brabant',
        translation: {
            ru: 'Северный Брабант (провинция)',
            en: 'North Brabant (province)',
        },
    },
    {
        abbr: 'N.B.',
        text: 'Nota bene',
        translation: {
            ru: 'Обрати внимание (<i>лат.</i>)',
            en: 'Please note (<i>Latin</i>)',
        },
    },
    {
        abbr: 'N.Br.',
        text: 'noorderbreedte',
        translation: {
            ru: 'Северной широты',
            en: 'North latitude',
        },
    },
    {
        abbr: 'n.C.',
        text: 'na Christus',
        translation: {
            ru: 'После (рождения) Христа, нашей эры',
            en: 'After Christ (A.D.)',
        },
    },
    {
        abbr: 'NCV',
        text: 'Noodcommunicatievoorziening',
        translation: {
            ru: 'Сеть аварийной связи',
            en: 'Emergency communication network',
        },
    },
    {
        abbr: 'Ndl.',
        text: 'Nederlands',
        translation: {
            ru: 'Нидерландский язык',
            en: 'Dutch (language)',
        },
    },
    {
        abbr: 'Ned.',
        text: 'Nederlands',
        translation: {
            ru: 'Нидерландский язык',
            en: 'Dutch (language)',
        },
    },
    {
        abbr: 'n.e.g.',
        text: 'niet eerder genoemd',
        translation: {
            ru: 'Ранее не упоминавшийся',
            en: 'Not mentioned before',
        },
    },
    {
        abbr: 'ngo',
        text: 'Niet-gouvernementele organisatie',
        translation: {
            ru: 'Негосударственная организация',
            en: 'Non-governmental organization',
        },
    },
    {
        abbr: 'NH',
        text: 'Noord-Holland',
        translation: {
            ru: 'Северная Голландия (провинция)',
            en: 'North Holland (province)',
        },
    },
    {
        abbr: 'NHG',
        text: 'Nationale Hypotheek Garantie',
        translation: {
            ru: 'Национальная ипотечная гарантия',
            en: 'National Mortgage Guarantee',
        },
    },
    {
        abbr: 'Nibud',
        text: 'Nationaal Instituut voor Budgetvoorlichting',
        translation: {
            ru: 'Национальный институт бюджетного информирования',
            en: 'National Institute for Budget Information foundation',
        },
    },
    {
        abbr: 'NL',
        text: 'Nederland',
        translation: {
            ru: 'Нидерланды',
            en: '(The) Netherlands',
        },
    },
    {
        abbr: 'Nl.',
        text: 'Nederlands',
        translation: {
            ru: 'Нидерландский язык',
            en: 'Dutch (language)',
        },
    },
    {
        abbr: 'nl.',
        text: 'namelijk',
        translation: {
            ru: 'А именно',
            en: 'Namely',
        },
    },
    {
        abbr: 'n.m.',
        text: 'na de middag',
        translation: {
            ru: 'После обеда',
            en: '(In the) afternoon',
        },
    },
    {
        abbr: 'NmG',
        text: 'Nederlands met Gebarentaal',
        translation: {
            ru: 'Нидерландский язык с сурдопереводом',
            en: 'Dutch with sign language',
        },
    },
    {
        abbr: 'n.m.m.',
        text: 'naar mijn mening',
        translation: {
            ru: 'По моему мнению',
            en: 'In my opinion',
        },
    },
    {
        abbr: 'N.N.',
        text: 'nomen nescio',
        translation: {
            ru: 'Имя неизвестно (<i>лат.</i>)',
            en: 'Name unknown (<i>Latin</i>)',
        },
    },
    {
        abbr: 'n.n.b.',
        text: 'nog niet bekend',
        translation: {
            ru: 'Пока неизвестно',
            en: 'Not yet known',
        },
    },
    {
        abbr: 'N.N.O.',
        text: 'noordnoordoosten',
        translation: {
            ru: 'Северо-северо-восток',
            en: 'North-northeast',
        },
    },
    {
        abbr: 'N.N.W.',
        text: 'noordnoordwesten',
        translation: {
            ru: 'Северо-северо-запад',
            en: 'North-northwest',
        },
    },
    {
        abbr: 'No.',
        text: 'numéro',
        translation: {
            ru: 'Номер (<i>лат.</i>)',
            en: 'Number (<i>Latin</i>)',
        },
    },
    {
        abbr: 'no.',
        text: 'netto',
        translation: {
            ru: 'Нетто',
            en: 'Net',
        },
    },
    {
        abbr: 'N.O.',
        text: 'noordoosten',
        translation: {
            ru: 'Северо-восток',
            en: 'Northeast',
        },
    },
    {
        abbr: 'NOS',
        text: 'Nederlandse Omroep Stichting',
        translation: {
            ru: 'Нидерландская вещательная корпорация',
            en: 'Dutch Broadcast Foundation',
        },
    },
    {
        abbr: 'n.o.t.k.',
        text: 'nader overeen te komen',
        translation: {
            ru: 'Подлежит соглашению',
            en: 'To be negotiated',
        },
    },
    {
        abbr: 'NP',
        text: 'Niet parkeren',
        translation: {
            ru: 'Парковка запрещена',
            en: 'Do not park',
        },
    },
    {
        abbr: 'NPO',
        text: 'Nederlandse Publieke Omroep',
        translation: {
            ru: 'Нидерландское общественное вещание (телерадиокомпания)',
            en: 'Dutch Foundation for Public Broadcasting',
        },
    },
    {
        abbr: 'nr.',
        text: 'nummer',
        translation: {
            ru: '(Порядковый) номер',
            en: 'Number',
        },
    },
    {
        abbr: 'nrs.',
        text: 'nummers',
        translation: {
            ru: '(Порядковые) номера',
            en: 'Numbers',
        },
    },
    {
        abbr: 'NS',
        text: 'Nederlandse Spoorwegen',
        translation: {
            ru: 'Нидерландские железные дороги (компания)',
            en: 'Dutch Railways',
        },
    },
    {
        abbr: 'N.T.',
        text: 'Nieuwe Testament',
        translation: {
            ru: 'Новый Завет',
            en: 'New Testament',
        },
    },
    {
        abbr: 'n.t.b.',
        text: 'nader te bepalen',
        translation: {
            ru: 'Подлежит определению',
            en: 'To be determined later',
        },
    },
    {
        abbr: 'n.t.o.',
        text: 'nog te ontwikkelen',
        translation: {
            ru: 'Подлежит разработке',
            en: 'To be worked out/developed',
        },
    },
    {
        abbr: 'NTR',
        text: 'Nederlands publiek omroepbestel',
        translation: {
            ru: 'Нидерландское публичное вещательное правление (NPS, Teleac и RVU)',
            en: 'Dutch public-service broadcaster (NPS, Teleac, RVU)',
        },
    },
    {
        abbr: 'Nuffic',
        text: 'Netherlands Universities’ Foundation for International Cooperation',
        translation: {
            ru: 'Нидерландский университетский фонд международного сотрудничества',
            en: 'Dutch organisation for internationalisation in education',
        },
    },
    {
        abbr: 'NUHO',
        text: 'Niet-Universitair Hoger Onderwijs',
        translation: {
            ru: 'Вне-университетское высшее образование',
            en: 'Non-university higher education',
        },
    },
    {
        abbr: 'N.V.',
        text: 'Naamloze Vennootschap',
        translation: {
            ru: 'Открытое акционерное общество',
            en: 'Nameless partnership',
        },
    },
    {
        abbr: 'NVH',
        text: 'Niet voor handelsdoeleinden',
        translation: {
            ru: 'Не для продажи',
            en: 'Not for trade',
        },
    },
    {
        abbr: 'n.v.t.',
        text: 'niet van toepassing',
        translation: {
            ru: 'Неприменимо',
            en: 'Not applicable',
        },
    },
    {
        abbr: 'N.W.',
        text: 'noordwesten',
        translation: {
            ru: 'Северо-запад',
            en: 'Northwest',
        },
    },
    {
        abbr: 'o.',
        text: 'onzijdig',
        translation: {
            ru: 'Беспристрастный',
            en: 'Neutral',
        },
    },
    {
        abbr: 'O.',
        text: 'oosten',
        translation: {
            ru: 'Восток',
            en: 'East',
        },
    },
    {
        abbr: 'o.a.',
        text: 'onder andere(n)',
        translation: {
            ru: 'Помимо прочего',
            en: 'Among others/other things',
        },
    },
    {
        abbr: 'ob.',
        text: 'obiit',
        translation: {
            ru: 'Умерший (<i>лат.</i>)',
            en: 'Deceased (<i>Latin</i>)',
        },
    },
    {
        abbr: 'OB',
        text: 'Omzetbelasting',
        translation: {
            ru: 'Налог на оборот, НДС',
            en: 'Sales tax, VAT',
        },
    },
    {
        abbr: 'OBD',
        text: 'Open Bedrijvendag',
        translation: {
            ru: 'День открытых дверей в компании',
            en: 'Open day in a company/companies',
        },
    },
    {
        abbr: 'obl.',
        text: 'obligatie',
        translation: {
            ru: 'Облигация (ценная бумага)',
            en: 'Bond (security)',
        },
    },
    {
        abbr: 'o.b.s.',
        text: 'openbare basisschool',
        translation: {
            ru: 'Общая начальная школа',
            en: 'Public primary school',
        },
    },
    {
        abbr: 'o.b.v.',
        text: 'op basis van',
        translation: {
            ru: 'На основе <i>того-то</i>',
            en: 'On the basis of',
        },
    },
    {
        abbr: 'o.b.v.',
        text: 'onder begeleiding van',
        translation: {
            ru: 'Под руководством <i>того-то</i>',
            en: 'Accompanied/led by',
        },
    },
    {
        abbr: 'o.c.',
        text: 'opere citato',
        translation: {
            ru: 'В цитируемой работе (<i>лат.</i>)',
            en: 'In the work quoted (<i>Latin</i>)',
        },
    },
    {
        abbr: 'OD',
        text: 'Ordedienst',
        translation: {
            ru: 'Служба охраны правопорядка',
            en: 'Officials responsible for order',
        },
    },
    {
        abbr: 'o.d.a.m.',
        text: 'om de andere maand',
        translation: {
            ru: 'Каждый второй месяц',
            en: 'Every other month',
        },
    },
    {
        abbr: 'o.d.t.',
        text: 'onder de titel',
        translation: {
            ru: 'Озаглавленный',
            en: 'Under the title (of)',
        },
    },
    {
        abbr: 'o.d.t.',
        text: 'onder de toonbank',
        translation: {
            ru: '(Торговля) из-под прилавка',
            en: '(Sell) under the counter',
        },
    },
    {
        abbr: 'o.d.z.',
        text: 'onder de zinspreuk',
        translation: {
            ru: 'Под девизом',
            en: 'Under the motto',
        },
    },
    {
        abbr: 'o.e.r.',
        text: 'op erewoord retour',
        translation: {
            ru: 'Возврат под честное слово',
            en: 'Return on honor',
        },
    },
    {
        abbr: 'o.g.',
        text: 'of gelijkwaardig',
        translation: {
            ru: 'Либо равноценный',
            en: 'Or equivalent',
        },
    },
    {
        abbr: 'o.g.',
        text: 'ondergetekende',
        translation: {
            ru: 'Нижеподписавшийся(аяся/иеся)',
            en: 'Undersigned',
        },
    },
    {
        abbr: 'o.g.v.',
        text: 'op grond van',
        translation: {
            ru: 'На основании <i>того-то</i>',
            en: 'On the basis of',
        },
    },
    {
        abbr: 'o.g.v.',
        text: 'onder gebruikelijk voorbehoud',
        translation: {
            ru: 'С обычными оговорками',
            en: 'With the usual reservation',
        },
    },
    {
        abbr: 'o.i.',
        text: 'onzes inziens',
        translation: {
            ru: 'По нашему мнению',
            en: 'In our opinion',
        },
    },
    {
        abbr: 'o.i.d.',
        text: 'of iets dergelijks',
        translation: {
            ru: 'Либо что-то подобное',
            en: 'Or something like (that)',
        },
    },
    {
        abbr: 'o.i.v.',
        text: 'onder invloed van',
        translation: {
            ru: 'Под воздействием (алкоголя, наркотиков и т.п.)',
            en: 'Under the influence of',
        },
    },
    {
        abbr: 'ok',
        text: 'operatiekamer',
        translation: {
            ru: 'Операционная',
            en: 'Operating room',
        },
    },
    {
        abbr: 'O.L.',
        text: 'Oosterlengte',
        translation: {
            ru: 'Восточной долготы',
            en: 'Eastern longitude',
        },
    },
    {
        abbr: 'o.l.s.',
        text: 'openbare lagere school',
        translation: {
            ru: 'Общая низшая школа',
            en: 'Public primary school',
        },
    },
    {
        abbr: 'OLT',
        text: 'Openluchttheater',
        translation: {
            ru: 'Театр под открытым небом',
            en: 'Open-air theatre',
        },
    },
    {
        abbr: 'o.l.v.',
        text: 'onder leiding van',
        translation: {
            ru: 'Под руководством <i>того-то</i>',
            en: 'Conducted/led by',
        },
    },
    {
        abbr: 'O.L.V.',
        text: 'Onze-Lieve-Vrouw',
        translation: {
            ru: 'Наша Богородица, Дева Мария',
            en: 'Our Lady',
        },
    },
    {
        abbr: 'o.m.',
        text: 'onder meer',
        translation: {
            ru: 'Помимо прочего',
            en: 'Among others/other things',
        },
    },
    {
        abbr: 'o.m.',
        text: 'ongehuwde man',
        translation: {
            ru: 'Неженатый мужчина',
            en: 'Single man',
        },
    },
    {
        abbr: 'OM',
        text: 'Openbaar ministerie',
        translation: {
            ru: 'Прокуратура',
            en: 'Public Prosecutor',
        },
    },
    {
        abbr: 'ong.',
        text: 'ongeveer',
        translation: {
            ru: 'Примерно',
            en: 'Roughly',
        },
    },
    {
        abbr: 'ong.',
        text: 'ongenummerd',
        translation: {
            ru: 'Ненумерованный',
            en: 'Unnumbered',
        },
    },
    {
        abbr: 'ong.',
        text: 'ongeadresseerd',
        translation: {
            ru: 'Без адресата',
            en: 'Unaddressed',
        },
    },
    {
        abbr: 'O.N.O.',
        text: 'oostnoordoosten',
        translation: {
            ru: 'Востоко-северо-восток',
            en: 'East-northeast',
        },
    },
    {
        abbr: 'onov.ww.',
        text: 'onovergankelijk werkwoord',
        translation: {
            ru: 'Непереходный глагол',
            en: 'Intransitive verb',
        },
    },
    {
        abbr: 'O.O.',
        text: 'onderofficier',
        translation: {
            ru: 'Сержант',
            en: 'Non-commissioned officer (NCO)',
        },
    },
    {
        abbr: 'o.o.v.',
        text: 'onvoorziene omstandigheden voorbehouden',
        translation: {
            ru: 'За исключением непредвиденных обстоятельств',
            en: 'With a reservation for unforeseen circumstances',
        },
    },
    {
        abbr: 'opm.',
        text: 'opmerking',
        translation: {
            ru: 'Примечание',
            en: 'Remark',
        },
    },
    {
        abbr: 'opp.',
        text: 'oppervlakte',
        translation: {
            ru: 'Поверхность/площадь',
            en: 'Surface/area',
        },
    },
    {
        abbr: 'OR',
        text: 'Ondernemingsraad',
        translation: {
            ru: 'Предпринимательский совет',
            en: 'Works council',
        },
    },
    {
        abbr: 'org.',
        text: 'organisatie',
        translation: {
            ru: 'Организация',
            en: 'Organisation',
        },
    },
    {
        abbr: 'orv',
        text: 'Overlijdensrisicoverzekering',
        translation: {
            ru: 'Страховка на случай смерти',
            en: 'Term life insurance',
        },
    },
    {
        abbr: 'O.T.',
        text: 'Oude Testament',
        translation: {
            ru: 'Ветхий Завет',
            en: 'Old Testament',
        },
    },
    {
        abbr: 'OTAP',
        text: 'Ontwikkeling, test, acceptatie en productie',
        translation: {
            ru: 'DTAP (окружение компьютерной системы)',
            en: 'Development, Test, Acceptance, and Production (computer environments)',
        },
    },
    {
        abbr: 'o.t.t.',
        text: 'onvoltooid tegenwoordige tijd',
        translation: {
            ru: 'Несовершенное настоящее время',
            en: 'Imperfect present tense',
        },
    },
    {
        abbr: 'OU',
        text: 'Open Universiteit',
        translation: {
            ru: 'Открытый Университет (вуз)',
            en: 'Open University',
        },
    },
    {
        abbr: 'o.v.',
        text: 'onder voorbehoud',
        translation: {
            ru: 'С оговорками',
            en: 'Conditional',
        },
    },
    {
        abbr: 'OV',
        text: 'Openbaar vervoer',
        translation: {
            ru: 'Общественный транспорт',
            en: 'Public transport',
        },
    },
    {
        abbr: 'OV',
        text: 'Overijssel',
        translation: {
            ru: 'Оверайссел (провинция)',
            en: 'Overijssel (province)',
        },
    },
    {
        abbr: 'OV',
        text: 'opleidingsvorm',
        translation: {
            ru: 'Форма обучения',
            en: 'Form of study',
        },
    },
    {
        abbr: 'ov.cmpl.',
        text: 'over complicatie',
        translation: {
            ru: 'Переусложнение',
            en: 'Over-complication',
        },
    },
    {
        abbr: 'o.v.t.',
        text: 'onvoltooid verleden tijd',
        translation: {
            ru: 'Несовершенное прошлое время',
            en: 'Imperfect past tense',
        },
    },
    {
        abbr: 'o.v.v.',
        text: 'onder vermelding van',
        translation: {
            ru: 'С указанием <i>того-то</i>',
            en: 'Mentioning <i>something</i>',
        },
    },
    {
        abbr: 'ozb',
        text: 'onroerendezaakbelasting',
        translation: {
            ru: 'Налог на недвижимое имущество',
            en: 'Property tax',
        },
    },
    {
        abbr: 'O.Z.O.',
        text: 'oostzuidoosten',
        translation: {
            ru: 'Востоко-юго-восток',
            en: 'East-southeast',
        },
    },
    {
        abbr: 'p.a.',
        text: 'per adres',
        translation: {
            ru: 'На попечении',
            en: 'Care of',
        },
    },
    {
        abbr: 'pabo',
        text: 'Pedagogische academie voor het basisonderwijs',
        translation: {
            ru: 'Педагогическая академия начального образования',
            en: 'Teachers\' training college for the primary education',
        },
    },
    {
        abbr: 'pae',
        text: 'Personenauto-equivalent',
        translation: {
            ru: 'Эквивалент личного автомобиля',
            en: 'Private car equivalent',
        },
    },
    {
        abbr: 'pag.',
        text: 'pagina',
        translation: {
            ru: 'Страница',
            en: 'Page',
        },
    },
    {
        abbr: 'par.',
        text: 'paragraaf',
        translation: {
            ru: 'Параграф, раздел',
            en: 'Section',
        },
    },
    {
        abbr: 'p.c.',
        text: 'par couvert',
        translation: {
            ru: 'Вложенный (<i>фр.</i>)',
            en: 'Enclosed (<i>French</i>)',
        },
    },
    {
        abbr: 'p.c.',
        text: 'pour condoléance',
        translation: {
            ru: 'К (моему) соболезнованию (<i>фр.</i>)',
            en: 'To (my) condolence (<i>French</i>)',
        },
    },
    {
        abbr: 'penn.',
        text: 'penningmeester',
        translation: {
            ru: 'Казначей',
            en: 'Treasurer',
        },
    },
    {
        abbr: 'pgb',
        text: 'Persoonsgebonden budget',
        translation: {
            ru: 'Персональный бюджет',
            en: 'Personal budget',
        },
    },
    {
        abbr: 'pin',
        text: 'Persoonlijk identificatienummer',
        translation: {
            ru: 'ПИН, персональный идентификационный номер',
            en: 'Personal Identification Number',
        },
    },
    {
        abbr: 'p.k.',
        text: 'Paardenkracht',
        translation: {
            ru: 'Лошадиная сила',
            en: 'Horsepower',
        },
    },
    {
        abbr: 'plm.',
        text: 'plusminus',
        translation: {
            ru: 'Плюс-минус (±), примерно',
            en: 'Approximately',
        },
    },
    {
        abbr: 'plv.',
        text: 'plaatsvervangend',
        translation: {
            ru: 'Исполняющий обязанности',
            en: 'Substitute',
        },
    },
    {
        abbr: 'p.m.',
        text: 'pro memoria',
        translation: {
            ru: 'Для напоминания (<i>лат.</i>)',
            en: 'For memory (<i>Latin</i>)',
        },
    },
    {
        abbr: 'p.m.',
        text: 'post mortem',
        translation: {
            ru: 'Пост-мортем, после смерти (<i>лат.</i>)',
            en: 'After death (<i>Latin</i>)',
        },
    },
    {
        abbr: 'pmd',
        text: 'Plastic, metaalverpakkingen en drankkartons',
        translation: {
            ru: 'Пластик, металлическая и картонная упаковка от напитков (сорт мусора)',
            en: 'Plastic, metal packaging and juiceboxes (waste type)',
        },
    },
    {
        abbr: 'P.O.',
        text: 'Per ondertekening',
        translation: {
            ru: 'При подписании',
            en: 'After signing',
        },
    },
    {
        abbr: 'p.o.',
        text: 'per omgaande',
        translation: {
            ru: '(Возврат) почтой',
            en: 'By (return of) post',
        },
    },
    {
        abbr: 'p.o.b.',
        text: 'per ontvangen bericht',
        translation: {
            ru: 'За полученное сообщению',
            en: 'Per received message',
        },
    },
    {
        abbr: 'pp.',
        text: 'pagina\'s',
        translation: {
            ru: 'Страницы',
            en: 'Pages',
        },
    },
    {
        abbr: 'p.p.',
        text: 'per persoon',
        translation: {
            ru: 'С/на человека',
            en: 'Per person',
        },
    },
    {
        abbr: 'p.p.',
        text: 'per procuratie',
        translation: {
            ru: 'По доверенности',
            en: 'By proxy/delegation',
        },
    },
    {
        abbr: 'p.p.p.d.',
        text: 'per persoon per dag',
        translation: {
            ru: 'С/на человека в день',
            en: 'Per person per day',
        },
    },
    {
        abbr: 'P+R',
        text: 'Parkeren + Reizen',
        translation: {
            ru: 'Паркинг системы «Припарковался и повезли»',
            en: 'Park + Ride transit system',
        },
    },
    {
        abbr: 'Pres.',
        text: 'president',
        translation: {
            ru: 'Президент/председатель',
            en: 'President/chairman',
        },
    },
    {
        abbr: 'prof.',
        text: 'professor',
        translation: {
            ru: 'Профессор',
            en: 'Professor',
        },
    },
    {
        abbr: 'prof. em.',
        text: 'professor emeritus',
        translation: {
            ru: 'Заслуженный профессор',
            en: 'Professor emeritus',
        },
    },
    {
        abbr: 'prov.',
        text: 'provincie',
        translation: {
            ru: 'Провинция (орган территориального деления)',
            en: 'Province',
        },
    },
    {
        abbr: 'PS',
        text: 'postscriptum',
        translation: {
            ru: 'Постскриптум',
            en: 'Postscript',
        },
    },
    {
        abbr: 'pseud.',
        text: 'pseudoniem',
        translation: {
            ru: 'Псевдоним',
            en: 'Pseudonym',
        },
    },
    {
        abbr: 'p.st.',
        text: 'per stuk',
        translation: {
            ru: 'За штуку',
            en: 'Per/By the piece',
        },
    },
    {
        abbr: 'PSV',
        text: 'Philips Sport Vereniging',
        translation: {
            ru: '«Спортивное объединение Philips» (футбольный клуб)',
            en: 'Philips Sport Club (football club)',
        },
    },
    {
        abbr: 'PTA',
        text: 'Programma van Toetsing en Afsluiting',
        translation: {
            ru: 'Заключительная программа экзаменации (в школе)',
            en: 'Final school exam program',
        },
    },
    {
        abbr: 'ptolu',
        text: 'Pas toe of leg uit',
        translation: {
            ru: 'Применить либо объяснить',
            en: 'Comply or explain',
        },
    },
    {
        abbr: 'PTSS',
        text: 'Posttraumatische stressstoornis',
        translation: {
            ru: 'Пост-травматическое стрессовое расстройство',
            en: 'Posttraumatic stress disorder',
        },
    },
    {
        abbr: 'P.T.T.',
        text: 'Posterijen, Telegrafie, Telefonie',
        translation: {
            ru: 'Почта, телеграф, телефон',
            en: 'Postal services, Telegraphy, Telephony',
        },
    },
    {
        abbr: 'pvb',
        text: 'persoonsvolgend budget',
        translation: {
            ru: 'Персональный бюджет',
            en: 'Personal budget',
        },
    },
    {
        abbr: 'PvdA',
        text: 'Partij van de Arbeid',
        translation: {
            ru: 'Рабочая партия',
            en: 'Labour Party',
        },
    },
    {
        abbr: 'PvdD',
        text: 'Partij voor de Dieren',
        translation: {
            ru: 'Партия защиты животных',
            en: 'Party for the Animals',
        },
    },
    {
        abbr: 'PVV',
        text: 'Partij voor de Vrijheid',
        translation: {
            ru: 'Партия свободы',
            en: 'Party for Freedom',
        },
    },
    {
        abbr: 'r.a.',
        text: 'rechtsaf',
        translation: {
            ru: 'Направо',
            en: '(To the) right',
        },
    },
    {
        abbr: 'Rb.',
        text: 'Rechtbank',
        translation: {
            ru: 'Суд, судебная инстанция',
            en: 'Court (of law)',
        },
    },
    {
        abbr: 'RC',
        text: 'rechter-commissaris',
        translation: {
            ru: 'Назначенный судья',
            en: 'Examining judge',
        },
    },
    {
        abbr: 'r.d.',
        text: 'rechtdoor',
        translation: {
            ru: 'Прямо',
            en: 'Straight on',
        },
    },
    {
        abbr: 'R.D.',
        text: 'reverendus dominus',
        translation: {
            ru: 'Почтенный (сан священника) (<i>лат.</i>)',
            en: 'Reverend (father) (<i>Latin</i>)',
        },
    },
    {
        abbr: 'RDW',
        text: 'Rijksdienst (voor het) Wegverkeer',
        translation: {
            ru: 'Государственная дорожная служба',
            en: 'Dutch road service',
        },
    },
    {
        abbr: 'red.',
        text: 'redactie/redacteur',
        translation: {
            ru: 'Редакция/редактор',
            en: 'Editor (office)',
        },
    },
    {
        abbr: 'ref.',
        text: 'referenties/referent',
        translation: {
            ru: 'Ссылки/референт',
            en: 'References/referent',
        },
    },
    {
        abbr: 'resp.',
        text: 'respectievelijk',
        translation: {
            ru: 'Соответственно (по порядку)',
            en: 'Respective(ly)',
        },
    },
    {
        abbr: 'RIVM',
        text: 'Rijksinstituut voor Volksgezondheid en Milieu',
        translation: {
            ru: 'Национальный институт здравоохранения и окружающей среды',
            en: 'National Institute for Public Health and Environment',
        },
    },
    {
        abbr: 'ROC',
        text: 'regionaal opleidingencentrum',
        translation: {
            ru: 'Региональный учебный центр',
            en: 'Regional training centre',
        },
    },
    {
        abbr: 'ROVA',
        text: 'Regionaal Orgaan Verwijdering Afvalstoffen',
        translation: {
            ru: 'Региональный орган по вывозу мусора',
            en: 'Regional waste processing organisation',
        },
    },
    {
        abbr: 'rvs',
        text: 'Roestvast (roestvrij) staal',
        translation: {
            ru: 'Нержавеющая сталь',
            en: 'Stainless steel',
        },
    },
    {
        abbr: 'RWN',
        text: 'Rijkswet op het Nederlanderschap',
        translation: {
            ru: 'Закон о гражданстве Нидерландов',
            en: 'Dutch Nationality Act',
        },
    },
    {
        abbr: 'RWS',
        text: 'Recht op Waardig Sterven',
        translation: {
            ru: 'Право на достойную смерть (организация)',
            en: 'Dying with Dignity (group)',
        },
    },
    {
        abbr: 'RWS',
        text: 'Rijkswaterstaat',
        translation: {
            ru: 'Рейксватерстат, государственная служба по контролю водных коммуникаций',
            en: 'Department of Waterways and Public Works',
        },
    },
    {
        abbr: 'RWZI',
        text: 'Rioolwaterzuiveringsinstallatie',
        translation: {
            ru: 'Канализационно-очистное сооружение',
            en: 'Sewage treatment plant',
        },
    },
    {
        abbr: 'S.B.',
        text: 'Stuurboord',
        translation: {
            ru: 'Правый борт (корабля)',
            en: 'Starboard',
        },
    },
    {
        abbr: 'SBB',
        text: 'Staatsbosbeheer',
        translation: {
            ru: 'Комиссия по лесному хозяйству',
            en: 'Forestry Commission',
        },
    },
    {
        abbr: 'SBO',
        text: 'Speciaal Basisonderwijs',
        translation: {
            ru: 'Специальное начальное образование',
            en: 'Special primary education',
        },
    },
    {
        abbr: 'SBU',
        text: 'studiebelastingsuur',
        translation: {
            ru: 'Час обучения',
            en: 'Study hour weight',
        },
    },
    {
        abbr: 'SDP',
        text: 'Sociaal-Democratische Partij',
        translation: {
            ru: 'Социал-демократическая партия',
            en: 'Social Democratic Workers\' Party',
        },
    },
    {
        abbr: 'SEH',
        text: 'Spoedeisende hulp',
        translation: {
            ru: 'Скорая (медицинская) помощь',
            en: 'Emergency ward',
        },
    },
    {
        abbr: 'sec',
        text: 'seconde',
        translation: {
            ru: 'Секунда',
            en: 'second',
        },
    },
    {
        abbr: 'Secr.',
        text: 'secretaris',
        translation: {
            ru: 'Секретарь',
            en: 'Secretary',
        },
    },
    {
        abbr: 'SH',
        text: 'Slechthorend',
        translation: {
            ru: 'Слабослышащий',
            en: 'Hard of hearing',
        },
    },
    {
        abbr: 's.l.',
        text: 'sensu lato',
        translation: {
            ru: 'В широком смысле (<i>лат.</i>)',
            en: 'In the broad sense (<i>Latin</i>)',
        },
    },
    {
        abbr: 'SO',
        text: 'Speciaal onderwijs',
        translation: {
            ru: 'Специальное образование',
            en: 'Special education',
        },
    },
    {
        abbr: 'SO',
        text: 'Secundair onderwijs',
        translation: {
            ru: 'Дополнительное образование',
            en: 'Secondary education',
        },
    },
    {
        abbr: 'soa',
        text: 'seksueel overdraagbare aandoening',
        translation: {
            ru: 'Заболевание, передающееся половым путём',
            en: 'Sexually transmitted disease',
        },
    },
    {
        abbr: 'soc.',
        text: 'sociaal',
        translation: {
            ru: 'Общественный, социальный',
            en: 'Social',
        },
    },
    {
        abbr: 'SP',
        text: 'Socialistische Partij',
        translation: {
            ru: 'Социалистическая партия',
            en: 'Socialist Party',
        },
    },
    {
        abbr: 'sp.',
        text: 'species',
        translation: {
            ru: 'Вид (<i>лат.</i>)',
            en: 'Species',
        },
    },
    {
        abbr: 'SPE',
        text: 'Speciale Politie Eenheid',
        translation: {
            ru: 'Спецподразделение полиции',
            en: 'Special police unit',
        },
    },
    {
        abbr: 'Sr.',
        text: 'senior',
        translation: {
            ru: 'Старший/пожилой (<i>лат.</i>)',
            en: 'Senior',
        },
    },
    {
        abbr: 'ss',
        text: 'stoomschip',
        translation: {
            ru: 'Паровое судно',
            en: 'Steamboat',
        },
    },
    {
        abbr: 's.s.',
        text: 'sensu stricto',
        translation: {
            ru: 'В узком смысле (<i>лат.</i>)',
            en: 'In the narrow sense (<i>Latin</i>)',
        },
    },
    {
        abbr: 's.s.t.t.',
        text: 'salvis titulis',
        translation: {
            ru: 'Титулы опущены (<i>лат.</i>)',
            en: 'Saving titles (<i>Latin</i>)',
        },
    },
    {
        abbr: 's.t.',
        text: 'salvo titulo',
        translation: {
            ru: 'Титул опущен (<i>лат.</i>)',
            en: 'Saving title (<i>Latin</i>)',
        },
    },
    {
        abbr: 'St.',
        text: 'Sint',
        translation: {
            ru: 'Святой',
            en: 'Saint',
        },
    },
    {
        abbr: 'St.',
        text: 'Stichting',
        translation: {
            ru: 'Фонд/корпорация',
            en: 'Foundation/corporation',
        },
    },
    {
        abbr: 'StuFi',
        text: 'studiefinanciering',
        translation: {
            ru: 'Финансовое пособие обучающемуся',
            en: 'Student grant(s)',
        },
    },
    {
        abbr: 'stavaza',
        text: 'stand van zaken',
        translation: {
            ru: 'Положение дел',
            en: 'State of affairs',
        },
    },
    {
        abbr: 'StuVo',
        text: 'studentenvoorzieningen',
        translation: {
            ru: 'Средства для студентов',
            en: 'Student facilities',
        },
    },
    {
        abbr: 'SVB',
        text: 'Sociale Verzekeringsbank',
        translation: {
            ru: 'Банк социального страхования',
            en: 'Social Insurance Bank',
        },
    },
    {
        abbr: 's.v.p.',
        text: 's\'il vous plaît',
        translation: {
            ru: 'Просим/пожалуйста (<i>фр.</i>)',
            en: 'Please (<i>French</i>)',
        },
    },
    {
        abbr: 'SVT',
        text: 'schoolvorderingentest',
        translation: {
            ru: 'Тест успеваемости в школе',
            en: 'School achievement test',
        },
    },
    {
        abbr: 'S.V.Z.',
        text: 'Stand van zaken',
        translation: {
            ru: 'Положение вещей',
            en: 'State of affairs',
        },
    },
    {
        abbr: 'synd.',
        text: 'syndicaat',
        translation: {
            ru: 'Синдикат',
            en: 'Syndicate',
        },
    },
    {
        abbr: 'TAB',
        text: 'technisch applicatiebeheer',
        translation: {
            ru: 'Служба технического администрирования',
            en: 'Technical application administration',
        },
    },
    {
        abbr: 'tab.',
        text: 'tabel',
        translation: {
            ru: 'Таблица',
            en: 'Table',
        },
    },
    {
        abbr: 'TAN',
        text: 'Transactie Autorisatie Nummer',
        translation: {
            ru: 'Код авторизации транзакции (код подтверждения)',
            en: 'Transaction authorisation number',
        },
    },
    {
        abbr: 't.a.v.',
        text: 'ter attentie van',
        translation: {
            ru: 'Вниманию <i>такого-то</i>',
            en: 'For the attention of',
        },
    },
    {
        abbr: 't.a.v.',
        text: 'ten aanzien van',
        translation: {
            ru: 'В отношении <i>того-то</i>',
            en: 'With regard to',
        },
    },
    {
        abbr: 'tb/tbc',
        text: 'Tuberculose',
        translation: {
            ru: 'Туберкулёз',
            en: 'Tuberculosis',
        },
    },
    {
        abbr: 'tbs',
        text: 'terbeschikkingstelling',
        translation: {
            ru: 'Публикация',
            en: 'Posting',
        },
    },
    {
        abbr: 'TBV',
        text: 'taken, bevoegdheden en verantwoordelijkheden',
        translation: {
            ru: 'Задачи, полномочия и сфера ответственности',
            en: 'Tasks, competences, and responsibilities',
        },
    },
    {
        abbr: 't.b.v.',
        text: 'ten behoeve van',
        translation: {
            ru: 'Ради/для <i>того-то</i>',
            en: 'For the benefit of',
        },
    },
    {
        abbr: 't.b.v.',
        text: 'ten bate van',
        translation: {
            ru: 'Для <i>того-то</i>/от лица <i>того-то</i>',
            en: 'For the benefit of/on behalf of',
        },
    },
    {
        abbr: 't.b.v.',
        text: 'ter beschikking van',
        translation: {
            ru: 'В распоряжение <i>того-то</i>',
            en: 'At <i>someone\'s</i> disposal',
        },
    },
    {
        abbr: 't.b.v.',
        text: 'ten bedrage van',
        translation: {
            ru: 'На сумму <i>такую-то</i>',
            en: 'Amounting to',
        },
    },
    {
        abbr: 't.e.a.b.',
        text: 'tegen elk aannemelijk bedrag',
        translation: {
            ru: '(Продаётся) за любую приемлемую сумму',
            en: '(Selling at) any acceptable amount',
        },
    },
    {
        abbr: 'tel.',
        text: 'telefoon',
        translation: {
            ru: 'Телефон',
            en: 'Telephone',
        },
    },
    {
        abbr: 'telw.',
        text: 'telwoord',
        translation: {
            ru: 'Числительное',
            en: 'Numeral',
        },
    },
    {
        abbr: 't.g.t.',
        text: 'te gebruiken tot',
        translation: {
            ru: 'Использовать до <i>даты</i>',
            en: 'Use before <i>date</i>',
        },
    },
    {
        abbr: 't.g.t.',
        text: 'te gelegener tijd',
        translation: {
            ru: 'В удобное время',
            en: 'At a convenient time',
        },
    },
    {
        abbr: 't.g.v.',
        text: 'tengevolge van',
        translation: {
            ru: 'Вследствие <i>того-то</i>',
            en: 'As a result of',
        },
    },
    {
        abbr: 't.g.v.',
        text: 'ter gelegenheid van',
        translation: {
            ru: 'По случаю <i>того-то</i>',
            en: 'On the occasion of',
        },
    },
    {
        abbr: 't.g.v.',
        text: 'ten gunste van',
        translation: {
            ru: 'В пользу <i>того-то</i>',
            en: 'To the credit of',
        },
    },
    {
        abbr: 'th',
        text: 'te huur',
        translation: {
            ru: 'Сдаётся в аренду',
            en: 'To let',
        },
    },
    {
        abbr: 't.h.o.d.n.',
        text: 'tevens handelend onder de naam',
        translation: {
            ru: 'Также действующий под именем/названием',
            en: 'Also trading under the name',
        },
    },
    {
        abbr: 't.h.t.',
        text: 'ten minste houdbaar tot',
        translation: {
            ru: 'Как минимум годен то <i>даты</i>',
            en: 'Best before',
        },
    },
    {
        abbr: 't.h.v.',
        text: 'ter hoogte van',
        translation: {
            ru: 'Вблизи <i>чего-то</i>',
            en: 'Near <i>something</i>',
        },
    },
    {
        abbr: 'tk.',
        text: 'te koop',
        translation: {
            ru: 'Продаётся',
            en: 'To buy',
        },
    },
    {
        abbr: 't.k.g.',
        text: 'ter kennisgeving',
        translation: {
            ru: 'В целях информирования',
            en: 'For information purposes',
        },
    },
    {
        abbr: 't.k.n.',
        text: 'ter kennisneming',
        translation: {
            ru: 'Для вашего сведения',
            en: 'For your information',
        },
    },
    {
        abbr: 'tl',
        text: 'tube luminescent',
        translation: {
            ru: 'Люминесцентная лампа-трубка (<i>фр.</i>)',
            en: 'Fluorescent tube (<i>French</i>)',
        },
    },
    {
        abbr: 't/m',
        text: 'tot en met',
        translation: {
            ru: 'До <i>даты/номера</i> включительно',
            en: 'Up to and including <i>date/number</i>',
        },
    },
    {
        abbr: 'TMG',
        text: 'Telegraaf Media Groep',
        translation: {
            ru: 'Бельгийская медиагруппа «Telegraaf»',
            en: 'Belgian media company',
        },
    },
    {
        abbr: 't.n.v.',
        text: 'ten name van',
        translation: {
            ru: 'На имя <i>того-то</i>',
            en: 'In the name of',
        },
    },
    {
        abbr: 't/o',
        text: 'tegenover',
        translation: {
            ru: 'Напротив (например, в адресах жилых лодок)',
            en: 'Across',
        },
    },
    {
        abbr: 'TOAH',
        text: 'Tijdelijk onderwijs aan huis',
        translation: {
            ru: 'Временное образование на дому',
            en: 'Temporary home schooling',
        },
    },
    {
        abbr: 't.o.v.',
        text: 'ten opzichte van',
        translation: {
            ru: 'В сравнении с',
            en: 'Compared to',
        },
    },
    {
        abbr: 't.o.v.',
        text: 'ten overstaan van',
        translation: {
            ru: 'В присутствии <i>того-то</i>',
            en: 'In the presence of',
        },
    },
    {
        abbr: 'TROS',
        text: 'Televisie en Radio Omroep Stichting',
        translation: {
            ru: 'Нидерландская телерадиовещательная корпорация',
            en: 'Dutch television and radio organisation',
        },
    },
    {
        abbr: 'tto',
        text: 'tweetalig onderwijs',
        translation: {
            ru: 'Двуязычное образование',
            en: 'Bilingual education',
        },
    },
    {
        abbr: 't.t.v.',
        text: 'ten tijde van',
        translation: {
            ru: 'Во времена/время <i>того-то</i>',
            en: 'In the days/time/age of',
        },
    },
    {
        abbr: 't.t.v.v.',
        text: 'tussentijdse verkoop voorbehouden',
        translation: {
            ru: 'Право преждевременной продажи оставляем за собой',
            en: 'Interim sale reserved',
        },
    },
    {
        abbr: 'TU',
        text: 'Technische universiteit',
        translation: {
            ru: 'Технический университет',
            en: 'University of technology',
        },
    },
    {
        abbr: 'tv',
        text: 'Televisie',
        translation: {
            ru: 'Телевидение',
            en: 'Television',
        },
    },
    {
        abbr: 't.v.',
        text: 'tevoren',
        translation: {
            ru: 'Ранее/заранее',
            en: 'Before(hand)',
        },
    },
    {
        abbr: 'tvb',
        text: 'taken, verantwoordelijkheden en bevoegdheden',
        translation: {
            ru: 'Задачи, полномочия и сфера ответственности',
            en: 'Tasks, responsibilities, and competences',
        },
    },
    {
        abbr: 't.w.',
        text: 'te weten',
        translation: {
            ru: 'А именно',
            en: 'Namely',
        },
    },
    {
        abbr: 't.w.v.',
        text: 'ter waarde van',
        translation: {
            ru: 'Эквивалентный сумме <i>такой-то</i>',
            en: 'Worth <i>amount</i>',
        },
    },
    {
        abbr: 't.z.',
        text: 'ter zake',
        translation: {
            ru: 'Относящийся к делу',
            en: 'Relevant',
        },
    },
    {
        abbr: 't.z.',
        text: 'ter zee',
        translation: {
            ru: 'В море',
            en: 'On sea',
        },
    },
    {
        abbr: 't.z.t.',
        text: 'te zijner tijd',
        translation: {
            ru: 'В должное время',
            en: 'In due course',
        },
    },
    {
        abbr: 't.z.v.',
        text: 'ter zake van',
        translation: {
            ru: 'Относящийся к',
            en: 'In respect to',
        },
    },
    {
        abbr: 'UA',
        text: 'uitgesloten aansprakelijkheid',
        translation: {
            ru: 'Исключённый вид ответственности (в страховке)',
            en: 'Excluded liability',
        },
    },
    {
        abbr: 'u.a.n.',
        text: 'uit aller naam',
        translation: {
            ru: 'От лица всех',
            en: 'On behalf of everyone',
        },
    },
    {
        abbr: 'Ued.',
        text: 'U Edele',
        translation: {
            ru: 'Ваша честь',
            en: 'Your Honour/Worship',
        },
    },
    {
        abbr: 'uitsl.',
        text: 'uitsluitend',
        translation: {
            ru: 'Исключительно(ый)',
            en: 'Only/exclusive(ly)',
        },
    },
    {
        abbr: 'ulo',
        text: 'uitgebreid lager onderwijs',
        translation: {
            ru: 'Расширенное низшее образование',
            en: 'Extended primary education',
        },
    },
    {
        abbr: 'UT',
        text: 'Utrecht',
        translation: {
            ru: 'Утрехт (провинция)',
            en: 'Utrecht (province)',
        },
    },
    {
        abbr: 'UU',
        text: 'Universiteit Utrecht',
        translation: {
            ru: 'Утрехтский университет',
            en: 'Utrecht University',
        },
    },
    {
        abbr: 'uv',
        text: 'ultraviolet',
        translation: {
            ru: 'Ультрафиолетовое излучение',
            en: 'Ultraviolet',
        },
    },
    {
        abbr: 'UvA',
        text: 'Universiteit van Amsterdam',
        translation: {
            ru: 'Амстердамский университет',
            en: 'University of Amsterdam',
        },
    },
    {
        abbr: 'u.v.d.',
        text: 'uiterste verkoopdatum',
        translation: {
            ru: 'Максимальная дата продажи',
            en: 'Sell-by date',
        },
    },
    {
        abbr: 'UvT',
        text: 'Universiteit van Tilburg',
        translation: {
            ru: 'Тилбургский университет',
            en: 'Tilburg University',
        },
    },
    {
        abbr: 'UWV',
        text: 'Uitvoeringsinstituut Werknemersverzekeringen',
        translation: {
            ru: 'Орган, отвечающий за страхование служащих',
            en: 'Employee Insurance Agency',
        },
    },
    {
        abbr: 'v.',
        text: 'vrouwelijk',
        translation: {
            ru: 'Женский род',
            en: 'Female/feminine',
        },
    },
    {
        abbr: 'V&D',
        text: 'Vroom & Dreesmann',
        translation: {
            ru: 'Сеть магазинов «V&D» (ныне обанкротившаяся)',
            en: 'Vroom & Dreesmann store chain (now bankrupt)',
        },
    },
    {
        abbr: 'v.a.',
        text: 'vanaf',
        translation: {
            ru: 'С <i>даты/места/возраста и т.д.</i>',
            en: 'From/as of',
        },
    },
    {
        abbr: 'VAE',
        text: 'Verenigde Arabische Emiraten',
        translation: {
            ru: 'Объединённые Арабские Эмираты (ОАЭ)',
            en: 'United Arab Emirates (UAE)',
        },
    },
    {
        abbr: 'VAO',
        text: 'Voortgezette Academische Opleiding',
        translation: {
            ru: 'Продолженное академическое образование',
            en: 'Continued academic education',
        },
    },
    {
        abbr: 'VAR',
        text: 'Verklaring arbeidsrelatie',
        translation: {
            ru: 'Заявление о трудовых отношениях (предшественник <a href="https://yktoo.com/ru/glossary/wet-dba/">закона DBA</a>)',
            en: 'Labour relation statement',
        },
    },
    {
        abbr: 'VARA',
        text: 'Vereniging van Arbeiders Radio Amateurs',
        translation: {
            ru: 'Объединение рабочих-радиолюбителей (телерадиокомпания)',
            en: 'Dutch public broadcasting association',
        },
    },
    {
        abbr: 'vavo',
        text: 'Voortgezet algemeen volwassenenonderwijs',
        translation: {
            ru: 'Продолженное общее взрослое образование',
            en: 'Continued general adult education',
        },
    },
    {
        abbr: 'v.C.',
        text: 'voor Christus',
        translation: {
            ru: 'До нашей эры (<i>букв.</i> «до Христа»)',
            en: 'Before Christ (B.C.)',
        },
    },
    {
        abbr: 'ver.',
        text: 'vereniging',
        translation: {
            ru: 'Клуб/ассоциация/объединение',
            en: 'Club/association/society',
        },
    },
    {
        abbr: 'VGB',
        text: 'Verklaring van geen bezwaar',
        translation: {
            ru: 'Заявление об отсутствии возражений',
            en: 'No objection statement',
        },
    },
    {
        abbr: 'vgl.',
        text: 'vergelijk(ing)',
        translation: {
            ru: 'Сравни/сравнение',
            en: 'Compare/comparison',
        },
        seeAlso: [
            'cf.',
            'cfr.',
        ],
    },

    {
        abbr: 'vglo',
        text: 'voortgezet lager onderwijs',
        translation: {
            ru: 'Продолженное низшее образование',
            en: 'Continued primary education',
        },
    },
    {
        abbr: 'v.h.',
        text: 'voorheen',
        translation: {
            ru: 'Ранее',
            en: 'Formerly',
        },
    },
    {
        abbr: 'vhmo',
        text: 'Voorbereidend Hoger en Middelbaar Onderwijs',
        translation: {
            ru: 'Подготовительное высшее и среднее образование',
            en: 'Preparatory higher and secondary education',
        },
    },
    {
        abbr: 'Vinex',
        text: 'Vierde Nota Ruimtelijke Ordening Extra',
        translation: {
            ru: 'Дополнение к четвёртой статье положения о градостроительстве',
            en: 'Supplement to the Fourth report on spatial planning',
        },
    },
    {
        abbr: 'VK',
        text: 'Verenigd Koninkrijk',
        translation: {
            ru: 'Соединённое королевство Великобритании и Северной Ирландии',
            en: 'United Kingdom',
        },
    },
    {
        abbr: 'VL',
        text: 'Verstandelijke leeftijd',
        translation: {
            ru: 'Возраст умственного развития',
            en: 'Mental age',
        },
    },
    {
        abbr: 'v.l.n.r.',
        text: 'van links naar rechts',
        translation: {
            ru: 'Слева направо',
            en: 'From left to right',
        },
    },
    {
        abbr: 'vmbo',
        text: 'Voorbereidend middelbaar beroepsonderwijs',
        translation: {
            ru: 'Подготовительное среднее профессиональное образование',
            en: 'Preparatory secondary professional education',
        },
    },
    {
        abbr: 'VN',
        text: 'Verenigde Naties',
        translation: {
            ru: 'Организация объединённых наций (ООН)',
            en: 'United Nations (UN)',
        },
    },
    {
        abbr: 'VNG',
        text: 'Vereniging van Nederlandse Gemeenten',
        translation: {
            ru: 'Объединение нидерландских муниципалитетов',
            en: 'Association of Dutch local councils',
        },
    },
    {
        abbr: 'vnl.',
        text: 'voornamelijk',
        translation: {
            ru: 'Преимущественно',
            en: 'Mainly',
        },
    },
    {
        abbr: 'vnw.',
        text: 'voornaamwoord',
        translation: {
            ru: 'Местоимение',
            en: 'Pronoun',
        },
    },
    {
        abbr: 'vof',
        text: 'vennootschap onder firma',
        translation: {
            ru: 'Полное товарищество (организационно-правовая форма)',
            en: 'Partnership firm',
        },
    },
    {
        abbr: 'VOG',
        text: 'Verklaring omtrent het gedrag',
        translation: {
            ru: 'Заявление о поведении (документ, выдаваемый муниципалитетом для устройства на работу)',
            en: 'Declaration of conduct',
        },
    },
    {
        abbr: 'v.o.n.',
        text: 'Vrij op naam',
        translation: {
            ru: 'Без юридических расходов',
            en: 'No legal charges',
        },
    },
    {
        abbr: 'voorz.',
        text: 'voorzitter',
        translation: {
            ru: 'Председатель',
            en: 'Chairman/chairwoman',
        },
    },
    {
        abbr: 'VPB',
        text: 'Vennootschapsbelasting',
        translation: {
            ru: 'Налог на корпорации',
            en: 'Corporation tax',
        },
    },
    {
        abbr: 'VRI',
        text: 'verkeersregelinstallatie',
        translation: {
            ru: 'Светофорная установка',
            en: 'Traffic control system',
        },
    },
    {
        abbr: 'VS',
        text: 'Verenigde Staten',
        translation: {
            ru: 'США',
            en: 'United States',
        },
    },
    {
        abbr: 'vs.',
        text: 'versus',
        translation: {
            ru: 'Против (в сравнениях, матчах и т.д.)',
            en: 'Versus',
        },
    },
    {
        abbr: 'vso',
        text: 'voortgezet speciaal onderwijs',
        translation: {
            ru: 'Продолженное специальное образование',
            en: 'Continued special education',
        },
    },
    {
        abbr: 'v.t.t.',
        text: 'voltooid tegenwoordige tijd',
        translation: {
            ru: 'Совершенное настоящее время',
            en: 'Perfect present tense',
        },
    },
    {
        abbr: 'VU',
        text: 'Vrije Universiteit Amsterdam',
        translation: {
            ru: 'Свободный университет Амстердама (вуз)',
            en: 'Free University of Amsterdam',
        },
    },
    {
        abbr: 'VUT',
        text: 'Vervroegde uittreding',
        translation: {
            ru: 'Досрочная отставка',
            en: 'Early retirement',
        },
    },
    {
        abbr: 'v.v.',
        text: 'vice versa',
        translation: {
            ru: 'Наоборот',
            en: 'Conversely',
        },
    },
    {
        abbr: 'VVD',
        text: 'Volkspartij voor Vrijheid en Democratie',
        translation: {
            ru: 'Народная партия за свободу и демократию',
            en: 'People\'s Party for Freedom and Democracy',
        },
    },
    {
        abbr: 'VVE',
        text: 'Vereniging van Eigenaars',
        translation: {
            ru: 'Товарищество собственников жилья',
            en: 'Homeowner association',
        },
    },
    {
        abbr: 'vvo',
        text: 'verhuurbare vloeroppervlakte',
        translation: {
            ru: 'Площадь, сдаваемая в аренду',
            en: 'Rentable area',
        },
    },
    {
        abbr: 'v.v.t.',
        text: 'voltooid verleden tijd',
        translation: {
            ru: 'Совершенное прошлое время',
            en: 'Perfect past tense',
        },
    },
    {
        abbr: 'V.V.V.',
        text: 'Vereniging voor Vreemdelingenverkeer',
        translation: {
            ru: 'Объединение по Иностранным Путешествиям (туристическая организация)',
            en: 'Tourist Office',
        },
    },
    {
        abbr: 'v.w.b.',
        text: 'voor wat betreft',
        translation: {
            ru: 'Что касается',
            en: 'What concerns',
        },
    },
    {
        abbr: 'vwo',
        text: 'voorbereidend wetenschappelijk onderwijs',
        translation: {
            ru: 'Подготовительное научное образование',
            en: 'Pre-university education',
        },
    },
    {
        abbr: 'Vz.',
        text: 'voorzitter',
        translation: {
            ru: 'Председатель',
            en: 'Chairman/chairwoman',
        },
    },
    {
        abbr: 'W',
        text: 'west',
        translation: {
            ru: 'Запад',
            en: 'West',
        },
    },
    {
        abbr: 'W.A.',
        text: 'Wettelijke aansprakelijkheid',
        translation: {
            ru: 'Ответственность по закону',
            en: 'Liability in law',
        },
    },
    {
        abbr: 'WAO',
        text: 'Wet op de arbeidsongeschiktheidsverzekering',
        translation: {
            ru: 'Закон о страховании нетрудоспособности',
            en: 'Disability insurance law',
        },
    },
    {
        abbr: 'wc',
        text: 'watercloset',
        translation: {
            ru: 'Туалет',
            en: 'Water-closet',
        },
    },
    {
        abbr: 'w.g.',
        text: 'was getekend',
        translation: {
            ru: 'Был подписан/отмечен',
            en: 'Was signed/marked',
        },
    },
    {
        abbr: 'w.i.',
        text: 'werktuigkundig ingenieur',
        translation: {
            ru: 'Инженер-механик',
            en: 'Mechanical engineer',
        },
    },
    {
        abbr: 'WIA',
        text: 'Wet Werk en Inkomen naar Arbeidsvermogen',
        translation: {
            ru: 'Закон о работе и доходе в соответствии с рабочими возможностями',
            en: 'Work and Income according to Labour Capacity Act',
        },
    },
    {
        abbr: 'wk',
        text: 'week',
        translation: {
            ru: 'Неделя',
            en: 'Week',
        },
    },
    {
        abbr: 'WK',
        text: 'Wereldkampioenschap',
        translation: {
            ru: 'Чемпионат мира',
            en: 'World championship',
        },
    },
    {
        abbr: 'WKA',
        text: 'Wet Ketenaansprakelijkheid',
        translation: {
            ru: 'Закон о последовательной ответственности',
            en: 'Sequential Liability Act',
        },
    },
    {
        abbr: 'W.L.',
        text: 'Westerlengte',
        translation: {
            ru: 'Западной долготы',
            en: 'Longitude west',
        },
    },
    {
        abbr: 'wnd.',
        text: 'waarnemend',
        translation: {
            ru: 'Временный, исполняющий обязанности',
            en: 'Temporary, acting',
        },
    },
    {
        abbr: 'wnw',
        text: 'westnoordwest',
        translation: {
            ru: 'Западо-северо-запад',
            en: 'West-northwest',
        },
    },
    {
        abbr: 'wo.',
        text: 'waaronder',
        translation: {
            ru: 'Среди которых',
            en: 'Among what/which',
        },
    },
    {
        abbr: 'w.o.',
        text: 'wetenschappelijk onderzoek',
        translation: {
            ru: 'Научное исследование',
            en: 'Scientific research',
        },
    },
    {
        abbr: 'WO',
        text: 'wetenschappelijk onderwijs',
        translation: {
            ru: 'Научное образование',
            en: 'University education',
        },
    },
    {
        abbr: 'w.t.b.w.',
        text: 'wat te bewijzen was',
        translation: {
            ru: 'Что и требовалось доказать',
            en: 'What was to be shown',
        },
    },
    {
        abbr: 'WvS',
        text: 'Wetboek van Strafrecht',
        translation: {
            ru: 'Уголовный кодекс',
            en: 'Criminal Code',
        },
    },
    {
        abbr: 'w.v.t.t.k.',
        text: 'wat verder ter tafel komt',
        translation: {
            ru: 'Дополнительные темы для обсуждения',
            en: 'Any other business (agenda item)',
        },
    },
    {
        abbr: 'ww.',
        text: 'werkwoord',
        translation: {
            ru: 'Глагол',
            en: 'Verb',
        },
    },
    {
        abbr: 'WW',
        text: 'Wegenwacht',
        translation: {
            ru: 'Аварийная дорожная служба',
            en: 'Roadside assistance service',
        },
    },
    {
        abbr: 'wzw',
        text: 'westzuidwest',
        translation: {
            ru: 'Западо-юго-запад',
            en: 'West-southwest',
        },
    },
    {
        abbr: 'xtc',
        text: 'Extacy',
        translation: {
            ru: '«Экстази» (наркотик)',
            en: 'Extacy (drug)',
        },
    },
    {
        abbr: 'z.',
        text: 'Zuid',
        translation: {
            ru: 'Юг',
            en: 'South',
        },
    },
    {
        abbr: 'z.a.',
        text: 'zie aldaar',
        translation: {
            ru: 'Смотри <i>там-то</i>',
            en: 'Look at',
        },
    },
    {
        abbr: 'zat.',
        text: 'zaterdag',
        translation: {
            ru: 'Суббота',
            en: 'Saturday',
        },
    },
    {
        abbr: 'Z.B.',
        text: 'Zuiderbreedte',
        translation: {
            ru: 'Южной широты',
            en: 'Southern latitude',
        },
    },
    {
        abbr: 'z.b.b.h.h.',
        text: 'zijne bezigheden buitenshuis hebbende',
        translation: {
            ru: 'Исполняющий свои обязанности вне дома',
            en: 'Away all day',
        },
    },
    {
        abbr: 'zbo',
        text: 'zelfstandig bestuursorgaan',
        translation: {
            ru: 'Независимый руководящий орган',
            en: 'Independent governing body',
        },
    },
    {
        abbr: 'Z.D.',
        text: 'Zijne Doorluchtigheid',
        translation: {
            ru: 'Его Светлость',
            en: 'His Serenity',
        },
    },
    {
        abbr: 'Z.D.H.',
        text: 'Zijne Doorluchtige Hoogheid',
        translation: {
            ru: 'Его Светлое Высочество',
            en: 'His Serene Highness',
        },
    },
    {
        abbr: 'Z.E.',
        text: 'Zijne Edelheid',
        translation: {
            ru: 'Его Благородие',
            en: 'His Nobility',
        },
    },
    {
        abbr: 'Z.E.',
        text: 'Zeer Eerwaarde',
        translation: {
            ru: 'Высокопочтенный',
            en: 'Right Reverend',
        },
    },
    {
        abbr: 'Z.Em.',
        text: 'Zijne Eminentie',
        translation: {
            ru: 'Его Преосвященство',
            en: 'His Eminence',
        },
    },
    {
        abbr: 'zg.',
        text: 'zogenaamd',
        translation: {
            ru: 'Так называемый',
            en: 'so-called',
        },
    },
    {
        abbr: 'z.g.',
        text: 'zaliger gedachtenis',
        translation: {
            ru: 'Почивший',
            en: 'Of blessed memory',
        },
    },
    {
        abbr: 'z.g.a.n.',
        text: 'zo goed als nieuw',
        translation: {
            ru: 'Совсем как новый',
            en: 'As good as new',
        },
    },
    {
        abbr: 'zgn.',
        text: 'zogenaamd',
        translation: {
            ru: 'Так называемый',
            en: 'so-called',
        },
    },
    {
        abbr: 'ZH',
        text: 'Zuid-Holland',
        translation: {
            ru: 'Южная Голландия (провинция)',
            en: 'South Holland (province)',
        },
    },
    {
        abbr: 'Z.H.',
        text: 'Zijne Heiligheid',
        translation: {
            ru: 'Его Святейшество',
            en: 'His Holiness',
        },
    },
    {
        abbr: 'Z.H.',
        text: 'Zijne Hoogheid',
        translation: {
            ru: 'Его Высочество',
            en: 'His Highness',
        },
    },
    {
        abbr: 'z.h.s.',
        text: 'zonder hoofdelijke stemming',
        translation: {
            ru: 'Подавляющим большинством',
            en: 'Without a division',
        },
    },
    {
        abbr: 'z.i.',
        text: 'zijns inziens',
        translation: {
            ru: 'По его мнению',
            en: 'In his opinion',
        },
    },
    {
        abbr: 'z.j.',
        text: 'zonder jaartal',
        translation: {
            ru: 'Без указания года',
            en: 'Undated',
        },
    },
    {
        abbr: 'Z.K.H.',
        text: 'Zijne Koninklijke Hoogheid',
        translation: {
            ru: 'Его Королевское Высочество',
            en: 'His Royal Highness',
        },
    },
    {
        abbr: 'Z.K.M.',
        text: 'Zijne Koninklijke Majesteit',
        translation: {
            ru: 'Его Королевское Величество',
            en: 'His Royal Majesty',
        },
    },
    {
        abbr: 'ZM',
        text: 'zittende magistratuur',
        translation: {
            ru: 'Суд, ведущий заседание',
            en: 'Court',
        },
    },
    {
        abbr: 'ZL',
        text: 'Zeeland',
        translation: {
            ru: 'Зеландия (провинция)',
            en: 'Zeeland (province)',
        },
    },
    {
        abbr: 'Z.M.',
        text: 'Zijne Majesteit',
        translation: {
            ru: 'Его Величество',
            en: 'His Majesty',
        },
    },
    {
        abbr: 'Z.M.L.K.',
        text: 'Zeer Moeilijk Lerende Kinderen',
        translation: {
            ru: 'Дети, с большим трудом поддающиеся обучению',
            en: 'Children with sever learning difficulties',
        },
    },
    {
        abbr: 'Z.M.O.K.',
        text: 'Zeer Moeilijk Opvoedbare Kinderen',
        translation: {
            ru: 'Дети, с большим трудом поддающиеся воспитанию',
            en: 'Problem children',
        },
    },
    {
        abbr: 'zn.',
        text: 'zoon/zonen',
        translation: {
            ru: 'Сын/сыновья',
            en: 'Son(s)',
        },
    },
    {
        abbr: 'znw.',
        text: 'zelfstandig naamwoord',
        translation: {
            ru: 'Существительное',
            en: 'Noun',
        },
    },
    {
        abbr: 'z.o.',
        text: 'zuidoost',
        translation: {
            ru: 'Юго-восток',
            en: 'Southeast',
        },
    },
    {
        abbr: 'ZOA',
        text: 'zeer open asfalt',
        translation: {
            ru: 'Водопроницаемый асфальт',
            en: 'Porous asphalt',
        },
    },
    {
        abbr: 'ZOAB',
        text: 'zeer open asfalt beton',
        translation: {
            ru: 'Водопроницаемый асфальтобетон',
            en: 'Porous asphalt concrete',
        },
    },
    {
        abbr: 'z.o.z.',
        text: 'zie ommezijde',
        translation: {
            ru: 'Смотри оборот',
            en: 'See overleaf',
        },
    },
    {
        abbr: 'Zr.',
        text: 'zuster',
        translation: {
            ru: 'Сестра',
            en: 'Sister',
        },
    },
    {
        abbr: 'z.s.m.',
        text: 'zo spoedig mogelijk',
        translation: {
            ru: 'Как можно быстрее, при первой возможности',
            en: 'As soon as possible',
        },
    },
    {
        abbr: 'z.v.',
        text: 'zoon van',
        translation: {
            ru: 'Сын <i>того-то</i>',
            en: 'Son of',
        },
    },
    {
        abbr: 'z.v.k.',
        text: 'zonder verdere kosten',
        translation: {
            ru: 'Без дополнительных расходов',
            en: 'Without additional costs',
        },
    },
    {
        abbr: 'z.v.v.a.',
        text: 'zonder verlies van algemeenheid',
        translation: {
            ru: 'Не теряя общности',
            en: 'Without loss of generality',
        },
    },
    {
        abbr: 'z.w.',
        text: 'zuidwest',
        translation: {
            ru: 'Юго-запад',
            en: 'Southwest',
        },
    },
    {
        abbr: 'zzo',
        text: 'zuidzuidoost',
        translation: {
            ru: 'Юго-юго-восток',
            en: 'South-southeast',
        },
    },
    {
        abbr: 'zzp',
        text: 'zelfstandige zonder personeel',
        translation: {
            ru: 'Индивидуальный предприниматель без персонала',
            en: 'Self-employed person',
        },
    },
    {
        abbr: 'zzw',
        text: 'zuidzuidwest',
        translation: {
            ru: 'Юго-юго-запад',
            en: 'South-southwest',
        },
    },
];
