
namespace VisualNovel {
    export async function theMountain(): ƒS.SceneReturn {
        console.log("Scene:  the Mountain");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            morning: {
                Narrator_001: { text: "es ist früh am Morgen, die Sonne ist noch nicht aufgegangen." },
                Protagonist_002: { text: "ZZzzzz…Aaaa, <i>wie lange habe ich geschlafen? </i>", pose: POSES.HAPPY },
                Protagonist_003: { text: "<i>Es ist noch dunkel, egal ich habe genug geschlafen ich muss mich beeilen</i>", pose: POSES.HAPPY },
                Narrator_004: { text: `${dataForSave.nameProtagonist}` + " steht auf und packt sein Lager zusammen." },
                Narrator_005: { text: "als er alles aufgeräumt hat, nahm er noch ein schluck aus seinem Wasser Beutel und isst ein kleines Stück von seinem Brot.Und machte sich auf den Weg in das Gebirge." }
            },
            the_Paths: {
                Protagonist_006: { text: "<i>Der Dr.hat gesagt das hier eine Abzweigung kommen sollte.Ich sollte meine augenaufhalten</i>", pose: POSES.HAPPY },
                Protagonist_007: { text: "<i>da vorne ist ein enger Pfad das muss er sein</i>", pose: POSES.HAPPY },
                Narrator_008: { text: `${dataForSave.nameProtagonist}` + "Kamm an einer Klippe an.Dort ist ein Enger Pfad hindurch der Wind  pfeif und ein Warn Schild befestigt ist.Nebendran ist ein gut ausgearbeiteter breiter Pfad der Am auch für Kutschen geeignet aussieht." },
                Protagonist_009: { text: "<i>der Pfad soll mir einen Ganzen Tagesmarsch ersparen, aber es geht sehr tief runter, wenn.</i>", pose: POSES.HAPPY },
                Protagonist_010: { text: "<i>Wenn mich ein Windstoß Erwischt ist das mein ende.</i>" },
                Protagonist_011: { text: "<i>Zudem hat der " + `${characters.doctor.name}` + " erwähnt, dass dort Monster sein könnten.</i>", pose: POSES.HAPPY },
                Protagonist_012: { text: "<i>Wo soll ich lange gehen, den  langen Weg der sicher ist oder den kurzen der Gefährlich scheint ?</i>.", pose: POSES.HAPPY }
            }

        };

        let differentWays = {

            shortWay: "den kurzen Weg",
            longWay: "den Langen Weg"


        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText.push("<h1>Die Berge</h1>");
        dataForSave.dayCounter += 1;
        await showAnnouncement(locations.grasslands, announcements.day_goes_by, transitions.leftTORight);
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        await playParagraph(storyTexts.morning);
        await ƒS.Location.show(locations.mountains);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.thePaths);

        let chosenWay = await ƒS.Menu.getInput(differentWays, "dialog_choices");
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " ist an einer Kreuzung angekommen </p>";
        switch (chosenWay) {
            case differentWays.shortWay:
                return "7";

            case differentWays.longWay:
                dataForSave.dangerousPathChosen = true;
                return "10";
            default:
                break;
        }
    }


}
