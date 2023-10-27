import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

import React, {useState, useEffect} from 'react';

//import material icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import api services
import Api from '../../services/Api';

//import component loading
import Loading from '../../components/Loading';

//import component list photo
import ListPhoto from '../../components/ListPhoto';

//import component list post

export default function PhotosScreen() {
  //init state
  const [photos, setPhotos] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);

  //method fetchDataPhotos
  const fetchDataPhotos = async () => {
    //set loading true
    setLoadingPhotos(true);

    await Api.get('/api/public/photos').then(response => {
      //assign data to state
      setPhotos(response.data.data.data);

      //assign nextPageURL to state
      setNextPageURL(response.data.data.next_page_url);

      //set loading false
      setLoadingPhotos(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call method "fetchDataPhotos"
    fetchDataPhotos();
  }, []);

  //method getNextData
  const getNextData = async () => {
    //set loading true
    setLoadingLoadMore(true);

    if (nextPageURL != null) {
      await Api.get(nextPageURL).then(response => {
        //assign data to state
        setPhotos([...posts, ...response.data.data.data]);

        //assign nextPageURL to state
        setNextPageURL(response.data.data.next_page_url);

        //set loading false
        setLoadingLoadMore(false);
      });
    } else {
      // no data next page
      setLoadingLoadMore(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={{padding: 15}}>
        {/* posts / berita */}
        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="image-multiple"
            style={styles.labelIcon}
            size={20}
          />
          <Text style={styles.labelText}>GALERI FOTO</Text>
        </View>
        <View>
          {loadingPhotos ? (
            <Loading />
          ) : (
            <>
              <FlatList
                style={styles.container}
                numColumns={2}
                data={photos}
                renderItem={({item, index, separators}) => (
                  <ListPhoto data={item} index={index} />
                )}
                eyExtractor={item => item.id}
                scrollEnabled={false}
                onEndReached={getNextData}
                onEndReachedThreshold={0.5}
              />
              {loadingLoadMore ? <Loading /> : null}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },

  labelIcon: {
    marginRight: 5,
    color: '#333333',
  },

  labelText: {
    color: '#333333',
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },
});
