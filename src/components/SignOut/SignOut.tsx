import React, { useEffect } from 'react'
import { View } from 'react-native'
import Text from '../common/Text'
import useSignOut from '../../hooks/useSignOut';
import useAuthStorage from '../../hooks/useAuthStorage';
import useAuthStatus from '../../hooks/useAuthStatus';

function SignOut() {
	const signOut = useSignOut();

	useEffect(() => {
		signOut();
	}, []);

  return (
    <View>
			<Text>loading...</Text>
    </View>
  )
}

export default SignOut