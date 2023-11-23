export interface VehicleData {
    name?: string;
    email?: string;
  }
  
  export interface VCardData extends VehicleData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address?: string;
  }
  
  export interface URLData extends VehicleData {
    url: string;
  }
  
  export interface WiFiData extends VehicleData {
    ssid: string;
    password: string;
  }
  
  export interface LocationData extends VehicleData {
    latitude: string;
    longitude: string;
    altitude: string;
  }
  
  export interface EventData extends VehicleData {
    summary: string;
    start: string;
    end: string;
    location: string;
    description: string;
  }