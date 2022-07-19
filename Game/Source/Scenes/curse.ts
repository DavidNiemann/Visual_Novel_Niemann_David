namespace VisualNovel {
    export async function theCurse(): ƒS.SceneReturn {
        console.log("Scene:  the Curse");

        let storyTexts: { [paragraphName: string]: StoryText } = {
            introduction: {
                Narrator_001: { text: "Es gingen viele Jahre in die Lande." },
                Narrator_002: { text: "Seitdem Tod des Vaters, hatte die Familie es nicht immer leicht, da sie nicht viel Geld hatten." },
                Narrator_003: { text: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. " }
            },
            before_the_accident: {
                Mother_004: { text: "steh auf " + `${dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.", pose: POSES.HAPPY },
                Protagonist_005: { text: "ich komme gleich ich esse Kutz noch ein Stück Brot.", pose: POSES.HAPPY },
                Mother_006: { text: "ok ich gehe schon mal vor, komm dann nach.", pose: POSES.HAPPY },
                Narrator_007: { text: "nach dem " + `${dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld." },
                Narrator_008: { text: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen." },
                Protagonist_009: { text: "Mutter schau mal das ist aber eine komische Karotte.", pose: POSES.HAPPY },
                Narrator_010: { text: "der Junge fängt an der Pflanze zu ziehen." },
                Protagonist_011: { text: "die geht aber schwer raus.", pose: POSES.HAPPY },
                Narrator_012: { text: "Mutter dreht sich." },
                Mother_013: { text: "HALTTTTTT, das ist eine ….", pose: POSES.FRIGHTEND }
            },
            after_the_accident: {
                Mother_014: { text: "….", pose: POSES.NEUTRAL },
                Narrator_015: { text: "Der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${dataForSave.nameProtagonist}` + "hin und hebt in den Ohren zu." },
                Narrator_016: { text: "es wurde still und der junge dreht sich zu seiner Mutter um." },
                Mother_017: { text: "ich liebe….", pose: POSES.NEUTRAL },
                Protagonist_018: { text: "Mutter, Mutter…MAMAAAAAAA.", pose: POSES.FRIGHTEND },
                Protagonist_019: { text: "Sag was. Ich muss Hilfe holen ich muss mich beeilen.", pose: POSES.FRIGHTEND },
                Narrator_020: { text: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen." }
            },
            get_help: {
                Narrator_021: { text: `${dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arzt, und schildert ihm die Situation," },
                Narrator_022: { text: "Der Arzt namens Dr.Bader ging und " + `${dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück." }
            },
            talk_with_the_doctor: {
                Protagonist_023: { text: "Helfen sie bitte meiner Mutter.", pose: POSES.SAD },
                Doctor_024: { text: "Ich verstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.", pose: POSES.SAD },
                Doctor_025: { text: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.", pose: POSES.SAD },
                Protagonist_026: { text: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.", pose: POSES.SAD },
                Doctor_027: { text: "bringen wir sie erstmals zurück ins Dorf.", pose: POSES.SAD }

            },
            transition_to_the_village: {
                Narrator_028: { text: "der Arzt und " + `${dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf." }
            },
            about_the_way: {
                Protagonist_029: { text: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.", pose: POSES.SAD },
                Doctor_030: { text: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun", pose: POSES.SAD },
                Doctor_031: { text: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${locations.forest.name}` + " zu finden ist.", pose: POSES.SAD },
                Doctor_032: { text: "Es wird erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.", pose: POSES.SAD },
                Doctor_033: { text: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.", pose: POSES.SAD },
                Protagonist_034: { text: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.", pose: POSES.SAD },
                Doctor_035: { text: "Du musst nach Norden zu den " + `${locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.", pose: POSES.SAD },
                Doctor_036: { text: "nach den Felder kommst du zu dem " + `${locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.", pose: POSES.SAD },
                Doctor_037: { text: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.", pose: POSES.SAD },
                Doctor_038: { text: "er ist dort sicher, aber es ist ein langer Weg.", pose: POSES.SAD },
                Doctor_039: { text: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.", pose: POSES.SAD },
                Doctor_040: { text: "Dahinter ist schon der " + `${locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ", pose: POSES.SAD },
                Doctor_041: { text: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.", pose: POSES.SAD },
                Protagonist_042: { text: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>", pose: POSES.SAD },
                Protagonist_043: { text: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>", pose: POSES.SAD },
                Protagonist_044: { text: "<i>Alles ist meine Schuld.</i>", pose: POSES.SAD },
                Protagonist_045: { text: "Ich werde die Blume Holen, ich bin daran schuld an allem.", pose: POSES.SAD }
            },
            departure: {
                Narrator_046: { text: `${dataForSave.nameProtagonist}` + " rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${items.sword.name}` + " was er von seinem Vater bekommen hatte, welches einem Dolch von der Größe entspricht und eilt zur Tür." },
                Doctor_047: { text: "Warte!!", pose: POSES.SAD },
                Doctor_048: { text: "Nimm da hier, ein " + `${items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.", pose: POSES.SAD },
                Doctor_049: { text: "Ich hoffe du wirst ich nicht brauchen.", pose: POSES.SAD },
                Protagonist_050: { text: "Danke. Passen sie auf meine Mutter auf.", pose: POSES.SAD },
                Narrator_051: { text: "Und so machte sich " + `${dataForSave.nameProtagonist}` + " auf ein Abenteuer." }
            }


        };

        if (inventoryLoaded == false) {
            await loadInvetory();
            inventoryLoaded = true;
        }
        dataForSave.logText.push("<h1>das Dorf</h1>");
        dataForSave.logText[dataForSave.logText.length - 1] += ("<p>Tag: " + `${dataForSave.dayCounter}` + "</p>");
        await playParagraph(storyTexts.introduction);
        //TODO:  übergang zum feld
        await ƒS.Location.show(locations.village);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.before_the_accident);
        await startAnimations();
        await playParagraph(storyTexts.after_the_accident);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${characters.mother.name}` + " wurde von einem dem Zauaber eienr Alraune versteinert </p>";
        //TODO: Schawarzer hintergund
        await ƒS.Location.show(announcements.black);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.get_help);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${dataForSave.nameProtagonist}` + " holte hilfe </p>";
        //TODO: zurück aufs Feld
        await ƒS.Location.show(locations.village);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await ƒS.Location.show(announcements.black);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await ƒS.Location.show(locations.village);
        await ƒS.update(transitions.leftTORight.duration, transitions.leftTORight.alpha, transitions.leftTORight.edge);
        await playParagraph(storyTexts.about_the_way);
        await ƒS.Sound.fade(sounds.adventureMusic, 0, 3, false);
        await ƒS.Sound.fade(sounds.departureMusic, 0.3, 3, true);
        await playParagraph(storyTexts.departure);
        dataForSave.logText[dataForSave.logText.length - 1] += "<ul> <h3> tipps von " + `${characters.doctor.name}` + ":</h3>  ";
        dataForSave.logText[dataForSave.logText.length - 1] += "<li> Auf der" + `${locations.grasslands.name}`  + "können schleime sein</li>  ";
        dataForSave.logText[dataForSave.logText.length - 1] += "<li> in dem" + `${locations.mountains.name}`  + " giebt es gefähliche Monster</li>  ";
        dataForSave.logText[dataForSave.logText.length - 1] += "<li> im " + `${locations.forest.name}` + " scheinen sich Leute zu verlaufen </li>  ";
        dataForSave.logText[dataForSave.logText.length - 1] += "<li> um die" + `${items.flower.name}` + " zu finden geh richtung Licht </li>  ";
        dataForSave.logText[dataForSave.logText.length - 1] += "</ul>";
        ƒS.Inventory.add(items.healing_potion);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.healing_potion.name}` + "wurde eingepackt </p>";
        ƒS.Inventory.add(items.sword);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.sword.name}` + "wurde eingepackt </p>";
        ƒS.Inventory.add(items.water_bag);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.water_bag.name}` + "wurde eingepackt </p>";
        ƒS.Inventory.add(items.loaf_of_bread);
        dataForSave.logText[dataForSave.logText.length - 1] += "<p>" + `${items.loaf_of_bread.name}` + "wurde eingepackt </p>";
        await saveInventory();
        return "4";
    }
}  