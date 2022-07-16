namespace VisualNovel {
    export async function tooLate(): ƒS.SceneReturn {
        console.log("Scene: too late");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            tooLate: {

                Protagonist_001: { text: `${characters.doctor.name}` + "  ich bin endlich zurück, ich hoffe ich bin noch rechtzeitig gekommen</i>", pose: POSES.SAD },
                Protagonist_002: { text: "ich habe die Blume gefunden und dabei.", pose: POSES.SAD },
                Doctor_003: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: POSES.SAD },
                Doctor_004: { text: "gib mir die Blume, wir müssen uns Beilen die " + `${dataForSave.dayCounter}` + " tage sind schon rum .", pose: POSES.SAD },
                Narrator_005: { text: `${dataForSave.nameProtagonist}` + "  übergibt die Blume " + `${characters.doctor.name}` },
                Narrator_006: { text: `${characters.doctor.name}` + " verarbeite die Blume zu Medizin und schüttet die die Flüssichkeit über die Regungslose Mutter." },
                Narrator_007: { text: "..." }
            },
            cant_save_mother: {
                Doctor_010: { text: "Wir waren wohl zu spät.", pose: POSES.SAD },
                Protagonist_011: { text: "…", pose: POSES.SAD },
                Protagonist_012: { text: "ich bin an allem schuld, ich bin zu nichts zu gebrauchen.", pose: POSES.SAD },
                Doctor_013: { text: "Mache dir keine Vorwürfe, nicht jeder währe mit der Blume zurückgekommen", pose: POSES.SAD },

                Protagonist_014: { text: "Ich war zu spät.", pose: POSES.SAD },
                Doctor_015: { text: "Was dankest du wenn eine Person stirbt ?", pose: POSES.HAPPY },
                Doctor_016: { text: "Wenn sie von einem Pfeil ins Herz getroffen wird", pose: POSES.HAPPY },
                Doctor_017: { text: "Nein… ", pose: POSES.HAPPY },
                Doctor_018: { text: "Wenn sie von einer unheilbaren Krankheit befallen wird.", pose: POSES.HAPPY },
                Doctor_019: { text: "Nein… ", pose: POSES.HAPPY },
                Doctor_020: { text: "Wenn sie von dem Zauber einer Alraune getroffen wird,", pose: POSES.HAPPY },
                Doctor_021: { text: "Nein… ", pose: POSES.HAPPY },
                Doctor_022: { text: "Eine Peron stirbt wenn man sie vergisst.", pose: POSES.HAPPY },
                Doctor_023: { text: "Also lass das nicht umsonst wesen sein.", pose: POSES.HAPPY },
                Protagonist_024: { text: "Du hast recht ich werde Trainieren, und Lernen, dass ich keine Beglast für die Menschen bin.", pose: POSES.HAPPY },
                Protagonist_025: { text: "Ich werde in dazu in die Welt hinausziehen, nichts hält mich mehr in diesem Dorf.", pose: POSES.HAPPY },
                Protagonist_026: { text: "vielen Dank für alles.", pose: POSES.HAPPY },
                Narrator_027: { text: "Und so verlies" + `${characters.doctor.name}` + " das Dorf begab sich auf seine ganz eigenen Abenteuer. " }
               
            }

        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        await playParagraph(storyTexts.tooLate);
        await showAnnouncement(locations.village, announcements.some_time_pass, transitions.leftTORight);
        await playParagraph(storyTexts.cant_save_mother);
        return "99";

    }

}