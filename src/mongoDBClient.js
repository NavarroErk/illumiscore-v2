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

async function AddLifxLightFromWeb(_id, apiKey, lightId){
    const user = await app().logIn(credentials());
    return await user.functions.AddLifxLightFromWeb(_id, apiKey, lightId);
}

async function AddMlbTeamsFromWeb(_id, team){
    const user = await app().logIn(credentials());
    return await user.functions.AddMlbTeamsFromWeb(_id, team);
}

async function RemoveLifxLightFromWeb(_id, apiKey, lightId){
    const user = await app().logIn(credentials());
    return await user.functions.RemoveLifxLightFromWeb(_id, apiKey, lightId);
}

async function RemoveMlbTeamsFromWeb(_id, team){
    const user = await app().logIn(credentials());
    return await user.functions.RemoveMlbTeamsFromWeb(_id, team);
}

async function GetDataFromToken(token){
    const user = await app().logIn(credentials());
    return await user.functions.GetDataFromToken(token);
}

async function GetUserFromWeb(_id){
    const user = await app().logIn(credentials());
    return await user.functions.GetUserFromWeb(_id);
}

async function GetTeamsInLeague(leagueName){
    const user = await app().logIn(credentials());
    return await user.functions.GetTeamsInLeague(leagueName);
}


export { FlashTeamFromWeb, CreateUserFromWeb, AddLifxLightFromWeb, AddMlbTeamsFromWeb, RemoveLifxLightFromWeb, RemoveMlbTeamsFromWeb, GetDataFromToken, GetUserFromWeb, GetTeamsInLeague }