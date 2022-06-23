namespace VisualNovel {

    export async function forest(): ƒS.SceneReturn {
        console.log("Scene:  forest");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            first_encounter: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " ist wach und wartet bis die Hellgenug ist, um in den Wald zu gehen." },
                Protagonist_002: { text: "<i>Es sollte jetzt hell genug sein ich haben nur noch" + `${dataForSave.dayCounter}` + " bis  es zu spät ist.</i>", pose: POSES.HAPPY },
                Narrator_003: { text: `${dataForSave.nameProtagonist}` + " betritt den Wald." },
            },
            in_the_forest:{
                Protagonist_004: { text: "<i>Es sieht aus als wäre hier einen Weg, ich sollte ihm folgen,</i>", pose: POSES.HAPPY },
                Protagonist_005: { text: "<i>wenn ich war los im Wald rumlaufe finde ich nicht mehr zurück.</i>", pose: POSES.HAPPY },
                Narrator_006: { text: "Nach einer Weile teilte der weg sich in drei Weitere Wege auf." },
                Protagonist_007: { text: "<i>Das hat mir gerade noch gefehlt.</i>", pose: POSES.HAPPY },
                Protagonist_008: { text: "<i>Welchen Weg soll ich nur gehen.</i>", pose: POSES.HAPPY }
            },
            first_crossing: {
                Protagonist_009: { text: "<i>Am Ende des rechten Weges scheint etwas zu leuchten.</i>", pose: POSES.HAPPY },
                Protagonist_010: { text: "<i>Links ist der Weg fast komplett zugewachsen, sodass der weg fast nicht mehr zu erkennen ist.</i>", pose: POSES.HAPPY },
                Protagonist_011: { text: "<i>Nach vorne bleibt der weg normal weiterzugehen </i>", pose: POSES.HAPPY }
            },
            on_the_way: {
                Narrator_006: { text: "Nach einer Weile teilte der weg sich in drei weitere Wege auf." },
                Protagonist_012: { text: "<i>Schon wieder Eine Kreuzzug,</i>", pose: POSES.SAD },
                Protagonist_013: { text: "<i>jetzt verstehe ich was der " + `${characters.doctor.name}` + " damit gemeint hat das sich die Leute hier verirrt haben.</i>", pose: POSES.SAD },
                Protagonist_014: { text: "<i>Welchen weg soll ich jetzt gehen?</i>", pose: POSES.SAD }
            },
            second_crossing: {
                Protagonist_015: { text: "<i>Rechts scheint es dunkler zu werden.</i>", pose: POSES.SAD },
                Protagonist_016: { text: "<i>Der Linke weg sieht normal aus.</i>", pose: POSES.SAD },
                Protagonist_017: { text: "<i>Von gerade aus scheint Licht zu kommen.</i>", pose: POSES.SAD }
            },
            further_along_the_way: {
                Narrator_018: { text: "Nach einer Weile teilte der weg sich in drei weitere Wege auf." },
                Protagonist_019: { text: "<i>Das war ja klar.</i>", pose: POSES.SAD },
                Protagonist_020: { text: "<i>Welchen weg soll ich jetzt gehen?</i>", pose: POSES.SAD }
            },
            third_crossing: {
                Protagonist_021: { text: "<i>Der Rechte weg scheint aufzuhören, aber ich kann mich durch das Dickicht zwängen.</i>", pose: POSES.SAD },
                Protagonist_022: { text: "<i>Links scheint der Weg noch eine Weile zu gehen.</i>", pose: POSES.SAD },
                Protagonist_023: { text: "<i>Gerade aus ist Licht, es scheint aus dem Wald zu führen.</i>", pose: POSES.SAD }
            }
            
        };
        let crossingPaths = {
            right: "Nach rechts",
            straight: "Gerade Aus",
            left: "Nach links"
        };


        if (dataForSave.forestCounter == 0) {
            //TODO: übergang nächster Tag
            await playParagraph(storyTexts.first_encounter);
            await ƒS.Location.show(locations.forest);
            await ƒS.update(1);
            await playParagraph(storyTexts.in_the_forest);
        }
        await playParagraph(storyTexts.first_crossing);
        let firstDirection = await ƒS.Menu.getInput(crossingPaths);
        //TODO: übergang
        if (dataForSave.forestCounter == 0) {
            await playParagraph(storyTexts.on_the_way);
        }
        await playParagraph(storyTexts.second_crossing);
        let secondDirection = await ƒS.Menu.getInput(crossingPaths);
        //TODO: übergang
        if (dataForSave.forestCounter == 0) {
            await playParagraph(storyTexts.further_along_the_way);
        }
        await playParagraph(storyTexts.third_crossing);
        let thirdDirection = await ƒS.Menu.getInput(crossingPaths);
        //TODO: übergang


        if (firstDirection == crossingPaths.right && secondDirection == crossingPaths.straight && thirdDirection == crossingPaths.straight) {
            return "14";
        } else if (firstDirection == crossingPaths.left && secondDirection == crossingPaths.right && thirdDirection == crossingPaths.right) {
            return "15";
        } else {
            if (dataForSave.forestCounter >= 1) {
                return "13";
            } else {
                dataForSave.forestCounter += 1;
                return "12";
            }

        }
    }

}
