import { Device } from './device'

export class User {
  id: number;
  name: string;
  email: string;
  devices: Device[];
}