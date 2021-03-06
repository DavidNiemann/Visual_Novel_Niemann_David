
/// <reference path = "../objectes/items.ts"/>
namespace VisualNovel {

    let health: number = 100;
    let damage: number = 10;
    let protagonistCurrentHealth: number = health;
    let parryChance: number = 0.50;
    let dodgeChance: number = 1.00;
    type Enemy = { name: string, health: number, damage: number };
    type FightItems = { name: string, healing: number };
    export let enemys: { [id: string]: Enemy } = {
        slime: {
            name: "kleiner Schleim",
            health: 30,
            damage: 1
        },
        basilisk: {
            name: "Basilisk",
            health: 50,
            damage: 20
        }

    };

    let fightItems: { [id: string]: FightItems } = {
        healing_potion: {
            name: "Heiltrank",
            healing: 100
        },
        loaf_of_bread: {
            name: "Ein Laib Brot",
            healing: 30
        },
        water_bag: {
            name: "wasser beutel",
            healing: 15
        }

    };

    let actions = {
        attack: "angreifen",
        parry: "parieren", // 50% + schaden verursachen 
        dodge: "ausweichen", // 75%
        useItems: "Gegenstand benutzen"
    };




    export async function fight(_enemy: Enemy): Promise<boolean> {

        protagonistCurrentHealth = health;
        let enemyCurrentHealth: number = _enemy.health;

        let fightText = {
            fightStart: " ein Kampf hat gengen " + `${_enemy.name}` + " begonnen ",
            action: "was soll " + `${dataForSave.nameProtagonist}` + " tun",
            atackSuccessful: `${_enemy.name}` + " wurde getroffen, " + `${_enemy.name}` + " erhielt " + `${damage}` + " schade",
            beHit: `${dataForSave.nameProtagonist}` + " was hit, " + `${dataForSave.nameProtagonist}` + " received " + `${_enemy.damage}` + " schaden",
            remainingHealth: `${_enemy.name}` + " besitzt noch " + `${enemyCurrentHealth}`,
            parrySuccessful: `${dataForSave.nameProtagonist}` + " hat ervolgreich den Angriff abwehrt und hat " + `${_enemy.name}` + " " + `${damage}` + "schaden verusrsacht",
            parryFailed: `${dataForSave.nameProtagonist}` + " hat den Angriff nicht abwehren k??nenn und hat " + `${_enemy.damage}` + " schaden erhalten",
            dodgeSuccessful: `${dataForSave.nameProtagonist}` + " ist ervolgreich dem Angriff ausgewichen",
            dodgeFailed: `${dataForSave.nameProtagonist}` + " hat dem Angriff nicht auszuweichen und hat " + `${_enemy.damage}` + " schaden erhalten",
            fightWon: `${dataForSave.nameProtagonist}` + " hat den Kampf gewonnen",
            fightLost: `${_enemy.name}` + " hat den Kampf gewonnen",
            noItems: `${dataForSave.nameProtagonist}` + " hat keine n??tzlichen Items bei sich."

        };

        await ??S.Sound.fade(sounds.fightMusic, 0.2, 1, true);
        await ??S.Speech.tell(characters.narrator, fightText.fightStart);

        while (protagonistCurrentHealth > 0 && enemyCurrentHealth > 0) {
            let chosenAction: string = await ??S.Menu.getInput(actions, "fightOptions");
            switch (chosenAction) {
                case actions.attack:

                    enemyCurrentHealth -= damage;
                    await ??S.Speech.tell(characters.narrator, fightText.atackSuccessful);
                    protagonistCurrentHealth -= _enemy.damage;
                    await ??S.Speech.tell(characters.narrator, fightText.beHit);
                    break;
                case actions.dodge:

                    let dodgeSuccessful: number = Math.random();
                    console.log(dodgeSuccessful);
                    if (dodgeSuccessful <= dodgeChance) {
                        await ??S.Speech.tell(characters.narrator, fightText.dodgeSuccessful);
                    }
                    else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await ??S.Speech.tell(characters.narrator, fightText.dodgeFailed);
                    }
                    break;
                case actions.parry:

                    let parrySuccessful: number = Math.random();
                    console.log(parrySuccessful);
                    if (parrySuccessful <= parryChance) {
                        enemyCurrentHealth -= damage;
                        await ??S.Speech.tell(characters.narrator, fightText.parrySuccessful);
                    } else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await ??S.Speech.tell(characters.narrator, fightText.parryFailed);
                    }
                    break;
                case actions.useItems:
                    let usebleItems: ??S.ItemDefinition[] = await lookForFightItems();
                    if (usebleItems.length > 0) {
                        //let item = await activateItem(items.healing_potion);
                        let item = await activateItems(usebleItems);
                        if (item) {
                            await useFightItem(item);
                            protagonistCurrentHealth -= _enemy.damage;
                            await ??S.Speech.tell(characters.narrator, fightText.beHit);
                        }
                    }
                    else {
                        await ??S.Speech.tell(characters.narrator, fightText.noItems);
                    }
                    break;
                default:
                    break;
            }

        }
        await ??S.Sound.fade(sounds.fightMusic, 0, 1, false);
        if (protagonistCurrentHealth <= 0) {
            await ??S.Speech.tell(characters.narrator, fightText.fightLost);
            return false;
        } else {
            await ??S.Speech.tell(characters.narrator, fightText.fightWon);
            return true;
        }

    }
    async function lookForFightItems(): Promise<??S.ItemDefinition[]> {
        let possibleFightItems: ??S.ItemDefinition[] = [];
        for (const idItem in items) {
            for (const idFight in fightItems) {
                if (idItem == idFight) {
                    if (??S.Inventory.getAmount(items[idItem]) > 0) {
                        possibleFightItems.push(items[idItem]);
                    }

                }

            }
        }
        return possibleFightItems;
    }

    async function useFightItem(_item: ??S.ItemDefinition): Promise<void> {
        let fightItem: FightItems = null;
        for (const id in items) {
            if (items[id] == _item) {
                fightItem = fightItems[id];

            }
        }
        if (fightItem) {
            protagonistCurrentHealth += fightItem.healing;
            if (health > 100) {
                health = 100;
            }
            await ??S.Speech.tell(characters.narrator, `${dataForSave.nameProtagonist}` + " hat das Item: " + `${fightItem.name}` + " genutzt und " + `${fightItem.healing}` + " leben geheilt");


            if (_item == items.healing_potion) {
                ??S.Inventory.add(items.empty_glass_bottle);
                await ??S.Speech.tell(characters.narrator, `${dataForSave.nameProtagonist}` + " hat das Item: " + `${items.empty_glass_bottle.name}` + " erhalten");
                dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.empty_glass_bottle.name}` + "wurde eingepackt </p>";
            }
        }
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${_item.name}` + " wurde verwendet </p>";
        await saveInventory();
    }


} 