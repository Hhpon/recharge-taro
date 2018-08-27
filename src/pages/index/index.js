import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='container'>
        <View className='header-nav'>
          <View className='nav'>Mobicom</View>
          <View className='nav'>Unitel</View>
          <View className='nav'>Gmobile</View>
          <View className='nav'>SKYtel</View>
        </View>
        <View style='height: 40px;'></View>
        <View className='input-container'>
          <Input placeholder='请输入电话号码' style='width:100%;' />
        </View>
        
      </View>
    )
  }
}

