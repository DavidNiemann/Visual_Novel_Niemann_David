
/// <reference path = "../objectes/items.ts"/>
namespace VisualNovel {

    let health: number = 100;
    let damage: number = 10;
    let parryChance: number = 0.50;
    let dodgeChance: number = 0.75;
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
            healing: 50
        },
        loaf_of_bread: {
            name: "Ein Laib Brot",
            healing: 25
        },
        water_bag: {
            name: "wasser beutel",
            healing: 5
        }

    };

    let actions = {
        attack: "angreifen",
        parry: "parieren", // 25% + schaden verursachen 
        dodge: "ausweichen", // 50%
        useItems: "Gegenstand benutzen"
    };




    export async function fight(_enemy: Enemy): Promise<boolean> {
       
        let protagonistCurrentHealth: number = health;
        let enemyCurrentHealth: number = _enemy.health;

        let fightText = {
            fightStart: " ein Kampf hat gengen " + `${_enemy.name}` + " begonnen ",
            action: "was soll " + `${dataForSave.nameProtagonist}` + " tun",
            atackSuccessful: `${_enemy.name}` + " wurde getroffen, " + `${_enemy.name}` + " erhielt " + `${damage}` + " schade",
            beHit: `${dataForSave.nameProtagonist}` + " was hit, " + `${dataForSave.nameProtagonist}` + " received " + `${_enemy.damage}` + " schaden",
            remainingHealth: `${_enemy.name}` + " besitzt noch " + `${enemyCurrentHealth}`,
            parrySuccessful: `${dataForSave.nameProtagonist}` + " hat ervolgreich den Angriff abwehrt und hat " + `${_enemy.name}` + " " + `${damage}` + "schaden verusrsacht",
            parryFailed: `${dataForSave.nameProtagonist}` + " hat den Angriff nicht abwehren könenn und hat " + `${_enemy.damage}` + " schaden erhalten",
            dodgeSuccessful: `${dataForSave.nameProtagonist}` + " ist ervolgreich dem Angriff ausgewichen",
            dodgeFailed: `${dataForSave.nameProtagonist}` + " hat dem Angriff nicht auszuweichen und hat " + `${_enemy.damage}` + " schaden erhalten",
            fightWon: `${dataForSave.nameProtagonist}` + " hat den Kampf gewonnen",
            fightLost: `${_enemy.name}` + " hat den Kampf gewonnen",
            noItems: `${dataForSave.nameProtagonist}` + " hat keine nützlichen Items bei sich."

        };

        await ƒS.Sound.fade(sounds.fightMusic, 0.2, 1, true);
        await ƒS.Speech.tell(characters.narrator, fightText.fightStart);

        while (protagonistCurrentHealth > 0 && enemyCurrentHealth > 0) {
            let chosenAction: string = await ƒS.Menu.getInput(actions, "fightOptions");
            switch (chosenAction) {
                case actions.attack:

                    enemyCurrentHealth -= damage;
                    await ƒS.Speech.tell(characters.narrator, fightText.atackSuccessful);
                    protagonistCurrentHealth -= _enemy.damage;
                    await ƒS.Speech.tell(characters.narrator, fightText.beHit);
                    break;
                case actions.dodge:

                    let dodgeSuccessful: number = Math.random();
                    if (dodgeSuccessful <= dodgeChance) {
                        await ƒS.Speech.tell(characters.narrator, fightText.dodgeSuccessful);
                    }
                    else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await ƒS.Speech.tell(characters.narrator, fightText.dodgeFailed);
                    }
                    break;
                case actions.parry:

                    let parrySuccessful: number = Math.random();
                    if (parrySuccessful <= parryChance) {
                        enemyCurrentHealth -= damage;
                        await ƒS.Speech.tell(characters.narrator, fightText.parrySuccessful);
                    } else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await ƒS.Speech.tell(characters.narrator, fightText.parryFailed);
                    }
                    break;
                case actions.useItems:
                    let usebleItems: ƒS.ItemDefinition[] = await lookForFightItems();
                    if (usebleItems.length > 0) {
                        //let item = await activateItem(items.healing_potion);
                        let item = await activateItems(usebleItems);
                        if (item) {
                            await useFightItem(item);
                            protagonistCurrentHealth -= _enemy.damage;
                            await ƒS.Speech.tell(characters.narrator, fightText.beHit);
                        }
                    }
                    else {
                        await ƒS.Speech.tell(characters.narrator, fightText.noItems);
                    }
                    break;
                default:
                    break;
            }

        }
        await ƒS.Sound.fade(sounds.fightMusic, 0, 1, false);
        if (protagonistCurrentHealth <= 0) {
            await ƒS.Speech.tell(characters.narrator, fightText.fightLost);
            return false;
        } else {
            await ƒS.Speech.tell(characters.narrator, fightText.fightWon);
            return true;
        }
       
    }
    async function lookForFightItems(): Promise<ƒS.ItemDefinition[]> {
        let possibleFightItems: ƒS.ItemDefinition[] = [];
        for (const idItem in items) {
            for (const idFight in fightItems) {
                if (idItem == idFight) {
                    if (ƒS.Inventory.getAmount(items[idItem]) > 0) {
                        possibleFightItems.push(items[idItem]);
                    }

                }

            }
        }
        return possibleFightItems;
    }

    async function useFightItem(_item: ƒS.ItemDefinition): Promise<void> {
        let fightItem: FightItems = null;
        for (const id in items) {
            if (items[id] == _item) {
                fightItem = fightItems[id];

            }
        }
        if (fightItem) {
            health += fightItem.healing;
            if (health > 100) {
                health = 100;
            }
            await ƒS.Speech.tell(characters.narrator, `${dataForSave.nameProtagonist}` + " hat das Item: " + `${fightItem.name}` + " genutzt und " + `${fightItem.healing}` + " leben geheilt");


            if (_item == items.healing_potion) {
                ƒS.Inventory.add(items.empty_glass_bottle);
                await ƒS.Speech.tell(characters.narrator, `${dataForSave.nameProtagonist}` + " hat das Item: " + `${items.empty_glass_bottle.name}` + " erhalten");
                dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.empty_glass_bottle.name}` + "wurde eingepackt </p>";
            }
        }
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${_item.name}` + " wurde verwendet </p>";
        await saveInventory();
    }


} 