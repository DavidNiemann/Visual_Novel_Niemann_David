"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    let invetoryOpen = false;
    VisualNovel.dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false
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
                if (invetoryOpen) {
                    VisualNovel.ƒS.Inventory.close();
                    invetoryOpen = false;
                }
                else {
                    VisualNovel.ƒS.Inventory.open();
                    invetoryOpen = true;
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
            { id: "1", scene: VisualNovel.prehistory, name: "Einführung", next: "2" },
            { id: "2", scene: VisualNovel.childhood, name: "Kindheit ", next: "3" },
            { id: "3", scene: VisualNovel.theCurse, name: "Der Fluch", next: "4" },
            { id: "4", scene: VisualNovel.grassland, name: "Die weite Wiesen", next: "5" },
            { id: "5", scene: VisualNovel.theStranger, name: "Der Fremde", next: "6" },
            { id: "6", scene: VisualNovel.theMountain, name: "Die Berge" },
            { id: "7", scene: VisualNovel.dangerousWay, name: "Der gefährliche Weg" },
            { id: "8", scene: VisualNovel.lostAgastTheBasilik, name: "Niederlage gegen den Basilik" },
            { id: "9", scene: VisualNovel.winAgastTheBasilik, name: "sieg über den Basilik", next: "11" },
            { id: "10", scene: VisualNovel.longWay, name: "Der Lange Weg", next: "11" },
        ];
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
})(VisualNovel || (VisualNovel = {}));
/* namespace Test {//https://itch.io/game-assets
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;


  let invetoryOpen: boolean = false;
  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "./Transitions/JigsawThemedTransitions/puzzle.png",
      edge: 1
    }
  };
  export let sounds = {
    nightclub: "./Audio/Nightclub.ogg",
    click: "Pfad"
  };

  export let locations = {
    nightpark: {
      name: "nightpark",
      background: "./Images/Backgrounds/Nightpark.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    Protagonist: {
      name: "Protagonist", //ToDo: Name eingeben oder ausdeken
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/Protagonist/protagonist_happy.png",
        sad: "./Images/Characters/Protagonist/protagonist_sad.png",
        frightend: "./Images/Characters/Protagonist/protagonist_frightend.png"
      }
    }
  };

  export let items = {
    blume: {
      name: "Tulpe",
      description: "Eine sehr schöne Blume",
      image: "./Images/Items/blume.png"
    },
    fisch: {
      name: "gewönlicher Fisch",
      description: "Er scheint noch zu leben",
      image: "./Images/Items/fisch.png"
    },
    fee: {
      name: "Magische Fee",
      description: "Ihre Magischen Kräfte soll alle wundel Heilen Könne",
      image: "./Images/Items/fee.png"
    },
    stein: {
      name: "Stein",
      description: "ein Kleiner aber sehr schwer",
      image: "./Images/Items/stein.png"
    },
    schwerd: {
      name: "Schwert",
      description: "achtung scharf",
      image: "./Images/Items/schwert.png",
      static: true
    },
    buch: {
      name: "Buch",
      description: "ein buch voller interessantes Wissen",
      image: "./Images/Items/studie.png",
      static: true
    }
  };

  export let dataForSave = {
    nameProtagonist: "",
    scrore: 0
  };

  export function showCredits(): void {
    ƒS.Text.setClass("Credits");
    ƒS.Text.print("David Niemann");
  }

  //** MENÜ **
  let inGameMenuButtens = {
    save: "Save",
    load: "Load",
    close: "Close",
    creadits: "Credits"
  };

  let gameMenu: ƒS.Menu;
  //true = open; false = close
  let menuIsOpen: Boolean = true;

  async function buttonFunktionAlitiles(_option: string): Promise<void> {
    switch (_option) {
      case inGameMenuButtens.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtens.load:
        await ƒS.Progress.load();
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
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        if (invetoryOpen) {
          ƒS.Inventory.close();
          invetoryOpen = false;
        } else {
          ƒS.Inventory.open();
          invetoryOpen = true;
        }
        break;
      default:
        break;
    }
  }



  //window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
    buttonFunktionAlitiles("Close");
    let scenes: ƒS.Scenes = [
      { id: "1", scene: Scene, name: "testScene", next: "2" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
  }


  export async function playMonologue(_character: ƒS.Character | Object, _text: { [textname: string]: string }): Promise<void> {
    for (const key of Object.values(_text)) {
      await ƒS.Speech.tell(_character, key);
    }
  }

} */ 
/* namespace Test {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Navigator: {
        T001: "es war einmal"
      },
      Protagonist: {
        T001: "hallo"
      }
    };
 */
