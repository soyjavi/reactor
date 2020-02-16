import React from 'react';

import { THEME } from '../common';
import { Button, Row, Text, Viewport } from '../components';

import { Content, Header } from './components';

const defaults = { marginRight: 'S', marginVertical: 'XS' };
const { COLOR, SPACE } = THEME;

export const ButtonStory = (props) => (
  <Viewport {...props} scroll={false}>
    <Header {...props} title="buttons" />
    <Content>
      <Text headline>Button</Text>
      <Text marginBottom="M">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi molestiae omnis dolorum nostrum animi
        cum sunt distinctio itaque suscipit ex, debitis laudantium praesentium in dicta, quos reiciendis facilis quia.
      </Text>

      <Text bold>.size</Text>
      <Row marginBottom="M">
        <Button {...defaults} size="L" title="large" />
        <Button {...defaults} title="default" />
        <Button {...defaults} size="S" title="small" />
      </Row>

      <Text bold>.activity</Text>
      <Row marginBottom="M">
        <Button {...defaults} activity size="L" title="large" />
        <Button {...defaults} activity title="default" />
        <Button {...defaults} activity size="S" title="small" />
      </Row>

      <Text bold>.borderRadius</Text>
      <Row marginBottom="M">
        <Button {...defaults} size="L" title="large" borderRadius={SPACE.M} />
        <Button {...defaults} title="default" borderRadius={SPACE.M} />
        <Button {...defaults} size="S" title="small" borderRadius={SPACE.S} />
      </Row>

      <Text bold>.color</Text>
      <Row marginBottom="M">
        <Button {...defaults} size="L" color={COLOR.BRAND} title="brand" />
        <Button {...defaults} color={COLOR.SUCCESS} title="success" />
        <Button {...defaults} size="S" color={COLOR.ERROR} title="error" />
      </Row>

      <Text bold>.colorText</Text>
      <Row marginBottom="M">
        <Button {...defaults} size="L" colorText={COLOR.BLACK} title="black" />
        <Button {...defaults} colorText={COLOR.WHITE} title="white" />
        <Button {...defaults} size="S" colorText={COLOR.WHITE} title="white" />
      </Row>

      <Text bold>.disabled</Text>
      <Row marginBottom="M">
        <Button {...defaults} size="L" disabled title="large" />
        <Button {...defaults} disabled title="default" />
        <Button {...defaults} size="S" disabled title="small" />
      </Row>

      <Text bold>.icon</Text>
      <Row marginBottom="M">
        <Button {...defaults} icon="album" size="L" title="album" />
        <Button {...defaults} icon="check" title="check" />
        <Button {...defaults} icon="alarm" size="S" title="alarm" />
      </Row>

      <Text bold>.outlined</Text>
      <Row marginBottom="M">
        <Button {...defaults} color={COLOR.BRAND} outlined size="L" title="brand" />
        <Button {...defaults} color={COLOR.SUCCESS} outlined title="success" />
        <Button {...defaults} color={COLOR.ERROR} outlined size="S" title="error" />
      </Row>

      <Text bold>.onPress</Text>
      <Row marginBottom="M">
        <Button {...defaults} title="press me" onPress={() => alert('<Button> onPress')} />
      </Row>

      <Text bold>.wide</Text>
      <Row marginBottom="M">
        <Button {...defaults} wide title="black" />
      </Row>
    </Content>
  </Viewport>
);
