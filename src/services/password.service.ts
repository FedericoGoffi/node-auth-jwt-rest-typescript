import bcrypt from "bcrypt";

const SALT_ROUNDS: number = 10;

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

//Read and compare with database hash
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
   return await bcrypt.compare(password, hash); 
}