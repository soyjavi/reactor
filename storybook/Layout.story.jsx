import React, { useState } from 'react';

import { THEME } from '../common';
import { Button, Col, Row, Text, Viewport } from '../components';

import { Content, Header } from './components';

const { COLOR, SPACE } = THEME;

const button = { color: 'black', marginVertical: 'XS', marginRight: 'XS', outlined: true };
const buttonProps = { ...button, size: 'S' };
const colProps = { padding: ['S', 'S', 'S', 'S'], style: { backgroundColor: COLOR.BASE } };
const colAutoProps = { ...colProps, width: 'auto', style: { backgroundColor: COLOR.BRAND } };
const rowProps = { marginBottom: 'M', style: { backgroundColor: COLOR.LIGHTEN, height: SPACE.XXL } };

export const LayoutStory = (props) => {
  const [align, setAlign] = useState('start');
  const [justify, setJustify] = useState('start');
  const [colAlign, setColAlign] = useState('start');

  const rowValues = { align, justify };
  const colValues = { align: colAlign };

  return (
    <Viewport {...props} scroll={false}>
      <Header {...props} title="Layout" />
      <Content>
        <Text headline>Row</Text>
        <Text bold>.align</Text>
        <Row marginBottom="M">
          {['start', 'center', 'end'].map((type) => (
            <Button {...buttonProps} key={type} onPress={() => setAlign(type)} outlined={type !== align} title={type} />
          ))}
        </Row>

        <Text bold>.justify</Text>
        <Row marginBottom="M">
          {['start', 'center', 'end', 'space'].map((type) => (
            <Button
              {...buttonProps}
              key={type}
              onPress={() => setJustify(type)}
              outlined={type !== justify}
              title={type}
            />
          ))}
        </Row>

        <Text headline>Col</Text>
        <Text bold>.align</Text>
        <Row marginBottom="M">
          {['start', 'center', 'end'].map((type) => (
            <Button
              {...buttonProps}
              key={type}
              onPress={() => setColAlign(type)}
              outlined={type !== colAlign}
              title={type}
            />
          ))}
        </Row>

        <Row {...rowProps}>
          <Text caption>Row</Text>
        </Row>

        <Row {...rowProps} {...rowValues}>
          <Col {...colProps} {...colValues}>
            <Text caption>Col</Text>
          </Col>
          <Col {...colProps} {...colValues}>
            <Text caption>Col</Text>
          </Col>
          <Col {...colProps} {...colValues}>
            <Text caption>Col</Text>
          </Col>
        </Row>

        <Row {...rowProps} {...rowValues}>
          <Col {...colProps} {...colValues}>
            <Text caption>Col</Text>
          </Col>
          <Col {...colAutoProps} {...colValues}>
            <Text caption color={COLOR.WHITE}>
              Col.auto
            </Text>
          </Col>
          <Col {...colProps} {...colValues}>
            <Text caption>Col</Text>
          </Col>
        </Row>

        <Row {...rowProps} {...rowValues}>
          <Col {...colAutoProps} {...colValues}>
            <Text caption color={COLOR.WHITE}>
              Col.auto
            </Text>
          </Col>
          <Col {...colAutoProps} {...colValues}>
            <Text caption color={COLOR.WHITE}>
              Col.auto
            </Text>
          </Col>
          <Col {...colAutoProps} {...colValues}>
            <Text caption color={COLOR.WHITE}>
              Col.auto
            </Text>
          </Col>
        </Row>
      </Content>
    </Viewport>
  );
};
