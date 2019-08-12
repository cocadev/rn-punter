import React, { Component } from 'react'
import { Text, View, FlatList, TextInput, StyleSheet, ScrollView, Dimensions, Image, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { p } from '../Config/normalize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SERVICE_API_URL } from '../Config/config'
import { colors, Tcolors } from '../Config/config'
// import { myResults } from "../Config/config"
import { showMessage } from "react-native-flash-message"
import Cache from '../Config/cache'
import ViewShot from 'react-native-view-shot'
import Header from '../Components/Header'
import axios from 'axios'
import DateTimePicker from "react-native-modal-datetime-picker"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      res: null,
      hidden: true,
      title: 'Test',
      img: null,
      isWaiting: false,
      options: {
        format: "jpg",
        quality: 1
      },
      mydate: new Date().toISOString().substring(0, 10),
      isDateTimePickerVisible: false
    }
  }

  async componentDidMount(){
    await this.captureViewShoot()
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ mydate: date.toISOString().substring(0, 10) })
    this.hideDateTimePicker();
  };

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
        <Text style={[styles.itemText, { color: Tcolors[item.legend] }]}>{item.odds}</Text>
      </View>

    </View>
  )

  imageContainer() {
    const myResults = this.props.results;
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
                <Text style={[styles.itemText, { color: '#111', textAlign: 'left' }]}>{Cache.Meeting + ' : Track ' + Cache.Track + ' - ' + Cache.Rail}</Text>
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
    this.setState({ isWaiting: true })
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
          that.setState({ isWaiting: false })
          console.log('** error **', error)
        });

    });
  }

  dataPost() {
    this.setState({ isWaiting: true })
    let that = this;

    var post_title = this.state.title;
    var post_date = this.state.mydate;
    var post_image = this.state.img && this.state.img.substring(27);

    axios.post(SERVICE_API_URL + "json/add_post.php", { post_title, post_date, post_image })
      .then(function (response) {
        console.log('** success post**', response.data)
        that.setState({ isWaiting: false })
        showMessage({
          message: "Success",
          description: "Posted!",
          type: "success",
          icon: 'success'
        });
      })
      .catch(function (error) {
        that.setState({ isWaiting: false })
        console.log('** fail post **', error)
      });
  }

  render() {

    const { img, isWaiting, mydate } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Header
          title={'Results'}
          rightElement={(
            <MaterialCommunityIcons
              name="knife-military"
              color={'#2699FB'}
              size={p(24)}
            />)}
        />

        <View style={{ marginTop: p(22), marginHorizontal: p(16) }}>
          <Text style={styles.titleText}>Title</Text>

          <TextInput
            style={[styles.textInput, { color: '#111'}]}
            placeholder={'POST TITLE'}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
          />

          <Text style={styles.titleText}>Title</Text>

          <TouchableOpacity 
            style={[styles.textInput, { color: '#111'}]}
            onPress={this.showDateTimePicker}
          >
            <Text style={{ fontSize: p(15), color: '#2699FB',}}>{mydate}</Text>
          </TouchableOpacity>

          <Text style={styles.titleText}>Post Image</Text>

          {img && <Image source={{ uri: img }} style={styles.img} resizeMode={'contain'} />}

          {isWaiting && <ActivityIndicator size={p(30)} color={'#2699FB'} style={{ alignSelf: 'center' }} />}

          {
            img && img.substring(0, 4) === 'http' &&
            <TouchableOpacity
              onPress={async () => this.dataPost()}
              style={{ marginTop: p(5), width: p(150), alignSelf: 'center', padding: p(12), borderWidth: 2, borderColor: 'grey', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontSize: p(15) }}>Post</Text>
            </TouchableOpacity>
          }

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'date'}
          />

          {this.imageContainer()}

        </View>


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
    // margin: p(12),
    width: width - p(32),
    height: p(240)
  },
  titleText: {
    fontSize: p(17),
    marginTop: p(8),
    color: '#2699FB',
  },
  textInput: {
    height: p(46),
    marginVertical: p(9),
    padding: p(12),
    fontSize: p(15),
    color: '#2699FB',
    borderColor: '#2699FB',
    borderWidth: 1
  },
})

