namespace VisualNovel {


    export let protagonistPositionVector: ƒ.Vector2 = new ƒ.Vector2(+400, -700);
    export let otherPersonsPositionVector: ƒ.Vector2 = new ƒ.Vector2(-400, -700);
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
                console.log(lastPose, _text[text].pose);
                if (lastSpeaker != text.substring(0, text.length - 4).toLowerCase()) {
                    //console.log("new Animations");
                    await startSpeakingAnimation(text.substring(0, text.length - 4), _text[text].pose);
                }

                /* let charInParagraoh: boolean = charactersINParagraph.some((char) => { return char.char == text.substring(0, text.length - 4).toLowerCase(); })
                console.log(text, charactersINParagraph);
                if (charactersINParagraph.some((char) => { return (char.pose != _text[text].pose && char.char == text.substring(0, text.length - 4).toLowerCase()); })) {
                    console.log("new pose");
    
                    await ƒS.Character.hide(characters[text.substring(0, text.length - 4).toLowerCase()]);
                    await ƒS.update();
                    charactersINParagraph.splice(charactersINParagraph.indexOf(charactersINParagraph.find((char) => { return (char.pose != _text[text].pose && char.char == text.substring(0, text.length - 4).toLowerCase()); })), 1);
                
    
                }
                if (false == charInParagraoh  && text.substring(0, text.length - 4) != "Narrator") {
                    console.log("new Char");
                    await showCharacter(text.substring(0, text.length - 4), _text[text].pose);
                } */



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
                        await ƒS.Character.show(characters[char], characters[char].pose[pose], char.charAt(0) == "p" ? protagonistPositionVector : otherPersonsPositionVector);
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
    /*  export async function endSpeakingAnimation(_charakter: string, _pose?: POSES): Promise<void> {
         switch (_charakter) {
             case "P":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.sad, animations.endSpeaking);
                         break;
                     case POSES.FRIGHTEND:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.frightend, animations.endSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.happy, animations.endSpeaking);
                         break;
                     case POSES.CHILD:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.child, animations.endSpeaking);
                         break;
 
                 }
                 break;
             case "M":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.sad, animations.endSpeaking);
                         break;
                     case POSES.FRIGHTEND:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.frightend, animations.endSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.happy, animations.endSpeaking);
                         break;
 
                 }
 
                 break;
             case "S":
                 ƒS.Character.animate(characters.strange_man, characters.strange_man.pose.happy, animations.endSpeaking);
                 break;
             case "F":
                 ƒS.Character.animate(characters.great_fairy, characters.great_fairy.pose.happy, animations.endSpeaking);
 
                 break;
             case "D":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.sad, animations.endSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.doctor, characters.doctor.pose.happy, animations.endSpeaking);
                         break;
 
 
                 }
                 break;
         }
     }
     export async function startSpeakingAnimation(_charakter: string, _pose?: POSES): Promise<void> {
         if (lastSpeaker != "") {
             endSpeakingAnimation(lastSpeaker, lastPose);
         }
         switch (_charakter) {
             case "P":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.sad, animations.startSpeaking);
                         break;
                     case POSES.FRIGHTEND:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.frightend, animations.startSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.happy, animations.startSpeaking);
                         break;
                     case POSES.CHILD:
                         ƒS.Character.animate(characters.protagonist, characters.protagonist.pose.child, animations.startSpeaking);
                         break;
 
                 }
                 break;
             case "M":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.sad, animations.startSpeaking);
                         break;
                     case POSES.FRIGHTEND:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.frightend, animations.startSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.happy, animations.startSpeaking);
                         break;
 
                 }
 
                 break;
             case "S":
                 ƒS.Character.animate(characters.strange_man, characters.strange_man.pose.happy, animations.startSpeaking);
                 break;
             case "F":
                 ƒS.Character.animate(characters.great_fairy, characters.great_fairy.pose.happy, animations.startSpeaking);
 
                 break;
             case "D":
                 switch (_pose) {
                     case POSES.SAD:
                         ƒS.Character.animate(characters.mother, characters.mother.pose.sad, animations.startSpeaking);
                         break;
                     case POSES.HAPPY:
                         ƒS.Character.animate(characters.doctor, characters.doctor.pose.happy, animations.startSpeaking);
                         break;
 
 
                 }
                 break;
         }
     } */
}
