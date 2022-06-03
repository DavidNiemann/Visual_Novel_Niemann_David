namespace VisualNovle {
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
    ƒS.Inventory.add(items.fisch);
    ƒS.Inventory.add(items.blume);
    ƒS.Inventory.add(items.fee);
    ƒS.Inventory.add(items.schwerd);
    ƒS.Inventory.add(items.stein);
    ƒS.Inventory.add(items.buch);
    /* dataForSave.nameProtagonist = await ƒS.Speech.getInput(); */
    /*  ƒS.Sound.fade(sounds.nightclub, 0.1, 1, true); */
    /*  await ƒS.Location.show(locations.nightpark); */
    /*  await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.happy, new ƒ.Vector2(100, -500)); */
    /*  await ƒS.update(1); */

    /*  await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); */
    await ƒS.Speech.tell(characters.narrator, text.Navigator.T001);
    /*  await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T001); */

    /* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.sad, new ƒ.Vector2(-100, -500)); */
    /* await ƒS.update(1); */
    /* ƒS.Speech.hide(); */

    /* await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.frightend, new ƒ.Vector2(0, -500)); */
    /* await ƒS.update(1); */

    /*     ƒS.Sound.fade(sounds.nightclub, 0, 0.1, false); */
    /* return "Prehistory"; */ // nur als string 
  }

}