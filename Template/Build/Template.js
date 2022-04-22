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
            alpha: "../FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    Template.sounds = {
        nightclub: "../Audio/Dystopian.ogg",
        click: "Pfad"
    };
    Template.locations = {
        nightpark: {
            name: "nightpark",
            background: "../Images copy/Backgrounds/Nightpark.png"
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
                angry: "../Images/Characters/aisaka_angry.png",
                happy: "../Images/Characters/aisaka_angry.png",
                upset: "../Images/Characters/aisaka_angry.png"
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
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Navigator.T001);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map