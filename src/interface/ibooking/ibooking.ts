import { TFlat } from "../tflat/tflat";

export interface IBooking {
  flat: TFlat;
  id: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}
