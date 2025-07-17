import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundOverlay}>
        <Text style={styles.heading}>About Us</Text>
        <View style={styles.content}>
          <Text style={styles.description}>
            Welcome to MovieMania, your ultimate destination for discovering and exploring movies. 
            Our platform provides a comprehensive collection of movie information, including 
            detailed descriptions, release years, genres, and more. Whether you're a film enthusiast 
            or just looking for something new to watch, MovieMania has something for everyone.
          </Text>
          <Text style={styles.subheading}>Featured Movies</Text>
          <View style={styles.movies}>
            <View style={styles.movie}>
              <Image
                source={{ uri: 'https://image.tmdb.org/t/p/original/kyeqWdyUXW608qlYkRqosgbbJyK.jpg' }}
                style={styles.moviePoster}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>Avatar</Text>
                <Text style={styles.movieDetails}>Year: 2009</Text>
                <Text style={styles.movieDetails}>Genre: Action, Adventure, Fantasy</Text>
                <Text style={styles.movieDescription}>A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.</Text>
              </View>
            </View>
            <View style={styles.movie}>
              <Image
                source={{ uri: 'https://image.tmdb.org/t/p/original/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg' }}
                style={styles.moviePoster}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>I Am Legend</Text>
                <Text style={styles.movieDetails}>Year: 2007</Text>
                <Text style={styles.movieDetails}>Genre: Drama, Horror, Sci-Fi</Text>
                <Text style={styles.movieDescription}>Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1137', // Background color
  },
  backgroundOverlay: {
    padding: 20,
    backgroundColor: 'white', // Light background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gold', // Heading color
  },
  content: {
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#e52165', // Text color
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gold', // Subheading color
  },
  movies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movie: {
    width: '48%',
    margin: '1%',
    borderWidth: 1,
    borderColor: '#e52165', // Border color
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#0d1137', // Movie card background color
  },
  moviePoster: {
    width: '100%',
    height: 200,
  },
  movieInfo: {
    padding: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold', // Movie title color
  },
  movieDetails: {
    fontSize: 14,
    color: '#eeeeee', // Movie details color
  },
  movieDescription: {
    fontSize: 14,
    color: '#eeeeee', // Movie description color
  },
});

export default About;
