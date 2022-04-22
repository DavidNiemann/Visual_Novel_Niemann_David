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

    await ƒS.Speech.tell(characters.aisaka, text.Navigator.T001);

  }

}