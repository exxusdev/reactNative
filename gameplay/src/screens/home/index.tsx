/* Base */
import React, { useState } from 'react'
import { View, Text } from "react-native"

/* Custon */
import { styles } from './styles'
import { Profile } from '../../components/profile'

/* Components */
import { ButtonAdd } from '../../components/buttonAdd'
import { CategorySelect } from '../../components/categorySelect'

export function HomePage() {
  const [ category, setCategory ] = useState('')

  function handleCategorySelect( categoryID: string ) {
    categoryID === category ? setCategory('') : setCategory( categoryID )
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect 
          categorySelected = { category }
          setCategory = { handleCategorySelect }
        />
      </View>
      
    </View>
  )
}