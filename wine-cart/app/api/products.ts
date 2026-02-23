import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { FilterProps } from "@/types";

export async function getWines(filters: FilterProps) {
    await initMongoose();

    const { producer, country, vintage, wine_type, limit } = filters;
    let queryString: any = {}
    const normalizedLimit = Number(limit) || 10;
    const projection = {
        wine_id: 1,
        appellation: 1,
        producer: 1,
        region: 1,
        country: 1,
        vintage: 1,
        wine_type: 1,
        grape_variety: 1,
        alcohol_content: 1,
        volume: 1,
        image_filename: 1,
        price: 1,
        description: 1,
    };

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

    const wines = await Product.find(queryString, projection).limit(normalizedLimit).lean().exec();
    const serializedWines = wines.map((wine: any) => ({
        ...wine,
        _id: wine._id?.toString?.() ?? wine._id,
    }));
    return serializedWines;
}

export default getWines;