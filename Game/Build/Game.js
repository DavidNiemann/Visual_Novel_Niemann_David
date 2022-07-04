"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    VisualNovel.invetoryOpen = false;
    VisualNovel.dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false,
        forestCounter: 0,
        dangerousPathChosen: false
    };
    function showCredits() {
        VisualNovel.ƒS.Text.setClass("Credits");
        VisualNovel.ƒS.Text.print("David Niemann");
    }
    VisualNovel.showCredits = showCredits;
    /** MENÜ **/
    let inGameMenuButtens = {
        save: "Save",
        load: "Load",
        close: "Close",
        creadits: "Credits"
    };
    let gameMenu;
    //true = open; false = close
    let menuIsOpen = true;
    async function buttonFunktionAlitiles(_option) {
        switch (_option) {
            case inGameMenuButtens.save:
                await VisualNovel.ƒS.Progress.save();
                break;
            case inGameMenuButtens.load:
                await VisualNovel.ƒS.Progress.load();
                break;
            case inGameMenuButtens.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtens.creadits:
                showCredits();
                break;
            default:
                break;
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VisualNovel.ƒ.KEYBOARD_CODE.F8:
                await VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.F9:
                await VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.I:
                if (VisualNovel.invetoryOpen) {
                    VisualNovel.ƒS.Inventory.close();
                    VisualNovel.invetoryOpen = false;
                }
                else {
                    VisualNovel.ƒS.Inventory.open();
                    VisualNovel.invetoryOpen = true;
                }
                break;
            default:
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = VisualNovel.ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
        buttonFunktionAlitiles("Close");
        let scenes = [
            { id: "1", scene: VisualNovel.prehistory, name: "Einführung" },
            { id: "2", scene: VisualNovel.childhood, name: "Kindheit " },
            { id: "3", scene: VisualNovel.theCurse, name: "Der Fluch" },
            { id: "4", scene: VisualNovel.theGrassland, name: "Die weite Wiese" },
            { id: "5", scene: VisualNovel.theStranger, name: "Der Fremde" },
            { id: "6", scene: VisualNovel.theMountain, name: "Die Berge" },
            { id: "7", scene: VisualNovel.dangerousWay, name: "Der gefährliche Weg" },
            { id: "8", scene: VisualNovel.lostAgastTheBasilik, name: "Niederlage gegen den Basilik" },
            { id: "9", scene: VisualNovel.winAgastTheBasilik, name: "Sieg über den Basilik" },
            { id: "10", scene: VisualNovel.longWay, name: "Der Lange Weg" },
            { id: "11", scene: VisualNovel.theForest, name: "Der Wald" },
            { id: "12", scene: VisualNovel.wrongWay, name: "Falscher Weg" },
            { id: "13", scene: VisualNovel.lostinTheWoods, name: "verloren im Wald" },
            { id: "14", scene: VisualNovel.flower, name: "das Blumen Feld" },
            { id: "15", scene: VisualNovel.cave, name: "die Höhle" },
            { id: "16", scene: VisualNovel.warkBack, name: "der Fuß weg ins Dorf" },
            { id: "17", scene: VisualNovel.unexpectedEncounter, name: "eine unerwartede Begengnung" },
            { id: "18", scene: VisualNovel.saveMother, name: "Rettung der Mutter" },
            { id: "19", scene: VisualNovel.tooLate, name: "zu Spät" },
            { id: "99", scene: VisualNovel.gameOver, name: "Spiel zu Ende" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        VisualNovel.dataForSave = VisualNovel.ƒS.Progress.setData(VisualNovel.dataForSave, uiElement);
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function cave() {
        console.log("Scene: the cave");
        let storyTexts = {
            the_cave: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " quälte sich durch enges getrübt bis vor einer Höhle vor ihm erscheint." },
                Protagonist_002: { text: "<i> Eine Höhle?!, ich bin hier will falsch.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_003: { text: "<i> Es wird schon wieder Dunkel, ich muss den ganze tag in dem Wald umhergeirrt sein.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "<i> Ich muss aufpassen das kein Monster darin wohnt.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_005: { text: "<i> Bis jetzt war der Wald sehr ruhig, ich denke nicht, dass hier ein Monster lebt.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_006: { text: "<i> Ich muss wohl bis zum morgen Schutz in der Höhle suchen.</i>", pose: VisualNovel.POSES.SAD }
            },
            the_fairy: {
                Narrator_007: { text: "Als" + `${VisualNovel.dataForSave.nameProtagonist}` + " die Höhle  betritt hört er ein leises Singen." },
                Protagonist_008: { text: "<i>Was ist das, singt Hier eine Frau? </i>", pose: VisualNovel.POSES.FRIGHTEND },
                Protagonist_009: { text: "<i>Vielleicht hat sich hier noch andere Menschen Verlaufen</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_0010: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " geht tiefer in die Höhle." },
                Narrator_0011: { text: "Nach einer Weile tauchte eine Quelle vor ihm auf." },
                Protagonist_012: { text: "<i>Eine Quelle?!</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Protagonist_013: { text: "<i>aber es scheint niemand hier zu sein, das Singen ist auch verstummt.</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_014: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " schreitet and die Quelle Heran, " },
                Narrator_015: { text: "plötzlich taucht eine junge Frau von Geisterhand über der Quelle auf." },
                Fairy_016: { text: "hehehe ich bin die Große Fee diese Quelle.", pose: VisualNovel.POSES.HAPPY },
                Fairy_017: { text: "Ich hat seinen Jahrhunderten niemand mehr besucht", pose: VisualNovel.POSES.HAPPY },
                Fairy_018: { text: "Was für dich zu mir?", pose: VisualNovel.POSES.HAPPY },
                Protagonist_019: { text: "Ich haben mich im Wald verlaufen. ", pose: VisualNovel.POSES.SAD },
                Protagonist_020: { text: "ich war auf der such nach den " + `${VisualNovel.items.flower.name}` + ".", pose: VisualNovel.POSES.SAD },
                Fairy_021: { text: "hehehe so ist, dass, warum bist du suchst du diese, du musst, ein langer Weg hinter dir haben.", pose: VisualNovel.POSES.HAPPY }
            },
            spring_water: {
                Fairy_022: { text: "ich sehen du versuchst deine Mutter zu retten, wie Helden Haft hehehe.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_023: { text: "Ich bin kein Held, durch meine Unwissenheit, Kamm es erst zu dieser Situation.", pose: VisualNovel.POSES.SAD },
                Protagonist_024: { text: "und die Blumen habe ich auch noch nicht gefunden.", pose: VisualNovel.POSES.SAD },
                Fairy_025: { text: "du bist doch schon so nah an denen Ziel, du wirst doch nicht aufgeben.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_026: { text: "ich werde nicht auf Geben, aber ich habe keine Zeit, ich muss die Blumen finden und sie in mein Dorf bringen, bevor es zu spät ist.", pose: VisualNovel.POSES.SAD },
                Fairy_027: { text: "hehehe", pose: VisualNovel.POSES.HAPPY },
                Protagonist_028: { text: "kannst du mir nicht den Weg zu den Blumen zeigen.", pose: VisualNovel.POSES.SAD },
                Fairy_029: { text: "Das könnte ich, aber tue ich nicht hehehe.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_030: { text: "Warum nicht? Dann werde ich sie selbst suche.", pose: VisualNovel.POSES.SAD },
                Fairy_031: { text: "Du hast eine reines herz und ein starken Willen.", pose: VisualNovel.POSES.HAPPY },
                Fairy_032: { text: "hehehe", pose: VisualNovel.POSES.HAPPY },
                Fairy_033: { text: "Du kannst statt der Blume, eine Glas Wasser dieser Magischen haben,", pose: VisualNovel.POSES.HAPPY },
                Fairy_034: { text: "das sollte das sollte deiner Mutter Rettern Können.", pose: VisualNovel.POSES.HAPPY },
                Fairy_035: { text: "Die Blumen haben auch nur diese Kraft, weil sie Wasser aus dieser Quelle beziehen.", pose: VisualNovel.POSES.HAPPY },
                Fairy_036: { text: "Dass Das Wasser sogar größer Erfolgschance hat,  hehehe.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_037: { text: " vielen Dank.", pose: VisualNovel.POSES.HAPPY },
                Fairy_038: { text: "Es war schön mit dir zu reden hehehe.", pose: VisualNovel.POSES.HAPPY },
                Narrator_039: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " füllte einen Wasser Tasche voll mit dem Quellwasser." },
                Protagonist_040: { text: "<i>Warum wird mir wird schwindelig.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_0041: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " wird schwarz vor Augen." }
            },
            next_morning: {
                Narrator_0042: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " wacht am nächsten morgen am Eingang des Waldes wieder auf." },
                Protagonist_043: { text: "<i>was ist da passiert ich war doch gerade noch in einer Höhler mit einer Fee</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_0044: { text: "Er schaut in seine Tasche." },
                Protagonist_045: { text: "<i>zum Glück ich habe noch das Wasser ich hoffe die Fee hat mich nicht angelogen.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_046: { text: "<i>dann mache ich mich wohl auf den Heimweg.</i>", pose: VisualNovel.POSES.HAPPY }
            }
        };
        await VisualNovel.playParagraph(storyTexts.the_cave);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.cave);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0, 1, false);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.mysteriousMusic, 0.3, 1, true);
        await VisualNovel.playParagraph(storyTexts.the_fairy);
        await VisualNovel.showAnnouncement(VisualNovel.locations.cave, VisualNovel.announcements.tell_story, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.spring_water);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.magic_water);
        await VisualNovel.showAnnouncement(VisualNovel.locations.forest, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.mysteriousMusic, 0, 1, false);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0.3, 1, true);
        await VisualNovel.playParagraph(storyTexts.next_morning);
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        if (VisualNovel.dataForSave.bottleWasGiven) {
            return "17";
        }
        else {
            return "16";
        }
    }
    VisualNovel.cave = cave;
})(VisualNovel || (VisualNovel = {}));
/// <reference path= "../main.ts"/>
var VisualNovel;
/// <reference path= "../main.ts"/>
(function (VisualNovel) {
    async function childhood() {
        console.log("Scene:  childhood");
        let storyTexts = {
            introduction: {
                Narrator_001: { text: "In dieser Welt am Rande eines Dorfes in der Man die Magie wenig verwendete, lebt Junge, mit Seinem Vater und Mutter." },
                Narrator_002: { text: "An einem Tag ging der Vater auf Reise in die Nächste Stadt, um seiner Arbeit nachzugehen." }
            },
            childhoodStory_Part1: {
                Protagonist_001: { text: "Mama wann kommt Papa endlich nach Hause.", pose: VisualNovel.POSES.CHILD },
                Mother_002: { text: "Er Kommt wird schon bald wieder Kommen.", pose: VisualNovel.POSES.HAPPY },
                Mother_003: { text: "Du bist doch gewohnt, dass Er länger nicht zuhause ist. Wenn er arbeiten ist.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "Ich weiß Mama, aber ist schon ungewöhnlich lange weg, dafür das er nur in die Stadt gehen wollte und einen leichten Auftrag erfüllen.", pose: VisualNovel.POSES.CHILD }
            },
            childhoodStory_Part2: {
                Narrator_001: { text: "ein Bote Kamm vorbei und brachte der Familie einen Brief in dem Stand," },
                Narrator_002: { text: "dass Der Vater bei einem Auftrag einen Händler zu begleiten von <Monster> überfallen wurde und dabei stab." },
                Narrator_003: { text: "Der Junge fing auf diese Nachricht an zu weinen." },
                Narrator_004: { text: "Er schaute immer zu seinem Vater auf und wollte auch ein Abenteurer wie sein Vater werden." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.introduction);
        // übergang
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.showAnnouncement(VisualNovel.locations.village, VisualNovel.announcements.some_days_pass, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.childhoodStory_Part1);
        /*  ƒS.Character.hideAll(); */
        // übergang
        await VisualNovel.showAnnouncement(VisualNovel.locations.village, VisualNovel.announcements.some_days_pass, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.childhoodStory_Part2);
        return "3";
    }
    VisualNovel.childhood = childhood;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theCurse() {
        console.log("Scene:  the Curse");
        let storyTexts = {
            introduction: {
                Narrator_001: { text: "Es gingen viele Jahre in die Lande." },
                Narrator_002: { text: "Seitdem Tod des Vaters, hatte die Familie es nicht  immer leicht, da sie nicht viel Geld hatten." },
                Narrator_003: { text: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. " }
            },
            before_the_accident: {
                Mother_004: { text: "steh auf " + `${VisualNovel.dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_005: { text: "ich komme gleich ich esse Kutz noch ein Stück Brot.", pose: VisualNovel.POSES.HAPPY },
                Mother_006: { text: "ok ich gehe schon mal vor, komm dann nach.", pose: VisualNovel.POSES.HAPPY },
                Narrator_007: { text: "nach dem " + `${VisualNovel.dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld." },
                Mother_008: { text: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_009: { text: "mutter schau mal das ist aber eine komische Karotte.", pose: VisualNovel.POSES.HAPPY },
                Narrator_010: { text: "der Junge fängt an der Pflanze zu ziehen." },
                Protagonist_011: { text: "die geht aber schwer raus.", pose: VisualNovel.POSES.HAPPY },
                Narrator_012: { text: "Mutter dreht sich." },
                Mother_013: { text: "Mutter HALTTTTTT, das ist eine ….", pose: VisualNovel.POSES.FRIGHTEND }
                //U001:  { text: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Mother_014: { text: "….", pose: VisualNovel.POSES.NEUTRAL },
                Narrator_015: { text: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${VisualNovel.dataForSave.nameProtagonist}` + " und hebt in den Ohren zu." },
                Narrator_016: { text: "es wurde still und der junge dreht sich zu seiner Mutter um." },
                Mother_017: { text: "ich liebe….", pose: VisualNovel.POSES.NEUTRAL },
                Protagonist_018: { text: "Mutter, mutter…MAMAAAAAAA.", pose: VisualNovel.POSES.FRIGHTEND },
                Protagonist_019: { text: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_020: { text: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen." }
            },
            get_help: {
                Narrator_021: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation," },
                Narrator_022: { text: "Der Arzt namens Dr.Bader ging und " + `${VisualNovel.dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück." }
            },
            talk_with_the_doctor: {
                Protagonist_023: { text: "Helfen sie bitte meiner Mutter.", pose: VisualNovel.POSES.SAD },
                Doctor_024: { text: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.", pose: VisualNovel.POSES.SAD },
                Doctor_025: { text: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.", pose: VisualNovel.POSES.SAD },
                Protagonist_026: { text: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.", pose: VisualNovel.POSES.SAD },
                Doctor_027: { text: "bringen wir sie erstmals zurück ins Dorf.", pose: VisualNovel.POSES.SAD }
            },
            transition_to_the_village: {
                Narrator_028: { text: "der Arzt und " + `${VisualNovel.dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf." }
            },
            about_the_way: {
                Protagonist_029: { text: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.", pose: VisualNovel.POSES.SAD },
                Doctor_030: { text: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun", pose: VisualNovel.POSES.SAD },
                Doctor_031: { text: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${VisualNovel.locations.forest.name}` + "  Zu finden ist.", pose: VisualNovel.POSES.SAD },
                Doctor_032: { text: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.", pose: VisualNovel.POSES.SAD },
                Doctor_033: { text: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.", pose: VisualNovel.POSES.SAD },
                Protagonist_034: { text: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.", pose: VisualNovel.POSES.SAD },
                Doctor_035: { text: "Du musst nach Norden zu den " + `${VisualNovel.locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.", pose: VisualNovel.POSES.SAD },
                Doctor_036: { text: "nach den Felder kommst du zu dem " + `${VisualNovel.locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.", pose: VisualNovel.POSES.SAD },
                Doctor_037: { text: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.", pose: VisualNovel.POSES.SAD },
                Doctor_038: { text: "er ist ziemlich sicher aber ist lange. ", pose: VisualNovel.POSES.SAD },
                Doctor_039: { text: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.", pose: VisualNovel.POSES.SAD },
                Doctor_040: { text: "Dahinter ist schon der " + `${VisualNovel.locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ", pose: VisualNovel.POSES.SAD },
                Doctor_041: { text: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.", pose: VisualNovel.POSES.SAD },
                Protagonist_042: { text: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_043: { text: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_044: { text: "<i>Alles ist meine Schuld.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_045: { text: "Ich werde die Blume Holen, ich bin daran schuld an allem.", pose: VisualNovel.POSES.SAD },
                Narrator_046: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${VisualNovel.items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür." },
                Doctor_047: { text: "Warte!!", pose: VisualNovel.POSES.SAD },
                Doctor_048: { text: "Nimm da hier, ein " + `${VisualNovel.items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.", pose: VisualNovel.POSES.SAD },
                Doctor_049: { text: "Ich hoffe du wirst ich nicht brauchen.", pose: VisualNovel.POSES.SAD },
                Protagonist_050: { text: "Danke. Passen sie auf meine Mutter auf.", pose: VisualNovel.POSES.SAD },
                Narrator_051: { text: "Und so machte sich " + `${VisualNovel.dataForSave.nameProtagonist}` + " auf ein Abenteuer." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.introduction);
        //TODO:  übergang zum feld
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.before_the_accident);
        await VisualNovel.startAnimations();
        await VisualNovel.playParagraph(storyTexts.after_the_accident);
        //TODO: Schawarzer hintergund
        await VisualNovel.ƒS.Location.show(VisualNovel.announcements.black);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.get_help);
        //TODO: zurück aufs Feld
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await VisualNovel.ƒS.Location.show(VisualNovel.announcements.black);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.about_the_way);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.healing_potion);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.sword);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.water_bag);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.loaf_of_bread);
        return "4";
    }
    VisualNovel.theCurse = theCurse;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function dangerousWay() {
        console.log("Scene: dangerous way");
        let storyTexts = {
            the_decision: {
                Protagonist_001: { text: "<i>ich nehme den kurzen Weg. Ich muss mich beeilen </i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_002: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " begibt sich auf den Pfad an der Klippe, er strauchelt ein bisschen mit dem Wind aber bleibt ehrgeizig auf dem Weg." }
            },
            doubting: {
                Narrator_003: { text: "Es sind Stunden vergangen und der Pfad scheint noch enger zu werden." },
                Narrator_004: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " bleibt stehen, er hat muss ich gegen die Bergwand drücken, um noch an dem Pfad zu passen." },
                Protagonist_005: { text: "<i>Ich Kann nicht weiter ich fliege noch runter.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_006: { text: "<i>Nein ich kann jetzt nicht aufgeben, Meine Mutter hat mich gerettet und ich bin an allem schuld.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_007: { text: "<i>Mein Vater hätte es niemals gezögert.<i>", pose: VisualNovel.POSES.SAD },
                Protagonist_008: { text: "<i>Ich darf nicht zu viel Zeit verlieren.<i>", pose: VisualNovel.POSES.SAD },
                Narrator_009: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " nimmt seinen ganzen Mut zusammen und schreitet mit wackligem schritt langsam voran." }
            },
            the_end_of_the_cliff: {
                Narrator_010: { text: "Der Pfad scheint wieder breiter zu werden." },
                Protagonist_011: { text: "<i>Zum Glück bin nicht auf ein Monster gestoßen.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_012: { text: "<i>Ich muss mich kurz hinsetzen.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_013: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " setzt sich an Die Felswand, der Pfad ist breit genug, dass er sein beine ganz ausstrecken kann." },
                Narrator_014: { text: " Es ist ein lautes Schreien zu hören." },
                Narrator_015: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " schreckt sofort auf und greift an zu seinem Schwert." },
                Protagonist_016: { text: "<i>Ich hätte mich nicht zu früh freuen sollen.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_017: { text: "Ein kleiner Basilisk landet vor ihm" },
                Protagonist_018: { text: "<i>Den kann ich nicht besiegen, aber ich habe keine andere Wahl wie es zu versiuchen", pose: VisualNovel.POSES.SAD }
            }
        };
        await VisualNovel.playParagraph(storyTexts.theDecision);
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        await VisualNovel.playParagraph(storyTexts.doubting);
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        await VisualNovel.playParagraph(storyTexts.the_end_of_the_cliff);
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        let success = await VisualNovel.fight(VisualNovel.enemys.basilisk);
        console.log(success);
        if (success) {
            return "9";
        }
        else {
            return "8";
        }
    }
    VisualNovel.dangerousWay = dangerousWay;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function flower() {
        console.log("Scene:  flower");
        let storyTexts = {
            flower_field: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " hat das Ende des Waldes erreicht." },
                Narrator_002: { text: "Als er Das Sonnen licht betritt öffnet sich vor ihm eine kleine Wise voller weisen Kleinen Blumen." },
                Narrator_003: { text: "Die Blüten reflektieren das Licht, und funkeln wie eine Sternen Himmel neben dem Schatten der Bäume." },
                Protagonist_004: { text: "<i>Es ist wunder Schön.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_005: { text: "<i>Ich habe es Geschäft.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_006: { text: "<i>ich muss schell die Blumen Holen, und so schnell wie möglich wieder auf den Heimweg machen.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_007: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " nimmt sich einen Straus der Blume mit uns steckt sie in das Restwasser in seinem Beutel, dass sie nicht verrocken, und machst sich wieder auf den Weg aus dem Wald." },
                Protagonist_008: { text: "<i>Zum Glück habe ich mir den Weg gemerkt.</i>", pose: VisualNovel.POSES.HAPPY }
            },
            way_back: {
                Narrator_009: { text: "Passend zum sonnen Untergang, schaft es " + `${VisualNovel.dataForSave.nameProtagonist}` + " aus dem Wald heraus." },
                Protagonist_010: { text: "<i>ich habe es geschafft. Ich bin aus dem Wald draußen, bevor die Sonne untergegangen ist, </i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_011: { text: "<i>Morgenfrühe mache ich mich direkt auf den Weg zurück ins Dorf.</i>", pose: VisualNovel.POSES.HAPPY }
            },
            next_morning: {
                Protagonist_012: { text: "<i> ich habe nicht mehr viel Zeit. Auf ins Dorf. </i>", pose: VisualNovel.POSES.HAPPY }
            }
        };
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0, 1, false);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.mysteriousMusic, 0.2, 1, true);
        await VisualNovel.playParagraph(storyTexts.flower_field);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.mysteriousMusic, 0, 1, false);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0.2, 1, true);
        await VisualNovel.showBlackTransition(VisualNovel.locations.forest);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.flower);
        await VisualNovel.playParagraph(storyTexts.way_back);
        VisualNovel.dataForSave.dayCounter += 1;
        await VisualNovel.showAnnouncement(VisualNovel.locations.mountains, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.next_morning);
        if (VisualNovel.dataForSave.bottleWasGiven) {
            return "17";
        }
        else {
            return "16";
        }
    }
    VisualNovel.flower = flower;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theForest() {
        console.log("Scene:  forest");
        let storyTexts = {
            first_encounter: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " ist wach und wartet bis die Hellgenug ist, um in den Wald zu gehen." },
                Protagonist_002: { text: "<i>Es sollte jetzt hell genug sein ich haben nur noch" + `${VisualNovel.dataForSave.dayCounter}` + " bis  es zu spät ist.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_003: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " betritt den Wald." },
            },
            in_the_forest: {
                Protagonist_004: { text: "<i>Es sieht aus als wäre hier einen Weg, ich sollte ihm folgen,</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_005: { text: "<i>wenn ich war los im Wald rumlaufe finde ich nicht mehr zurück.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_006: { text: "Nach einer Weile teilte der weg sich in drei Weitere Wege auf." },
                Protagonist_007: { text: "<i>Das hat mir gerade noch gefehlt.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_008: { text: "<i>Welchen Weg soll ich nur gehen.</i>", pose: VisualNovel.POSES.HAPPY }
            },
            first_crossing: {
                Protagonist_009: { text: "<i>Am Ende des rechten Weges scheint etwas zu leuchten.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_010: { text: "<i>Links ist der Weg fast komplett zugewachsen, sodass der weg fast nicht mehr zu erkennen ist.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_011: { text: "<i>Nach vorne bleibt der weg normal weiterzugehen </i>", pose: VisualNovel.POSES.HAPPY }
            },
            on_the_way: {
                Narrator_006: { text: "Nach einer Weile teilte der weg sich in drei weitere Wege auf." },
                Protagonist_012: { text: "<i>Schon wieder Eine Kreuzzug,</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_013: { text: "<i>jetzt verstehe ich was der " + `${VisualNovel.characters.doctor.name}` + " damit gemeint hat das sich die Leute hier verirrt haben.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_014: { text: "<i>Welchen weg soll ich jetzt gehen?</i>", pose: VisualNovel.POSES.SAD }
            },
            second_crossing: {
                Protagonist_015: { text: "<i>Rechts scheint es dunkler zu werden.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_016: { text: "<i>Der Linke weg sieht normal aus.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_017: { text: "<i>Von gerade aus scheint Licht zu kommen.</i>", pose: VisualNovel.POSES.SAD }
            },
            further_along_the_way: {
                Narrator_018: { text: "Nach einer Weile teilte der weg sich in drei weitere Wege auf." },
                Protagonist_019: { text: "<i>Das war ja klar.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_020: { text: "<i>Welchen weg soll ich jetzt gehen?</i>", pose: VisualNovel.POSES.SAD }
            },
            third_crossing: {
                Protagonist_021: { text: "<i>Der Rechte weg scheint aufzuhören, aber ich kann mich durch das Dickicht zwängen.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_022: { text: "<i>Links scheint der Weg noch eine Weile zu gehen.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_023: { text: "<i>Gerade aus ist Licht, es scheint aus dem Wald zu führen.</i>", pose: VisualNovel.POSES.SAD }
            }
        };
        let crossingPaths = {
            right: "Nach rechts",
            straight: "Gerade Aus",
            left: "Nach links"
        };
        if (VisualNovel.dataForSave.forestCounter == 0) {
            await VisualNovel.showAnnouncement(VisualNovel.locations.mountains, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
            await VisualNovel.playParagraph(storyTexts.first_encounter);
            await VisualNovel.ƒS.Location.show(VisualNovel.locations.forest);
            await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
            await VisualNovel.playParagraph(storyTexts.in_the_forest);
        }
        else {
            await VisualNovel.ƒS.Location.show(VisualNovel.locations.forest);
            await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        }
        await VisualNovel.playParagraph(storyTexts.first_crossing);
        let firstDirection = await VisualNovel.ƒS.Menu.getInput(crossingPaths, "dialog_choices");
        await VisualNovel.showBlackTransition(VisualNovel.locations.forest);
        if (VisualNovel.dataForSave.forestCounter == 0) {
            await VisualNovel.playParagraph(storyTexts.on_the_way);
        }
        await VisualNovel.playParagraph(storyTexts.second_crossing);
        let secondDirection = await VisualNovel.ƒS.Menu.getInput(crossingPaths, "dialog_choices");
        await VisualNovel.showBlackTransition(VisualNovel.locations.forest);
        if (VisualNovel.dataForSave.forestCounter == 0) {
            await VisualNovel.playParagraph(storyTexts.further_along_the_way);
        }
        await VisualNovel.playParagraph(storyTexts.third_crossing);
        let thirdDirection = await VisualNovel.ƒS.Menu.getInput(crossingPaths, "dialog_choices");
        await VisualNovel.showBlackTransition(VisualNovel.locations.forest);
        if (firstDirection == crossingPaths.right && secondDirection == crossingPaths.straight && thirdDirection == crossingPaths.straight) {
            return "14";
        }
        else if (firstDirection == crossingPaths.left && secondDirection == crossingPaths.right && thirdDirection == crossingPaths.right) {
            return "15";
        }
        else {
            if (VisualNovel.dataForSave.forestCounter >= 1) {
                return "13";
            }
            else {
                VisualNovel.dataForSave.forestCounter += 1;
                return "12";
            }
        }
    }
    VisualNovel.theForest = theForest;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function gameOver() {
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0, 1, false);
        VisualNovel.ƒS.Character.hideAll();
        VisualNovel.ƒS.Speech.clear();
        await VisualNovel.ƒS.Location.show(VisualNovel.announcements.game_over);
        await VisualNovel.ƒS.update(VisualNovel.transitions.inToOut.duration, VisualNovel.transitions.inToOut.alpha, VisualNovel.transitions.inToOut.edge);
        //TODO: endscreen  einblenden und Credits
    }
    VisualNovel.gameOver = gameOver;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theGrassland() {
        console.log("Scene:  grassland");
        let storyTexts = {
            before_the_fight: {
                Narrator_001: { text: "nach paar Stunden ist  " + `${VisualNovel.dataForSave.nameProtagonist}` + " schon mitten auf den " + `${VisualNovel.locations.grasslands.name}` + " unterwegs, es ist ruhig. " },
                Narrator_002: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " ist seit der das Dorf verlassen hat auf niemanden mehr gestoßen." },
                Protagonist_003: { text: "<i>Dr.Bader hat gesagt hier wimmelt es von Schleimen ich sollte mich eher in Acht nehmen, zum Glück bin ich noch keinem begegnet.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_004: { text: "nach einer Weile raschelt es in einem Busch neben ihn." },
                Narrator_005: { text: "es springen 3 Schleime vor um ihn herum und verspären in dem Weg" },
                Protagonist_006: { text: "<i>ich muss mich beeilen.</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Protagonist_007: { text: "<i>ich komm nicht durch ich muss wohl Kämpfen.</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_008: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " greifen zu seinem Schwert." }
            },
            after_the_fight: {
                Narrator_009: { text: "Die Restlichen schleime suchen das Weite." },
                Protagonist_010: { text: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_011: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " läuft den Weg weiter." }
            }
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.grasslands);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.before_the_fight);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0, 1, false);
        let success = await VisualNovel.fight(VisualNovel.enemys.slime);
        console.log(success);
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0.5, 1, true);
        await VisualNovel.playParagraph(storyTexts.after_the_fight);
        return "5";
    }
    VisualNovel.theGrassland = theGrassland;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function longWay() {
        console.log("Scene: long way");
        let storyTexts = {
            the_decision: {
                Protagonist_001: { text: "<i>ich nehme den kurzen Weg. Das wichtige ist, das ich auch ankomme. </i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_002: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " macht ging den langen Weg entlang." }
            },
            end_of_the_mountains: {
                Narrator_003: { text: "Nach 2 Tagen Kamm " + `${VisualNovel.dataForSave.nameProtagonist}` + " am Ende des Gebirges an.Die Sonne ist am schon untergehen." },
                Protagonist_004: { text: "<i>Endlich bin ich dich Gebirge gekommen.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_005: { text: "<i>Der Weg war länger als erwartet, ich hoffe es war kein Fehler den lagen weg zu nehme.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_006: { text: "<i>Da vorne  ist ein Wald, das muss er sein, der Ort, an dem die Blume wachst.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_007: { text: "<i>Es bringt jetzt nichts mehr Weitere zugehen, wenn ich im Dunkeln in den Wald gehe, verlaufe ich mich erstrecht.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_008: { text: "<i>Es sieht hier sicher aus ich sollte mich, ich denke ich kann hier ein Lager aufschlagen.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_009: { text: "Schlägt seien Lager auf und legt sich direkt hin." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.the_decision);
        await VisualNovel.showAnnouncement(VisualNovel.locations.mountains, VisualNovel.announcements.two_days_pass, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.end_of_the_mountains);
        VisualNovel.dataForSave.dayCounter += 2;
    }
    VisualNovel.longWay = longWay;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function lostAgastTheBasilik() {
        console.log("Scene: lost agast the Basilik");
        let storyTexts = {
            fail: {
                Narrator_001: { text: "Der Basilisk hat " + `${VisualNovel.dataForSave.nameProtagonist}` + " eine Schwerte Wunde am Arm verpasst.Er Kanna um noch seine Waffe halten." },
                Protagonist_002: { text: "<i>Das wars Wohl mit mir!</i>", pose: VisualNovel.POSES.SAD },
                Narrator_003: { text: " Der Basilisk macht sich bereit auf  " + `${VisualNovel.dataForSave.nameProtagonist}` + " den letzten schlag zu verpassen." },
                Protagonist_004: { text: "<i>Ich habe keine Kraft mehr, ich muss ausweichen.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " versucht mit letzter kraft noch aus dem Weg zu springen." },
                Narrator_006: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " Schaft es dem direkten Treffer auszuweichen," },
                Narrator_007: { text: " aber kommt Kamm zu nah and die Klippe, " },
                Narrator_008: { text: " der Boden bricht unter ihm zusammen." },
                Narrator_009: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " hat sich mit letzter kraft an einer Wurzel festgehalten." },
                Protagonist_010: { text: "<i>Es tut mir leid Mutter ich habe versagt.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_011: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "'s kraft reicht nicht mehr aus der Wunde an seinem arm ist zu tief." },
                Narrator_012: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " kann sich nicht mehr halten und stürzt in den Abrunde." },
                Protagonist_013: { text: "<i>...</i>", pose: VisualNovel.POSES.SAD }
            }
        };
        await VisualNovel.playParagraph(storyTexts.fail);
        return "99"; // Bad Ending 
    }
    VisualNovel.lostAgastTheBasilik = lostAgastTheBasilik;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function lostinTheWoods() {
        console.log("Scene:  lost in The Woods");
        let storyTexts = {
            lost_in_The_Woods: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " ist mitten im Wald gelandet und keine Blumen oder Ausgang in Sicht in Sicht." },
                Protagonist_002: { text: "<i> wo lange bin ich schon hier. Ich finde Garnichts. </i>", pose: VisualNovel.POSES.SAD },
                Protagonist_003: { text: "<i> alle sieht hier gleich aus.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_004: { text: "<i> ich bin schon viel zu lange hier und Ein Ausweg finde ich auch nicht mehr. </i>", pose: VisualNovel.POSES.SAD },
                Protagonist_005: { text: "<i> Es ist hoffnungslos ich sollte nur noch einen Ausgang suchen. </i>", pose: VisualNovel.POSES.SAD },
                Narrator_006: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " wurde nicht mehr in seinem Heimat Dorf gesehen." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.lost_in_The_Woods);
        return "99"; // Bad Ending 
    }
    VisualNovel.lostinTheWoods = lostinTheWoods;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theMountain() {
        console.log("Scene:  theMountain");
        let storyTexts = {
            morning: {
                Narrator_001: { text: "es ist früh am Morgen, die Sonne ist noch nicht aufgegangen." },
                Protagonist_002: { text: "ZZzzzz…Aaaa, <i>wie lange habe ich geschlafen? </i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_003: { text: "<i>Es ist noch dunkel, egal ich habe genug geschlafen ich muss mich beeilen</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_004: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " steht auf und packt sein Lager zusammen." },
                Narrator_005: { text: "als er alles aufgeräumt hat, nahm er noch ein schluck aus seinem Wasser Beutel und isst ein kleines Stück von seinem Brot.Und machte sich auf den Weg in das Gebirge." }
            },
            the_Paths: {
                Protagonist_006: { text: "<i>Der Dr.hat gesagt das hier eine Abzweigung kommen sollte.Ich sollte meine augenaufhalten</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_007: { text: "<i>da vorne ist ein enger Pfad das muss er sein</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_008: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "Kamm an einer Klippe an.Dort ist ein Enger Pfad hindurch der Wind  pfeif und ein Warn Schild befestigt ist.Nebendran ist ein gut ausgearbeiteter breiter Pfad der Am auch für Kutschen geeignet aussieht." },
                Protagonist_009: { text: "<i>der Pfad soll mir einen Ganzen Tagesmarsch ersparen, aber es geht sehr tief runter, wenn.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_010: { text: "<i>Wenn mich ein Windstoß Erwischt ist das mein ende.</i>" },
                Protagonist_011: { text: "<i>Zudem hat der " + `${VisualNovel.characters.doctor.name}` + " erwähnt, dass dort Monster sein könnten.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_012: { text: "<i>Wo soll ich lange gehen, den  langen Weg der sicher ist oder den kurzen der Gefährlich scheint ?</i>.", pose: VisualNovel.POSES.HAPPY }
            }
        };
        let differentWays = {
            shortWay: "den kurzen Weg",
            longWay: "den Langen Weg"
        };
        VisualNovel.dataForSave.dayCounter += 1;
        await VisualNovel.showAnnouncement(VisualNovel.locations.grasslands, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.morning);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.mountains);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.playParagraph(storyTexts.thePaths);
        let chosenWay = await VisualNovel.ƒS.Menu.getInput(differentWays, "dialog_choices");
        switch (chosenWay) {
            case differentWays.shortWay:
                return "7";
            case differentWays.longWay:
                VisualNovel.dataForSave.dangerousPathChosen = true;
                return "10";
            default:
                break;
        }
    }
    VisualNovel.theMountain = theMountain;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function prehistory() {
        console.log("start Story", "Scene:  prehistory");
        let storyTexts = {
            backstory: {
                Narrator_001: { text: "In einer fantastischen Welt, in der zu überall Magie finden war," },
                Narrator_002: { text: "egal ob im tiefsten Wald oder in den Städten." },
                Narrator_003: { text: "Über all konnte man ein Hauch von Magie vernehmen." },
                Narrator_004: { text: "Es gab magische Kreaturen, manche den Menschen gut gesinnt , aber viele auch waren grauenhafte Monster." },
                Narrator_005: { text: "Der Mensch studierte diese Kraft und lernte sie für sich zu nutzen." },
                Narrator_006: { text: "Zwar es konnten nur Wenige Menschen die Magie mit eigener Kraft beherrschen und jene die dies Konnten waren mächtig und hoch angesehen." },
                Narrator_007: { text: "Dennoch stellten die Menschen Werkzeuge her mit den Jeder teile der diese leicht beeinflussen Konten." },
                Narrator_008: { text: "Mit diesen konnte man schnell Verletzungen heilen, schwere Lasten tragen, das Dunkle erleuchten und vieles mehr." },
                Narrator_009: { text: " Die Magie war das Schönste was man sich vorstellen hat den Menschen ein einfaches Leben ermöglicht," },
                Narrator_010: { text: "aber so gut sie auch sein mag so viele gefahren war mit Ihr verbunden und war der Schlimmste Gabe." }
            }
        };
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.adventureMusic, 0.5, 1, true);
        await VisualNovel.playParagraph(storyTexts.backstory);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Dieser Junge heißt ");
        VisualNovel.dataForSave.nameProtagonist = await VisualNovel.ƒS.Speech.getInput();
        VisualNovel.characters.protagonist.name = VisualNovel.dataForSave.nameProtagonist;
        return "2";
    }
    VisualNovel.prehistory = prehistory;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function saveMother() {
        console.log("Scene: seve Mother");
        let storyTexts = {
            save_mother_with_flower: {
                Protagonist_001: { text: `${VisualNovel.characters.doctor.name}` + " ich bin endlich zurück,</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_002: { text: "ich habe die Blume gefunden und dabei.", pose: VisualNovel.POSES.HAPPY },
                Doctor_003: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: VisualNovel.POSES.HAPPY },
                Doctor_004: { text: "Gib mir die Blume.", pose: VisualNovel.POSES.HAPPY },
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "  übergibt die Blume " + `${VisualNovel.characters.doctor.name}` },
                Narrator_006: { text: `${VisualNovel.characters.doctor.name}` + " verarbeite die Blume zu Medizin und schüttet die die Flüssichkeit über die Regungslose Mutter." },
                Mother_007: { text: "...", pose: VisualNovel.POSES.NEUTRAL },
                Protagonist_008: { text: "Du lebst...", pose: VisualNovel.POSES.HAPPY },
                Mother_009: { text: "was ist passiert das Letzte was ich mich erinnern ist das wir auf dem Feld waren.", pose: VisualNovel.POSES.NEUTRAL },
                Doctor_010: { text: "du wurdest von dem Zauber einer Alraune versteinert, " + `${VisualNovel.dataForSave.nameProtagonist}` + " hat eine Heil Mittel aus dem " + `${VisualNovel.locations.forest.name}` + " geholt.", pose: VisualNovel.POSES.HAPPY },
                Mother_011: { text: "Ich erinnere mich, vielen Dank mein Sohn, der Wald ist doch min weit, wie lange war ich versteinert.", pose: VisualNovel.POSES.NEUTRAL },
                Doctor_012: { text: "Sie waren " + `${VisualNovel.dataForSave.dayCounter}` + " weg, wenn es noch länger und wir hätten dich nicht zurückholen können", pose: VisualNovel.POSES.HAPPY },
                Mother_013: { text: "Vielen danke euch.", pose: VisualNovel.POSES.NEUTRAL },
                Protagonist_014: { text: "Dank mir nicht, ich war an der ganzen Situation auch schuld.", pose: VisualNovel.POSES.HAPPY },
                Mother_015: { text: "ich danke dir. Nicht jeder hätte es Geschäft die Blume rechtzeitig besorgen", pose: VisualNovel.POSES.NEUTRAL },
                Mother_016: { text: "Das erinnert mich an deinen Vater.", pose: VisualNovel.POSES.NEUTRAL }
            },
            save_mother_with_wather: {
                Protagonist_017: { text: `${VisualNovel.characters.doctor.name}` + " ich bin endlich zurück,</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_018: { text: "Ich habe zwar nicht die Blume dabei, aber ich habe die Fee gefunden.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_019: { text: "Sie hat mir magisches Wasser übergebe mit de wir meine Mutter auch retten können.", pose: VisualNovel.POSES.HAPPY },
                Doctor_020: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: VisualNovel.POSES.HAPPY },
                Doctor_021: { text: "also waren die Geschichten wahr, aber gib mir zuerst Wasser, die Geschichte kannst du mir später erzählen", pose: VisualNovel.POSES.HAPPY },
                Narrator_022: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " übergibt das quell Wesser " + `${VisualNovel.characters.doctor.name}` },
                Narrator_023: { text: `${VisualNovel.characters.doctor.name}` + " schüttet die wasser über die Regungslose Mutter." },
                Mother_024: { text: "...", pose: VisualNovel.POSES.NEUTRAL },
                Protagonist_025: { text: "Du lebst...", pose: VisualNovel.POSES.HAPPY },
                Mother_026: { text: "was ist passiert das Letzte was ich mich erinnern ist das wir auf dem Feld waren.", pose: VisualNovel.POSES.NEUTRAL },
                Doctor_027: { text: "du wurdest von dem Zauber einer Alraune versteinert, " + `${VisualNovel.dataForSave.nameProtagonist}` + " hat Quell Wasser von der Fee geholt" + `${VisualNovel.locations.forest.name}` + " geholt.", pose: VisualNovel.POSES.HAPPY },
                Mother_028: { text: "Ich erinnere mich, vielen Dank mein Sohn, der Wald ist doch min weit, wie lange war ich versteinert.", pose: VisualNovel.POSES.NEUTRAL },
                Doctor_029: { text: "Sie waren " + `${VisualNovel.dataForSave.dayCounter}` + " weg, wenn es noch länger und wir hätten dich nicht zurückholen können", pose: VisualNovel.POSES.HAPPY },
                Mother_030: { text: "Vielen danke euch.", pose: VisualNovel.POSES.NEUTRAL },
                Protagonist_031: { text: "Dank mir nicht, ich war an der ganzen Situation auch schuld.", pose: VisualNovel.POSES.HAPPY },
                Mother_032: { text: "ich danke dir. Nicht jeder hätte es Geschäft die Gunst einer Fee zu bekommen und ihr Quellwasser zu bekommen rechtzeitig besorgen", pose: VisualNovel.POSES.NEUTRAL },
                Mother_033: { text: "Das erinnert mich an deinen Vater.", pose: VisualNovel.POSES.NEUTRAL }
            }
        };
        if (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items.magic_water) > 0) {
            await VisualNovel.playParagraph(storyTexts.save_mother_with_wather);
        }
        else {
            await VisualNovel.playParagraph(storyTexts.save_mother_with_flower);
        }
        return "99";
    }
    VisualNovel.saveMother = saveMother;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theStranger() {
        console.log("Scene:  The Stranger");
        let storyTexts = {
            encounter_with_the_stranger: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "ist fast bei den " + `${VisualNovel.locations.mountains.name}` + " angekommen, es wurde schon spät." },
                Narrator_002: { text: "Die Sonne geht hinter dem Berg geradeunter." },
                Narrator_003: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " sieht eine Gestalt in der Ferne" },
                Protagonist_004: { text: "da ist jemand", pose: VisualNovel.POSES.SAD },
                Protagonist_005: { text: "egal ich darf keine Zeit verlieren, ignorier ich einfach.", pose: VisualNovel.POSES.SAD },
                Narrator_006: { text: "der Mann sieht verwahrlost  aus und ist in zerrissenen Lumpen gekleidet." },
                Strange_man_007: { text: "Junger Mann, ich habe nicht viel und will auch nicht um viel bitten.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_008: { text: "Aber ich sammle leere Flaschen, haben sie eine die sie mir überlassen könnten.", pose: VisualNovel.POSES.HAPPY }
            },
            hand_over_the_bottle: {
                Protagonist_001: { text: "hier sie können Diese leere Flaschen eins Heils tranks haben.", pose: VisualNovel.POSES.SAD },
                Strange_man_002: { text: "was für eine Wunderschönes Exemplar.Vielen Dank.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_003: { text: "wohin sind sie unterwegs ?", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.", pose: VisualNovel.POSES.SAD },
                Strange_man_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.Und nochmal Danke für die Flasche.", pose: VisualNovel.POSES.HAPPY }
            },
            give_nothing_to_the_stranger: {
                Protagonist_001: { text: "Ich kann ihnen leider nichts geben.", pose: VisualNovel.POSES.SAD },
                Strange_man_002: { text: "sehr schade.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_003: { text: "wohin sind sie unterwegs?", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.", pose: VisualNovel.POSES.SAD },
                Strange_man_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.", pose: VisualNovel.POSES.HAPPY }
            },
            ignore_the_stranger: {
                Protagonist_001: { text: "<i>ignorier ihn einfach ich habe keine Zeit mit ihm zu reden</i>", pose: VisualNovel.POSES.SAD }
            },
            after_the_stranger: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " läuft in einem schnellen Schritt weiter." },
                Protagonist_002: { text: "<i>Was für ein Komischer Mann hate schon angst das er mich angreift.</i>", pose: VisualNovel.POSES.SAD }
            },
            back_to_the_way: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " ist am Fuße der " + `${VisualNovel.locations.mountains.name}` + " Berge angekommen." },
                Protagonist_002: { text: "</i>Die Sonne ist schon untergegangen.Ich sollte mich ein paar Stunden ausruhen </i>", pose: VisualNovel.POSES.SAD },
                Narrator_003: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " schlagt ein Lager auf und legt sich hin." }
            }
        };
        let answersForStranger = {
            isHandOver: "Übergebe eine Leere Flasche",
            isIgnore: "Ignoriere den Fremden",
            isGiveNothing: "Dem Fremden nichts geben"
        };
        await VisualNovel.playParagraph(storyTexts.encounter_with_the_stranger);
        let answerToTheStranger = await VisualNovel.ƒS.Menu.getInput(answersForStranger, "dialog_choices");
        switch (answerToTheStranger) {
            case answersForStranger.isHandOver:
                if (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items.empty_glass_bottle)) {
                    let used = await VisualNovel.activateItem(VisualNovel.items.empty_glass_bottle);
                    if (used) {
                        await VisualNovel.playParagraph(storyTexts.hand_over_the_bottle);
                        VisualNovel.dataForSave.bottleWasGiven = true;
                        break;
                    }
                }
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "<i>Ich besitze leider keine leere flsche.</i>");
            case answersForStranger.isGiveNothing:
                await VisualNovel.playParagraph(storyTexts.give_nothing_to_the_stranger);
                break;
            case answersForStranger.isIgnore:
                await VisualNovel.playParagraph(storyTexts.ignore_the_stranger);
                break;
            default:
                break;
        }
        await VisualNovel.playParagraph(storyTexts.back_to_the_way);
        return "6";
    }
    VisualNovel.theStranger = theStranger;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function tooLate() {
        console.log("Scene: too late");
        let storyTexts = {
            tooLate: {
                Protagonist_001: { text: `${VisualNovel.characters.doctor.name}` + "  ich bin endlich zurück, ich hoffe ich bin noch rechtzeitig gekommen</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_002: { text: "ich habe die Blume gefunden und dabei.", pose: VisualNovel.POSES.SAD },
                Doctor_003: { text: "Endlich bist du zurück, ich habe mir schon sorgen gemacht.", pose: VisualNovel.POSES.SAD },
                Doctor_004: { text: "gib mir die Blume, wir müssen uns Beilen die " + `${VisualNovel.dataForSave.dayCounter}` + " tage sind schon rum .", pose: VisualNovel.POSES.SAD },
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "  übergibt die Blume " + `${VisualNovel.characters.doctor.name}` },
                Narrator_006: { text: `${VisualNovel.characters.doctor.name}` + " verarbeite die Blume zu Medizin und schüttet die die Flüssichkeit über die Regungslose Mutter." },
                Narrator_007: { text: "..." }
            },
            cant_save_mother: {
                Doctor_010: { text: "Wir waren wohl zu spät.", pose: VisualNovel.POSES.SAD },
                Protagonist_011: { text: "…", pose: VisualNovel.POSES.SAD },
                Protagonist_012: { text: "ich bin an allem schuld, ich bin zu nichts zu gebrauchen.", pose: VisualNovel.POSES.SAD },
                Doctor_013: { text: "Mache dir keine Vorwürfe, nicht jeder währe mit der Blume zurückgekommen", pose: VisualNovel.POSES.SAD },
                Protagonist_014: { text: "Ich war zu spät.", pose: VisualNovel.POSES.SAD },
                Doctor_015: { text: "Was dankest du wenn eine Person stirbt ?", pose: VisualNovel.POSES.HAPPY },
                Doctor_016: { text: "Wenn sie von einem Pfeil ins Herz getroffen wird", pose: VisualNovel.POSES.HAPPY },
                Doctor_017: { text: "Nein… ", pose: VisualNovel.POSES.HAPPY },
                Doctor_018: { text: "Wenn sie von einer unheilbaren Krankheit befallen wird.", pose: VisualNovel.POSES.HAPPY },
                Doctor_019: { text: "Nein… ", pose: VisualNovel.POSES.HAPPY },
                Doctor_020: { text: "Wenn sie von dem Zauber einer Alraune getroffen wird,", pose: VisualNovel.POSES.HAPPY },
                Doctor_021: { text: "Nein… ", pose: VisualNovel.POSES.HAPPY },
                Doctor_022: { text: "Eine Peron stirbt wenn man sie vergisst.", pose: VisualNovel.POSES.HAPPY },
                Doctor_023: { text: "Also lass das nicht umsonst wesen sein.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_024: { text: "Du hast recht ich werde Trainieren, und Lernen, dass ich keine Beglast für die Menschen bin.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_025: { text: "Ich werde in dazu in die Welt hinausziehen, nichts hält mich mehr in diesem Dorf.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_026: { text: "vielen Dank für alles.", pose: VisualNovel.POSES.HAPPY },
                Narrator_027: { text: "Und so verlies" + `${VisualNovel.characters.doctor.name}` + " das Dorf begab sich auf seine ganz eigenen Abenteuer. " }
            }
        };
        await VisualNovel.playParagraph(storyTexts.tooLate);
        await VisualNovel.showAnnouncement(VisualNovel.locations.village, VisualNovel.announcements.some_time_pass, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.cant_save_mother);
        return "99";
    }
    VisualNovel.tooLate = tooLate;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function unexpectedEncounter() {
        console.log("Scene: a unexpected Encounter");
        let storyTexts = {
            the_stranger_shows_up_again: {
                Narrator_001: { text: "bevor " + `${VisualNovel.dataForSave.nameProtagonist}` + "  wieder ins Gebirge ging." },
                Protagonist_002: { text: "<i>ist das Eine Kutsche da vorne?</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Strange_man_003: { text: "Auf dich habe ich gewartet.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "<i>kennen wir uns, warum ?</i>", pose: VisualNovel.POSES.FRIGHTEND },
                Strange_man_005: { text: "Ich bin der dem du deine Flasche überlassen hast.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_006: { text: "Ich wollte mich bedanken und habe meine Kutsche mitgebracht.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_007: { text: "Mit der Kusche schaffen wir es bis heute Abend wieder im Dorf zu sein.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_008: { text: "<i>wirklich, ich danke dir, dann werde ich es auf jeden Fall rechtzeitig schaffen</i>", pose: VisualNovel.POSES.HAPPY },
                Strange_man_009: { text: "Nichts zu danken Sie haben mir dieses Wunder schöne Exemplar eine Flasche übergeben.", pose: VisualNovel.POSES.HAPPY },
                Strange_man_010: { text: "Spring auf, wir fahren direkt los.", pose: VisualNovel.POSES.HAPPY }
            },
            back_to_the_village: {
                Narrator_011: { text: `${VisualNovel.characters.strange_man.name}` + " und " + `${VisualNovel.dataForSave.nameProtagonist}` + "machten sich auf den Weg in dorf." },
                Narrator_012: { text: "Es wurde Abend und Die Kutsche Kamm im Dorf an." },
                Protagonist_013: { text: "vielen Dank, ohne ihre Hilfe, hätte ich es vielleicht rechtzeitig Geschäft", pose: VisualNovel.POSES.HAPPY },
                Narrator_014: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " ging zu seinem Haus, wo der Dr.schon auf ihn wartete." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.the_stranger_shows_up_again);
        await VisualNovel.showAnnouncement(VisualNovel.locations.village, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
        await VisualNovel.playParagraph(storyTexts.back_to_the_village);
        await VisualNovel.showBlackTransition(VisualNovel.locations.village);
        return "18";
    }
    VisualNovel.unexpectedEncounter = unexpectedEncounter;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function warkBack() {
        console.log("Scene: the walk to the village");
        let storyTexts = {
            back_to_the_mountain: {
                Narrator_001: { text: " <name> machte sich auf den auf den Berg." }
            },
            chosen_long_way: {
                Protagonist_002: { text: "<i>Ich kann jetzt nicht noch was passieren lassen ich nehmen lieber wieder den sicheren Weg.</i>", pose: VisualNovel.POSES.HAPPY }
            },
            chosen_dangerus_way: {
                Protagonist_003: { text: "<i>Ich würde das nicht nochmal überleben an dieser Klippe entlangzugehen, geschweige wenn der Basilisk zurückkommt.</i>", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "<i>ich gehe diesmal den sicheren weg.</i>", pose: VisualNovel.POSES.HAPPY }
            },
            rest_of_the_way: {
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " nahm den sicheren Weg" },
                Narrator_006: { text: "Nach 2 Tagen ohne Zwischenfälle waren das Gebirge überwunden." },
                Narrator_007: { text: "Nach einem weiteren Tag Kamm" + `${VisualNovel.dataForSave.nameProtagonist}` + " wieder in seinem Heimatdorf an." },
                Protagonist_008: { text: "<i>Endlich angekommen ich muss schnell zu meiner Mutter.</i>", pose: VisualNovel.POSES.HAPPY },
                Narrator_009: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " rennt die Letzen Meter zu sich nach Hause." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.back_to_the_mountain);
        if (VisualNovel.dataForSave.dangerousPathChosen) {
            await VisualNovel.playParagraph(storyTexts.chosen_dangerus_way);
        }
        else {
            await VisualNovel.playParagraph(storyTexts.chosen_long_way);
        }
        await VisualNovel.playParagraph(storyTexts.rest_of_the_way);
        VisualNovel.dataForSave.dayCounter += 3;
        await VisualNovel.showAnnouncement(VisualNovel.locations.village, VisualNovel.announcements.three_days_pass, VisualNovel.transitions.leftTORight);
        console.log("days: " + VisualNovel.dataForSave.dayCounter);
        if (VisualNovel.dataForSave.dayCounter > 7) {
            return "19";
        }
        else {
            return "18";
        }
    }
    VisualNovel.warkBack = warkBack;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function winAgastTheBasilik() {
        console.log("Scene: win agast the Basilik");
        let storyTexts = {
            success: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " hat mit einem guten schlag  der Basilisk schwer zu verwunden." },
                Narrator_002: { text: "Der Basilisk hat noch genug Kraft, um zu fliehen." },
                Protagonist_003: { text: "<i>Der hat mir wirklich zugesetzt.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_004: { text: "<i>Ich sollte die Zeit nutzen, um hier weg zu kommen bevor noch einer auftaucht.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "verschwendet seine Zeit  und läuft schnell in den pfade weiter." }
            },
            end_of_the_mountain: {
                Narrator_006: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " kommt am Ende des Gebirges an.Die Sonne ist am schon untergehen" },
                Protagonist_007: { text: "<i>Endlich dort weck.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_008: { text: "<i>Da vorne  ist ein Wald, das muss er sein, der Ort, an dem die Blume wachst.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_009: { text: "<i>Ich brauche jetzt erst mal eine Pause, bevor ich weitergehe.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_010: { text: "<i>Es sieht hier sicher aus ich sollte mich, ich denke ich kann hier ein Lager aufschlagen.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_011: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " schlägt seien Lager auf und legt sich direkt hin." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.success);
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        await VisualNovel.playParagraph(storyTexts.end_of_the_mountain);
        VisualNovel.dataForSave.dayCounter += 1;
    }
    VisualNovel.winAgastTheBasilik = winAgastTheBasilik;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function wrongWay() {
        console.log("Scene:  wrong Way");
        let storyTexts = {
            out_of_the_woods: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " hat das Ende des Waldes erreicht, aber es schein nicht als wäre er auf dem gewünschten Ort angekommen." },
                Protagonist_002: { text: "<i>Wo bin ich hier.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_003: { text: "<i>ich bin hier falsch, ich muss vorbeigelaufen sein</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_004: { text: "<i>Warte vor mir ist das Gebirge, ich bin im Kreis gesoffe,</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_005: { text: "<i>und jetzt geht auch schon wieder die Sonne unter </i>", pose: VisualNovel.POSES.SAD },
                Protagonist_006: { text: "<i>Ich muss wieder auf den nächsten Morgen warten</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_007: { text: "<i>Ich muss die Blume morgen finden sonst komme ich nicht mehr rechtzeitig zurück ins Dorf</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_008: { text: "<i>Ich werde jetzt erstmal schlafen, morgen muss ich direkt bei Sonnenaufgang wieder los.</i>", pose: VisualNovel.POSES.SAD },
            },
            the_next_morning: {
                Narrator_009: { text: "Der nächste Morgen ist angebrochen." },
                Protagonist_010: { text: "<i>Heute muss ich die Bluem finden, ich habe keine Zeit.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_011: { text: "<i>Der " + `${VisualNovel.characters.doctor.name}` + " hat gesagt das Die Blumen im Wald auf einer Wiese wachsen.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_012: { text: "<i>Die Blumen sollen Leuchten.vielleicht sollte ich mehr darauf achten</i>", pose: VisualNovel.POSES.SAD },
                Narrator_013: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " macht sich auf in den Wald" }
            }
        };
        await VisualNovel.showBlackTransition(VisualNovel.locations.mountains);
        await VisualNovel.playParagraph(storyTexts.out_of_the_woods);
        await VisualNovel.showAnnouncement(VisualNovel.locations.mountains, VisualNovel.announcements.day_goes_by, VisualNovel.transitions.leftTORight);
        VisualNovel.dataForSave.dayCounter += 1;
        await VisualNovel.playParagraph(storyTexts.the_next_morning);
        return "11";
    }
    VisualNovel.wrongWay = wrongWay;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function startAnimations() {
        let canvas = document.querySelector("canvas");
        let animation = canvas.animate([
            { transform: "translateX(0px) rotate(0deg)" },
            { transform: "translateX(10px) rotate(5deg)" },
            { transform: "translateX(0px) rotate(0deg)" },
            { transform: "translateX(-10px) rotate(-5deg)" },
            { transform: "translateX(0px) rotate(0deg)" }
        ], {
            duration: 150,
            iterations: 3,
            easing: "ease-in-out"
        });
        animation.play();
    }
    VisualNovel.startAnimations = startAnimations;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.items = {
        flower: {
            name: "magische Blume",
            description: "Eine magische Blume mit, die über die Fähigkeiten besitzt, alle Krankheiten zu heilen",
            image: "./Images/Items/flower.png",
            static: true
        },
        sword: {
            name: "Schwert",
            description: "Ein Schwert für ein Kind bei einem Erwachsenen wirkt es mehr wie ein Dolch",
            image: "./Images/Items/sword.png",
            static: true
        },
        water_bag: {
            name: "wasser beutel",
            description: "Beutel voll mit Wasser zum Trinken",
            image: "./Images/Items/water_bag.png",
            static: true
        },
        healing_potion: {
            name: "Heiltrank",
            description: "Ein schwacher Heiltrank, welche schwache Wunden heilen kann",
            image: "./Images/Items/healing_potion.png",
            static: true
        },
        empty_glass_bottle: {
            name: "leere Glassflasche ",
            description: "Eine einfache leere Glasflasche, es ist hochwertig angefertigt",
            image: "./Images/Items/bottle.png",
            static: true
        },
        loaf_of_bread: {
            name: "Ein Laib Brot",
            description: "Ein frisch gebackenes Brot",
            image: "./Images/Items/bread.png",
            static: true
        },
        magic_water: {
            name: "Magisches Wasser",
            description: "Wasser aus der Quelle der Großen Fee des Waldes",
            image: "./Images/Items/magic_water.png",
            static: true
        }
    };
})(VisualNovel || (VisualNovel = {}));
/// <reference path = "../objectes/items.ts"/>
var VisualNovel;
/// <reference path = "../objectes/items.ts"/>
(function (VisualNovel) {
    let health = 100;
    let damage = 10;
    let parryChance = 0.50;
    let dodgeChance = 0.75;
    VisualNovel.enemys = {
        slime: {
            name: "kleiner Schleim",
            health: 30,
            damage: 1
        },
        basilisk: {
            name: "Basilisk",
            health: 50,
            damage: 20
        }
    };
    let fightItems = {
        healing_potion: {
            name: "Heiltrank",
            healing: 50
        },
        loaf_of_bread: {
            name: "Ein Laib Brot",
            healing: 25
        },
        water_bag: {
            name: "wasser beutel",
            healing: 5
        }
    };
    let actions = {
        attack: "angreifen",
        parry: "parieren",
        dodge: "ausweichen",
        useItems: "Gegenstand benutzen"
    };
    async function fight(_enemy) {
        let protagonistCurrentHealth = health;
        let enemyCurrentHealth = _enemy.health;
        let fightText = {
            fightStart: " ein Kampf hat gengen " + `${_enemy.name}` + " begonnen ",
            action: "was soll " + `${VisualNovel.dataForSave.nameProtagonist}` + " tun",
            atackSuccessful: `${_enemy.name}` + " wurde getroffen, " + `${_enemy.name}` + " erhielt " + `${damage}` + " schade",
            beHit: `${VisualNovel.dataForSave.nameProtagonist}` + " was hit, " + `${VisualNovel.dataForSave.nameProtagonist}` + " received " + `${_enemy.damage}` + " schaden",
            remainingHealth: `${_enemy.name}` + " besitzt noch " + `${enemyCurrentHealth}`,
            parrySuccessful: `${VisualNovel.dataForSave.nameProtagonist}` + " hat ervolgreich den Angriff abwehrt und hat " + `${_enemy.name}` + " " + `${damage}` + "schaden verusrsacht",
            parryFailed: `${VisualNovel.dataForSave.nameProtagonist}` + " hat den Angriff nicht abwehren könenn und hat " + `${_enemy.damage}` + " schaden erhalten",
            dodgeSuccessful: `${VisualNovel.dataForSave.nameProtagonist}` + " ist ervolgreich dem Angriff ausgewichen",
            dodgeFailed: `${VisualNovel.dataForSave.nameProtagonist}` + " hat dem Angriff nicht auszuweichen und hat " + `${_enemy.damage}` + " schaden erhalten",
            fightWon: `${VisualNovel.dataForSave.nameProtagonist}` + " hat den Kampf gewonnen",
            fightLost: `${_enemy.name}` + " hat den Kampf gewonnen",
            noItems: `${VisualNovel.dataForSave.nameProtagonist}` + " hat keine nützlichen Items bei sich."
        };
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.fightMusic, 0.2, 1, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.fightStart);
        while (protagonistCurrentHealth > 0 && enemyCurrentHealth > 0) {
            let chosenAction = await VisualNovel.ƒS.Menu.getInput(actions, "fightOptions");
            switch (chosenAction) {
                case actions.attack:
                    enemyCurrentHealth -= damage;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.atackSuccessful);
                    protagonistCurrentHealth -= _enemy.damage;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.beHit);
                    break;
                case actions.dodge:
                    let dodgeSuccessful = Math.random();
                    if (dodgeSuccessful <= dodgeChance) {
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.dodgeSuccessful);
                    }
                    else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.dodgeFailed);
                    }
                    break;
                case actions.parry:
                    let parrySuccessful = Math.random();
                    if (parrySuccessful <= parryChance) {
                        enemyCurrentHealth -= damage;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.parrySuccessful);
                    }
                    else {
                        protagonistCurrentHealth -= _enemy.damage;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.parryFailed);
                    }
                    break;
                case actions.useItems:
                    let usebleItems = await lookForFightItems();
                    if (usebleItems.length > 0) {
                        //let item = await activateItem(items.healing_potion);
                        let item = await VisualNovel.activateItems(usebleItems);
                        if (item) {
                            await useFightItem(item);
                            protagonistCurrentHealth -= _enemy.damage;
                            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.beHit);
                        }
                    }
                    else {
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.noItems);
                    }
                    break;
                default:
                    break;
            }
        }
        await VisualNovel.ƒS.Sound.fade(VisualNovel.sounds.fightMusic, 0, 1, false);
        if (protagonistCurrentHealth <= 0) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.fightLost);
            return false;
        }
        else {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.fightWon);
            return true;
        }
    }
    VisualNovel.fight = fight;
    async function lookForFightItems() {
        let possibleFightItems = [];
        for (const idItem in VisualNovel.items) {
            for (const idFight in fightItems) {
                if (idItem == idFight) {
                    if (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items[idItem]) > 0) {
                        possibleFightItems.push(VisualNovel.items[idItem]);
                    }
                }
            }
        }
        return possibleFightItems;
    }
    async function useFightItem(_item) {
        let fightItem = null;
        for (const id in VisualNovel.items) {
            if (VisualNovel.items[id] == _item) {
                fightItem = fightItems[id];
            }
        }
        if (fightItem) {
            health += fightItem.healing;
            if (health > 100) {
                health = 100;
            }
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, `${VisualNovel.dataForSave.nameProtagonist}` + " hat das Item: " + `${fightItem.name}` + " genutzt und " + `${fightItem.healing}` + " leben geheilt");
            if (_item == VisualNovel.items.healing_potion) {
                VisualNovel.ƒS.Inventory.add(VisualNovel.items.empty_glass_bottle);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, `${VisualNovel.dataForSave.nameProtagonist}` + " hat das Item: " + `${VisualNovel.items.empty_glass_bottle.name}` + " erhalten");
            }
        }
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    function useItem(_item) {
        let dialog = document.querySelector("dialog[type=inventory]");
        let itemId = _item.replaceAll(" ", "_");
        let itemElement = dialog.querySelector(`[id=${itemId}]`);
        if (itemElement) {
            let amount = itemElement.querySelector("amount");
            amount.innerHTML = (parseInt(amount.innerHTML) - 1).toString();
            if (parseInt(amount.innerHTML) == 0) {
                itemElement.remove();
            }
        }
    }
    VisualNovel.useItem = useItem;
    async function activateItems(_item) {
        let dialog = document.querySelector("dialog[type=inventory]");
        return await new Promise((_resolve) => {
            dialog.querySelector("button").addEventListener("pointerdown", hndUse);
            for (let index = 0; index < _item.length; index++) {
                let itemId = _item[index].name.replaceAll(" ", "_");
                let itemElement = dialog.querySelector(`[id=${itemId}]`);
                itemElement.addEventListener("pointerdown", hndUse);
            }
            //@ts-ignore
            dialog.showModal();
            VisualNovel.invetoryOpen = true;
            function hndUse(_event) {
                dialog.querySelector("button").removeEventListener("pointerdown", hndUse);
                let choosenItem = null;
                for (let index = 0; index < _item.length; index++) {
                    let itemId = _item[index].name.replaceAll(" ", "_");
                    let itemElement = dialog.querySelector(`[id=${itemId}]`);
                    itemElement.removeEventListener("pointerdown", hndUse);
                    if (_event.currentTarget && itemId == _event.currentTarget.id) {
                        choosenItem = _item[index];
                    }
                }
                if (choosenItem) {
                    useItem(choosenItem.name);
                }
                VisualNovel.invetoryOpen = false;
                //@ts-ignore
                dialog.close();
                _resolve(choosenItem);
            }
        });
    }
    VisualNovel.activateItems = activateItems;
    async function activateItem(_item) {
        let dialog = document.querySelector("dialog[type=inventory]");
        let itemId = _item.name.replaceAll(" ", "_");
        let itemElement = dialog.querySelector(`[id=${itemId}]`);
        return await new Promise((_resolve) => {
            function hndUse(_event) {
                itemElement.removeEventListener("pointerdown", hndUse);
                console.log(_event.currentTarget.id);
                //@ts-ignore
                dialog.close();
                useItem(_item.name);
                _resolve(_item);
            }
            //@ts-ignore
            dialog.showModal();
            itemElement.addEventListener("pointerdown", hndUse);
        });
    }
    VisualNovel.activateItem = activateItem;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.protagonistPositionVector = new VisualNovel.ƒ.Vector2(+400, -700);
    VisualNovel.secondPersonsPositionVector = new VisualNovel.ƒ.Vector2(-400, -700);
    VisualNovel.thirdPersonsPositionVector = new VisualNovel.ƒ.Vector2(0, -700);
    let lastSpeaker = undefined;
    let lastPose = undefined;
    let charactersINParagraph = {};
    async function playParagraph(_text) {
        for (const text in _text) {
            let isInPragraph = charactersINParagraph[text.substring(0, text.length - 4).toLowerCase()] ? true : false;
            if (text.substring(0, text.length - 4) != "Narrator") {
                if (false == isInPragraph) {
                    //console.log("new Char");
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);
                }
                else if (charactersINParagraph[text.substring(0, text.length - 4).toLowerCase()] != _text[text].pose) {
                    //console.log("new pose");
                    await VisualNovel.ƒS.Character.hide(VisualNovel.characters[text.substring(0, text.length - 4).toLowerCase()]);
                    delete charactersINParagraph[text.substring(0, text.length - 4).toLocaleLowerCase()];
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);
                }
                if (lastSpeaker && lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    await endSpeakingAnimation(lastSpeaker, lastPose);
                    lastSpeaker = undefined;
                    lastPose = undefined;
                }
                //console.log(lastPose, _text[text].pose);
                if (lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    //console.log("new Animations");
                    await startSpeakingAnimation(text.substring(0, text.length - 4), _text[text].pose);
                }
            }
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters[text.toLowerCase().substring(0, text.length - 4)], _text[text].text);
        }
        VisualNovel.ƒS.Character.hideAll();
        charactersINParagraph = {};
        lastSpeaker = undefined;
        lastPose = undefined;
        await VisualNovel.ƒS.update();
    }
    VisualNovel.playParagraph = playParagraph;
    async function showCharacter(_character, _pose) {
        for (const char in VisualNovel.characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in VisualNovel.characters[char].pose) {
                    if (pose == _pose) {
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters[char], VisualNovel.characters[char].pose[pose], char.charAt(0) == "p" ? VisualNovel.protagonistPositionVector : Object.entries(charactersINParagraph).length < 2 ? VisualNovel.secondPersonsPositionVector : VisualNovel.thirdPersonsPositionVector);
                        //charactersINParagraph.push({ char: char, pose: _pose });
                        charactersINParagraph[char] = _pose;
                    }
                }
            }
        }
        await VisualNovel.ƒS.update();
    }
    VisualNovel.showCharacter = showCharacter;
    async function endSpeakingAnimation(_character, _pose) {
        for (const char in VisualNovel.characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in VisualNovel.characters[char].pose) {
                    if (pose == _pose) {
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters[char], VisualNovel.characters[char].pose[pose], VisualNovel.animations.endSpeaking);
                        lastSpeaker = undefined;
                        lastPose = undefined;
                    }
                }
            }
        }
    }
    VisualNovel.endSpeakingAnimation = endSpeakingAnimation;
    async function startSpeakingAnimation(_character, _pose) {
        for (const char in VisualNovel.characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in VisualNovel.characters[char].pose) {
                    if (pose == _pose) {
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters[char], VisualNovel.characters[char].pose[pose], VisualNovel.animations.startSpeaking);
                        lastSpeaker = char;
                        lastPose = pose;
                    }
                }
            }
        }
    }
    VisualNovel.startSpeakingAnimation = startSpeakingAnimation;
    async function showAnnouncement(_location, _announcment, _firstTransition, _secondTransition) {
        await VisualNovel.ƒS.Location.show(_announcment);
        await VisualNovel.ƒS.update(_firstTransition.duration, _firstTransition.alpha, _firstTransition.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "");
        await VisualNovel.ƒS.Location.show(_location);
        if (_secondTransition) {
            await VisualNovel.ƒS.update(_secondTransition.duration, _secondTransition.alpha, _secondTransition.edge);
        }
        else {
            await VisualNovel.ƒS.update(_firstTransition.duration, _firstTransition.alpha, _firstTransition.edge);
        }
    }
    VisualNovel.showAnnouncement = showAnnouncement;
    async function showBlackTransition(_location) {
        await VisualNovel.ƒS.Location.show(VisualNovel.announcements.black);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
        await VisualNovel.ƒS.Location.show(_location);
        await VisualNovel.ƒS.update(VisualNovel.transitions.leftTORight.duration, VisualNovel.transitions.leftTORight.alpha, VisualNovel.transitions.leftTORight.edge);
    }
    VisualNovel.showBlackTransition = showBlackTransition;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.animations = {
        startSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1, 1), color: VisualNovel.ƒS.Color.CSS("gray")
            },
            end: { scaling: new VisualNovel.ƒS.Position(1.2, 1.2), color: VisualNovel.ƒS.Color.CSS("white") },
            duration: 0.1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1.2, 1.2), color: VisualNovel.ƒS.Color.CSS("white")
            },
            end: { scaling: new VisualNovel.ƒS.Position(1, 1), color: VisualNovel.ƒS.Color.CSS("gray") },
            duration: 0.1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        speaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1, 1), color: VisualNovel.ƒS.Color.CSS("gray")
            },
            end: { scaling: new VisualNovel.ƒS.Position(1.2, 1.2), color: VisualNovel.ƒS.Color.CSS("white") },
            duration: 0,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.announcements = {
        black: {
            name: "schwarz",
            background: "./Images/Announcements/black.png"
        },
        day_goes_by: {
            name: "ein Tag vergeht",
            background: "./Images/Announcements/day_goes_by.png"
        },
        some_days_pass: {
            name: "ein paar Tage vergehen",
            background: "./Images/Announcements/some_days_pass.png"
        },
        some_time_pass: {
            name: "ein paar Stunden später",
            background: "./Images/Announcements/some_time_passes.png"
        },
        two_days_pass: {
            name: "zwei Tage vergehen",
            background: "./Images/Announcements/two_days_pass.png"
        },
        three_days_pass: {
            name: "drei Tage vergehen",
            background: "./Images/Announcements/three_days_pass.png"
        },
        game_over: {
            name: "Spiel ist zu Ende",
            background: "./Images/Announcements/game_over.png"
        },
        tell_story: {
            name: "er Erzählt seine Geschichte",
            background: "./Images/Announcements/tell_story.png"
        }
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    let POSES;
    (function (POSES) {
        POSES["SAD"] = "sad";
        POSES["FRIGHTEND"] = "frightend";
        POSES["HAPPY"] = "happy";
        POSES["NEUTRAL"] = "neutral";
        POSES["CHILD"] = "child";
    })(POSES = VisualNovel.POSES || (VisualNovel.POSES = {}));
    VisualNovel.characters = {
        narrator: {
            name: undefined,
            origin: undefined,
            pose: undefined
        },
        protagonist: {
            name: "Protagonist",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Protagonist/protagonist_happy.png",
                sad: "./Images/Characters/Protagonist/protagonist_sad.png",
                frightend: "./Images/Characters/Protagonist/protagonist_frightend.png",
                child: "./Images/Characters/Protagonist/protagonist_sad.png"
            }
        },
        mother: {
            name: "Mutter",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Mother/mother_happy.png",
                neutral: "./Images/Characters/Mother/mother_neutral.png",
                frightend: "./Images/Characters/Mother/mother_frightend.png"
            }
        },
        doctor: {
            name: "Dr.Bader",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Doctor/doctor_happy.png",
                sad: "./Images/Characters/Doctor/doctor_sad.png"
            }
        },
        strange_man: {
            name: "Fremder Mann",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Strange_man/strange_man_happy.png"
            }
        },
        fairy: {
            name: "große Fee des Waldes",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Fairy/fairy_happy.png"
            }
        }
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.locations = {
        village: {
            name: "Dorf",
            background: "./Images/Backgrounds/village.png"
        },
        grasslands: {
            name: "Wiesen",
            background: "./Images/Backgrounds/grasslands.png"
        },
        forest: {
            name: "Wald",
            background: "./Images/Backgrounds/forest.png"
        },
        cave: {
            name: "Höhle",
            background: "./Images/Backgrounds/cave.png"
        },
        mountains: {
            name: "Gebirge",
            background: "./Images/Backgrounds/mountains.png"
        }
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.sounds = {
        fightMusic: "./Audio/fightMusic.mp3",
        adventureMusic: "./Audio/adventureMusic.mp3",
        mysteriousMusic: "./Audio/mysteriousMusic.mp3"
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.transitions = {
        leftTORight: {
            duration: 1,
            alpha: "./Transitions/left_to_right.png",
            edge: 2
        },
        outToIn: {
            duration: 1,
            alpha: "./Transitions/out_to_in.png",
            edge: 2
        },
        bottomToTop: {
            duration: 1,
            alpha: "./Transitions/bottom_to_top.png",
            edge: 2
        },
        inToOut: {
            duration: 1,
            alpha: "./Transitions/in_to_out.png",
            edge: 2
        }
    };
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=Game.js.map