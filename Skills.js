
skills = {
    Barter: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Charisma'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    E_W: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Perception'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Explosives: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Perception'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Guns: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Agility'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Lockpick: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Perception'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Medicine: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Intelligence'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    M_W: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Strength'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Repair: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Intelligence'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Science: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Intelligence'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Sneak: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Agility'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Speech: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Charisma'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Survival: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Endurance'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
    Unarmed: {
        value(char) {
            return Math.ceil(2 + (char.SPECIAL['Endurance'].value * 2) + (char.SPECIAL['Luck'].value / 2) + this.bonus);
        },
        bonus: 0,
        book_type: 'single',
    },
}


skills_En = {
    Barter: {
        name: 'Barter',
        Description: 'Proficiency at trading and haggling. Also used to negotiate better quest rewards or occasionally as a bribe-like alternative to Speech.'
    },
    E_W: {
        name: 'Energy Weapons',
        Description: 'The Energy Weapons skill determines your effectiveness with any weapon that uses small energy cells, micro fusion cells, electron charge packs, or flamer fuel as ammunition.'
    },
    Explosives: {
        name: 'Explosives',
        Description: '	Proficiency at using explosive weaponry, disarming mines, and crafting explosives.'
    },
    Guns: {
        name: 'Guns',
        Description: 'Proficiency at using weapons that fire standard ammunition.'
    },
    Lockpick: {
        name: 'Lockpick	',
        Description: 'Proficiency at picking locks.'
    },
    Medicine: {
        name: 'Medicine',
        Description: 'Proficiency at using medical tools, drugs, and for crafting Doctor\'s Bags.'
    },
    M_W: {
        name: 'Melee Weapons',
        Description: 'Proficiency at using melee weapons.'
    },
    Repair: {
        name: 'Repair',
        Description: 'Proficiency at repairing items and crafting items and ammunition.'
    },
    Science: {
        name: 'Science	',
        Description: 'Proficiency at hacking terminals, recycling energy ammunition at workbenches, crafting chems, and many dialog checks.'
    },
    Sneak: {
        name: 'Sneak',
        Description: 'Proficiency at remaining undetected and stealing.'
    },
    Speech: {
        name: 'Speech',
        Description: 'Proficiency at persuading others. Also used to negotiate for better quest rewards and to talk your way out of combat, convincing people to give up vital information and succeeding in multiple Speech checks.'
    },
    Survival: {
        name: 'Survival',
        Description: 'Proficiency at cooking, making poisons, and crafting "natural" equipment and consumables. Also yields increased benefits from food.'
    },
    Unarmed: {
        name: 'Unarmed',
        Description: 'Proficiency at unarmed fighting.'
    },
}
skills_Ru = {
    Barter: {
        name: 'Бартер',
        Description: 'Навик "Бартер" влияет на то, по каким ценам вы будете покупать и продавать. В общем случае, чем выше ваш навык "Бартера", тем дешевле вам удасться что-то купить.',
        Book_type: 'Торговец из Джанктауна. Рассказы',
        Books: [{
            location: 'Примм',
            details: 'В отеле «Бизон Стив», на полу за прилавком сувенирного магазина.',
            level: undefined,
        },
        {
            location: 'Офисы «Элайд текнолоджиз»',
            details: 'В комнате на западе от входа— в юго-западном углу, перед автоматом с ядер-колой.',
            level: undefined,
        },
        {
            location: 'Хибара фальшивокрышечника',
            details: 'В задней части погреба, на чемодане возле кровати.',
            level: undefined,
        },
        {
            location: 'Убежище 22',
            details: 'Пятый уровень — уничтожение вредителей. На север от лифта по коридору в лабораторию, на столе рядом с колбами.',
            level: undefined,
        },
        {
            location: 'Сторожевой пост меченых   ',
            details: 'Подвал. Справа от входа на угловом шкафчике.',
            level: undefined,
        },
        ],
    },
    E_W: {
        name: 'Энергооружие',
        Description: 'Навык Оружия определяет, сколь хорошо вы владеете оружиием, использующим следующие боеприпасы: малые энергетические и микроядерные батареи, электронные заряды и топливо для огнемета',
        Book_type: 'Никола Тесла и вы',
        Books: [{
            location: 'Штаб-квартира РЕПКОНН',
            details: 'На первом этаже за дверью («Наука» 100), можно попасть со 2-го этажа через пролом в полу («Взлом» 75) или используя ключ-карту Пирса Айсли (можно найти на третьем этаже в дипломате рядом со скелетом).',
            level: undefined,
        },
        {
            location: 'Штаб-квартира РЕПКОНН',
            details: 'На втором этаже рядом с работающим терминалом (сразу после входа на этаж идти по левой стенке).',
            level: undefined,
        },
        {
            location: 'Хидден-Вэли',
            details: 'Офис доктора Шуллер. В белом ящике возле стола (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Старый ядерный полигон',
            details: 'Внутри лачуги, на маленьком столике напротив входа.',
            level: undefined,
        },
        {
            location: 'База Хоупвиль — штаб-квартира   ',
            details: 'Справа от входа на книжной полке.',
            level: undefined,
        },
        ]
    },
    Explosives: {
        name: 'Взрывчатка',
        Description: 'Навык "Взрывчатка" определяет, эфективность обезврежывания вами вражеских мин и эфективность использования взрывчатых веществ в том или ином виде (мин, гранат, гранатометов, "Толстяка" и пр.)',
        Book_type: 'В укрытие! Ложись!',
        Books: [
            {
                location: 'Слоун (Барак рабочих)',
                details: 'Прямо в шкафу снизу (необходимо украсть).',
                level: undefined,
            },
            {
                location: 'Аванпост Мохаве (Казармы)',
                details: 'На нижней полке барной стойки напротив входа (необходимо украсть).',
                level: undefined,
            },
            {
                location: 'Пост рейнджеров «Фокстрот»',
                details: 'На столе около офицера связи.',
                level: undefined,
            },
            {
                location: 'Авиабаза Неллис (Дом Перл)',
                details: 'Книжная полка на правой стене от входа, стоит между книг (необходимо украсть).',
                level: undefined,
            },
            {
                location: 'Обрушившийся туннель   ',
                details: 'Справа от выхода — за мешками с песком, в ящике под плюшевым медведем.',
                level: undefined,
            },
        ]
    },
    Guns: {
        name: 'Оружие',
        Description: 'Навык Оружия определяет, насколько эффективно вы можете пользоваться всеми видами оружия, использующего обычные боеприпасы (.22 LR, .357 „Магнум“, 5 мм, 10 мм, .308, 45-70 и пр.)',
        Book_type: 'Пистолеты и пули',
        Books: [
            {
                location: 'Пост Невадского дорожного патруля',
                details: 'На столе недалеко от входной двери.',
                level: undefined,
            },
            {
                location: 'Северные ворота Стрипа, казино «Гоморра»',
                details: 'Клуб Зоарра, на первой книжной полке слева В офисе Большого Сэла.',
                level: undefined,
            },
            {
                location: 'Хижина Рауля',
                details: 'Слева от входа, в деревянном ящике на полу.',
                level: undefined,
            },
            {
                location: 'Убежище 34',
                details: 'В оружейной. На металлическом столике между диванами, возле бильярдного стола.',
                level: undefined,
            },
            {
                location: 'Хоупвиль — оружейная   ',
                details: 'Правый дальный угол. Под столом.',
                level: undefined,
            },
        ],
    },
    Lockpick: {
        name: 'Взлом',
        Description: 'Умение открытия замков без соответствующих ключей. Использование обычных или электронных отмычек значительно повысит навык',
        Book_type: 'Современные замки',
        Books: [{
            location: 'Ранчо Вулфхорна',
            details: 'В доме, на полу у холодильника.',
            level: undefined,
        },
        {
            location: 'Логово старателей',
            details: 'Пещера. Барак. Средняя комната — спальня, в дальнем правом углу, на полу.',
            level: undefined,
        },
        {
            location: 'Шахта «Силвер-Пик»',
            details: 'В лачуге, справа от входа за двумя столами на дне открытого шкафа.',
            level: undefined,
        },
        {
            location: 'Биттер-Спрингс — рекреация',
            details: 'На столе в офисе рядом с разбитым компьютером.',
            level: undefined,
        },
        {
            location: 'Хоупвиль — мужское общежитие',
            details: 'В туалете под ящиком заметить сложно, нужно отодвинуть ящик',
            level: undefined,
        },
        ]
    },
    Medicine: {
        name: 'Медицина',
        Description: 'Навык "Медицина" определяет, сколько очков здоровья вы восстанавливаете при использовании стимуляторов, а также эфективность рад-Х и Антирадина.',
        Book_name: 'Терапевтический журнал округа Колумбия',
        Books: [{
            location: 'Кратер в Мескитских горах',
            details: 'Внутри мотеля Хелла, справа от входа, на столе с радио, под глобусом.',
            level: undefined,
        },
        {
            location: 'Новак',
            details: 'В бунгало рейнджера Энди, на кровати (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'ГЕЛИОС Один',
            details: 'На кровати в той же комнате, что и голозапись с паролем, верхний этаж основного здания. Сюда можно перейти по доскам из комнаты с дырой в полу.',
            level: undefined,
        },
        {
            location: 'Тайная квартира Последователей',
            details: 'Во второй комнате, на столике у кровати.',
            level: undefined,
        },
        {
            location: 'Пещера Аваддона   ',
            details: 'Слева от выхода на крышу отеля «Боксвуд», в погребённом здании под плакатом «Ральфи».',
            level: undefined,
        },
        ]
    },
    M_W: {
        name: 'Холодное оружие',
        Description: 'Навык «Холодное оружие» определяет, насколько эффективно вы можете пользоваться оружием ближнего боя — от свинцовой трубы до высокотехнологичной суперкувалды.',
        Book_name: 'Грогнак-варвар',
        Books: [{
            location: 'Потайной пещерный склад',
            details: 'Наверху одного из больших металлических контейнеров справа. Может оказаться за ящиками. (Для входа в локацию необходим «Взлом» 50).',
            level: undefined,
        },
        {
            location: 'Коттонвуд-Коув',
            details: 'В комнате на втором этаже штаб-квартиры, на прикроватном столике (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Пещера каннибала Джонсона',
            details: 'На матрасе недалеко от костра (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Джейкобстаун',
            details: 'В первом бунгало по правую сторону, на полу у плиты.',
            level: undefined,
        },
        {
            location: 'Хоупвиль — женское общежитие    ',
            details: 'В дальней части казармы, на маленьком журнальном столике прямо под испорченной книгой, заметить сложно, не подняв или подвинув последнюю.',
            level: undefined,
        },
        ]
    },
    Repair: {
        name: 'Ремонт',
        Description: 'Навык "Ремонт" позволяет вам поддерживать оружие и снаряжение в исправном состоянии. Кроме того, навык ремонта позволяет вам создавать предметы и боеприпасы на верстаке для патронов.',
        Book_name: 'Починка электроники',
        Books: [{
            location: 'Слоун',
            details: 'В бараке рабочих, на полке слева от входа (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Заброшенный бункер БС',
            details: 'В офисных помещениях, на металлическом подоконнике, напротиВ верстака для снаряжения патронов.',
            level: undefined,
        },
        {
            location: 'Ветроэлектростанция Южной Невады',
            details: 'В лачуге, на столе.',
            level: undefined,
        },
        {
            location: 'Авиабаза Неллис',
            details: 'В доме Адепта, на столе у левой стены (необходимо украсть).',
            level: undefined,
        },
        {
            location: '«Пуэста-дель-Соль» — подстанция',
            details: 'Самая южная точка на карте местности. На верхнем ярусе возле терминала отключающего динамики и трупа загороженного растяжкой.',
            level: undefined,
        },
        ],
    },
    Science: {
        name: 'Наука',
        Description: 'Навык "Наука" представляет общий уровень ваших познаний и используеться в первую очередь для взлома компъютерных терминалов. Этот навык также дает возможность вторичной переработки боеприпасов для энергетического оружия на верстаке.',
        Book_name: 'Наука для всех',
        Books: [{
            location: 'Ниптон',
            details: 'Последний этаж ратуши. В кабинете мэра, на столе.',
            level: undefined,
        },
        {
            location: 'Лагерь Форлорн-Хоуп',
            details: 'В штабной палатке майора Полатли, на столе в дальнем правом углу (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'ГЕЛИОС Один',
            details: 'Получается в награду от Игнасио Риваса за распределение энергии от солнечных батарей на «Весь регион».',
            level: undefined,
        },
        {
            location: 'Штаб-квартира РЕПКОНН',
            details: 'Сувенирная лавка на первом этаже, в каморке («Взлом» 75).',
            level: undefined,
        },
        {
            location: 'Пивоварня',
            details: 'В подвале, в комнате с табличкой. На столе слева от входа.',
            level: undefined,
        },
        {
            location: 'Пульт управления ШПУ Эштон   ',
            details: '3 этаж. В углу на разрушенном полу недалеко от сейфа.',
            level: undefined,
        },
        {
            location: 'Y-0 Исследовательский центр   ',
            details: 'В углу ущелья, к югу от башни Y-0. Лежит между двумя корнями зандер, рядом со скелетом.',
            level: undefined,
        },
        ]
    },
    Sneak: {
        name: 'Скрытность',
        Description: 'Чем выше навык "Скрытность", тем легче вам спрятаться, что-то украсть или залезть кому-то в карман. При успешной атаке с использованием этого навыка вам автоматически засчитываеться критическое попадание.',
        Book_type: 'Боевой устав китайского спецназа',
        Books: new Map(
            [[1, {
                location: 'Гудспрингс',
                details: 'В домике Труди, на средней полке под книгой. До окончания квеста «Текли ручьи…» будет считаться кражей.',
                level: undefined,
            }],
            [2, {
                location: 'Лагерь Сёрчлайт',
                details: 'Церковь на востоке, В подвале с гекконами. На каменном полу у металлических полок.',
                level: undefined,
            }],
            [3, {
                location: 'Фермы издольщиков НКР',
                details: 'В фермерском домике, от гл. входа (направо) первый домик, книга лежит перед столом (необходимо украсть).',
                level: undefined,
            }],
            [4, {
                location: 'Убежище 3',
                details: 'В запертой (50 % Взлома) комнате администратора, на нижней полке.',
                level: undefined,
            }],
            [5, {
                location: 'Крыша Санстоун-тауэр.   ',
                details: 'Помещение ведущее к пусковой шахте Эштона. Второй этаж, считая снизу вверх. Книга не видна так как книжная полка вплотную придвинута лицевой стороной к стене. Достаётся взрывчаткой.',
                level: undefined,
            }],
            [6, {
                location: 'X-13 Исследовательский комплекс   ',
                details: 'Возле нагрудника прототипа стелс-брони в юго-западном углу лаборатории.',
                level: undefined,
            }],
            [7, {
                location: 'X-13 Исследовательский комплекс   ',
                details: 'X-13 лаборатория по тестированию стелс-технологий. Сейф с наградой, после завершения задания «Проект X-13».',
                level: undefined,
            }],
            ]),
    },
    Speech: {
        name: 'Красноречие',
        Description: 'Навык "Красноречие" определяет насколько вы можете влиять на собеседника во время разгововора, и получать доступ к информации, которая иначе осталась бы для вас тайной.',
        Book_type: 'Ложь: учебник для конгрессмена',
        Books: [{
            location: 'Исправительное учреждение НКР',
            details: 'В здании администрации на втором этаже, в комнате напротив комнаты Эдди, слева, в дальнем углу, на столе (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Фрисайд',
            details: 'В здании «Сирулиен роботикс» (неотмечаемая локация), на полу в комнате с компьютерами.',
            level: undefined,
        },
        {
            location: 'Ранчо «Перекати-поле»',
            details: 'На полке шкафчика, в верхней комнате с шахматной доской (необходимо украсть).',
            level: undefined,
        },
        {
            location: 'Шахта «Лаки Джим»',
            details: 'В доме рядом с шахтой, на нижней полке стеллажа по левой стороне, под варминт-винтовкой.',
            level: undefined,
        },
        {
            location: 'Административное здание 3-й улицы   ',
            details: 'Через канализацию поднимаемся на 3-й этаж. В дальнем конце помещения, лежит за «медицинским столом», почти у самого окна. Может вывалиться из здания после детонации боеголовки.',
            level: undefined,
        },
        ]
    },
    Survival: {
        name: 'Выживание',
        Description: 'Навык "Выживание" определяет, сколько очков здоровья вы восстанавливаете употребляя пищу и напитки. Он также помогает вам готовить пищу у лагерного костра.',
        Book_type: 'Руководство по выживанию на пустошах',
        Books: [{
            location: 'Радиостанция «Одинокий волк»',
            details: 'В трейлере.',
            level: undefined,
        },
        {
            location: 'Животноводческая ферма Мэтью',
            details: 'На втором этаже сарая, дальнего от загона.',
            level: undefined,
        },
        {
            location: 'Лагерь в Мескитских горах',
            details: 'В палатке на запад от лагерного костра, за ящиком с инструментами на земле.',
            level: undefined,
        },
        {
            location: 'Платформа мародёров',
            details: 'На северной платформе, среди других книг рядом с упавшей металлической полкой.',
            level: undefined,
        },
        ]
    },
    Unarmed: {
        name: 'Без оружия',
        Description: 'Навык "Без оружия" используеться в схватке без оружия или с таким оружием, как обычные или силовые и перчатки вытеснители.',
        Book_type: 'Кулачный бой в иллюстрациях',
        Books: [{
            location: 'Ниптонская дорожная стоянка',
            details: 'В магазине, на полке слева.',
            level: undefined,
        },
        {
            location: 'Убежище 11',
            details: 'В жилых помещениях, женская комната (Female Dorm) #1, рядом с упавшим комодом.',
            level: undefined,
        },
        {
            location: 'Рыбацкая хижина',
            details: 'На столике возле кровати.',
            level: undefined,
        },
        {
            location: 'Северные ворота Стрипа, казино «Топс»',
            details: 'В президентском номере, на маленьком столе недалеко от столов для бильярда.',
            level: undefined,
        },
        {
            location: 'Водоочистной завод.   ',
            details: 'Последняя комната с терминалом менеджера. Правее плаката «Ральфи» в углу за шкафами.',
            level: undefined,
        },
        ]
    },
}




