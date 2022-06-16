namespace VisualNovle {
    export async function theStranger(): ƒS.SceneReturn {
        console.log("Scene:  The Stranger");

        let storiesText = {
            encounter_with_the_stranger: {
                Narrator_001: `${dataForSave.nameProtagonist}` + "ist fast bei den " + `${locations.mountains.name}` + " angekommen, es wurde schon spät.",
                Narrator_002: "Die Sonne geht hinter dem Berg geradeunter.",
                Narrator_003: `${dataForSave.nameProtagonist}` + " sieht eine Gestalt in der Ferne",
                Protagonist_004: "da ist jemand",
                Protagonist_005: "egal ich darf keine Zeit verlieren, ignorier ich einfach.",
                Narrator_006: "der Mann sieht verwahrlost  aus und ist in zerrissenen Lumpen gekleidet.",
                Stranger_007: "Junger Mann, ich habe nicht viel und will auch nicht um viel bitten.",
                Stranger_008: "Aber ich sammle leere Flaschen, haben sie eine die sie mir überlassen könnten."
            },
            hand_over_the_bottle: {
                Protagonist_001: "hier sie können Diese leere Flaschen eins Heils tranks haben.",
                Stranger_002: "was für eine Wunderschönes Exemplar.Vielen Dank.",
                Stranger_003: "wohin sind sie unterwegs ?",
                Protagonist_004: "ich bin auf dem Weg zum " + `${locations.forest.name}` + " ich muss eine " + `${items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.",
                Stranger_005: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.Und nochmal Danke für die Flasche."
            },
            ignore_the_stranger: {
                Protagonist_001: "Ich kann ihnen leider nichts geben.",
                Stranger_002: "sehr schade.",
                Stranger_003: "wohin sind sie unterwegs?",
                Protagonist_004: "ich bin auf dem Weg zum " + `${locations.forest.name}` + " ich muss eine " + `${items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.",
                Stranger_005: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg."
            },
            give_nothing_to_the_stranger: {
                Protagonist_001: "<i>ignorier ihn einfach ich habe keine Zeit mit ihm zu reden</i>"
            },
            after_the_stranger: {
                Narrator_001: "<name>läuft in einem schnellen Schritt weiter.",
                Protagonist_002: "<i>Was für ein Komischer Mann hate schon angst das er mich angreift.</i>"
            },
            back_to_the_way: {
                Narrator_001: `${dataForSave.nameProtagonist}` + " ist am Fuße der " + `${locations.mountains.name}` + " Berge angekommen.",
                Protagonist_002: "</i>Die Sonne ist schon untergegangen.Ich sollte mich ein paar Stunden ausruhen </i>",
                Narrator_003: `${dataForSave.nameProtagonist}` + " schlagt ein Lager auf und legt sich hin."
            }

        };

        let answersForStranger = {

            isHandOver: "Übergebe eine Leere Flasche",
            isIgnore: "Ignoriere den Fremden",
            isGiveNothing: "Dem Fremden nichts geben"

        };
        await playParagraph(storiesText.encounter_with_the_stranger);
        console.log(answersForStranger);
        let answerToTheStranger = await ƒS.Menu.getInput(answersForStranger);

        switch (answerToTheStranger) {
            case answersForStranger.isHandOver:
                //ƒS.Speech.clear();
                if (ƒS.Inventory.getAmount(items.empty_glass_bottle)) {
                    items.empty_glass_bottle.static = false;
                    ƒS.Inventory.open();
                    await playParagraph(storiesText.hand_over_the_bottle);
                    break;
                }
                await ƒS.Speech.tell(characters.protagonist, "<i>Ich besitze leider keine leere flsche.</i>");
            case answersForStranger.isGiveNothing:
                // ƒS.Speech.clear()
                await playParagraph(storiesText.give_nothing_to_the_stranger);
                break;
            case answersForStranger.isGiveNothing:
                //ƒS.Speech.clear();
                await playParagraph(storiesText.ignore_the_stranger);
                break;
            default:
                break;
        }
        await playParagraph(storiesText.back_to_the_way);

    }
}



