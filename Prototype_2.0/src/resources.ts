export default {
  sounds: {
    pirate: new AudioClip('Sounds/pirate_svist.mp3')
  },
  models: {
    standard: {
      baseScene: new GLTFShape('models/standard/baseScene.glb'),
    },
    persons: {
      pirate: 'Models/Pirate/pirateTest.gltf',
    },
  },
  textures: {
    blank: new Texture('images/ui/blank.png'),
    buttonE: new Texture('images/ui/buttonE.png'),
    buttonF: new Texture('images/ui/buttonF.png'),
    leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
    textPanel: new Texture('images/ui/textPanel.png'),
  },
}
