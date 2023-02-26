import axiosInstance from "./index";

class Prefectures {
  static async getAll() {
    const response = await axiosInstance.get(`prefectures`).catch((error) => {
      throw new Error(error.message);
    });
    return response;
  }
}
export default Prefectures;
