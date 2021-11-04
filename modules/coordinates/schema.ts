import { entitiesWrapSchema } from "../../global/schema/entities"
import { queryParamsSchema } from "../../global/schema/query_params"


export const itemCoordinatesSchema = {
    id: { type: "number" },
    vehicleId: { type: "string" },
    latitude: { type: "number" },
    longitude: { type: "number" },
    created_at: { type: "string", format: "date" },
    updated_at: { type: "string", format: "date" },
}

export const coordinatesSchema = {
    summary: "coordinates",
    description: "coordinates",
    tags: ["coordinates"],
    querystring: {
        type: 'object',
        properties: {
            ...{vehicleId: { type: "string" }},
            ...queryParamsSchema,
            ...{
                start:
                {
                    type: "string",
                    format: "date"
                },
                end:
                {
                    type: "string",
                    format: "date"
                }
            }
        }
    }, response: {
        200: {
            type: "object",
            properties: entitiesWrapSchema(itemCoordinatesSchema)
        }
    }
}