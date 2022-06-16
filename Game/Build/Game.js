"use strict";
var VisualNovle;
(function (VisualNovle) {
    VisualNovle.ƒ = FudgeCore;
    VisualNovle.ƒS = FudgeStory;
    let invetoryOpen = false;
    VisualNovle.protagonistPositionVector = new VisualNovle.ƒ.Vector2(+400, -700);
    VisualNovle.otherPersonsPositionVector = new VisualNovle.ƒ.Vector2(-400, -700);
    // define transitions
    VisualNovle.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Transitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    VisualNovle.sounds = {
        villageBackgroundMusic: "./Audio/villageBackgroundMusic.ogg",
        grasslandsBackgroundMusic: "./Audio/grasslandsBackgroundMusic.ogg",
        forestBackgroundMusic: "./Audio/forestBackgroundMusic.ogg",
        caveBackgroundMusic: "./Audio/caveBackgroundMusic.ogg"
    };
    VisualNovle.locations = {
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
    VisualNovle.characters = {
        narrator: {
            name: undefined,
            origin: undefined,
            pose: undefined
        },
        protagonist: {
            name: "Protagonist",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Protagonist/protagonist_happy.png",
                sad: "./Images/Characters/Protagonist/protagonist_sad.png",
                frightend: "./Images/Characters/Protagonist/protagonist_frightend.png",
                sadChild: "./Images/Characters/Protagonist/protagonist_sad.png"
            }
        },
        mother: {
            name: "Mutter",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Mother/mother_happy.png",
                sad: "./Images/Characters/Mother/mother_sad.png",
                frightend: "./Images/Characters/Mother/mother_frightend.png"
            }
        },
        doctor: {
            name: "Dr.Bader",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Doctor/doctor_happy.png",
                sad: "./Images/Characters/Doctor/doctor_sad.png"
            }
        },
        strange_man: {
            name: "Fremder Mann",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Strange_man/strange_man_happy.png"
            }
        },
        great_fairy: {
            name: "große Fee des Waldes",
            origin: VisualNovle.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Fairy/fairy_happy.png"
            }
        }
    };
    VisualNovle.items = {
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
        }
    };
    VisualNovle.dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false
    };
    function showCredits() {
        VisualNovle.ƒS.Text.setClass("Credits");
        VisualNovle.ƒS.Text.print("David Niemann");
    }
    VisualNovle.showCredits = showCredits;
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
                await VisualNovle.ƒS.Progress.save();
                break;
            case inGameMenuButtens.load:
                await VisualNovle.ƒS.Progress.load();
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
            case VisualNovle.ƒ.KEYBOARD_CODE.F8:
                await VisualNovle.ƒS.Progress.save();
                break;
            case VisualNovle.ƒ.KEYBOARD_CODE.F9:
                await VisualNovle.ƒS.Progress.load();
                break;
            case VisualNovle.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case VisualNovle.ƒ.KEYBOARD_CODE.I:
                if (invetoryOpen) {
                    VisualNovle.ƒS.Inventory.close();
                    invetoryOpen = false;
                }
                else {
                    VisualNovle.ƒS.Inventory.open();
                    invetoryOpen = true;
                }
                break;
            default:
                break;
        }
    }
    VisualNovle.animations = {
        startSpeaking: {
            start: {
                scaling: new VisualNovle.ƒS.Position(1, 1)
            },
            end: { scaling: new VisualNovle.ƒS.Position(1.2, 1.2) },
            duration: 1,
            playmode: VisualNovle.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        },
        endSpeaking: {
            start: {
                scaling: new VisualNovle.ƒS.Position(1.2, 1.2)
            },
            end: { scaling: new VisualNovle.ƒS.Position(1, 1) },
            duration: 1,
            playmode: VisualNovle.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = VisualNovle.ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
        buttonFunktionAlitiles("Close");
        let scenes = [
            { id: "1", scene: VisualNovle.Prehistory, name: "Prehistory", next: "2" },
            { id: "2", scene: VisualNovle.childhood, name: "childhood", next: "3" },
            { id: "3", scene: VisualNovle.theCurse, name: "the curse" }
        ];
        // start the sequence
        VisualNovle.ƒS.Progress.go(scenes);
    }
    async function playParagraph(_text) {
        for (const key in _text) {
            switch (key.charAt(0)) {
                case "N":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.narrator, _text[key]);
                    break;
                case "P":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.Protagonist, _text[key]);
                    break;
                case "M":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.mother, _text[key]);
                    break;
                case "S":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.strange_man, _text[key]);
                    break;
                case "F":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.fairy, _text[key]);
                    break;
                case "D":
                    await VisualNovle.ƒS.Speech.tell(VisualNovle.characters.Doctor, _text[key]);
                    break;
                default:
                    break;
            }
        }
    }
    VisualNovle.playParagraph = playParagraph;
})(VisualNovle || (VisualNovle = {}));
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
var VisualNovle;
/// <reference path= "../main.ts"/>
(function (VisualNovle) {
    async function childhood() {
        console.log("Scene:  childhood");
        let storiesText = {
            introduction: {
                Narrator_text_001: "In dieser Welt am Rande eines Dorfes in der Man die Magie wenig verwendete, lebt Junge, mit Seinem Vater und Mutter.",
                Narrator_text_002: "An einem Tag ging der Vater auf Reise in die Nächste Stadt, um seiner Arbeit nachzugehen."
            },
            childhoodStory_Part1: {
                Protagonist_text_001: "Mama wann kommt Papa endlich nach Hause.",
                Mother_text_002: "Er Kommt wird schon bald wieder Kommen.",
                Mother_text_003: "Du bist doch gewohnt, dass Er länger nicht zuhause ist. Wenn er arbeiten ist.",
                Protagonist_text_004: "Ich weiß Mama, aber ist schon ungewöhnlich lange weg, dafür das er nur in die Stadt gehen wollte und einen leichten Auftrag erfüllen."
            },
            childhoodStory_Part2: {
                Narrator_text_001: "ein Bote Kamm vorbei und brachte der Familie einen Brief in dem Stand,",
                Narrator_text_002: "dass Der Vater bei einem Auftrag einen Händler zu begleiten von <Monster> überfallen wurde und dabei stab.",
                Narrator_text_003: "Der Junge fing auf diese Nachricht an zu weinen.",
                Narrator_text_004: "Er schaute immer zu seinem Vater auf und wollte auch ein Abenteurer wie sein Vater werden."
            }
        };
        await VisualNovle.ƒS.Location.show(VisualNovle.locations.village);
        await VisualNovle.ƒS.update(1);
        await VisualNovle.playParagraph(storiesText.introduction);
        // TODO: übergang einfügen
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.protagonist, VisualNovle.characters.protagonist.pose.sadChild, VisualNovle.protagonistPositionVector);
        await VisualNovle.ƒS.Character.show(VisualNovle.characters.mother, VisualNovle.characters.mother.pose.happy, VisualNovle.otherPersonsPositionVector);
        await VisualNovle.ƒS.update(1);
        await VisualNovle.playParagraph(storiesText.childhoodStory_Part1);
        VisualNovle.ƒS.Character.hideAll();
        await VisualNovle.ƒS.update(1);
        // TODO: übergang einfügen
        await VisualNovle.playParagraph(storiesText.childhoodStory_Part2);
    }
    VisualNovle.childhood = childhood;
})(VisualNovle || (VisualNovle = {}));
var VisualNovle;
(function (VisualNovle) {
    async function theCurse() {
        console.log("Scene:  the Curse");
        let storiesText = {
            introduction: {
                Narrator_text_001: "Es gingen viele Jahre in die Lande.",
                Narrator_text_002: "Seitdem Tod des Vaters, hatte die Familie es nicht  immer leicht, da sie nicht viel Geld hatten.",
                Narrator_text_003: "Die verdienten sich genug, indem sie Gemüse, selbst der Junge hat direkt nach dem Tod seiner Mutter auf dem Felt geholfen. "
            },
            before_the_accident: {
                Mother_text_001: "steh auf " + `${VisualNovle.dataForSave.nameProtagonist}` + " wir müssen die Karotten ernten.",
                Protagonist_text_002: "ich komme gleich ich esse Kutz noch ein Stück Brot.",
                Mother_text_003: "ok ich gehe schon mal vor, komm dann nach.",
                Narrator_text_004: "nach dem " + `${VisualNovle.dataForSave.nameProtagonist}` + " sein Brot gegessen hatte machte er sich auch auf dem Weg zum Feld.",
                Mother_text_005: "Beim Feld angekommen fing er seiner Mutter zu helfen Karotten aus der Erde zu ziehen.",
                Protagonist_text_006: "mutter schau mal das ist aber eine komische Karotte.",
                Narrator_text_007: "der Junge fängt an der Pflanze zu ziehen.",
                Protagonist_text_008: "die geht aber schwer raus.",
                Narrator_text_009: "Erzähler: Mutter dreht sich.",
                Mother_text_010: "Mutter HALTTTTTT, das ist eine ….",
                Mother_text_011: "….",
                Narrator_text_012: "der Junge zieht die Wurzel raus, die Mutter springt zu  " + `${VisualNovle.dataForSave.nameProtagonist}` + " und hebt in den Ohren zu."
                //U001: "AAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" -> Sound
            },
            after_the_accident: {
                Narrator_text_001: "es wurde still und der junge dreht sich zu seiner Mutter um sich zu.",
                Mother_text_002: "ich liebe….",
                Protagonist_text_003: "Mutter, mutter…MAMAAAAAAA.",
                Protagonist_text_004: "Sag was.Ich muss Hilfe holen ich muss mich beeilen.",
                Narrator_text_005: "Er legt die Muttervorsichtig zu Boden und fing an zu dem Dorfe zu rennen um den Arzt zu Holen."
            },
            get_help: {
                Narrator_text_001: `${VisualNovle.dataForSave.nameProtagonist}` + " geht sich zu dem Dorf Arztl, und schildert ihm die Situation,",
                Narrator_text_002: "Der Arzt namens Dr.Bader ging und " + `${VisualNovle.dataForSave.nameProtagonist}` + " die gingen schnellstmöglich zum Feld zurück."
            },
            talk_with_the_doctor: {
                Protagonist_text_001: "Helfen sie bitte meiner Mutter.",
                Doctor_text_002: "Ich ferstehe jetzt was, passiert ist.Sie hat den schrei einer Alraune gehört und wurde dadurch zu stein verwandelt.",
                Doctor_text_003: "Ich kann ihr leider nicht helfen, keiner meiner Gegenstände kann gegen so ein mächtiger Zauber wie diesen etwas ausrichten.",
                Protagonist_text_005: "Es muss doch irgendetwas geben was wir tun können, sie ist das Einzige was ich habe.",
                Doctor_text_006: "bringen wir sie erstmals zurück ins Dorf."
            },
            transition_to_the_village: {
                Narrator_text_001: "der Arzt und " + `${VisualNovle.dataForSave.nameProtagonist}` + " bringen die Mutter vorsichtig zurück ins Dorf."
            },
            about_the_way: {
                Protagonist_text_001: "Bitte Dr.Bader es muss doch irgendwas geben was man tun kann, ich flehe sie an ich würde alles tun.",
                Doctor_text_002: "Wir brauchten jemand oder etwas was mächtig genug, ist, um diesen Zauber zu lösen und dies innerhalb der nächsten <b>7</b> Tage, danach, kann man nicht mehr für sie tun",
                Doctor_text_003: "Das einzige, das Mir bekannt wehre, ist ein Magische pflanze, die im " + `${VisualNovle.locations.forest.name}` + "  Zu finden ist.",
                Doctor_text_004: "Es wir erzählt, dass sie inmitten dieses Waldes eine kleine Wiese ist, auf die Die Sonne durchs Dickicht leichtet. Auf dieser Wiese soll die Blume wachsen und magisch von der Sonne angeleuchtet werden.",
                Doctor_text_005: "Dieser ist aber ein 3 Tages marsch entfernt und der Weg ist sehr gefährlich.",
                Protagonist_text_006: "Ist mir egal ich muss es versuchen, wie komme ich zu dem Wald.",
                Doctor_text_007: "Du musst nach Norden zu den " + `${VisualNovle.locations.grasslands.name}` + ", aber pass auf dort wimmelt es von Schleimen sie sind nicht zwar nicht stark, aber man sollte sich trotzdem von ihnen in Acht nehme.",
                Doctor_text_008: "nach den Felder kommst du zu dem " + `${VisualNovle.locations.mountains.name}` + ", wenn du dich beeilst, kommst du noch bis heute Abend dort an.",
                Doctor_text_009: "ein Pfad führt durch das Gebirge, über diesen Weg ist es ein 2 Tages Marsch.",
                Doctor_text_010: "er ist ziemlich sicher aber ist lange. ",
                Doctor_text_011: "Man kann auch eine Klippe durch den Berg gehen, aber dort ist es steil und manchem tauchen dort Monster auf.",
                Doctor_text_012: "Dahinter ist schon der " + `${VisualNovle.locations.forest.name}` + " .Die Blume scheint tief im Wald zu wachsen. ",
                Doctor_text_013: "Man sagt das in dem Wald ein endloses Labyrinth ist und schon Ewigkeiten Kamm keiner mehr aus dem Wald der Versucht hat die Blume zu pflücken.",
                Protagonist_text_014: "<i>Mein Vater hätte es sicher geschafft, ich wollte immer so sein, aber nach seinem Tod war mir bewusst was führ gefahren da daraus sind, und hatte nur noch Angst.</i>",
                Protagonist_text_015: "<i>Ich muss es versuchen, Sie ich bin daran Schuld die Alraune aus dem Boden zu gezogen zu haben.</i>",
                Protagonist_text_016: "<i>Alles ist meine Schuld.</i>",
                Protagonist_text_017: "Ich werde die Blume Holen, ich bin daran schuld an allem.",
                Narrator_text_018: `${VisualNovle.dataForSave.nameProtagonist}` + "rennt in sein Zimmer hol seinen Rucksack.In die Küche packt etwas zu essen und trinken eine. Schnappt sich das " + `${VisualNovle.items.sword.name}` + " was er von seinem Vater, was jetzt eher einem Doch nach der grösser ist und eilt zur Tür.",
                Doctor_text_019: "Warte!!",
                Doctor_text_020: "Nimm da hier, ein " + `${VisualNovle.items.healing_potion.name}` + ". Er ist zwar nur schwach, aber besser als gar nicht.",
                Doctor_text_021: "Ich hoffe du wirst ich nicht brauchen.",
                Protagonist_text_022: "Danke. Passen sie auf meine Mutter auf.",
                Narrator_text_023: "Und so machte sich " + `${VisualNovle.dataForSave.nameProtagonist}` + " auf ein Abenteuer."
            }
        };
        await VisualNovle.playParagraph(storiesText.introduction);
        //TODO:  übergang zum feld
        await VisualNovle.playParagraph(storiesText.before_the_accident);
        //TODO:  übergang mit Schrein (sound),  Erzähler: …,
        await VisualNovle.playParagraph(storiesText.after_the_accident);
        //TODO: Schawarzer hintergund
        await VisualNovle.playParagraph(storiesText.get_help);
        //TODO: zurück aufs Feld
        await VisualNovle.playParagraph(storiesText.talk_with_the_doctor);
        //TODO: zurück uns dorf übergang
        await VisualNovle.playParagraph(storiesText.transition_to_the_village);
        //TODO: Dorf sitchtabar machen
        await VisualNovle.playParagraph(storiesText.about_the_way);
        //TODO: items Geben Schwert, Leib brot , wasser Beutel, Heiltrank
    }
    VisualNovle.theCurse = theCurse;
})(VisualNovle || (VisualNovle = {}));
var VisualNovle;
(function (VisualNovle) {
    async function Prehistory() {
        console.log("start Story", "Scene:  prehistory");
        let storiesText = {
            backstory: {
                Narrator_text_001: "In einer fantastischen Welt, in der zu überall Magie finden war,",
                Narrator_text_002: "egal ob im tiefsten Wald oder in den Städten.",
                Narrator_text_003: "Über all konnte man ein Hauch von Magie vernehmen.",
                Narrator_text_004: "Es gab magische Kreaturen, manche den Menschen gut gesinnt , aber viele auch waren grauenhafte Monster.",
                Narrator_text_005: "Der Mensch studierte diese Kraft und lernte sie für sich zu nutzen.",
                Narrator_text_006: "Zwar es konnten nur Wenige Menschen die Magie mit eigener Kraft beherrschen und jene die dies Konnten waren mächtig und hoch angesehen.",
                Narrator_text_007: "Dennoch stellten die Menschen Werkzeuge her mit den Jeder teile der diese leicht beeinflussen Konten.",
                Narrator_text_008: "Mit diesen konnte man schnell Verletzungen heilen, schwere Lasten tragen, das Dunkle erleuchten und vieles mehr.",
                Narrator_text_009: " Die Magie war das Schönste was man sich vorstellen hat den Menschen ein einfaches Leben ermöglicht,",
                Narrator_text_010: "aber so gut sie auch sein mag so viele gefahren war mit Ihr verbunden und war der Schlimmste Gabe."
            }
        };
        await VisualNovle.playParagraph(storiesText.backstory);
        //TODO: nach namen Frangen
    }
    VisualNovle.Prehistory = Prehistory;
})(VisualNovle || (VisualNovle = {}));
//# sourceMappingURL=Game.js.map