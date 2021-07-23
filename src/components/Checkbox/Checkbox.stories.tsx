import React from "react";

import { Form, FormGroup } from "../Form";
import { Checkbox } from "./index";
import { Button } from "../Button";

const CheckboxStory = {
  title: "Checkbox",
  component: Checkbox,
};

export const Basic = () => (
  <Form
    onSubmit={(evt) => {
      console.log(evt.currentTarget);
    }}
  >
    <FormGroup>
      <Checkbox
        id="1"
        name="role"
        value="1"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Оператор
      </Checkbox>
    </FormGroup>

    <FormGroup>
      <Checkbox
        id="2"
        name="role"
        value="2"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Руководитель отделения
      </Checkbox>
    </FormGroup>

    <FormGroup>
      <Checkbox
        id="3"
        name="role"
        value="3"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Куратор
      </Checkbox>
    </FormGroup>

    <FormGroup>
      <Checkbox
        id="4"
        name="role"
        value="4"
        onChange={(evt) => {
          console.log(evt.currentTarget.value);
        }}
      >
        Супервайзер
      </Checkbox>
    </FormGroup>

    <FormGroup>
      <Button size="sm" role="submit">
        Отправить
      </Button>
    </FormGroup>
  </Form>
);

export default CheckboxStory;
