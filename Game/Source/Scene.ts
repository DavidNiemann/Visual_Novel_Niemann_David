namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Navigator: {
        T001: "hallo"
      },
      Protagonist: {
        T001: "test"
      }
    };

    let firstDialogueAnswers = {
      isSayOk: "Okay",
      isSayYes: "ja",
      isSayNo: "Nein"


    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueAnswers, "individualCssClass");

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
    }

    ƒS.Sound.fade(sounds.nightclub, 0.1, 1, true);
    await ƒS.Location.show(locations.nightpark);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.angry, ƒS.positions.bottomcenter);
    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
    await ƒS.Speech.tell(characters.aisaka, text.Protagonist.T001);
    await ƒS.Speech.tell(characters.narrator, text.Navigator.T001);
    ƒS.Speech.hide();
    await ƒS.update();
    ƒS.Sound.fade(sounds.nightclub, 0, 0.1, false);
  }

}