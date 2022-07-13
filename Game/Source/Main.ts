namespace VisualNovel {//https://itch.io/game-assets
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    export type StoryText = { [textname: string]: { text: string, pose?: POSES } };
    export let invetoryOpen: boolean = false;
    export let inventoryLoaded: boolean = false;
    let currentLogPage: number = 0;

    export let dataForSave: {
        nameProtagonist: string;
        dayCounter: number;
        bottleWasGiven: boolean;
        forestCounter: number;
        dangerousPathChosen: boolean;
        inventoryItems: string[];
        logText: string[];
    } = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false,
        forestCounter: 0,
        dangerousPathChosen: false,
        inventoryItems: [],
        logText: []

    };

    export function showCredits(): void {
        ƒS.Text.setClass("Credits");
        ƒS.Text.print("Story: David Niemann </br> Musik: Samuel Kasper </br> Development: David Niemann </br> charakter assets:  <a href='https://sutemo.itch.io/'>sutemo: sutemo.itch.io</a>");

    }

    export function showAdventureLog(_text: string[]): void {
        ƒS.Text.setClass("Adventure_Log");
        if (_text.length == 0) {
            return;
        }
        ƒS.Text.print(_text[currentLogPage]);
        let dialog: HTMLDialogElement = <HTMLDialogElement>document.querySelector("dialog[class=Adventure_Log]");
        let buttonDiv: HTMLDivElement = document.createElement("div");
        dialog.appendChild(buttonDiv);
        let forwardButton: HTMLButtonElement = document.createElement("button");
        let closeButton: HTMLButtonElement = document.createElement("button");
        let backwardButton: HTMLButtonElement = document.createElement("button");
        closeButton.addEventListener("click", () => {
            //@ts-ignore
            dialog.close();
        });
        closeButton.innerHTML = "Schliesen";
        forwardButton.addEventListener("click", () => {
            currentLogPage++;
            showAdventureLog(_text);
        });
        forwardButton.innerHTML = "nächste Seite";
        backwardButton.addEventListener("click", () => {
            currentLogPage--;
            showAdventureLog(_text);
        });
        backwardButton.innerHTML = "voherige Seite";
        buttonDiv.appendChild(backwardButton);
        buttonDiv.appendChild(closeButton);
        buttonDiv.appendChild(forwardButton);


        if (currentLogPage <= 0) {
            if (_text.length == 1) {
                forwardButton.disabled = true;
                backwardButton.disabled = true;
            } else {
                forwardButton.disabled = false;
                backwardButton.disabled = true;
            }
        } else if (currentLogPage >= _text.length - 1) {
            forwardButton.disabled = true;
            backwardButton.disabled = false;
        } else {
            forwardButton.disabled = false;
            backwardButton.disabled = false;
        }

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
            case ƒ.KEYBOARD_CODE.L:
                showAdventureLog(dataForSave.logText);
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
            { id: "1", scene: prehistory, name: "Einführung" },
            { id: "2", scene: childhood, name: "Kindheit " },
            { id: "3", scene: theCurse, name: "Der Fluch" },
            { id: "4", scene: theGrassland, name: "Die weite Wiese" },
            { id: "5", scene: theStranger, name: "Der Fremde" },
            { id: "6", scene: theMountain, name: "Die Berge" },
            { id: "7", scene: dangerousWay, name: "Der gefährliche Weg" },
            { id: "8", scene: lostAgastTheBasilik, name: "Niederlage gegen den Basilik" },
            { id: "9", scene: winAgastTheBasilik, name: "Sieg über den Basilik" },
            { id: "10", scene: longWay, name: "Der Lange Weg" },
            { id: "11", scene: theForest, name: "Der Wald" },
            { id: "12", scene: wrongWay, name: "Falscher Weg" },
            { id: "13", scene: lostinTheWoods, name: "verloren im Wald" },
            { id: "14", scene: flower, name: "das Blumen Feld" },
            { id: "15", scene: cave, name: "die Höhle" },
            { id: "16", scene: warkBack, name: "der Fuß weg ins Dorf" },
            { id: "17", scene: unexpectedEncounter, name: "eine unerwartede Begengnung" },
            { id: "18", scene: saveMother, name: "Rettung der Mutter" },
            { id: "19", scene: tooLate, name: "zu Spät" },

            { id: "99", scene: gameOver, name: "Spiel zu Ende" }
        ];

        let uiElement: HTMLElement = document.querySelector("[type=inventory]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }




}