namespace VisualNovel {
    export async function dangerousWay(): ƒS.SceneReturn {
        console.log("Scene: dangerous way");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            the_decision: {
                Protagonist_001: { text: "<i>ich nehme den kurzen Weg. Ich muss mich beeilen </i>", pose: POSES.HAPPY },
                Narrator_002: { text: `${dataForSave.nameProtagonist}` + " begibt sich auf den Pfad an der Klippe, er strauchelt ein bisschen mit dem Wind aber bleibt ehrgeizig auf dem Weg." }
            },
            doubting: {
                Narrator_003: { text: "Es sind Stunden vergangen und der Pfad scheint noch enger zu werden." },
                Narrator_004: { text: `${dataForSave.nameProtagonist}` + " bleibt stehen, er hat muss ich gegen die Bergwand drücken, um noch an dem Pfad zu passen." },
                Protagonist_005: { text: "<i>Ich Kann nicht weiter ich fliege noch runter.</i>", pose: POSES.SAD },
                Protagonist_006: { text: "<i>Nein ich kann jetzt nicht aufgeben, Meine Mutter hat mich gerettet und ich bin an allem schuld.</i>", pose: POSES.SAD },
                Protagonist_007: { text: "<i>Mein Vater hätte es niemals gezögert.<i>", pose: POSES.SAD },
                Protagonist_008: { text: "<i>Ich darf nicht zu viel Zeit verlieren.<i>", pose: POSES.SAD },
                Narrator_009: { text: `${dataForSave.nameProtagonist}` + " nimmt seinen ganzen Mut zusammen und schreitet mit wackligem schritt langsam voran." }
            },
            the_end_of_the_cliff: {
                Narrator_010: { text: "Der Pfad scheint wieder breiter zu werden." },
                Protagonist_011: { text: "<i>Zum Glück bin nicht auf ein Monster gestoßen.</i>", pose: POSES.HAPPY },
                Protagonist_012: { text: "<i>Ich muss mich kurz hinsetzen.</i>", pose: POSES.SAD },
                Narrator_013: { text: `${dataForSave.nameProtagonist}` + " setzt sich an Die Felswand, der Pfad ist breit genug, dass er sein beine ganz ausstrecken kann." },
                Narrator_014: { text: " Es ist ein lautes Schreien zu hören." },
                Narrator_015: { text: `${dataForSave.nameProtagonist}` + " schreckt sofort auf und greift an zu seinem Schwert." },
                Protagonist_016: { text: "<i>Ich hätte mich nicht zu früh freuen sollen.</i>", pose: POSES.SAD },
                Narrator_017: { text: "Ein kleiner Basilisk landet vor ihm" },
                Protagonist_018: { text: "<i>Den kann ich nicht besiegen, aber ich habe keine andere Wahl wie es zu versuchen", pose: POSES.SAD }
            }

        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " hat den Gerfärlichen Weg genommen </p>";
        await playParagraph(storyTexts.theDecision);
        await showBlackTransition(locations.mountains);
        await playParagraph(storyTexts.doubting);
        await showBlackTransition(locations.mountains);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " hat das Ende Der Klippe erreicht </p>";
        await playParagraph(storyTexts.the_end_of_the_cliff);
        await showBlackTransition(locations.mountains);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " wurde von einem " + `${enemys.basilisk.name}` + " angegriffen </p>";
        let success = await fight(enemys.basilisk);
        console.log(success);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " hat gegen den " + `${enemys.basilisk.name}` + (success ? " gewonnen</p>" : " verloren</p>");
        if (success) {
            return "9";
        }
        else {
            return "8";
        }
    }


}
