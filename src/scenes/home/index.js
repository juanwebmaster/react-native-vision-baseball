import React, {useState, useEffect} from 'react';
import FrequentUsers from '_organisms/FrequentUsers';
import {get_bodybkcolor_data} from '../../apis';
import RecognitionTrainCarousel from '_organisms/RecognitionTrainCarousel';
import SafeAreaView from 'react-native-safe-area-view';
import {Header} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import CalendarData from '_organisms/CalendarData';
import UserLoginData from '_organisms/UserLoginData';
import CustomFooter from '_organisms/CustomFooter';
import HeaderIcon from '_atoms/HeaderIcon';
import TutorialsCarousel from '_organisms/TutorialsCarousel';
import TopMenuCarousel from '_organisms/TopMenuCarousel';
import PopPitchersCarousel from '_organisms/PopPitchersCarousel';
import DrillsCarousel from '_organisms/DrillsCarousel';
import {View, StyleSheet, ScrollView} from 'react-native';
import ProLevelCarousel from '_organisms/ProLevelCarousel';
import SchoolLevelCarousel from '_organisms/SchoolLevelCarousel';
import YouthLevelCarousel from '_organisms/YouthLevelCarousel';

const Home = ({name, navigation}) => {
  
  const [bkColor, setBkColor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function get_color() {
      const bColor = await get_bodybkcolor_data(1206);
      setBkColor(bColor);
      setIsLoading(false);
    }
    get_color();
  }, []);

  return (
    <SafeAreaView style={styles.container} style={{backgroundColor: bkColor}}>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Header
        rightComponent={{
          icon: 'menu',
          color: '#fff',
          height: '150%',
        }}
        leftComponent={HeaderIcon}
      />
      <ScrollView style={styles.scrollView} scrollEnabled={true}>
        <UserLoginData />
        <TopMenuCarousel navigation={navigation} />
        <View
          style={{
            marginTop: 60,
            borderBottomWidth: 2,
            borderColor: '#888888',
          }}></View>
        <TutorialsCarousel />
        <PopPitchersCarousel />
        <DrillsCarousel />
        <ProLevelCarousel />
        <SchoolLevelCarousel />
        <YouthLevelCarousel />
        <RecognitionTrainCarousel />
        <CalendarData />
        <FrequentUsers />
        <CustomFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sliderContainer: {
    margin: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  imageBackgroundStyle: {
    height: 30,
    width: 40,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default Home;
