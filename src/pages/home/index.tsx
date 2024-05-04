import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import stylesheet from './stylesheet';
import {AppStackNavigationPropsHome} from '../../navigation/types';
import {Button} from '../../components';
import {AppContext} from '../../context';
import {ProfileIcon} from '../../assets/svg';

const Home = ({route, navigation}: AppStackNavigationPropsHome) => {
  const {values} = useContext(AppContext);
  const {theme} = values;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          variant="custom"
          onPress={() => navigation.navigate('Profile')}
          customContent={<ProfileIcon size={25} />}
        />
      ),
    });
  }, []);

  return (
    <View style={stylesheet.container}>
      <Text>UserId:{route.params.message}</Text>
    </View>
  );
};
export default Home;
