let url = "https://dummyjson.com/quotes"



const muallif = async (url) =>{
    try{
        let res = await fetch(url)
        if(!res.ok){
            throw new Error("url xato")
        }
        let quotes = await res.json()
        let authorCount = {}

        // console.log(date);

        for(let quote of quotes.quotes){
            let author = quote.author
            if(author in authorCount){
                authorCount[author]++
            }else{
                authorCount[author] = 1
            }
        }
        let mostList = []
        let max = 0
        for(let author_ in authorCount){
            if (authorCount[author_] > max) {
                max = authorCount[author_]
                mostList = [author_]
            }
        }
        console.log(mostList);

    }catch(e){
        console.log(e);
    }
}


muallif(url)