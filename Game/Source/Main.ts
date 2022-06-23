namespace VisualNovel {//https://itch.io/game-assets
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    let invetoryOpen: boolean = false;
    export type StoryText = { [textname: string]: { text: string, pose?: POSES } };

    export let dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false,
        forestCounter: 0
    };

    export function showCredits(): void {
        ƒS.Text.setClass("Credits");
        ƒS.Text.print("David Niemann");
    }

    /** MENÜ **/
    let inGameMenuButtens = {
        save: "Save",
        load: "Load",
        close: "Close",
        creadits: "Credits",

    };

    let gameMenu: ƒS.Menu;
    //true = open; false = close
    let menuIsOpen: Boolean = true;

    async function buttonFunktionAlitiles(_option: string): Promise<void> {
        switch (_option) {
            case inGameMenuButtens.save:
                await ƒS.Progress.save();
                break;
            case inGameMenuButtens.load:
                await ƒS.Progress.load();
                break;
            case inGameMenuButtens.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtens.creadits:
                showCredits();
                break;
            default:
                break;
        }
    }

    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case ƒ.KEYBOARD_CODE.I:
                if (invetoryOpen) {
                    ƒS.Inventory.close();
                    invetoryOpen = false;
                } else {
                    ƒS.Inventory.open();
                    invetoryOpen = true;
                }
                break;
            default:
                break;
        }
    }



    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
        buttonFunktionAlitiles("Close");
        let scenes: ƒS.Scenes = [
            { id: "1", scene: prehistory, name: "Einführung", next: "2" },
            { id: "2", scene: childhood, name: "Kindheit ", next: "3" },
            { id: "3", scene: theCurse, name: "Der Fluch", next: "4" },
            { id: "4", scene: grassland, name: "Die weite Wiesen", next: "5" },
            { id: "5", scene: theStranger, name: "Der Fremde", next: "6" },
            { id: "6", scene: theMountain, name: "Die Berge" },
            { id: "7", scene: dangerousWay, name: "Der gefährliche Weg" },
            { id: "8", scene: lostAgastTheBasilik, name: "Niederlage gegen den Basilik" },
            { id: "9", scene: winAgastTheBasilik, name: "Sieg über den Basilik", next: "11" },
            { id: "10", scene: longWay, name: "Der Lange Weg", next: "11" },
            { id: "11", scene: forest, name: "Der Wald" },
            { id: "12", scene: wrongWay, name: "Falscher Weg", next: "11" },
            { id: "13", scene: lostinTheWoods, name: "verloren im Wald" },
            { id: "14", scene: flower, name: "das Blumen Feld", next: "16" },
            { id: "15", scene: cave, name: "die Höhle", next: "16" }

        ];

        // start the sequence
        ƒS.Progress.go(scenes);
    }




}