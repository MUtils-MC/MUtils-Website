import TagController from "../Images/mc/tags/Controller.svg";
import TagFree from "../Images/mc/tags/Checkmark.svg";
import TagRandom from "../Images/mc/tags/Dice.svg";
import TagForce from "../Images/mc/tags/Chest.svg";
import TagMultiplayer from "../Images/mc/tags/Multiplayer.svg";

export default {
    tags: {
        "FUN": { "color":"rgba(121,27,249,1)", "img":TagController },
        "MEDIUM": { "color":"rgba(27,108,249,1)", "img":TagController },
        "HARD": { "color":"rgba(65,228,242,1)", "img":TagController },
        "FREE": { "color":"rgba(255,0,228,1)", "img":TagFree },
        "RANDOMIZER": { "color":"rgba(255,0,228,1)", "img":TagRandom },
        "FORCE": { "color":"rgba(81,227,78,1)", "img":TagForce },
        "MULTIPLAYER": { "color":"rgba(240,96,100,1)", "img":TagMultiplayer },
    }
}