OR_FNV_Abilities = {
    'Friend of the Night': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 6, Скрытность 30',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 6 && char.skills['Sneak'].value(char) >= 30);
        },
        type: 'levelup',
    },
    'Intense Training': {
        level: 2,
        level_taken: 2,
        rangs: 10,
        rang: 0,
        requirements_text: '',
        Increased: [],
        Add(char) {
            char.SpecialWindowStats.points = 1;
            this.rang -= 1;
            char.level -= 2;
            let func = () => {
                for (key in char.SPECIAL) {
                    if (char.SpecialWindowStats.SPECIAL[key] != char.SPECIAL[key].value) {
                        char.SPECIAL[key].value != char.SpecialWindowStats.SPECIAL[key];
                        this.Increased.push(key);
                        char.SPECIAL[key].value = char.SpecialWindowStats.SPECIAL[key];
                        char.level += 2;
                        this.rang += 1;
                        char.Abilities_Added.get('Интенсивная тренировка').style.display = "grid";
                        FNV(char);
                    }
                }
            }
            SpecialWindowShow(char, func);
        },
        Remove() {
            this.Increased.pop();
        },
        *RangsAdded() {
            let rangs = '';
            // for (let i of this.Increased) { 
            //   rangs += i;

            // yield i;

            //   }
            yield this.Increased[0];
            yield this.Increased[1];
            yield this.Increased[2];
            yield this.Increased[3];
            yield this.Increased[4];
            yield this.Increased[5];
            yield this.Increased[6];
            yield this.Increased[7];
            yield this.Increased[8];
            yield this.Increased[9];
            yield this.Increased[10];
        },
        type: 'levelup',
    },
    'Light Touch': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 6, Ремонт: 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 6 && char.skills.Repair.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Junk Rounds': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'УДЧ 6 Ремонт: 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Luck.value >= 6 && char.skills.Repair.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Hunter': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 30',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 30);
        },
        type: 'levelup',
    },
    'Swift Learner': {
        level: 2,
        level_taken: 2,
        rangs: 3,
        rang: 0,
        requirements_text: 'ИНТ 4',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 4);
        },
        type: 'levelup',
    },
    'Old World Gourmet': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 6, Выживание: 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 6 && char.skills.Survival.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Heave, Ho!': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 5, Взрывчатка 30',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 5 && char.skills.Explosives.value(char) >= 30);
        },
        type: 'levelup',
    },
    'In Shining Armor': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'Ремонт: 20 Наука: 70',
        RequirementsCheck(char) {
            return (char.skills.Repair.value(char) >= 20 && char.skills.Science.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Retention': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 5);
        },
        type: 'levelup',
    },
    'Black Widow/ Lady Killer': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'Персонаж мужского/женского пола пола',
        type: 'levelup',
    },
    'Cherchez La Femme/ Confirmed Bachelor': {
        level: 2,
        level_taken: 2,
        rangs: 1,
        rang: 0,
        requirements_text: 'Персонаж мужского/женского пола пола',
        type: 'levelup',
    },
    'Run \'n Gun': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие 45 или Энергетическое оружие 45',
        RequirementsCheck(char) {
            return (char.skills.E_W.value(char) >= 45 && char.skills.Guns.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Rad Child': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 70',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Cannibal': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Educated': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 4',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 4);
        },
        Add(char) {
            char.skill_pointsBonus += 2;
        },
        Remove() {
            char.skill_pointsBonus += 2;
        },
        type: 'levelup',
    },
    'Comprehension': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 4',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 4);
        },
        Add(char) {
            char.skillbook_bonus += 1;
        },
        Remove() {
            char.skillbook_bonus -= 1;
        },
        type: 'levelup',
    },
    'Travel Light': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 45',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Entomologist': {
        level: 4,
        level_taken: 4,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 4, Выживание 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 6 && char.skills.Survival.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Ferocious Loyalty': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'ХАР 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Charisma.value >= 6);
        },
        type: 'levelup',
    },
    'Mad Bomber': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Ремонт 45, Взрывчатка 45',
        RequirementsCheck(char) {
            return (char.skills.Repair.value(char) >= 45 && char.skills.Explosives.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Shotgun Surgeon': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие 45',
        RequirementsCheck(char) {
            return (char.skills.Guns.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Gunslinger': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Fortune Finder': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'УДЧ 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Luck.value >= 5);
        },
        type: 'levelup',
    },
    'Bloody Mess': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'The Professional': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Скрытность 70',
        RequirementsCheck(char) {
            return (char.skills.Sneak.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Vigilant Recycler': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Наука 70',
        RequirementsCheck(char) {
            return (char.skills.Science.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Hand Loader': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Ремонт 70',
        RequirementsCheck(char) {
            return (char.skills.Repair.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Lead Belly': {
        level: 6,
        level_taken: 6,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 40 или ВНС 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 5 || char.skills.Survival.value(char) >= 40);
        },
        type: 'levelup',
    },
    'Toughness': {
        level: 6,
        level_taken: 6,
        rangs: 2,
        rang: 0,
        requirements_text: 'ВНС 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 5);
        },
        Add(char) {
            char.derived['dt'].base += 3;
        },
        Remove() {
            char.derived['dt'].base -= 3;
        },
        type: 'levelup',
    },
    'Demolition Expert': {
        level: 6,
        level_taken: 6,
        rangs: 3,
        rang: 0,
        requirements_text: 'Взрывчатка 50',
        RequirementsCheck(char) {
            return ((char.skills.Explosives.value(char) >= 50));
        },
        type: 'levelup',
    },
    'Pack Rat': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 5, Бартер 70',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 5 && char.skills.Barter.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Quick Draw': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 5);
        },
        type: 'levelup',
    },
    'Home on the Range': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 70',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Sneering Imperialist': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Stonewall': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 6, ВНС 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 6 && char.SPECIAL.Endurance.value >= 6);
        },
        type: 'levelup',
    },
    'Cowboy': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие 45, Холодное оружие 45',
        RequirementsCheck(char) {
            return (char.skills.Guns.value(char) >= 45 && char.skills.M_W.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Commando': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Strong Back': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 5, ВНС 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 5 && char.SPECIAL.Endurance.value >= 5);
        },
        Add(char) {
            char.derived['mw'].base += 50;
        },
        Remove() {
            char.derived['mw'].base -= 50;
        },
        type: 'levelup',
    },
    'Tribal Wisdom': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 70',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 70);
        },
        Add(char) {
            char.derived['pr'].base += 25;
        },
        Remove() {
            char.derived['pr'].base -= 25;
        },
        type: 'levelup',
    },
    'Grunt': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие 45, Взрывчатка 20',
        RequirementsCheck(char) {
            return (char.skills.Guns.value(char) >= 45 && char.skills.Explosives.value(char) >= 20);
        },
        type: 'levelup',
    },
    'Living Anatomy': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Медицина 70',
        RequirementsCheck(char) {
            return (char.skills.Medicine.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Rad Resistance': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 5, Выживание 40',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 5 && char.skills.Survival.value(char) >= 40);
        },
        Add(char) {
            char.derived['rr'].base += 25;
        },
        Remove() {
            char.derived['rr'].base -= 25;
        },
        type: 'levelup',
    },
    'Terrifying Presence': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'Красноречие 70',
        RequirementsCheck(char) {
            return (char.skills.Speech.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Super Slam!': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 6, Холодное оружие 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 6 && char.skills.M_W.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Scrounger': {
        level: 8,
        level_taken: 8,
        rangs: 1,
        rang: 0,
        requirements_text: 'УДЧ 5',
        RequirementsCheck(char) {
            return (char.SPECIAL.Luck.value >= 5);
        },
        type: 'levelup',
    },
    'Fight the Power': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Nerd Rage': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 5, Наука 50',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 5 && char.skills.Science.value(char) >= 50);
        },
        type: 'levelup',
    },
    'And Stay Back': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие: 70',
        RequirementsCheck(char) {
            return (char.skills.Guns.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Animal Friend': {
        level: 10,
        level_taken: 10,
        rangs: 2,
        rang: 0,
        requirements_text: 'ХАР 6, Выживание 45',
        RequirementsCheck(char) {
            return (char.SPECIAL.Charisma.value >= 6 && char.skills.Survival.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Here and Now': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Math Wrath': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'Наука 70',
        RequirementsCheck(char) {
            return (char.skills.Science.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Miss Fortune': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'УДЧ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Luck.value >= 6);
        },
        type: 'levelup',
    },
    'Night Person': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Mister Sandman': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'Скрытность 60',
        RequirementsCheck(char) {
            return (char.skills.Sneak.value(char) >= 60);
        },
        type: 'levelup',
    },
    'Plasma Spaz': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'Энергетическое оружие 70',
        RequirementsCheck(char) {
            return (char.skills.E_W.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Mysterious Stranger': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: 'УДЧ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Luck.value >= 6);
        },
        type: 'levelup',
    },
    'Finesse': {
        level: 10,
        level_taken: 10,
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
        Add(char) {
            char.derived['cs'].base += 5;
        },
        Remove() {
            char.derived['cs'].base -= 5;
        },
    },
    'Alertness': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП между 6 и 9',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Perception.value >= 9);
        },
        type: 'levelup',
    },
    'Silent Running': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 6, Скрытность 50',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 6 && char.skills.Sneak.value(char) >= 50);
        },
        type: 'levelup',
    },
    'Long Haul': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 6, Бартер 70',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 6 && char.skills.Barter.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Splash Damage': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'Взрывчатка 70',
        RequirementsCheck(char) {
            return (char.skills.Explosives.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Hobbler': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 7);
        },
        type: 'levelup',
    },
    'Hit the Deck!': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'Взрывчатка 70',
        RequirementsCheck(char) {
            return (char.skills.Explosives.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Unstoppable Force': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 7, Холодное оружие 90',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 7 && char.skills.M_W.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Ghastly Scavenger': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'способность Каннибал',
        RequirementsCheck(char) {
            return (char.Main_Abilities['Cannibal'].rang > 0);
        },
        type: 'levelup',
    },
    'Pyromaniac': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'Взрывчатка 60',
        RequirementsCheck(char) {
            return (char.skills.Explosives.value(char) >= 60);
        },
        type: 'levelup',
    },
    'Piercing Strike': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'Без оружия 70',
        RequirementsCheck(char) {
            return (char.skills.Unarmed.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Robotics Expert': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'Наука 50',
        RequirementsCheck(char) {
            return (char.skills.Science.value(char) >= 50);
        },
        type: 'levelup',
    },
    'Sniper': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 6, ЛОВ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Perception.value >= 6);
        },
        type: 'levelup',
    },
    'Heavyweight': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 7);
        },
        type: 'levelup',
    },
    'Fast Metabolism': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Life Giver': {
        level: '12',
        level_taken: '12',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 6',
        Add(char) {
            char.derived['hp'].base += 25;
        },
        Remove() {
            char.derived['hp'].base -= 25;
        },
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 6);
        },
        type: 'levelup',
    },
    'Adamantium Skeleton': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Purifier': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Light Step': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 6, ЛОВ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Agility.value >= 6);
        },
        type: 'levelup',
    },
    'Jury Rigging': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: 'Ремонт 90',
        RequirementsCheck(char) {
            return (char.skills.Repair.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Chemist': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: 'Медицина 60',
        RequirementsCheck(char) {
            return (char.skills.Medicine.value(char) >= 60);
        },
        type: 'levelup',
    },
    'Center of Mass': {
        level: '14',
        level_taken: '14',
        rangs: 1,
        rang: 0,
        requirements_text: 'Оружие 70',
        RequirementsCheck(char) {
            return (char.skills.Guns.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Action Boy/Action Girl': {
        level: '16',
        level_taken: '16',
        rangs: 2,
        rang: 0,
        requirements_text: 'ЛОВ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 6);
        },
        Add(char) {
            char.derived['ap'].base += 15;
        },
        Remove() {
            char.derived['ap'].base -= 15;
        },
        type: 'levelup',
    },
    'Better Criticals': {
        level: '16',
        level_taken: '16',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 6, УДЧ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 6 && char.SPECIAL.Luck.value >= 6);
        },
        type: 'levelup',
    },
    'Weapon Handling': {
        level: '16',
        level_taken: '16',
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ < 10',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value < 10);
        },
        type: 'levelup',
    },
    'Tag!': {
        level: '16',
        level_taken: '16',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        Add(char) {
            char.prize_skillsNum += 1;
        },
        Remove() {
            char.prize_skillsNum -= 1;
            char.PrizeSkills.pop();
        },
        type: 'levelup',
    },
    'Meltdown': {
        level: '16',
        level_taken: '16',
        rangs: 1,
        rang: 0,
        requirements_text: 'Энергетическое оружие 90',
        RequirementsCheck(char) {
            return (char.skills.E_W.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Chem Resistant': {
        level: '16',
        level_taken: '16',
        rangs: 1,
        rang: 0,
        requirements_text: 'Медицина 60',
        RequirementsCheck(char) {
            return (char.skills.Medicine.value(char) >= 60);
        },
        type: 'levelup',
    },
    'Infiltrator': {
        level: '18',
        level_taken: '18',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВСП 7, Взлом 70',
        RequirementsCheck(char) {
            return (char.SPECIAL.Perception.value >= 7 && char.skills.Lockpick.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Walker Instinct': {
        level: '18',
        level_taken: '18',
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 50',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 50);
        },
        type: 'levelup',
    },
    'Concentrated Fire': {
        level: '18',
        level_taken: '18',
        rangs: 1,
        rang: 0,
        requirements_text: 'Энергетическое оружие 60, Оружие 60',
        RequirementsCheck(char) {
            return (char.skills.E_W.value(char) >= 60 && char.skills.Guns.value(char) >= 60);
        },
        type: 'levelup',
    },
    'Paralyzing Palm': {
        level: '18',
        level_taken: '18',
        rangs: 1,
        rang: 0,
        requirements_text: 'Без оружия 70',
        RequirementsCheck(char) {
            return (char.skills.Unarmed.value(char) >= 45);
        },
        type: 'levelup',
    },
    'Computer Whiz': {
        level: '18',
        level_taken: '18',
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 7, Наука 70',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 7 && char.skills.Science.value(char) >= 70);
        },
        type: 'levelup',
    },
    'Atomic!': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 6);
        },
        type: 'levelup',
    },
    'Explorer': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Ninja': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: 'Холодное оружие 80, Скрытность 80',
        RequirementsCheck(char) {
            return (char.skills.M_W.value(char) >= 80 && char.skills.Sneak.value(char) >= 80);
        },
        type: 'levelup',
    },
    'Eye for Eye': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Them\'s Good Eatin': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 55',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 55);
        },
        type: 'levelup',
    },
    'Mile in Their Shoes': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 25',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 25);
        },
        type: 'levelup',
    },
    'Grim Reaper\'s Sprint': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Solar Powered': {
        level: '20',
        level_taken: '20',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 7);
        },
        type: 'levelup',
    },
    'Spray and Pray': {
        level: '22',
        level_taken: '22',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Laser Commander': {
        level: '22',
        level_taken: '22',
        rangs: 1,
        rang: 0,
        requirements_text: 'Энергетическое оружие 90',
        RequirementsCheck(char) {
            return (char.skills.E_W.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Voracious Reader': {
        level: '22',
        level_taken: '22',
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 7);
        },
        type: 'levelup',
    },
    'Irradiated Beauty': {
        level: '22',
        level_taken: '22',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 8',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 8);
        },
        type: 'levelup',
    },
    'Nuka Chemist': {
        level: '22',
        level_taken: '22',
        rangs: 1,
        rang: 0,
        requirements_text: 'Наука 90',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Slayer': {
        level: '24',
        level_taken: '24',
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 7, Без оружия 90',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 7 && char.skills.Unarmed.value(char) >= 90);
        },
        type: 'levelup',
    },
    'Lessons Learned': {
        level: '26',
        level_taken: '26',
        rangs: 1,
        rang: 0,
        requirements_text: 'ИНТ 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Intelligence.value >= 6);
        },
        type: 'levelup',
    },
    'Nerves of Steel': {
        level: '26',
        level_taken: '26',
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 7);
        },
        type: 'levelup',
    },
    'Tunnel Runner': {
        level: '26',
        level_taken: '26',
        rangs: 1,
        rang: 0,
        requirements_text: 'ЛОВ 8',
        RequirementsCheck(char) {
            return (char.SPECIAL.Agility.value >= 8);
        },
        type: 'levelup',
    },
    'Roughin\' It': {
        level: '28',
        level_taken: '28',
        rangs: 1,
        rang: 0,
        requirements_text: 'Выживание 100',
        RequirementsCheck(char) {
            return (char.skills.Survival.value(char) >= 100);
        },
        type: 'levelup',
    },
    'Rad Absorption': {
        level: '28',
        level_taken: '28',
        rangs: 1,
        rang: 0,
        requirements_text: 'ВНС 7',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 7);
        },
        type: 'levelup',
    },
    'Burden to Bear': {
        level: '30',
        level_taken: '30',
        rangs: 1,
        rang: 0,
        requirements_text: 'СИЛ 6, ВНС 6',
        RequirementsCheck(char) {
            return (char.SPECIAL.Strength.value >= 6 && char.SPECIAL.Endurance.value >= 6);
        },
        Add(char) {
            char.derived['mw'].base += 50;
        },
        Remove() {
            char.derived['mw'].base -= 50;
        },
        type: 'levelup',
    },
    'Implant GRX': {
        level: '30',
        level_taken: '30',
        rangs: 2,
        rang: 0,
        requirements_text: 'ВНС 8',
        RequirementsCheck(char) {
            return (char.SPECIAL.Endurance.value >= 8);
        },
        type: 'levelup',
    },
    'Broad Daylight': {
        level: '36',
        level_taken: '36',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Certified Tech': {
        level: '40',
        level_taken: '40',
        rangs: 1,
        rang: 0,
        requirements_text: '',
        type: 'levelup',
    },
    'Just Lucky I\'m Alive': {
        level: '50',
        level_taken: '50',
        rangs: 1,
        rang: 0,
        requirements_text: 'Карма между −250 и 250',
        // RequirementsCheck(char) {
        //   return (char.Main_Abilities['Неужели ещё жив'].rang == 0);
        // },
        type: 'levelup',
    },
    'Thought You Died': {
        level: '50',
        level_taken: '50',
        rangs: 1,
        rang: 0,
        requirements_text: 'Карма больше 250',
        // RequirementsCheck(char) {
        //   return (char.Main_Abilities['Выжить — это счастье'].rang == 0);
        // },
        type: 'levelup',
    },
    'Ain\'t Like That Now': {
        level: '50',
        level_taken: '50',
        rangs: 1,
        rang: 0,
        requirements_text: 'Карма больше 250',
        // RequirementsCheck(char) {
        //   return (char.Main_Abilities['Выжить — это счастье'].rang == 0);
        // },
        type: 'levelup',
    },
    'Strength Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Strength'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Strength'].value += 1;
        },
        Remove() {
            char.SPECIAL['Strength'].value -= 1;
        },
    },
    'Perception Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Perception'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Perception'].value += 1;
        },
        Remove() {
            char.SPECIAL['Perception'].value -= 1;
        },
    },
    'Endurance Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Endurance'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Endurance'].value += 1;
        },
        Remove() {
            char.SPECIAL['Endurance'].value -= 1;
        },
    },
    'Charisma Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Charisma'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Charisma'].value += 1;
        },
        Remove() {
            char.SPECIAL['Charisma'].value -= 1;
        },
    },
    'Intelligence Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Intelligence'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Intelligence'].value += 1;
        },
        Remove() {
            char.SPECIAL['Intelligence'].value -= 1;
        },
    },
    'Agility Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Agility'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Agility'].value += 1;
        },
        Remove() {
            char.SPECIAL['Agility'].value -= 1;
        },
    },
    'Luck Implant': {
        requirements_text: 'Купить у доктора Усанаги за 4000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
        RequirementsCheck(char) {
            return char.SPECIAL['Luck'].value < 10;
        },
        Add(char) {
            char.SPECIAL['Luck'].value += 1;
        },
        Remove() {
            char.SPECIAL['Luck'].value -= 1;
        },
    },
    'Monocyte Breeder': {
        requirements_text: 'Купить у доктора Усанаги за 12000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
    },
    'Sub-Dermal Armor': {
        requirements_text: 'Купить у доктора Усанаги за 8000 крышек',
        rangs: 1,
        rang: 0,
        type: 'implant',
    },
    'Coin Operator': {
        requirements_text: 'Диалог с Кристин',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Ghost Hunter': {
        requirements_text: 'Диалог с Догом',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Sierra Madre Martini': {
        requirements_text: 'Диалог с Дином Домино',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Elijah\'s Last Words': {
        requirements_text: 'Отдать Веронике голосообщение от Элайджи',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Elijah\'s Ramblings'].rang == 0);
        },
        type: 'special',
    },
    'Elijah\'s Ramblings': {
        requirements_text: 'Оставить у себя голосообщение Элайджи после того, как Вероника откроет его',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Elijah\'s Last Words'].rang == 0);
        },
        type: 'special',
    },
    'Brainless': {
        requirements_text: 'Первоначальный диалог с доктором Клейном в Мозговом Центре.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Big Brained'].rang == 0);
        },
        Add(char) {
            char.derived['dr'].mod += 5;
        },
        Remove() {
            char.derived['dr'].mod -= 5;
        },
        type: 'special',
    },
    'Heartless': {
        requirements_text: 'Первоначальный диалог с доктором Клейном в Мозговом Центре.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Cardiac Arrest'].rang == 0);
        },
        Add(char) {
            char.derived['pr'].base += 100;
        },
        Remove() {
            char.derived['pr'].base -= 100;
        },
        type: 'special',
    },
    'Spineless': {
        requirements_text: 'Первоначальный диалог с доктором Клейном в Мозговом Центре.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Reinforced Spine'].rang == 0);
        },
        Add(char) {
            char.derived['dr'].base += 1;
        },
        Remove() {
            char.derived['dr'].base -= 1;
        },
        type: 'special',
    },
    'Big Brained': {
        requirements_text: 'Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Brainless'].rang == 0);
        },
        Add(char) {
            char.derived['dr'].mod += 10;
        },
        Remove() {
            char.derived['dr'].mod -= 10;
        },
        type: 'special',
    },
    'Cardiac Arrest': {
        requirements_text: 'Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Heartless'].rang == 0);
        },
        Add(char) {
            char.derived['pr'].base += 50;
        },
        Remove() {
            char.derived['pr'].base -= 50;
        },
        type: 'special',
    },
    'Reinforced Spine': {
        requirements_text: 'Возможно получить у Автодока Умного Дома после завершения квеста «Блюз Старого Мира».',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Spineless'].rang == 0);
        },
        Add(char) {
            char.derived['dr'].base += 2;
        },
        Remove() {
            char.derived['dr'].base -= 2;
        },
        type: 'special',
    },
    'DNAgent': {
        requirements_text: 'Завершение теста на возвращение данных X-8.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'ДНКасадор': {
        requirements_text: 'Убить двух Касадоров для 1 ранга, ещё трёх для 2 ранга и ещё пятерых для 3 ранга. Все убийства должны быть совершены в Большой Горе.',
        rangs: 3,
        rang: 0,
        type: 'special',
    },
    'Implant C-13': {
        requirements_text: 'Возможно получить у Автодока за 8000 крышек.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Implant M-5': {
        requirements_text: 'Возможно получить у Автодока за 10000 крышек.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Implant Y-3': {
        requirements_text: 'Возможно получить у Автодока за 12000 крышек.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Implant Y-7': {
        requirements_text: 'Возможно получить у Автодока за 20000 крышек.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'The Bear-Slayer': {
        requirements_text: 'Запустить ядерные ракеты по НКР.',
        rangs: 1,
        rang: 0,
        Increased: [],
        RequirementsCheck(char) {
            return (char.Main_Abilities['Scourge of the East'].rang == 0 && char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['Divide Survivor'].rang == 0);
        },
        type: 'special',
        Add(char) {
            char.SpecialWindowStats.points = 1;
            this.rang -= 1;
            char.level -= 2;
            let func = () => {
                for (key in char.SPECIAL) {
                    if (char.SpecialWindowStats.SPECIAL[key] != char.SPECIAL[key].value) {
                        char.SPECIAL[key].value != char.SpecialWindowStats.SPECIAL[key];
                        this.Increased.push(key);
                        char.SPECIAL[key].value = char.SpecialWindowStats.SPECIAL[key];
                        char.level += 2;
                        this.rang += 1;
                        char.Abilities_Added.get('Интенсивная тренировка').style.display = "grid";
                        FNV(char);
                    }
                }
            }
            SpecialWindowShow(char, func);
        },
        Remove() {
            this.Increased.pop();
        },
    },
    'Scourge of the East': {
        requirements_text: 'Запустить ядерные ракеты по Легиону Цезаря.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['Divide Survivor'].rang == 0 && char.Main_Abilities['The Bear-Slayer'].rang == 0);
        },
        type: 'special',
        Increased: [],
        type: 'special',
        Add(char) {
            char.SpecialWindowStats.points = 1;
            this.rang -= 1;
            char.level -= 2;
            let func = () => {
                for (key in char.SPECIAL) {
                    if (char.SpecialWindowStats.SPECIAL[key] != char.SPECIAL[key].value) {
                        char.SPECIAL[key].value != char.SpecialWindowStats.SPECIAL[key];
                        this.Increased.push(key);
                        char.SPECIAL[key].value = char.SpecialWindowStats.SPECIAL[key];
                        char.level += 2;
                        this.rang += 1;
                        char.Abilities_Added.get('Интенсивная тренировка').style.display = "grid";
                        FNV(char);
                    }
                }
            }
            SpecialWindowShow(char, func);
        },
        Remove() {
            this.Increased.pop();
        },
    },
    'Dead Man\'s Burden': {
        requirements_text: 'Запустить ядерные ракеты по Легиону Цезаря и НКР.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Divide Survivor'].rang == 0 && char.Main_Abilities['The Bear-Slayer'].rang == 0 && char.Main_Abilities['Scourge of the East'].rang == 0);
        },
        type: 'special',
        Increased: [],
        RequirementsCheck(char) {
            return (char.Main_Abilities['Scourge of the East'].rang == 0 && char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['Divide Survivor'].rang == 0);
        },
        type: 'special',
        Add(char) {
            char.SpecialWindowStats.points = 1;
            this.rang -= 1;
            char.level -= 2;
            let func = () => {
                for (key in char.SPECIAL) {
                    if (char.SpecialWindowStats.SPECIAL[key] != char.SPECIAL[key].value) {
                        char.SPECIAL[key].value != char.SpecialWindowStats.SPECIAL[key];
                        this.Increased.push(key);
                        char.SPECIAL[key].value = char.SpecialWindowStats.SPECIAL[key];
                        char.level += 2;
                        this.rang += 1;
                        char.Abilities_Added.get('Интенсивная тренировка').style.display = "grid";
                        FNV(char);
                    }
                }
            }
            SpecialWindowShow(char, func);
        },
        Remove() {
            this.Increased.pop();
        },
    },
    'Divide Survivor': {
        requirements_text: 'Остановить запуск ракет.',
        rangs: 1,
        rang: 0,
        RequirementsCheck(char) {
            return (char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['The Bear-Slayer'].rang == 0 && char.Main_Abilities['Scourge of the East'].rang == 0);
        },
        type: 'special',
        Increased: [],
        RequirementsCheck(char) {
            return (char.Main_Abilities['Scourge of the East'].rang == 0 && char.Main_Abilities['Dead Man\'s Burden'].rang == 0 && char.Main_Abilities['Divide Survivor'].rang == 0);
        },
        type: 'special',
        Add(char) {
            char.SpecialWindowStats.points = 1;
            this.rang -= 1;
            char.level -= 2;
            let func = () => {
                for (key in char.SPECIAL) {
                    if (char.SpecialWindowStats.SPECIAL[key] != char.SPECIAL[key].value) {
                        char.SPECIAL[key].value != char.SpecialWindowStats.SPECIAL[key];
                        this.Increased.push(key);
                        char.SPECIAL[key].value = char.SpecialWindowStats.SPECIAL[key];
                        char.level += 2;
                        this.rang += 1;
                        char.Abilities_Added.get('Интенсивная тренировка').style.display = "grid";
                        FNV(char);
                    }
                }
            }
            SpecialWindowShow(char, func);
        },
        Remove() {
            this.Increased.pop();
        },
    },
    'Lonesome Road': {
        requirements_text: 'Оставить ЭД-Э в Храме Улисса.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Marked': {
        requirements_text: 'Убить троих именованных Меченых.',
        rangs: 1,
        rang: 0,
        type: 'special',
    },
    'Legion Assault': {
        requirements_text: 'Поговорить с Луцием; Без оружия:50; нейтрал в Легионе',
    },
    'Ranger Takedown': {
        requirements_text: 'Поговорить с рейнджером Энди',
    },
    'Khan Trick': {
        requirements_text: 'Выполнить квест «Медовый месяц в Аба-Даба»',
    },
    'Scribe Counter': {
        requirements_text: 'Передать Веронике костюм — наряд общества «Белая перчатка»',
    }
}