"use strict";
var VisualNovle;
(function (VisualNovle) {
    VisualNovle.ƒ = FudgeCore;
    VisualNovle.ƒS = FudgeStory;
    let invetoryOpen = false;
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
    VisualNovle.items = {
        blume: {
            name: "Tulpe",
            description: "Eine sehr schöne Blume",
            image: "./Images/Items/blume.png"
        },
        fisch: {
            name: "gewönlicher Fisch",
            description: "Er scheint noch zu leben",
            image: "./Images/Items/fisch.png"
        },
        fee: {
            name: "Magische Fee",
            description: "Ihre Magischen Kräfte soll alle wundel Heilen Könne",
            image: "./Images/Items/fee.png"
        },
        stein: {
            name: "Stein",
            description: "ein Kleiner aber sehr schwer",
            image: "./Images/Items/stein.png"
        },
        schwerd: {
            name: "Schwert",
            description: "achtung scharf",
            image: "./Images/Items/schwert.png",
            static: true
        },
        buch: {
            name: "Buch",
            description: "ein buch voller interessantes Wissen",
            image: "./Images/Items/studie.png",
            static: true
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
            case VisualNovle.ƒ.KEYBOARD_CODE.I:
                if (invetoryOpen) {
                    VisualNovle.ƒS.Inventory.close();
                    invetoryOpen = false;
                }
                else {
                    VisualNovle.ƒS.Inventory.open();
                    invetoryOpen = true;
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
            { scene: VisualNovle.Scene, name: "testScene" }
            /*{ scene: Prehistory, name: "Prehistory" }*/
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
        /*  let text = {
           Navigator: {
             T001: "es war einmal"
           },
           Protagonist: {
             T001: "hallo"
           }
         }; */
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
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.fisch);
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.blume);
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.fee);
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.schwerd);
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.stein);
        VisualNovle.ƒS.Inventory.add(VisualNovle.items.buch);
        /* dataForSave.nameProtagonist = await ƒS.Speech.getInput(); */
        /*  ƒS.Sound.fade(sounds.nightclub, 0.1, 1, true); */
        /*  await ƒS.Location.show(locations.nightpark); */
        /*  await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, new ƒ.Vector2(100, -500)); */
        /*  await ƒS.update(1); */
        /*  await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); */
        /*  await ƒS.Speech.tell(characters.narrator, text.Navigator.T001); */
        /*  await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T001); */
        /* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.sad, new ƒ.Vector2(-100, -500)); */
        /* await ƒS.update(1); */
        /* ƒS.Speech.hide(); */
        /* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.frightend, new ƒ.Vector2(0, -500)); */
        /* await ƒS.update(1); */
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