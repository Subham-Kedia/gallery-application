import { useEffect, useState } from "react";
import { FlatList, Image, ActivityIndicator, View } from "react-native";
import { styles } from "./style";

import FLICKERAPI from "../../Services/flicker";

const Body = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    setLoading(true)
    FLICKERAPI.getRecentPhotos(page, 10)
      .then((res) => {
        const data = JSON.parse(res.data.substring(2, res.data.length - 1));
        setPhotos(data.photos.photo);
        setPage(page + 1)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadMore = () => {
    if(!loading){
      setLoading(true);
      FLICKERAPI.getRecentPhotos(page, 10)
        .then((res) => {
          const data = JSON.parse(res.data.substring(2, res.data.length - 1));
          setPhotos((prev) => [...prev, ...data.photos.photo]);
          setPage(page + 1);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleRefresh = () => {
    setRefreshing(true);
    FLICKERAPI.getRecentPhotos(1, 10)
      .then((res) => {
        const data = JSON.parse(res.data.substring(2, res.data.length - 1));
        setPhotos(data.photos.photo);
        setPage(1)
        setRefreshing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <FlatList
      data={photos}
      onEndReached={loadMore}
      keyExtractor={(item, index) => index}
      renderItem={({item}) =>
        <View  style={styles.imageContainer}>
          <Image
            style={styles.image}
            src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
            resizeMode="cover"
          />
        </View>
      }
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ListFooterComponent={loading && <ActivityIndicator/>}
      onEndReachedThreshold={0.5}
      style={styles.container}
    />
  );
};

export default Body;
