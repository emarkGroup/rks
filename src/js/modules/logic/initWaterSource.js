import changeSliderHeight from '../controls/slider/changeSliderHeight.js'


// добавление новых строк в таблицу с иными источниками, слайдер 4
function initWaterSource(node) {
  const water_source_tbody = $('.other_water_sources tbody')
  let water_source_count = 1
  const water_sources_count = node.querySelector('[name^="other_water_sources_count"]');


  $('.add_source_btn').click(function(e) {
    const new_row = `
                    <tr class="table__row">
                      <td class="table__cell">
                        <input type="text" class="field__input" name=${'other_water_sources_name_' + water_source_count} placeholder="Введите данные" />
                      </td>
                      <td class="table__cell">
                        <input type="text" class="field__input" name=${'other_water_sources_vol_' + water_source_count} placeholder="Введите данные" />
                      </td>
                    </tr>
                   `
    e.preventDefault()

    water_source_tbody.append(new_row)
    water_source_count++
    if (water_sources_count) water_sources_count.value = water_source_count;
    changeSliderHeight()
  })

  // удаление новых строк в таблице с иными источниками, слайдер 4
  $('.add_source_btn_remove').click(function(e) {
    e.preventDefault()

    if (water_source_count > 2) {
      water_source_tbody.children().last().remove()
      water_source_count--
      changeSliderHeight()
    }
  })
}


export default initWaterSource
