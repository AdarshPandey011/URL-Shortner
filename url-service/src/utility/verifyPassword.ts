import bcrypt from "bcrypt";

export function verifyPassword({ password, hashedPassword }: { password: string; hashedPassword: string }) {
    return bcrypt.compareSync(password, hashedPassword);
}