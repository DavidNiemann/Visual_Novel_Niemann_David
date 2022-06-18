"use strict";
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    let invetoryOpen = false;
    VisualNovel.protagonistPositionVector = new VisualNovel.ƒ.Vector2(+400, -700);
    VisualNovel.otherPersonsPositionVector = new VisualNovel.ƒ.Vector2(-400, -700);
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
            { id: "1", scene: VisualNovel.prehistory, name: "Prehistory", next: "2" },
            { id: "2", scene: VisualNovel.childhood, name: "childhood", next: "3" },
            { id: "3", scene: VisualNovel.theCurse, name: "the curse", next: "4" },
            { id: "4", scene: VisualNovel.grassland, name: "the grassland", next: "5" },
            { id: "5", scene: VisualNovel.theStranger, name: "the Stranger" }
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
        let storiesText = {
            introduction: {
                Narrator_001: "In dieser Welt am Rande eines Dorfes in der Man die Magie wenig verwendete, lebt Junge, mit Seinem Vater und Mutter.",
                Narrator_002: "An einem Tag ging der Vater auf Reise in die Nächste Stadt, um seiner Arbeit nachzugehen."
            },
            childhoodStory_Part1: {
                Protagonist_001: "Mama wann kommt Papa endlich nach Hause.",
                Mother_002: "Er Kommt wird schon bald wieder Kommen.",
                Mother_003: "Du bist doch gewohnt, dass Er länger nicht zuhause ist. Wenn er arbeiten ist.",
                Protagonist_004: "Ich weiß Mama, aber ist schon ungewöhnlich lange weg, dafür das er nur in die Stadt gehen wollte und einen leichten Auftrag erfüllen."
            },
            childhoodStory_Part2: {
                Narrator_001: "ein Bote Kamm vorbei und brachte der Familie einen Brief in dem Stand,",
                Narrator_002: "dass Der Vater bei einem Auftrag einen Händler zu begleiten von <Monster> überfallen wurde und dabei stab.",
                Narrator_003: "Der Junge fing auf diese Nachricht an zu weinen.",
                Narrator_004: "Er schaute immer zu seinem Vater auf und wollte auch ein Abenteurer wie sein Vater werden."
            }
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.village);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.playParagraph(storiesText.introduction);
        // TODO: übergang einfügen
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.protagonist, VisualNovel.characters.protagonist.pose.sadChild, VisualNovel.protagonistPositionVector);
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.mother, VisualNovel.characters.mother.pose.happy, VisualNovel.otherPersonsPositionVector);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.playParagraph(storiesText.childhoodStory_Part1);
        VisualNovel.ƒS.Character.hideAll();
        await VisualNovel.ƒS.update(1);
        // TODO: übergang einfügen
        await VisualNovel.playParagraph(storiesText.childhoodStory_Part2);
    }
    VisualNovel.childhood = childhood;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theCurse() {
        console.log("Scene:  the Curse");
        let storiesText = {
            introduction: {
                Narrator_001: "Es gingen viele Jahre in die Lande.",
                Narrator_002: "Seitdem Tod des Vaters, hatte die Familie es nicht  immer leicht, da sie nicht viel Geld hatten.",
                Narrator_003: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. "
            },
            before_the_accident: {
                Mother_001: "steh auf " + `${VisualNovel.dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.",
                Protagonist_002: "ich komme gleich ich esse Kutz noch ein Stück Brot.",
                Mother_003: "ok ich gehe schon mal vor, komm dann nach.",
                Narrator_004: "nach dem " + `${VisualNovel.dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld.",
                Mother_005: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.",
                Protagonist_006: "mutter schau mal das ist aber eine komische Karotte.",
                Narrator_007: "der Junge fängt an der Pflanze zu ziehen.",
                Protagonist_008: "die geht aber schwer raus.",
                Narrator_009: "Erzähler: Mutter dreht sich.",
                Mother_010: "Mutter HALTTTTTT, das ist eine ….",
                Mother_011: "….",
                Narrator_012: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${VisualNovel.dataForSave.nameProtagonist}` + " und hebt in den Ohren zu."
                //U001: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Narrator_001: "es wurde still und der junge dreht sich zu seiner Mutter um sich zu.",
                Mother_002: "ich liebe….",
                Protagonist_003: "Mutter, mutter…MAMAAAAAAA.",
                Protagonist_004: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.",
                Narrator_005: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen."
            },
            get_help: {
                Narrator_001: `${VisualNovel.dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation,",
                Narrator_002: "Der Arzt namens Dr.Bader ging und " + `${VisualNovel.dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück."
            },
            talk_with_the_doctor: {
                Protagonist_001: "Helfen sie bitte meiner Mutter.",
                Doctor_002: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.",
                Doctor_003: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.",
                Protagonist_005: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.",
                Doctor_006: "bringen wir sie erstmals zurück ins Dorf."
            },
            transition_to_the_village: {
                Narrator_001: "der Arzt und " + `${VisualNovel.dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf."
            },
            about_the_way: {
                Protagonist_001: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.",
                Doctor_002: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun",
                Doctor_003: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${VisualNovel.locations.forest.name}` + "  Zu finden ist.",
                Doctor_004: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.",
                Doctor_005: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.",
                Protagonist_006: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.",
                Doctor_007: "Du musst nach Norden zu den " + `${VisualNovel.locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.",
                Doctor_008: "nach den Felder kommst du zu dem " + `${VisualNovel.locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.",
                Doctor_009: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.",
                Doctor_010: "er ist ziemlich sicher aber ist lange. ",
                Doctor_011: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.",
                Doctor_012: "Dahinter ist schon der " + `${VisualNovel.locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ",
                Doctor_013: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.",
                Protagonist_014: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>",
                Protagonist_015: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>",
                Protagonist_016: "<i>Alles ist meine Schuld.</i>",
                Protagonist_017: "Ich werde die Blume Holen, ich bin daran schuld an allem.",
                Narrator_018: `${VisualNovel.dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${VisualNovel.items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür.",
                Doctor_019: "Warte!!",
                Doctor_020: "Nimm da hier, ein " + `${VisualNovel.items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.",
                Doctor_021: "Ich hoffe du wirst ich nicht brauchen.",
                Protagonist_022: "Danke. Passen sie auf meine Mutter auf.",
                Narrator_023: "Und so machte sich " + `${VisualNovel.dataForSave.nameProtagonist}` + " auf ein Abenteuer."
            }
        };
        await VisualNovel.playParagraph(storiesText.introduction);
        //TODO:  übergang zum feld
        await VisualNovel.playParagraph(storiesText.before_the_accident);
        //TODO:  übergang mit Schrein (sound),  Erzähler: …,
        await VisualNovel.playParagraph(storiesText.after_the_accident);
        //TODO: Schawarzer hintergund
        await VisualNovel.playParagraph(storiesText.get_help);
        //TODO: zurück aufs Feld
        await VisualNovel.playParagraph(storiesText.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await VisualNovel.playParagraph(storiesText.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await VisualNovel.playParagraph(storiesText.about_the_way);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.healing_potion);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.sword);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.water_bag);
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.loaf_of_bread);
    }
    VisualNovel.theCurse = theCurse;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function grassland() {
        console.log("Scene:  grassland");
        let storiesText = {
            before_the_fight: {
                Narrator_001: "nach paar Stunden ist  " + `${VisualNovel.dataForSave.nameProtagonist}` + " schon mitten auf den " + `${VisualNovel.locations.grasslands.name}` + " unterwegs, es ist ruhig. ",
                Narrator_002: `${VisualNovel.dataForSave.nameProtagonist}` + " ist seit der das Dorf verlassen hat auf niemanden mehr gestoßen.",
                Protagonist_003: "<i>Dr.Bader hat gesagt hier wimmelt es von Schleimen ich sollte mich eher in Acht nehmen, zum Glück bin ich noch keinem begegnet.</i>",
                Narrator_004: "nach einer Weile raschelt es in einem Busch neben ihn.",
                Narrator_005: "es springen 3 Schleime vor um ihn herum und verspären in dem Weg",
                Protagonist_006: "<i>ich muss mich beeilen.</i>",
                Protagonist_007: "<i>ich komm nicht durch ich muss wohl Kämpfen.</i>",
                Narrator_008: `${VisualNovel.dataForSave.nameProtagonist}` + "greifen zu seinem Schwert."
            },
            after_the_fight: {
                Narrator_009: "Die Restlichen schleime suchen das Weite.",
                Protagonist_010: "<i>endlich ist es vorbei, ich muss schnell weiter und darf keine Zeit verlieren.</i>",
                Narrator_011: `${VisualNovel.dataForSave.nameProtagonist}` + " läuft den Weg weiter."
            }
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.grasslands);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.playParagraph(storiesText.before_the_fight);
        let success = await VisualNovel.fight(VisualNovel.enemys.slime);
        console.log(success);
        //Dodo: add fight 
        await VisualNovel.playParagraph(storiesText.after_the_fight);
    }
    VisualNovel.grassland = grassland;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function prehistory() {
        console.log("start Story", "Scene:  prehistory");
        let storiesText = {
            backstory: {
                Narrator_001: "In einer fantastischen Welt, in der zu überall Magie finden war,",
                Narrator_002: "egal ob im tiefsten Wald oder in den Städten.",
                Narrator_003: "Über all konnte man ein Hauch von Magie vernehmen.",
                Narrator_004: "Es gab magische Kreaturen, manche den Menschen gut gesinnt , aber viele auch waren grauenhafte Monster.",
                Narrator_005: "Der Mensch studierte diese Kraft und lernte sie für sich zu nutzen.",
                Narrator_006: "Zwar es konnten nur Wenige Menschen die Magie mit eigener Kraft beherrschen und jene die dies Konnten waren mächtig und hoch angesehen.",
                Narrator_007: "Dennoch stellten die Menschen Werkzeuge her mit den Jeder teile der diese leicht beeinflussen Konten.",
                Narrator_008: "Mit diesen konnte man schnell Verletzungen heilen, schwere Lasten tragen, das Dunkle erleuchten und vieles mehr.",
                Narrator_009: " Die Magie war das Schönste was man sich vorstellen hat den Menschen ein einfaches Leben ermöglicht,",
                Narrator_010: "aber so gut sie auch sein mag so viele gefahren war mit Ihr verbunden und war der Schlimmste Gabe."
            }
        };
        await VisualNovel.playParagraph(storiesText.backstory);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Dieser Junge heißt");
        VisualNovel.dataForSave.nameProtagonist = await VisualNovel.ƒS.Speech.getInput();
        VisualNovel.characters.protagonist.name = VisualNovel.dataForSave.nameProtagonist;
    }
    VisualNovel.prehistory = prehistory;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function theStranger() {
        console.log("Scene:  The Stranger");
        let storiesText = {
            encounter_with_the_stranger: {
                Narrator_001: `${VisualNovel.dataForSave.nameProtagonist}` + "ist fast bei den " + `${VisualNovel.locations.mountains.name}` + " angekommen, es wurde schon spät.",
                Narrator_002: "Die Sonne geht hinter dem Berg geradeunter.",
                Narrator_003: `${VisualNovel.dataForSave.nameProtagonist}` + " sieht eine Gestalt in der Ferne",
                Protagonist_004: "da ist jemand",
                Protagonist_005: "egal ich darf keine Zeit verlieren, ignorier ich einfach.",
                Narrator_006: "der Mann sieht verwahrlost  aus und ist in zerrissenen Lumpen gekleidet.",
                Stranger_007: "Junger Mann, ich habe nicht viel und will auch nicht um viel bitten.",
                Stranger_008: "Aber ich sammle leere Flaschen, haben sie eine die sie mir überlassen könnten."
            },
            hand_over_the_bottle: {
                Protagonist_001: "hier sie können Diese leere Flaschen eins Heils tranks haben.",
                Stranger_002: "was für eine Wunderschönes Exemplar.Vielen Dank.",
                Stranger_003: "wohin sind sie unterwegs ?",
                Protagonist_004: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.",
                Stranger_005: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg.Und nochmal Danke für die Flasche."
            },
            give_nothing_to_the_stranger: {
                Protagonist_001: "Ich kann ihnen leider nichts geben.",
                Stranger_002: "sehr schade.",
                Stranger_003: "wohin sind sie unterwegs?",
                Protagonist_004: "ich bin auf dem Weg zum " + `${VisualNovel.locations.forest.name}` + " ich muss eine " + `${VisualNovel.items.flower.name}` + " holen, um meine Mutter von Zauber zu befreien.",
                Stranger_005: "oh, ich habe gehört das ist eine Schwere aufgaben viel Erfolg."
            },
            ignore_the_stranger: {
                Protagonist_001: "<i>ignorier ihn einfach ich habe keine Zeit mit ihm zu reden</i>"
            },
            after_the_stranger: {
                Narrator_001: "<name>läuft in einem schnellen Schritt weiter.",
                Protagonist_002: "<i>Was für ein Komischer Mann hate schon angst das er mich angreift.</i>"
            },
            back_to_the_way: {
                Narrator_001: `${VisualNovel.dataForSave.nameProtagonist}` + " ist am Fuße der " + `${VisualNovel.locations.mountains.name}` + " Berge angekommen.",
                Protagonist_002: "</i>Die Sonne ist schon untergegangen.Ich sollte mich ein paar Stunden ausruhen </i>",
                Narrator_003: `${VisualNovel.dataForSave.nameProtagonist}` + " schlagt ein Lager auf und legt sich hin."
            }
        };
        let answersForStranger = {
            isHandOver: "Übergebe eine Leere Flasche",
            isIgnore: "Ignoriere den Fremden",
            isGiveNothing: "Dem Fremden nichts geben"
        };
        await VisualNovel.playParagraph(storiesText.encounter_with_the_stranger);
        let answerToTheStranger = await VisualNovel.ƒS.Menu.getInput(answersForStranger);
        switch (answerToTheStranger) {
            case answersForStranger.isHandOver:
                if (VisualNovel.ƒS.Inventory.getAmount(VisualNovel.items.empty_glass_bottle)) {
                    VisualNovel.items.empty_glass_bottle.static = false;
                    VisualNovel.ƒS.Inventory.open();
                    await VisualNovel.playParagraph(storiesText.hand_over_the_bottle);
                    break;
                }
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "<i>Ich besitze leider keine leere flsche.</i>");
            case answersForStranger.isGiveNothing:
                await VisualNovel.playParagraph(storiesText.give_nothing_to_the_stranger);
                break;
            case answersForStranger.isIgnore:
                await VisualNovel.playParagraph(storiesText.ignore_the_stranger);
                break;
            default:
                break;
        }
        await VisualNovel.playParagraph(storiesText.back_to_the_way);
    }
    VisualNovel.theStranger = theStranger;
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
    async function playParagraph(_text) {
        for (const key in _text) {
            switch (key.charAt(0)) {
                case "N":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, _text[key]);
                    break;
                case "P":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, _text[key]);
                    break;
                case "M":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mother, _text[key]);
                    break;
                case "S":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.strange_man, _text[key]);
                    break;
                case "F":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.fairy, _text[key]);
                    break;
                case "D":
                    await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.doctor, _text[key]);
                    break;
                default:
                    break;
            }
        }
    }
    VisualNovel.playParagraph = playParagraph;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.animations = {
        startSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1, 1)
            },
            end: { scaling: new VisualNovel.ƒS.Position(1.2, 1.2) },
            duration: 1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new VisualNovel.ƒS.Position(1.2, 1.2)
            },
            end: { scaling: new VisualNovel.ƒS.Position(1, 1) },
            duration: 1,
            playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
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
                sadChild: "./Images/Characters/Protagonist/protagonist_sad.png"
            }
        },
        mother: {
            name: "Mutter",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Mother/mother_happy.png",
                sad: "./Images/Characters/Mother/mother_sad.png",
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
        great_fairy: {
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