/* let firstDialogueAnswers = {
  isSayOk: "Okay",
  isSayYes: "ja",
  isSayNo: "Nein"


};
*/
/* let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "individualCssClass");

switch (firstDialogueElement) {
  case firstDialogueAnswers.isSayOk:
    ƒS.Speech.clear();
    break;
  case firstDialogueAnswers.isSayYes:
    ƒS.Speech.clear();
    break;
  case firstDialogueAnswers.isSayNo:
    ƒS.Speech.clear();
    break;
  default:
    break;
} */
//ƒS.Inventory.add(items.fisch);
//ƒS.Inventory.add(items.blume);
//ƒS.Inventory.add(items.fee);
//ƒS.Inventory.add(items.schwerd);
//ƒS.Inventory.add(items.stein);
//ƒS.Inventory.add(items.buch);
/* dataForSave.nameProtagonist = await ƒS.Speech.getInput(); */
/*  ƒS.Sound.fade(sounds.nightclub, 0.1, 1, true); */
/*  await ƒS.Location.show(locations.nightpark); */
/*  await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, new ƒ.Vector2(100, -500)); */
/*  await ƒS.update(1); */
/*  await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); */
//await ƒS.Speech.tell(characters.narrator, text.Navigator.T001);
/*  await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T001); */
/* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.sad, new ƒ.Vector2(-100, -500)); */
/* await ƒS.update(1); */
/* ƒS.Speech.hide(); */
/* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.frightend, new ƒ.Vector2(0, -500)); */
/* await ƒS.update(1); */
/*     ƒS.Sound.fade(sounds.nightclub, 0, 0.1, false); */
/* return "Prehistory"; */ // nur als string 
/*   }

} */ 
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
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.ƒS.update();
        await VisualNovel.playParagraph(storyTexts.introduction);
        // TODO: übergang einfügen
        /* await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.child, protagonistPositionVector);
        await ƒS.Character.show(characters.mother, characters.mother.pose.happy, otherPersonsPositionVector); */
        /*  await ƒS.update(); */
        await VisualNovel.playParagraph(storyTexts.childhoodStory_Part1);
        /*  ƒS.Character.hideAll(); */
        /*   await ƒS.update(); */
        // TODO: übergang einfügen
        await VisualNovel.playParagraph(storyTexts.childhoodStory_Part2);
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
                Mother_001: { text: "steh auf " + `${VisualNovel.dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_002: { text: "ich komme gleich ich esse Kutz noch ein Stück Brot.", pose: VisualNovel.POSES.HAPPY },
                Mother_003: { text: "ok ich gehe schon mal vor, komm dann nach.", pose: VisualNovel.POSES.HAPPY },
                Narrator_004: { text: "nach dem " + `${VisualNovel.dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld." },
                Mother_005: { text: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.", pose: VisualNovel.POSES.HAPPY },
                Protagonist_006: { text: "mutter schau mal das ist aber eine komische Karotte.", pose: VisualNovel.POSES.HAPPY },
                Narrator_007: { text: "der Junge fängt an der Pflanze zu ziehen." },
                Protagonist_008: { text: "die geht aber schwer raus.", pose: VisualNovel.POSES.HAPPY },
                Narrator_009: { text: "Mutter dreht sich." },
                Mother_010: { text: "Mutter HALTTTTTT, das ist eine ….", pose: VisualNovel.POSES.FRIGHTEND },
                Mother_011: { text: "….", pose: VisualNovel.POSES.NEUTRAL },
                Narrator_012: { text: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${VisualNovel.dataForSave.nameProtagonist}` + " und hebt in den Ohren zu." }
                //U001:  { text: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Narrator_001: { text: "es wurde still und der junge dreht sich zu seiner Mutter um sich zu." },
                Mother_002: { text: "ich liebe….", pose: VisualNovel.POSES.HAPPY },
                Protagonist_003: { text: "Mutter, mutter…MAMAAAAAAA.", pose: VisualNovel.POSES.FRIGHTEND },
                Protagonist_004: { text: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.", pose: VisualNovel.POSES.FRIGHTEND },
                Narrator_005: { text: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen." }
            },
            get_help: {
                Narrator_001: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation," },
                Narrator_002: { text: "Der Arzt namens Dr.Bader ging und " + `${VisualNovel.dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück." }
            },
            talk_with_the_doctor: {
                Protagonist_001: { text: "Helfen sie bitte meiner Mutter.", pose: VisualNovel.POSES.SAD },
                Doctor_002: { text: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.", pose: VisualNovel.POSES.SAD },
                Doctor_003: { text: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.", pose: VisualNovel.POSES.SAD },
                Protagonist_005: { text: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.", pose: VisualNovel.POSES.SAD },
                Doctor_006: { text: "bringen wir sie erstmals zurück ins Dorf.", pose: VisualNovel.POSES.SAD }
            },
            transition_to_the_village: {
                Narrator_001: { text: "der Arzt und " + `${VisualNovel.dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf." }
            },
            about_the_way: {
                Protagonist_001: { text: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.", pose: VisualNovel.POSES.SAD },
                Doctor_002: { text: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun", pose: VisualNovel.POSES.SAD },
                Doctor_003: { text: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${VisualNovel.locations.forest.name}` + "  Zu finden ist.", pose: VisualNovel.POSES.SAD },
                Doctor_004: { text: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.", pose: VisualNovel.POSES.SAD },
                Doctor_005: { text: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.", pose: VisualNovel.POSES.SAD },
                Protagonist_006: { text: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.", pose: VisualNovel.POSES.SAD },
                Doctor_007: { text: "Du musst nach Norden zu den " + `${VisualNovel.locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.", pose: VisualNovel.POSES.SAD },
                Doctor_008: { text: "nach den Felder kommst du zu dem " + `${VisualNovel.locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.", pose: VisualNovel.POSES.SAD },
                Doctor_009: { text: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch." },
                Doctor_010: { text: "er ist ziemlich sicher aber ist lange. ", pose: VisualNovel.POSES.SAD },
                Doctor_011: { text: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.", pose: VisualNovel.POSES.SAD },
                Doctor_012: { text: "Dahinter ist schon der " + `${VisualNovel.locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ", pose: VisualNovel.POSES.SAD },
                Doctor_013: { text: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.", pose: VisualNovel.POSES.SAD },
                Protagonist_014: { text: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_015: { text: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_016: { text: "<i>Alles ist meine Schuld.</i>", pose: VisualNovel.POSES.SAD },
                Protagonist_017: { text: "Ich werde die Blume Holen, ich bin daran schuld an allem.", pose: VisualNovel.POSES.SAD },
                Narrator_018: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${VisualNovel.items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür." },
                Doctor_019: { text: "Warte!!", pose: VisualNovel.POSES.SAD },
                Doctor_020: { text: "Nimm da hier, ein " + `${VisualNovel.items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.", pose: VisualNovel.POSES.SAD },
                Doctor_021: { text: "Ich hoffe du wirst ich nicht brauchen.", pose: VisualNovel.POSES.SAD },
                Protagonist_022: { text: "Danke. Passen sie auf meine Mutter auf.", pose: VisualNovel.POSES.SAD },
                Narrator_023: { text: "Und so machte sich " + `${VisualNovel.dataForSave.nameProtagonist}` + " auf ein Abenteuer." }
            }
        };
        await VisualNovel.playParagraph(storyTexts.introduction);
        //TODO:  übergang zum feld
        await VisualNovel.playParagraph(storyTexts.before_the_accident);
        //TODO:  übergang mit Schrein (sound),  Erzähler: …,
        await VisualNovel.playParagraph(storyTexts.after_the_accident);
        //TODO: Schawarzer hintergund
        await VisualNovel.playParagraph(storyTexts.get_help);
        //TODO: zurück aufs Feld
        await VisualNovel.playParagraph(storyTexts.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await VisualNovel.playParagraph(storyTexts.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await VisualNovel.playParagraph(storyTexts.about_the_way);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.healing_potion);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.sword);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.water_bag);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.loaf_of_bread);
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
        //TODO: übergang
        await VisualNovel.playParagraph(storyTexts.doubting);
        //TODO: übergang
        await VisualNovel.playParagraph(storyTexts.the_end_of_the_cliff);
        //TODO: übergang
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
    async function grassland() {
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
                Narrator_008: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "greifen zu seinem Schwert." }
            },
            after_the_fight: {
                Narrator_009: { text: "Die Restlichen schleime suchen das Weite." },
                Protagonist_010: { text: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_011: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " läuft den Weg weiter." }
            }
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.grasslands);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.playParagraph(storyTexts.before_the_fight);
        let success = await VisualNovel.fight(VisualNovel.enemys.slime);
        console.log(success);
        await VisualNovel.playParagraph(storyTexts.after_the_fight);
    }
    VisualNovel.grassland = grassland;
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
        // TODO: übergag +2 Tage
        await VisualNovel.playParagraph(storyTexts.end_of_the_mountains);
    }
    VisualNovel.longWay = longWay;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function lostAgastTheBasilik() {
        console.log("Scene: lost agast the Basilik");
        let storyTexts = {
            fail: {
                Narrator_001: { text: "Der Basilisk hat < namen > eine Schwerte Wunde am Arm verpasst.Er Kanna um noch seine Waffe halten." },
                Protagonist_002: { text: "<i>Das wars Wohl mit mir!</i>", pose: VisualNovel.POSES.SAD },
                Narrator_003: { text: "Der Basilisk macht sich bereit auf < namen > den letzten schlag zu verpassen." },
                Protagonist_004: { text: "<i>Ich habe keine Kraft mehr, ich muss ausweichen.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_005: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " versucht mit letzter kraft noch aus dem Weg zu springen." },
                Narrator_006: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " Schaft es dem direkten Treffer auszuweichen," },
                Narrator_007: { text: "aber kommt Kamm zu nah and die Klippe, " },
                Narrator_008: { text: "der Boden bricht unter ihm zusammen." },
                Narrator_009: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " hat sich mit letzter kraft an einer Wurzel festgehalten." },
                Protagonist_010: { text: "<i>Es tut mir leid Mutter ich habe versagt.</i>", pose: VisualNovel.POSES.SAD },
                Narrator_011: { text: `${VisualNovel.dataForSave.nameProtagonist}` + "'s kraft reicht nicht mehr aus der Wunde an seinem arm ist zu tief." },
                Narrator_012: { text: `${VisualNovel.dataForSave.nameProtagonist}` + " kann sich nicht mehr halten und stürzt in den Abrunde." },
                Protagonist_013: { text: "<i>...</i>", pose: VisualNovel.POSES.SAD }
            }
        };
        await VisualNovel.playParagraph(storyTexts.fail);
    }
    VisualNovel.lostAgastTheBasilik = lostAgastTheBasilik;
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
        //TODO: zeitsprung zum nächsen Morgen
        await VisualNovel.playParagraph(storyTexts.morning);
        //TODO: übergang in auf den Berg
        await VisualNovel.playParagraph(storyTexts.thePaths);
        let chosenWay = await VisualNovel.ƒS.Menu.getInput(differentWays);
        switch (chosenWay) {
            case differentWays.shortWay:
                return "7";
            case differentWays.longWay:
                return "8";
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
        await VisualNovel.playParagraph(storyTexts.backstory);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Dieser Junge heißt ");
        VisualNovel.dataForSave.nameProtagonist = await VisualNovel.ƒS.Speech.getInput();
        VisualNovel.characters.protagonist.name = VisualNovel.dataForSave.nameProtagonist;
    }
    VisualNovel.prehistory = prehistory;
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
                Stranger_007: { text: "Junger Mann, ich habe nicht viel und will auch nicht um viel bitten.", pose: VisualNovel.POSES.HAPPY },
                Stranger_008: { text: "Aber ich sammle leere Flaschen, haben sie eine die sie mir überlassen könnten.", pose: VisualNovel.POSES.HAPPY }
            },
            hand_over_the_bottle: {
                Protagonist_001: { text: "hier sie können Diese leere Flaschen eins Heils tranks haben.", pose: VisualNovel.POSES.SAD },
                Stranger_002: { text: "was für eine Wunderschönes Exemplar.Vielen Dank.", pose: VisualNovel.POSES.HAPPY },
                Stranger_003: { text: "wohin sind sie unterwegs ?", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.", pose: VisualNovel.POSES.SAD },
                Stranger_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.Und nochmal Danke für die Flasche.", pose: VisualNovel.POSES.HAPPY }
            },
            give_nothing_to_the_stranger: {
                Protagonist_001: { text: "Ich kann ihnen leider nichts geben." },
                Stranger_002: { text: "sehr schade.", pose: VisualNovel.POSES.HAPPY },
                Stranger_003: { text: "wohin sind sie unterwegs?", pose: VisualNovel.POSES.HAPPY },
                Protagonist_004: { text: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien." },
                Stranger_005: { text: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.", pose: VisualNovel.POSES.HAPPY }
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
        let answerToTheStranger = await VisualNovel.ƒS.Menu.getInput(answersForStranger);
        switch (answerToTheStranger) {
            case answersForStranger.isHandOver:
                if (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items.empty_glass_bottle)) {
                    VisualNovel.items.empty_glass_bottle.static = false;
                    VisualNovel.ƒS.Inventory.open();
                    await VisualNovel.playParagraph(storyTexts.hand_over_the_bottle);
                    break;
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
    }
    VisualNovel.theStranger = theStranger;
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
        //TODO: übergang
        await VisualNovel.playParagraph(storyTexts.end_of_the_mountain);
    }
    VisualNovel.winAgastTheBasilik = winAgastTheBasilik;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    let health = 100;
    let damage = 10;
    let parryChance = 0.25;
    let dodgeChance = 0.5;
    VisualNovel.enemys = {
        slime: {
            name: "kleiner Schleim",
            health: 30,
            damage: 1
        },
        basilisk: {
            name: "Basilisk",
            health: 50,
            damage: 25
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
            fightLost: `${_enemy.name}` + " hat den Kampf gewonnen"
        };
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
                    // TODO: add item logik
                    protagonistCurrentHealth -= _enemy.damage;
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, fightText.beHit);
                    break;
                default:
                    break;
            }
        }
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
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.protagonistPositionVector = new VisualNovel.ƒ.Vector2(+400, -700);
    VisualNovel.otherPersonsPositionVector = new VisualNovel.ƒ.Vector2(-400, -700);
    let lastSpeaker = undefined;
    let lastPose = undefined;
    //let charactersINParagraph: { char: string, pose: POSES }[] = [];
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
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);
                }
                if (lastSpeaker && lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    await endSpeakingAnimation(lastSpeaker, lastPose);
                    delete charactersINParagraph[lastSpeaker];
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
        //charactersINParagraph = [];
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
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters[char], VisualNovel.characters[char].pose[pose], char.charAt(0) == "p" ? VisualNovel.protagonistPositionVector : VisualNovel.otherPersonsPositionVector);
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
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.animations = {
        startSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1, 1)
            },
            end: { scaling: new VisualNovel.ƒS.Position(1.2, 1.2) },
            duration: 0.1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1.2, 1.2)
            },
            end: { scaling: new VisualNovel.ƒS.Position(1, 1) },
            duration: 0.1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
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
        villageBackgroundMusic: "./Audio/villageBackgroundMusic.ogg",
        grasslandsBackgroundMusic: "./Audio/grasslandsBackgroundMusic.ogg",
        forestBackgroundMusic: "./Audio/forestBackgroundMusic.ogg",
        caveBackgroundMusic: "./Audio/caveBackgroundMusic.ogg"
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Transitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=Game.js.map