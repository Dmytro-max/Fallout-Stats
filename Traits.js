Traits = {
    'WildWasteland': {
        name: "",
    },
    'GoodNatured': {
        Description: 'Обладая доброй душой вы предпочитаите решать вопросы мирным путем. Вы получаете +5 к навыкам "Бартер", "Медицина", "Ремонт", "Наука",  и "Красноречие", но -5 к навыкам "Энергооружие", "Взрывчатка","Оружие", "Холодное оружие" и "Без оружия".',
        PersonalFuncOn(char) {
            let list = ['Barter', 'Repair', 'Science', 'Speech', 'Medicine'];
            for (let skill of list) {
                if (100 - char.skills[skill].value(char) < 5) {
                    return true;
                }
            }
            for (let skill of list) {
                char.skills[skill].bonus += 5;
            }
        },
        PersonalFuncOff(char) {
            let list = ['Barter', 'Repair', 'Science', 'Speech', 'Medicine'];
            for (let skill of list) {
                if (char.skills[skill].bonus < 5) {
                    return true;
                }
            }
            for (let skill of list) {
                char.skills[skill].bonus -= 5;
                console.log(skill);
            }
        },
    },
    'Kamikaze': {
        PersonalFuncOn(char) {
            char.derived['ap'].base += 10;
            char.derived['dt'].base -= 2;
        },
        PersonalFuncOff(char) {
            char.derived['ap'].base -= 10;
            char.derived['dt'].base += 2;
        },
    },
    'LooseCannon': {
        name: "",
    },
    'BuiltToDestroy': {
        PersonalFuncOn(char) {
            char.derived['cs'].base += 3;
        },
        PersonalFuncOff(char) {
            char.derived['cs'].base -= 3;
        },
    },
    'FastShot': {
        name: "",
    },
    'TriggerDiscipline': {
        name: "",
    },
    'HeavyHanded': {
        name: "",
    },
    'FourEyes': {
        name: "",
    },
    'SmallFrame': {
        PersonalFuncOn(char) {
            char.SPECIAL['Agility'].value += 1;
        },
        PersonalFuncOff(char) {
            char.derived['Agility'].value -= 1;
        },
    },
    'HotBlooded': {
        name: "",
    },
    'Claustrophobia': {
        name: "",
    },
    'EarlyBird': {
        name: "",
    },
    'Skilled': {
        PersonalFuncOn(char) {
            for (let skill in char.skills) {
                if (100 - char.skills[skill].value(char) < 5) {
                    return true;
                }
            }
            for (let skill in char.skills) {
                char.skills[skill].bonus += 5
            }
        },
        PersonalFuncOff(char) {
            for (let skill in char.kills) {
                if (char.skills[skill].bonus < 5) {
                    return true;
                }
            }
            for (let skill in char.skills) {
                char.skills[skill].bonus -= 5
            }
        }
    },
    'LogansLoophole': {
        PersonalFuncOn(char) {
            char.max_level = 30;
        },
        PersonalFuncOff(char) {
            char.max_level = 50;
        },
    },
    'Hoarder': {
        PersonalFuncOn(char) {
            char.derived['mw'].base += 25;
        },
        PersonalFuncOff(char) {
            char.derived['mw'].base -= 25;
        },
    },
}
Traits_Ru = {
    WildWasteland: {
        name: "Дикая пустошь",
        Description: "Дикая пустошь влечёт самых странных и даже безумных обитателей постапокалиптической Америки. Не для слабых духом и не для слишком серьёзных.",
    },
    GoodNatured: {
        name: "Добрая душа",
        Description: 'Обладая доброй душой вы предпочитаите решать вопросы мирным путем. Вы получаете +5 к навыкам "Бартер", "Медицина", "Ремонт", "Наука",  и "Красноречие", но -5 к навыкам "Энергооружие", "Взрывчатка","Оружие", "Холодное оружие" и "Без оружия".',
    },
    Kamikaze: {
        name: "Камикадзе",
        Description: "Вы получаете 10 очков действия но ваша неосторожность приводит к уменьшению порога урона на 2.",
    },
    LooseCannon: {
        name: "Непредсказуемый",
        Description: "От гранат до копий - вы бросаете все на 30 %, но страдает дальность броска,она меньше на 25 %.",
    },
    BuiltToDestroy: {
        name: "Создан разрушать",
        Description: "Если огонь горит в два раза ярче, то он и погаснет в два раза быстрее. Любое оружие получает +3% к шансу критического урона, но снаряжение изнашиваеться 15% быстрее.",
    },
    FastShot: {
        name: "Стрельба навскидку",
        Description: "Используя обычное и энергетическое оружие вы стреляете на 20% быстрее,но и на 20% менее точно",
    },
    TriggerDiscipline: {
        name: "Техника спуска",
        Description: "Используя обычное и энергетическое оружие вы стреляете на 20% медленнее,но на 20% точнее",
    },
    HeavyHanded: {
        name: "Тяжёлая рука",
        Description: "Атаки холодным оружием и при без оружия наносят больше урона, но меньше критического урона.",
    },
    FourEyes: {
        name: "Четыре глаза",
        Description: "Надев очки любового типа, вы получаете прибавку к восприятию +1, а сняв очки - штраф -1",
    },
    SmallFrame: {
        name: "Шустрик",
        Description: "Субтильное телосложение позволяет вам получить +1 к ловкости, но вы легко повреждаете конечности.",
    },
    HotBlooded: {
        name: "Горячая кровь",
        Description: "Когда уровень здоровья падает ниже 50% от нормы, вы получаете +10% к урону, но на 2 единицы снижаются ловкость и восприятие.",
    },
    Claustrophobia: {
        name: "Клаустрофобия",
        Description: "Вы боитесь замкнутых пространств (возможно, потому что там живут мутанты). Вы получаете бонус +1 ко всем параметрам SPECIAL при нахождении на улице, но в помещениях вы получаете штраф -1.",
    },
    EarlyBird: {
        name: "Жаворонок",
        Description: "Привет жаворонкам! Вы получаете +2 ко всем атрибутам S.P.E.C.I.A.L. с 6 утра до 12 дня, но с 6 вечера до 6 утра, когда вы не на пике формы, все атрибуты снижаются на 1.",
    },
    Skilled: {
        name: "Тренированный",
        Description: "Вы обладаете умениями, но не опытом. Вы получаете + 5 очков к каждому навыку, но с этого момента зарабатываете опыта на 10 % меньше.",
    },
    LogansLoophole: {
        name: "Уловка Логана",
        Description: "Вас никогда не отправят в дом престарелых, вы будете вечно молоды (не выше 30 уровня)! Вам не грозит зависимость от химикатов, и все препараты будут действовать вдвое дольше... но после 30 — прощайте опыт, способности и очки навыков!",
    },
    Hoarder: {
        name: "Скопидом",
        Description: "Вы можете нести на 25 фунтов больше обычного, но все атрибуты S.P.E.C.I.A.L. снижаются на единицу, если в вашем рюкзаке меньше 160 фунтов",
    },
}