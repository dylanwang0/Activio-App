import axios from "axios";

const API_URL = "/planDrafts/";

const getPlanDraft = async (username) => {
  const { data } = await axios.get(API_URL + username.username);
  return data;
};

const createPlanDraft = async (username) => {
  const { data } = await axios.post(API_URL, username);
  return data;
};

const updatePlanDraft = async (planData) => {
  const { data } = await axios.put(API_URL + "update", planData.data);
  planData.navigate("/planner");
  return data;
};

const removePlanDraft = async (planData) => {
  const { data } = await axios.put(API_URL + "remove", planData);
  return data;
};

const planService = {
  createPlanDraft,
  getPlanDraft,
  updatePlanDraft,
  removePlanDraft,
};

export default planService;