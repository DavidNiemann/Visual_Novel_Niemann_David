namespace VisualNovle {//https://itch.io/game-assets
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    let invetoryOpen: boolean = false;
    // define transitions
    export let transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Transitions/JigsawThemedTransitions/puzzle.png", // TODO: tranition suchen
            edge: 1
        }
    };
    export let sounds = {
        villageBackgroundMusic: "./Audio/villageBackgroundMusic.ogg",
        grasslandsBackgroundMusic: "./Audio/grasslandsBackgroundMusic.ogg",
        forestBackgroundMusic: "./Audio/forestBackgroundMusic.ogg",
        caveBackgroundMusic: "./Audio/caveBackgroundMusic.ogg"
    };

    export let locations = {
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
            background: "./Images/Backgrounds/carve.png"
        },
        mountains: {
            name: "Gebirge",
            background: "./Images/Backgrounds/mountains.png"
        }
    };

    export let characters: { [name: string]: ƒS.CharacterDefinition } = {
        narrator: {
            name: undefined,
            origin: undefined,
            pose: undefined
        },
        protagonist: {
            name: "Protagonist",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Protagonist/protagonist_happy.png",
                sad: "./Images/Characters/Protagonist/protagonist_sad.png",
                frightend: "./Images/Characters/Protagonist/protagonist_frightend.png",
                sadChild: "./Images/Characters/Protagonist/protagonist_sad.png"
            }
        },
        mother: {
            name: "Mutter",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Mother/mother_happy.png",
                sad: "./Images/Characters/Mother/mother_sad.png",
                frightend: "./Images/Characters/Mother/mother_frightend.png"
            }
        },
        doctor: {
            name: "Dr.Bader",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Doctor/protagonist_happy.png",
                sad: "./Images/Characters/Doctor/protagonist_sad.png",

            }
        },
        strange_man: {
            name: "Fremder Mann",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Strange_man/strange_man_happy.png"

            }
        },
        great_fairy: {
            name: "große Fee des Waldes",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Fairy/fairy_happy.png"
            }
        }
    };

    export let items = {
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

    export let dataForSave = {
        nameProtagonist: "Protagonist",
        dayCounter: 0,
        bottleWasGiven: false
    };

    export function showCredits(): void {
        ƒS.Text.setClass("Credits");
        ƒS.Text.print("David Niemann");
    }

    /** MENÜ **/
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



    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
        buttonFunktionAlitiles("Close");
        let scenes: ƒS.Scenes = [
            { id: "1", scene: Prehistory, name: "Prehistory", next: "2" },
            { id: "2", scene: childhood, name: "childhood", next: "3" },
            { id: "3", scene: theCurse, name: "the curse" }
        ];

        // start the sequence
        ƒS.Progress.go(scenes);
    }


    export async function playParagraph(_text: { [textname: string]: string }): Promise<void> {
        for (const key in _text) {
            switch (key.charAt(0)) {
                case "N":
                    await ƒS.Speech.tell(characters.narrator, _text[key]);
                    break;
                case "P":
                    await ƒS.Speech.tell(characters.Protagonist, _text[key]);
                    break;
                case "M":
                    await ƒS.Speech.tell(characters.mother, _text[key]);
                    break;
                case "S":
                    await ƒS.Speech.tell(characters.strange_man, _text[key]);
                    break;
                case "F":
                    await ƒS.Speech.tell(characters.fairy, _text[key]);
                    break;
                case "D":
                    await ƒS.Speech.tell(characters.Doctor, _text[key]);
                    break;
                default:
                    break;
            }

        }
    }

}