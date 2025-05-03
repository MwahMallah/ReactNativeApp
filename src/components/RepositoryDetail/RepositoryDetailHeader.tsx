import { View } from "react-native"
import RepositoryItem from "../RepositoryItem/RepositoryItem"
import Button from "../common/Button"
import { TGetRepositoryResponse } from "../../types"

function RepositoryDetailHeader({data, onPress}: RepositoryDetailHeaderProps) {
  return (
    <RepositoryItem repository={data?.repository}>
      <Button label='Open In Github' onPress={onPress} />
    </RepositoryItem>
  )
}

interface RepositoryDetailHeaderProps {
  data: TGetRepositoryResponse;
  onPress: () => Promise<void>;
}

export default RepositoryDetailHeader