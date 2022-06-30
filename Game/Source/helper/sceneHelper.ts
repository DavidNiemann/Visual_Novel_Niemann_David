namespace VisualNovel {


    export let protagonistPositionVector: ƒ.Vector2 = new ƒ.Vector2(+400, -700);
    export let secondPersonsPositionVector: ƒ.Vector2 = new ƒ.Vector2(-400, -700);
    export let thirdPersonsPositionVector: ƒ.Vector2 = new ƒ.Vector2(0, -700);
    let lastSpeaker: string = undefined;
    let lastPose: POSES = undefined;
    //let charactersINParagraph: { char: string, pose: POSES }[] = [];
    let charactersINParagraph: { [char: string]: POSES } = {};
    export async function playParagraph(_text: StoryText): Promise<void> {
        for (const text in _text) {

            let isInPragraph: boolean = charactersINParagraph[text.substring(0, text.length - 4).toLowerCase()] ? true : false;
            if (text.substring(0, text.length - 4) != "Narrator") {

                if (false == isInPragraph) {
                    //console.log("new Char");
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);
                } else if (charactersINParagraph[text.substring(0, text.length - 4).toLowerCase()] != _text[text].pose) {
                    //console.log("new pose");
                    await ƒS.Character.hide(characters[text.substring(0, text.length - 4).toLowerCase()]);
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);

                }
                if (lastSpeaker && lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    await endSpeakingAnimation(lastSpeaker, lastPose);
                    delete charactersINParagraph[lastSpeaker];
                    lastSpeaker = undefined;
                    lastPose = undefined;
                }
                //console.log(lastPose, _text[text].pose);
                if (lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    //console.log("new Animations");
                    await startSpeakingAnimation(text.substring(0, text.length - 4), _text[text].pose);
                }

            }

            await ƒS.Speech.tell(characters[text.toLowerCase().substring(0, text.length - 4)], _text[text].text);

        }
        ƒS.Character.hideAll();
        charactersINParagraph = {};
        //charactersINParagraph = [];
        lastSpeaker = undefined;
        lastPose = undefined;
        await ƒS.update();
    }
    export async function showCharacter(_character: string, _pose?: POSES): Promise<void> {
        for (const char in characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in characters[char].pose) {
                    if (pose == _pose) {
                        await ƒS.Character.show(characters[char], characters[char].pose[pose], char.charAt(0) == "p" ? protagonistPositionVector : Object.entries(charactersINParagraph).length < 2 ? secondPersonsPositionVector : thirdPersonsPositionVector);
                        //charactersINParagraph.push({ char: char, pose: _pose });
                        charactersINParagraph[char] = _pose;
                    }
                }
            }
        }
        await ƒS.update();
    }

    export async function endSpeakingAnimation(_character: string, _pose?: POSES): Promise<void> {
        for (const char in characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in characters[char].pose) {
                    if (pose == _pose) {
                        await ƒS.Character.animate(characters[char], characters[char].pose[pose], animations.endSpeaking);
                        lastSpeaker = undefined;
                        lastPose = undefined;
                    }
                }
            }
        }
    }

    export async function startSpeakingAnimation(_character: string, _pose?: POSES): Promise<void> {
        for (const char in characters) {
            if (char == _character.toLowerCase()) {
                for (const pose in characters[char].pose) {
                    if (pose == _pose) {
                        await ƒS.Character.animate(characters[char], characters[char].pose[pose], animations.startSpeaking);
                        lastSpeaker = char;
                        lastPose = pose;
                    }
                }
            }
        }
    }

}
