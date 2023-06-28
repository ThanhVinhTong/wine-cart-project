import { Schema, model, models } from "mongoose";

const AccountSchema = new Schema({
    user_name: String,
    email: String,
    password: String,
})

const Account = models?.Account || model('Account', AccountSchema);

export default Account;