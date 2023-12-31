import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "data-xsksb" });
}

function credentials(){
    const apiKey =
      "eehr9IKwaVhUfgSkvu4FxohCIATY6avl7G5UKNWpjWggWlc4gyfBqTXBslUA5x90";
    return RealmWeb.Credentials.apiKey(apiKey);
}


async function CreateUserFromWeb(_id){
    const user = await app().logIn(credentials());
    return await user.functions.CreateUserFromWeb(_id);
}

async function AddLifxLightFromWeb(_id, lightName, apiKey, lightId){
    const user = await app().logIn(credentials());
    return await user.functions.AddLifxLightFromWeb(_id, lightName, apiKey, lightId);
}

async function AddMlbTeamFromWeb(_id, team){
    const user = await app().logIn(credentials());
    return await user.functions.AddMlbTeamFromWeb(_id, team);
}

async function RemoveLifxLightFromUser(_id, lightName){
    const user = await app().logIn(credentials());
    return await user.functions.RemoveLifxLightFromUser(_id, lightName);
}

async function RemoveMlbTeamFromUser(_id, team){
    const user = await app().logIn(credentials());
    return await user.functions.RemoveMlbTeamFromUser(_id, team);
}

async function GetDataFromToken(token){
    const user = await app().logIn(credentials());
    return await user.functions.GetDataFromToken(token);
}

async function GetUserFromWeb(_id){
    const user = await app().logIn(credentials());
    const res = await user.functions.GetUserFromWeb(_id);
    localStorage.setItem("userData", JSON.stringify(res));
    return res;
}

async function GetTeamsInLeague(leagueName){
    const user = await app().logIn(credentials());
    return await user.functions.GetTeamsInLeague(leagueName);
}

async function FlashLifxFromWeb(_id, lightId, color1, color2){
    const user = await app().logIn(credentials());
    return await user.functions.FlashLifxFromWeb(_id, lightId, color1, color2);
}

async function FlashLifxFromWebSearch(apiKey, lightId, color1, color2){
    const user = await app().logIn(credentials());
    return await user.functions.FlashLifxFromWebSearch(apiKey, lightId, color1, color2);
}

async function ListLifxLights(apiKey){
    const user = await app().logIn(credentials());
    return await user.functions.ListLifxLights(apiKey);
}

async function CaptureOrder(_id, orderId, selectedPlan){
    const user = await app().logIn(credentials());
    return await user.functions.CaptureOrder(_id, orderId, selectedPlan);
} 
async function CreateOrder(cart){
    const user = await app().logIn(credentials());
    return await user.functions.CreateOrder(cart);
} 
async function CaptureSubscription(subscriptionId, _id){
    const user = await app().logIn(credentials());
    return await user.functions.CaptureSubscription(subscriptionId, _id);
} 
async function UpdateUserTeamColors(_id, team, color1, color2){
    const user = await app().logIn(credentials());
    return await user.functions.UpdateUserTeamColors(_id, team, color1, color2)
}
async function GetTeamColors(team){
    const user = await app().logIn(credentials());
    return await user.functions.GetTeamColors(team)
}
async function AddDelayToLights(_id, delay){
    const user = await app().logIn(credentials());
    return await user.functions.AddDelayToLights(_id, delay)
    // DELAY IS A STRING
}



export { CreateUserFromWeb, AddLifxLightFromWeb, AddMlbTeamFromWeb, RemoveLifxLightFromUser, RemoveMlbTeamFromUser, GetDataFromToken, GetUserFromWeb, GetTeamsInLeague, FlashLifxFromWeb, FlashLifxFromWebSearch, ListLifxLights, CaptureOrder, CreateOrder, CaptureSubscription, UpdateUserTeamColors, GetTeamColors, AddDelayToLights }