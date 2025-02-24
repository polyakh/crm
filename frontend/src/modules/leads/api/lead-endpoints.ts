export const LEAD_ENDPOINTS = {
  getLead: (id: number | string) => `/lead/${id}`,
  getAllLeads: "/leads",
  createLead: "/leads",
  updateLead: (id: number | string) => `/lead/${id}`,
};
