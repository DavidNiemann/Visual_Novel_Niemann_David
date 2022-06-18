namespace VisualNovel{
    export async function playParagraph(_text: { [textname: string]: string }): Promise<void> {
        for (const key in _text) {
            switch (key.charAt(0)) {
                case "N":
                    await ƒS.Speech.tell(characters.narrator, _text[key]);
                    break;
                case "P":
                    await ƒS.Speech.tell(characters.protagonist, _text[key]);
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
                    await ƒS.Speech.tell(characters.doctor, _text[key]);
                    break;
                default:
                    break;
            }

        }
    }
}