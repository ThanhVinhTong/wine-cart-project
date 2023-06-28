import { initMongoose } from "@/lib/mongoose";
import Account from "@/models/Account";
import { AccountProps } from "@/types";

async function getAccounts() {
    await initMongoose();

    let accounts = JSON.parse(JSON.stringify( await getAll() ));
    printAccounts(accounts)
}

function printAccounts(accounts: any) {
    console.log(`${accounts!.length} accounts found on the database`)
    for ( var i = 0 ; i < accounts.length ; i++ ) {
        console.log(accounts[i]['email'])
    }
}

async function getAll() {
    return await Account.find();
}

async function getByEmail( userEmail: string ) {
    return await Account.find({email: userEmail});
}

async function create( params: AccountProps ) {
    // validate
    if (await Account.findOne({ email: params.email })) {
        console.log( 'Email "' + params.email + '" existed' );
        return 0
    }
    const user = new Account(params);

    // save user
    await user.save();
    console.log(`create new account with email ${params.email}`)
    return 1
}

async function update( userEmail: string, params: any ) {
    const user = await Account.findOne({ email: userEmail });

    // validate
    if (!user) throw 'Account not found';

    // copy params properties to user
    params.email = user.email
    await Object.assign(user, params);

    await user.save();
    console.log(`update account with email ${userEmail}`)
}

async function _delete(userEmail: string) {
    await Account.findOneAndRemove({ email: userEmail });
}

export default getAccounts;