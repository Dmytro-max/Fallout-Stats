"use strict";
class FNVChar {
  constructor(Special, Special_Lan, Abilities, Abilities_Lan, Skills, Skills_Lan, Traits, Traits_Lan, Derived, Derived_Lan) {
    // document.body.style.backgroundImage = "url('Backgrounds/New Vegas.webp')";

    this.skillBooks = {
      Sneak: {
        name: 'Боевой устав китайского спецназа',
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
          ])
      },
      Barter: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Примм',
          details: 'В отеле «Бизон Стив», на полу за прилавком сувенирного магазина.',
          level: undefined,
        }],
        [2, {
          location: 'Офисы «Элайд текнолоджиз»',
          details: 'В комнате на западе от входа— в юго-западном углу, перед автоматом с ядер-колой.',
          level: undefined,
        }],
        [3, {
          location: 'Хибара фальшивокрышечника',
          details: 'В задней части погреба, на чемодане возле кровати.',
          level: undefined,
        }],
        [4, {
          location: 'Убежище 22',
          details: 'Пятый уровень — уничтожение вредителей. На север от лифта по коридору в лабораторию, на столе рядом с колбами.',
          level: undefined,
        }],
        [5, {
          location: 'Сторожевой пост меченых   ',
          details: 'Подвал. Справа от входа на угловом шкафчике.',
          level: undefined,
        }],
        ])
      },
      E_W: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Штаб-квартира РЕПКОНН',
          details: 'На первом этаже за дверью («Наука» 100), можно попасть со 2-го этажа через пролом в полу («Взлом» 75) или используя ключ-карту Пирса Айсли (можно найти на третьем этаже в дипломате рядом со скелетом).',
          level: undefined,
        }],
        [2, {
          location: 'Штаб-квартира РЕПКОНН',
          details: 'На втором этаже рядом с работающим терминалом (сразу после входа на этаж идти по левой стенке).',
          level: undefined,
        }],
        [3, {
          location: 'Хидден-Вэли',
          details: 'Офис доктора Шуллер. В белом ящике возле стола (необходимо украсть).',
          level: undefined,
        }],
        [4, {
          location: 'Старый ядерный полигон',
          details: 'Внутри лачуги, на маленьком столике напротив входа.',
          level: undefined,
        }],
        [5, {
          location: 'База Хоупвиль — штаб-квартира   ',
          details: 'Справа от входа на книжной полке.',
          level: undefined,
        }],
        ])
      },
      Explosives: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([
          [1, {
            location: 'Слоун (Барак рабочих)',
            details: 'Прямо в шкафу снизу (необходимо украсть).',
            level: undefined,
          }],
          [2, {
            location: 'Аванпост Мохаве (Казармы)',
            details: 'На нижней полке барной стойки напротив входа (необходимо украсть).',
            level: undefined,
          }],
          [3, {
            location: 'Пост рейнджеров «Фокстрот»',
            details: 'На столе около офицера связи.',
            level: undefined,
          }],
          [4, {
            location: 'Авиабаза Неллис (Дом Перл)',
            details: 'Книжная полка на правой стене от входа, стоит между книг (необходимо украсть).',
            level: undefined,
          }],
          [5, {
            location: 'Обрушившийся туннель   ',
            details: 'Справа от выхода — за мешками с песком, в ящике под плюшевым медведем.',
            level: undefined,
          }],
        ])
      },
      Guns: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([
          [1, {
            location: 'Пост Невадского дорожного патруля',
            details: 'На столе недалеко от входной двери.',
            level: undefined,
          }],
          [2, {
            location: 'Северные ворота Стрипа, казино «Гоморра»',
            details: 'Клуб Зоарра, на первой книжной полке слева В офисе Большого Сэла.',
            level: undefined,
          }],
          [3, {
            location: 'Хижина Рауля',
            details: 'Слева от входа, в деревянном ящике на полу.',
            level: undefined,
          }],
          [4, {
            location: 'Убежище 34',
            details: 'В оружейной. На металлическом столике между диванами, возле бильярдного стола.',
            level: undefined,
          }],
          [5, {
            location: 'Хоупвиль — оружейная   ',
            details: 'Правый дальный угол. Под столом.',
            level: undefined,
          }],
        ])
      },
      Lockpick: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Ранчо Вулфхорна',
          details: 'В доме, на полу у холодильника.',
          level: undefined,
        }],
        [2, {
          location: 'Логово старателей',
          details: 'Пещера. Барак. Средняя комната — спальня, в дальнем правом углу, на полу.',
          level: undefined,
        }],
        [3, {
          location: 'Шахта «Силвер-Пик»',
          details: 'В лачуге, справа от входа за двумя столами на дне открытого шкафа.',
          level: undefined,
        }],
        [4, {
          location: 'Биттер-Спрингс — рекреация',
          details: 'На столе в офисе рядом с разбитым компьютером.',
          level: undefined,
        }],
        [5, {
          location: 'Хоупвиль — мужское общежитие',
          details: 'В туалете под ящиком заметить сложно, нужно отодвинуть ящик',
          level: undefined,
        }],
        ])
      },
      Medicine: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Кратер в Мескитских горах',
          details: 'Внутри мотеля Хелла, справа от входа, на столе с радио, под глобусом.',
          level: undefined,
        }],
        [2, {
          location: 'Новак',
          details: 'В бунгало рейнджера Энди, на кровати (необходимо украсть).',
          level: undefined,
        }],
        [3, {
          location: 'ГЕЛИОС Один',
          details: 'На кровати в той же комнате, что и голозапись с паролем, верхний этаж основного здания. Сюда можно перейти по доскам из комнаты с дырой в полу.',
          level: undefined,
        }],
        [4, {
          location: 'Тайная квартира Последователей',
          details: 'Во второй комнате, на столике у кровати.',
          level: undefined,
        }],
        [5, {
          location: 'Пещера Аваддона   ',
          details: 'Слева от выхода на крышу отеля «Боксвуд», в погребённом здании под плакатом «Ральфи».',
          level: undefined,
        }],
        ])
      },
      M_W: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Потайной пещерный склад',
          details: 'Наверху одного из больших металлических контейнеров справа. Может оказаться за ящиками. (Для входа в локацию необходим «Взлом» 50).',
          level: undefined,
        }],
        [2, {
          location: 'Коттонвуд-Коув',
          details: 'В комнате на втором этаже штаб-квартиры, на прикроватном столике (необходимо украсть).',
          level: undefined,
        }],
        [3, {
          location: 'Пещера каннибала Джонсона',
          details: 'На матрасе недалеко от костра (необходимо украсть).',
          level: undefined,
        }],
        [4, {
          location: 'Джейкобстаун',
          details: 'В первом бунгало по правую сторону, на полу у плиты.',
          level: undefined,
        }],
        [5, {
          location: 'Хоупвиль — женское общежитие    ',
          details: 'В дальней части казармы, на маленьком журнальном столике прямо под испорченной книгой, заметить сложно, не подняв или подвинув последнюю.',
          level: undefined,
        }],
        ])
      },
      Repair: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Слоун',
          details: 'В бараке рабочих, на полке слева от входа (необходимо украсть).',
          level: undefined,
        }],
        [2, {
          location: 'Заброшенный бункер БС',
          details: 'В офисных помещениях, на металлическом подоконнике, напротиВ верстака для снаряжения патронов.',
          level: undefined,
        }],
        [3, {
          location: 'Ветроэлектростанция Южной Невады',
          details: 'В лачуге, на столе.',
          level: undefined,
        }],
        [4, {
          location: 'Авиабаза Неллис',
          details: 'В доме Адепта, на столе у левой стены (необходимо украсть).',
          level: undefined,
        }],
        [5, {
          location: '«Пуэста-дель-Соль» — подстанция',
          details: 'Самая южная точка на карте местности. На верхнем ярусе возле терминала отключающего динамики и трупа загороженного растяжкой.',
          level: undefined,
        }],
        ])
      },
      Science: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Ниптон',
          details: 'Последний этаж ратуши. В кабинете мэра, на столе.',
          level: undefined,
        }],
        [2, {
          location: 'Лагерь Форлорн-Хоуп',
          details: 'В штабной палатке майора Полатли, на столе в дальнем правом углу (необходимо украсть).',
          level: undefined,
        }],
        [3, {
          location: 'ГЕЛИОС Один',
          details: 'Получается в награду от Игнасио Риваса за распределение энергии от солнечных батарей на «Весь регион».',
          level: undefined,
        }],
        [4, {
          location: 'Штаб-квартира РЕПКОНН',
          details: 'Сувенирная лавка на первом этаже, в каморке («Взлом» 75).',
          level: undefined,
        }],
        [5, {
          location: 'Пивоварня',
          details: 'В подвале, в комнате с табличкой. На столе слева от входа.',
          level: undefined,
        }],
        [6, {
          location: 'Пульт управления ШПУ Эштон   ',
          details: '3 этаж. В углу на разрушенном полу недалеко от сейфа.',
          level: undefined,
        }],
        [7, {
          location: 'Y-0 Исследовательский центр   ',
          details: 'В углу ущелья, к югу от башни Y-0. Лежит между двумя корнями зандер, рядом со скелетом.',
          level: undefined,
        }],
        ])
      },
      Speech: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Исправительное учреждение НКР',
          details: 'В здании администрации на втором этаже, в комнате напротив комнаты Эдди, слева, в дальнем углу, на столе (необходимо украсть).',
          level: undefined,
        }],
        [2, {
          location: 'Фрисайд',
          details: 'В здании «Сирулиен роботикс» (неотмечаемая локация), на полу в комнате с компьютерами.',
          level: undefined,
        }],
        [3, {
          location: 'Ранчо «Перекати-поле»',
          details: 'На полке шкафчика, в верхней комнате с шахматной доской (необходимо украсть).',
          level: undefined,
        }],
        [4, {
          location: 'Шахта «Лаки Джим»',
          details: 'В доме рядом с шахтой, на нижней полке стеллажа по левой стороне, под варминт-винтовкой.',
          level: undefined,
        }],
        [5, {
          location: 'Административное здание 3-й улицы   ',
          details: 'Через канализацию поднимаемся на 3-й этаж. В дальнем конце помещения, лежит за «медицинским столом», почти у самого окна. Может вывалиться из здания после детонации боеголовки.',
          level: undefined,
        }],
        ])
      },
      Survival: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Радиостанция «Одинокий волк»',
          details: 'В трейлере.',
          level: undefined,
        }],
        [2, {
          location: 'Животноводческая ферма Мэтью',
          details: 'На втором этаже сарая, дальнего от загона.',
          level: undefined,
        }],
        [3, {
          location: 'Лагерь в Мескитских горах',
          details: 'В палатке на запад от лагерного костра, за ящиком с инструментами на земле.',
          level: undefined,
        }],
        [4, {
          location: 'Платформа мародёров',
          details: 'На северной платформе, среди других книг рядом с упавшей металлической полкой.',
          level: undefined,
        }],
        ])
      },
      Unarmed: {
        name: 'Боевой устав китайского спецназа',
        Books: new Map([[1, {
          location: 'Ниптонская дорожная стоянка',
          details: 'В магазине, на полке слева.',
          level: undefined,
        }],
        [2, {
          location: 'Убежище 11',
          details: 'В жилых помещениях, женская комната (Female Dorm) #1, рядом с упавшим комодом.',
          level: undefined,
        }],
        [3, {
          location: 'Рыбацкая хижина',
          details: 'На столике возле кровати.',
          level: undefined,
        }],
        [4, {
          location: 'Северные ворота Стрипа, казино «Топс»',
          details: 'В президентском номере, на маленьком столе недалеко от столов для бильярда.',
          level: undefined,
        }],
        [5, {
          location: 'Водоочистной завод.   ',
          details: 'Последняя комната с терминалом менеджера. Правее плаката «Ральфи» в углу за шкафами.',
          level: undefined,
        }],
        ])
      },
    }

    this.PrizeSkills = new Set();
    this.skillsByLevel = new Array(50);

    this.SPECIAL = {}
    for (let sp in Special) {
      this.SPECIAL[sp] = Object.assign({}, ...[Special[sp], Special_Lan[sp]]);
    }
    this.skills = {}
    for (let sk in Skills) {
      this.skills[sk] = Object.assign({}, ...[Skills[sk], Skills_Lan[sk]]);
    }

    this.Main_Abilities = {}
    for (let ab in Abilities) {
      this.Main_Abilities[ab] = Object.assign({}, ...[Abilities[ab], Abilities_Lan[ab]]);
    }
    this.traits = {}
    for (let key in Traits) {
      this.traits[key] = Object.assign({}, ...[Traits[key], Traits_Lan[key]]);
    }

    this.derived = {}
    for (let key in Derived) {
      this.derived[key] = Object.assign({}, ...[Derived[key], Derived_Lan[key]]);
    }

    for (let item = 0; item < this.skillsByLevel.length; item++) {
      this.skillsByLevel[item] = {
        spent: 0,
        points: 0,
        Barter: 0,
        E_W: 0,
        Explosives: 0,
        Guns: 0,
        Lockpick: 0,
        Medicine: 0,
        M_W: 0,
        Repair: 0,
        Science: 0,
        Sneak: 0,
        Speech: 0,
        Survival: 0,
        Unarmed: 0,
        skillbook_bonus: 3,
      };
    }
  }

  implants_added = 0
  Special_BonusPoints = 5
  prize_skillsNum = 3
  trait_n = 2
  total_b = 0
  skillbook_bonus = 3
  rest_point = 0

  level = 1
  max_level = 50
  level_reached = 1
  baseSpecial = 1

  skill_pointsBonus = 0
  levelsForPerk = 2
  LevelPerksCount() {
    return ((this.levelsForPerk * this.levelsForPerkChange) +
      (this.level - this.levelsForPerkChange) * this.levelsForPerkNew);
  }
  levelsForPerkChange = 0
  IsPerkLevel() {
    if (this.levelsForPerkChange == 0) {
      return (this.level % this.levelsForPerk) == 0;
    }
    else {//the rest of levels after chaging frequency of geting new ability, before getting one + levels
      // after chaging frequency of geting new ability ||(in case chaging frequency happened not with new level ability)
      return ((this.levelsForPerk * this.levelsForPerkChange) % this.levelsForPerk +
        (this.level - this.levelsForPerkChange)) % this.levelsForPerkNew == 0;
    }
  }

  SpecialBlocks = new Map();
  skillBlocks = new Map();
  skillBookBlocks = new Map();

  derivedBlocks = new Map();

  skillscount() {
    this.need_sp = 1300
    // for(i=0;i<this.skills;i++){
    //   this.need_sp-=this.skills_b[i]+this.skills[i].value
    // }
    for (let skill in this.skills) {
      this.need_sp -= this.skills[skill].value(this);
    }
  }
  SkillPointsCount() {
    return (((char.SPECIAL['Intelligence'].value) / 2) + 10 + this.skill_pointsBonus);
  }
  // SkillPointsCountMax(char){
  //     return Math.floor(char.inup_level * (10 + (char.SPECIAL['Intelligence'].value - 1) / 2) + 
  //     (10 + (char.SPECIAL['Intelligence'].value) / 2) * (char.max_level - 1 - char.inup_level) + char.rest_point);
  //   }

  Abilities_Availible = new Map();
  Abilities_Added = new Map();

  PerksbyLevel = new Map();
};
let char
