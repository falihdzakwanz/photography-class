/* eslint-disable @typescript-eslint/no-unused-vars */
import { addData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from "bcrypt";

export async function signUp(userData: {
  email: string;
  fullname: string;
  phone: string;
  password: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image?: string;
}) {
  const data = await retrieveDataByField("users", "email", userData.email);

  if (data.length > 0) {
    return false;
  }

  userData.password = await bcrypt.hash(userData.password, 10);
  userData.createdAt = new Date();
  userData.updatedAt = new Date();
  userData.image = "";

  try {
    await addData("users", userData);
    return true;
  } catch (error) {
    return false;
  }
}

export async function signIn(email: string) {
  const data = await retrieveDataByField("users", "email", email);

  if (data) {
    return data[0];
  } else {
    return null;
  }
}