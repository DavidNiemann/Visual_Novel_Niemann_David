namespace VisualNovel {
  export async function gameOver(): ƒS.SceneReturn {
    await ƒS.Sound.fade(sounds.adventureMusic, 0, 1, false);
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.Location.show(announcements.game_over);
    await ƒS.update(transitions.inToOut.duration, transitions.inToOut.alpha, transitions.inToOut.edge);
    //TODO: endscreen  einblenden und Credits

  }

}