namespace VisualNovel {//https://itch.io/game-assets
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    let invetoryOpen: boolean = false;
    export type StoryText = { [textname: string]: { text: string, pose?: POSES } };

    export let dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false
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
        creadits: "Credits"
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
            { id: "1", scene: prehistory, name: "Prehistory", next: "2" },
            { id: "2", scene: childhood, name: "childhood", next: "3" },
            { id: "3", scene: theCurse, name: "the curse", next: "4" },
            { id: "4", scene: grassland, name: "the grassland", next: "5" },
            { id: "5", scene: theStranger, name: "the Stranger" }
        ];

        // start the sequence
        ƒS.Progress.go(scenes);
    }




}