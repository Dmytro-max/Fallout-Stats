Derived = {
    hp: {
        base: 95,
        value(char) {
            return this.base + char.SPECIAL['Endurance'].value * 20
        }
    },
    ap: {
        base: 65,
        value(char) {
            return this.base + char.SPECIAL['Agility'].value * 3;
        }
    },
    mw: {
        base: 150,
        value(char) {
            return this.base + char.SPECIAL['Strength'].value * 10;
        }
    },
    md: {
        base: 0,
        value(char) {
            return (this.base + char.SPECIAL['Strength'].value / 2);
        }
    },
    dr: {
        base: 0,
        mod: 0,
        value(char) {
            return Math.ceil(this.base * this.mod);
        }
    },
    rr: {
        base: 0,
        value(char) {
            return this.base + (char.SPECIAL['Endurance'].value - 1) * 2;
        }
    },
    pr: {
        base: 0,
        value(char) {
            return (this.base + (char.SPECIAL['Endurance'].value - 1) * 5) > 100 ? 100 : (this.base + (char.SPECIAL['Endurance'].value - 1) * 5);
        }
    },
    rs: {
        base: 0,
        value(char) {
            return (this.base + char.SPECIAL['Endurance'].value / 3).toFixed(2);
        }
    },
    cs: {
        base: 0,
        value(char) {
            return this.base + char.SPECIAL['Luck'].value;
        }
    },
    dt: {
        base: 0,
        value(char) {
            return this.base;
        }
    },
}
Derived_Ru = {
    hp: {
        name: "Очки здоровья",
        abreviation: "Очки здоровья",
        Description: "Какой урон может перенести ваш персонаж перед тем, как погибнуть. Если уровень здоровья достиг 0 или меньше, вы умерли.",
    },
    ap: {
        name: "Очки действия",
        abreviation: "Очки действия",
        Description: "Число действий, которые персонаж-игрок может выполнить за один ход во время боя",
    },
    mw: {
        name: "Максимальный груз",
        abreviation: 'Макс. груз',
        Description: "Максимальный вес снаряжения, который может переносить ваш персонаж, в фунтах.",
    },
    md: {
        name: "Урон холодным оружием",
        abreviation: 'Урон хол. ор.',
        Description: "Количество дополнительных очков урона, наносимых вашим персонажем в рукопашном бою.",
    },
    dr: {
        name: "Сопротивляемость урону",
        abreviation: 'Сопр. урону',
        Description: "Любой получаемый урон уменьшается на эту цифру. Сопротивляемость урону повышается при ношении брони.",
    },
    rr: {
        name: "Сопротивляемость радиации",
        abreviation: 'Сопр. рад.',
        Description: "Облучение радиацией снижается на этот процент. Сопротивляемость радиации может быть изменена в зависимости от надетой брони и принятых антирадиационных химикатов.",
    },
    pr: {
        name: "Сопротивляемость ядам",
        abreviation: 'Сопр. ядам',
        Description: "Уменьшает урон от отравления на этот показатель.",
    },
    rs: {
        name: "Скорость восстановления",
        abreviation: 'Скор. восст.',
        Description: "В конце каждого дня ваш персонаж восстановит единицу здоровья за каждое очко показателя Скорости восстановления. Когда вы спите, вы восстанавливаете здоровье каждые шесть часов.",
    },
    cs: {
        name: "Шанс критического удара",
        abreviation: 'Шанс крит. удара',
        Description: "Шансы нанести критический удар в бою увеличиваются при повышении этого показателя.",
    },
    dt: {
        name: "Предел урона",
        abreviation: 'Предел урона',
        Description: "Абсолютная величина, которая непосредственно вычитается из получаемого урона.",
    },
}