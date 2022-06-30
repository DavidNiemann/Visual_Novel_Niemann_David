namespace VisualNovel {

    export async function theGrassland(): ƒS.SceneReturn {
        console.log("Scene:  grassland");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            before_the_fight: {
                Narrator_001: { text: "nach paar Stunden ist  " + `${dataForSave.nameProtagonist}` + " schon mitten auf den " + `${locations.grasslands.name}` + " unterwegs, es ist ruhig. " },
                Narrator_002: { text: `${dataForSave.nameProtagonist}` + " ist seit der das Dorf verlassen hat auf niemanden mehr gestoßen." },
                Protagonist_003: { text: "<i>Dr.Bader hat gesagt hier wimmelt es von Schleimen ich sollte mich eher in Acht nehmen, zum Glück bin ich noch keinem begegnet.</i>", pose: POSES.HAPPY },
                Narrator_004: { text: "nach einer Weile raschelt es in einem Busch neben ihn." },
                Narrator_005: { text: "es springen 3 Schleime vor um ihn herum und verspären in dem Weg" },
                Protagonist_006: { text: "<i>ich muss mich beeilen.</i>", pose: POSES.FRIGHTEND },
                Protagonist_007: { text: "<i>ich komm nicht durch ich muss wohl Kämpfen.</i>", pose: POSES.FRIGHTEND },
                Narrator_008: { text: `${dataForSave.nameProtagonist}` + "greifen zu seinem Schwert." }
            },
            after_the_fight: {

                Narrator_009: { text: "Die Restlichen schleime suchen das Weite." },
                Protagonist_010: { text: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>", pose: POSES.SAD },
                Narrator_011: { text: `${dataForSave.nameProtagonist}` + " läuft den Weg weiter." }
            }

        };

        await ƒS.Location.show(locations.grasslands);
        await ƒS.update(1);
        await playParagraph(storyTexts.before_the_fight);
        await ƒS.Sound.fade(sounds.adventureMusic, 0, 1, false);
        let success = await fight(enemys.slime);
        console.log(success);
        await ƒS.Sound.fade(sounds.adventureMusic, 0.5, 1, true);
        await playParagraph(storyTexts.after_the_fight);
        return "5";
    }
}


