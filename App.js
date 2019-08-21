import React, { Component, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import { LAYOUT, THEME } from './common';
import {
  Button,
  Calendar,
  ListingCard,
  Text,
  Video,
  Viewport,
  Slider,
} from './components';
import { Consumer, Provider } from './context';
import PKG from './package.json';

if (typeof global.self === 'undefined') global.self = global;

const { SPACE } = THEME;
const ItemListingCard = ({ data }) => <ListingCard {...data} />; // eslint-disable-line
const video = 'https://coverr.co/s3/mp4/Cloud_Surf.mp4';
const youtube = 'https://www.youtube.com/cx4MxQcD8Fk'; // eslint-disable-line
const vimeo = 'https://player.vimeo.com/video/225434434'; // eslint-disable-line
const LIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." // eslint-disable-line

const DICTIONARY = {
  'es-ES': {
    GREETINGS: 'Hola Mundo...',
  },

  'en-EN': {
    GREETINGS: 'Hello World...',
  },
};

const styles = StyleSheet.create({
  container: {
    ...LAYOUT.STYLE.CENTERED,
    flex: 1,
    padding: SPACE.XS,
    backgroundColor: 'rgba(0,255,0,0.25)',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [...Array(16).keys()]
        .map((index) => ({
          category: `Category ${index}`,
          title: `Title ${index}`,
          rating: { value: index + 1 },
          image: `https://picsum.photos/320/200?image=1${index + 1}`,
        })),
      viewport: false,
    };
  }

  render() {
    const { state: { dataSource, viewport } } = this;

    return (
      <Provider dictionary={DICTIONARY} language="en-EN">
        <View style={styles.container}>
          <Viewport visible scroll style={LAYOUT.STYLE.CENTERED}>
            <Consumer>
              { ({ l10n }) => (
                <Fragment>
                  <Text headline level={5}>
                    {PKG.name}
                  </Text>
                  <Text>
                    {PKG.version}
                  </Text>
                  <Text>
                    {`l10n: ${l10n.GREETINGS}`}
                  </Text>
                </Fragment>
              )}
            </Consumer>
            <Button title="Second viewport" onPress={() => this.setState({ viewport: true })} />
            <Slider dataSource={dataSource} item={ItemListingCard} navigation steps={2} />

            <Calendar />
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
            <Text>
              {LIPSUM}
            </Text>
          </Viewport>

          <Viewport
            visible={viewport}
            onBack={() => this.setState({ viewport: false })}
            style={{ backgroundColor: 'red' }}
          >
            <Video
              autoPlay
              loop
              height={200}
              width={320}
              source={video}
              onLoad={() => console.log('onload')}
            />
            <Button title="Back" onPress={() => this.setState({ viewport: false })} />
          </Viewport>
        </View>
      </Provider>
    );
  }
}
