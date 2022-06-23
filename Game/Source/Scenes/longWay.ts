namespace VisualNovel {
    export async function longWay(): ƒS.SceneReturn {
        console.log("Scene: long way");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            the_decision: {
                Protagonist_001: { text: "<i>ich nehme den kurzen Weg. Das wichtige ist, das ich auch ankomme. </i>", pose: POSES.HAPPY },
                Narrator_002: { text: `${dataForSave.nameProtagonist}` + " macht ging den langen Weg entlang." }
            },
            end_of_the_mountains: {
                Narrator_003: { text: "Nach 2 Tagen Kamm " + `${dataForSave.nameProtagonist}` + " am Ende des Gebirges an.Die Sonne ist am schon untergehen." },
                Protagonist_004: { text: "<i>Endlich bin ich dich Gebirge gekommen.</i>", pose: POSES.HAPPY },
                Protagonist_005: { text: "<i>Der Weg war länger als erwartet, ich hoffe es war kein Fehler den lagen weg zu nehme.</i>", pose: POSES.HAPPY },
                Protagonist_006: { text: "<i>Da vorne  ist ein Wald, das muss er sein, der Ort, an dem die Blume wachst.</i>", pose: POSES.HAPPY },
                Protagonist_007: { text: "<i>Es bringt jetzt nichts mehr Weitere zugehen, wenn ich im Dunkeln in den Wald gehe, verlaufe ich mich erstrecht.</i>", pose: POSES.HAPPY },
                Protagonist_008: { text: "<i>Es sieht hier sicher aus ich sollte mich, ich denke ich kann hier ein Lager aufschlagen.</i>", pose: POSES.HAPPY },
                Narrator_009: { text: "Schlägt seien Lager auf und legt sich direkt hin." }
            }

        };
        await playParagraph(storyTexts.the_decision);
        // TODO: übergag +2 Tage
        await playParagraph(storyTexts.end_of_the_mountains);
        dataForSave.dayCounter += 2;
    }


}
