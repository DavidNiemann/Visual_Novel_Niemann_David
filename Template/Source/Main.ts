namespace Template {//https://itch.io/game-assets
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "../FreeTransitions/JigsawThemedTransitions/puzzle.png",
      edge: 1
    }
  };
  export let sounds = {
    nightclub: "../Audio/Dystopian.ogg",
    click: "Pfad"
  };

  export let locations = {
    nightpark:  {
      name: "nightpark",
      background: "../Images copy/Backgrounds/Nightpark.png"
    }
  };

  export let characters = {
    narrator:  {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "../Images/Characters/aisaka_angry.png",
        happy: "../Images/Characters/aisaka_angry.png",
        upset: "../Images/Characters/aisaka_angry.png"
      }
    }
  };

  export let dataForSave = {
    nameProtagonist: "",
    scrore: 0
  };




  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}