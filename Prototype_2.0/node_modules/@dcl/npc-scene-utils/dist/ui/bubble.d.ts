/// <reference types="dcl" />
import { Dialog } from "../utils/types";
/**
 * Displays an in-world panel as a speech bubble, with text from an array of Dialog objects.
 *
 * @param parent Entity to set as parent. The Bubble will inherit the position, rotation and scale of the parent.
 * @param height Height in meters to float the bubble above the parent's position.
 * @param sound Path to a sound file to play once for every dialog window shown.
 *
 */
export declare class DialogBubble {
    NPCScript: Dialog[];
    container: Entity;
    panel: Entity;
    rootEntity: Entity;
    text: Entity;
    material: BasicMaterial;
    isBubleOpen: boolean;
    activeTextId: number;
    uiTheme: Texture;
    soundEnt: Entity;
    defaultSound: string | null;
    baseYOffset: number;
    constructor(parent: Entity, height?: number, sound?: string);
    /**
     * Opens a dialog bubble to start a conversation.
     * @param {Dialog[]} NPCScript  Instructions to follow during the conversation
     * @param {number|string} textId Where to start in the script. Can refer to an index in the array or the `name` field of a Dialog entry.
     */
    openDialogWindow(NPCScript: Dialog[], textId?: number | string): void;
    private adjustBubble;
    next(): void;
    layoutDialogWindow(textId: number): void;
    /**
     * Closes the dialog bubble, executing associated triggeredByNext functions.
     */
    closeDialogWindow(): void;
    /**
    * Closes the dialog bubble, and stops executed any associated triggeredByNext actions.
    */
    closeDialogEndAll(): void;
    skipDialogs(): void;
}
export declare class WorldDialogTypeInSystem implements ISystem {
    static _instance: WorldDialogTypeInSystem | null;
    timer: number;
    speed: number;
    visibleChars: number;
    fullText: string;
    Dialog: DialogBubble | null;
    Text: TextShape | null;
    textId: number;
    done: boolean;
    showing: boolean;
    timeOn: number;
    window: DialogBubble;
    static createAndAddToEngine(): WorldDialogTypeInSystem;
    private constructor();
    update(dt: number): void;
    newText(dialog: DialogBubble, text: string, textId: number, timeOn?: number, speed?: number): void;
    rush(): void;
    closeTag(newChars: number): void;
}
