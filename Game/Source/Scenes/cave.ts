namespace VisualNovel {
    export async function theCave(): ƒS.SceneReturn {
        console.log("Scene: the cave");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            the_cave: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " quälte sich durch enges getrübt bis vor einer Höhle vor ihm erscheint." },
                Protagonist_002: { text: "<i> Eine Höhle?!, ich bin hier will falsch.</i>", pose: POSES.HAPPY },
                Protagonist_003: { text: "<i> Es wird schon wieder Dunkel, ich muss den ganze tag in dem Wald umhergeirrt sein.</i>", pose: POSES.HAPPY },
                Protagonist_004: { text: "<i> Ich muss aufpassen das kein Monster darin wohnt.</i>", pose: POSES.HAPPY },
                Protagonist_005: { text: "<i> Bis jetzt war der Wald sehr ruhig, ich denke nicht, dass hier ein Monster lebt.</i>", pose: POSES.HAPPY },
                Protagonist_006: { text: "<i> Ich muss wohl bis zum morgen Schutz in der Höhle suchen.</i>", pose: POSES.SAD }
            },
            the_fairy: {
                Narrator_007: { text: "Als" + `${dataForSave.nameProtagonist}` + " die Höhle  betritt hört er ein leises Singen." },
                Protagonist_008: { text: "<i>Was ist das, singt Hier eine Frau? </i>", pose: POSES.FRIGHTEND },
                Protagonist_009: { text: "<i>Vielleicht hat sich hier noch andere Menschen Verlaufen</i>", pose: POSES.FRIGHTEND },
                Narrator_0010: { text: `${dataForSave.nameProtagonist}` + " geht tiefer in die Höhle." },
                Narrator_0011: { text: "Nach einer Weile tauchte eine Quelle vor ihm auf." },
                Protagonist_012: { text: "<i>Eine Quelle?!</i>", pose: POSES.FRIGHTEND },
                Protagonist_013: { text: "<i>aber es scheint niemand hier zu sein, das Singen ist auch verstummt.</i>", pose: POSES.FRIGHTEND },
                Narrator_014: { text: `${dataForSave.nameProtagonist}` + " schreitet and die Quelle Heran, " },
                Narrator_015: { text: "plötzlich taucht eine junge Frau von Geisterhand über der Quelle auf." },
                Fairy_016: { text: "hehehe ich bin die Große Fee diese Quelle.", pose: POSES.HAPPY },
                Fairy_017: { text: "Ich hat seinen Jahrhunderten niemand mehr besucht", pose: POSES.HAPPY },
                Fairy_018: { text: "Was für dich zu mir?", pose: POSES.HAPPY },
                Protagonist_019: { text: "Ich haben mich im Wald verlaufen. ", pose: POSES.SAD },
                Protagonist_020: { text: "ich war auf der such nach den " + `${items.flower.name}` + ".", pose: POSES.SAD },
                Fairy_021: { text: "hehehe so ist, dass, warum bist du suchst du diese, du musst, ein langer Weg hinter dir haben.", pose: POSES.HAPPY }
            },
            spring_water: {
                Fairy_022: { text: "ich sehen du versuchst deine Mutter zu retten, wie Helden Haft hehehe.", pose: POSES.HAPPY },
                Protagonist_023: { text: "Ich bin kein Held, durch meine Unwissenheit, Kamm es erst zu dieser Situation.", pose: POSES.SAD },
                Protagonist_024: { text: "und die Blumen habe ich auch noch nicht gefunden.", pose: POSES.SAD },
                Fairy_025: { text: "du bist doch schon so nah an denen Ziel, du wirst doch nicht aufgeben.", pose: POSES.HAPPY },
                Protagonist_026: { text: "ich werde nicht auf Geben, aber ich habe keine Zeit, ich muss die Blumen finden und sie in mein Dorf bringen, bevor es zu spät ist.", pose: POSES.SAD },
                Fairy_027: { text: "hehehe", pose: POSES.HAPPY },
                Protagonist_028: { text: "kannst du mir nicht den Weg zu den Blumen zeigen.", pose: POSES.SAD },
                Fairy_029: { text: "Das könnte ich, aber tue ich nicht hehehe.", pose: POSES.HAPPY },
                Protagonist_030: { text: "Warum nicht? Dann werde ich sie selbst suche.", pose: POSES.SAD },
                Fairy_031: { text: "Du hast eine reines herz und ein starker Willen.", pose: POSES.HAPPY },
                Fairy_032: { text: "hehehe", pose: POSES.HAPPY },
                Fairy_033: { text: "Du kannst statt der Blume, eine Glas Wasser dieser Magischen haben,", pose: POSES.HAPPY },
                Fairy_034: { text: "das sollte das sollte deiner Mutter Rettern Können.", pose: POSES.HAPPY },
                Fairy_035: { text: "Die Blumen haben auch nur diese Kraft, weil sie Wasser aus dieser Quelle beziehen.", pose: POSES.HAPPY },
                Fairy_036: { text: "Dass Das Wasser sogar größer Erfolgschance hat,  hehehe.", pose: POSES.HAPPY },
                Protagonist_037: { text: " vielen Dank.", pose: POSES.HAPPY },
                Fairy_038: { text: "Es war schön mit dir zu reden hehehe.", pose: POSES.HAPPY },
                Narrator_039: { text: `${dataForSave.nameProtagonist}` + " füllte einen Wasser Tasche voll mit dem Quellwasser." },
                Protagonist_040: { text: "<i>Warum wird mir wird schwindelig.</i>", pose: POSES.HAPPY },
                Narrator_0041: { text: `${dataForSave.nameProtagonist}` + " wird schwarz vor Augen." }
            },
            next_morning: {
                Narrator_0042: { text: `${dataForSave.nameProtagonist}` + " wacht am nächsten Morgen am Eingang des Waldes wieder auf." },
                Protagonist_043: { text: "<i>was ist da passiert ich war doch gerade noch in einer Höhler mit einer Fee</i>", pose: POSES.FRIGHTEND },
                Narrator_0044: { text: "Er schaut in seine Tasche." },
                Protagonist_045: { text: "<i>zum Glück ich habe noch das Wasser ich hoffe die Fee hat mich nicht angelogen.</i>", pose: POSES.HAPPY },
                Protagonist_046: { text: "<i>dann mache ich mich wohl auf den Heimweg.</i>", pose: POSES.HAPPY }
            }


        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText.push("<h1>Die Höle</h1>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        await playParagraph(storyTexts.the_cave);
        await ƒS.Location.show(locations.cave);
        await ƒS.update(1);
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + " hat die " + `${locations.cave.name}` + " betreten </p>");
        await ƒS.Sound.fade(sounds.adventureMusic, 0, 1, false);
        await ƒS.Sound.fade(sounds.mysteriousMusic, 0.3, 1, true);
        await playParagraph(storyTexts.the_fairy);
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + " ist der " + `${characters.Fairy.name}` + " begebnet </p>");
        await ƒS.Location.show(locations.forest);
        await showAnnouncement(locations.cave, announcements.tell_story, transitions.leftTORight);
        await playParagraph(storyTexts.spring_water);
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + " hat " + `${items.magic_water.name}` + " erhalten  </p>");
        ƒS.Inventory.add(items.magic_water);
        await saveInventory();
        await showAnnouncement(locations.forest, announcements.day_goes_by, transitions.leftTORight);
        await ƒS.Sound.fade(sounds.mysteriousMusic, 0, 1, false);
        await ƒS.Sound.fade(sounds.adventureMusic, 0.3, 1, true);
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + " hat den " + `${locations.forest.name}` + " verlassen </p>");
        await playParagraph(storyTexts.next_morning);
        dataForSave.dayCounter += 1;
        dataForSave.logText.push("<h1>die Rückreise</h1>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        await showBlackTransition(locations.mountains);
        if (dataForSave.bottleWasGiven) {
            return "17";
        } else {
            return "16";
        }
    }


}