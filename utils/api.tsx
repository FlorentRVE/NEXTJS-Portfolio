const url: string = "http://localhost:1337/api/articles?populate=*";

export async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getDataById(id: number) {
    const res = await fetch(`http://localhost:1337/api/articles/${id}?populate=*`);
    const data = await res.json();
    return data;
}