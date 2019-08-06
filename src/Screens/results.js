import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, Dimensions, Image, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { p } from '../Config/normalize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SERVICE_API_URL } from '../Config/config';
import Cache from '../Config/cache';
import ViewShot from 'react-native-view-shot';
import Header from '../Components/Header';
import axios from 'axios';
import { colors, Tcolors, myResults } from '../Config/config';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      res: null,
      hidden: true,
      img: null,
      isWaiting: false,
      options: {
        format: "jpg",
        quality: 1
      }
    }
  }

  _renderItem = ({ item, index }) => (
    <View style={{ flexDirection: 'row' }}>
      <View style={[index == 0 ? styles.item2 : styles.item, { borderLeftWidth: 2, width: 120, backgroundColor: '#a6a6a6' }]}>
        <Text style={[styles.itemText, { color: '#fff' }]}>{item.times}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: '#d9d9d9' }]}>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend] }]}>{item.no1}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[(item.legend == 8 || item.legend == 7 || item.legend == 6) ? item.legend : 1] }]}>
        <Text style={[styles.itemText, { color: Tcolors[(item.legend == 8 || item.legend == 7 || item.legend == 6) && item.legend] }]}>{item.no2}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[(item.legend == 8 || item.legend == 7) ? item.legend : 1] }]}>
        <Text style={[styles.itemText, { color: Tcolors[(item.legend == 8 || item.legend == 7) && item.legend] }]}>{item.no3}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend] }]}>{item.no4}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { backgroundColor: colors[item.legend == 8 ? item.legend : 1] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend == 8 && item.legend] }]}>{item.no5}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { width: 300, backgroundColor: colors[item.legend] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend] }]}>{item.name}</Text>
      </View>
      <View style={[index == 0 ? styles.item2 : styles.item, { width: 120, backgroundColor: colors[item.legend] }]}>
        <Text style={[styles.itemText, { color: Tcolors[item.legend] }]}>{(parseInt(item.no1) + parseInt(item.no2) + parseInt(item.no3) + parseInt(item.no4) + parseInt(item.no5)) / 5}</Text>
      </View>

    </View>
  )

  imageContainer() {
    // const myResults = this.props.results;
    return (
        <ScrollView horizontal style={{ marginTop: height }} >
          <ViewShot
            style={{ height: 176 + (myResults.length * 58) }}
            ref="full"
            options={{ format: this.state.options.format, quality: this.state.options.quality }}
          >
            <View>
              <View style={{ flexDirection: 'row', }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, borderTopWidth: 2, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'START'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0, borderTopWidth: 2, alignItems: 'flex-start', paddingLeft: 10, backgroundColor: '#d9d9d9' }]}>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left' }]}>{Cache.Meeting + ' : Track '+ Cache.Track +' - ' + Cache.Rail}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'TIME'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0, justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#d9d9d9' }]}>
                  <Text style={[styles.itemText, { color: '#111', flex: 1 }]}>{Cache.Tipster}</Text>
                  <Text style={[styles.itemText, { color: '#111', flex: 1 }]}>{Cache.Aff}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.item, { borderLeftWidth: 2, borderBottomWidth: 0, width: 120, backgroundColor: '#a6a6a6' }]}>
                  <Text style={[styles.itemText, { color: '#fff' }]}>{'AEST'}</Text>
                </View>
                <View style={[styles.item, { width: 876, borderBottomWidth: 0, justifyContent: 'flex-start', flexDirection: 'row', paddingLeft: 10, backgroundColor: '#d9d9d9' }]}>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 76 }]}>{'Race'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 410 }]}>{'Selections'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', flex: 1 }]}>{'THE HAMMER\'s Tips'}</Text>
                  <Text style={[styles.itemText, { color: '#111', textAlign: 'left', width: 70 }]}>{'Odds'}</Text>
                </View>
              </View>
            </View>
            <FlatList
              data={myResults}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem}
            />
          </ViewShot>
        </ScrollView>
    )
  }

  captureViewShoot = async () => {
    this.setState({ isWaiting : true})
    let that = this;
    this.refs.full.capture().then(async uri => {

      let formData = new FormData();
      formData.append('upfile', {
        uri,
        name: `photo.jpg`,
        type: `image/jpeg`,
      });

      var headers = { Accept: 'application/json', "Content-Type": "multipart/form-data" };

      axios.post(SERVICE_API_URL + "json/upload_image.php", formData, { headers: headers })
        .then(function (response) {
          console.log('** good **', response.data)
          that.setState({ img: response.data, isWaiting: false })
        })
        .catch(function (error) {
          this.setState({ isWaiting : false})
          console.log('** error **', error)
        });

    });
  }

  render() {
    const { img, isWaiting } = this.state
    return (
      <View style={{ flex: 1 }}>
        <Header
          title={'Results'}
          rightElement={(
            <MaterialCommunityIcons
              name="knife-military"
              color={'#fff'}
              size={p(24)}
            />)}
        />

        <TouchableOpacity
          onPress={async () => await this.captureViewShoot()}
          style={{ marginVertical: p(15), alignSelf: 'center', padding: p(12), borderWidth: 2, borderColor: 'grey' }}
        >
          <Text style={{ fontSize: p(15) }}>View Result</Text>
        </TouchableOpacity>

        { img && <Image source={{ uri: img }} style={styles.img} resizeMode={'contain'}/>}

        { isWaiting && <ActivityIndicator size={p (30)} color={'#2699FB'} style={{ alignSelf: 'center'}}/>}

        {this.imageContainer()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 76,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 18,
    borderColor: '#111',
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  item2: {
    width: 76,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 18,
    borderColor: '#111',
    borderWidth: 2,
    borderLeftWidth: 0
  },
  itemText: {
    color: '#111',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center'
  },
  img: {
    margin: p(12),
    width: width - p(24),
    height: p(240)
  }
})

