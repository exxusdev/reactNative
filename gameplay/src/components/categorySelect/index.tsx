/* Base */
import { ScrollView } from 'react-native'

/* Custons */
import { styles } from './styles'
import { categories } from '../../utils/categories'
import { Category } from '../category'

type Props = {
  categorySelected: String;
  setCategory: ( categoryId : string ) => void;
}

export function CategorySelect( { categorySelected, setCategory } : Props ) {
  return (
    <ScrollView 
      horizontal
      style= { styles.container }
      showsHorizontalScrollIndicator={false}
      contentContainerStyle = {{ paddingRight: 40 }}
    >
      {
        categories.map(category =>(
          <Category
            key={ category.id } 
            title={ category.title } 
            icon={ category.icon }
            checked={ category.id === categorySelected }
            onPress={ () => setCategory( category.id ) }
          />

        ))
      }
    </ScrollView>
  )
}
