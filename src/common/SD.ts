export const baseUrl = "https://879a-202-28-123-199.ngrok-free.app";
export const baseUrlAPI = baseUrl + "/api/";

export const userTest = "c0e47c85-17d5-40a8-b2b6-1ed6d89b7d97";

export enum SD_Roles {
  ADMIN = "admin",
  CUTOMER = "customer",
}

export enum SD_Status {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  BEING_COOKED = "Being Cooked",
  READY_FOR_PICKUP = "Ready for Pickup",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export enum SD_Categories {
  APPETIZER = "Appetizer",
  ENTREE = "Entree",
  DESSERT = "Dessert",
  BEVERAGES = "Beverages",
}

export enum SD_SortTypes {
  PRICE_LOW_HIGH = "Price Low - High",
  PRICE_HIGH_LOW = "Price High - Low",
  NAME_A_Z = "Name A - Z",
  NAME_Z_A = "Name Z - A",
}

export enum SD_PerPage {
  PERPAGE0 = "1",
  PERPAGE1 = "2",
  PERPAGE2 = "5",
  PERPAGE3 = "10",
  PERPAGE4 = "20",
}
