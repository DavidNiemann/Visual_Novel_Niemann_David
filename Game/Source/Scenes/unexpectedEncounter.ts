namespace VisualNovel {
    export async function unexpectedEncounter(): ƒS.SceneReturn {
        console.log("Scene: a unexpected Encounter");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            the_stranger_shows_up_again: {
                Narrator_001: { text: "bevor " + `${dataForSave.nameProtagonist}` + "  wieder ins Gebirge ging." },
                Protagonist_002: { text: "<i>ist das Eine Kutsche da vorne?</i>", pose: POSES.FRIGHTEND },
                Strange_man_003: { text: "Auf dich habe ich gewartet.", pose: POSES.HAPPY },
                Protagonist_004: { text: "<i>kennen wir uns, warum ?</i>", pose: POSES.FRIGHTEND },
                Strange_man_005: { text: "Ich bin der dem du deine Flasche überlassen hast.", pose: POSES.HAPPY },
                Strange_man_006: { text: "Ich wollte mich bedanken und habe meine Kutsche mitgebracht.", pose: POSES.HAPPY },
                Strange_man_007: { text: "Mit der Kusche schaffen wir es bis heute Abend wieder im Dorf zu sein.", pose: POSES.HAPPY },
                Protagonist_008: { text: "<i>wirklich, ich danke dir, dann werde ich es auf jeden Fall rechtzeitig schaffen</i>", pose: POSES.HAPPY },
                Strange_man_009: { text: "Nichts zu danken Sie haben mir dieses Wunder schöne Exemplar eine Flasche übergeben.", pose: POSES.HAPPY },
                Strange_man_010: { text: "Spring auf, wir fahren direkt los.", pose: POSES.HAPPY }
            },
            back_to_the_village: {
                Narrator_011: { text: `${characters.strange_man.name}` + " und " + `${dataForSave.nameProtagonist}` + " machten sich auf den Weg in dorf." },
                Narrator_012: { text: "Es wurde Abend und Die Kutsche Kamm im Dorf an." },
                Protagonist_013: { text: "vielen Dank, ohne ihre Hilfe, hätte ich es vielleicht rechtzeitig Geschäft", pose: POSES.HAPPY },
                Narrator_014: { text: `${dataForSave.nameProtagonist}` + " ging zu seinem Haus, wo " + `${characters.doctor.name}` + " schon auf ihn wartete." }
            }

        };
        
        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " trifft wieder auf den Fremden Mann </p>";
        await playParagraph(storyTexts.the_stranger_shows_up_again);
        await showAnnouncement(locations.village, announcements.day_goes_by, transitions.leftTORight);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>Der Fremde mann nahm " + `${dataForSave.nameProtagonist}` + " mit seiner Kutsche mit </p>";
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " ist wieder im " + `${locations.village.name}` + " angekommen </p>";
        await playParagraph(storyTexts.back_to_the_village);
        await showBlackTransition(locations.village);
        return "18";
    }
}

