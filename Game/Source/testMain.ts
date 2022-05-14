namespace VisualNovle {//https://itch.io/game-assets
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



  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtens, buttonFunktionAlitiles, "gameMenu");
    buttonFunktionAlitiles("Close");
    let scenes: ƒS.Scenes = [
       { scene: Scene, name: "testScene" }
      /*{ scene: Prehistory, name: "Prehistory" }*/
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
}