import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./style";

import FLICKERAPI from "../../Services/flicker";
import Footer from "../Footer";

const Body = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    FLICKERAPI.getRecentPhotos(1, 10)
      .then((res) => {
        const data = JSON.parse(res.data.substring(2, res.data.length - 1));
        setPhotos(data.photos.photo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      {photos.map((photo) => {
        return (
          <View style={styles.imageContainer} key={photo.id}>
            <Image
              style={styles.image}
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              resizeMode="cover"
            />
          </View>
        );
      })}
      <Footer />
    </View>
  );
};

export default Body;
