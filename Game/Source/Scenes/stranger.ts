namespace VisualNovel {
    export async function theStranger(): ƒS.SceneReturn {
        console.log("Scene:  The Stranger");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            encounter_with_the_stranger: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + "ist fast bei den " + `${locations.mountains.name}` + " angekommen, es wurde schon spät." },
                Narrator_002: { text: "Die Sonne geht hinter dem Berg geradeunter." },
                Narrator_003: { text: `${dataForSave.nameProtagonist}` + " sieht eine Gestalt in der Ferne" },
                Protagonist_004: { text: "da ist jemand", pose: POSES.SAD },
                Protagonist_005: { text: "egal ich darf keine Zeit verlieren, ignorier ich einfach.", pose: POSES.SAD },
                Narrator_006: { text: "der Mann sieht verwahrlost  aus und ist in zerrissenen Lumpen gekleidet." },
                Strange_man_007: { text: "Junger Mann, ich habe nicht viel und will auch nicht um viel bitten.", pose: POSES.HAPPY },
                Strange_man_008: { text: "Aber ich sammle leere Flaschen, haben sie eine die sie mir überlassen könnten.", pose: POSES.HAPPY }
            },
            hand_over_the_bottle: {
                Protagonist_001: { text: "hier sie können Diese leere Flaschen eins Heils tranks haben.", pose: POSES.SAD },
                Strange_man_002: { text: "was für eine Wunderschönes Exemplar.Vielen Dank.", pose: POSES.HAPPY },
                Strange_man_003: { text: "wohin sind sie unterwegs ?", pose: POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${locations.forest.name}` + " ich muss eine " + `${items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.", pose: POSES.SAD },
                Strange_man_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.Und nochmal Danke für die Flasche.", pose: POSES.HAPPY }
            },
            give_nothing_to_the_stranger: {
                Protagonist_001: { text: "Ich kann ihnen leider nichts geben." , pose: POSES.SAD},
                Strange_man_002: { text: "sehr schade.", pose: POSES.HAPPY },
                Strange_man_003: { text: "wohin sind sie unterwegs?", pose: POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${locations.forest.name}` + " ich muss eine " + `${items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.", pose: POSES.SAD },
                Strange_man_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.", pose: POSES.HAPPY }
            },
            ignore_the_stranger: {
                Protagonist_001: { text: "<i>ignorier ihn einfach ich habe keine Zeit mit ihm zu reden</i>", pose: POSES.SAD }
            },
            after_the_stranger: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " läuft in einem schnellen Schritt weiter." },
                Protagonist_002: { text: "<i>Was für ein Komischer Mann hate schon angst das er mich angreift.</i>", pose: POSES.SAD }
            },
            back_to_the_way: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " ist am Fuße der " + `${locations.mountains.name}` + " Berge angekommen." },
                Protagonist_002: { text: "</i>Die Sonne ist schon untergegangen.Ich sollte mich ein paar Stunden ausruhen </i>", pose: POSES.SAD },
                Narrator_003: { text: `${dataForSave.nameProtagonist}` + " schlagt ein Lager auf und legt sich hin." }
            }

        };

        let answersForStranger = {

            isHandOver: "Übergebe eine Leere Flasche",
            isIgnore: "Ignoriere den Fremden",
            isGiveNothing: "Dem Fremden nichts geben"

        };
        await playParagraph(storyTexts.encounter_with_the_stranger);
        let answerToTheStranger = await ƒS.Menu.getInput(answersForStranger, "dialog_choices");

        switch (answerToTheStranger) {
            case answersForStranger.isHandOver:

                if (ƒS.Inventory.getAmount(items.empty_glass_bottle)) {
                    let used: ƒS.ItemDefinition = await activateItem(items.empty_glass_bottle);
                    if (used) {
                        await playParagraph(storyTexts.hand_over_the_bottle);
                        dataForSave.bottleWasGiven = true;
                        break;
                    }

                }
                await ƒS.Speech.tell(characters.protagonist, "<i>Ich besitze leider keine leere flsche.</i>");
            case answersForStranger.isGiveNothing:

                await playParagraph(storyTexts.give_nothing_to_the_stranger);
                break;
            case answersForStranger.isIgnore:

                await playParagraph(storyTexts.ignore_the_stranger);
                break;
            default:
                break;
        }
        await playParagraph(storyTexts.back_to_the_way);

        return "6";

    }
}



