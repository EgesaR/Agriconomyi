import ApiManager from "./apiManager";

export const user_login = async data => {
  try{
    const result = await ApiManager("/user/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      data: data
    });
  } catch (error){
    return error.response.data
  }
}