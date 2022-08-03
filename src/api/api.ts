import axios from "axios";
import type { ISearchForm } from "@/models/searchForm";
// import type { IFeaturedItem } from "@/models/featuredItem";

const BASE_URL = "https://module5.7t33n.ru/";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

export const getLocationList = async () => {
  try {
    const response = await api.get("hotel/location/");

    return response.data;
  } catch (error: any) {
    console.error(error.data);
  }
};

export const getBannersData = async () => {
  try {
    const response = await api.get("banners/");

    return response.data;
  } catch (error: any) {
    console.error(error.data);
  }
};

export const getLatestItems = async () => {
  try {
    const response = await api.get("hotel/latest/");

    return response.data;
  } catch (error: any) {
    console.error(error.data);
  }
};

export const getFeaturedItems = async () => {
  try {
    const response = await api.get("hotel/featured/");

    return response.data;
  } catch (error: any) {
    console.error(error.data);

    return error.data;
  }
};

export const postSearchFilter = async (formData: ISearchForm) => {
  try {
    const response = await api.post("hotel/filter/", { ...formData });

    return response.data;
  } catch (error: any) {
    console.error(error.data);

    return error.data;
  }
};

export const getItemById = async (id: string) => {
  try {
    const response = await api.get(`hotel/detail/${id}/`);

    return response.data;
  } catch (error: any) {
    console.error(error.data);

    return error.data;
  }
};
