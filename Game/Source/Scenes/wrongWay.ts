namespace VisualNovel {
    export async function theWrongWay(): ƒS.SceneReturn {
        console.log("Scene:  wrong Way");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            out_of_the_woods: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " hat das Ende des Waldes erreicht, aber es schein nicht, als wäre er auf dem gewünschten Ort angekommen." },
                Protagonist_002: { text: "<i>Wo bin ich hier.</i>", pose: POSES.SAD },
                Protagonist_003: { text: "<i>ich bin hier falsch, ich muss vorbeigelaufen sein</i>", pose: POSES.SAD },
                Protagonist_004: { text: "<i>Warte vor mir ist das Gebirge, ich bin im Kreis gelaufen,</i>", pose: POSES.SAD },
                Protagonist_005: { text: "<i>und jetzt geht auch schon wieder die Sonne unter </i>", pose: POSES.SAD },
                Protagonist_006: { text: "<i>Ich muss wieder auf den nächsten Morgen warten</i>", pose: POSES.SAD },
                Protagonist_007: { text: "<i>Ich muss die Blume morgen finden sonst komme ich nicht mehr rechtzeitig zurück ins Dorf</i>", pose: POSES.SAD },
                Protagonist_008: { text: "<i>Ich werde jetzt erstmal schlafen, morgen muss ich direkt bei Sonnenaufgang wieder los.</i>", pose: POSES.SAD }
            },
            the_next_morning: {
                Narrator_009: { text: "Der nächste Morgen ist angebrochen." },
                Protagonist_010: { text: "<i>Heute muss ich die Bluem finden, ich habe keine Zeit.</i>", pose: POSES.SAD },
                Protagonist_011: { text: "<i>" + `${characters.doctor.name}` + " hat gesagt das Die Blumen im Wald auf einer Wiese wachsen.</i>", pose: POSES.SAD },
                Protagonist_012: { text: "<i>Die Blumen sollen Leuchten. Vielleicht sollte ich mehr darauf achten</i>", pose: POSES.SAD },
                Narrator_013: { text: `${dataForSave.nameProtagonist}` + " macht sich auf in den Wald" }
            }


        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>" + `${dataForSave.nameProtagonist}` + " ist wieder am anfang des Waldes </p>");
        await showBlackTransition(locations.mountains);
        await playParagraph(storyTexts.out_of_the_woods);
        await showAnnouncement(locations.mountains, announcements.day_goes_by, transitions.leftTORight);
        dataForSave.dayCounter += 1;
        dataForSave.logText.push("<h1>Der Wald (2 Versuch) </h1>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        await playParagraph(storyTexts.the_next_morning);
        return "11";
    }


}

