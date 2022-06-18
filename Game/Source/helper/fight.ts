namespace VisualNovel {
    let health: number = 100;
    let damage: number = 10;
    let parryChance: number = 0.25;
    let dodgeChance: number = 0.5;
    type Enemy = { name: string, health: number, damage: number };

    export let enemys: { [id: string]: Enemy } = {
        slime: {
            name: "kleiner Schleim",
            health: 30,
            damage: 1
        },
        basilisk: {
            name: "Basilisk",
            health: 50,
            damage: 25
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
            fightLost: `${_enemy.name}` + " hat den Kampf gewonnen"

        };


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
                    // TODO: add item logik
                    protagonistCurrentHealth -= _enemy.damage;
                    await ƒS.Speech.tell(characters.narrator, fightText.beHit);
                    break;
                default:
                    break;
            }

        }
        if (protagonistCurrentHealth <= 0) {
            await ƒS.Speech.tell(characters.narrator, fightText.fightLost);
            return false;
        } else {
            await ƒS.Speech.tell(characters.narrator, fightText.fightWon);
            return true;
        }

    }


} 