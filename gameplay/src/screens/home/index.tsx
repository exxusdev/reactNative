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

  function handleCategorySelect( categoryId: string ) {
    categoryId === category ? setCategory('') : setCategory( categoryId )
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