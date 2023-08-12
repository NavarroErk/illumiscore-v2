import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "data-xsksb" });
}

function credentials(){
    const apiKey =
      "eehr9IKwaVhUfgSkvu4FxohCIATY6avl7G5UKNWpjWggWlc4gyfBqTXBslUA5x90";
    return RealmWeb.Credentials.apiKey(apiKey);
}

async function FlashTeamFromWeb(teamName){
    const user = await app().logIn(credentials());
    return await user.functions.FlashTeamFromWeb(teamName);
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

async function FlashLifxFromWeb(apiKey, lightId, color1, color2){
    const user = await app().logIn(credentials());
    return await user.functions.FlashLifxFromWeb(apiKey, lightId, color1, color2);
}

async function ListLifxLights(apiKey){
    const user = await app().logIn(credentials());
    return await user.functions.ListLifxLights(apiKey);
}

async function CaptureOrder(_id, orderId){
    const user = await app().logIn(credentials());
    return await user.functions.CaptureOrder(_id, orderId);
} 
async function CreateOrder(cart){
    const user = await app().logIn(credentials());
    return await user.functions.CreateOrder(cart);
} 


export { FlashTeamFromWeb, CreateUserFromWeb, AddLifxLightFromWeb, AddMlbTeamFromWeb, RemoveLifxLightFromUser, RemoveMlbTeamFromUser, GetDataFromToken, GetUserFromWeb, GetTeamsInLeague, FlashLifxFromWeb, ListLifxLights, CaptureOrder, CreateOrder }