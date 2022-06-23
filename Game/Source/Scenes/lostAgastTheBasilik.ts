
namespace VisualNovel {
    export async function lostAgastTheBasilik(): ƒS.SceneReturn {
        console.log("Scene: lost agast the Basilik");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            fail: {
                Narrator_001: { text: "Der Basilisk hat " + `${dataForSave.nameProtagonist}` + " eine Schwerte Wunde am Arm verpasst.Er Kanna um noch seine Waffe halten." },
                Protagonist_002: { text: "<i>Das wars Wohl mit mir!</i>", pose: POSES.SAD },
                Narrator_003: { text: " Der Basilisk macht sich bereit auf  " + `${dataForSave.nameProtagonist}` + " den letzten schlag zu verpassen." },
                Protagonist_004: { text: "<i>Ich habe keine Kraft mehr, ich muss ausweichen.</i>", pose: POSES.SAD },
                Narrator_005: { text: `${dataForSave.nameProtagonist}` + " versucht mit letzter kraft noch aus dem Weg zu springen." },
                Narrator_006: { text: `${dataForSave.nameProtagonist}` + " Schaft es dem direkten Treffer auszuweichen," },
                Narrator_007: { text: " aber kommt Kamm zu nah and die Klippe, " },
                Narrator_008: { text: " der Boden bricht unter ihm zusammen." },
                Narrator_009: { text: `${dataForSave.nameProtagonist}` + " hat sich mit letzter kraft an einer Wurzel festgehalten." },
                Protagonist_010: { text: "<i>Es tut mir leid Mutter ich habe versagt.</i>", pose: POSES.SAD },
                Narrator_011: { text: `${dataForSave.nameProtagonist}` + "'s kraft reicht nicht mehr aus der Wunde an seinem arm ist zu tief." },
                Narrator_012: { text: `${dataForSave.nameProtagonist}` + " kann sich nicht mehr halten und stürzt in den Abrunde." },
                Protagonist_013: { text: "<i>...</i>", pose: POSES.SAD }
            }

        };

        await playParagraph(storyTexts.fail);
        return; // Bad Ending 
    }
}

