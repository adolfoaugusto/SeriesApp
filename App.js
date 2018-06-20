import { StackNavigator } from 'react-navigation';

import LoginPage from './src/pages/LoginPage';

export default createStackNavigator({
  'Login':{
      screen:LoginPage,
      navigationOptions:{
         title: "Bem vindo!",
      }
  }
},{
  navigationOptions:{
    title: "Series App!",
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#262626',
      borderBottomWidth: 1,
      borderBottomColor: '#d1d2d3',

    },
    headerTitleStyle:{
      color:'#ffcc33',
      fontSize:25, 
      elevation: 1,
    }
  }

})
