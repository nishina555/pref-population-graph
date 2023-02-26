import axiosInstance from "./index";

class Populations {
  static async getOne(prefCode: number) {
    const response = await axiosInstance.get(`/population/sum/estimate?prefCode=${prefCode}&cityCode=-`).catch((error) => {
      throw new Error(error.message);
    });
    return response;
  }
}
export default Populations;
