namespace VisualNovel {
    export async function gameOver(): ƒS.SceneReturn {
      await ƒS.Sound.fade(sounds.adventureMusic, 0, 1, false);
      ƒS.Character.hideAll();
      await ƒS.Location.show(announcements.gameOver);
    //TODO: endscreen  einblenden und Credits

    }

}