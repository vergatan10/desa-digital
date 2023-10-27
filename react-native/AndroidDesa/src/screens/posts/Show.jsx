import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import React, {useState, useEffect} from 'react';

//import API
import Api from '../../services/Api';

//import material icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//import render html
import RenderHtml from 'react-native-render-html';

//import momen js
import moment from 'moment';
import 'moment/locale/id';

//import component loading
import Loading from '../../components/Loading';

export default function PostsShowScreen({route}) {
  //destruct slug
  const {slug} = route.params;

  //destruct width dimension
  const {width} = useWindowDimensions();

  //init state loading
  const [loadingPost, setLoadingPost] = useState(true);

  //init state
  const [post, setPost] = useState({});

  //method fetchDetailPost
  const fetchDetailPost = async () => {
    //set loading true
    setLoadingPost(true);

    await Api.get(`/api/public/posts/${slug}`).then(response => {
      //assign data to state
      setPost(response.data.data);

      //set loading false
      setLoadingPost(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call method "fetchDetailPost"
    fetchDetailPost();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{padding: 15}}>
        {loadingPost ? (
          <Loading />
        ) : (
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <View style={styles.containerUserAndDate}>
              <View style={styles.containerUser}>
                <MaterialIcons
                  name="person"
                  style={styles.iconUser}
                  size={18}
                />
                <Text style={styles.textUser}>{post.user.name}</Text>
              </View>
              <View style={styles.containerDate}>
                <MaterialIcons name="today" style={styles.iconDate} size={18} />
                <Text style={styles.textDate}>
                  {moment(post.created_at).format('LL')}
                </Text>
              </View>
            </View>
            <Image source={{uri: post.image}} style={styles.image} />
            <RenderHtml
              tagsStyles={{
                p: {
                  color: '#333333',
                  fontSize: 14,
                  margin: 0,
                  padding: 0,
                },
                br: {
                  margin: 0,
                  padding: 0,
                },
                h1: {color: '#333333', fontSize: 16, margin: 0, padding: 0},
                h2: {color: '#333333', fontSize: 16, margin: 0, padding: 0},
                h3: {color: '#333333', fontSize: 16, margin: 0, padding: 0},
              }}
              contentWidth={width}
              source={{html: post.content}}
              enableExperimentalMarginCollapsing={true}
              enableExperimentalGhostLinesPrevention={true}
            />
          </View>
        )}
        <View style={styles.marginToBottom}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },

  containerUserAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  containerUser: {
    flexDirection: 'row',
    marginTop: 10,
  },

  iconUser: {
    marginRight: 5,
    color: '#333333',
  },

  textUser: {
    fontSize: 13,
    color: '#333333',
    marginRight: 25,
  },

  containerDate: {
    flexDirection: 'row',
    marginTop: 10,
    paddingRight: 13,
  },

  iconDate: {
    marginRight: 5,
    color: '#333333',
  },

  textDate: {
    fontSize: 13,
    color: '#333333',
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 5,
    borderRadius: 10,
  },

  marginToBottom: {
    marginBottom: 20,
  },
});
