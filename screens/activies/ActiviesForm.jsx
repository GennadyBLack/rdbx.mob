import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import Form from "../../components/validation/Form";
import apis from "../../api/api";
import s from "../../helpers/styleHelper";
import Drop from "../../components/validation/Drop";

const ActiviesForm = () => {
  const [city, setCity] = useState([]);
  const [category, setCategory] = useState([]);

  const getCities = async () => {
    const pre = (await apis.publics.get_all_city()).data.data.map((item) => {
      return { label: item.attributes.title, value: item.id };
    });
    setCity(pre);
  };
  const getCategory = async () => {
    const pre = (await apis.publics.get_all_category()).data.data.map(
      (item) => {
        return { label: item.attributes.title, value: item.id };
      }
    );
    setCategory(pre);
  };

  useEffect(() => {
    getCities();
    getCategory();
  }, []);
  const createActivity = async (data) => {
    console.log(data);
    await apis.methodts.add_one_activity(data).then((res) => {
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

        {/* <Form.Input
          style={s.mb_3}
          name="contact_city"
          placeholder="contact_city"
          label="contact_city"
          mode="outlined"
        /> */}

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

        <Form.Date
          style={s.mb_3}
          name="dates"
          placeholder="Date"
          label="Date"
          mode="outlined"
        />
        <Form.DropDown
          style={s.mb_3}
          options={[...category]}
          name="category"
          placeholder="Категория"
          label="Категория"
          mode="outlined"
        />
        <Form.DropDown
          style={s.mb_3}
          options={[...city]}
          name="contact_city"
          placeholder="Контактный город"
          label="Контактный город"
          mode="outlined"
        />
      </Form>
    </ScrollView>
  );
};

export default ActiviesForm;
