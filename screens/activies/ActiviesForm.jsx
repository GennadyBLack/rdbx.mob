import React from "react";
import { View, ScrollView, Text } from "react-native";
import Form from "../../components/validation/Form";
import api from "../../api";
import s from "../../helpers/styleHelper";

const ActiviesForm = () => {
  const createActivity = async (data) => {
    console.log(api.methodts, "api.methodts");
    await api.methodts.add_one_activity(data).then((res) => {
      console.log(res);
    });
  };
  return (
    <ScrollView>
      <Form onSubmit={createActivity}>
        <Form.Input
          style={s.mb_3}
          name="type"
          placeholder="Type"
          label="Type"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="title"
          placeholder="Название"
          label="Название"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="description"
          placeholder="Описание"
          label="Описание"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="contact_email"
          placeholder="Контактная почта"
          label="Контактная почта"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="contact_phone"
          placeholder="Контактный телефон"
          label="Контактный телефон"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="address"
          placeholder="Адрес"
          label="Адрес"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="address_description"
          placeholder="Описание к адресу"
          label="Описание к адресу"
          mode="outlined"
        />

        <Form.Input
          style={s.mb_3}
          name="contact_city"
          placeholder="Контактный город"
          label="Контактный город"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="contact_city"
          placeholder="contact_city"
          label="contact_city"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="category"
          placeholder="Категория"
          label="Категория"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="general_image"
          placeholder="Главное изображение"
          label="Главное изображение"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="item_image"
          placeholder="item_image"
          label="item_image"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="ageRating"
          placeholder="Возрастной рейтинг"
          label="Возрастной рейтинг"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="organizer"
          placeholder="Организатор"
          label="Организатор"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="dates"
          placeholder="Даты проведения"
          label="Даты проведения"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="questions"
          placeholder="Вопрос"
          label="Вопрос"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="gallery_array"
          placeholder="gallery_array"
          label="gallery_array"
          mode="outlined"
        />

        <Form.Input
          style={s.mb_3}
          name="lat"
          placeholder="lat"
          label="lat"
          mode="outlined"
        />
        <Form.Input
          style={s.mb_3}
          name="lon"
          placeholder="lon"
          label="lon"
          mode="outlined"
        />

        <Form.Select
          style={s.mb_3}
          options={[{ label: "123", value: 12 }]}
          name="lon"
          placeholder="lon"
          label="lon"
          mode="dropdown"
        />
      </Form>
    </ScrollView>
  );
};

export default ActiviesForm;
