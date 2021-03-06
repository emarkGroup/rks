import createNewNode from './createNewNode.js'
import pasteNameSuffixes from './pasteNameSuffixes.js'
import renderNewNode from './renderNewNode.js'
import initCopyButtons from './initCopyButtons.js'
import initPseudoSelects from '../controls/select/initPseudoSelects.js'
import initRadioLabels from '../controls/initRadioLabels.js'
import initCheckboxLabels from '../controls/initCheckboxLabels.js'
import initMasks from '../masks/initMasks.js'
import initColdWaterSupply from '../logic/initColdWaterSupply.js'
import initDrainage from '../logic/initDrainage.js'
import initAddressConcatination from '../address/initAddressConcatination.js'
import initWaterSource from '../logic/initWaterSource.js'
import initLookups from '../controls/lookup/initLookups.js'
import initConnectobjchar from "../logic/initConnectobjchar.js";


// создание и рендер новой ноды, 4 слайдер
function createAndRenderNewNode(queueCount) {
  const newNode = createNewNode()
  pasteNameSuffixes(newNode, queueCount)
  renderNewNode(newNode)
  initLookups(newNode)
  initPseudoSelects(newNode)
  initRadioLabels(newNode)
  initCheckboxLabels(newNode)
  initMasks(newNode)
  initColdWaterSupply(newNode)
  initDrainage(newNode)
  initAddressConcatination(newNode)
  initWaterSource(newNode)
  initConnectobjchar(newNode)
  initCopyButtons(newNode)

  // addNewSlide(newNode)
}


export default createAndRenderNewNode
