"use strict";
var VisualNovle;
(function (VisualNovle) {
    VisualNovle.ƒ = FudgeCore;
    VisualNovle.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    VisualNovle.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Transitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    VisualNovle.sounds = {
        nightclub: "./Audio/Nightclub.ogg",
        click: "Pfad"
    };
    VisualNovle.locations = {
        nightpark: {
            name: "nightpark",
            background: "./Images/Backgrounds/Nightpark.png"
        }
    };
    VisualNovle.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/aisaka_angry.png",
                happy: "./Images/Characters/aisaka_angry.png",
                upset: "./Images/Characters/aisaka_angry.png"
            }
        }
    };
    VisualNovle.dataForSave = {
        nameProtagonist: "",
        scrore: 0
    };
    function showCredits() {
        VisualNovle.ƒS.Text.setClass("Credits");
        VisualNovle.ƒS.Text.print("David Niemann");
    }
    VisualNovle.showCredits = showCredits;
    //** MENÜ **
    let inGameMenuButtens = {
        save: "Save",
        load: "Load",
        close: "Close",
        creadits: "Credits"
    };
    let gameMenu;
    //true = open; false = close
    let menuIsOpen = true;
    async function buttonFunktionAlitiles(_option) {
        switch (_option) {
            case inGameMenuButtens.save:
                await VisualNovle.ƒS.Progress.save();
                break;
            case inGameMenuButtens.load:
                await VisualNovle.ƒS.Progress.load();
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
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VisualNovle.ƒ.KEYBOARD_CODE.F8:
                await VisualNovle.ƒS.Progress.save();
                break;
            case VisualNovle.ƒ.KEYBOARD_CODE.F9:
                await VisualNovle.ƒS.Progress.load();
                break;
            case VisualNovle.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            default:
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = VisualNovle.ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
        buttonFunktionAlitiles("Close");
        let scenes = [
            { scene: VisualNovle.Scene, name: "Scene" }
        ];
        // start the sequence
        VisualNovle.ƒS.Progress.go(scenes);
        let uiElement = document.querySelector("[type=interface]");
        VisualNovle.dataForSave = VisualNovle.ƒS.Progress.setData(VisualNovle.dataForSave, uiElement);
    }
})(VisualNovle || (VisualNovle = {}));
var VisualNovle;
(function (VisualNovle) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Navigator: {
                T001: "hallo"
            },
            Protagonist: {
                T001: "test"
            }
        };
        let firstDialogueAnswers = {
            isSayOk: "Okay",
            isSayYes: "ja",
            isSayNo: "Nein"
        };
        let firstDialogueElement = await VisualNovle.ƒS.Menu.getInput(firstDialogueAnswers, "individualCssClass");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.isSayOk:
                VisualNovle.ƒS.Speech.clear();
                break;
            case firstDialogueAnswers.isSayYes:
                VisualNovle.ƒS.Speech.clear();
                break;
            case firstDialogueAnswers.isSayNo:
                VisualNovle.ƒS.Speech.clear();
                break;
            default:
                break;
        }
        VisualNovle.ƒS.Sound.fade(VisualNovle.sounds.nightclub, 0.1, 1, true);
        await VisualNovle.ƒS.Location.show(VisualNovle.locations.nightpark);
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.aisaka, VisualNovle.characters.aisaka.pose.angry, VisualNovle.ƒS.positions.bottomcenter);
        await VisualNovle.ƒS.update(VisualNovle.transitions.puzzle.duration, VisualNovle.transitions.puzzle.alpha, VisualNovle.transitions.puzzle.edge);
        await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.aisaka, text.Protagonist.T001);
        await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.narrator, text.Navigator.T001);
        VisualNovle.ƒS.Speech.hide();
        await VisualNovle.ƒS.update();
        VisualNovle.ƒS.Sound.fade(VisualNovle.sounds.nightclub, 0, 0.1, false);
    }
    VisualNovle.Scene = Scene;
})(VisualNovle || (VisualNovle = {}));
//# sourceMappingURL=Game.js.map