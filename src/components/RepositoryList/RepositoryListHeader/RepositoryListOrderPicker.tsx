import React from 'react'
import { repositoryOrder } from '../../../types'
import { Picker } from '@react-native-picker/picker'

const orderToName: [repositoryOrder, string][] = [
  ["latest", "Latest Rated"],
  ["highestRated", "Highest Rated"],
  ["lowestRated", "Lowest Rated"],
]

function RepositoryListOrderPicker({order, setOrder}: RepositoryListOrderPicker) {
  return (
    <Picker 
      selectedValue={order}
      onValueChange={(newOrder) => setOrder(newOrder)}>
        {orderToName.map((v) => <Picker.Item key={v[0]} label={v[1]} value={v[0]}/> )}
    </Picker>
  )
}

interface RepositoryListOrderPicker {
  order: repositoryOrder;
  setOrder: (newOrder: repositoryOrder) => void
};

export default RepositoryListOrderPicker