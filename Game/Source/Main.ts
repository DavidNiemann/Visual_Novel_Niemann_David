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
        ƒS.Text.print("<ul class='creditsList'>" +
            "<li>Story: David Niemann </li>" +
            "<li>Musik: <a href='https://github.com/SamuelKasper' target='_blank'>Samuel Kasper</a> </li>" +
            "<li>Development: David Niemann </br>" +
            "<li>charakter assets:  <a href='https://sutemo.itch.io/' target='_blank'>sutemo: sutemo.itch.io</a> </li> " +
            "<li>Inventar Icons: <ul class='iconCredits'>" +
            "<li><a href='https://www.flaticon.com/de/premium-icon/blume_1490628' target='_blank'>Blume: Freepik - Flaticon</a></li>" +
            "<li><a href='https://www.flaticon.com/free-icon/sword_7202245' target='_blank'>Schwert: Iconic Panda – Flaticon</a></li>" +
            "<li>Wasser beutel: David Niemann</li>" +
            "<li><a href='https://www.flaticon.com/free-icon/potion_129094' target='_blank'>HeilTrank: Freepik - Flaticon</a></li>" +
            "<li><a href='https://www.flaticon.com/free-icon/potion_129094' target='_blank'>leere Flasche: Freepik - Flaticon</a></li>" +
            "<li><a href='https://www.flaticon.com/free-icon/bread_3348078' target='_blank'>laib Brot: Freepik - Flaticon</a></li>" +
            "<li>magisches Wasser: David Niemann</li>" +
            "</ul></li>" +
            "</ul>");

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
            { id: "1", scene: prehistory, name: "Vorgeschichte" },
            { id: "2", scene: childhood, name: "Kindheit " },
            { id: "3", scene: theCurse, name: "Der Fluch" },
            { id: "4", scene: theGrassland, name: "Die Wiese" },
            { id: "5", scene: theStranger, name: "Der Fremde" },
            { id: "6", scene: theMountain, name: "Der Berg" },
            { id: "7", scene: theDangerousWay, name: "Der gefährliche Weg" },
            { id: "8", scene: theLostAgastTheBasilik, name: "Die Niederlage gegen den Basilisken" },
            { id: "9", scene: theWinAgastTheBasilik, name: "Der Sieg über den Basilisken" },
            { id: "10", scene: theLongWay, name: "Der Lange Weg" },
            { id: "11", scene: theForest, name: "Der Wald" },
            { id: "12", scene: theWrongWay, name: "Der Falsche Weg" },
            { id: "13", scene: lostInTheWoods, name: "Verlaufen im Wald" },
            { id: "14", scene: theFlowerField, name: "Das Blumenfeld" },
            { id: "15", scene: theCave, name: "Die Höhle" },
            { id: "16", scene: warkBack, name: "Der Weg zurück" },
            { id: "17", scene: unexpectedEncounter, name: "Eine unerwartete Begengnung" },
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