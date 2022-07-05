namespace VisualNovel {
    export async function lostinTheWoods(): ƒS.SceneReturn {
        console.log("Scene:  lost in The Woods");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            lost_in_The_Woods: {
                Narrator_001: { text: `${dataForSave.nameProtagonist}` + " ist mitten im Wald gelandet und keine Blumen oder Ausgang in Sicht in Sicht." },
                Protagonist_002: { text: "<i> wo lange bin ich schon hier. Ich finde Garnichts. </i>", pose: POSES.SAD },
                Protagonist_003: { text: "<i> alle sieht hier gleich aus.</i>", pose: POSES.SAD },
                Protagonist_004: { text: "<i> ich bin schon viel zu lange hier und Ein Ausweg finde ich auch nicht mehr. </i>", pose: POSES.SAD },
                Protagonist_005: { text: "<i> Es ist hoffnungslos ich sollte nur noch einen Ausgang suchen. </i>", pose: POSES.SAD },
                Narrator_006: { text: `${dataForSave.nameProtagonist}` + " wurde nicht mehr in seinem Heimat Dorf gesehen." }
            }



        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }

        await playParagraph(storyTexts.lost_in_The_Woods);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " hat sich in dem " + `${locations.forest.name}` + " verlaufen </p>";
        return "99"; // Bad Ending 

    }


}