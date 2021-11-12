import { Dialog } from '@dcl/npc-scene-utils'
import { pirate } from '../game'
import * as gameTS from '../game' 

export const PirateDialog: Dialog[] = [
  {
    text: "YO-HO-HO TO ALL THE PIRATES!"
  },
  {
    text: "Oh, sorry, I should spend less time on the beach.."
  },
  {
    text: "My ship was wrecked a mile from here, but all things wash up on this shore"
  },
  {
    text: "The squid sucked out one of my eyes, so I can't find my pipe among this junk. Can you help me?",
    isQuestion: true,
    buttons: [
      { label: 'Of course', goToDialog: 5 },
      { label: 'Im busy!', goToDialog: 4 },
    ],
    triggeredByNext: () => gameTS.changeFraseID(7,6),
  },
  {
    text: "Damn you ..#@?#*king %@lave.. (mumbles in pirate language)",
    isEndOfDialog: true,
    triggeredByNext: () => {
      //pirate.playAnimation('Goodbye', true, 2)
    },
  },
  {
    triggeredByNext: () => gameTS.changeFraseID(7,6),
    isEndOfDialog: true,
    text:
      'Oh, few parishioners agree to help a seasoned sea wolf! Thanks!',
  },
  {
    text: "Keep looking!",
    isEndOfDialog: true,
  },
  {
    text: "Oh, thanks!",
    isEndOfDialog: true,
    triggeredByNext: () => {
      //pirate.playAnimation('Goodbye', true, 2)
    },
  },
  
]
