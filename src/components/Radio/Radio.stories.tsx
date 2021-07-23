import React from "react";

import { Form, FormGroup } from "../Form";
import { Radio } from "./index";
import { Button } from "../Button";

const RadioStory = {
  title: "Radio",
  component: Radio,
};

export const Basic = () => (
  <Form
    onSubmit={(evt) => {
      console.log(evt.currentTarget);
    }}
  >
    <FormGroup>
      <Radio
        id="1"
        name="role"
        value="1"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Оператор
      </Radio>
    </FormGroup>

    <FormGroup>
      <Radio
        id="2"
        name="role"
        value="2"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Руководитель отделения
      </Radio>
    </FormGroup>

    <FormGroup>
      <Radio
        id="3"
        name="role"
        value="3"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Куратор
      </Radio>
    </FormGroup>

    <FormGroup>
      <Radio
        id="4"
        name="role"
        value="4"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Супервайзер
      </Radio>
    </FormGroup>

    <FormGroup>
      <Button size="sm" role="submit">
        Отправить
      </Button>
    </FormGroup>
  </Form>
);

export default RadioStory;
