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
        Protagonist: {
            name: "Protagonist",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Protagonist/protagonist_happy.png",
                sad: "./Images/Characters/Protagonist/protagonist_sad.png",
                frightend: "./Images/Characters/Protagonist/protagonist_frightend.png"
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
            /*  { scene: Scene, name: "Scene" } */
            { scene: VisualNovle.Prehistory, name: "Prehistory" }
        ];
        // start the sequence
        VisualNovle.ƒS.Progress.go(scenes);
        let uiElement = document.querySelector("[type=interface]");
        VisualNovle.dataForSave = VisualNovle.ƒS.Progress.setData(VisualNovle.dataForSave, uiElement);
    }
    async function playMonologue(_character, _text) {
        for (const key of Object.values(_text)) {
            await VisualNovle.ƒS.Speech.tell(_character, key);
        }
    }
    VisualNovle.playMonologue = playMonologue;
})(VisualNovle || (VisualNovle = {}));
var VisualNovle;
(function (VisualNovle) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Navigator: {
                T001: "es war einmal"
            },
            Protagonist: {
                T001: "hallo"
            }
        };
        /* let firstDialogueAnswers = {
          isSayOk: "Okay",
          isSayYes: "ja",
          isSayNo: "Nein"
    
    
        };
     */
        /* let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "individualCssClass");
    
        switch (firstDialogueElement) {
          case firstDialogueAnswers.isSayOk:
            ƒS.Speech.clear();
            break;
          case firstDialogueAnswers.isSayYes:
            ƒS.Speech.clear();
            break;
          case firstDialogueAnswers.isSayNo:
            ƒS.Speech.clear();
            break;
          default:
            break;
        } */
        /*  ƒS.Sound.fade(sounds.nightclub, 0.1, 1, true); */
        /*  await ƒS.Location.show(locations.nightpark); */
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.Protagonist, VisualNovle.characters.Protagonist.pose.happy, new VisualNovle.ƒ.Vector2(100, -500));
        await VisualNovle.ƒS.update(1);
        /*  await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); */
        await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.narrator, text.Navigator.T001);
        await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.Protagonist, text.Protagonist.T001);
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.Protagonist, VisualNovle.characters.Protagonist.pose.sad, new VisualNovle.ƒ.Vector2(-100, -500));
        await VisualNovle.ƒS.update(1);
        /* ƒS.Speech.hide(); */
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.Protagonist, VisualNovle.characters.Protagonist.pose.frightend, new VisualNovle.ƒ.Vector2(0, -500));
        await VisualNovle.ƒS.update(1);
        /*     ƒS.Sound.fade(sounds.nightclub, 0, 0.1, false); */
    }
    VisualNovle.Scene = Scene;
})(VisualNovle || (VisualNovle = {}));
var VisualNovle;
(function (VisualNovle) {
    async function Prehistory() {
        console.log("start Story", "Scene:  prehistory");
        let text = {
            Navigator: {
                T001: "es war einmal",
                T002: "Ein Komet knalte auf die Erde",
                T003: "ein junger Mann",
                T004: "sein Vater verschwand als er kleinwar, er war eine Abenteurer und ist auf Reisen gegange und Kamm nicht merh zurück"
            }
        };
        await VisualNovle.playMonologue(VisualNovle.characters.narrator, text.Navigator);
    }
    VisualNovle.Prehistory = Prehistory;
})(VisualNovle || (VisualNovle = {}));
//# sourceMappingURL=Game.js.map