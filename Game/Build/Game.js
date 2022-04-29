"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Transitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    Template.sounds = {
        nightclub: "./Audio/Nightclub.ogg",
        click: "Pfad"
    };
    Template.locations = {
        nightpark: {
            name: "nightpark",
            background: "./Images/Backgrounds/Nightpark.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/aisaka_angry.png",
                happy: "./Images/Characters/aisaka_angry.png",
                upset: "./Images/Characters/aisaka_angry.png"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: "",
        scrore: 0
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
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
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueAnswers, "individualCssClass");
        switch (firstDialogueElement) {
            case firstDialogueAnswers.isSayOk:
                Template.ƒS.Speech.clear();
                break;
            case firstDialogueAnswers.isSayYes:
                Template.ƒS.Speech.clear();
                break;
            case firstDialogueAnswers.isSayNo:
                Template.ƒS.Speech.clear();
                break;
            default:
                break;
        }
        Template.ƒS.Sound.fade(Template.sounds.nightclub, 0.1, 1, true);
        await Template.ƒS.Location.show(Template.locations.nightpark);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.angry, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Protagonist.T001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Navigator.T001);
        Template.ƒS.Speech.hide();
        await Template.ƒS.update();
        Template.ƒS.Sound.fade(Template.sounds.nightclub, 0, 0.1, false);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Game.js.map