namespace VisualNovel {
    export async function warkBack(): ƒS.SceneReturn {
        console.log("Scene: the walk to the village");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            back_to_the_mountain: {
                Narrator_001: { text: " <name> machte sich auf den auf den Berg." }
            },
            chosen_long_way: {
                Protagonist_002: { text: "<i>Ich kann jetzt nicht noch was passieren lassen ich nehmen lieber wieder den sicheren Weg.</i>", pose: POSES.HAPPY }

            },
            chosen_dangerus_way: {
                Protagonist_003: { text: "<i>Ich würde das nicht nochmal überleben an dieser Klippe entlangzugehen, geschweige wenn der Basilisk zurückkommt.</i>", pose: POSES.HAPPY },
                Protagonist_004: { text: "<i>ich gehe diesmal den sicheren weg.</i>", pose: POSES.HAPPY }
            },
            rest_of_the_way: {
                Narrator_005: { text: `${dataForSave.nameProtagonist}` + " nahm den sicheren Weg" },
                Narrator_006: { text: "Nach 2 Tagen ohne Zwischenfälle waren das Gebirge überwunden." },
                Narrator_007: { text: "Nach einem weiteren Tag Kamm" + `${dataForSave.nameProtagonist}` + " wieder in seinem Heimatdorf an." },
                Protagonist_008: { text: "<i>Endlich angekommen ich muss schnell zu meiner Mutter.</i>", pose: POSES.HAPPY },
                Narrator_009: { text: "<name> rennt die Letzen Meter zu sich nach Hause." }
            }


        };

        await playParagraph(storyTexts.back_to_the_mountain);
        if (dataForSave.dangerousPathChosen) {
            await playParagraph(storyTexts.chosen_dangerus_way);
        } else {
            await playParagraph(storyTexts.chosen_long_way);
        }
        await playParagraph(storyTexts.rest_of_the_way);
        dataForSave.dayCounter +=  3;
        //TODO übergang
        return "18";
    }

}
