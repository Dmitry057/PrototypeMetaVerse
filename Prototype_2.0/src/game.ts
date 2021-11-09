import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from './resources'
import { PirateDialog } from './modules/dialogData'
//#region "Instance Scene"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
const caribbeanWater = new Entity('caribbeanWater')
engine.addEntity(caribbeanWater)
caribbeanWater.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("Models/390b876e-4b3a-4e78-bd03-5be21b1ecc67/WaterPatchFull_01/WaterPatchFull_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
caribbeanWater.addComponentOrReplace(gltfShape)

const caribbeanShoreWithRocksPatch = new Entity('caribbeanShoreWithRocksPatch')
engine.addEntity(caribbeanShoreWithRocksPatch)
caribbeanShoreWithRocksPatch.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(32, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanShoreWithRocksPatch.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("Models/fd9eb4ee-2caa-4fc5-8bd3-bc34288b515e/WaterPatchCurve_01/WaterPatchCurve_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
caribbeanShoreWithRocksPatch.addComponentOrReplace(gltfShape2)

const caribbeanWaterWithTwoSideRocks = new Entity('caribbeanWaterWithTwoSideRocks')
engine.addEntity(caribbeanWaterWithTwoSideRocks)
caribbeanWaterWithTwoSideRocks.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(-1.5, -0.7, 8.4, 0.7),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("Models/01d15783-7d05-42d6-a010-3db4b60c63dd/WaterPatchCornerOutside_01/WaterPatchCornerOutside_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(gltfShape3)

const caribbeanWaterWithSideRocks = new Entity('caribbeanWaterWithSideRocks')
engine.addEntity(caribbeanWaterWithSideRocks)
caribbeanWaterWithSideRocks.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(28, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithSideRocks.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("Models/52850b6b-49b5-40f6-8b1b-c5ee95de159b/WaterPatchSide_01/WaterPatchSide_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
caribbeanWaterWithSideRocks.addComponentOrReplace(gltfShape4)

const caribbeanWaterWithSideRocks2 = new Entity('caribbeanWaterWithSideRocks2')
engine.addEntity(caribbeanWaterWithSideRocks2)
caribbeanWaterWithSideRocks2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithSideRocks2.addComponentOrReplace(transform6)
caribbeanWaterWithSideRocks2.addComponentOrReplace(gltfShape4)

const caribbeanWaterWithSideRocks3 = new Entity('caribbeanWaterWithSideRocks3')
engine.addEntity(caribbeanWaterWithSideRocks3)
caribbeanWaterWithSideRocks3.setParent(_scene)
caribbeanWaterWithSideRocks3.addComponentOrReplace(gltfShape4)
const transform7 = new Transform({
  position: new Vector3(16, 0, 8),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithSideRocks3.addComponentOrReplace(transform7)

const caribbeanWaterWithSideRocks4 = new Entity('caribbeanWaterWithSideRocks4')
engine.addEntity(caribbeanWaterWithSideRocks4)
caribbeanWaterWithSideRocks4.setParent(_scene)
caribbeanWaterWithSideRocks4.addComponentOrReplace(gltfShape4)
const transform8 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithSideRocks4.addComponentOrReplace(transform8)

const caribbeanWaterWithSideRocks5 = new Entity('caribbeanWaterWithSideRocks5')
engine.addEntity(caribbeanWaterWithSideRocks5)
caribbeanWaterWithSideRocks5.setParent(_scene)
caribbeanWaterWithSideRocks5.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(0, 0, 8),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithSideRocks5.addComponentOrReplace(transform9)

const caribbeanWater2 = new Entity('caribbeanWater2')
engine.addEntity(caribbeanWater2)
caribbeanWater2.setParent(_scene)
caribbeanWater2.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater2.addComponentOrReplace(transform10)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape5 = new GLTFShape("Models/0ee02d9e-7d23-42d9-a0c9-e1394ac0a98a/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
entity.addComponentOrReplace(gltfShape5)
const transform11 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform11)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape5)
const transform12 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform12)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape5)
const transform13 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform13)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape5)
const transform14 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform14)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape5)
const transform15 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform15)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape5)
const transform16 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform16)

