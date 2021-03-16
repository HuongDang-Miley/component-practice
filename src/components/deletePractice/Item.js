import React, { useContext, useState } from 'react'
import '../style.css'
import itemContext from './itemContext'
import {Button, ButtonGroup} from '@material-ui/core'
import DeleteOutline from '@material-ui/icons/DeleteOutline'

export default function Item(props) {
    const { state, handleDeleteItem } = useContext(itemContext)
    const list = state.list
    const { name, id } = props.item

    const { array, setArray } = useState(list)

    const handleDeleteItem2 = (id) => {
        console.log('list', list)
        console.log('array', array)
        let newList = [...list]
        let deteleItem = newList.filter(item => item.id !== id)
        console.log('deteleItem', deteleItem)
        setArray(deteleItem)



    }

    return (
        <div className='card'>
            <h4>{array}</h4>
            <h4>{id}</h4>
            <h4>{name}</h4>

            <ButtonGroup
                color='secondary'
                variant='contained'
                size='small'
                startIcon={<DeleteOutline />}>
                <Button
                    onClick={() => handleDeleteItem(id)}
                    startIcon={<DeleteOutline />}>
                    Delete Use useContext
                </Button>
                <Button
                    onClick={() => handleDeleteItem2(id)}
                    // custom style
                    // style={{backgroundColor: 'primary' }}
                    color='primary'
                    startIcon={<DeleteOutline />}>
                    Delete Use useState
                </Button>
            </ButtonGroup>

        </div>
    )
}
