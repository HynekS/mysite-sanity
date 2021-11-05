import React from "react"
import PropTypes from "prop-types"

import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"

const createPatchFrom = value => PatchEvent.from(value === "" ? unset() : set(Number(value)))

export default class Slider extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        step: PropTypes.number,
      }).isRequired,
    }).isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  }

  // this is called by the form builder whenever this input should receive focus
  focus() {
    this._inputElement.focus()
  }

  render() {
    const { type, value, onChange } = this.props
    const { min, max, step } = type.options.range

    return (
      <div>
        <h2>{type.title}</h2>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value === undefined ? "" : value}
          onChange={event => onChange(createPatchFrom(event.target.value))}
          ref={element => (this._inputElement = element)}
        />
      </div>
    )
  }
}
