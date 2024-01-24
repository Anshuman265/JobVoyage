import {useState, React} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'

import {useRouter} from 'expo-router';
import {icons,SIZES } from '../../../constants';

const jobTypes = ["Full-time","Part-time","Contractor"];

import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setactiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Anshuman!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        {/* The below component is for the search input */}
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search} 
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => {(
            <TouchableOpacity
            style={styles.tab(activeJobType,item)}
          > 
            <Text>{item}</Text>
          </TouchableOpacity>
          )
          }}
        />
      </View>
    </View>
  )
}

export default Welcome