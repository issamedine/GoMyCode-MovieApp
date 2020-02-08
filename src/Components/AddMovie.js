import React from 'react'
import ModalMovie from './ModalMovie'

function AddMovie(props) {
    return (
        <div>
            <ModalMovie handleAdd={props.handleAdd} />
        </div>
    )
}
export default AddMovie