const beachRock = new Entity('beachRock')
engine.addEntity(beachRock)
beachRock.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(28, 0, 42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock.addComponentOrReplace(transform17)
const gltfShape6 = new GLTFShape("Models/f4f6648a-77db-4599-a873-c11e19420f18/RockBig_07/RockBig_07.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
beachRock.addComponentOrReplace(gltfShape6)

const beachRock2 = new Entity('beachRock2')
engine.addEntity(beachRock2)
beachRock2.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(20.5, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock2.addComponentOrReplace(transform18)
const gltfShape7 = new GLTFShape("Models/4ee780b8-623e-4848-ae35-c934e2e63d5c/RockBig_06/RockBig_06.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
beachRock2.addComponentOrReplace(gltfShape7)

const beachRock3 = new Entity('beachRock3')
engine.addEntity(beachRock3)
beachRock3.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(13.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock3.addComponentOrReplace(transform19)
const gltfShape8 = new GLTFShape("Models/3ae1efaa-e0a7-47dd-ab64-aedf572f658c/RockBig_04/RockBig_04.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
beachRock3.addComponentOrReplace(gltfShape8)

const rockArch = new Entity('rockArch')
engine.addEntity(rockArch)
rockArch.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(20.5, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rockArch.addComponentOrReplace(transform20)
const gltfShape9 = new GLTFShape("Models/b57ff96e-0024-40e6-9303-fc4191b628d7/RockArc_02/RockArc_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
rockArch.addComponentOrReplace(gltfShape9)

const sandyRock = new Entity('sandyRock')
engine.addEntity(sandyRock)
sandyRock.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(5, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandyRock.addComponentOrReplace(transform21)
const gltfShape10 = new GLTFShape("Models/10a647ae-dac7-471c-bd57-38e650130950/RockSand_04/RockSand_04.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
sandyRock.addComponentOrReplace(gltfShape10)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(28, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree.addComponentOrReplace(transform22)
const gltfShape11 = new GLTFShape("Models/e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bentPalmTree.addComponentOrReplace(gltfShape11)

const jungleFern = new Entity('jungleFern')
engine.addEntity(jungleFern)
jungleFern.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(25, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleFern.addComponentOrReplace(transform23)
const gltfShape12 = new GLTFShape("Models/3a4e677f-88c7-4616-bbf0-9a97055463d6/JunglePlant_01/JunglePlant_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
jungleFern.addComponentOrReplace(gltfShape12)

const halfCoconut = new Entity('halfCoconut')
engine.addEntity(halfCoconut)
halfCoconut.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(26.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
halfCoconut.addComponentOrReplace(transform24)
const gltfShape13 = new GLTFShape("Models/0b710cd3-be50-4ac0-a340-d38fe2b6efe0/Coco_02/Coco_02.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
halfCoconut.addComponentOrReplace(gltfShape13)

const coconut = new Entity('coconut')
engine.addEntity(coconut)
coconut.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(27, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coconut.addComponentOrReplace(transform25)
const gltfShape14 = new GLTFShape("Models/597981eb-2375-41cb-8db5-7e3e0f4347f4/Coco_01/Coco_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
coconut.addComponentOrReplace(gltfShape14)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(7.5, 0, 35.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform26)
const gltfShape15 = new GLTFShape("Models/a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
tallPalmTree.addComponentOrReplace(gltfShape15)

const smallPalmTree = new Entity('smallPalmTree')
engine.addEntity(smallPalmTree)
smallPalmTree.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(5, 0, 35),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree.addComponentOrReplace(transform27)
const gltfShape16 = new GLTFShape("Models/3f7e1dbd-8693-409d-9dd9-2a06feaadec9/JunglePlant_07/JunglePlant_07.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
smallPalmTree.addComponentOrReplace(gltfShape16)

const bamboo = new Entity('bamboo')
engine.addEntity(bamboo)
bamboo.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(9.5, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo.addComponentOrReplace(transform28)
const gltfShape17 = new GLTFShape("Models/6922eea0-67a6-4559-917c-df33aa1d9954/Bamboo_01/Bamboo_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
bamboo.addComponentOrReplace(gltfShape17)

const sandyRock2 = new Entity('sandyRock2')
engine.addEntity(sandyRock2)
sandyRock2.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandyRock2.addComponentOrReplace(transform29)
sandyRock2.addComponentOrReplace(gltfShape10)

const sandyRock3 = new Entity('sandyRock3')
engine.addEntity(sandyRock3)
sandyRock3.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(4.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sandyRock3.addComponentOrReplace(transform30)
const gltfShape18 = new GLTFShape("Models/1135ceaa-0453-4eee-8540-9a380729c079/RockSand_05/RockSand_05.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
sandyRock3.addComponentOrReplace(gltfShape18)

const imperialPirateFlagship = new Entity('imperialPirateFlagship')
engine.addEntity(imperialPirateFlagship)
imperialPirateFlagship.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(7.5, 0, 8.5),
  rotation: new Quaternion(0,-1, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imperialPirateFlagship.addComponentOrReplace(transform31)
const gltfShape19 = new GLTFShape("Models/7a8474c6-326d-4c26-b785-c4c1e1e3d351/Ship_01/Ship_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
imperialPirateFlagship.addComponentOrReplace(gltfShape19)

const bazaarTent = new Entity('bazaarTent')
engine.addEntity(bazaarTent)
bazaarTent.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(12.5, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bazaarTent.addComponentOrReplace(transform32)
const gltfShape20 = new GLTFShape("Models/0149cae5-9e33-48aa-a346-94f02091ec75/Tent_02/Tent_02.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
bazaarTent.addComponentOrReplace(gltfShape20)

const rusticOldRopeBridge = new Entity('rusticOldRopeBridge')
engine.addEntity(rusticOldRopeBridge)
rusticOldRopeBridge.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(10, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticOldRopeBridge.addComponentOrReplace(transform33)
const gltfShape21 = new GLTFShape("Models/fcfd90df-6302-4632-a89b-2a1c999062e9/DocksBridge_02/DocksBridge_02.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
rusticOldRopeBridge.addComponentOrReplace(gltfShape21)

const jungleLampPost = new Entity('jungleLampPost')
engine.addEntity(jungleLampPost)
jungleLampPost.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(16, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleLampPost.addComponentOrReplace(transform34)
const gltfShape22 = new GLTFShape("Models/9768ade7-24b6-4260-9ceb-e3f57e00a311/JungleLampPost_01/JungleLampPost_01.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
jungleLampPost.addComponentOrReplace(gltfShape22)

const woodenRaft = new Entity('woodenRaft')
engine.addEntity(woodenRaft)
woodenRaft.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(29.5, 0, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenRaft.addComponentOrReplace(transform35)
const gltfShape23 = new GLTFShape("Models/5d6202b7-d5b7-4bc6-a4a2-c1e6b35c0bb6/Raft_01/Raft_01.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
woodenRaft.addComponentOrReplace(gltfShape23)

const demiCannon = new Entity('demiCannon')
engine.addEntity(demiCannon)
demiCannon.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(18.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
demiCannon.addComponentOrReplace(transform36)
const gltfShape24 = new GLTFShape("Models/f25b55b3-3260-4d81-b8e5-a2654ac9a3f5/Cannon_01/Cannon_01.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
demiCannon.addComponentOrReplace(gltfShape24)

const rusticCoveredMerchantStand = new Entity('rusticCoveredMerchantStand')
engine.addEntity(rusticCoveredMerchantStand)
rusticCoveredMerchantStand.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(30, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticCoveredMerchantStand.addComponentOrReplace(transform37)
const gltfShape25 = new GLTFShape("Models/fd4f0586-a75e-403a-90e6-83634d72be1d/SellingGoods_03/SellingGoods_03.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
rusticCoveredMerchantStand.addComponentOrReplace(gltfShape25)

const rusticMerchantStand = new Entity('rusticMerchantStand')
engine.addEntity(rusticMerchantStand)
rusticMerchantStand.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(28, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticMerchantStand.addComponentOrReplace(transform38)
const gltfShape26 = new GLTFShape("Models/c6041ea8-7c19-4658-81b8-37f19ecd0922/SellingGoods_01/SellingGoods_01.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
rusticMerchantStand.addComponentOrReplace(gltfShape26)

const gunpowderBarrel = new Entity('gunpowderBarrel')
engine.addEntity(gunpowderBarrel)
gunpowderBarrel.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(25, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gunpowderBarrel.addComponentOrReplace(transform39)
const gltfShape27 = new GLTFShape("Models/5506263d-49a3-4bbf-9df5-c144cfffcd5f/Barrel_01/Barrel_01.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
gunpowderBarrel.addComponentOrReplace(gltfShape27)

const rumBarrel = new Entity('rumBarrel')
engine.addEntity(rumBarrel)
rumBarrel.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(22, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rumBarrel.addComponentOrReplace(transform40)
const gltfShape28 = new GLTFShape("Models/f9f2d34a-09f9-4511-889a-f6981abb5265/Barrel_02/Barrel_02.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
rumBarrel.addComponentOrReplace(gltfShape28)

const bazaarTent2 = new Entity('bazaarTent2')
engine.addEntity(bazaarTent2)
bazaarTent2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(27, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bazaarTent2.addComponentOrReplace(transform41)
bazaarTent2.addComponentOrReplace(gltfShape20)

const jungleLampPost2 = new Entity('jungleLampPost2')
engine.addEntity(jungleLampPost2)
jungleLampPost2.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleLampPost2.addComponentOrReplace(transform42)
jungleLampPost2.addComponentOrReplace(gltfShape22)

const merchantTent = new Entity('merchantTent')
engine.addEntity(merchantTent)
merchantTent.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(30, 0, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
merchantTent.addComponentOrReplace(transform43)
const gltfShape29 = new GLTFShape("Models/810d239a-da72-4c27-85ab-7e0931ef43de/Tent_01/Tent_01.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
merchantTent.addComponentOrReplace(gltfShape29)

const mediumStraightDockModule = new Entity('mediumStraightDockModule')
engine.addEntity(mediumStraightDockModule)
mediumStraightDockModule.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(10, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mediumStraightDockModule.addComponentOrReplace(transform44)
const gltfShape30 = new GLTFShape("Models/3a5a12d0-f7c3-41fd-b30b-c94eec83f012/DocksModuleMedium_01/DocksModuleMedium_01.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
mediumStraightDockModule.addComponentOrReplace(gltfShape30)

const beachBones = new Entity('beachBones')
engine.addEntity(beachBones)
beachBones.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(29.5, 0, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachBones.addComponentOrReplace(transform45)
const gltfShape31 = new GLTFShape("Models/2e224a53-2d2b-4d9c-ab1d-4138e1b165a4/BonesChest_01/BonesChest_01.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
beachBones.addComponentOrReplace(gltfShape31)

const blackTricornHat = new Entity('blackTricornHat')
engine.addEntity(blackTricornHat)
blackTricornHat.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(28, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blackTricornHat.addComponentOrReplace(transform46)
const gltfShape32 = new GLTFShape("Models/a7961dd3-f05e-4d8d-8308-e748917e199d/PirateHat_02/PirateHat_02.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
blackTricornHat.addComponentOrReplace(gltfShape32)

const bigStonePath = new Entity('bigStonePath')
engine.addEntity(bigStonePath)
bigStonePath.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(32, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath.addComponentOrReplace(transform47)
const gltfShape33 = new GLTFShape("Models/363b9672-871b-4682-b15f-4f20f783789d/StonePath_02/StonePath_02.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
bigStonePath.addComponentOrReplace(gltfShape33)

const bigStonePath2 = new Entity('bigStonePath2')
engine.addEntity(bigStonePath2)
bigStonePath2.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(30, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath2.addComponentOrReplace(transform48)
bigStonePath2.addComponentOrReplace(gltfShape33)

const bigStonePath3 = new Entity('bigStonePath3')
engine.addEntity(bigStonePath3)
bigStonePath3.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(28, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath3.addComponentOrReplace(transform49)
bigStonePath3.addComponentOrReplace(gltfShape33)

const wornOutSmallStonePath = new Entity('wornOutSmallStonePath')
engine.addEntity(wornOutSmallStonePath)
wornOutSmallStonePath.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(26, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wornOutSmallStonePath.addComponentOrReplace(transform50)
const gltfShape34 = new GLTFShape("Models/210e32a5-3754-406e-82e2-88ce9dfc0f59/StonePathBroken_03/StonePathBroken_03.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
wornOutSmallStonePath.addComponentOrReplace(gltfShape34)

const stonePath = new Entity('stonePath')
engine.addEntity(stonePath)
stonePath.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(29.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stonePath.addComponentOrReplace(transform51)
const gltfShape35 = new GLTFShape("Models/1aa57826-1afe-466c-ab11-afd5f0df702c/StonePath_01/StonePath_01.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
stonePath.addComponentOrReplace(gltfShape35)

const wornOutBigStonePath = new Entity('wornOutBigStonePath')
engine.addEntity(wornOutBigStonePath)
wornOutBigStonePath.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(27.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wornOutBigStonePath.addComponentOrReplace(transform52)
const gltfShape36 = new GLTFShape("Models/9c82896a-e6f6-4e01-9ec9-8a96b0c10403/StonePathBroken_02/StonePathBroken_02.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
wornOutBigStonePath.addComponentOrReplace(gltfShape36)

const wornOutSmallStonePath2 = new Entity('wornOutSmallStonePath2')
engine.addEntity(wornOutSmallStonePath2)
wornOutSmallStonePath2.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(25.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wornOutSmallStonePath2.addComponentOrReplace(transform53)
wornOutSmallStonePath2.addComponentOrReplace(gltfShape34)

const mediumStoneSlabTile = new Entity('mediumStoneSlabTile')
engine.addEntity(mediumStoneSlabTile)
mediumStoneSlabTile.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(31.5, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
mediumStoneSlabTile.addComponentOrReplace(transform54)
const gltfShape37 = new GLTFShape("Models/15ebf945-a8c6-4f2e-993d-660b0e93441d/StoneSlabMedium_01/StoneSlabMedium_01.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
mediumStoneSlabTile.addComponentOrReplace(gltfShape37)

const wornOutBigStonePath2 = new Entity('wornOutBigStonePath2')
engine.addEntity(wornOutBigStonePath2)
wornOutBigStonePath2.setParent(_scene)
wornOutBigStonePath2.addComponentOrReplace(gltfShape36)
const transform55 = new Transform({
  position: new Vector3(20, 0, 26.5),
  rotation: new Quaternion(1.4973419631131974e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
wornOutBigStonePath2.addComponentOrReplace(transform55)

const wornOutBigStonePath4 = new Entity('wornOutBigStonePath4')
engine.addEntity(wornOutBigStonePath4)
wornOutBigStonePath4.setParent(_scene)
wornOutBigStonePath4.addComponentOrReplace(gltfShape36)
const transform56 = new Transform({
  position: new Vector3(20, 0, 23),
  rotation: new Quaternion(1.4973419631131974e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
wornOutBigStonePath4.addComponentOrReplace(transform56)

const bigStonePath4 = new Entity('bigStonePath4')
engine.addEntity(bigStonePath4)
bigStonePath4.setParent(_scene)
bigStonePath4.addComponentOrReplace(gltfShape33)
const transform57 = new Transform({
  position: new Vector3(24, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath4.addComponentOrReplace(transform57)

const bigStonePath5 = new Entity('bigStonePath5')
engine.addEntity(bigStonePath5)
bigStonePath5.setParent(_scene)
bigStonePath5.addComponentOrReplace(gltfShape33)
const transform58 = new Transform({
  position: new Vector3(22, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath5.addComponentOrReplace(transform58)

const smallStoneTile = new Entity('smallStoneTile')
engine.addEntity(smallStoneTile)
smallStoneTile.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(20, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallStoneTile.addComponentOrReplace(transform59)
const gltfShape38 = new GLTFShape("Models/ef047fbb-071f-4609-b4f0-128db30c0bd5/StoneRandomSmall_01/StoneRandomSmall_01.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
smallStoneTile.addComponentOrReplace(gltfShape38)

const smallStoneTile2 = new Entity('smallStoneTile2')
engine.addEntity(smallStoneTile2)
smallStoneTile2.setParent(_scene)
smallStoneTile2.addComponentOrReplace(gltfShape38)
const transform60 = new Transform({
  position: new Vector3(20, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallStoneTile2.addComponentOrReplace(transform60)

const bazaarTent3 = new Entity('bazaarTent3')
engine.addEntity(bazaarTent3)
bazaarTent3.setParent(_scene)
bazaarTent3.addComponentOrReplace(gltfShape20)
const transform61 = new Transform({
  position: new Vector3(27, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bazaarTent3.addComponentOrReplace(transform61)

const merchantTent2 = new Entity('merchantTent2')
engine.addEntity(merchantTent2)
merchantTent2.setParent(_scene)
merchantTent2.addComponentOrReplace(gltfShape29)
const transform62 = new Transform({
  position: new Vector3(30, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
merchantTent2.addComponentOrReplace(transform62)

const wornOutSmallStonePath3 = new Entity('wornOutSmallStonePath3')
engine.addEntity(wornOutSmallStonePath3)
wornOutSmallStonePath3.setParent(_scene)
wornOutSmallStonePath3.addComponentOrReplace(gltfShape34)
const transform63 = new Transform({
  position: new Vector3(23, 0, 29.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wornOutSmallStonePath3.addComponentOrReplace(transform63)

const bigStonePath6 = new Entity('bigStonePath6')
engine.addEntity(bigStonePath6)
bigStonePath6.setParent(_scene)
bigStonePath6.addComponentOrReplace(gltfShape33)
const transform64 = new Transform({
  position: new Vector3(19, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath6.addComponentOrReplace(transform64)

const bigStonePath7 = new Entity('bigStonePath7')
engine.addEntity(bigStonePath7)
bigStonePath7.setParent(_scene)
bigStonePath7.addComponentOrReplace(gltfShape33)
const transform65 = new Transform({
  position: new Vector3(17, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath7.addComponentOrReplace(transform65)

const bigStonePath8 = new Entity('bigStonePath8')
engine.addEntity(bigStonePath8)
bigStonePath8.setParent(_scene)
bigStonePath8.addComponentOrReplace(gltfShape33)
const transform66 = new Transform({
  position: new Vector3(15, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigStonePath8.addComponentOrReplace(transform66)

const wornOutSmallStonePath4 = new Entity('wornOutSmallStonePath4')
engine.addEntity(wornOutSmallStonePath4)
wornOutSmallStonePath4.setParent(_scene)
wornOutSmallStonePath4.addComponentOrReplace(gltfShape34)
const transform67 = new Transform({
  position: new Vector3(13, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wornOutSmallStonePath4.addComponentOrReplace(transform67)

const bamboo2 = new Entity('bamboo2')
engine.addEntity(bamboo2)
bamboo2.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(21, 0, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo2.addComponentOrReplace(transform68)
bamboo2.addComponentOrReplace(gltfShape17)

const bentPalmTree2 = new Entity('bentPalmTree2')
engine.addEntity(bentPalmTree2)
bentPalmTree2.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(23, 0, 17),
  rotation: new Quaternion(1.5, 0.6, -7.5, -0.7),
  scale: new Vector3(0.7, 0.75, 0.75)
})
bentPalmTree2.addComponentOrReplace(transform69)
bentPalmTree2.addComponentOrReplace(gltfShape11)

const beachRock4 = new Entity('beachRock4')
engine.addEntity(beachRock4)
beachRock4.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(3.5, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachRock4.addComponentOrReplace(transform70)
const gltfShape39 = new GLTFShape("Models/9c71a19d-783a-4603-a953-b974b484eade/RockBig_01/RockBig_01.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
beachRock4.addComponentOrReplace(gltfShape39)

const jungleFern2 = new Entity('jungleFern2')
engine.addEntity(jungleFern2)
jungleFern2.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(24, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleFern2.addComponentOrReplace(transform71)
jungleFern2.addComponentOrReplace(gltfShape12)

const jungleShrub = new Entity('jungleShrub')
engine.addEntity(jungleShrub)
jungleShrub.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(28.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
jungleShrub.addComponentOrReplace(transform72)
const gltfShape40 = new GLTFShape("Models/d8b2cdd4-043a-4982-91c2-202d85677533/JunglePlant_02/JunglePlant_02.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
jungleShrub.addComponentOrReplace(gltfShape40)

const monsteraDeliciosa = new Entity('monsteraDeliciosa')
engine.addEntity(monsteraDeliciosa)
monsteraDeliciosa.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(14, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
monsteraDeliciosa.addComponentOrReplace(transform73)
const gltfShape41 = new GLTFShape("Models/4563ad1f-84d1-47d5-a7ac-f159ba59b3e7/JunglePlant_03/JunglePlant_03.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
monsteraDeliciosa.addComponentOrReplace(gltfShape41)

const tallPalmTree2 = new Entity('tallPalmTree2')
engine.addEntity(tallPalmTree2)
tallPalmTree2.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(18.5, 0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree2.addComponentOrReplace(transform74)
tallPalmTree2.addComponentOrReplace(gltfShape15)

const gunpowderBarrel2 = new Entity('gunpowderBarrel2')
engine.addEntity(gunpowderBarrel2)
gunpowderBarrel2.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(30, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gunpowderBarrel2.addComponentOrReplace(transform75)
gunpowderBarrel2.addComponentOrReplace(gltfShape27)

const rumBarrel2 = new Entity('rumBarrel2')
engine.addEntity(rumBarrel2)
rumBarrel2.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(26, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rumBarrel2.addComponentOrReplace(transform76)
rumBarrel2.addComponentOrReplace(gltfShape28)

//#endregion
let fraseID = 0;
export const pirate = new NPC(
  {
    position: new Vector3(20, 0, 20),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(0.15, 0.15, 0.15)
  },
  resources.models.persons.pirate,
  () => {
    //pirate.playAnimation('Hello', true, 2)

    let dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
       // pirate.playAnimation('Talk')
      })
    )
    engine.addEntity(dummyent)

    // sound
    pirate.addComponentOrReplace(new AudioSource(resources.sounds.pirate))
    pirate.getComponent(AudioSource).playOnce()

    // dialog UI
    pirate.talk(PirateDialog)
    // collision
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/Pirate.png',
      height: 200,
      width: 200,
      section: {
        sourceHeight: 512,
        sourceWidth: 512,
      },
    },
    onWalkAway: () => {
     // pirate.playAnimation('Goodbye', true, 2)
    },
  }
)
