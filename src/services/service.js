
export async function fetchStevenUniverse() {
    const req = await fetch("https://www.omdbapi.com/?apikey=58eeaad1&s=steven");
    const res = await req.json();
    console.log(res.Search[0]);
    return res.Search[0]

}

export async function fetchAvatar() {
    const req = await fetch("https://www.omdbapi.com/?apikey=58eeaad1&s=avatar")
    const res = await req.json();
    console.log(res.Search[2]);
    return res.Search[2];
}

export async function fetchAmazingWorldOfGumball() {
    const req = await fetch("https://www.omdbapi.com/?apikey=58eeaad1&s=gumball")
    const res = await req.json();
    console.log(res.Search[0])
    return res.Search[0];
}

export async function fetchAll() {
    const StevenUniverse = await fetchStevenUniverse()  
    const Avatar = await fetchAvatar()
    const Gumball = await fetchAmazingWorldOfGumball();
    const data = []
    data.push(StevenUniverse, Avatar, Gumball)
    return data
}

