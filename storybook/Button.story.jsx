import React, { useState } from 'react';

import { THEME } from '../common';
import { Button, Row, Text, Viewport } from '../components';
import { Content, Header } from './components';

const defaults = { marginRight: 'S', marginVertical: 'XS' };
const { COLOR, SPACE } = THEME;

export const ButtonStory = (props) => {
  const [busy, setBusy] = useState(undefined);

  const handleBusy = () => setBusy(busy ? undefined : 3000);

  return (
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
          <Button {...defaults} size="L" text="large" />
          <Button {...defaults} text="default" />
          <Button {...defaults} size="S" text="small" />
        </Row>

        <Text bold>.borderRadius</Text>
        <Row marginBottom="M">
          <Button {...defaults} size="L" text="large" borderRadius={SPACE.M} />
          <Button {...defaults} text="default" borderRadius={SPACE.M} />
          <Button {...defaults} size="S" text="small" borderRadius={SPACE.S} />
        </Row>

        <Text bold>.busy</Text>
        <Row marginBottom="M">
          <Button {...defaults} busy={busy} color={COLOR.BRAND} onPress={handleBusy} size="L" text="large" />
          <Button {...defaults} busy={busy} color={COLOR.SUCCESS} onPress={handleBusy} text="default" />
          <Button {...defaults} busy={busy} color={COLOR.ERROR} onPress={handleBusy} size="S" text="small" />
        </Row>

        <Text bold>.color</Text>
        <Row marginBottom="M">
          <Button {...defaults} size="L" color={COLOR.BRAND} text="brand" />
          <Button {...defaults} color={COLOR.SUCCESS} text="success" />
          <Button {...defaults} size="S" color={COLOR.ERROR} text="error" />
        </Row>

        <Text bold>.colorText</Text>
        <Row marginBottom="M">
          <Button {...defaults} size="L" colorText={COLOR.BLACK} text="black" />
          <Button {...defaults} colorText={COLOR.WHITE} text="white" />
          <Button {...defaults} size="S" colorText={COLOR.WHITE} text="white" />
        </Row>

        <Text bold>.disabled</Text>
        <Row marginBottom="M">
          <Button {...defaults} size="L" disabled text="large" />
          <Button {...defaults} disabled text="default" />
          <Button {...defaults} size="S" disabled text="small" />
        </Row>

        <Text bold>.icon</Text>
        <Row marginBottom="M">
          <Button {...defaults} icon="album" size="L" text="album" />
          <Button {...defaults} icon="check" text="check" />
          <Button {...defaults} icon="alarm" size="S" text="alarm" />
        </Row>

        <Text bold>.outlined</Text>
        <Row marginBottom="M">
          <Button {...defaults} color={COLOR.BRAND} outlined size="L" text="brand" />
          <Button {...defaults} color={COLOR.SUCCESS} outlined text="success" />
          <Button {...defaults} color={COLOR.ERROR} outlined size="S" text="error" />
        </Row>

        <Text bold>.onPress</Text>
        <Row marginBottom="M">
          <Button {...defaults} text="press me" onPress={() => console.log('<Button> onPress')} />
        </Row>

        <Text bold>.onPress && delay</Text>
        <Row marginBottom="M">
          <Button {...defaults} delay={1000} size="L" text="press me" onPress={() => {}} />
          <Button {...defaults} delay={1000} text="press me" onPress={() => {}} />
          <Button {...defaults} delay={1000} size="S" text="press me" onPress={() => {}} />
        </Row>

        <Text bold>.wide</Text>
        <Row marginBottom="M">
          <Button {...defaults} wide text="black" />
        </Row>
      </Content>
    </Viewport>
  );
};
