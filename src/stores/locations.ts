import { defineStore } from "pinia";
import type { ILocation } from "@/models/location";
import { getLocationList } from "@/api/api";

export const useLocationsStore = defineStore({
  id: "locations",
  state: () => ({
    locations: [] as ILocation[],
  }),
  getters: {},
  actions: {
    async setLocations() {
      this.locations = await getLocationList();
    },
  },
});
