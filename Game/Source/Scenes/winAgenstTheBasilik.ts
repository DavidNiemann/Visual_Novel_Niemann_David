namespace VisualNovel {
    export async function winAgastTheBasilik(): ƒS.SceneReturn {
        console.log("Scene: win agast the Basilik");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            success: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " hat mit einem guten schlag  der Basilisk schwer zu verwunden." },
                Narrator_002: { text: "Der Basilisk hat noch genug Kraft, um zu fliehen." },
                Protagonist_003: { text: "<i>Der hat mir wirklich zugesetzt.</i>", pose: POSES.SAD },
                Protagonist_004: { text: "<i>Ich sollte die Zeit nutzen, um hier weg zu kommen bevor noch einer auftaucht.</i>", pose: POSES.SAD },
                Narrator_005: { text: `${dataForSave.nameProtagonist}` + "verschwendet seine Zeit  und läuft schnell in den pfade weiter." }
            },
            end_of_the_mountain: {
                Narrator_006: { text: `${dataForSave.nameProtagonist}` + " kommt am Ende des Gebirges an.Die Sonne ist am schon untergehen" },
                Protagonist_007: { text: "<i>Endlich dort weck.</i>", pose: POSES.SAD },
                Protagonist_008: { text: "<i>Da vorne  ist ein Wald, das muss er sein, der Ort, an dem die Blume wachst.</i>", pose: POSES.SAD },
                Protagonist_009: { text: "<i>Ich brauche jetzt erst mal eine Pause, bevor ich weitergehe.</i>", pose: POSES.SAD },
                Protagonist_010: { text: "<i>Es sieht hier sicher aus ich sollte mich, ich denke ich kann hier ein Lager aufschlagen.</i>", pose: POSES.SAD },
                Narrator_011: { text: `${dataForSave.nameProtagonist}` + " schlägt seien Lager auf und legt sich direkt hin." }
            }

        };
        await playParagraph(storyTexts.success);
        await showBlackTransition(locations.mountains);
        await playParagraph(storyTexts.end_of_the_mountain);
        dataForSave.dayCounter += 1;

    }
}
