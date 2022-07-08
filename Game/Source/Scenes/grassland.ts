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
                Narrator_008: { text: `${dataForSave.nameProtagonist}` + " greifen zu seinem Schwert." }
            },
            after_the_fight: {

                Narrator_009: { text: "Die Restlichen schleime suchen das Weite." },
                Protagonist_010: { text: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>", pose: POSES.SAD },
                Narrator_011: { text: `${dataForSave.nameProtagonist}` + " läuft den Weg weiter." }
            }

        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText.push("<h1>die Wiese</h1>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + "s reise zu dem " + `${locations.forest.name}` + " um die  " + `${items.flower.name}` + " zu finden und seine Mutter zu retten hat begonnen</p>");
        await ƒS.Location.show(locations.grasslands);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.before_the_fight);
        await ƒS.Sound.fade(sounds.departureMusic, 0, 1, false);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " wurde von einem " + `${enemys.slime.name}` + " angegriffen </p>";
        let success = await fight(enemys.slime);
        console.log(success);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " hat gegen den" + `${enemys.slime.name}` + (success ? " gewonnen</p>" : " verloren</p>");
        await ƒS.Sound.fade(sounds.adventureMusic, 0.5, 1, true);
        await playParagraph(storyTexts.after_the_fight);
        return "5";
    }
}


