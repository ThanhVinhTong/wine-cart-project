import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { FilterProps } from "@/types";

export async function getWines(filters: FilterProps) {
    await initMongoose();

    const { producer, country, vintage, wine_type, limit } = filters;
    let queryString: any = {}
    let wines;

    if (producer !== '') {
        queryString.producer = producer;
    }
    if (country !== '') {
        queryString.country = country;
    }
    if (vintage !== '') {
        queryString.vintage = vintage;
    }
    if (wine_type !== '') {
        queryString.wine_type = wine_type;
    }

    console.log(queryString)
    if (Object.keys(queryString).length > 0) {
        wines = await Product.find(queryString).exec();
    } else {
        wines = await Product.find().exec();
    }

    wines = JSON.parse(JSON.stringify(wines))

    let limitWines = wines.slice(0, limit)

    console.log(`${wines!.length} wines found on the database but take only ${limitWines!.length}`)

    return limitWines;
}

export default getWines;